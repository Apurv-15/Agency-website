import { useEffect, useRef, useState, useCallback } from 'react';
import * as MP4Box from 'mp4box';

const LERP_TAU = 18; // Snappy, responsive lerp tracking
const SNAP = 0.001;
const WATCHDOG = 30000;

interface FrameItem {
  ts: number; // in microseconds
  bitmap: ImageBitmap;
}

export interface UseVideoScrubOptions {
  videoSrc: string;
  containerRef: React.RefObject<HTMLElement | null>;
  startProgress?: number;
}

export interface UseVideoScrubReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  scrollProgress: number;
  canvasLive: boolean;
  duration: number;
}

// Helper to extract decoder description from mp4box track
function getTrackDescription(trak: any): Uint8Array | undefined {
  try {
    const entry = trak?.mdia?.minf?.stbl?.stsd?.entries?.[0];
    if (!entry) return undefined;

    const box = entry.avcC || entry.hvcC || entry.vpcC || entry.av1C;
    if (!box) return undefined;

    const stream = new (MP4Box as any).DataStream(undefined, 0, (MP4Box as any).DataStream.BIG_ENDIAN);
    box.write(stream);
    // Remove the 8-byte box header (size + type)
    return new Uint8Array(stream.buffer, 8);
  } catch {
    return undefined;
  }
}

export function useVideoScrub({ videoSrc, containerRef, startProgress = 0 }: UseVideoScrubOptions): UseVideoScrubReturn {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canvasLive, setCanvasLive] = useState(false);
  const [duration, setDuration] = useState(0);

  // Scrubbing & decoding state refs
  const bankRef = useRef<FrameItem[]>([]);
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const durationRef = useRef(0);
  const readyRef = useRef(false);
  const paintedRef = useRef(false);
  const buildingRef = useRef(false);
  const revertedRef = useRef(false);
  const lastReportedProgressRef = useRef(-1);
  const lastDrawnIndexRef = useRef(-1);

  // Compute scroll progress p = clamp(0, 1, (-rect.top) / (containerHeight - innerHeight))
  const computeProgress = useCallback((): number => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    const scrolledInside = -rect.top;
    const p = scrolledInside / maxScroll;
    return Math.max(0, Math.min(1, p));
  }, [containerRef]);

  // Handle duration from video element metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        durationRef.current = video.duration;
        setDuration(video.duration);
      }
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    if (video.duration && !isNaN(video.duration)) {
      onLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  // Frame Bank Extraction using WebCodecs & MP4Box with direct GPU ImageBitmap
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('VideoDecoder' in window) || buildingRef.current) {
      return;
    }

    buildingRef.current = true;
    let isCancelled = false;
    let decoder: VideoDecoder | null = null;
    let watchdogTimer: NodeJS.Timeout | null = null;

    const startWatchdog = () => {
      watchdogTimer = setTimeout(() => {
        if (!paintedRef.current) {
          revertedRef.current = true;
          setCanvasLive(false);
        }
      }, WATCHDOG);
    };

    const buildFrameBank = async (
      hardwareAcceleration: 'no-preference' | 'prefer-hardware' | 'prefer-software' = 'prefer-hardware'
    ) => {
      try {
        startWatchdog();

        const response = await fetch(videoSrc, { mode: 'cors' });
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const buffer = await response.arrayBuffer();

        if (isCancelled) return;

        const mp4boxfile = MP4Box.createFile();

        let trackInfo: any = null;
        let lastFrameTimestamp = -1;
        const MIN_FRAME_INTERVAL_US = 50000; // ~50ms interval (~20fps) for fast decoding & ultra-smooth scrub

        const initDecoder = (codec: string, description?: Uint8Array) => {
          decoder = new VideoDecoder({
            output: async (frame: VideoFrame) => {
              if (isCancelled) {
                frame.close();
                return;
              }

              // Sample frames so extraction is lightweight, lightning-fast, and memory-friendly
              if (
                lastFrameTimestamp !== -1 &&
                frame.timestamp - lastFrameTimestamp < MIN_FRAME_INTERVAL_US
              ) {
                frame.close();
                return;
              }

              lastFrameTimestamp = frame.timestamp;

              try {
                // Direct GPU accelerated ImageBitmap creation (instant, 0 CPU blob encoding)
                const bitmap = await createImageBitmap(frame);
                frame.close();

                if (!isCancelled) {
                  bankRef.current.push({
                    ts: lastFrameTimestamp,
                    bitmap,
                  });

                  if (bankRef.current.length >= 8 && !readyRef.current) {
                    readyRef.current = true;
                  }
                } else {
                  bitmap.close();
                }
              } catch (err) {
                frame.close();
                console.warn('Frame bitmap creation error:', err);
              }
            },
            error: async (err: Error) => {
              console.warn('VideoDecoder error:', err);
              if (hardwareAcceleration !== 'prefer-software') {
                decoder?.close();
                buildFrameBank('prefer-software');
              } else {
                revertedRef.current = true;
              }
            },
          });

          const config: VideoDecoderConfig = {
            codec,
            hardwareAcceleration,
          };
          if (description) {
            config.description = description;
          }

          decoder.configure(config);
        };

        mp4boxfile.onReady = (info: MP4Box.MP4Info) => {
          if (isCancelled || info.videoTracks.length === 0) return;

          trackInfo = info.videoTracks[0];
          const durSec = info.duration / info.timescale;
          if (durSec > 0 && !durationRef.current) {
            durationRef.current = durSec;
            setDuration(durSec);
          }

          const trak = (mp4boxfile as any).getTrackById(trackInfo.id);
          const description = getTrackDescription(trak);

          initDecoder(trackInfo.codec, description);

          mp4boxfile.setExtractionOptions(trackInfo.id, null, {
            nbSamples: 100,
            rapAlignment: true,
          });
          mp4boxfile.start();
        };

        mp4boxfile.onSamples = async (track_id: number, _ref: any, samples: MP4Box.MP4Sample[]) => {
          if (isCancelled || !decoder) return;

          for (const sample of samples) {
            if (decoder.state !== 'configured') break;

            const chunk = new EncodedVideoChunk({
              type: sample.is_sync ? 'key' : 'delta',
              timestamp: (1e6 * sample.cts) / sample.timescale,
              duration: (1e6 * sample.duration) / sample.timescale,
              data: sample.data,
            });

            decoder.decode(chunk);
          }
        };

        mp4boxfile.onError = (e: string) => {
          console.warn('MP4Box error:', e);
          revertedRef.current = true;
        };

        const fileBuffer = buffer as ArrayBuffer & { fileStart?: number };
        fileBuffer.fileStart = 0;
        mp4boxfile.appendBuffer(fileBuffer);
        mp4boxfile.flush();

        await decoder?.flush();
        bankRef.current.sort((a, b) => a.ts - b.ts);
        if (bankRef.current.length > 0) {
          readyRef.current = true;
        }
      } catch (err) {
        console.warn('WebCodecs frame extraction failed, falling back:', err);
        revertedRef.current = true;
      }
    };

    const onLoad = () => {
      buildFrameBank('prefer-hardware');
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      isCancelled = true;
      if (watchdogTimer) clearTimeout(watchdogTimer);
      window.removeEventListener('load', onLoad);
      try {
        if (decoder && decoder.state !== 'closed') {
          decoder.close();
        }
      } catch {}
      bankRef.current.forEach((item) => item.bitmap?.close());
      bankRef.current = [];
    };
  }, [videoSrc]);

  // Binary search to find nearest frame index
  const findNearestFrameIndex = (targetTsMicroseconds: number): number => {
    const bank = bankRef.current;
    if (bank.length === 0) return -1;
    let low = 0;
    let high = bank.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (bank[mid].ts < targetTsMicroseconds) {
        low = mid + 1;
      } else if (bank[mid].ts > targetTsMicroseconds) {
        high = mid - 1;
      } else {
        return mid;
      }
    }

    if (low >= bank.length) return bank.length - 1;
    if (high < 0) return 0;
    return Math.abs(bank[low].ts - targetTsMicroseconds) < Math.abs(bank[high].ts - targetTsMicroseconds)
      ? low
      : high;
  };

  // rAF Loop for smooth 60-120fps scrubbing without React re-render thrashing
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cache 2D context with hardware optimization flags
    let ctx2d: CanvasRenderingContext2D | null = null;

    const frameLoop = (time: number) => {
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;
      const dt = Math.min(0.05, deltaSeconds);

      const p = computeProgress();

      // Only trigger React state updates when progress changes noticeably
      // This prevents 60-120 unnecessary React tree re-renders per second!
      if (Math.abs(p - lastReportedProgressRef.current) > 0.0008) {
        lastReportedProgressRef.current = p;
        setScrollProgress(p);
      }

      const dur = durationRef.current || videoRef.current?.duration || 0;
      if (dur > 0) {
        const startP = startProgress || 0;
        const videoP = p <= startP ? 0 : Math.min(1, (p - startP) / (1 - startP));
        const target = videoP * dur;
        targetTimeRef.current = target;

        if (prefersReducedMotion) {
          currentTimeRef.current = target;
        } else {
          currentTimeRef.current += (target - currentTimeRef.current) * (1 - Math.exp(-dt * LERP_TAU));
          if (Math.abs(target - currentTimeRef.current) < SNAP) {
            currentTimeRef.current = target;
          }
        }

        const currentSec = currentTimeRef.current;

        // Try Canvas Frame Draw directly from pre-cached ImageBitmaps
        if (readyRef.current && !revertedRef.current && bankRef.current.length > 0) {
          const targetTs = currentSec * 1e6;
          const idx = findNearestFrameIndex(targetTs);

          if (idx !== -1 && idx !== lastDrawnIndexRef.current) {
            lastDrawnIndexRef.current = idx;
            const item = bankRef.current[idx];
            const canvas = canvasRef.current;

            if (canvas && item && item.bitmap) {
              if (!ctx2d) {
                ctx2d = canvas.getContext('2d', { alpha: false, desynchronized: true });
              }

              if (ctx2d) {
                ctx2d.drawImage(item.bitmap, 0, 0, canvas.width, canvas.height);
                if (!paintedRef.current) {
                  paintedRef.current = true;
                  setCanvasLive(true);
                }
              }
            }
          }
        } else {
          // Fallback: Seek video element directly with fastSeek if available
          const video = videoRef.current;
          if (video && !video.seeking && Math.abs(video.currentTime - currentSec) > 0.02) {
            if (typeof (video as any).fastSeek === 'function') {
              (video as any).fastSeek(currentSec);
            } else {
              video.currentTime = currentSec;
            }
          }
        }
      }

      animId = requestAnimationFrame(frameLoop);
    };

    animId = requestAnimationFrame(frameLoop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [computeProgress]);

  // Window resize and orientation change handlers
  useEffect(() => {
    const handleResize = () => {
      const p = computeProgress();
      lastReportedProgressRef.current = p;
      setScrollProgress(p);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [computeProgress]);

  return {
    videoRef,
    canvasRef,
    scrollProgress,
    canvasLive,
    duration,
  };
}

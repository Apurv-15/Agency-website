import React, { useEffect, useRef, useState } from "react";
import spritesheetData from "../data/spritesheet.json";
import spritesheetImg from "../data/spritesheet_1920x1080.webp";

interface SpriteSequenceProps {
  duration?: number; // Duration in seconds (default: 3.2s)
  onComplete?: () => void;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export default function SpriteSequence({
  duration = 3.2,
  onComplete,
  className = "",
  autoplay = true,
  loop = false,
}: SpriteSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const { totalFrames, cols, frameWidth, frameHeight } = spritesheetData;

  // Preload 1080p sprite sheet image
  useEffect(() => {
    const img = new Image();
    img.src = spritesheetImg;
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
    };
    return () => {
      img.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!imageLoaded || !autoplay) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Enable high-quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const totalDurationMs = duration * 1000;

    const renderFrame = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const progress = Math.min(elapsed / totalDurationMs, 1);
      const currentFrameIndex = Math.min(
        Math.floor(progress * totalFrames),
        totalFrames - 1
      );

      // Calculate grid column and row in the 8x12 grid
      const col = currentFrameIndex % cols;
      const row = Math.floor(currentFrameIndex / cols);

      const sx = col * frameWidth;
      const sy = row * frameHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (imageRef.current) {
        ctx.drawImage(
          imageRef.current,
          sx,
          sy,
          frameWidth,
          frameHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(renderFrame);
      } else {
        if (loop) {
          startTimeRef.current = null;
          animFrameIdRef.current = requestAnimationFrame(renderFrame);
        } else if (onComplete) {
          onComplete();
        }
      }
    };

    animFrameIdRef.current = requestAnimationFrame(renderFrame);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [imageLoaded, autoplay, duration, loop, onComplete, totalFrames, cols, frameWidth, frameHeight]);

  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        width={frameWidth}
        height={frameHeight}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}


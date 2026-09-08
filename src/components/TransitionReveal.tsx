import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ArrowDown, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_URL = "https://cdn.sanity.io/files/jkwxe35s/production/bfb0bbb15ae3b25cda805461dc6aafafd0e531f9.mp4";

export default function TransitionReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textHeaderRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isOverButton, setIsOverButton] = useState(false);

  useEffect(() => {
    // QuickTo for 120fps ultra-smooth cursor following physics
    const cursor = cursorFollowerRef.current;
    if (!cursor) return;

    const setX = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3" });
    const setY = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!containerRef.current || !stickyRef.current || !videoWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: stickyRef.current,
          pinSpacing: true,
        },
      });

      // ── Scroll indicator fades out immediately upon scrolling ──
      tl.to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 20,
          ease: "power2.out",
          duration: 0.1,
        },
        0
      );

      // ── BEAT 1 (0% → 30%): Text UI moves out, video expands to TRUE 100vw x 100vh FULL SCREEN ──
      tl.to(
        textHeaderRef.current,
        {
          opacity: 0,
          y: -80,
          ease: "power2.out",
          duration: 0.25,
        },
        0
      );

      tl.to(
        statsRowRef.current,
        {
          opacity: 0,
          y: 60,
          ease: "power2.out",
          duration: 0.25,
        },
        0.02
      );

      tl.to(
        videoWrapperRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          ease: "power2.inOut",
          duration: 0.35,
        },
        0.02
      );

      // ── BEAT 2 (35% → 60%): FULL SCREEN HOLD ──
      // Video occupies 100% edge-to-edge window full screen while scrolling

      // ── BEAT 3 (60% → 100%): Video eases out into rounded card ──
      tl.to(
        videoWrapperRef.current,
        {
          width: "82vw",
          height: "58vh",
          borderRadius: "32px",
          ease: "power3.inOut",
          duration: 0.35,
        },
        0.6
      );

      // "Play Reel" pill button fades in on the eased-out card
      tl.fromTo(
        playButtonRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "back.out(1.7)" },
        0.78
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollClick = () => {
    if (containerRef.current) {
      const targetScroll = containerRef.current.offsetTop + window.innerHeight * 0.8;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[320vh] bg-transparent text-black"
      onMouseEnter={() => setIsCursorVisible(true)}
      onMouseLeave={() => setIsCursorVisible(false)}
    >
      {/* ── Custom Interactive Follower Cursor (Scroll Down Pill) ── */}
      <div
        ref={cursorFollowerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-opacity duration-300 ${
          isCursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border shadow-2xl transition-all duration-200 ${
            isOverButton
              ? "bg-white/90 text-black border-black/10 scale-90"
              : "bg-black/80 text-white border-white/20 scale-100"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
          <span className="text-[11px] font-bold font-inter tracking-wider uppercase whitespace-nowrap">
            {isOverButton ? "Click" : "Scroll Down"}
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent-amber" />
        </div>
      </div>

      {/* Sticky Viewport Container */}
      <div
        ref={stickyRef}
        className="w-full h-screen sticky top-0 overflow-hidden bg-transparent flex items-center justify-center"
      >
        {/* Top Section Headline */}
        <div
          ref={textHeaderRef}
          className="absolute top-8 sm:top-12 left-0 right-0 w-full max-w-[1240px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 z-30 select-none pointer-events-none"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] font-geist">
            EVERY FRAME <br /> MATTERS
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] font-geist md:text-right">
            EDIT & CREATE <br /> WITH US
          </h2>
        </div>

        {/* Dynamic Video Showcase - Absolutely centered, expands to 100vw x 100vh full screen, then shrinks to rounded card & scrolls naturally */}
        <div
          ref={videoWrapperRef}
          className="absolute z-20 overflow-hidden bg-neutral-900 shadow-2xl flex items-center justify-center will-change-transform group cursor-none"
          style={{
            width: "88vw",
            height: "62vh",
            borderRadius: "32px",
          }}
        >
          {/* Auto-playing muted looping video */}
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-[50%_50%] select-none pointer-events-none [transform:translate3d(0px,0px,0px)] [backface-visibility:hidden]"
          />

          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* ── Ambient Floating Scroll Down Cue Badge at Center Bottom of Video ── */}
          <div
            ref={scrollIndicatorRef}
            onClick={handleScrollClick}
            onMouseEnter={() => setIsOverButton(true)}
            onMouseLeave={() => setIsOverButton(false)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-auto select-none group/scroll"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white shadow-lg transition-all duration-300 group-hover/scroll:scale-105 group-hover/scroll:border-white/40">
              {/* Minimal mouse pill graphic */}
              <div className="w-3.5 h-5 rounded-full border border-white/70 flex justify-center pt-1">
                <div className="w-1 h-1.5 bg-white rounded-full animate-scroll-bounce" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider font-geist uppercase text-white/90">
                Scroll to Expand
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover/scroll:translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Floating 'Play Reel' Pill Button (Visible when video eases out into rounded card) */}
          <div
            ref={playButtonRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 opacity-0 pointer-events-auto"
            onMouseEnter={() => setIsOverButton(true)}
            onMouseLeave={() => setIsOverButton(false)}
          >
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                }
              }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-black/80 hover:bg-black backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide transition-all shadow-2xl cursor-pointer select-none group active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
              <span>Play Reel</span>
            </button>
          </div>
        </div>

        {/* Stats Row at Bottom */}
        <div
          ref={statsRowRef}
          className="absolute bottom-8 sm:bottom-10 left-0 right-0 w-full max-w-[1240px] mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-neutral-800 border-t border-neutral-200/80 pt-4 z-30 select-none pointer-events-none"
        >
          <div>357% average client value growth</div>
          <div className="sm:text-center">7 unicorns and counting</div>
          <div className="sm:text-right">$10B+ raised by portfolio companies</div>
        </div>
      </div>
    </section>
  );
}


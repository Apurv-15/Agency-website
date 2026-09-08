import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ChevronUp,
  ArrowUpRight,
  Sparkles,
  Layers,
  Monitor,
  Code2,
  Smartphone,
  BarChart3,
  Bot,
  Star,
} from 'lucide-react';
import { useVideoScrub } from '../useVideoScrub';

const DARK = '#1D3045';
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4';

interface StaggerItemProps {
  visible: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StaggerItem: React.FC<StaggerItemProps> = ({
  visible,
  delay = 0,
  className = '',
  children,
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default function CloudVideoScrubSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { videoRef, canvasRef, scrollProgress, canvasLive } = useVideoScrub({
    videoSrc: VIDEO_URL,
    containerRef,
    startProgress: 0,
  });

  const p = scrollProgress;

  // ═══════════════════════════════════════════════════════════════════
  // SEQUENTIAL SCROLL SCENES:
  // Scene 1: 3D Perspective Agency Headline & Depth Layers (p < 0.40)
  // Scene 2: Agency Manifesto with Scroll Text-Fill (0.42 <= p < 0.76)
  // Scene 3: Dark Peak Flight & Studio CTA (p >= 0.80)
  // ═══════════════════════════════════════════════════════════════════

  // Scene 1: 3D Fly-through zoom into the mountain clouds
  const s1Scale = 1 + Math.min(0.25, p * 0.6);
  const s1Opacity = p < 0.28 ? 1 : Math.max(0, 1 - (p - 0.28) / 0.12);

  const s2Opacity =
    p < 0.42
      ? 0
      : p < 0.52
      ? (p - 0.42) / 0.10
      : p < 0.74
      ? 1
      : Math.max(0, 1 - (p - 0.74) / 0.08);

  const s3Opacity = p < 0.80 ? 0 : p < 0.88 ? (p - 0.80) / 0.08 : 1;

  const s1Visible = s1Opacity > 0.05;
  const s2Visible = s2Opacity > 0.15;
  const s3Visible = s3Opacity > 0.15;

  // Scene 2 text scroll-fill progress (from 0.48 to 0.70)
  const scene2FillProgress = Math.max(0, Math.min(1, (p - 0.48) / 0.22));
  const MANIFESTO_WORDS = [
    'WE',
    'CRAFT',
    'DIGITAL',
    'EXPERIENCES',
    'WITH',
    'VISION',
    'AND',
    'PRECISION',
  ];

  // Gyro mouse tracking for 3D perspective tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#FAF9F6]">
      {/* Sticky Fullscreen Cloud Video Scrub Track */}
      <div className="sticky top-0 w-full h-screen overflow-hidden select-none">
        
        {/* Soft atmospheric background vignette overlay & superdesign fine dotted grid */}
        <div className="absolute inset-0 z-[1] bg-radial from-transparent via-white/10 to-white/30 pointer-events-none" />
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: 'radial-gradient(rgb(0, 0, 0) 0.6px, rgba(0, 0, 0, 0) 1.4px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* 1) Video Element with reduced contrast by ~25% for soft editorial atmosphere */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu will-change-transform filter contrast-[0.78] brightness-[1.04] opacity-[0.92]"
        />

        {/* 2) Canvas for Decoded Frame Scrubbing */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transform-gpu will-change-transform filter contrast-[0.78] brightness-[1.04] opacity-[0.92] transition-opacity duration-300 ${
            canvasLive ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 3) Dynamic Text & Card Overlays Floating On Top of Clouds */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
          
          {/* ═══════════════════════════════════════════════════════════════════
              SCENE 1: /superdesign SWISS-GRID EDITORIAL HERO OVERLAY
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            onMouseMove={handleMouseMove}
            className="absolute inset-0 flex flex-col items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 pointer-events-none select-none"
            style={{
              opacity: s1Opacity,
              transform: `perspective(1200px) scale(${s1Scale}) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg)`,
              transition: 'opacity 0.2s ease-out, transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
              willChange: 'transform, opacity',
            }}
          >
            {/* Superdesign Edge-to-Edge 60px Navbar Bar */}
            <div className="w-full max-w-[1360px] h-[60px] flex items-center justify-between relative z-20">
              <StaggerItem visible={s1Visible} delay={0}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-geist font-semibold text-xs tracking-tight shadow-xs">
                    G
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs sm:text-[13px] font-geist font-semibold tracking-tight text-black">
                      GREFFON
                    </span>
                  </div>
                </div>
              </StaggerItem>

              {/* Center Navigation Links (Editorial Swiss Grid) */}
              <StaggerItem visible={s1Visible} delay={30} className="hidden md:block">
                <nav className="flex items-center gap-8 text-[13px] font-geist font-medium text-[#5E5E5E] pointer-events-auto">
                  <a href="#services" className="hover:text-black transition-colors">Services</a>
                  <a href="#projects" className="hover:text-black transition-colors">Work</a>
                  <a href="#about" className="hover:text-black transition-colors">About</a>
                  <a href="#contact" className="hover:text-black transition-colors">Contact</a>
                </nav>
              </StaggerItem>

              {/* Superdesign Nav CTA Button (Smaller Black Pill ~40px Height) */}
              <StaggerItem visible={s1Visible} delay={60}>
                <a
                  href="#contact"
                  className="pointer-events-auto inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-black text-white text-xs font-geist font-medium hover:bg-neutral-800 transition-all shadow-xs cursor-pointer group"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              </StaggerItem>
            </div>

            {/* Subtle Depth Watermark Floating in Deep Z-Space Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.03] select-none">
              <span className="text-[70px] sm:text-[130px] md:text-[170px] lg:text-[210px] font-geist font-bold tracking-[-0.04em] uppercase whitespace-nowrap text-black block">
                GREFFON
              </span>
            </div>

            {/* Center Stage: /superdesign Editorial Typography & CTA Cluster */}
            <div className="max-w-[1080px] w-full text-center my-auto relative z-10 flex flex-col items-center pt-2 pb-4">
              

              {/* /superdesign Display Headline */}
              <StaggerItem visible={s1Visible} delay={140}>
                <h1 className="text-[42px] sm:text-[62px] md:text-[74px] lg:text-[82px] font-geist font-normal text-black tracking-[-2px] sm:tracking-[-3.4px] leading-[1.08] mb-5 sm:mb-6 text-center">
                  Websites That Turn <br className="hidden sm:inline" />
                  Visitors Into <span className="font-serif-italic font-normal tracking-normal text-[1.14em] text-neutral-900 inline-block px-1">Clients.</span>
                </h1>
              </StaggerItem>

              {/* Sub-headline Narrative */}
              <StaggerItem visible={s1Visible} delay={190}>
                <p className="max-w-xl mx-auto text-sm sm:text-base md:text-[17px] text-[#5E5E5E] font-geist font-normal leading-[1.6] mb-8 sm:mb-9 px-4">
                  We build high-converting websites and digital experiences that establish instant trust and grow your revenue on autopilot.
                </p>
              </StaggerItem>

              {/* Primary Pill Button + Stacked-Avatar Trust Cluster */}
              <StaggerItem visible={s1Visible} delay={240}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 pointer-events-auto mb-6 sm:mb-8">
                  
                  {/* Primary & Secondary Pill Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-geist font-medium hover:bg-neutral-800 transition-all shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)] hover:scale-[1.02] cursor-pointer group"
                    >
                      <span>Get More Clients</span>
                      <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
                    </a>

                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-[#D6D6D6] text-black text-xs sm:text-sm font-geist font-medium hover:bg-white hover:border-neutral-400 transition-all shadow-xs hover:scale-[1.02] cursor-pointer"
                    >
                      <span>See Our Results</span>
                      <ArrowUpRight size={13} className="text-neutral-500" />
                    </a>
                  </div>

                  {/* Vertical Hairline Divider */}
                  <div className="hidden sm:block w-px h-8 bg-[#D6D6D6]" />

                  {/* Stacked-Avatar Trust Cluster (from design.md lines 124 & 143) */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                        alt="Client 1"
                      />
                      <img
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                        alt="Client 2"
                      />
                      <img
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                        alt="Client 3"
                      />
                      <img
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                        alt="Client 4"
                      />
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] font-inter font-bold shadow-xs">
                        +40
                      </div>
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1 text-[#E0A533]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill="#E0A533" strokeWidth={0} />
                        ))}
                        <span className="text-[11.5px] font-inter font-bold text-black ml-1">5.0</span>
                      </div>
                      <span className="text-[11px] font-inter font-bold text-[#5E5E5E]">
                        Trusted by founders
                      </span>
                    </div>
                  </div>

                </div>
              </StaggerItem>

              {/* Nanum Pen Script Hand-drawn Micro Accent */}
              <StaggerItem visible={s1Visible} delay={280}>
                <div className="inline-flex items-center gap-2 text-neutral-600 select-none mb-3">
                  <span className="font-script text-[20px] sm:text-[22px] rotate-[-2deg]">
                    scroll to explore the clouds & manifesto
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-neutral-500 animate-bounce"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              </StaggerItem>

              {/* Partner Brand Logos Strip */}
              <StaggerItem visible={s1Visible} delay={300}>
                <div className="flex items-center justify-center gap-7 sm:gap-11 opacity-60 hover:opacity-90 transition-opacity pointer-events-auto">
                  <div className="flex items-center gap-2 text-black font-semibold text-xs tracking-tight">
                    <svg className="w-5 h-5" viewBox="0 0 30 31" fill="none">
                      <rect x="2" y="2.5" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="19.5" cy="10.5" r="2.8" fill="currentColor" />
                    </svg>
                    <span>logoipsum</span>
                  </div>
                  <div className="flex items-center gap-2 text-black font-semibold text-xs tracking-tight">
                    <svg className="w-4 h-5" viewBox="0 0 25 30" fill="none">
                      <rect x="1.5" y="2" width="7" height="26" rx="3.5" fill="currentColor" />
                      <path d="M12.5 15C12.5 8.37 17.87 3 24.5 3V27C17.87 27 12.5 21.63 12.5 15Z" fill="currentColor" />
                    </svg>
                    <span>logoipsum</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-black font-semibold text-xs tracking-tight">
                    <svg className="w-5 h-5" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M7 14C7 10.13 10.13 7 14 7C17.87 7 21 10.13 21 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span>logoipsum</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-black font-semibold text-xs tracking-tight">
                    <svg className="w-5 h-5" viewBox="0 0 28 25.5" fill="none">
                      <path d="M2 10.5C6 4 10 4 14 10.5C18 17 22 17 26 10.5V5.5C22 12 18 12 14 5.5C10 -1 6 -1 2 5.5V10.5Z" fill="currentColor" />
                      <path d="M2 17.5C6 11 10 11 14 17.5C18 24 22 24 26 17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span>logoipsum</span>
                  </div>
                </div>
              </StaggerItem>

            </div>

            {/* Bottom Metadata & Carousel Bar */}
            <div className="w-full max-w-[1360px] flex items-center justify-between text-xs relative z-20 pt-2">
              <StaggerItem visible={s1Visible} delay={320}>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5E5E5E] uppercase">
                    01 / 03 · CLOUD ASCENT
                  </span>
                  <span className="hidden sm:inline-block w-8 h-px bg-[#D6D6D6]" />
                  <span className="hidden sm:inline-block text-[11px] font-geist text-neutral-400">
                    Interactive Canvas Scrubbing
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem visible={s1Visible} delay={360}>
                <div className="flex items-center gap-3 pointer-events-auto">
                  <span className="hidden sm:inline-block font-script text-xl text-neutral-500">
                    read manifesto ↴
                  </span>
                  <button
                    onClick={() => {
                      if (containerRef.current) {
                        const targetOffset = containerRef.current.offsetTop + window.innerHeight * 1.5;
                        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
                      }
                    }}
                    aria-label="Scroll to manifesto"
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#D6D6D6] text-black hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer hover:scale-105"
                  >
                    <ArrowDown size={13} />
                  </button>
                </div>
              </StaggerItem>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              SCENE 2: /superdesign Agency Manifesto with Scroll Text-Fill Animation
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 pointer-events-none"
            style={{
              opacity: s2Opacity,
              transition: 'opacity 0.15s ease-out',
            }}
          >
            <div className="max-w-[960px] w-full text-center">
              <StaggerItem visible={s2Visible} delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#D6D6D6] shadow-xs mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
                  <span className="text-[10.5px] font-inter font-bold tracking-[0.2em] uppercase text-neutral-700">
                    Our Philosophy
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem visible={s2Visible} delay={60}>
                <h2 className="text-[clamp(2.2rem,5.4vw,5.5rem)] font-geist font-light tracking-[-0.03em] leading-[1.18] text-center uppercase flex flex-wrap justify-center items-center gap-x-[0.28em] gap-y-[0.1em] max-w-[980px] mx-auto select-none">
                  {MANIFESTO_WORDS.map((word, idx) => {
                    const start = idx / MANIFESTO_WORDS.length;
                    const end = (idx + 1) / MANIFESTO_WORDS.length;
                    const raw = (scene2FillProgress - start) / (end - start);
                    const wordProgress = Math.max(0, Math.min(1, raw));
                    const fillPercent = Math.round(wordProgress * 100);

                    return (
                      <span
                        key={idx}
                        className="inline-block transition-[background] duration-75"
                        style={{
                          backgroundImage: `linear-gradient(90deg, #000000 ${fillPercent}%, rgba(0, 0, 0, 0.18) ${fillPercent}%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          willChange: 'background-image',
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h2>
              </StaggerItem>
            </div>

            {/* Indicator dots */}
            <div
              className={`absolute bottom-12 right-6 sm:right-10 flex flex-col items-center gap-3 ${
                s2Visible ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <StaggerItem visible={s2Visible} delay={200}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#000000]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                </div>
              </StaggerItem>

              <StaggerItem visible={s2Visible} delay={350}>
                <button
                  aria-label="Scroll up"
                  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#D6D6D6] flex items-center justify-center text-black transition-all hover:scale-105 hover:bg-black hover:text-white shadow-xs cursor-pointer mt-1"
                  onClick={() => {
                    if (containerRef.current) {
                      const rect = containerRef.current.getBoundingClientRect();
                      window.scrollTo({
                        top: window.scrollY + rect.top,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <ChevronUp size={15} />
                </button>
              </StaggerItem>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              SCENE 3: /superdesign Dark Peak Flight & Studio CTA
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-20 lg:px-32 pointer-events-none"
            style={{
              opacity: s3Opacity,
              transition: 'opacity 0.15s ease-out',
            }}
          >
            <div className="max-w-2xl text-left">
              <StaggerItem visible={s3Visible} delay={0}>
                <p className="text-white/70 text-xs tracking-[0.2em] mb-4 font-inter font-bold uppercase">
                  Design & Engineering Studio
                </p>
              </StaggerItem>

              <StaggerItem visible={s3Visible} delay={120}>
                <h2 className="text-[clamp(2.4rem,4.8vw,4.4rem)] font-geist font-light text-white leading-[1.12] tracking-[-0.03em] mb-8">
                  Scaling your vision,
                  <br />
                  <span className="font-normal text-white">engineering what's next.</span>
                </h2>
              </StaggerItem>

              <StaggerItem visible={s3Visible} delay={240}>
                <div
                  className={`flex items-center gap-4 ${
                    s3Visible ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-geist font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md cursor-pointer"
                  >
                    <span>Start A Project</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </StaggerItem>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

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
              SCENE 1: SWISS-GRID EDITORIAL HERO OVERLAY (LEFT ALIGNED)
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            onMouseMove={handleMouseMove}
            className="absolute inset-0 flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 pointer-events-none select-none"
            style={{
              opacity: s1Opacity,
              transform: `perspective(1200px) scale(${s1Scale}) rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)`,
              transition: 'opacity 0.2s ease-out, transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
              willChange: 'transform, opacity',
            }}
          >
            {/* Top Spacer to account for sticky header */}
            <div className="w-full max-w-[1440px] mx-auto h-[60px]" />

            {/* Main Left-Aligned Hero Content */}
            <div className="w-full max-w-[1440px] mx-auto my-auto relative z-10 flex items-center justify-between pt-2 pb-4">
              
              {/* Left Column: Eyebrow + Headline + Subtext + CTA/Trust + Logos */}
              <div className="max-w-[720px] w-full text-left flex flex-col items-start">
                
                {/* Eyebrow / Tagline */}
                <StaggerItem visible={s1Visible} delay={90}>
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <span className="w-8 sm:w-10 h-[1.5px] bg-neutral-400 inline-block" />
                    <span className="text-[10.5px] sm:text-[11.5px] font-geist font-semibold tracking-[0.18em] text-[#6E6E6E] uppercase">
                      Digital Experiences For Ambitious Brands
                    </span>
                  </div>
                </StaggerItem>

                {/* Display Headline */}
                <StaggerItem visible={s1Visible} delay={140}>
                  <h1 className="text-[44px] sm:text-[64px] md:text-[76px] lg:text-[88px] font-geist font-normal text-[#0F1115] tracking-[-0.035em] leading-[1.04] mb-5 sm:mb-6 text-left">
                    Websites That Turn <br />
                    Visitors Into <span className="font-serif-italic font-normal italic tracking-tight text-[1.14em] text-[#111] inline-block px-1">Clients.</span>
                  </h1>
                </StaggerItem>

                {/* Sub-headline Narrative */}
                <StaggerItem visible={s1Visible} delay={190}>
                  <p className="max-w-[540px] text-sm sm:text-base md:text-[16.5px] text-[#555] font-geist font-normal leading-[1.58] mb-7 sm:mb-8 text-left">
                    We build high-converting websites and digital experiences that establish instant trust and grow your revenue on autopilot.
                  </p>
                </StaggerItem>

                {/* CTA Buttons & Social Proof Cluster */}
                <StaggerItem visible={s1Visible} delay={240}>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pointer-events-auto mb-10 sm:mb-12">
                    
                    {/* Primary Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-geist font-medium hover:bg-neutral-800 transition-all shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)] hover:scale-[1.02] cursor-pointer group"
                    >
                      <span>Get More Clients</span>
                      <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
                    </a>

                    {/* Secondary Button */}
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-[#D6D6D6] text-black text-xs sm:text-sm font-geist font-medium hover:bg-white hover:border-neutral-400 transition-all shadow-xs hover:scale-[1.02] cursor-pointer group"
                    >
                      <span>See Our Results</span>
                      <span className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-black group-hover:text-white transition-colors">
                        <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </span>
                    </a>

                    {/* Stacked-Avatar Trust Cluster */}
                    <div className="flex items-center gap-3 pl-1">
                      <div className="flex -space-x-2">
                        <img
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                          alt="Founder 1"
                        />
                        <img
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                          alt="Founder 2"
                        />
                        <img
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                          alt="Founder 3"
                        />
                        <img
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                          alt="Founder 4"
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
                          <span className="text-[12px] font-inter font-bold text-black ml-1">5.0</span>
                        </div>
                        <span className="text-[11px] font-inter font-medium text-[#6E6E6E]">
                          Trusted by founders
                        </span>
                      </div>
                    </div>

                  </div>
                </StaggerItem>

                {/* Partner Brand Logos Section */}
                <StaggerItem visible={s1Visible} delay={290}>
                  <div className="flex flex-col items-start gap-3">
                    <span className="text-[10px] sm:text-[10.5px] font-geist font-semibold tracking-[0.18em] text-[#7A7A7A] uppercase">
                      Trusted by innovative companies
                    </span>
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity pointer-events-auto pt-1">
                      
                      {/* Notion */}
                      <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[13px] tracking-tight">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.459 4.206a2.02 2.02 0 0 1 1.637-.841l12.593-.004a1.8 1.8 0 0 1 1.795 1.802v13.674a2.02 2.02 0 0 1-1.637.841L6.254 19.682a1.8 1.8 0 0 1-1.795-1.802V4.206Zm2.404 1.792v11.838l10.02.003V5.998H6.863Zm2.25 2.11h1.86v1.44h.04c.34-.84 1.25-1.55 2.5-1.55 1.65 0 2.9 1.15 2.9 3.25v4.54h-1.87v-4.14c0-1.15-.55-1.76-1.5-1.76-.98 0-1.77.7-1.77 2.01v3.89h-1.86V8.108h-.3Z"/>
                        </svg>
                        <span>Notion</span>
                      </div>

                      {/* Stripe */}
                      <div className="flex items-center text-neutral-800 font-bold text-[14px] tracking-tight">
                        <span>stripe</span>
                      </div>

                      {/* Spotify */}
                      <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[13px] tracking-tight">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.587 14.429c-.18.295-.563.387-.857.208-2.348-1.435-5.304-1.76-8.785-.964-.334.077-.665-.133-.742-.467-.077-.334.133-.665.467-.742 3.808-.871 7.077-.497 9.709 1.108.294.18.387.563.208.857zm1.225-2.724c-.227.368-.71.485-1.077.259-2.688-1.653-6.786-2.132-9.965-1.166-.413.125-.851-.107-.977-.52-.125-.413.107-.852.52-.977 3.632-1.103 8.147-.568 11.24 1.332.368.226.485.71.259 1.077zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.494.15-1.018-.129-1.167-.624-.15-.494.129-1.018.624-1.167 3.532-1.072 9.404-.87 13.14 1.349.444.263.589.84.325 1.284-.263.444-.84.589-1.284.325z" />
                        </svg>
                        <span>Spotify</span>
                      </div>

                      {/* Figma */}
                      <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[13px] tracking-tight">
                        <svg className="w-3.5 h-4" viewBox="0 0 38 57" fill="currentColor">
                          <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5ZM0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0ZM0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5ZM0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5ZM19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z"/>
                        </svg>
                        <span>Figma</span>
                      </div>

                      {/* Linear */}
                      <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[13px] tracking-tight">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.5 18.5a9.96 9.96 0 0 1-.5-3.14C2 9.75 6.75 5 12.61 5c1.09 0 2.14.17 3.14.5L2.5 18.5Zm2.86 2.86L18.5 8.22c.33 1 .5 2.05.5 3.14 0 5.86-4.75 10.61-10.61 10.61-1.09 0-2.14-.17-3.03-.61Z"/>
                        </svg>
                        <span>Linear</span>
                      </div>

                      {/* Webflow */}
                      <div className="flex items-center gap-1.5 text-neutral-800 font-semibold text-[13px] tracking-tight">
                        <svg className="w-4 h-3.5" viewBox="0 0 88 56" fill="currentColor">
                          <path d="M87.5 0L60.3 56H41.6L52.8 33.3H52.2L39.7 56H21L33.7 32.8H33.1L18.7 56H0L24.6 15.6H41.7L31.3 32.6H31.9L44.7 15.6H61.8L51.4 32.6H52L64.8 15.6H81.9L71.5 32.6H72.1L87.5 0Z"/>
                        </svg>
                        <span>Webflow</span>
                      </div>

                    </div>
                  </div>
                </StaggerItem>

              </div>

              {/* Right Mountain Handwritten Annotation */}
              <div className="hidden lg:flex flex-col items-start relative select-none mr-8 mb-20 pointer-events-none">
                <StaggerItem visible={s1Visible} delay={350}>
                  <div className="relative">
                    {/* Handwritten curved arrow SVG */}
                    <svg
                      className="w-10 h-10 text-neutral-600 -rotate-12 absolute -left-10 top-1"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M32 30 C 26 20, 16 10, 6 12" />
                      <path d="M6 12 L 12 8" />
                      <path d="M6 12 L 12 16" />
                    </svg>

                    <div className="font-script text-[#4A4A4A] text-[20px] sm:text-[22px] leading-[1.1] rotate-[-4deg] pl-2">
                      <span>Higher</span><br />
                      <span>Conversions</span><br />
                      <span>Happier Clients</span>
                    </div>
                  </div>
                </StaggerItem>
              </div>

            </div>

            {/* Bottom Metadata Bar */}
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between text-xs relative z-20 pt-2">
              <StaggerItem visible={s1Visible} delay={320}>
                <div className="flex items-center gap-3">
                  <span className="text-[11.5px] font-geist font-semibold tracking-wider text-black">
                    01 / 03
                  </span>
                  <span className="w-8 sm:w-12 h-[1px] bg-neutral-400" />
                  <span className="text-[11.5px] font-geist font-bold tracking-wider text-black uppercase">
                    CLOUD ASCENT
                  </span>
                  <span className="text-[12.5px] font-serif-italic italic text-neutral-600 ml-2">
                    Ideas. Design. Growth.
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem visible={s1Visible} delay={360}>
                <div className="flex items-center gap-3 pointer-events-auto">
                  <span className="text-[10.5px] font-geist font-semibold tracking-[0.18em] text-[#555] uppercase">
                    SCROLL TO EXPLORE
                  </span>
                  <button
                    onClick={() => {
                      if (containerRef.current) {
                        const targetOffset = containerRef.current.offsetTop + window.innerHeight * 1.5;
                        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
                      }
                    }}
                    aria-label="Scroll to explore"
                    className="w-8 h-8 rounded-full bg-white text-black hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-md cursor-pointer hover:scale-105"
                  >
                    <ArrowDown size={14} />
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

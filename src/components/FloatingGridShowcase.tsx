import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowUpRight, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Compass
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface BentoProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  image: string;
  accentQuote: string;
  description: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  tag: string;
  stage1: {
    x: string;
    y: string;
    z: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    scale: number;
    opacity: number;
  };
  stage3: {
    x: string;
    y: string;
    scale: number;
    opacity: number;
  };
}

const MAGIC_MOVE_PROJECTS: BentoProject[] = [
  {
    id: "aureline",
    title: "Auréline Paris",
    subtitle: "Luxury Skincare & Botanical Radiance",
    category: "Brand & Flagship Store",
    client: "Auréline Paris",
    year: "2026",
    image: "https://images.unsplash.com/photo-1608248597263-000796df9c11?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "High-performance organic formulations powered by nature.",
    description: "Full brand identity and custom luxury storefront for Auréline. Engineered with smooth WebGL shader transitions, sub-50ms instant checkout funnels, and real-time inventory management.",
    deliverables: ["Storefront Architecture", "Visual Identity", "3D Bottle Renders", "Shopify Plus Integration"],
    tag: "KEYNOTE HERO",
    specs: [
      { label: "Platform", value: "Next.js 15 / Shopify" },
      { label: "Performance", value: "99/100 Lighthouse" },
      { label: "Conversion", value: "+44% AOV Growth" }
    ],
    stage1: { x: "0vw", y: "0vh", z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1.12, opacity: 1 },
    stage3: { x: "-4vw", y: "-2vh", scale: 0.94, opacity: 0.75 }
  },
  {
    id: "lumaire",
    title: "Lumaire Studio",
    subtitle: "Creative Technology & WebGL Shaders",
    category: "Digital Agency & Studio",
    client: "Lumaire Studio",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "We craft digital experiences that feel extraordinary.",
    description: "Interactive brand platform for creative technology studio Lumaire. Built with custom WebGL canvas shaders, dynamic cursor interactions, and fluid page morphs.",
    deliverables: ["Creative Tech Web App", "WebGL Shader Canvas", "Motion Design System", "Global Press Kit"],
    tag: "FEATURED SPOTLIGHT",
    specs: [
      { label: "Render", value: "Three.js & WebGL" },
      { label: "Motion", value: "GSAP Custom Pipelines" },
      { label: "Recognition", value: "FWA of the Month" }
    ],
    stage1: { x: "32vw", y: "-10vh", z: -120, rotateX: 12, rotateY: -24, rotateZ: 6, scale: 0.78, opacity: 0.4 },
    stage3: { x: "-12vw", y: "0vh", scale: 1.15, opacity: 1 }
  },
  {
    id: "noma-house",
    title: "Noma House",
    subtitle: "Interior Architecture & Tactile Living",
    category: "Architecture Studio",
    client: "Noma House Design",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "Spaces that feel natural. Design that lasts.",
    description: "Digital archive and interactive portfolio for architectural design firm Noma House. Features full-screen spatial photo galleries and interactive blueprint overlays.",
    deliverables: ["Portfolio Web App", "Interactive Blueprints", "Editorial Typography", "Client Portal"],
    tag: "SPATIAL ARCHITECTURE",
    specs: [
      { label: "Type", value: "Architectural Archive" },
      { label: "Motion", value: "GSAP Smooth Inertia" },
      { label: "Location", value: "Copenhagen / NYC" }
    ],
    stage1: { x: "-32vw", y: "-22vh", z: -100, rotateX: -14, rotateY: 22, rotateZ: -5, scale: 0.75, opacity: 0.35 },
    stage3: { x: "4vw", y: "2vh", scale: 0.92, opacity: 0.7 }
  },
  {
    id: "veya",
    title: "Veya Mobile",
    subtitle: "Mindfulness, Sleep & Personalized Growth",
    category: "iOS & Android Mobile App",
    client: "Veya Health Inc.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "Feel better. Every day.",
    description: "Cross-platform mobile companion app for holistic mental health, biofeedback tracking, and AI-driven personalized wellness daily routines.",
    deliverables: ["iOS & Android Mobile Apps", "Biofeedback SDK", "Subscription Engine", "Design System"],
    tag: "MOBILE PRODUCT",
    specs: [
      { label: "Stack", value: "React Native / Swift" },
      { label: "User Base", value: "250K+ Monthly Active" },
      { label: "Rating", value: "4.9 App Store Average" }
    ],
    stage1: { x: "30vw", y: "24vh", z: -140, rotateX: -16, rotateY: -18, rotateZ: -4, scale: 0.72, opacity: 0.3 },
    stage3: { x: "-2vw", y: "0vh", scale: 0.95, opacity: 0.75 }
  },
  {
    id: "morrow",
    title: "Morrow Living",
    subtitle: "Modern Coastal Residential Architecture",
    category: "Architecture & Living",
    client: "Morrow Living Group",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "Built with purpose. Designed for living.",
    description: "Cinematic web experience for luxury residential property developments along the Pacific coastline, with 360-degree virtual tour integration.",
    deliverables: ["3D Virtual Tours", "Property Booking Engine", "Editorial Copywriting", "Web Platform"],
    tag: "SPATIAL 3D",
    specs: [
      { label: "Framework", value: "Next.js 15 & Three.js" },
      { label: "Region", value: "California Coast, USA" },
      { label: "Awards", value: "Awwwards SOTD" }
    ],
    stage1: { x: "-30vw", y: "22vh", z: -120, rotateX: 16, rotateY: 20, rotateZ: 4, scale: 0.75, opacity: 0.35 },
    stage3: { x: "2vw", y: "4vh", scale: 0.9, opacity: 0.7 }
  },
  {
    id: "serein",
    title: "Serein Maison",
    subtitle: "Timeless Minimal Fashion & Apparel",
    category: "Direct-to-Consumer",
    client: "Serein Maison",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    accentQuote: "Timeless by design. Made to endure.",
    description: "Minimalist e-commerce flagship for capsule fashion collections. Engineered with instant page loads, dynamic lookbooks, and multi-currency checkout.",
    deliverables: ["E-Commerce Storefront", "Lookbook Carousel", "Stripe Multi-Currency", "CMS Integration"],
    tag: "E-COMMERCE",
    specs: [
      { label: "Category", value: "High Fashion" },
      { label: "Checkout", value: "Stripe & Apple Pay" },
      { label: "Speed", value: "Sub-100ms Latency" }
    ],
    stage1: { x: "0vw", y: "30vh", z: -160, rotateX: 20, rotateY: 0, rotateZ: 0, scale: 0.7, opacity: 0.25 },
    stage3: { x: "0vw", y: "-2vh", scale: 0.95, opacity: 0.8 }
  }
];

export default function FloatingGridShowcase() {
  const [activeStudy, setActiveStudy] = useState<BentoProject | null>(null);
  const [currentStageName, setCurrentStageName] = useState("01 · Keynote Monolith");
  const [activeProgress, setActiveProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stageHudRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Master Keynote Magic Move timeline with 4 seamless choreographies
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: stickyRef.current,
          pinSpacing: true,
          onUpdate: (self) => {
            const p = self.progress;
            setActiveProgress(p);
            if (p < 0.22) {
              setCurrentStageName("01 · Keynote Monolith");
            } else if (p < 0.60) {
              setCurrentStageName("02 · Magic Move Bento Morph");
            } else if (p < 0.82) {
              setCurrentStageName("03 · Spotlight Focus Shift");
            } else {
              setCurrentStageName("04 · Landed Bento Grid");
            }
          },
        },
      });

      // BEAT 1: Initial Setup of 3D Orbit / Monolith Positions
      cards.forEach((card, index) => {
        const proj = MAGIC_MOVE_PROJECTS[index];
        if (!proj || !proj.stage1) return;
        const s1 = proj.stage1;

        gsap.set(card, {
          x: s1.x,
          y: s1.y,
          z: s1.z,
          rotateX: s1.rotateX,
          rotateY: s1.rotateY,
          rotateZ: s1.rotateZ,
          scale: s1.scale,
          opacity: s1.opacity,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      // BEAT 2 (Scroll 0.00 -> 0.20): Header Fades & Shrinks
      tl.to(headlineRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.92,
        ease: "power2.out",
        duration: 0.25,
      }, 0);

      // BEAT 3 (Scroll 0.05 -> 0.55): MAGIC MOVE — All cards morph & glide into Apple Bento Grid Layout
      cards.forEach((card, index) => {
        tl.to(card, {
          x: "0vw",
          y: "0vh",
          z: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.5,
        }, 0.08 + index * 0.025);
      });

      // BEAT 4 (Scroll 0.55 -> 0.78): KEYNOTE SPOTLIGHT MORPH — Card #2 (Lumaire) blooms into spotlight focus
      cards.forEach((card, index) => {
        const proj = MAGIC_MOVE_PROJECTS[index];
        if (!proj || !proj.stage3) return;
        const s3 = proj.stage3;

        tl.to(card, {
          x: s3.x,
          y: s3.y,
          scale: s3.scale,
          opacity: s3.opacity,
          ease: "power2.inOut",
          duration: 0.28,
        }, 0.58);
      });

      // BEAT 5 (Scroll 0.78 -> 1.00): Settle cleanly back to Balanced Apple Bento Grid
      cards.forEach((card) => {
        tl.to(card, {
          x: "0vw",
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 0.22,
        }, 0.82);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D Tilt on mouse move for cards in landed state
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const tiltX = -(y / (rect.height / 2)) * 5;
    const tiltY = (x / (rect.width / 2)) * 5;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      duration: 0.3,
      ease: "power1.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section 
      ref={containerRef} 
      id="floating-showcase" 
      className="relative w-full h-[450vh] bg-transparent text-black font-geist select-none overflow-hidden"
    >
      {/* Sticky Viewport Stage with 3D Perspective Context */}
      <div
        ref={stickyRef}
        className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden [perspective:1400px] py-6 px-4 sm:px-8"
      >
        
        {/* Apple Keynote Stage HUD (Top Pill Floating Header) */}
        <div 
          ref={stageHudRef}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200/80 shadow-md text-xs font-mono text-neutral-700 pointer-events-none select-none transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px] text-neutral-900">
              {currentStageName}
            </span>
          </div>

          <div className="w-[1px] h-3.5 bg-neutral-300" />

          {/* Mini Scrubber Bar */}
          <div className="w-16 sm:w-24 h-1.5 rounded-full bg-neutral-200 overflow-hidden relative">
            <div 
              className="h-full bg-black rounded-full transition-all duration-100 ease-out"
              style={{ width: `${Math.max(5, Math.round(activeProgress * 100))}%` }}
            />
          </div>

          <span className="text-[10px] text-neutral-500 font-inter font-medium hidden sm:inline">
            {Math.round(activeProgress * 100)}%
          </span>
        </div>

        {/* Central Keynote Headline Presentation (Beat 1 Hero) */}
        <div
          ref={headlineRef}
          className="absolute z-10 max-w-[820px] text-center px-4 pointer-events-none will-change-transform flex flex-col items-center top-[14vh] sm:top-[12vh]"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-800 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A533]" />
            <span>Magic Move Architecture · Selected Works</span>
          </div>

          {/* Main Headline with Serif + Script Font Typography */}
          <div className="relative w-full flex justify-center">
            <div className="absolute -top-6 right-2 sm:right-12 text-[#5E5E5E] font-nanum text-xl sm:text-2xl rotate-[8deg] flex items-center gap-1.5 select-none pointer-events-none">
              <span>Scroll to morph...</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-neutral-900 leading-[1.08] tracking-tight">
              Turning <span className="italic font-normal font-newsreader">Ideas</span> Into <br />
              <span className="font-script text-5xl sm:text-7xl md:text-8xl text-neutral-950 font-normal tracking-wide block sm:inline mt-1 sm:mt-0">
                Experiences People Love
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal mt-4 leading-relaxed max-w-[580px] font-geist">
            A scrollytelling showcase engineered with seamless layout continuity, Apple Keynote physics, and spatial design precision.
          </p>
        </div>

        {/* Apple Bento Grid Container */}
        <div className="relative w-full max-w-[1240px] h-[78vh] flex items-center justify-center z-20 mt-12 sm:mt-8">
          
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 items-center justify-items-center">
            {MAGIC_MOVE_PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onClick={() => setActiveStudy(proj)}
                className="group relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-[28px] overflow-hidden bg-neutral-950 shadow-xl border border-neutral-200/80 cursor-pointer will-change-transform transform-gpu transition-shadow duration-300 hover:shadow-2xl hover:border-neutral-400/90"
              >
                {/* Image with subtle zoom on hover */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Apple Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-opacity duration-300" />

                {/* Top Pill Tag on Card */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono font-bold tracking-widest text-[#E0A533] uppercase">
                    {proj.tag}
                  </span>
                </div>

                {/* Bottom Card Meta Presentation */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-20 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-widest mb-0.5">
                    {proj.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold font-geist text-white tracking-tight">
                      {proj.title}
                    </h3>
                    
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-300 truncate font-geist opacity-90 group-hover:opacity-100 transition-opacity mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Specular Light Hover Glare */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none transition-opacity duration-500" />
              </div>
            ))}
          </div>

        </div>

        {/* Keynote Slide Controls & Sub-footer Indicator */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-400 uppercase border-t border-neutral-200/60 pt-3 z-30 select-none">
          <div className="flex items-center gap-2 text-neutral-600 font-inter">
            <span className="font-semibold text-neutral-900">Keynote Magic Move Engine</span>
            <span>· 60 FPS Scrollytelling</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-neutral-400">Continuous Layout Interpolation</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-bold">
              <Compass className="w-3 h-3 text-neutral-700" />
              <span>Scroll to Scrub</span>
            </div>
          </div>
        </div>

      </div>

      {/* Apple Keynote Case Study Modal Sheet */}
      {activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          <div
            onClick={() => setActiveStudy(null)}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121316] border border-neutral-800 rounded-[32px] p-6 sm:p-10 shadow-2xl z-10 text-white font-geist custom-scrollbar">
            <button
              onClick={() => setActiveStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E0A533] px-3 py-1 rounded-full bg-[#E0A533]/10 border border-[#E0A533]/20 font-inter">
                {activeStudy.category}
              </span>
              <span className="text-xs text-neutral-400 font-inter">{activeStudy.year}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-normal text-white mb-1 tracking-tight">
              {activeStudy.title}
            </h3>
            <p className="text-xs font-mono text-neutral-400 mb-6 uppercase">
              {activeStudy.subtitle}
            </p>

            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800 relative group">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {activeStudy.accentQuote && (
              <blockquote className="border-l-2 border-[#E0A533] pl-4 italic text-neutral-300 text-sm sm:text-base mb-6 font-geist">
                "{activeStudy.accentQuote}"
              </blockquote>
            )}

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {activeStudy.description}
            </p>

            {activeStudy.specs && activeStudy.specs.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 mb-6">
                {activeStudy.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold font-inter">{spec.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5 font-geist">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeStudy.deliverables && activeStudy.deliverables.length > 0 && (
              <div className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3 font-inter">Architecture & Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.deliverables.map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E0A533]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800 flex-wrap gap-3">
              <span className="text-xs text-neutral-400 font-medium">Client: <strong className="text-white">{activeStudy.client}</strong></span>
              <button
                onClick={() => setActiveStudy(null)}
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer font-inter"
              >
                <span>Close Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

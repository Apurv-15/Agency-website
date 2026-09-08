import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  ArrowUpRight, 
  ImageIcon, 
  FileText, 
  Layers, 
  ArrowRight, 
  X,
  Maximize2,
  ChevronRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface EditorialCard {
  id: string;
  title: string;
  brand: string;
  category: string;
  image: string;
  tag?: string;
  tier: "hero" | "supporting" | "accent";
  aspect: string;
  desktopSize: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  enterVector: {
    x: number;
    y: number;
  };
  settleOffset: {
    x: number;
    y: number;
  };
  // Scrub start and duration relative to timeline 0..1
  scrubStart: number;
  scrubDuration: number;
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

// 11 Art-Directed Editorial Photographs Perfectly Framing the Center Safe Zone
const EDITORIAL_CARDS: EditorialCard[] = [
  // -------------------------------------------------------------
  // LEFT SIDE COLLAGE
  // -------------------------------------------------------------
  
  // 1. Upper-Left Hero: Portrait athlete (Sweat & Grit close-up)
  {
    id: "card-upper-left-hero",
    title: "Sweat & Grit Portraiture",
    brand: "NORVEN ATHLETICS",
    category: "Editorial Photography",
    tag: "KEY VISUAL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    tier: "hero",
    aspect: "aspect-[3/4]",
    desktopSize: "w-[170px] sm:w-[190px] md:w-[210px] lg:w-[230px]",
    position: { top: "14%", left: "2%" },
    enterVector: { x: -160, y: -80 },
    settleOffset: { x: -3, y: -2 },
    scrubStart: 0.22,
    scrubDuration: 0.35,
    description: "Close-range golden-hour portrait series highlighting moisture-wicking engineered fabrics under extreme sun exposure.",
    deliverables: ["Key Visual Stills", "8K Billboard Master", "PDP E-Commerce Pack", "Editorial Crop Kit"],
    metrics: [{ label: "Resolution", value: "8K ProRAW" }, { label: "Render Precision", value: "99.4%" }]
  },

  // 2. Upper Mid-Left Accent: Stacked Technical Headwear & Indigo Cap
  {
    id: "card-far-upper-left",
    title: "Technical Headwear Capsule",
    brand: "N.V.N. RUNNING",
    category: "Product & Packaging",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    tier: "accent",
    aspect: "aspect-[4/5]",
    desktopSize: "w-[125px] sm:w-[140px] md:w-[155px] lg:w-[170px]",
    position: { top: "13%", left: "17%" },
    enterVector: { x: -70, y: -120 },
    settleOffset: { x: 2, y: -3 },
    scrubStart: 0.26,
    scrubDuration: 0.36,
    hideOnMobile: true,
    description: "Tactile studio composition showcasing indigo denim and weather-sealed running caps with bespoke laser-etched badges.",
    deliverables: ["Product Flat Lays", "Macro Stitching Closeups", "E-Commerce 360 Spin", "Box Packaging Art"],
    metrics: [{ label: "Micro Detail", value: "0.01mm" }, { label: "AOV Lift", value: "+41%" }]
  },

  // 3. Mid-Left Supporting: Mojave Ridge Expedition (Pushed to far left edge)
  {
    id: "card-mid-left-landscape",
    title: "Mojave Ridge Expedition",
    brand: "NORVEN OFF-GRID",
    category: "Campaign Visuals",
    tag: "OFF-GRID",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
    tier: "supporting",
    aspect: "aspect-[16/10]",
    desktopSize: "w-[170px] sm:w-[195px] md:w-[225px] lg:w-[250px]",
    position: { top: "44%", left: "-1%" },
    enterVector: { x: -200, y: 30 },
    settleOffset: { x: -4, y: 2 },
    scrubStart: 0.29,
    scrubDuration: 0.38,
    description: "Atmospheric desert ultramarathon landscape capturing solitary distance running across Mojave mountain ridges.",
    deliverables: ["Hero Landing Stills", "Environmental Lookbook", "Print Magazine Double Spread", "Short-Form Video Teasers"],
    metrics: [{ label: "Ad Recall", value: "+52%" }, { label: "Format Ratio", value: "Universal" }]
  },

  // 4. Lower-Left Supporting: Synchronized Pace Duo
  {
    id: "card-lower-left-stride",
    title: "Synchronized Pace Stride",
    brand: "NORVEN RACING",
    category: "Campaign Visuals",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
    tier: "supporting",
    aspect: "aspect-[3/4]",
    desktopSize: "w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]",
    position: { bottom: "6%", left: "13%" },
    enterVector: { x: -100, y: 120 },
    settleOffset: { x: 2, y: 3 },
    scrubStart: 0.32,
    scrubDuration: 0.35,
    hideOnMobile: true,
    description: "Cinematic duo pacing dynamic against architectural brutalist backdrop emphasizing rhythm, geometry, and carbon footwear.",
    deliverables: ["Full Billboard Retouching", "Motion Poster Sequences", "Web Hero Visuals", "Retail Display Panels"],
    metrics: [{ label: "LCP Speed", value: "0.8s" }, { label: "Resolution", value: "12K Retouched" }]
  },

  // 5. Bottom Far-Left Accent: White Technical Topographic Garment
  {
    id: "card-bottom-left-accent",
    title: "Topographic Technical Wear",
    brand: "NORVEN LABS",
    category: "Product & 3D",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop",
    tier: "accent",
    aspect: "aspect-[4/5]",
    desktopSize: "w-[130px] sm:w-[145px] md:w-[165px] lg:w-[180px]",
    position: { bottom: "5%", left: "1.5%" },
    enterVector: { x: -130, y: 130 },
    settleOffset: { x: -3, y: 3 },
    scrubStart: 0.35,
    scrubDuration: 0.35,
    hideOnMobile: true,
    description: "Micro-detail technical graphic mapping elevation curves and heart-rate intervals directly onto breathable seamless garments.",
    deliverables: ["Vector Topo Schematics", "Hangtag System", "Silkscreen Print Files", "Garment Spec Sheets"],
    metrics: [{ label: "Production Speed", value: "48 Hours" }, { label: "Vector Precision", value: "0.01mm" }]
  },

  // -------------------------------------------------------------
  // RIGHT SIDE COLLAGE
  // -------------------------------------------------------------

  // 6. Upper-Right Hero: Red Aerodynamic Carbon Shoe (Right edge)
  {
    id: "card-upper-right-shoe",
    title: "Carbon Plate Propulsion",
    brand: "NORVEN LABS",
    category: "Product & 3D",
    tag: "ENERGY RETURN",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    tier: "hero",
    aspect: "aspect-[3/4]",
    desktopSize: "w-[170px] sm:w-[195px] md:w-[215px] lg:w-[240px]",
    position: { top: "13%", right: "2%" },
    enterVector: { x: 160, y: -80 },
    settleOffset: { x: 4, y: -2 },
    scrubStart: 0.24,
    scrubDuration: 0.36,
    description: "Dynamic studio isolation render of carbon-plated marathon footwear highlighting ultra-light engineered mesh.",
    deliverables: ["Product Exploded View", "Retail Posters", "3D CAD Turnaround", "Campaign Stills"],
    metrics: [{ label: "Energy Return", value: "+85%" }, { label: "Weight", value: "175g" }]
  },

  // 7. Upper Mid-Right Accent: Pure Sterling 925 Jewelry Macro
  {
    id: "card-upper-mid-right-jewelry",
    title: "Nova Luminescent Silver",
    brand: "JEWELLS BY NOVA",
    category: "Product & 3D",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    tier: "accent",
    aspect: "aspect-[1/1]",
    desktopSize: "w-[125px] sm:w-[140px] md:w-[155px] lg:w-[170px]",
    position: { top: "13%", right: "17%" },
    enterVector: { x: 80, y: -120 },
    settleOffset: { x: -2, y: -3 },
    scrubStart: 0.27,
    scrubDuration: 0.35,
    hideOnMobile: true,
    description: "Macro fine-jewelry product rendering capturing emerald and sapphire refractive light dispersal across polished silver.",
    deliverables: ["Macro 3D Stills", "E-Commerce Master", "Social Launch Stills", "Retouched PDP"],
    metrics: [{ label: "Refraction", value: "100% Raytraced" }, { label: "Asset Count", value: "16 Cuts" }]
  },

  // 8. Mid-Right Supporting: Retro Tech Synthesizer / Creative Shaders
  {
    id: "card-mid-right-tech",
    title: "Lumaire Chromatic Shaders",
    brand: "LUMAIRE STUDIO",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    tier: "supporting",
    aspect: "aspect-[16/11]",
    desktopSize: "w-[160px] sm:w-[185px] md:w-[210px] lg:w-[235px]",
    position: { top: "44%", right: "-1%" },
    enterVector: { x: 180, y: 30 },
    settleOffset: { x: 4, y: 2 },
    scrubStart: 0.30,
    scrubDuration: 0.37,
    description: "Nostalgic modern creative workstation combining tactile hardware synthetics with chromatic shader typography.",
    deliverables: ["Interactive Canvas", "Brand Identity Video", "Social Promo Cuts", "Type Specimen"],
    metrics: [{ label: "Site of the Day", value: "Awarded" }, { label: "Shader FPS", value: "120" }]
  },

  // 9. Lower-Right Hero: Tranquil Modern Architectural Sanctuary
  {
    id: "card-lower-right-architecture",
    title: "Solitude Sanctuary Spa",
    brand: "SOLITUDE WELLNESS",
    category: "Brand Systems",
    tag: "ARCHITECTURE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tier: "hero",
    aspect: "aspect-[3/4]",
    desktopSize: "w-[165px] sm:w-[190px] md:w-[215px] lg:w-[235px]",
    position: { bottom: "6%", right: "2%" },
    enterVector: { x: 150, y: 120 },
    settleOffset: { x: 3, y: 3 },
    scrubStart: 0.33,
    scrubDuration: 0.37,
    description: "Architectural luxury environmental branding capturing brutalist timber pavilions and therapeutic restorative sanctuaries.",
    deliverables: ["Spatial Identity", "Architectural Lookbook", "Wayfinding System", "Printed Collateral"],
    metrics: [{ label: "Brand Systems", value: "96%" }, { label: "Finishes", value: "Natural Oak" }]
  },

  // 10. Lower-Right Mid Accent: Auréline Botanical Glass Serum (High-res luxury bottle)
  {
    id: "card-lower-mid-right-serum",
    title: "Auréline Botanical Serum",
    brand: "AURÉLINE PARIS",
    category: "Product & 3D",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
    tier: "accent",
    aspect: "aspect-[1/1]",
    desktopSize: "w-[125px] sm:w-[140px] md:w-[155px] lg:w-[170px]",
    position: { bottom: "6%", right: "16%" },
    enterVector: { x: 80, y: 110 },
    settleOffset: { x: -2, y: 3 },
    scrubStart: 0.36,
    scrubDuration: 0.35,
    hideOnMobile: true,
    description: "Hyper-realistic 3D bottle rendering with refracted caustic light patterns and tactile embossed frosted glass typography.",
    deliverables: ["3D Packaging Master", "WebGL Shader Model", "Refraction Caustics Map", "Amazon Storefront Assets"],
    metrics: [{ label: "AOV Lift", value: "+44%" }, { label: "Render Time", value: "Realtime" }]
  },

  // 11. Subtle Bottom-Center Flanking: High-speed Aquatic Trial
  {
    id: "card-bottom-aquatic",
    title: "Velocity Sprint Motion",
    brand: "NORVEN RACING",
    category: "Campaign Visuals",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop",
    tier: "supporting",
    aspect: "aspect-[16/10]",
    desktopSize: "w-[150px] sm:w-[175px] md:w-[195px] lg:w-[215px]",
    position: { bottom: "3.5%", left: "28%" },
    enterVector: { x: -30, y: 140 },
    settleOffset: { x: 1, y: 4 },
    scrubStart: 0.38,
    scrubDuration: 0.36,
    hideOnMobile: true,
    hideOnTablet: true,
    description: "High-speed shutter underwater aquatic trial capturing kinetic fluid dynamics and hydrodynamic racing swimwear.",
    deliverables: ["Aquatic Stills", "Campaign Key Visual", "4K Video Clips", "Digital Signage"],
    metrics: [{ label: "Accuracy", value: "91%" }, { label: "Shutter", value: "1/8000s" }]
  }
];

export default function LovartShowcase() {
  const [activeModalItem, setActiveModalItem] = useState<EditorialCard | null>(null);

  const pinSectionRef = useRef<HTMLDivElement>(null);
  const promptContainerRef = useRef<HTMLDivElement>(null);
  const centerHeadlineRef = useRef<HTMLHeadingElement>(null);
  const centerParagraphRef = useRef<HTMLParagraphElement>(null);
  const centerButtonsRef = useRef<HTMLDivElement>(null);
  const scrollPromptHintRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Sticky ScrollTrigger Scrub Timeline
  useEffect(() => {
    const pinSec = pinSectionRef.current;
    const promptBox = promptContainerRef.current;
    const headline = centerHeadlineRef.current;
    const paragraph = centerParagraphRef.current;
    const buttons = centerButtonsRef.current;
    const scrollHint = scrollPromptHintRef.current;
    const cards = cardElementsRef.current;

    if (!pinSec || !promptBox || !headline || !paragraph || !buttons) return;

    const ctx = gsap.context(() => {
      // 1. Set Initial States (Prompt visible, cards outside, center out-text hidden)
      gsap.set(promptBox, { opacity: 1, scale: 1, y: 0, pointerEvents: "auto", filter: "blur(0px)" });
      gsap.set(headline, { opacity: 0, y: 20, filter: "blur(6px)" });
      gsap.set(paragraph, { opacity: 0, y: 16 });
      gsap.set(buttons, { opacity: 0, y: 12, pointerEvents: "none" });
      if (scrollHint) gsap.set(scrollHint, { opacity: 1 });

      cards.forEach((cardEl, index) => {
        if (!cardEl) return;
        const data = EDITORIAL_CARDS[index];
        if (!data) return;
        gsap.set(cardEl, {
          opacity: 0,
          x: data.enterVector.x,
          y: data.enterVector.y,
          scale: 0.94,
          pointerEvents: "none",
        });
      });

      // 2. Master Sticky Scrub Timeline
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSec,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // --- PHASE A (Scroll Progress 0.05 -> 0.28): Prompt Composer Fades & Shrinks Away ---
      scrubTl.to(
        promptBox,
        {
          opacity: 0,
          scale: 0.88,
          y: -30,
          filter: "blur(8px)",
          pointerEvents: "none",
          duration: 0.24,
          ease: "power2.inOut",
        },
        0.06
      );

      if (scrollHint) {
        scrubTl.to(
          scrollHint,
          {
            opacity: 0,
            y: 10,
            duration: 0.15,
            ease: "power2.out",
          },
          0.04
        );
      }

      // --- PHASE B (Scroll Progress 0.20 -> 0.72): Staggered Entry of 11 Cards ---
      cards.forEach((cardEl, index) => {
        if (!cardEl) return;
        const data = EDITORIAL_CARDS[index];
        if (!data) return;

        // Card enters and settles into perimeter frame
        scrubTl.to(
          cardEl,
          {
            opacity: 1,
            x: data.settleOffset.x,
            y: data.settleOffset.y,
            scale: 1,
            pointerEvents: "auto",
            duration: data.scrubDuration,
            ease: "power2.out",
          },
          data.scrubStart
        );
      });

      // --- PHASE C (Scroll Progress 0.65 -> 0.95): "50 on-brand assets out" + Text + Buttons Appear ---
      scrubTl.to(
        headline,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.25,
          ease: "power3.out",
        },
        0.66
      );

      scrubTl.to(
        paragraph,
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: "power3.out",
        },
        0.73
      );

      scrubTl.to(
        buttons,
        {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.20,
          ease: "power3.out",
        },
        0.79
      );

      // Settle hold until the end of the pinned section
      scrubTl.to({}, { duration: 0.05 }, 1.0);

    }, pinSec);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pinSectionRef}
      id="work-showcase"
      className="relative w-full h-screen min-h-[640px] max-h-[1050px] bg-[#0b0b09] text-white selection:bg-[#E0A533] selection:text-black overflow-hidden select-none font-geist flex items-center justify-center pt-16 pb-8"
      style={{
        backgroundColor: "#0b0b09"
      }}
    >
      {/* 1. FIXED TOP NAVIGATION BAR (Sits above cards) */}
      <header className="absolute top-0 left-0 right-0 z-50 h-16 px-6 sm:px-10 lg:px-14 flex items-center justify-between pointer-events-auto border-b border-white/[0.04] bg-[#0b0b09]/80 backdrop-blur-md">
        {/* Brand Logo Left */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-white/10 border border-white/15">
            <Sparkles className="w-3 h-3 text-[#E0A533]" />
          </div>
          <span className="text-sm font-semibold tracking-wider font-mono uppercase text-white/95">
            Lovart
          </span>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-white/50">
          <a href="#work-showcase" className="text-white hover:text-white transition-colors">Showcase</a>
          <a href="#about-meily" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#why-choose-us" className="hover:text-white transition-colors">Architecture</a>
          <a href="#contact" className="hover:text-white transition-colors">Studio</a>
        </nav>

        {/* Action Button Right */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>Get started</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* 2. INITIAL STATE: "One prompt in" + COMPACT AI PROMPT COMPOSER (Visible on initial scroll) */}
      <div
        ref={promptContainerRef}
        className="absolute z-30 flex flex-col items-center justify-center max-w-md w-full px-5 text-center pointer-events-auto"
        style={{ willChange: "transform, opacity, filter" }}
      >
        {/* High-Contrast Modern Editorial Serif Heading */}
        <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-5 font-serif leading-[1.0]">
          One prompt in
        </h1>

        {/* Compact Dark Rounded AI Prompt Composer */}
        <div className="w-full bg-[#14130F]/95 backdrop-blur-2xl border border-white/15 rounded-2xl md:rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-3 text-left">
          {/* File Attachment Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-[11px] font-mono text-white/80">
              <ImageIcon className="w-3 h-3 text-[#E0A533]" />
              <span>norven-logo.svg</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-[11px] font-mono text-white/80">
              <FileText className="w-3 h-3 text-blue-400" />
              <span>norven-brand-book.pdf</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-[11px] font-mono text-white/80">
              <Layers className="w-3 h-3 text-purple-400" />
              <span>campaign-specs.json</span>
            </div>
          </div>

          {/* Short Prompt Text */}
          <p className="text-xs text-white/90 leading-relaxed font-sans min-h-[38px]">
            Create a full multi-channel campaign kit for Norven Athletics — hero visuals, editorial typography, motion assets, and packaging kit.
          </p>

          {/* Bottom Action Row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono text-white/40">
              Scroll down to compile
            </span>
            <div className="w-6 h-6 rounded-full bg-[#E0A533] text-black flex items-center justify-center font-bold shadow-md shadow-[#E0A533]/25">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div 
          ref={scrollPromptHintRef}
          className="mt-6 flex flex-col items-center gap-1 text-white/40 text-[10px] font-mono tracking-widest uppercase animate-bounce"
        >
          <span>Scroll to generate</span>
          <span>↓</span>
        </div>
      </div>

      {/* 3. ASYMMETRIC IMAGE COLLAGE (11 Independent DOM Cards Animated on Scroll) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
        {EDITORIAL_CARDS.map((card, index) => {
          return (
            <div
              key={card.id}
              ref={(el) => { cardElementsRef.current[index] = el; }}
              onClick={() => setActiveModalItem(card)}
              style={{
                top: card.position.top,
                bottom: card.position.bottom,
                left: card.position.left,
                right: card.position.right,
                willChange: "transform, opacity",
              }}
              className={`absolute group cursor-pointer ${card.desktopSize} ${card.aspect} ${
                card.hideOnMobile ? "hidden sm:block" : ""
              } ${card.hideOnTablet ? "hidden lg:block" : ""} rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#171612] border border-white/[0.08] transition-all duration-300 ease-out hover:border-white/30 hover:scale-[1.02] shadow-[0_12px_32px_rgba(0,0,0,0.6)]`}
            >
              {/* Premium Realistic Photography */}
              <img
                src={card.image}
                alt={card.title}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Minimal Dark Edge Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Subtle Tag (Only on ~35% of cards) */}
              {card.tag && (
                <div className="absolute top-2 left-2.5 z-10">
                  <span className="text-[8.5px] font-mono tracking-widest text-white/85 uppercase px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                    {card.tag}
                  </span>
                </div>
              )}

              {/* Hover Inspect Icon */}
              <div className="absolute bottom-2 right-2.5 w-5 h-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Maximize2 className="w-2.5 h-2.5 text-white/90" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. PROTECTED CENTRAL REGION (Revealed on Scroll: "50 on-brand assets out") */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-[540px] w-full px-5 text-center pointer-events-auto my-auto">
        {/* Dominant Editorial Serif Headline */}
        <h2
          ref={centerHeadlineRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 font-serif leading-[1.02] text-balance opacity-0"
          style={{ willChange: "transform, opacity, filter" }}
        >
          50 on-brand assets out
        </h2>

        {/* Quiet, Refined Supporting Copy */}
        <p
          ref={centerParagraphRef}
          className="text-xs sm:text-sm text-white/70 max-w-sm sm:max-w-md mx-auto leading-relaxed font-sans text-balance mb-6 opacity-0"
          style={{ willChange: "transform, opacity" }}
        >
          Upload a brand guide, enter one prompt, and generate a full campaign kit in your brand style — all in one canvas.
        </p>

        {/* Minimal Action Buttons */}
        <div
          ref={centerButtonsRef}
          className="flex flex-wrap items-center justify-center gap-2.5 opacity-0 pointer-events-none"
          style={{ willChange: "transform, opacity" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_8px_20px_rgba(255,255,255,0.12)] hover:scale-105 cursor-pointer"
          >
            <span>Explore Campaign Kit</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => {
              const first = EDITORIAL_CARDS[0];
              if (first) setActiveModalItem(first);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md text-[11px] font-medium uppercase tracking-wider text-white/90 hover:text-white transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#E0A533]" />
            <span>Inspect Assets</span>
          </button>
        </div>
      </div>

      {/* 5. CASE STUDY DETAIL INSPECTION MODAL */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#14130F] border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(224,165,51,0.15)] flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image View */}
            <div className="relative md:w-1/2 h-56 md:h-auto min-h-[260px] bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-mono tracking-widest text-black bg-[#E0A533] px-2.5 py-1 rounded-full font-bold uppercase">
                  {activeModalItem.brand}
                </span>
              </div>
            </div>

            {/* Right Details Content */}
            <div className="md:w-1/2 p-6 md:p-7 flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col gap-3.5">
                <div>
                  <span className="text-[11px] font-mono text-[#E0A533] tracking-widest uppercase">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white tracking-tight mt-1 font-serif">
                    {activeModalItem.title}
                  </h3>
                </div>

                <p className="text-xs text-white/70 leading-relaxed">
                  {activeModalItem.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 py-1">
                  {activeModalItem.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-[9px] font-mono uppercase text-white/50">{m.label}</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Deliverables List */}
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Generated Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeModalItem.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-white/80">
                        <span className="text-[#E0A533] text-xs">✓</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#E0A533] text-black font-semibold text-xs tracking-wider uppercase hover:bg-amber-400 transition-colors shadow-md shadow-[#E0A533]/20 cursor-pointer"
                >
                  <span>Request Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Sparkles, TrendingUp, Compass, Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const stylusRef = useRef<HTMLDivElement>(null);
  const dollarRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement>(null);
  const lightningRef = useRef<HTMLDivElement>(null);
  const cursorsRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Master Keynote Magic Move Scroll Timeline for Why Choose Us Boxes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center center",
          scrub: 0.8,
        },
      });

      // Initial Stage: Cards start stacked/tilted in 3D Keynote space
      gsap.set(cards[0], { x: -60, y: 40, rotateZ: -6, rotateY: 15, scale: 0.88, opacity: 0.2 });
      gsap.set(cards[1], { x: 0, y: 60, scale: 0.92, opacity: 0.3 });
      gsap.set(cards[2], { x: 60, y: 40, rotateZ: 6, rotateY: -15, scale: 0.88, opacity: 0.2 });

      // MAGIC MOVE: Cards smoothly unfold and snap into Apple 3-Column Grid
      tl.to(cards, {
        x: 0,
        y: 0,
        rotateZ: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.08,
        ease: "power3.out",
        duration: 1,
      });

      // Card 1 Animation: 3D Dollar drop + Ripple expansion
      if (dollarRef.current && ripplesRef.current) {
        tl.fromTo(
          dollarRef.current,
          { scale: 0.5, y: -20, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, ease: "back.out(1.7)", duration: 0.6 },
          0.3
        );
        tl.fromTo(
          ripplesRef.current.children,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 0.6 },
          0.35
        );
      }

      // Card 2 Animation: Stylus drawing the rainbow vector path across tablet
      if (pathRef.current && stylusRef.current) {
        const pathLength = pathRef.current.getTotalLength ? pathRef.current.getTotalLength() : 180;
        gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        tl.to(
          pathRef.current,
          {
            strokeDashoffset: 0,
            ease: "power2.inOut",
            duration: 0.8,
          },
          0.4
        );

        tl.fromTo(
          stylusRef.current,
          { x: -30, y: 20, rotate: 25, opacity: 0.4 },
          { x: 0, y: 0, rotate: 42, opacity: 1, ease: "power2.inOut", duration: 0.8 },
          0.4
        );
      }

      // Card 3 Animation: Lightning pulse + cursor chips pop in
      if (lightningRef.current && cursorsRef.current) {
        tl.fromTo(
          lightningRef.current,
          { scale: 0.6, rotate: -20 },
          { scale: 1, rotate: 0, ease: "elastic.out(1, 0.5)", duration: 0.7 },
          0.45
        );
        tl.fromTo(
          cursorsRef.current.children,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.1, ease: "back.out(2)", duration: 0.5 },
          0.5
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Magnetic Hover Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const tiltX = -(y / (rect.height / 2)) * 6;
    const tiltY = (x / (rect.width / 2)) * 6;

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
      ref={sectionRef} 
      id="why-choose-us" 
      className="w-full bg-transparent text-black py-24 sm:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden font-geist"
    >
      <div className="max-w-[1180px] mx-auto text-center relative z-10">
        
        {/* Section Header with Apple Keynote Clean Typography */}
        <div ref={titleRef} className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-800 mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A533]" />
            <span>Keynote Architecture · Why Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-[62px] font-geist font-bold leading-[1.08] tracking-[-2px] sm:tracking-[-3px]">
            <span className="text-neutral-400 font-normal block mb-1 sm:mb-2">
              Why Brands Keep
            </span>
            <span className="text-black font-extrabold block">
              Coming Back.
            </span>
          </h2>
        </div>

        {/* 3-Card Apple Magic Move Bento Grid (Clean White Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 text-left [perspective:1200px]">
          
          {/* Card 1: Designs that convert */}
          <div 
            ref={(el) => { cardRefs.current[0] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={(e) => handleMouseLeave(0)}
            onClick={() => setActiveCard(0)}
            className="group relative bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[32px] p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 transform-gpu cursor-pointer"
          >
            {/* Visual Box: Ripple + 3D Dollar Sign */}
            <div className="w-full h-56 bg-[#EEEFF2] rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-neutral-200/50 group-hover:border-neutral-300 transition-colors">
              {/* Ripple circles */}
              <div ref={ripplesRef} className="absolute w-48 h-48 rounded-full bg-white/50 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 rounded-full bg-white/70 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/90 shadow-xs" />
                </div>
              </div>
              
              {/* 3D Dollar Sign */}
              <div ref={dollarRef} className="relative z-10 flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-geist font-black text-neutral-900 drop-shadow-[0_12px_20px_rgba(0,0,0,0.14)] select-none group-hover:scale-110 transition-transform duration-300">
                  $
                </span>
                <span className="text-[10px] font-mono font-bold text-[#B88218] uppercase tracking-wider mt-1 px-2.5 py-0.5 rounded-full bg-[#E0A533]/20 border border-[#E0A533]/40">
                  +44% AOV Growth
                </span>
              </div>

              {/* Specular glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Card Content */}
            <div className="px-3 pb-3">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl font-geist font-bold text-neutral-900 tracking-tight">
                  Designs that convert
                </h3>
                <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white text-neutral-700 flex items-center justify-center transition-colors">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 font-geist leading-relaxed">
                Built for today, flexible for what's next. Every pixel is calculated to capture attention and drive revenue.
              </p>
            </div>
          </div>

          {/* Card 2: Thoughtful, not trendy */}
          <div 
            ref={(el) => { cardRefs.current[1] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={(e) => handleMouseLeave(1)}
            onClick={() => setActiveCard(1)}
            className="group relative bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[32px] p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 transform-gpu cursor-pointer"
          >
            {/* Visual Box: Stylus drawing on tablet */}
            <div className="w-full h-56 bg-[#EEEFF2] rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-neutral-200/50 group-hover:border-neutral-300 transition-colors bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:16px_16px]">
              
              {/* Black Tablet Screen */}
              <div className="w-52 h-32 bg-neutral-950 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.25)] border border-neutral-800 relative p-3 flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
                  <path 
                    ref={pathRef}
                    d="M 15 45 Q 45 15, 80 40 T 145 35" 
                    stroke="url(#rainbowGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  <defs>
                    <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Stylus Pen */}
                <div 
                  ref={stylusRef}
                  className="absolute -top-3 right-3 w-6 h-24 transform rotate-[42deg] drop-shadow-xl pointer-events-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <div className="w-3.5 h-16 bg-neutral-100 rounded-full mx-auto shadow-md border border-neutral-300" />
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-neutral-100 mx-auto -mt-0.5" />
                  <div className="w-1 h-1 bg-neutral-800 rounded-full mx-auto -mt-0.5" />
                </div>
              </div>

              {/* Specular glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Card Content */}
            <div className="px-3 pb-3">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl font-geist font-bold text-neutral-900 tracking-tight">
                  Thoughtful, not trendy
                </h3>
                <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white text-neutral-700 flex items-center justify-center transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 font-geist leading-relaxed">
                Our work is grounded in intentional craft, timeless typography, and enduring brand systems.
              </p>
            </div>
          </div>

          {/* Card 3: Fast without the fuss */}
          <div 
            ref={(el) => { cardRefs.current[2] = el; }}
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => setActiveCard(2)}
            className="group relative bg-white border border-neutral-200/90 hover:border-neutral-400 rounded-[32px] p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 transform-gpu cursor-pointer"
          >
            {/* Visual Box: Lightning badge + cursors */}
            <div className="w-full h-56 bg-[#EEEFF2] rounded-2xl flex items-center justify-center relative overflow-hidden mb-6 border border-neutral-200/50 group-hover:border-neutral-300 transition-colors">
              
              {/* Lightning Badge */}
              <div 
                ref={lightningRef}
                className="w-20 h-20 bg-neutral-950 rounded-full flex items-center justify-center text-[#E0A533] shadow-[0_12px_28px_rgba(0,0,0,0.22)] border border-neutral-800 z-10 group-hover:scale-110 transition-transform duration-300"
              >
                <Zap className="w-9 h-9 fill-[#E0A533] text-[#E0A533]" />
              </div>

              {/* Cursor Avatars flying in with Magic Move */}
              <div ref={cursorsRef}>
                {/* Cursor 1 (top-left) */}
                <div className="absolute top-6 left-8 flex items-center gap-1 opacity-90 animate-bounce" style={{ animationDuration: "3s" }}>
                  <svg className="w-4 h-4 text-black transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"/>
                  </svg>
                  <div className="bg-black text-white text-[9px] px-2 py-0.5 rounded-full font-mono font-bold shadow-md">Apurv</div>
                </div>

                {/* Cursor 2 (top-right) */}
                <div className="absolute top-8 right-8 flex items-center gap-1 opacity-90 animate-bounce" style={{ animationDuration: "2.5s" }}>
                  <div className="bg-[#E0A533] text-black text-[9px] px-2 py-0.5 rounded-full font-mono font-bold shadow-md">Client</div>
                  <svg className="w-4 h-4 text-[#E0A533] transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"/>
                  </svg>
                </div>

                {/* Cursor 3 (bottom-right) */}
                <div className="absolute bottom-6 right-10 flex items-center gap-1 opacity-90 animate-bounce" style={{ animationDuration: "3.5s" }}>
                  <svg className="w-4 h-4 text-[#0284c7] transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"/>
                  </svg>
                  <div className="bg-[#0284c7] text-white text-[9px] px-2 py-0.5 rounded-full font-mono font-bold shadow-md">Ready</div>
                </div>
              </div>

              {/* Specular glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Card Content */}
            <div className="px-3 pb-3">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl font-geist font-bold text-neutral-900 tracking-tight">
                  Fast without the fuss
                </h3>
                <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white text-neutral-700 flex items-center justify-center transition-colors">
                  <Zap className="w-3.5 h-3.5 text-[#E0A533]" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 font-geist leading-relaxed">
                A streamlined, async-first workflow. Rapid iteration, zero bureaucracy, and weekly deliverables.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


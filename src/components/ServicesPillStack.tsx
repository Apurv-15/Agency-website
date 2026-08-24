import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Sparkles, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceData {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  stageTitle: string;
  stageDesc: string;
  tag: string;
}

const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    number: "01",
    title: "UI/UX & SPATIAL SYSTEMS",
    shortDesc: "Research, wireframing, and interactive design that puts users at the center.",
    stageTitle: "DISCOVER",
    stageDesc: "We dive deep into your business, users, and market opportunities.",
    tag: "DISCOVERY & WIREFRAMES",
  },
  {
    id: 2,
    number: "02",
    title: "BRAND & IDENTITY",
    shortDesc: "Meaningful brands that communicate purpose and build recognition.",
    stageTitle: "DESIGN",
    stageDesc: "We craft intuitive experiences that align with your brand and goals.",
    tag: "AWWWARDS QUALITY",
  },
  {
    id: 3,
    number: "03",
    title: "WEB & PRODUCT DEVELOPMENT",
    shortDesc: "High-performance websites and products built with clean, scalable code.",
    stageTitle: "BUILD",
    stageDesc: "We build fast, secure, and scalable solutions with precision.",
    tag: "HIGH CONVERSION",
  },
  {
    id: 4,
    number: "04",
    title: "GROWTH & DIGITAL MARKETING",
    shortDesc: "Data-driven strategies that attract, engage, and convert the right audience.",
    stageTitle: "GROW",
    stageDesc: "We optimize and scale what's working to deliver real results.",
    tag: "EXPONENTIAL SCALE",
  },
];

export default function ServicesPillStack() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (!isClickingRef.current) {
            const nextIdx = Math.min(
              Math.floor(self.progress * SERVICES_DATA.length),
              SERVICES_DATA.length - 1
            );
            setActiveIdx(nextIdx);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (idx: number) => {
    setActiveIdx(idx);
    isClickingRef.current = true;

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = containerRect.top + scrollTop;
      const totalScrollableDist = containerRef.current.offsetHeight - window.innerHeight;

      const targetScroll =
        containerTop + (idx / (SERVICES_DATA.length - 0.5)) * totalScrollableDist;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      setTimeout(() => {
        isClickingRef.current = false;
      }, 750);
    }
  };

  const handleViewAll = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 3D Stage subtle parallax tilt on mouse move
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(stageRef.current.querySelector(".stage-parallax-inner"), {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleStageMouseLeave = () => {
    if (!stageRef.current) return;
    gsap.to(stageRef.current.querySelector(".stage-parallax-inner"), {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const currentService = SERVICES_DATA[activeIdx] || SERVICES_DATA[0];

  return (
    <section
      ref={containerRef}
      id="services-stack"
      className="relative w-full h-[360vh] bg-white text-black font-geist select-none"
    >
      {/* Sticky Viewport Stage Container */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="w-full flex items-center justify-between z-20 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#878558]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold">
              Our Services
            </span>
          </div>

          {/* Segmented Progress Tracker */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-neutral-900 tracking-wider">
              {currentService.number} <span className="text-neutral-400 font-normal">/ 04</span>
            </span>

            <div className="flex items-center gap-1.5">
              {SERVICES_DATA.map((s, sIdx) => {
                const isActive = activeIdx === sIdx;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(sIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-8 bg-[#878558]"
                        : "w-4 bg-neutral-200 hover:bg-neutral-300"
                    }`}
                    aria-label={`Go to service ${s.number}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Central Stage: 2-Column Grid (Left: Editorial Content & List | Right: 3D Installation Sculpture) */}
        <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center z-20 my-auto py-2">
          
          {/* Left Column: Heading + Subtitle + Service Rows (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Editorial Main Headline with Serif Italic Accent */}
            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold text-neutral-900 leading-[1.08] tracking-[-1.5px] mb-3">
              We build digital{" "}
              <br className="hidden sm:inline" />
              experiences{" "}
              <span className="font-serif italic font-normal text-[#787854]">
                that <br className="hidden sm:inline" />
                drive impact.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mb-6 max-w-md font-geist">
              Strategy, design, and technology—crafted to create products that connect and convert.
            </p>

            {/* 4 Interactive Service Rows */}
            <div className="w-full divide-y divide-neutral-200/70 border-t border-b border-neutral-200/70">
              {SERVICES_DATA.map((service, idx) => {
                const isActive = activeIdx === idx;
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`group relative py-3.5 sm:py-4 px-2 sm:px-3 flex items-center justify-between cursor-pointer transition-all duration-300 rounded-xl ${
                      isActive
                        ? "bg-neutral-50/90 shadow-2xs"
                        : "hover:bg-neutral-50/50"
                    }`}
                  >
                    {/* Active Gold Indicator Dot */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 pr-3">
                      <div className="w-2.5 flex items-center justify-center shrink-0">
                        {isActive && (
                          <motion.div
                            layoutId="activeDot"
                            className="w-2 h-2 rounded-full bg-[#E0A533] shadow-xs"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          />
                        )}
                      </div>

                      {/* Number Badge (Black circle when active, muted text when inactive) */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-black text-white shadow-md scale-105"
                            : "text-neutral-400 font-mono"
                        }`}
                      >
                        {service.number}
                      </div>

                      {/* Title & Short Description */}
                      <div className="flex flex-col">
                        <h3
                          className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                            isActive ? "text-black" : "text-neutral-800 group-hover:text-black"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug mt-0.5 line-clamp-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Right Circle Arrow Button */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? "border-black bg-black text-white shadow-sm"
                          : "border-neutral-200 text-neutral-400 group-hover:border-neutral-400 group-hover:text-black group-hover:bg-white"
                      }`}
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isActive || isHovered ? "translate-x-0.5" : ""
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row: View All Services Button */}
            <div className="flex items-center gap-4 mt-6 pt-1">
              <button
                onClick={handleViewAll}
                className="w-9 h-9 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white text-neutral-800 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-2xs group"
                aria-label="View all services"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                  View All Services
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Tailored Solutions For Ambitious Brands
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Architectural Installation with Frosted Glass Panels (6.5 cols) */}
          <div
            ref={stageRef}
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
            className="lg:col-span-7 relative h-[420px] sm:h-[480px] lg:h-[540px] w-full flex items-center justify-center [perspective:1400px]"
          >
            <div className="stage-parallax-inner relative w-full h-full rounded-[36px] overflow-hidden bg-[#F4F4F2] border border-neutral-200/80 shadow-2xl transition-transform duration-200 ease-out flex items-center justify-center">
              
              {/* High-Resolution 3D Architectural Image Background */}
              <img
                src="/services-3d-sculpture.jpg"
                alt="3D Architectural Sculpture Installation"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-105 mix-blend-multiply opacity-90 scale-105"
              />

              {/* Atmospheric Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30 pointer-events-none" />

              {/* Dynamic Interactive Frosted Glass Cards Overlay on top of 3D Plinths */}
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex items-end justify-between gap-3 z-20 pointer-events-none">
                
                {SERVICES_DATA.map((card, cIdx) => {
                  const isCardActive = activeIdx === cIdx;

                  return (
                    <motion.div
                      key={card.id}
                      animate={{
                        y: isCardActive ? -14 : 0,
                        scale: isCardActive ? 1.04 : 0.98,
                        opacity: isCardActive ? 1 : 0.65,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => handleServiceClick(cIdx)}
                      className={`pointer-events-auto flex-1 min-w-[90px] max-w-[140px] sm:max-w-[170px] rounded-2xl p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                        isCardActive
                          ? "bg-white/85 border-white shadow-2xl ring-1 ring-black/10"
                          : "bg-white/40 border-white/60 hover:bg-white/60 shadow-lg"
                      }`}
                      style={{
                        minHeight: cIdx === 0 ? "190px" : cIdx === 1 ? "210px" : cIdx === 2 ? "175px" : "155px",
                      }}
                    >
                      <div>
                        {/* Number & Plus */}
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-mono font-bold tracking-wider ${
                              isCardActive ? "text-neutral-900 font-extrabold" : "text-neutral-500"
                            }`}
                          >
                            {card.number}
                          </span>

                          <Plus className="w-3 h-3 text-neutral-400" />
                        </div>

                        {/* Stage Title */}
                        <h4
                          className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 font-geist ${
                            isCardActive ? "text-black" : "text-neutral-700"
                          }`}
                        >
                          {card.stageTitle}
                        </h4>

                        {/* Stage Description */}
                        <p className="text-[10px] sm:text-[11px] text-neutral-600 font-geist leading-relaxed line-clamp-3">
                          {card.stageDesc}
                        </p>
                      </div>

                      {/* Active Tag Capsule */}
                      {isCardActive && (
                        <div className="mt-2 pt-2 border-t border-black/10 flex items-center justify-between">
                          <span className="text-[9px] font-mono uppercase font-bold text-[#878558] tracking-widest truncate">
                            {card.tag.split(" ")[0]}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533] animate-pulse" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}

              </div>

              {/* Subtle Dashed Orbital Ring Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 600 400" fill="none">
                <ellipse cx="300" cy="200" rx="220" ry="140" stroke="#787854" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="480" cy="140" r="3" fill="#E0A533" />
                <circle cx="120" cy="260" r="2.5" fill="#787854" />
              </svg>

            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="w-full flex items-center justify-between z-20 pt-2 border-t border-neutral-200/70 text-[10px] sm:text-xs font-mono text-neutral-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>Interactive 3D Spatial Scroll Matrix</span>
          </div>
          <div>Engineered with 60FPS Hardware Acceleration</div>
        </div>

      </div>
    </section>
  );
}





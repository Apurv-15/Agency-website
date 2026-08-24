import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, ExternalLink, Eye, X } from "lucide-react";
import { ProjectItem, loadStoredProjects } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

const TINYWINS_VERBS = [
  "ELEVATED", "BRIGHT", "RADIANT", "OPTIMIZED",
  "FORTIFIED", "TACTILE", "SERENE", "UNLEASHED",
  "DISTINCT", "DYNAMIC", "LUMINOUS", "PRECISE",
  "COMMANDING", "KINETIC", "SEAMLESS", "INTELLIGENT"
];

export default function TinywinsVerticalList() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeItem, setActiveItem] = useState<ProjectItem | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeFocalIdx, setActiveFocalIdx] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeFocalRef = useRef<number>(0);

  useEffect(() => {
    const loaded = loadStoredProjects();
    setProjects(loaded);
  }, []);

  const visibleProjects = projects.filter((p) => p.visible);
  
  // Build a 16-item list by mirroring available projects to match the 16 TinyWins stack items
  const items = Array.from({ length: 16 }, (_, index) => {
    const baseProj = visibleProjects.length > 0 
      ? visibleProjects[index % visibleProjects.length] 
      : null;
    return {
      index,
      verb: TINYWINS_VERBS[index % TINYWINS_VERBS.length],
      project: baseProj,
    };
  });

  useEffect(() => {
    if (items.length === 0 || !containerRef.current || !trackRef.current) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      const sticky = stickyRef.current;
      if (!track || !container || !sticky) return;

      const itemElements = gsap.utils.toArray<HTMLElement>(".tinywins-list-item");
      const totalItems = itemElements.length;

      // Dynamic distance calculation for 16-item vertical stack scroll
      const getScrollDistance = () => {
        const itemHeight = 90; // Approx item height + 27px gap
        return (totalItems - 4) * itemHeight;
      };

      gsap.to(track, {
        y: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyRef.current,
          pinSpacing: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Find focal active item in middle viewport
            const focalIndex = Math.min(
              Math.floor(self.progress * totalItems),
              totalItems - 1
            );

            if (activeFocalRef.current !== focalIndex) {
              activeFocalRef.current = focalIndex;
              setActiveFocalIdx(focalIndex);
            }
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items.length]);

  const activeHoverProj = hoveredIdx !== null ? items[hoveredIdx]?.project : items[activeFocalIdx]?.project;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[360vh] bg-transparent text-black font-geist overflow-hidden select-none"
    >
      {/* Sticky Viewport Stage */}
      <div ref={stickyRef} className="w-full h-screen flex flex-col justify-between items-center py-10 px-6 sm:px-12 overflow-hidden">
        
        {/* Header Section */}
        <div className="w-full max-w-[1240px] flex items-center justify-between z-30 pt-2 border-b border-neutral-200/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
              Directory Archive (16 Works)
            </span>
          </div>

          <div className="text-xs font-mono uppercase tracking-tight text-neutral-400">
            Scroll to Traverse Index ({activeFocalIdx + 1} / 16)
          </div>
        </div>

        {/* Central Stage: Dual Column (Left Hover/Focus Media Preview | Right TinyWins Vertical List Track) */}
        <div className="w-full max-w-[1240px] flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-20 my-auto py-6">
          
          {/* Left Column: Dynamic High-Res Case Study Preview */}
          <div className="hidden lg:flex lg:col-span-6 flex-col items-center justify-center">
            {activeHoverProj && (
              <div className="relative w-full h-[460px] rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-200/40 group">
                <img
                  src={activeHoverProj.image}
                  alt={activeHoverProj.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono text-[#E0A533] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#E0A533]/15 border border-[#E0A533]/30">
                    {activeHoverProj.category}
                  </span>
                  <h3 className="text-2xl font-bold font-geist text-white mt-2 mb-1">
                    {activeHoverProj.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 font-geist">
                    {activeHoverProj.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: TinyWins Vertical List Container (.mx-auto.flex.shrink-0.flex-col.items-center) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center h-[520px] overflow-hidden relative w-full">
            
            {/* Gradient Mask Fade top/bottom */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* TinyWins Target Container with inline transform style optimization footprint */}
            <div
              ref={trackRef}
              className="mx-auto flex shrink-0 flex-col items-center gap-[27px] pt-[77px] will-change-transform w-full"
              style={{
                willChange: "transform",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              {items.map((item, idx) => {
                const isFocal = idx === activeFocalIdx;
                const isHovered = idx === hoveredIdx;

                return (
                  <span key={item.index} className="contents">
                    <div
                      onClick={() => item.project && setActiveItem(item.project)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`tinywins-list-item w-full max-w-[480px] px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                        isFocal || isHovered
                          ? "bg-black text-white border-black scale-[1.03] shadow-xl"
                          : "bg-neutral-50/80 text-neutral-800 border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-mono font-bold ${isFocal || isHovered ? "text-[#E0A533]" : "text-neutral-400"}`}>
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                            Make them feel
                          </div>
                          <div className={`text-lg sm:text-xl font-bold font-geist tracking-tight capitalize ${isFocal || isHovered ? "text-white" : "text-neutral-900"}`}>
                            {item.verb.toLowerCase()} — <span className="font-normal text-sm">{item.project?.title.split(" ")[0] || "Project"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full ${isFocal || isHovered ? "bg-white/10 text-white" : "bg-neutral-200/60 text-neutral-600"}`}>
                          {item.project?.category.split(" ")[0] || "Case Study"}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isFocal || isHovered ? "translate-x-1 text-white" : "text-neutral-400"}`} />
                      </div>
                    </div>
                  </span>
                );
              })}
            </div>

          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="w-full max-w-[1240px] flex items-center justify-between z-30 border-t border-neutral-200/60 pt-4 text-xs font-mono text-neutral-500 uppercase">
          <div>Engineered with 60fps GPU layer optimization</div>
          <div className="hidden sm:block">TinyWins Vertical Scroll Marquee Structure</div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            onClick={() => setActiveItem(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 sm:p-10 shadow-2xl z-10 text-white">
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E0A533] px-3 py-1 rounded-full bg-[#E0A533]/10 border border-[#E0A533]/20 font-inter">
                {activeItem.category}
              </span>
              <span className="text-xs text-neutral-400 font-inter">{activeItem.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-geist font-normal text-white mb-4">
              {activeItem.title}
            </h3>

            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800">
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                className="w-full h-full object-cover grayscale contrast-115"
              />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-geist">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

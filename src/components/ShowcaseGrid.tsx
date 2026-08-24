import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, X, Check, Calendar, Clock, Eye, Sparkles, LayoutGrid } from "lucide-react";
import AdminProjectManager from "./AdminProjectManager";
import { ProjectItem, loadStoredProjects, saveStoredProjects } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

// Curated emotions/verbs matching the design reference for each project
const VERB_MAP: Record<string, string> = {
  bintelleapps: "elevated",
  "jewells-nova": "bright",
  "ekotex-mobile": "radiant",
  "ignicia-charter": "optimized",
  "hirehunt-ai": "fortified",
  "synth-interface": "tactile",
  "solitude-wellness": "serene",
  "noir-reserve": "unleashed",
};

export default function ShowcaseGrid() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeStudy, setActiveStudy] = useState<ProjectItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [callBooked, setCallBooked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaded = loadStoredProjects();
    setProjects(loaded);

    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#admin" || hash === "#cms" || hash === "#manage" || hash === "#admin-greffon") {
        setShowAdminModal(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setShowAdminModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const visibleProjects = projects.filter((p) => p.visible);

  const activeIndexRef = useRef(0);

  // GSAP Smooth Horizontal Scroll — zero DOM reads in animation loop
  useEffect(() => {
    if (visibleProjects.length === 0) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".project-slide-card");
      const numCards = cards.length;

      // Pre-compute card offsets once (invalidated on refresh)
      let cardOffsets: number[] = [];
      let cardWidth = 0;
      let gap = 0;
      let totalTravel = 0;

      function computeOffsets() {
        if (!track) return;
        cardWidth = cards[0]?.offsetWidth || 440;
        gap = parseFloat(getComputedStyle(track).gap) || 40;
        const paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 64;
        
        cardOffsets = cards.map((_, i) => paddingLeft + i * (cardWidth + gap) + cardWidth / 2);
        totalTravel = track.scrollWidth - window.innerWidth + 240;
      }

      computeOffsets();

      gsap.to(track, {
        x: () => -totalTravel,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalTravel * 1.2}`,
          pin: true,
          scrub: 0.5, // GSAP handles all scroll smoothing
          invalidateOnRefresh: true,
          onRefresh: computeOffsets, // Re-compute on resize
          onUpdate: (self) => {
            // Pure math — zero DOM reads
            const translateX = self.progress * totalTravel;
            const focalX = window.innerWidth * 0.28;

            let closestIdx = 0;
            let minDistance = Infinity;

            for (let i = 0; i < numCards; i++) {
              // Card's visual center = its original offset minus how far track has moved
              const visualCenter = cardOffsets[i] - translateX;
              const distance = Math.abs(visualCenter - focalX);

              // Continuous scale: 1.0 at focus → 0.65 far away
              const maxDist = window.innerWidth * 0.55;
              const norm = Math.min(distance / maxDist, 1);
              const scale = 1 - norm * 0.35;
              const opacity = 1 - norm * 0.5;

              gsap.set(cards[i], {
                scale: Math.max(scale, 0.65),
                opacity: Math.max(opacity, 0.4),
                force3D: true,
              });

              if (distance < minDistance) {
                minDistance = distance;
                closestIdx = i;
              }
            }

            // Only trigger React re-render when the active card changes
            if (activeIndexRef.current !== closestIdx) {
              activeIndexRef.current = closestIdx;
              setActiveIndex(closestIdx);
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleProjects]);

  const handleCloseAdmin = () => {
    setShowAdminModal(false);
    if (window.location.hash.toLowerCase().includes("admin") || 
        window.location.hash.toLowerCase().includes("cms") || 
        window.location.hash.toLowerCase().includes("manage")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const handleUpdateProjects = (updated: ProjectItem[]) => {
    setProjects(updated);
    saveStoredProjects(updated);
  };

  const handleBookCall = (e: FormEvent) => {
    e.preventDefault();
    setCallBooked(true);
    setTimeout(() => {
      setShowCallModal(false);
      setCallBooked(false);
      setName("");
      setEmail("");
      setProjectDetails("");
    }, 2200);
  };

  const activeVerb = visibleProjects[activeIndex] 
    ? VERB_MAP[visibleProjects[activeIndex].id] || "elevated" 
    : "elevated";

  return (
    <section ref={sectionRef} id="showcase-gallery" className="relative w-full bg-transparent text-black overflow-hidden font-geist">
      {/* Pinned Viewport Container */}
      <div className="h-screen w-full flex flex-col justify-between py-8 sm:py-10 px-6 sm:px-12 relative overflow-hidden">
        
        {/* Dynamic Top Header: Make them feel [verb] */}
        <div className="w-full flex items-center justify-between z-20 pt-2 sm:pt-4">
          <div className="text-xl sm:text-2xl md:text-3xl font-normal text-neutral-400 font-geist tracking-tight">
            Make them feel <strong className="text-black capitalize font-extrabold">{activeVerb}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold text-neutral-800 transition-all cursor-pointer select-none"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Works ({visibleProjects.length})</span>
            </button>

            <button
              onClick={() => setShowCallModal(true)}
              className="px-5 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer select-none"
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Smooth Horizontal Slider Track */}
        <div className="relative w-full flex-1 flex items-center overflow-visible my-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-10 pl-6 sm:pl-16 will-change-transform"
          >
            {visibleProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveStudy(proj)}
                className="project-slide-card flex flex-col shrink-0 cursor-pointer group will-change-transform w-[320px] sm:w-[380px] md:w-[440px]"
              >
                {/* Fixed Aspect Ratio Card Image Container */}
                <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] relative rounded-3xl overflow-hidden bg-neutral-100 shadow-2xl transition-shadow duration-300">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Clean Monospace Bottom Caption */}
                <div className="pt-3.5 px-1 flex items-center justify-between">
                  <p className="text-xs font-mono uppercase tracking-tight text-neutral-900 font-bold truncate">
                    {proj.title} <span className="text-neutral-400 font-normal ml-1">{VERB_MAP[proj.id] || proj.category}</span>
                  </p>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Audio Waveform / Scrubber Progress Indicator */}
        <div className="w-full flex items-center justify-between border-t border-neutral-200 pt-4 z-20">
          <div className="flex items-center gap-1.5">
            {visibleProjects.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-1.5 bg-black"
                    : "w-2 h-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <div className="text-xs font-mono text-neutral-500 uppercase">
            Scroll to traverse ({activeIndex + 1} / {visibleProjects.length})
          </div>
        </div>

      </div>

      {/* Full Archive Drawer Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[88vh] bg-[#14161B] border border-white/15 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 flex flex-col text-white"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#E0A533] font-bold">
                    Full Archive ({visibleProjects.length} Works)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif tracking-wide text-white uppercase mt-0.5">
                    ALL WORKS & ARCHITECTURE
                  </h3>
                </div>

                <button
                  onClick={() => setShowAllModal(false)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto min-h-0 pt-6 pb-8 pr-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 custom-scrollbar">
                {visibleProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      setShowAllModal(false);
                      setActiveStudy(proj);
                    }}
                    className="group relative h-[250px] sm:h-[270px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-900 shadow-md"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                      <span className="text-[10px] font-mono text-[#E0A533] uppercase font-bold">{proj.category}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate font-geist mt-0.5">{proj.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Admin Project Manager Modal */}
      <AdminProjectManager 
        isOpen={showAdminModal}
        onClose={handleCloseAdmin}
        projects={projects}
        onSaveProjects={handleUpdateProjects}
      />

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStudy(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 sm:p-10 shadow-2xl z-10 text-white"
            >
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

              <h3 className="text-2xl sm:text-3xl font-geist font-normal text-white mb-4">
                {activeStudy.title}
              </h3>

              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800">
                <img 
                  src={activeStudy.image} 
                  alt={activeStudy.title} 
                  className="w-full h-full object-cover grayscale contrast-115"
                  referrerPolicy="no-referrer"
                />
              </div>

              {activeStudy.accentQuote && (
                <blockquote className="border-l-2 border-[#E0A533] pl-4 italic text-neutral-300 text-sm sm:text-base mb-6 font-geist">
                  "{activeStudy.accentQuote}"
                </blockquote>
              )}

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-geist">
                {activeStudy.description}
              </p>

              {activeStudy.specs && activeStudy.specs.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800 mb-6">
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
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-geist">
                        ● {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-neutral-800 flex-wrap gap-3">
                <span className="text-xs text-neutral-400 font-medium font-geist">Client: <strong className="text-white">{activeStudy.client}</strong></span>
                <button 
                  onClick={() => {
                    setActiveStudy(null);
                    setShowCallModal(true);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Book Strategy Call Modal */}
      <AnimatePresence>
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 text-white"
            >
              <button 
                onClick={() => setShowCallModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {callBooked ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#E0A533]/20 text-[#E0A533] flex items-center justify-center mb-4 border border-[#E0A533]/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold font-geist text-white mb-2">Strategy Session Confirmed</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-geist">
                    Thank you, {name || "there"}! We've received your request and will send calendar coordinates and technical briefing to <span className="text-white font-bold">{email || "your email"}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2 text-[#E0A533] text-[10px] font-bold tracking-widest uppercase font-inter">
                    <Calendar className="w-4 h-4" />
                    <span>Free 30-Min Engineering Strategy Call</span>
                  </div>
                  
                  <h3 className="text-2xl font-geist font-normal text-white mb-2 leading-tight">
                    Let's architect your scalable roadmap.
                  </h3>
                  
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-geist">
                    Direct technical consultation with Apurv. We'll analyze your current software architecture, conversion funnels, or mobile app timeline.
                  </p>

                  <form onSubmit={handleBookCall} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-inter">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors font-geist"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-inter">
                        Work Email
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors font-geist"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-inter">
                        Project Scope or Requirements
                      </label>
                      <textarea 
                        rows={3}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Tell us about your Next.js store, mobile app, CRM needs, or scaling timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none font-geist"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 shadow-sm cursor-pointer font-inter"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Confirm Strategy Session</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}




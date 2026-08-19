import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Sparkles, Check, Calendar, Clock, ArrowRight, Sliders, Plus, Eye } from "lucide-react";
import MasonryGallery, { type MasonryItem } from "./MasonryGallery";
import AdminProjectManager from "./AdminProjectManager";
import { ProjectItem, loadStoredProjects, saveStoredProjects } from "../data/projectsData";

export default function ShowcaseGrid() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeStudy, setActiveStudy] = useState<ProjectItem | null>(null);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [callBooked, setCallBooked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  // Load projects from localStorage on mount & listen to #admin hash / shortcuts
  useEffect(() => {
    const loaded = loadStoredProjects();
    setProjects(loaded);

    // Hash check for secret admin access: e.g. #admin, #cms, #manage
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#admin" || hash === "#cms" || hash === "#manage" || hash === "#admin-greffon") {
        setShowAdminModal(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    // Stealth keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A
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

  const handleCloseAdmin = () => {
    setShowAdminModal(false);
    // Clear admin hash from URL if present without page reload
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

  // Filter visible projects only for public masonry gallery
  const visibleProjects = projects.filter((p) => p.visible);

  const galleryItems: MasonryItem[] = visibleProjects.map((proj) => ({
    id: proj.id,
    img: proj.image,
    height: proj.height || 380,
    title: proj.title,
    onClick: () => setActiveStudy(proj)
  }));

  return (
    <section id="showcase-gallery" className="w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Top Header (Clean visitor view with live count indicator) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 sm:mb-12 px-2">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Selected Showcase · {visibleProjects.length} Active Works
            </span>
          </div>

          <div className="text-xs text-neutral-500 font-mono hidden sm:block">
            Engineering & Product Architecture
          </div>
        </div>

        {/* GSAP-Powered Masonry Gallery with Blur-to-Focus and Stagger Entrance */}
        <div className="w-full">
          {galleryItems.length > 0 ? (
            <MasonryGallery 
              items={galleryItems}
              animateFrom="bottom"
              blurToFocus={true}
              stagger={0.06}
              scaleOnHover={true}
              hoverScale={0.98}
              onSelectItem={(item) => {
                const target = projects.find((p) => p.id === item.id);
                if (target) setActiveStudy(target);
              }}
            />
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-3xl bg-neutral-950/60">
              <Eye className="w-8 h-8 text-neutral-600 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">No visible projects in showcase</h4>
              <p className="text-xs text-neutral-400 mb-4">Add #admin to the URL to configure projects.</p>
            </div>
          )}
        </div>

        {/* Bottom Centered Control Buttons */}
        <div className="mt-14 sm:mt-16 flex flex-row items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {visibleProjects.length > 0 && (
            <button 
              onClick={() => setActiveStudy(visibleProjects[0])}
              className="text-xs sm:text-sm font-medium text-neutral-300 hover:text-white underline underline-offset-8 transition-colors cursor-pointer"
            >
              Featured Case Study
            </button>
          )}

          <button 
            onClick={() => setShowCallModal(true)}
            className="px-6 sm:px-8 py-3 rounded-full bg-black hover:bg-neutral-900 text-white text-xs sm:text-sm font-semibold border border-neutral-700 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer glow-button"
          >
            Book a Strategy Call
          </button>
        </div>

      </div>

      {/* Admin Project Manager Modal (Private - accessed via #admin) */}
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
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-[2rem] p-6 sm:p-10 shadow-2xl z-10 text-white"
            >
              <button 
                onClick={() => setActiveStudy(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 font-mono">
                  {activeStudy.category}
                </span>
                <span className="text-xs text-neutral-500 font-mono">{activeStudy.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {activeStudy.title}
              </h3>

              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-neutral-800">
                <img 
                  src={activeStudy.image} 
                  alt={activeStudy.title} 
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>

              {activeStudy.accentQuote && (
                <blockquote className="border-l-2 border-emerald-500/80 pl-4 italic text-neutral-300 text-sm sm:text-base mb-6 font-serif">
                  "{activeStudy.accentQuote}"
                </blockquote>
              )}

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeStudy.description}
              </p>

              {activeStudy.specs && activeStudy.specs.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 mb-6">
                  {activeStudy.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">{spec.label}</span>
                      <span className="text-xs font-bold text-white mt-0.5">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeStudy.deliverables && activeStudy.deliverables.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 font-mono">Architecture & Deliverables</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.deliverables.map((item, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200">
                        ● {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-neutral-800 flex-wrap gap-3">
                <span className="text-xs text-neutral-400 font-medium">Client: <strong className="text-white">{activeStudy.client}</strong></span>
                <button 
                  onClick={() => {
                    setActiveStudy(null);
                    setShowCallModal(true);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Book a Strategy Call Modal */}
      <AnimatePresence>
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-[2rem] p-6 sm:p-8 shadow-2xl z-10 text-white"
            >
              <button 
                onClick={() => setShowCallModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {callBooked ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-white mb-2">Strategy Session Confirmed</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                    Thank you, {name || "there"}! We've received your request and will send calendar coordinates and technical briefing to <span className="text-white font-mono">{email || "your email"}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold tracking-widest uppercase font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>Free 30-Min Engineering Strategy Call</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Let's architect your scalable roadmap.
                  </h3>
                  
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    Direct technical consultation with Apurv. We'll analyze your current software architecture, conversion funnels, or mobile app timeline.
                  </p>

                  <form onSubmit={handleBookCall} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                        Work Email
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                        Project Scope or Requirements
                      </label>
                      <textarea 
                        rows={3}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        placeholder="Tell us about your Next.js store, mobile app, CRM needs, or scaling timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 shadow-lg cursor-pointer glow-button"
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


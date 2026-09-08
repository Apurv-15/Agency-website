import { motion } from "motion/react";
import { ArrowUpRight, Mail, Twitter, Instagram, Github, Sparkles } from "lucide-react";

export default function AboutMeily() {
  const scrollToProjects = () => {
    const gallery = document.getElementById("projects");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const premiumEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section 
      id="about-apurv" 
      className="w-full text-white py-24 sm:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden font-geist bg-transparent select-none"
    >
      {/* Premium Atmospheric Ambient Color Grading Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#E0A533]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-500/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* /superdesign Editorial Section Header */}
        <div className="relative w-full mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800/80 pb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0A533]/10 border border-[#E0A533]/25 text-[#E0A533] text-xs font-inter font-bold tracking-[0.18em] uppercase mb-4 shadow-[0_0_20px_-3px_rgba(224,165,51,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533] animate-pulse" />
                <span>Founder & Lead Architect</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-2px] sm:tracking-[-3px] text-white leading-[1.08]">
                Crafted by Apurv. <br />
                <span className="font-serif-italic font-normal tracking-normal text-[1.12em] text-[#E0A533]/90 drop-shadow-[0_2px_12px_rgba(224,165,51,0.15)]">
                  Driven by obsessive craft.
                </span>
              </h2>
            </div>

            <div className="flex flex-col sm:items-end text-left sm:text-right">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-[#E0A533] flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#E0A533]" />
                GREFFON STUDIO
              </span>
              <span className="text-xs font-inter text-neutral-400 font-medium mt-1">
                Full-Stack Systems & Brand Flagships
              </span>
            </div>
          </div>

          {/* Subtle Depth Background Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.035] select-none overflow-hidden">
            <span className="text-[72px] sm:text-[130px] md:text-[180px] lg:text-[220px] font-geist font-black tracking-[-0.04em] uppercase whitespace-nowrap text-white block">
              APURV
            </span>
          </div>
        </div>

        {/* 2-Column Bento Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          
          {/* Left Column (5 Cols): Architectural Profile + Deep Experience Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Card: Profile Portrait & Statement with amber top-rim light */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="bg-gradient-to-b from-[#161922] via-[#0E1015] to-[#0B0C10] border border-neutral-800/90 hover:border-neutral-700/80 rounded-[32px] p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col items-center text-center group"
            >
              {/* Warm Amber Top Corner Spotlight */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#E0A533]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Fine Dotted Subtle Grid Accent */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.14]"
                style={{
                  backgroundImage: 'radial-gradient(rgb(255, 255, 255) 0.6px, rgba(0, 0, 0, 0) 1.4px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Status Pill */}
              <div className="relative z-10 self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-inter font-bold tracking-tight text-emerald-300 mb-6 shadow-[0_0_15px_-3px_rgba(52,211,153,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Building Digital Flagships</span>
              </div>

              {/* Profile Avatar Photo with amber rim glow */}
              <div className="relative z-10 mb-6">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E0A533]/30 via-white/10 to-emerald-400/30 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl bg-neutral-900 mx-auto relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                    alt="Apurv - Founder & Lead Developer"
                    className="w-full h-full object-cover grayscale contrast-115"
                  />
                </div>
              </div>

              {/* Founder Statement Card with subtle glassy depth */}
              <div className="relative z-10 w-full bg-gradient-to-b from-neutral-900/95 to-neutral-950/95 border border-white/10 rounded-[22px] p-5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <h3 className="text-xl sm:text-2xl font-geist font-normal text-white mb-1 tracking-tight">
                  Hello, I'm <span className="font-serif-italic font-normal text-[1.12em] text-[#E0A533]">Apurv.</span>
                </h3>
                <p className="text-xs sm:text-[13px] font-geist text-neutral-300 leading-relaxed mt-1.5">
                  "Engineering high-velocity web flagships and resilient full-stack systems designed to turn visitors into lifelong clients."
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: Experience & Architectural Capabilities */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
              className="bg-gradient-to-b from-[#141720] via-[#0E1015] to-[#0B0C10] border border-neutral-800/90 rounded-[32px] p-7 text-white space-y-6 flex-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between"
            >
              {/* Experience */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E0A533] font-inter">
                    LEADERSHIP & EXPERIENCE
                  </h4>
                  <span className="text-[11px] font-inter text-neutral-500 font-bold">2022 — Present</span>
                </div>
                <div className="flex justify-between items-baseline text-base font-normal font-geist text-white tracking-tight">
                  <span className="font-medium text-neutral-100">Greffon Studio</span>
                  <span className="text-xs font-inter font-bold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30 shadow-[0_0_15px_-4px_rgba(52,211,153,0.3)]">
                    $20M+ Scaled
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-400 mt-1 font-geist">
                  Founder & Principal Creative Engineer
                </p>
              </div>

              <div className="w-full h-px bg-neutral-800/80" />

              {/* Designing & Architectural Skills */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-inter mb-2">
                  ENGINEERING CAPABILITIES
                </h4>
                <p className="text-xs sm:text-[13px] text-neutral-300 font-geist leading-relaxed">
                  Full-Stack Web Architecture · Headless Shopify eCommerce · Custom Delta-Sync CRMs · High-Converting CRO Engines
                </p>
              </div>

              <div className="w-full h-px bg-neutral-800/80" />

              {/* Software Stack */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-inter mb-2">
                  PRODUCTION STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "React 19", "Next.js 15", "Node.js", "Python", "Supabase", "TailwindCSS", "GSAP", "AWS ECS", "Docker"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-neutral-200 hover:border-neutral-500 hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (7 Cols): Featured Work Bento + Action Bar */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Bento Container: Proven Impact & Metric Proofs */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: premiumEase }}
              className="bg-gradient-to-b from-[#141720] via-[#0E1015] to-[#0A0C0F] border border-neutral-800/90 rounded-[32px] p-7 sm:p-9 relative overflow-hidden flex-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between"
            >
              {/* Subtle top amber glow streak */}
              <div className="absolute top-0 right-0 w-80 h-32 bg-gradient-to-b from-[#E0A533]/10 to-transparent blur-2xl pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800/70 relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-geist font-normal text-white tracking-[-1.2px]">
                    Proven Impact
                  </h3>
                  <p className="text-xs text-neutral-400 font-geist mt-0.5">
                    Measurable results across production flagship releases
                  </p>
                </div>
                <button 
                  onClick={scrollToProjects}
                  className="text-xs font-inter font-bold text-white flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer group shadow-sm"
                >
                  <span>Selected Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0A533] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-transform" />
                </button>
              </div>

              {/* 2x2 Bento Preview Cards with Luxury Color Grading */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto relative z-10">
                
                {/* Item 1: Warm Amber Ambient Editorial Callout */}
                <div className="bg-gradient-to-br from-[#1C1710] via-[#14120F] to-[#0D0E12] border border-[#E0A533]/25 hover:border-[#E0A533]/50 rounded-[22px] p-6 shadow-[0_8px_30px_-10px_rgba(224,165,51,0.15)] flex flex-col justify-between min-h-[175px] group transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-[#E0A533] uppercase">
                      FLAGSHIP STRATEGY
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
                  </div>
                  <p className="text-lg sm:text-xl font-geist font-normal text-white leading-snug tracking-tight my-2">
                    Architecting digital flagships that convert traffic into revenue.
                  </p>
                  <span className="text-xs font-script text-[#E0A533]/80">
                    zero friction funnels ↴
                  </span>
                </div>

                {/* Item 2: Emerald Mint Ambient Live Revenue Sync Widget */}
                <div className="bg-gradient-to-br from-[#0F1B16] via-[#0D1512] to-[#0A0D10] border border-emerald-500/25 hover:border-emerald-500/50 rounded-[22px] p-6 shadow-[0_8px_30px_-10px_rgba(16,185,129,0.15)] flex flex-col justify-between min-h-[175px] group transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-emerald-400 uppercase">
                      REVENUE ENGINE
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      LIVE SYNC
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-2xl font-normal font-geist text-white tracking-tight">$14,280</span>
                      <span className="text-xs font-inter font-bold text-emerald-300">▲ +42.8%</span>
                    </div>
                    <div className="w-full h-1.5 bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-500/20">
                      <div className="w-[82%] h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                    </div>
                  </div>

                  <span className="text-xs text-neutral-300 font-geist">
                    Automated Supabase & Stripe webhooks
                  </span>
                </div>

                {/* Item 3: Deep Royal Sapphire Ambient CRM Card */}
                <div className="bg-gradient-to-br from-[#101726] via-[#0E131E] to-[#0A0D12] border border-blue-500/25 hover:border-blue-500/50 rounded-[22px] p-6 shadow-[0_8px_30px_-10px_rgba(59,130,246,0.15)] flex flex-col justify-between min-h-[175px] group transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-blue-400 uppercase">
                      ENTERPRISE CRM
                    </span>
                    <span className="text-[10px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                      OFFLINE-FIRST
                    </span>
                  </div>

                  <div className="space-y-1.5 my-2">
                    <div className="flex justify-between text-xs font-geist text-neutral-200">
                      <span>Multi-Branch Inventory</span>
                      <span className="text-blue-400 font-mono font-medium">Synced</span>
                    </div>
                    <div className="flex justify-between text-xs font-geist text-neutral-200">
                      <span>Field Worker Dispatch</span>
                      <span className="text-blue-400 font-mono font-medium">Automated</span>
                    </div>
                  </div>

                  <span className="text-xs text-neutral-400 font-geist">
                    Eliminated 100% field paperwork
                  </span>
                </div>

                {/* Item 4: Sunset Gold Ambient Performance / LCP Speed Metric */}
                <div className="bg-gradient-to-br from-[#1C1510] via-[#14120F] to-[#0B0D11] border border-amber-500/25 hover:border-amber-500/50 rounded-[22px] p-6 shadow-[0_8px_30px_-10px_rgba(245,158,11,0.15)] flex flex-col justify-between min-h-[175px] group transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-[#E0A533] uppercase">
                      CORE WEB VITALS
                    </span>
                    <span className="text-[10px] font-mono text-[#E0A533] bg-[#E0A533]/10 px-2 py-0.5 rounded-full border border-[#E0A533]/25">
                      99 SCORE
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl font-normal font-geist text-white block leading-tight tracking-tight">
                      40% LCP Boost
                    </span>
                    <p className="text-xs text-neutral-300 font-geist mt-1">
                      Sub-second first contentful paint on AWS ECS
                    </p>
                  </div>

                  <div className="w-full h-8 flex items-end">
                    <svg className="w-full h-8 text-[#E0A533] drop-shadow-[0_0_8px_rgba(224,165,51,0.5)]" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M 0 26 Q 25 22, 45 14 T 75 16 T 100 4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Bottom Action / Social Bar (Superdesign Pill Controls with color grading) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
              className="bg-gradient-to-r from-[#141720] via-[#0E1015] to-[#141720] border border-neutral-800/90 rounded-[26px] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]"
            >
              {/* Social Icon Pills */}
              <div className="flex items-center gap-2">
                {[
                  { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com", title: "Twitter" },
                  { icon: <Mail className="w-4 h-4" />, href: "mailto:contact@greffon.studio", title: "Email" },
                  { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com", title: "Instagram" },
                  { icon: <Github className="w-4 h-4" />, href: "https://github.com", title: "GitHub" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-[#E0A533] hover:border-[#E0A533] hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105"
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Action Button: Start a Project with gold-amber glow */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs sm:text-[13px] font-geist font-medium hover:bg-neutral-200 transition-all shadow-[0_0_20px_-3px_rgba(255,255,255,0.35)] cursor-pointer hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black transition-transform" />
              </button>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}


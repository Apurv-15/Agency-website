import { motion } from "motion/react";
import { ArrowUpRight, Mail, Twitter, Instagram, Github } from "lucide-react";

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
      className="w-full text-white py-24 sm:py-32 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden font-geist bg-[#0B0C0E] select-none"
    >
      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Section Top Header (Clean Swiss Editorial) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12 sm:mb-16 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-neutral-400 text-[11px] font-inter font-medium tracking-[0.18em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>Founder & Principal Engineer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-white leading-[1.08]">
              Crafted by Apurv. <br />
              <span className="font-serif-italic font-normal tracking-normal text-[1.08em] text-neutral-400">
                Driven by obsessive craft.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="text-[11px] font-inter font-semibold uppercase tracking-[0.2em] text-neutral-400">
              GREFFON STUDIO
            </span>
            <span className="text-xs font-geist text-neutral-500 mt-1 max-w-xs leading-relaxed">
              Full-Stack Web Architecture, Bespoke E-Commerce & Systems Engineering.
            </span>
          </div>
        </div>

        {/* 2-Column Balanced Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
          
          {/* Left Column (5 Cols): Clean Architectural Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Profile Overview Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="bg-[#121318] border border-white/[0.08] hover:border-white/[0.14] rounded-[28px] p-7 sm:p-8 relative overflow-hidden transition-all flex flex-col items-center text-center group"
            >
              {/* Availability Indicator */}
              <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-inter font-medium text-emerald-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Select Flagships</span>
              </div>

              {/* Profile Avatar Image */}
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/20 bg-neutral-900 mx-auto">
                  <img 
                    src="/apurv_founder.jpg" 
                    alt="Apurv"
                    className="w-full h-full object-cover grayscale contrast-105"
                  />
                </div>
              </div>

              {/* Founder Statement */}
              <div className="w-full text-center">
                <h3 className="text-xl sm:text-2xl font-geist font-normal text-white mb-2 tracking-tight">
                  Apurv <span className="text-neutral-500 text-sm font-normal">/ Studio Lead</span>
                </h3>
                <p className="text-xs sm:text-[13px] font-geist text-neutral-400 leading-relaxed max-w-sm mx-auto">
                  "Engineering high-velocity web flagships and resilient full-stack systems designed to turn visitors into lifelong clients."
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/[0.06] w-full justify-center">
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
                    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all"
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Experience & Production Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
              className="bg-[#121318] border border-white/[0.08] rounded-[28px] p-7 text-white space-y-5 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 font-inter">
                    LEADERSHIP
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">2022 — Present</span>
                </div>
                <div className="flex justify-between items-baseline text-base font-geist text-white tracking-tight">
                  <span className="font-medium">Greffon Studio</span>
                  <span className="text-xs font-mono text-neutral-300 bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/[0.1]">
                    Crossed 6 Figures in Revenue
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-geist">
                  Founder & Principal Creative Engineer
                </p>
              </div>

              <div className="w-full h-px bg-white/[0.06]" />

              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 font-inter mb-3">
                  PRODUCTION STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "React 19", "Next.js 15", "Node.js", "Python", "Supabase", "TailwindCSS", "GSAP", "Docker"].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (7 Cols): Editorial Proof & Impact Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: premiumEase }}
              className="bg-[#121318] border border-white/[0.08] rounded-[28px] p-7 sm:p-9 relative overflow-hidden flex-1 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06] relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-geist font-normal text-white tracking-[-0.02em]">
                    Proven Impact
                  </h3>
                  <p className="text-xs text-neutral-400 font-geist mt-0.5">
                    Measurable results delivered for fast-growing global brands.
                  </p>
                </div>
                <button 
                  onClick={scrollToProjects}
                  className="text-xs font-geist font-medium text-white flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all cursor-pointer group"
                >
                  <span>Selected Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* 2x2 Human & Commercial Metric Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto relative z-10">
                
                {/* Metric 1: Sales Conversion */}
                <div className="bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5.5 flex flex-col justify-between min-h-[160px] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                      WEBSITE CONVERSION
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      +3.4X AVERAGE
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light font-geist text-white tracking-tight">More Buyers, Less Drop-off</span>
                    <p className="text-xs text-neutral-400 font-geist mt-1.5 leading-relaxed">
                      Transforming casual store visitors into paying, returning customers from day one.
                    </p>
                  </div>
                  <span className="text-[11px] font-geist text-neutral-500">
                    High-Converting Storefronts & Checkout
                  </span>
                </div>

                {/* Metric 2: Fast Load Times */}
                <div className="bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5.5 flex flex-col justify-between min-h-[160px] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                      PAGE LOAD SPEED
                    </span>
                    <span className="text-[10px] font-mono text-white bg-white/[0.08] px-2 py-0.5 rounded-full">
                      INSTANT
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light font-geist text-white tracking-tight">&lt; 1 Second</span>
                    <p className="text-xs text-neutral-400 font-geist mt-1.5 leading-relaxed">
                      Instant page loads that prevent mobile shoppers from leaving out of frustration.
                    </p>
                  </div>
                  <span className="text-[11px] font-geist text-neutral-500">
                    Optimized for 100% Mobile & Desktop
                  </span>
                </div>

                {/* Metric 3: Time Saved with Automation */}
                <div className="bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5.5 flex flex-col justify-between min-h-[160px] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                      TIME SAVED
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 bg-white/[0.08] px-2 py-0.5 rounded-full">
                      AUTOPILOT
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light font-geist text-white tracking-tight">200+ Hours / Month</span>
                    <p className="text-xs text-neutral-400 font-geist mt-1.5 leading-relaxed">
                      Automated order tracking, customer emails, and data sync so your team can focus on growth.
                    </p>
                  </div>
                  <span className="text-[11px] font-geist text-neutral-500">
                    Smart Workflows & AI Automation
                  </span>
                </div>

                {/* Metric 4: Marketing ROI */}
                <div className="bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5.5 flex flex-col justify-between min-h-[160px] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-inter font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                      MARKETING RESULTS
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      PROVEN ROAS
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light font-geist text-white tracking-tight">Profitable Ad Scale</span>
                    <p className="text-xs text-neutral-400 font-geist mt-1.5 leading-relaxed">
                      Targeted social and search campaigns that bring qualified leads, not empty clicks.
                    </p>
                  </div>
                  <span className="text-[11px] font-geist text-neutral-500">
                    Performance Marketing & Creative UGC
                  </span>
                </div>

              </div>

              {/* Bottom CTA Strip */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                <span className="text-xs text-neutral-400 font-geist">
                  Have a challenging engineering or flagship project?
                </span>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-geist font-medium hover:bg-neutral-200 transition-all cursor-pointer group"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

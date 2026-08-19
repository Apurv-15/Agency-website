import { motion } from "motion/react";
import { ArrowDown, Sparkles, CheckCircle2, TrendingUp, Layers, Cpu, ShieldCheck } from "lucide-react";
import TextWordReveal from "./TextWordReveal";

const capabilities = [
  "Shopify & Headless eCommerce",
  "High-Converting Sales Funnels",
  "Custom Inventory CRM Apps",
  "Team Tracking & Ops Tech",
  "Multi-Channel Sales Sync",
  "Full-Stack Web Architecture",
  "Real-Time Data Pipelines"
];

const highlights = [
  {
    role: "Founder & Lead Developer",
    company: "Greffon Studio",
    period: "2022 - Present"
  },
  {
    role: "Global eCommerce Growth",
    company: "10+ International Brands Scaled",
    period: "$20M+ GMV Impact"
  },
  {
    role: "Bespoke SaaS & Apps",
    company: "Inventory & CRM Suites",
    period: "Enterprise Tier"
  }
];

export default function AboutMeily() {
  const scrollToProjects = () => {
    const gallery = document.getElementById("showcase-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-apurv" className="w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Outer Curved Container Framing Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[2rem] sm:rounded-[3rem] border border-neutral-900 bg-neutral-950/70 backdrop-blur-xl p-6 sm:p-10 md:p-14 lg:p-16 relative"
          style={{ willChange: "transform, opacity" }}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-6 w-fit shadow-2xs glow-button">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-framer-spin" style={{ willChange: "transform" }} />
                  <span>Leadership & Engineering</span>
                </div>

                {/* Heading with Word Reveal */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-bold tracking-tight text-white mb-2 leading-[1.05]">
                  <TextWordReveal 
                    text="Meet Apurv" 
                    delay={0.1}
                    stagger={0.06}
                  />
                </h2>

                <h3 className="text-lg sm:text-xl font-medium text-emerald-400 mb-6 font-mono">
                  Founder & Lead Developer
                </h3>

                {/* Bio Paragraph */}
                <div className="text-neutral-300 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-normal mb-8 space-y-4">
                  <p>
                    <TextWordReveal 
                      text="We partner with international clients and high-growth eCommerce brands to scale standard Shopify websites into groundbreaking, high-converting digital flagships."
                      delay={0.2}
                      stagger={0.015}
                      blur={false}
                    />
                  </p>
                  <p className="text-neutral-400 text-sm sm:text-[15px]">
                    By deploying elite conversion funnel architectures and building custom bespoke applications — including real-time inventory management CRMs, automated multi-channel sales pipelines, and team tracking tech — we give ambitious founders unfair operational and commercial advantages.
                  </p>
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-px bg-neutral-800/80 mb-8" />

                {/* Capability Pills with Staggered Entrance */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
                  {capabilities.map((cap, idx) => (
                    <motion.span
                      key={cap}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.04 }}
                      className="px-4 sm:px-4.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors shadow-2xs glow-button flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{cap}</span>
                    </motion.span>
                  ))}
                </div>

                {/* Experience Timeline Grid / Table */}
                <div className="space-y-4 max-w-xl mb-10">
                  {highlights.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                      className="grid grid-cols-3 items-center text-xs sm:text-sm py-2.5 border-b border-neutral-900/80"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <span className="text-neutral-400 font-medium">{item.role}</span>
                      <span className="text-white font-semibold text-center">{item.company}</span>
                      <span className="text-emerald-400 text-right font-mono text-[11px] sm:text-xs">{item.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Anchor */}
              <div className="pt-2">
                <button
                  onClick={scrollToProjects}
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group cursor-pointer glow-button w-fit"
                >
                  <span className="text-base sm:text-lg font-medium">Explore Scaled Brands & Works</span>
                  <div 
                    className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all animate-scroll-bounce"
                    style={{ willChange: "transform" }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </button>
              </div>

            </div>

            {/* Right Image Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-[480px] aspect-[4/5] rounded-[1.8rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl group"
                style={{ willChange: "transform, opacity" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Apurv Deshmukh Founder" 
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base">Apurv Deshmukh</h4>
                      <p className="text-neutral-400 text-xs font-mono">Founder · Greffon Studio</p>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                      10+ Brands Scaled
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}



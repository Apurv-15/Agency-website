import { motion } from "motion/react";
import { Lightbulb, ListChecks, Rocket, ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import TextWordReveal from "./TextWordReveal";

interface DesignProcessProps {
  onBookCall?: () => void;
}

const steps = [
  {
    number: "1",
    icon: Lightbulb,
    title: "Strategic Discovery & Architecture",
    description: "We audit your conversion funnels, target audience, and operational bottlenecks to construct a tailored digital roadmap and technical architecture."
  },
  {
    number: "2",
    icon: ListChecks,
    title: "Engineering & App Development",
    description: "From custom Shopify theme builds to proprietary CRM & inventory tracking apps, our senior engineers build high-performance systems with precision."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Seamless Launch & Scale",
    description: "We deploy battle-tested funnels and apps directly into production, monitoring conversion metrics and real-time data flow to guarantee immediate scalability."
  }
];

export default function DesignProcess({ onBookCall }: DesignProcessProps) {
  const scrollToProjects = () => {
    const gallery = document.getElementById("showcase-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookCall = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="design-process" className="w-full bg-transparent text-text-primary py-16 md:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden rounded-[3rem] md:rounded-[5rem] -mt-12 md:-mt-20 z-10 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05),0_-15px_30px_-15px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1024px] mx-auto">
        
        {/* Main Grid: Left Sketching Image | Right Process Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Tall Rounded Photo (5 cols) */}
          <div className="lg:col-span-5 flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[460px] sm:h-[560px] lg:h-full min-h-[500px] rounded-card-normal overflow-hidden bg-white border border-border-muted shadow-lg group"
              style={{ willChange: "transform, opacity" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop" 
                alt="Hand sketching architectural design blueprints with pencil" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Process Heading & 3 Numbered Steps (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Header Area */}
            <div className="mb-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border-muted text-xs font-bold text-text-primary mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-accent-amber animate-framer-spin" style={{ willChange: "transform" }} />
                <span className="font-inter uppercase tracking-wide text-[10px]">Design process</span>
              </div>

              {/* Main Heading with Word Reveal */}
              <h2 className="text-4xl sm:text-5xl font-geist font-normal text-text-primary tracking-tight mb-4 leading-tight">
                <TextWordReveal 
                  text="Process" 
                  delay={0.1}
                  stagger={0.06}
                />
              </h2>

              {/* Subtitle */}
              <p className="text-text-secondary text-sm sm:text-base max-w-xl font-normal leading-relaxed mb-6 font-geist">
                <TextWordReveal 
                  text="Crafting bold visuals that inspire and elevate brands through a methodical engineering process."
                  delay={0.2}
                  stagger={0.02}
                  blur={false}
                />
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={handleBookCall}
                  className="px-6 py-3 rounded-full bg-surface-dark hover:opacity-90 text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98 flex items-center gap-2 cursor-pointer font-inter uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-accent-amber" />
                  <span>Book a Free Call</span>
                </button>

                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3 rounded-full bg-white hover:border-text-primary text-text-primary text-xs sm:text-sm font-bold border border-border-muted transition-all active:scale-98 flex items-center gap-1.5 cursor-pointer font-inter uppercase tracking-wider"
                >
                  <span>See Projects</span>
                  <ArrowUpRight className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>

            {/* 3 Step Cards Stack */}
            <div className="space-y-4">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-7 rounded-card-normal bg-surface-light hover:bg-white border border-border-muted hover:border-text-primary transition-all shadow-sm"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-border-muted">
                        <IconComponent className="w-5 h-5 text-text-primary" />
                      </div>
                      <span className="text-xs font-bold text-accent-amber font-mono">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-geist text-text-primary mb-2">
                      {step.title}
                    </h3>

                    {/* Subtle Divider */}
                    <div className="w-full h-px bg-border-muted/50 my-2.5" />

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal font-geist">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

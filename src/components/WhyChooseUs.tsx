import { motion } from "motion/react";
import { Clock, Target, Maximize, HeartHandshake } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const reasons = [
  {
    title: "Senior Engineers Only",
    description: "Direct collaboration with principal engineers. No junior handoffs, no project manager telephone game, and zero bureaucracy.",
    icon: Target,
  },
  {
    title: "High-Throughput Delivery",
    description: "Our streamlined architecture and modern containerized stack allow us to ship production platforms in weeks, not quarters.",
    icon: Clock,
  },
  {
    title: "Scalable Distributed Systems",
    description: "Built for explosive growth with sub-second latency, offline-first sync, and robust real-time database infrastructure.",
    icon: Maximize,
  },
  {
    title: "Direct Architectural Partnership",
    description: "We don't just ship and disappear. We provide ongoing monitoring, automated CI/CD maintenance, and performance stewardship.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neutral-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neutral-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">GDG Certified Studio</span>
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">The Xforge Advantage</span>
            </div>
            
            <ScrollRevealText>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight tracking-tight text-reveal-target text-reveal">
                Our senior engineering team vs. traditional agency bloat.
              </h2>
              <p className="text-neutral-500 text-lg mb-10 leading-relaxed max-w-lg text-reveal-target text-reveal">
                Traditional agencies assign your product to junior developers while charging for layers of account managers. We operate as a high-density, senior engineering team delivering sub-second load speeds, real-time architectures, and rock-solid reliability.
              </p>
            </ScrollRevealText>
            
            <div className="flex flex-col gap-6">
              {reasons.slice(0, 2).map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">{reason.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 pt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl bg-white border border-neutral-100 p-8 shadow-sm flex flex-col justify-end group transition-all hover:shadow-xl"
              >
                <Maximize className="w-10 h-10 text-neutral-900 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold font-display text-neutral-900 mb-2">Scalable Architecture</h4>
                <p className="text-xs text-neutral-500">Built to handle millions of visitors with ease.</p>
              </motion.div>
              <div className="aspect-[4/5] rounded-3xl bg-neutral-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Team Work" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/5] rounded-3xl bg-neutral-200 overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Design" className="w-full h-full object-cover" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square rounded-3xl bg-neutral-900 p-8 shadow-sm flex flex-col justify-end text-white text-center"
              >
                <div className="text-4xl font-bold font-display mb-1">99%</div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Client Satisfaction</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

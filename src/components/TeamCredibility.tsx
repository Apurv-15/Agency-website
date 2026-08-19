import { motion } from "motion/react";
import { 
  Code2, 
  Cpu, 
  Layers, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Boxes, 
  Workflow, 
  CreditCard,
  Cloud,
  CheckCircle2
} from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const specializations = [
  {
    name: "Real-Time Systems",
    desc: "Socket.io, Supabase Triggers, Redis Pub/Sub",
    icon: Zap,
  },
  {
    name: "Offline-First Architecture",
    desc: "Delta-sync, disk caching, optimistic UI",
    icon: Database,
  },
  {
    name: "3D & WebGL Interfaces",
    desc: "Three.js, GSAP ScrollTrigger, shader effects",
    icon: Boxes,
  },
  {
    name: "Payment Infrastructure",
    desc: "Stripe, Apple Pay, App Store compliance",
    icon: CreditCard,
  },
  {
    name: "AI & Automation",
    desc: "Gemini 1.5 Vision/Pro, BullMQ, Puppeteer",
    icon: Sparkles,
  },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "Node.js",
  "FastAPI",
  "PostgreSQL / Supabase",
  "AWS ECS Fargate",
  "Docker",
  "Redis / BullMQ"
];

export default function TeamCredibility() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white border-b border-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Team Identity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a2e23]">
                Senior Engineering Team
              </span>
            </div>
            
            <ScrollRevealText>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight leading-tight text-reveal text-reveal-target">
                Full-stack systems engineered by <br className="hidden sm:inline" />
                <span className="text-[#1a2e23] italic font-normal font-playfair">principal architects.</span>
              </h2>
            </ScrollRevealText>
          </div>

          <div className="lg:max-w-md text-left lg:text-right">
            <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
              No account managers, junior handoffs, or outsourced bloat. You collaborate directly with senior engineers building production-grade web ecosystems.
            </p>
          </div>
        </div>

        {/* Specialization Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-100/80 hover:border-neutral-200 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center text-[#1a2e23] mb-4 shadow-2xs group-hover:scale-105 group-hover:bg-[#1a2e23] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1 leading-snug">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                    {spec.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Production Stack Strip */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#1a2e23] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400 block mb-1">
              Production Architecture Stack
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Lead Engineer Access</span>
            </div>
            <span className="text-[11px] text-white/60 font-medium">
              Zero junior handoffs · Direct Slack channels
            </span>
          </div>
        </div>

        {/* Single-line Credibility Stat Bar */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-center text-xs md:text-sm font-bold text-neutral-700">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1a2e23]" />
            5+ Production Platforms Shipped
          </span>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1a2e23]" />
            Multi-Industry Clients (Fintech, E-commerce, D2C, Automation)
          </span>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1a2e23]" />
            App Store & Play Store Compliant Deployments
          </span>
        </div>

      </div>
    </section>
  );
}

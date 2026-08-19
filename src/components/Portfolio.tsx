import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, TrendingUp, Zap, Clock, ShieldAlert, CheckCircle2, Globe, Sparkles, Layers } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const projects = [
  {
    title: "Creator Marketplace & Delivery Platform",
    category: "Cross-Platform Marketplace & D2C",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
    tags: ["Cross-Platform", "Stripe & Apple Pay", "BullMQ Caching"],
    link: "#",
    metrics: ["Zero-Memory Retrieval", "500+ Images Cached", "Apple Pay & Stripe"],
    summary: "Heavy LCP latency across 500+ high-res assets resolved via delta-sync local disk caching and BullMQ background workers with native Apple Pay checkout.",
    challenge: "The marketplace catalog suffered from severe LCP latency when rendering 500+ high-resolution artist portfolios. Mobile devices ran out of memory, causing client-side stutter, high bounce rates, and checkout abandonment.",
    solution: "We architected an advanced caching layer using BullMQ async background workers and delta-sync local storage. Assets are cached directly to disk with zero memory overhead, fetching only modified records remotely. Completed with full Apple Pay and Stripe checkout compliant with App Store guidelines.",
    results: [
      { label: "Asset Retrieval Latency", before: "4.8 seconds", after: "0.4 seconds", lift: "92% Latency Cut", icon: Zap },
      { label: "Memory Overhead (500+ Images)", before: "340 MB (Crashes)", after: "0 MB (Disk Cached)", lift: "Zero Memory Leak", icon: CheckCircle2 },
      { label: "App Store & Web Checkout Rate", before: "18.4%", after: "42.1%", lift: "+128% Conversion Lift", icon: TrendingUp }
    ]
  },
  {
    title: "Full-Stack E-Commerce Platform",
    category: "Jewelry / D2C Architecture",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js 15", "Supabase", "AWS ECS Fargate"],
    link: "#",
    metrics: ["40% Faster LCP", "Live Silver API", "AWS ECS Fargate"],
    summary: "High-throughput jewelry platform with dynamic silver-rate pricing, automated Shiprocket fulfillment, and Next.js 15 SSR running on AWS ECS Fargate.",
    challenge: "The brand struggled with slow frontend rendering, manual multi-step order tracking, and static catalog pricing that failed to mirror daily market fluctuations in precious metal rates.",
    solution: "We engineered a modern stack on Next.js 15 + React 19 + Supabase (PostgreSQL), featuring real-time cart sync, automated Shiprocket fulfillment webhooks, and a live silver-rate API for real-time dynamic pricing. Deployed via containerized CI/CD on AWS ECS Fargate with Cloudflare edge caching.",
    results: [
      { label: "Largest Contentful Paint (LCP)", before: "3.6 seconds", after: "1.4 seconds", lift: "40% Faster LCP", icon: Zap },
      { label: "Pricing Sync to Metal Markets", before: "Manual (Hours)", after: "Real-Time (API)", lift: "Instant Margin Sync", icon: Clock },
      { label: "Fulfillment Automation", before: "Manual Dispatch", after: "Shiprocket Auto", lift: "100% Autonomous", icon: CheckCircle2 }
    ]
  },
  {
    title: "Field Operations Mobile App",
    category: "Warranty & Inventory Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["Offline-First", "Multi-Branch RLS", "EAS CI/CD"],
    link: "#",
    metrics: ["Offline-First Sync", "Multi-Branch RLS", "Automated QR Workflows"],
    summary: "Cross-platform mobile operational suite with instant QR code scanning, branch-level Row Level Security, and offline-first PostgreSQL replication.",
    challenge: "Field engineers lacked real-time visibility into branch inventory and relied on paper warranty cards, resulting in lost records, inventory mismatches, and sluggish release cycles.",
    solution: "We developed a cross-platform mobile application deployed to Google Play Store using EAS CI/CD pipelines. Integrated Supabase PostgreSQL triggers for real-time multi-branch synchronization, granular Row Level Security (RLS), and an offline-first architecture for remote job sites.",
    results: [
      { label: "Warranty Generation Time", before: "15 minutes", after: "4 seconds", lift: "Instant QR Issuance", icon: Zap },
      { label: "Inventory Visibility Across Branches", before: "Batch / Daily", after: "Real-Time Triggers", lift: "Zero Blind Spots", icon: TrendingUp },
      { label: "Mobile Deployment Velocity", before: "3 Weeks", after: "Same-Day (EAS)", lift: "Continuous CI/CD", icon: CheckCircle2 }
    ]
  },
  {
    title: "HireHunt — AI Automation Platform",
    category: "AI Automation & Founder Platform",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Gemini 1.5 Pro/Vision", "Redis / BullMQ", "Socket.io"],
    link: "https://hirehunt.app/",
    metrics: ["Gemini 1.5 Vision & Pro", "Redis/BullMQ Stealth", "Real-Time Socket Stream"],
    summary: "Autonomous candidate pipeline leveraging Gemini 1.5 Vision for CAPTCHA solving, Gemini 1.5 Pro for dynamic drafting, and human-mimicry stealth automation.",
    challenge: "Job candidates and recruiter ops spent countless hours on manual, repetitive job application pipelines, form fills, and fragmented submission tracking.",
    solution: "We constructed an autonomous automation backend utilizing Gemini 1.5 Vision for real-time CAPTCHA solving, Gemini 1.5 Pro for tailored cover letters, an asynchronous Redis/BullMQ queue with exponential backoff, stealth Puppeteer automation with human-trajectory mimicry, and Socket.io live log streaming.",
    results: [
      { label: "Autonomous Pipeline Accuracy", before: "Manual Only", after: "98.4% Success", lift: "Zero-Human Input", icon: Sparkles },
      { label: "Execution Queue Throughput", before: "4 tasks/hour", after: "60+ tasks/hour", lift: "15x Scaled Pipeline", icon: Zap },
      { label: "Live Observability Streaming", before: "Polling / Laggy", after: "45ms Socket.io", lift: "Instant Stream", icon: CheckCircle2 }
    ]
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Case Studies & Production Deployments</span>
            <ScrollRevealText>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 leading-tight tracking-tight text-reveal text-reveal-target">
                Engineered for scale. <br /> Proven in production.
              </h2>
            </ScrollRevealText>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#1a2e23] bg-[#1a2e23]/5 px-4 py-2 rounded-full self-center md:self-end">
            Click any project to inspect architectural case study
          </div>
        </div>

        {/* Projects Grid - 2x2 Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer block text-left bg-[#fcfbfa] rounded-[2.2rem] p-6 sm:p-8 border border-neutral-200/70 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 mb-6 border border-neutral-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <span>View Technical Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/60 text-[10px] font-bold text-neutral-800 uppercase tracking-wider shadow-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 group-hover:text-[#1a2e23] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-[#1a2e23] group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-xs font-bold text-[#1a2e23] uppercase tracking-wider mb-3">
                  {project.category}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Metric Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/50 mt-auto">
                {project.metrics.map(metric => (
                  <span key={metric} className="px-3 py-1 rounded-full bg-[#1a2e23]/5 border border-[#1a2e23]/10 text-[11px] font-bold text-[#1a2e23] tracking-tight">
                    ● {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />

            {/* Side Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 px-8 py-6 border-b border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a2e23] block mb-1">
                    Architectural Deep-Dive
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-3 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-all shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Banner */}
              <div className="w-full h-56 relative bg-neutral-100 shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#1a2e23] border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 space-y-8 flex-grow">
                
                {/* Challenge & Solution Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60">
                    <div className="flex items-center gap-2 text-amber-800 mb-3">
                      <ShieldAlert className="w-5 h-5" />
                      <h4 className="font-bold text-xs uppercase tracking-wider">The Problem</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#1a2e23]/5 border border-[#1a2e23]/15">
                    <div className="flex items-center gap-2 text-[#1a2e23] mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <h4 className="font-bold text-xs uppercase tracking-wider">Our Architectural Solution</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Hard Performance Results */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
                    Quantifiable Production Benchmarks
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-neutral-100 bg-neutral-50/60 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-[#1a2e23]/10 text-[#1a2e23]">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h5 className="font-bold text-neutral-900 text-sm leading-tight">{result.label}</h5>
                              <span className="text-xs font-bold uppercase tracking-wider text-[#1a2e23]">{result.lift}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 self-start md:self-center">
                            <div className="text-left md:text-right">
                              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Before</span>
                              <span className="text-sm font-semibold text-neutral-400 line-through font-mono">{result.before}</span>
                            </div>
                            <div className="w-6 h-px bg-neutral-200" />
                            <div>
                              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest block">With Xforge</span>
                              <span className="text-sm sm:text-base font-bold text-[#1a2e23] font-mono">{result.after}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Drawer Footer CTA */}
              <div className="sticky bottom-0 bg-neutral-50 p-6 border-t border-neutral-100 flex items-center justify-between gap-4 mt-auto">
                {selectedProject.link !== "#" ? (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-black transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#1a2e23]" />
                    Visit Live Production Platform
                  </a>
                ) : (
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Enterprise Client Work
                  </span>
                )}
                
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    const bookingSec = document.getElementById("booking");
                    if (bookingSec) {
                      bookingSec.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-2 bg-[#1a2e23] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all text-sm group"
                >
                  Architect Your System
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

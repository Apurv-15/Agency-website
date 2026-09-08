import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Layers, Code2, Cpu, Globe, Rocket } from 'lucide-react';

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  metrics: { label: string; value: string };
  icon: React.ReactNode;
  previewType: 'brand' | 'web' | 'code' | 'growth' | 'ai';
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand',
    num: '01',
    title: 'Brand Strategy & Visual Systems',
    category: 'IDENTITY ARCHITECTURE',
    summary: 'We architect iconic brands with clear category positioning, editorial typography, bespoke design tokens, and timeless visual identity.',
    deliverables: ['Design Systems & Tokens', 'Typography & Brand Guidelines', '3D Asset Direction', 'Packaging & Digital Collateral'],
    metrics: { label: 'Category Value Uplift', value: '+3.4x' },
    icon: <Layers className="w-5 h-5" />,
    previewType: 'brand',
  },
  {
    id: 'web',
    num: '02',
    title: 'Flagship Digital Stores & WebGL',
    category: 'EXPERIENCE DESIGN',
    summary: 'Custom digital flagships engineered to convert high-intent traffic through cinematic pacing, smooth scroll transitions, and frictionless checkout funnels.',
    deliverables: ['Next.js 15 Custom Storefronts', 'Headless Shopify Architecture', 'Micro-Interactions & 3D Shaders', 'Sub-second Instant Page Transitions'],
    metrics: { label: 'Average Conversion Lift', value: '+42.8%' },
    icon: <Globe className="w-5 h-5" />,
    previewType: 'web',
  },
  {
    id: 'dev',
    num: '03',
    title: 'Full-Stack Software Engineering',
    category: 'PLATFORM ARCHITECTURE',
    summary: 'Clean, scalable, and resilient cloud architectures built on modern infrastructure with zero technical debt and rock-solid uptime.',
    deliverables: ['TypeScript & React 19', 'Supabase Database & Realtime Sync', 'BullMQ Background Worker Queues', 'AWS ECS & Docker Deployments'],
    metrics: { label: 'P99 Server Latency', value: '< 28ms' },
    icon: <Code2 className="w-5 h-5" />,
    previewType: 'code',
  },
  {
    id: 'ai',
    num: '04',
    title: 'AI Workflows & Neural Automation',
    category: 'INTELLIGENT SYSTEMS',
    summary: 'Intelligent automation pipelines and agentic AI integrations that eliminate manual back-office tasks and supercharge operations.',
    deliverables: ['Custom LLM Pipelines & RAG', 'Automated Logistics Dispatch', 'Real-Time Telemetry & Dashboards', 'Edge Processing & Vector Indexing'],
    metrics: { label: 'Operational Hours Saved', value: '180h / mo' },
    icon: <Cpu className="w-5 h-5" />,
    previewType: 'ai',
  },
  {
    id: 'cro',
    num: '05',
    title: 'Conversion Rate Optimization (CRO)',
    category: 'REVENUE ACCELERATION',
    summary: 'Data-driven funnel engineering, A/B experiments, and performance speed audits that unlock latent revenue in your existing traffic.',
    deliverables: ['Core Web Vitals 99+ Tuning', 'Checkout Funnel Friction Elimination', 'Behavioral Heatmap Auditing', 'Multi-variant Landing Testing'],
    metrics: { label: 'LCP Page Load Boost', value: '40% Faster' },
    icon: <Rocket className="w-5 h-5" />,
    previewType: 'growth',
  },
];

export default function AgencyServicesPage() {
  const [activeId, setActiveId] = useState<string>('web');

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[1];

  return (
    <div
      id="services"
      className="relative w-full bg-[#FAF9F6] text-neutral-900 font-geist selection:bg-neutral-800 selection:text-white overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle Swiss Grid & Grain Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-white/60 to-[#FAF9F6] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(rgb(0, 0, 0) 0.6px, rgba(0, 0, 0, 0) 1.4px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Background Architectural Watermark */}
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none overflow-hidden">
        <span className="text-[72px] sm:text-[130px] md:text-[180px] lg:text-[230px] font-geist font-black tracking-[-0.04em] uppercase whitespace-nowrap text-black/[0.03] leading-none block">
          CAPABILITIES
        </span>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D6D6D6] pb-8 mb-12 sm:mb-16 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-neutral-600 text-xs font-inter font-bold tracking-[0.18em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
              <span>Full-Spectrum Agency Practices</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-2px] sm:tracking-[-3px] text-black leading-[1.08]">
              Engineered to convert. <br />
              <span className="font-serif-italic font-normal tracking-normal text-[1.1em] text-neutral-700">
                Designed to be remembered.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-[#E0A533]">
              02 / PRACTICES
            </span>
            <span className="text-xs font-geist text-neutral-500 mt-1 max-w-xs">
              End-to-end creative engineering for founders seeking market authority.
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            INNOVATIVE SPLIT ARCHITECTURAL STAGE (Interactive Ledger + Live Studio Deck)
            Replaces repetitive bento boxes with a sleek, interactive luxury showroom
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* LEFT 6 COLS: Interactive Editorial Service Ledger Accordion */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[#D6D6D6]/80 border-y border-[#D6D6D6]/80">
            {SERVICES_DATA.map((service) => {
              const isActive = activeId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group py-5 sm:py-6 px-4 sm:px-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                    isActive 
                      ? 'bg-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] scale-[1.01]' 
                      : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className={`text-xs sm:text-sm font-mono font-bold tracking-wider transition-colors ${
                        isActive ? 'text-[#E0A533]' : 'text-neutral-400 group-hover:text-neutral-700'
                      }`}>
                        {service.num}
                      </span>
                      <div>
                        <span className="text-[10px] font-inter font-bold tracking-[0.2em] uppercase text-neutral-400 block mb-0.5">
                          {service.category}
                        </span>
                        <h3 className={`text-base sm:text-xl font-geist font-medium transition-colors ${
                          isActive ? 'text-black' : 'text-neutral-800 group-hover:text-black'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-black text-white shadow-sm rotate-45' 
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-black group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Summary & Deliverables under active item */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: premiumEase }}
                        className="overflow-hidden pt-4 mt-3 border-t border-neutral-100"
                      >
                        <p className="text-xs sm:text-sm text-neutral-600 font-geist leading-relaxed mb-4">
                          {service.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-2">
                          {service.deliverables.map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100/90 text-black text-[11px] font-inter font-medium border border-neutral-200"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#E0A533]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT 6 COLS: Sticky Dynamic Architectural Stage / Device Mockup */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative w-full min-h-[480px] sm:min-h-[540px] bg-[#0E1015] rounded-[32px] p-7 sm:p-9 text-white border border-neutral-800 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col justify-between">
              
              {/* Dynamic Atmospheric Spotlight */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E0A533]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Stage Top Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#E0A533] animate-pulse" />
                  <span className="text-[11px] font-inter font-bold tracking-[0.2em] uppercase text-neutral-300">
                    STUDIO STAGE · {activeService.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400">
                    {activeService.num} / 05
                  </span>
                </div>
              </div>

              {/* Central Stage Visual Display (Dynamic per active service) */}
              <div className="relative z-10 my-auto py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: premiumEase }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* Visual 1: Web Design Mac Window Mockup */}
                    {activeService.previewType === 'web' && (
                      <div className="w-full max-w-md bg-[#16181F] rounded-2xl border border-white/15 p-5 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-neutral-400">greffon.studio/flagship</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">60 FPS</span>
                        </div>
                        <div className="space-y-3">
                          <div className="h-28 rounded-xl bg-gradient-to-tr from-black via-neutral-900 to-neutral-800 p-4 flex flex-col justify-between border border-white/5">
                            <span className="text-[10px] font-mono text-[#E0A533] uppercase tracking-widest">NEXT.JS 15 STOREFRONT</span>
                            <span className="text-base font-normal font-geist text-white">Sub-50ms Global Edge Navigation</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                              <span className="text-[10px] font-mono text-neutral-400 block">LCP Speed</span>
                              <span className="text-sm font-bold text-white">0.68s</span>
                            </div>
                            <div className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                              <span className="text-[10px] font-mono text-neutral-400 block">Checkout Funnel</span>
                              <span className="text-sm font-bold text-emerald-400">Zero Dropoff</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Code Editor Window */}
                    {activeService.previewType === 'code' && (
                      <div className="w-full max-w-md bg-[#16181F] rounded-2xl border border-white/15 p-5 shadow-2xl font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                          <span className="text-neutral-400">api/webhook/sync.ts</span>
                          <span className="text-emerald-400 text-[10px]">PASS 100%</span>
                        </div>
                        <div className="space-y-1.5 text-neutral-300">
                          <p><span className="text-purple-400">const</span> <span className="text-blue-400">queue</span> = <span className="text-purple-400">new</span> <span className="text-amber-300">BullMQWorker</span>('orders');</p>
                          <p><span className="text-purple-400">await</span> supabase.<span className="text-blue-400">rpc</span>('reconcile_delta', {'{'}</p>
                          <p className="pl-4 text-emerald-300">batch_size: 500,</p>
                          <p className="pl-4 text-emerald-300">strict_consistency: true</p>
                          <p>{'}'});</p>
                          <p className="text-neutral-500 pt-1">// Zero-memory overhead verified on ECS</p>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Brand Guidelines Stack */}
                    {activeService.previewType === 'brand' && (
                      <div className="relative w-full max-w-sm h-52 flex items-center justify-center">
                        <div className="absolute w-44 h-48 bg-neutral-900 border border-neutral-700 rounded-2xl -rotate-12 shadow-2xl p-4 flex flex-col justify-between">
                          <span className="text-[8px] font-mono text-neutral-400 uppercase">Brand Guideline</span>
                          <span className="text-xl font-serif tracking-widest text-white">greffon.</span>
                          <span className="text-[8px] font-mono text-[#E0A533]">Tokens v3.0</span>
                        </div>
                        <div className="absolute w-44 h-48 bg-white text-black border border-neutral-200 rounded-2xl rotate-6 shadow-2xl p-4 flex flex-col justify-between translate-x-4">
                          <span className="text-[8px] font-mono text-neutral-500 uppercase">Swiss Editorial</span>
                          <span className="text-lg font-geist font-normal text-black">Precision Typography</span>
                          <span className="text-[8px] font-mono text-neutral-600">Geist / Inter</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: AI Telemetry Nodes */}
                    {activeService.previewType === 'ai' && (
                      <div className="w-full max-w-md bg-[#16181F] rounded-2xl border border-white/15 p-5 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                          <span className="font-mono text-neutral-300">Neural Workflow Dispatch</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">ACTIVE</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-xs">
                            <span className="text-neutral-300 font-geist">Audio Transcribe Engine</span>
                            <span className="text-emerald-400 font-mono">0.12s latency</span>
                          </div>
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-xs">
                            <span className="text-neutral-300 font-geist">Vector Embedding Cluster</span>
                            <span className="text-emerald-400 font-mono">1,500 qps</span>
                          </div>
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-xs">
                            <span className="text-neutral-300 font-geist">Autonomous Worker Bot</span>
                            <span className="text-blue-400 font-mono">Standby</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 5: CRO Growth Metric */}
                    {activeService.previewType === 'growth' && (
                      <div className="w-full max-w-md bg-[#16181F] rounded-2xl border border-white/15 p-6 shadow-2xl text-center">
                        <span className="text-[10px] font-inter font-bold tracking-[0.2em] text-[#E0A533] uppercase block mb-2">
                          CORE WEB VITALS BENCHMARK
                        </span>
                        <div className="text-4xl sm:text-5xl font-normal font-geist text-white tracking-tight mb-2">
                          40% Faster
                        </div>
                        <p className="text-xs text-neutral-400 font-geist mb-5">
                          Accelerating visitor time-to-interact from 3.2s to sub-600ms.
                        </p>
                        <div className="w-full h-12 flex items-end">
                          <svg className="w-full h-12 text-emerald-400" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M 0 26 Q 25 22, 45 14 T 75 16 T 100 4" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage Bottom Proof Banner */}
              <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-inter font-bold text-neutral-400 uppercase tracking-widest block">
                    {activeService.metrics.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-normal font-geist text-white">
                    {activeService.metrics.value}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-geist font-medium hover:bg-neutral-200 transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Book this Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 sm:mt-20 w-full rounded-[28px] bg-white border border-[#D6D6D6] p-8 sm:p-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-geist font-normal text-black tracking-tight mb-1">
              Have a tailored technical requirement?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-geist">
              We engineer custom flagships, AI backends, and bespoke architectures from zero to launch.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-geist font-medium hover:bg-neutral-800 transition-all shadow-md shrink-0 cursor-pointer group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}

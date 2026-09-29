import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  ShoppingBag, 
  BarChart3, 
  Camera, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  metricNumber: string;
  metricLabel: string;
  screenTitle: string;
  screenSubtitle: string;
  screenCategory: string;
  screenTagline: string;
  previewImg: string;
  screenHeroImage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    num: '01',
    name: 'Web Design & Development',
    description: 'Beautiful, fast websites built around your brand and designed to convert.',
    icon: Monitor,
    tag: 'Premium Websites',
    metricNumber: '3.4x',
    metricLabel: 'Increase in sales',
    screenTitle: 'SOUL VIVA',
    screenSubtitle: 'Skincare rooted in nature.',
    screenCategory: 'Shop / About / Ingredients / Blog',
    screenTagline: 'Pure ingredients. Real results. A healthier, brighter you — naturally.',
    previewImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    screenHeroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ecommerce',
    num: '02',
    name: 'E-commerce',
    description: 'High-converting Shopify & custom stores built to sell.',
    icon: ShoppingBag,
    tag: 'High-Converting E-commerce',
    metricNumber: '4.2x',
    metricLabel: 'Checkout conversion',
    screenTitle: 'LUMEN STUDIO',
    screenSubtitle: 'Architectural Home & Objects',
    screenCategory: 'Collection / Objects / Lighting / Cart (2)',
    screenTagline: 'Form meets tactile serenity. Handcrafted luxury for discerning modern spaces.',
    previewImg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
    screenHeroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'performance-marketing',
    num: '03',
    name: 'Performance Marketing',
    description: 'Paid campaigns designed to acquire customers, not just clicks.',
    icon: BarChart3,
    tag: 'Performance Marketing',
    metricNumber: '5.8x',
    metricLabel: 'Average ROAS achieved',
    screenTitle: 'GROWTH OS',
    screenSubtitle: 'Scale without diminishing returns.',
    screenCategory: 'Paid Social / Search / Retargeting / Analytics',
    screenTagline: 'Predictable high-yield customer acquisition pipelines built for hyper-growth.',
    previewImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    screenHeroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'content-ugc',
    num: '04',
    name: 'Content & UGC',
    description: 'Photography, video and AI-powered UGC that feels real.',
    icon: Camera,
    tag: 'Content & UGC',
    metricNumber: '12M+',
    metricLabel: 'Organic video views',
    screenTitle: 'CREATIVE LAB',
    screenSubtitle: 'High-impact editorial & UGC assets.',
    screenCategory: 'Campaign Films / Product Stills / TikTok / 4K UGC',
    screenTagline: 'Authentic social-first storytelling that commands attention and drives impulse intent.',
    previewImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    screenHeroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ai-automation',
    num: '05',
    name: 'AI & Automation',
    description: 'Custom AI workflows and software that eliminate repetitive work.',
    icon: Sparkles,
    tag: 'AI & Automation',
    metricNumber: '240h',
    metricLabel: 'Saved monthly per client',
    screenTitle: 'SYNAPSE AI',
    screenSubtitle: 'Autonomous enterprise workflows.',
    screenCategory: 'LLM Agents / Auto-Dispatch / CRM Sync / Neural QA',
    screenTagline: 'Zero-touch operations that execute multi-step logic at lightning-fast speed.',
    previewImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    screenHeroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function AgencyServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeService = SERVICES[activeIndex];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F5] text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-white flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-18">
      
      {/* ─────────────────────────────────────────────────────────────
          MAIN TWO-COLUMN HERO & SERVICES COMPOSITION
          ───────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1560px] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
        
        {/* LEFT COLUMN: Hero text + 5 Service Rows (Approx 45% Width) */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
          
          {/* Small Eyebrow */}
          <div className="mb-4">
            <span className="text-[12px] font-semibold tracking-[0.24em] uppercase text-[#777777]">
              SERVICES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-normal tracking-[-0.035em] text-[#111111] leading-[1.06] mb-5">
            We build digital <br />
            experiences that <br />
            <span className="text-[#888888] font-normal">move businesses.</span>
          </h1>

          {/* Subheadline description */}
          <p className="text-[16px] sm:text-[17px] text-[#666666] font-normal leading-relaxed max-w-[490px] mb-8 sm:mb-10">
            Websites, e-commerce, marketing, content and AI solutions for ambitious brands.
          </p>

          {/* 5 Service Rows List */}
          <div className="flex flex-col space-y-1 sm:space-y-1.5 w-full">
            {SERVICES.map((service, index) => {
              const isActive = activeIndex === index;
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 select-none ${
                    isActive 
                      ? 'bg-white shadow-[0_12px_32px_-10px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04]' 
                      : 'hover:bg-white/50'
                  }`}
                >
                  {/* Left: Number + Icon + Text */}
                  <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 pr-3">
                    
                    {/* Index Number */}
                    <span className="text-[12px] sm:text-[13px] font-medium tracking-wider text-[#999999] shrink-0 w-6">
                      {service.num}
                    </span>

                    {/* Minimal Rounded Icon Container */}
                    <div 
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#111111] text-white shadow-sm'
                          : 'bg-[#EDEDEA] text-[#555555] group-hover:bg-[#E2E2DF]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111111] tracking-[-0.01em] truncate">
                        {service.name}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] text-[#777777] leading-snug line-clamp-1 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Small Circular Arrow Button */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'bg-[#EDEDEA] text-[#777777] group-hover:bg-[#111111] group-hover:text-white'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT COLUMN: Master Art-Directed Visual Canvas (Approx 55% Width) */}
        <div className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center relative">
          
          {/* Main Visual Rounded Container (820px x 780px Proportions) */}
          <div className="relative w-full aspect-[4/3.7] sm:aspect-[4/3.4] lg:aspect-[1.12/1] max-w-[840px] bg-[#EAE9E4] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_24px_50px_-18px_rgba(0,0,0,0.08)] border border-[#E0DFDA] flex items-center justify-center">
            
            {/* Background Studio Lighting & Atmosphere (Photographic warmth) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E4E3DD] via-[#EEEEEC] to-[#F5F4F0] opacity-90" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#D8D6CF]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle organic ground elevation shadow */}
            <div className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-black/15 blur-2xl rounded-full pointer-events-none" />

            {/* ─────────────────────────────────────────────────────────────
                FLOATING PERFORMANCE CARD (Top Right Badge)
                ───────────────────────────────────────────────────────────── */}
            <motion.div
              key={`metric-${activeService.id}`}
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 sm:top-10 right-6 sm:right-10 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] border border-[#EBEBE8] min-w-[150px] sm:min-w-[180px]"
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-1.5 text-neutral-800">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                {/* Mini Bar Chart graphic */}
                <div className="flex items-end gap-1 h-5 sm:h-6">
                  <span className="w-1.5 h-2.5 bg-neutral-200 rounded-xs" />
                  <span className="w-1.5 h-4 bg-neutral-300 rounded-xs" />
                  <span className="w-1.5 h-6 bg-[#111111] rounded-xs" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
                {activeService.metricNumber}
              </div>
              <div className="text-[11px] sm:text-[12px] font-medium text-[#777777] mt-0.5">
                {activeService.metricLabel}
              </div>
            </motion.div>

            {/* ─────────────────────────────────────────────────────────────
                5 FLOATING PREVIEW CARDS (Left Vertical Stack)
                ───────────────────────────────────────────────────────────── */}
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-2.5 max-w-[140px] lg:max-w-[155px]">
              {SERVICES.map((s, idx) => {
                const isCardActive = activeIndex === idx;
                return (
                  <button
                    key={`preview-${s.id}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-full h-[62px] rounded-xl overflow-hidden text-left p-2.5 flex flex-col justify-end transition-all duration-300 border ${
                      isCardActive
                        ? 'ring-2 ring-black border-transparent scale-[1.04] shadow-lg'
                        : 'border-white/40 opacity-75 hover:opacity-100 hover:scale-[1.02]'
                    }`}
                  >
                    {/* Preview Image Thumbnail */}
                    <img
                      src={s.previewImg}
                      alt={s.tag}
                      className="absolute inset-0 w-full h-full object-cover brightness-[0.68]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <span className="relative z-10 text-[9px] font-bold text-white/80 font-mono tracking-wider">
                      {s.num}
                    </span>
                    <span className="relative z-10 text-[11px] font-semibold text-white leading-tight line-clamp-1">
                      {s.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ─────────────────────────────────────────────────────────────
                HERO MACBOOK PRO 3/4 FLOATING COMPOSITION
                ───────────────────────────────────────────────────────────── */}
            <div className="relative z-10 w-full flex items-center justify-center pl-0 sm:pl-28 lg:pl-32 pr-2 sm:pr-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.96, rotateX: 6, rotateY: -6 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[560px] lg:max-w-[620px] select-none perspective-1000"
                >
                  {/* Laptop Upper Display Frame (Space Gray Aluminum Bezel) */}
                  <div className="relative w-full aspect-[16/10.4] bg-[#1A1A1A] rounded-t-[18px] sm:rounded-t-[22px] p-[6px] sm:p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] border-t border-white/20">
                    
                    {/* Top Camera Notch/Dot */}
                    <div className="absolute top-[4px] sm:top-[6px] left-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black rounded-full flex items-center justify-center z-30">
                      <span className="w-1 h-1 bg-[#1c2d42] rounded-full" />
                    </div>

                    {/* High-Resolution Screen Glass */}
                    <div className="relative w-full h-full bg-[#FAF9F5] rounded-t-[12px] sm:rounded-t-[15px] overflow-hidden flex flex-col">
                      
                      {/* Browser / Skincare Header Navigation */}
                      <div className="w-full bg-[#FAF9F5]/90 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/[0.04] text-[#111111]">
                        <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.16em] uppercase">
                          {activeService.screenTitle}
                        </span>
                        
                        <div className="hidden sm:flex items-center gap-4 text-[10px] sm:text-[11px] text-[#777777] font-medium">
                          <span>Shop</span>
                          <span>About</span>
                          <span>Ingredients</span>
                          <span>Blog</span>
                        </div>

                        <span className="text-[10px] sm:text-[11px] font-medium text-[#111111]">
                          Cart (0)
                        </span>
                      </div>

                      {/* Screen Content Hero Banner (Editorial Photography & Typography) */}
                      <div className="relative flex-1 w-full bg-[#F4F2EB] flex items-center p-5 sm:p-8 overflow-hidden">
                        
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#EBE6DC] via-[#F4F2EB] to-transparent pointer-events-none" />

                        {/* Left Hero Text on Screen */}
                        <div className="relative z-10 max-w-[210px] sm:max-w-[260px]">
                          <h2 className="text-xl sm:text-3xl font-serif text-[#1C1B18] tracking-tight leading-[1.08] mb-2 sm:mb-3">
                            {activeService.screenSubtitle.split(' ')[0]} <br />
                            <span className="italic font-normal">
                              {activeService.screenSubtitle.split(' ').slice(1).join(' ')}
                            </span>
                          </h2>

                          <p className="text-[9px] sm:text-[11px] text-[#6E6B64] leading-relaxed mb-4 hidden sm:block">
                            {activeService.screenTagline}
                          </p>

                          <button className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#1C1B18] text-white text-[9px] sm:text-[11px] font-medium hover:bg-black transition-all">
                            <span>Shop Now</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Right Hero Product Photograph (Editorial Skin Bottle / Asset) */}
                        <div className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-full flex items-center justify-center pointer-events-none">
                          <img
                            src={activeService.screenHeroImage}
                            alt="Product hero"
                            className="h-[88%] w-auto object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.22)] mix-blend-multiply"
                          />
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Laptop Lower Base / Chassis (MacBook Wedge Pro Edge) */}
                  <div className="relative w-[104%] -left-[2%] h-3.5 sm:h-4.5 bg-gradient-to-b from-[#C4C4C4] via-[#9E9E9E] to-[#6E6E6E] rounded-b-[10px] sm:rounded-b-[14px] shadow-[0_16px_35px_rgba(0,0,0,0.3)] flex justify-center">
                    {/* Center Thumb Notch */}
                    <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#5A5A5A] rounded-b-md" />
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* ─────────────────────────────────────────────────────────────
                BOTTOM PLATFORM STRIP (Bottom Right Pill Badge)
                ───────────────────────────────────────────────────────────── */}
            <div className="absolute bottom-5 sm:bottom-8 right-5 sm:right-8 z-30 bg-[#E2E1DC]/80 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-white/60 shadow-xs flex items-center gap-4 sm:gap-6 text-[#222222]">
              
              {/* Shopify */}
              <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-semibold opacity-80 hover:opacity-100 transition-opacity">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shopify</span>
              </div>
              <span className="w-px h-3.5 bg-black/10" />

              {/* Meta */}
              <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-semibold opacity-80 hover:opacity-100 transition-opacity">
                <span>∞ Meta</span>
              </div>
              <span className="w-px h-3.5 bg-black/10" />

              {/* Google */}
              <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-semibold opacity-80 hover:opacity-100 transition-opacity">
                <span>Google</span>
              </div>
              <span className="w-px h-3.5 bg-black/10" />

              {/* OpenAI */}
              <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-semibold opacity-80 hover:opacity-100 transition-opacity">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OpenAI</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Footer subtle spacing */}
      <footer className="w-full max-w-[1560px] mx-auto pt-6 text-center text-[12px] text-[#999999]">
        <span>© {new Date().getFullYear()} GREFFON Studio. All rights reserved.</span>
      </footer>

    </div>
  );
}

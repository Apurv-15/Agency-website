import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AgencyServicesPage() {
  return (
    <div
      id="services"
      className="relative w-full bg-[#FAF9F6] text-neutral-900 font-geist selection:bg-neutral-800 selection:text-white overflow-hidden py-16 sm:py-24"
    >
      {/* Editorial Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-white/50 to-[#FAF9F6] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      {/* ═══════════════════════════════════════════════════════════════════
          FOREGROUND EDITORIAL SERVICES CONTENT
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 py-8 px-4 sm:px-8 lg:px-14 pb-28">

        {/* ═══════════════════════════════════════════════════════════════════
            PAGE HEADER (Minimal Understated Top Bar)
            ═══════════════════════════════════════════════════════════════════ */}
        <header className="max-w-[1380px] mx-auto flex items-center justify-between pt-2 pb-10 relative z-20">
          <span className="text-xs sm:text-[13px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-light select-none">
            FUTURE
          </span>
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs sm:text-[13px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-light hover:text-black transition-colors cursor-pointer select-none"
          >
            MENU
          </button>
        </header>

        {/* ═══════════════════════════════════════════════════════════════════
            BACKGROUND TYPOGRAPHY (Oversized Editorial Watermark 3-6% Opacity)
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="absolute top-[80px] sm:top-[100px] lg:top-[120px] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none overflow-hidden">
          <span className="text-[64px] sm:text-[100px] md:text-[130px] lg:text-[170px] xl:text-[200px] font-geist font-black tracking-[-0.03em] uppercase whitespace-nowrap text-black/[0.04] leading-none block">
            SERVICES WE OFFER
          </span>
        </div>

        <div className="max-w-[1380px] mx-auto relative z-10">
          
          {/* ═══════════════════════════════════════════════════════════════════
              INTRODUCTION BLOCK (Upper-Left Integration + View Our Work)
              ═══════════════════════════════════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 relative z-10 pt-2"
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                SERVICES
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-geist font-light text-neutral-900 tracking-tight leading-tight">
                We offer
              </h1>
              <p className="text-xs sm:text-[13px] font-light text-neutral-500 max-w-md mt-2 leading-relaxed">
                End-to-end creative and technical services for brands, digital products and experiences that make an impact.
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-neutral-500 hover:text-black transition-colors group cursor-pointer"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════
            THREE-COLUMN ASYMMETRIC MASONRY CARD SYSTEM
            Center column rises noticeably higher than left and right.
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-start">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Card 01 & Card 04 (Starts Lower)
              ───────────────────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05, ease: premiumEase }}
            className="flex flex-col gap-6 lg:gap-7 pt-4 lg:pt-14"
          >
            
            {/* CARD 01: BRAND STRATEGY & IDENTITY */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[490px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">01</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2.5 pr-6">
                BRAND STRATEGY<br />& IDENTITY
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-6">
                We craft meaningful brands with clear positioning, distinctive visual systems, and timeless design.
              </p>

              {/* Lower Visual: Monochrome Brand Guideline Presentation (lovart.) */}
              <div className="relative w-full h-56 mt-auto flex items-end justify-center translate-y-4">
                {/* Background soft surface shadow */}
                <div className="absolute bottom-0 w-4/5 h-16 bg-black/[0.04] blur-xl rounded-full" />
                
                {/* Book 1: Black Debossed Brand Guideline Booklet */}
                <div className="absolute w-36 sm:w-40 h-52 bg-[#141414] rounded-lg shadow-2xl border border-neutral-800/80 transform -rotate-12 -translate-x-12 z-10 p-5 flex flex-col justify-between group-hover:-translate-x-14 group-hover:-rotate-14 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-widest">Brand Guide</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  </div>
                  <div className="my-auto text-center">
                    <span className="text-white font-serif text-2xl tracking-widest font-normal">lovart.</span>
                    <div className="w-6 h-px bg-neutral-700 mx-auto mt-2" />
                  </div>
                  <div className="flex justify-between items-end text-[6px] font-mono text-neutral-600">
                    <span>SYSTEM SPECIMEN</span>
                    <span>2026</span>
                  </div>
                </div>

                {/* Book 2: White Stationery Specimen Overlapping */}
                <div className="absolute w-36 sm:w-40 h-52 bg-white rounded-lg shadow-xl border border-neutral-200/90 transform rotate-6 translate-x-10 z-20 p-5 flex flex-col justify-between group-hover:translate-x-12 group-hover:rotate-8 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-mono text-neutral-400 uppercase tracking-widest">Visual System</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                  </div>
                  <div className="my-auto text-center">
                    <span className="text-[#141414] font-serif text-2xl tracking-widest font-normal">lovart.</span>
                    <div className="w-6 h-px bg-neutral-200 mx-auto mt-2" />
                  </div>
                  <div className="flex justify-between items-end text-[6px] font-mono text-neutral-400">
                    <span>TYPOGRAPHY & GRID</span>
                    <span>V3.4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 04: PRODUCT DESIGN & UX */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[520px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">04</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2.5 pr-6">
                PRODUCT DESIGN<br />& UX
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-6">
                User-centered digital products shaped by research, strategy, intuitive flows, and thoughtful interaction design.
              </p>

              {/* Lower Visual: 2-3 Overlapping Smartphone Screens Emerging from Lower Edge */}
              <div className="relative w-full h-64 mt-auto flex items-end justify-center translate-y-6">
                {/* Background ambient glow */}
                <div className="absolute bottom-0 w-3/4 h-24 bg-blue-500/[0.04] blur-2xl rounded-full" />

                {/* Smartphone 1 (Left, angled back) */}
                <div className="absolute w-32 sm:w-36 h-64 bg-[#0F1115] rounded-[28px] border-[5px] border-[#1C1F26] shadow-xl transform -translate-x-12 p-2 flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Speaker Notch */}
                  <div className="w-10 h-1 bg-neutral-800 rounded-full mx-auto mb-2" />
                  {/* Screen Content */}
                  <div className="w-full flex-1 bg-[#151922] rounded-[18px] p-2.5 flex flex-col justify-between overflow-hidden">
                    <div className="space-y-1.5">
                      <div className="w-8 h-1 bg-neutral-700 rounded-full" />
                      <div className="text-[10px] text-white font-medium">$248,420</div>
                      <div className="text-[8px] text-emerald-400 font-mono">+38.5%</div>
                    </div>
                    {/* Sparkline */}
                    <svg className="w-full h-10 my-1" viewBox="0 0 80 30" preserveAspectRatio="none">
                      <path d="M0 25 Q 20 5, 40 20 T 80 10" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                    </svg>
                    <div className="w-full h-6 bg-neutral-800/80 rounded-lg" />
                  </div>
                </div>

                {/* Smartphone 2 (Right, foreground hero) */}
                <div className="absolute w-32 sm:w-36 h-72 bg-[#0C0E12] rounded-[30px] border-[6px] border-[#1A1D24] shadow-2xl transform translate-x-10 z-10 p-2.5 flex flex-col group-hover:-translate-y-4 transition-transform duration-500">
                  {/* Speaker Notch */}
                  <div className="w-12 h-1.5 bg-black rounded-full mx-auto mb-2" />
                  {/* Screen Content */}
                  <div className="w-full flex-1 bg-[#131720] rounded-[20px] p-3 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] font-mono text-neutral-400">Overview</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[13px] text-white font-semibold tracking-tight">$248,420</div>
                      <span className="text-[8px] text-neutral-400">Total Portfolio</span>
                    </div>

                    {/* Clean curved analytics line */}
                    <div className="my-2">
                      <svg className="w-full h-14" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                          d="M0 35 C 20 30, 30 10, 55 22 C 75 30, 85 8, 100 5"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Segmented Cards */}
                    <div className="space-y-1.5">
                      <div className="w-full h-4 bg-neutral-800/80 rounded-md flex items-center px-2 justify-between text-[7px] text-neutral-400">
                        <span>Transactions</span>
                        <span className="text-white">+12</span>
                      </div>
                      <div className="w-full h-4 bg-neutral-800/50 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              CENTER COLUMN: Card 02, Card 05 & Stat Panel (Rises Higher!)
              ───────────────────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: premiumEase }}
            className="flex flex-col gap-6 lg:gap-7 -mt-2 lg:-mt-10"
          >
            
            {/* CARD 02: WEB DESIGN & EXPERIENCES (Tallest Centerpiece) */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_16px_48px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500 min-h-[620px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">02</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2.5 pr-6">
                WEB DESIGN &<br />EXPERIENCES
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-6">
                We design modern, conversion-focused websites that combine strong visual direction, storytelling, and seamless user experience.
              </p>

              {/* Lower Visual: Premium MacBook / Laptop displaying agency website */}
              <div className="relative w-full h-80 mt-auto flex items-end justify-center translate-y-3">
                {/* Ambient drop shadow under laptop */}
                <div className="absolute bottom-0 w-[95%] h-12 bg-black/[0.08] blur-xl rounded-full" />

                {/* Laptop Display (Screen Enclosure) */}
                <div className="relative w-[105%] sm:w-[110%] h-72 bg-[#090A0F] rounded-t-[20px] border-[7px] border-[#16181F] p-1.5 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  
                  {/* Browser Bar / Navigation Header */}
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-neutral-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-medium text-white tracking-widest uppercase">Qubabase</span>
                    </div>
                    <div className="flex gap-2 text-[7px] font-mono text-neutral-500">
                      <span>Services</span>
                      <span>Portfolio</span>
                    </div>
                  </div>

                  {/* Screen Website Hero Content */}
                  <div className="flex-1 flex px-5 py-6 relative">
                    <div className="w-3/5 flex flex-col justify-center text-left">
                      <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 block">
                        FLAGSHIP STUDIO
                      </span>
                      <h3 className="text-base sm:text-lg font-geist font-extrabold text-white leading-snug tracking-tight mb-3">
                        Building<br />digital products<br />people love.
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[7px] font-mono text-white tracking-wider">LIVE SHOWCASE</span>
                      </div>
                    </div>

                    {/* Floating agency showcase card inside browser */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-32 h-44 bg-[#14161F] rounded-xl border border-neutral-800 p-2.5 flex flex-col justify-between shadow-2xl">
                      <div className="w-full h-20 bg-neutral-800 rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-neutral-700 flex items-center justify-center">
                          <span className="text-[8px] font-mono text-neutral-400">PREVIEW</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="w-16 h-1.5 bg-neutral-600 rounded-full" />
                        <div className="w-24 h-1 bg-neutral-800 rounded-full" />
                      </div>
                      <div className="flex justify-between items-center text-[7px] font-mono text-neutral-500 pt-1 border-t border-neutral-800/80">
                        <span>120 FPS</span>
                        <span className="text-emerald-400 font-bold">100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook Chassis Base & Notch */}
                <div className="absolute bottom-[-6px] w-[120%] sm:w-[125%] h-5 bg-[#2A2D35] rounded-t-sm z-20 flex justify-center shadow-2xl border-t border-neutral-700/50">
                  <div className="w-28 h-1.5 bg-[#121418] rounded-b-md" />
                </div>
              </div>
            </div>

            {/* CARD 05: GROWTH & DIGITAL MARKETING */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[260px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">05</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2 pr-6">
                GROWTH &<br />DIGITAL MARKETING
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-4">
                Data-driven campaigns and digital strategies designed to attract, engage, convert, and accelerate growth.
              </p>

              {/* Minimal Analytics Visualization (Soundwave / Trend Curve) */}
              <div className="relative w-full h-24 mt-auto flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <path
                    d="M 0 50 Q 50 15, 100 50 T 200 50 T 300 30"
                    fill="none"
                    stroke="rgba(0,0,0,0.12)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 45 Q 60 70, 120 40 T 240 45 T 300 20"
                    fill="none"
                    stroke="rgba(0,0,0,0.22)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 60 Q 75 10, 150 50 T 300 15"
                    fill="none"
                    stroke="#141414"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Node Indicator */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                </div>
              </div>
            </div>

            {/* SMALL SUPPORTING VISUAL / STAT PANEL (Total Revenue $248,420) */}
            <div className="group relative bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex items-end justify-between">
              <div>
                <span className="text-xs font-light text-neutral-400 block mb-1">Total Revenue</span>
                <div className="text-2xl sm:text-3xl font-geist font-medium text-neutral-900 tracking-tight mb-1">
                  $248,420
                </div>
                <span className="text-xs font-mono font-medium text-emerald-600 inline-flex items-center gap-1">
                  + 32.5%
                </span>
              </div>

              {/* Minimal Line Graph with Terminal Dot Node */}
              <div className="w-32 sm:w-44 h-14">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40" preserveAspectRatio="none">
                  <path
                    d="M 0 35 Q 20 38, 40 24 T 80 18 T 115 5"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="group-hover:stroke-neutral-800 transition-colors duration-500"
                  />
                  <circle
                    cx="115"
                    cy="5"
                    r="4"
                    fill="#94A3B8"
                    className="group-hover:fill-neutral-900 transition-colors duration-500"
                  />
                </svg>
              </div>
            </div>

          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Card 03 & Card 06 (Starts Lower)
              ───────────────────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.25, ease: premiumEase }}
            className="flex flex-col gap-6 lg:gap-7 pt-4 lg:pt-14"
          >
            
            {/* CARD 03: DEVELOPMENT & INTEGRATION */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[490px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">03</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2.5 pr-6">
                DEVELOPMENT &<br />INTEGRATION
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-6">
                Clean, scalable and performant digital products built with modern technologies and seamless integrations.
              </p>

              {/* Lower Visual: Dark Professional IDE / Code Environment */}
              <div className="relative w-[108%] -ml-[4%] h-56 mt-auto flex items-end justify-center translate-y-3">
                <div className="w-full h-full bg-[#0D0F14] rounded-2xl shadow-2xl border border-neutral-800/90 p-4 sm:p-5 flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
                  {/* IDE Titlebar */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-neutral-900/90 border border-neutral-800 text-[9px] font-mono text-neutral-400">
                      Dashboard.tsx
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Clean Syntax Highlighted Code Lines */}
                  <div className="font-mono text-[9.5px] sm:text-[10px] leading-relaxed text-neutral-400 space-y-0.5">
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">1</span>
                      <span><span className="text-[#C678DD]">import</span> React, {'{'} useState {'}'} <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">'react'</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">2</span>
                      <span><span className="text-[#C678DD]">import</span> {'{ motion }'} <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">'framer-motion'</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">3</span>
                      <span><span className="text-[#C678DD]">export default function</span> <span className="text-[#61AFEF]">Dashboard</span>() {'{'}</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">4</span>
                      <span className="pl-3"><span className="text-[#C678DD]">const</span> [data, setData] = <span className="text-[#56B6C2]">useState</span>(<span className="text-[#D19A66]">null</span>)</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">5</span>
                      <span className="pl-3"><span className="text-[#C678DD]">return</span> (</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">6</span>
                      <span className="pl-6 text-[#E06C75]">&lt;div <span className="text-[#D19A66]">className</span>=<span className="text-[#98C379]">"dashboard"</span>&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">7</span>
                      <span className="pl-9 text-[#E06C75]">&lt;Header /&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">8</span>
                      <span className="pl-9 text-[#E06C75]">&lt;main <span className="text-[#D19A66]">className</span>=<span className="text-[#98C379]">"content"</span>&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="w-5 text-neutral-600 mr-2 text-right select-none">9</span>
                      <span className="pl-12">{'{'}data && <span className="text-[#E06C75]">&lt;Chart <span className="text-[#D19A66]">data</span>=</span>{'{data}'} <span className="text-[#E06C75]">/&gt;</span>{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 06: AI & AUTOMATION SOLUTIONS */}
            <div className="group relative bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-start border border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[490px] overflow-hidden">
              {/* Header: Number & Circular Button */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xl font-light text-neutral-400 font-geist">06</span>
                <div className="w-9 h-9 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 uppercase tracking-tight leading-[1.25] mb-2.5 pr-6">
                AI & AUTOMATION<br />SOLUTIONS
              </h2>
              <p className="text-[13px] sm:text-[13.5px] font-geist font-light text-neutral-500 leading-relaxed mb-6">
                Intelligent AI and automation systems that streamline operations, eliminate repetitive work, and unlock new opportunities.
              </p>

              {/* Lower Visual: Elegant White 3D Data Waves / Topographic Mesh Surface */}
              <div className="relative w-[114%] -ml-[7%] h-52 mt-auto flex items-end justify-center translate-y-3 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 360 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="aiMeshGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="aiMeshGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Topographic Layer 1 */}
                  <path
                    d="M 0 110 C 60 70, 120 130, 180 85 C 240 40, 300 95, 360 65 L 360 140 L 0 140 Z"
                    fill="url(#aiMeshGrad1)"
                  />
                  {/* Contour Lines */}
                  <path
                    d="M 0 110 C 60 70, 120 130, 180 85 C 240 40, 300 95, 360 65"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* Topographic Layer 2 */}
                  <path
                    d="M 0 95 C 70 50, 130 110, 200 70 C 270 30, 320 80, 360 50 L 360 140 L 0 140 Z"
                    fill="url(#aiMeshGrad2)"
                  />
                  <path
                    d="M 0 95 C 70 50, 130 110, 200 70 C 270 30, 320 80, 360 50"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="1.75"
                  />

                  {/* Topographic Layer 3 (Foreground Mesh Flow) */}
                  <path
                    d="M 0 125 C 80 80, 150 135, 220 90 C 290 45, 330 90, 360 75 L 360 140 L 0 140 Z"
                    fill="#F1F5F9"
                    opacity="0.75"
                  />
                  <path
                    d="M 0 125 C 80 80, 150 135, 220 90 C 290 45, 330 90, 360 75"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="2"
                  />

                  {/* Dotted lattice points representing connected intelligence nodes */}
                  <circle cx="180" cy="85" r="3" fill="#334155" />
                  <circle cx="200" cy="70" r="2.5" fill="#475569" />
                  <circle cx="220" cy="90" r="3" fill="#1E293B" />
                  <circle cx="120" cy="95" r="2" fill="#64748B" />
                  <circle cx="270" cy="55" r="2" fill="#64748B" />
                </svg>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BOTTOM CTA (Wide Rounded Horizontal Banner)
            ═══════════════════════════════════════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="mt-12 sm:mt-16 w-full rounded-[26px] sm:rounded-[30px] bg-white border border-black/[0.04] p-7 sm:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-geist font-medium text-neutral-900 tracking-tight mb-1">
              Have a project in mind?
            </h3>
            <p className="text-xs sm:text-sm font-light text-neutral-500">
              Let's build something great together.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-mono font-medium uppercase tracking-wider transition-all hover:shadow-lg group shrink-0 cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </div>
    </div>
  );
}

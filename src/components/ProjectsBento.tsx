import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, X, CheckCircle2, ChevronRight, Layers, ShieldCheck, ArrowLeft, Target, Lightbulb, Zap, Award } from "lucide-react";
import topProjectsCatalog from "../data/topProjectsCatalog.json";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardToCatalogMap: Record<number, typeof topProjectsCatalog[0] & { heroImage: string }> = {
  1: {
    ...topProjectsCatalog[0], // Jwells
    heroImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1400&auto=format&fit=crop"
  },
  2: {
    ...topProjectsCatalog[3], // HireHunt / InternAuto
    projectName: "HireHunt AI",
    headline: "How HireHunt AI Built a Stealth Job Application Automation Platform Processing 500K+ Applications with Gemini AI",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop"
  },
  3: {
    ...topProjectsCatalog[1], // Exotex App
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop"
  },
  4: {
    ...topProjectsCatalog[2], // OpenSource Clipping
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop"
  },
  5: {
    ...topProjectsCatalog[3], // InternAuto Pro
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop"
  },
  6: {
    ...topProjectsCatalog[5], // Soul-Viva Soap
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
  }
};

export default function ProjectsBento() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <section 
      id="projects" 
      className="w-full bg-[#FAF9F6] text-black py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden font-geist select-none"
    >
      <div className="max-w-[1240px] mx-auto relative">
        
        {/* Giant Subtle Background Watermark Title "Projects" with reveal effect */}
        <div className="relative w-full mb-6 sm:mb-8 md:mb-10 pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: premiumEase }}
            className="flex items-end justify-between"
          >
            <h2 className="text-[72px] sm:text-[120px] md:text-[170px] lg:text-[210px] font-black tracking-[-0.04em] leading-[0.85] text-[#ECEAE4] font-geist">
              Projects
            </h2>
            <div className="hidden md:flex flex-col items-end text-right pb-4">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-[#5E5E5E]">
                02 / Selected Works
              </span>
              <span className="text-[13px] font-geist text-neutral-400 mt-1">
                6 Flagship Case Studies
              </span>
            </div>
          </motion.div>
        </div>

        {/* 6-Card Bento Grid with Staggered Scroll-Triggered Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ========================================================================= */}
          {/* ROW 1 - CARD 1 (Top-Left): Jewells By Nova Sterling Silver Flagship */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(1)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-8 group relative bg-[#D7D7D7] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-[460px] flex items-center justify-center p-4 sm:p-8 cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu"
          >
            {/* Tablet Mockup Container with float-in entrance */}
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2, ease: premiumEase }}
              className="relative w-full max-w-[560px] aspect-[4/3] bg-black rounded-[24px] sm:rounded-[28px] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-[1.02]"
            >
              
              {/* Camera dot */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-800 rounded-full z-20" />

              {/* Tablet Screen Canvas */}
              <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[18px] overflow-hidden p-4 sm:p-6 flex flex-col justify-between relative">
                
                {/* Topbar on screen */}
                <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-mono tracking-widest text-neutral-400 font-bold">
                  <div className="flex items-center gap-1.5 text-black">
                    <div className="w-2.5 h-2.5 rounded-full border border-black flex items-center justify-center text-[7px] font-bold">
                      ●
                    </div>
                    <span className="tracking-tighter font-sans font-bold uppercase">JEWELLS BY NOVA FLAGSHIP</span>
                  </div>
                  <div className="w-4 h-2 flex flex-col justify-between">
                    <span className="w-full h-[1.5px] bg-black" />
                    <span className="w-full h-[1.5px] bg-black" />
                  </div>
                </div>

                {/* Vertical side watermark copy */}
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[6px] sm:text-[7px] font-mono text-neutral-300 tracking-widest uppercase">
                  NEXT.JS 15 APP ROUTER
                </div>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[6px] sm:text-[7px] font-mono text-neutral-300 tracking-widest uppercase">
                  SUPABASE RLS & CARTS
                </div>

                {/* Center Circle Jewelry Frame */}
                <div className="self-center my-auto flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-neutral-100 shadow-inner bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop" 
                      alt="Jewells By Nova Sterling Silver" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold font-geist tracking-wide text-neutral-800 mt-2">
                    Jewells By Nova E-Commerce
                  </span>
                </div>

                {/* Bottom Bar Buttons on screen */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-black border border-black/40 rounded-full px-2 py-0.5">
                    LIVE RATE API
                  </span>
                  <button className="bg-black text-white text-[8px] sm:text-[10px] font-mono font-medium px-4 py-1 rounded-full hover:bg-neutral-800 transition-colors">
                    Explore Flagship
                  </button>
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-black border border-black/40 rounded-full px-2 py-0.5">
                    SHIPROCKET
                  </span>
                </div>

              </div>

            </motion.div>

            {/* Left Hand Holding Tablet Graphic */}
            <motion.div 
              initial={{ x: -28, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.28, ease: premiumEase }}
              className="absolute left-0 bottom-4 sm:bottom-8 w-20 sm:w-28 md:w-36 h-48 sm:h-64 pointer-events-none z-20"
            >
              <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-[#1A1A1A] drop-shadow-2xl">
                <path 
                  d="M-20 200 C0 160 15 130 35 110 C50 95 65 75 60 45 C55 20 40 25 35 45 C30 65 15 110 -20 130 Z" 
                  fill="currentColor"
                />
                <path 
                  d="M35 85 C45 75 58 80 55 95 C52 108 40 120 25 135" 
                  stroke="#111" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                />
              </svg>
            </motion.div>

            {/* Right Hand Holding Tablet Graphic */}
            <motion.div 
              initial={{ x: 28, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.28, ease: premiumEase }}
              className="absolute right-0 bottom-4 sm:bottom-8 w-20 sm:w-28 md:w-36 h-48 sm:h-64 pointer-events-none z-20"
            >
              <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-[#1A1A1A] drop-shadow-2xl">
                <path 
                  d="M120 200 C100 160 85 130 65 110 C50 95 35 75 40 45 C45 20 60 25 65 45 C70 65 85 110 120 130 Z" 
                  fill="currentColor"
                />
                <path 
                  d="M65 85 C55 75 42 80 45 95 C48 108 60 120 75 135" 
                  stroke="#111" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                />
              </svg>
            </motion.div>

          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 1 - CARD 2 (Top-Right): HireHunt AI Automation Engine */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(2)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.18, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-4 group relative bg-[#EDEDEB] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-[460px] p-6 sm:p-8 flex items-end justify-end cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu"
          >
            {/* iPhone Top Right Bezel Corner */}
            <motion.div 
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: premiumEase }}
              className="relative w-[92%] sm:w-[88%] h-[92%] sm:h-[88%] bg-[#080808] rounded-tl-[48px] sm:rounded-tl-[56px] border-t-[5px] border-l-[5px] border-[#2A2A2A] shadow-[-16px_-16px_36px_rgba(0,0,0,0.18)] p-5 sm:p-7 flex flex-col justify-between overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-500"
            >
              
              {/* Outer edge gloss highlight */}
              <div className="absolute top-0 left-0 right-0 h-full border-t border-l border-white/20 rounded-tl-[44px] pointer-events-none" />

              {/* Status Bar Row */}
              <div className="w-full flex items-center justify-between text-white pt-1">
                <span className="text-xl sm:text-2xl font-bold font-geist tracking-tight ml-4 sm:ml-6 text-amber-400">
                  99.4%
                </span>
                <div className="w-12 sm:w-16 h-4 sm:h-5 bg-black rounded-full border border-neutral-800 -mr-6" />
              </div>

              {/* Center App Icon: Bright Yellow HireHunt HH Squircle */}
              <div className="flex flex-col items-center justify-center my-auto">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -6 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.42, ease: premiumEase }}
                  className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FFE600] rounded-[24px] sm:rounded-[28px] shadow-[0_12px_28px_rgba(255,230,0,0.35)] flex items-center justify-center p-4 transform group-hover:rotate-3 transition-transform duration-300"
                >
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-black">
                    <path 
                      d="M22 18 V82 M50 18 V82 M78 18 V82 M22 50 H50 M50 50 H78" 
                      stroke="currentColor" 
                      strokeWidth="14" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </motion.div>
                
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide font-geist mt-3">
                  HireHunt AI
                </span>
                <span className="text-[9px] text-neutral-400 font-mono mt-0.5">
                  Gemini Vision Solver
                </span>
              </div>

              <div className="absolute -left-[5px] top-28 w-1 h-10 bg-neutral-600 rounded-r-xs" />
            </motion.div>
          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 2 - CARD 3 (Middle-Left): Ekotex Multi-Branch Field App */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(3)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-6 group relative bg-[#0E2824] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[380px] p-5 sm:p-7 flex items-center cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0B211E] rounded-l-[40px] pointer-events-none border-l border-emerald-900/30" />
            
            {/* White Floating Modal */}
            <motion.div 
              initial={{ x: -24, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.25, ease: premiumEase }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[310px] bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] transform group-hover:translate-x-1 transition-transform duration-300"
            >
              
              <div className="flex items-center gap-1.5 mb-3 text-emerald-600 text-[10px] font-medium font-geist">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[8px]">
                  ✓
                </div>
                <span>Ekotex Field Manager</span>
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight mb-1 font-geist">
                Multi-Branch Field & Inventory App
              </h4>
              <p className="text-[9px] text-neutral-400 mb-3 font-geist">
                Offline-first delta-sync & QR warranty tracking
              </p>

              {/* Service Logs */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-[9px] font-bold flex items-center justify-center">
                      QR
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-none">Branch 01 - Warranty Verified</div>
                      <div className="text-[8px] text-emerald-600 mt-0.5">120,000+ Products Registered</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-800 text-white">
                    Synced
                  </span>
                </div>

                <div className="flex items-center justify-between p-1.5 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-900 text-white text-[9px] font-bold flex items-center justify-center">
                      FT
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-none">Field Technician Mobile Sync</div>
                      <div className="text-[8px] text-neutral-400 mt-0.5">1,400+ Active Techs</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-white">
                    Active
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-700 pt-1 border-t border-neutral-100 cursor-pointer hover:text-emerald-900">
                <span className="text-xs">+</span>
                <span>Dispatch field service report</span>
              </div>

            </motion.div>

            <div className="absolute right-5 bottom-5 max-w-[160px] text-[8px] text-emerald-100/40 font-mono leading-relaxed pointer-events-none hidden sm:block">
              Offline-first mobile sync engine with zero data loss in zero-connectivity zones.
            </div>

          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 2 - CARD 4 (Middle-Right): OpenSource Clipping Pro AI Video Suite */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(4)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.18, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-6 group relative bg-[#1E1C1A] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[380px] cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu"
          >
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop" 
              alt="Video Editing Studio Lights" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: premiumEase }}
              className="relative z-10 w-full h-full p-4 sm:p-6 flex items-center justify-center transform -rotate-1 sm:-rotate-2 group-hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-full max-w-[440px] bg-[#111111] rounded-[22px] border-[3px] border-neutral-700 shadow-2xl p-3 sm:p-4 overflow-hidden">
                
                <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold mb-2.5">
                  <span className="text-purple-400 font-mono">AI CLIPPER PRO</span>
                  <span className="text-white text-xs font-semibold">Rhythm Zoom & Auto Subtitles</span>
                </div>

                <div className="grid grid-cols-12 gap-2.5">
                  
                  {/* Left Hero Card: 42M Views (Vivid Purple/Orange) */}
                  <div className="col-span-7 bg-gradient-to-br from-[#7C3AED] to-[#C026D3] rounded-[16px] p-3 text-white flex flex-col justify-between min-h-[140px] relative overflow-hidden shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                      Total Views Generated
                    </span>
                    
                    <div className="my-auto z-10">
                      <span className="text-4xl sm:text-5xl font-black font-geist tracking-tighter leading-none block">
                        42M+
                      </span>
                      <p className="text-[8px] sm:text-[9px] font-medium text-white/90 leading-tight mt-1">
                        85,000+ short-form viral clips exported automatically
                      </p>
                    </div>

                    <div className="absolute -right-2 -bottom-2 w-20 h-24 opacity-30 pointer-events-none">
                      <svg viewBox="0 0 100 120" fill="currentColor">
                        <path d="M10 10 H90 V110 H10 Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column: Speed & Subtitles */}
                  <div className="col-span-5 flex flex-col gap-2 justify-between">
                    
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-[14px] p-2 text-white">
                      <div className="text-[8px] text-neutral-400 font-bold uppercase">Export Speed</div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-base font-bold text-white">4x</span>
                        <span className="text-[8px] text-purple-400 font-bold">● GPU Fast</span>
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-[14px] p-2 space-y-1.5 text-[8px]">
                      <div className="flex justify-between text-neutral-300">
                        <span>Word Highlight</span>
                        <span className="text-purple-400 font-bold">● Sync</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Safe-Zone Easing</span>
                        <span className="text-purple-400 font-bold">● Active</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Rhythm Zoom</span>
                        <span className="text-purple-400 font-bold">Auto</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 3 - CARD 5 (Bottom-Left): InternAuto Pro Stealth Job Automation */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(5)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-5 group relative bg-[#0D0D0D] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[400px] cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div 
              initial={{ y: 22, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.26, ease: premiumEase }}
              className="relative w-full max-w-[420px] aspect-[16/10] rounded-[20px] overflow-hidden border-[4px] border-neutral-800 shadow-2xl transform sm:rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500"
            >
              
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                alt="Cybernetic Cyber Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              <div className="absolute inset-x-4 bottom-4 top-10 bg-black/60 backdrop-blur-md rounded-[16px] border border-white/20 p-3 text-white flex flex-col justify-between">
                
                <div className="flex justify-between items-center text-[9px] font-bold text-white/80">
                  <span>INTERNAUTO PRO AUTOMATION</span>
                  <span className="text-cyan-400">99.8% STEALTH ●</span>
                </div>

                <div className="grid grid-cols-2 gap-2 my-auto">
                  <div className="bg-white/10 rounded-lg p-2">
                    <span className="text-[8px] text-white/70 block">APPLICATIONS SENT</span>
                    <span className="text-base font-bold font-geist">520,000+</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <span className="text-[8px] text-white/70 block">GEMINI VISION CAPTCHA</span>
                    <span className="text-base font-bold font-geist text-cyan-300">&lt; 1.2 SEC</span>
                  </div>
                </div>

                <div className="w-full bg-cyan-500 text-black text-[9px] font-bold py-1.5 rounded-full text-center">
                  BullMQ Queue & Socket.io Log Stream
                </div>

              </div>

            </motion.div>
          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 3 - CARD 6 (Bottom-Right): Soul-Viva Luxury Glycerin Bathing Bars */}
          {/* ========================================================================= */}
          <motion.div 
            onClick={() => setSelectedCard(6)}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.18, ease: premiumEase }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="lg:col-span-7 group relative bg-[#DCE7FF] rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[400px] p-6 sm:p-8 flex items-center justify-center cursor-pointer shadow-xs hover:shadow-2xl transition-shadow duration-500 transform-gpu"
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.28, ease: premiumEase }}
              className="w-full max-w-[560px] bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-[0_16px_36px_rgba(66,99,235,0.12)] border border-blue-100 flex flex-col justify-between transform group-hover:scale-[1.01] transition-transform duration-300"
            >
              
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 font-geist mb-1.5">
                <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                <span>Soul-Viva Glycerin Soap Catalog</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mb-6">
                <h3 className="md:col-span-7 text-sm sm:text-base md:text-lg font-extrabold text-neutral-900 leading-snug font-geist tracking-tight">
                  Transparent Bathing Bars & 3D Mouse Parallax Depth
                </h3>
                <p className="md:col-span-5 text-[9px] sm:text-[10px] text-neutral-500 font-geist leading-relaxed">
                  Botanical skincare showcase featuring Sea Minerals, Menthol, Pear, Lavender & Honey variants with 98% customer satisfaction.
                </p>
              </div>

              <div className="relative w-full h-36 sm:h-44 flex items-center justify-center">
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[8px] font-mono text-neutral-400 space-y-1.5 tracking-wider hidden sm:block">
                  <div>SEA MINERALS</div>
                  <div>WATERLILY & PEAR</div>
                  <div>SHEA BUTTER</div>
                  <div>BLACK CURRANT</div>
                  <div>MANDARIN</div>
                </div>

                <div className="w-48 sm:w-60 h-32 relative flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" 
                    alt="Soul Viva Botanical Soap" 
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-xl border-2 border-blue-200 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[8px] font-mono text-neutral-400 text-right space-y-1.5 tracking-wider hidden sm:block">
                  <div>3D PARALLAX INTERACTION</div>
                  <div>FIREBASE ANALYTICS SPA</div>
                  <div>60FPS SMOOTH SCROLL</div>
                </div>

              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Full-Page Apple-Style Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedCard !== null && cardToCatalogMap[selectedCard] && (() => {
          const cs = cardToCatalogMap[selectedCard];
          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-white text-[#1d1d1f] font-apple select-text antialiased"
            >
              {/* Top Sticky Header */}
              <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 sm:px-12 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setSelectedCard(null)}
                    className="flex items-center gap-2 text-xs font-apple font-medium tracking-tight text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Projects</span>
                  </button>
                  <span className="text-neutral-300">|</span>
                  <span className="text-xs font-apple font-medium text-[#86868b] tracking-tight hidden sm:inline">
                    {cs.projectName} Case Study
                  </span>
                </div>

                <button 
                  onClick={() => setSelectedCard(null)}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1d1d1f] text-white text-xs font-apple font-medium tracking-tight hover:bg-[#333336] transition-colors shadow-sm cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close Case Study</span>
                </button>
              </div>

              {/* Case Study Content Body */}
              <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-16 md:py-20">
                
                {/* Category & Date */}
                <div className="text-xs sm:text-sm font-apple font-medium tracking-[0.02em] text-[#0066cc] mb-4">
                  {cs.service} · Case study · {cs.timeline}
                </div>

                {/* Main Headline (Apple SF Pro Display Typography) */}
                <h1 className="font-apple-display text-3xl sm:text-5xl md:text-[58px] font-bold text-[#1d1d1f] leading-[1.08] tracking-[-0.03em] mb-6">
                  {cs.headline}
                </h1>

                {/* Subtitle / Overview */}
                <p className="font-apple text-base sm:text-xl md:text-[21px] font-normal text-[#86868b] leading-[1.47] max-w-3xl mb-10">
                  {cs.overview}
                </p>

                {/* Hero Banner Image */}
                <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] mb-12 border border-black/5">
                  <img 
                    src={cs.heroImage} 
                    alt={cs.projectName} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metadata Cards (Apple #F5F5F7 Fill) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#F5F5F7] rounded-[24px] border border-black/5 mb-16">
                  <div>
                    <span className="font-apple text-[11px] font-semibold text-[#86868b] uppercase tracking-[0.06em] block mb-1.5">
                      Client
                    </span>
                    <span className="font-apple-display text-base sm:text-lg font-semibold text-[#1d1d1f]">
                      {cs.client}
                    </span>
                  </div>
                  <div>
                    <span className="font-apple text-[11px] font-semibold text-[#86868b] uppercase tracking-[0.06em] block mb-1.5">
                      Timeline
                    </span>
                    <span className="font-apple-display text-base sm:text-lg font-semibold text-[#1d1d1f]">
                      {cs.timeline}
                    </span>
                  </div>
                  <div>
                    <span className="font-apple text-[11px] font-semibold text-[#86868b] uppercase tracking-[0.06em] block mb-1.5">
                      Service
                    </span>
                    <span className="font-apple-display text-base sm:text-lg font-semibold text-[#1d1d1f]">
                      {cs.service}
                    </span>
                  </div>
                </div>

                {/* The Challenge */}
                <div className="mb-16">
                  <h2 className="font-apple-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#1d1d1f] mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-rose-500" />
                    <span>The challenge</span>
                  </h2>
                  <p className="font-apple text-base sm:text-lg text-[#1d1d1f] leading-relaxed bg-[#FFF5F5] p-6 sm:p-8 rounded-[24px] border border-rose-100/80 font-normal">
                    {cs.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mb-16">
                  <h2 className="font-apple-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#1d1d1f] mb-4 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                    <span>The solution</span>
                  </h2>
                  <p className="font-apple text-base sm:text-lg text-[#1d1d1f] leading-relaxed bg-[#F4FBF7] p-6 sm:p-8 rounded-[24px] border border-emerald-100/80 font-normal">
                    {cs.solution}
                  </p>
                </div>

                {/* Our Strategy */}
                <div className="mb-16">
                  <h2 className="font-apple-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#1d1d1f] mb-8 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#0066cc]" />
                    <span>Our strategy</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cs.strategy.map((item) => (
                      <div 
                        key={item.step}
                        className="p-6 sm:p-8 bg-[#F5F5F7] rounded-[24px] border border-black/5 hover:bg-[#EBEBEF] transition-colors"
                      >
                        <div className="font-mono text-xs font-semibold text-[#0066cc] mb-3 tracking-widest uppercase">
                          0{item.step} / Strategy Step
                        </div>
                        <h3 className="font-apple-display text-lg font-bold text-[#1d1d1f] mb-2">
                          {item.title}
                        </h3>
                        <p className="font-apple text-sm text-[#515154] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectives & What We Solved */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Objectives */}
                  <div className="bg-[#F5F5F7] p-6 sm:p-8 rounded-[24px] border border-black/5">
                    <h3 className="font-apple-display text-xl font-bold text-[#1d1d1f] mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0066cc]" />
                      <span>Objectives</span>
                    </h3>
                    <ul className="space-y-4">
                      {cs.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed font-apple">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-2 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Solved */}
                  <div className="bg-[#F5F5F7] p-6 sm:p-8 rounded-[24px] border border-black/5">
                    <h3 className="font-apple-display text-xl font-bold text-[#1d1d1f] mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <span>What we solved</span>
                    </h3>
                    <ul className="space-y-4">
                      {cs.whatWeSolved.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed font-apple">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* The Outcome & Results (Apple Dark Card #1D1D1F) */}
                <div className="bg-[#1D1D1F] text-white p-8 sm:p-12 rounded-[32px] shadow-xl mb-12 border border-white/10">
                  <h2 className="font-apple-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-2 flex items-center gap-3">
                    <Award className="w-7 h-7 text-amber-400" />
                    <span>The outcome</span>
                  </h2>
                  <p className="font-apple text-[#86868b] text-sm mb-8">
                    Empirical performance metrics achieved by {cs.projectName}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {cs.outcome.platformResults.map((res, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <span className="font-apple text-[11px] font-semibold uppercase tracking-[0.08em] text-[#86868b] block mb-1">
                          {res.metric}
                        </span>
                        <span className="font-apple-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white block">
                          {res.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Close Action Bar */}
                <div className="flex justify-center pt-8 border-t border-black/10">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-8 py-3.5 rounded-full bg-[#1d1d1f] text-white text-xs font-apple font-medium tracking-tight hover:bg-[#333336] transition-colors shadow-md cursor-pointer"
                  >
                    ← Back to Projects Bento
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}

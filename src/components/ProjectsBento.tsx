import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, X, CheckCircle2, ChevronRight, Layers, ShieldCheck } from "lucide-react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
          {/* ROW 1 - CARD 1 (Top-Left): Tablet held in hands with Dahlia Blossom */}
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
                    <span className="tracking-tighter font-sans font-bold">1ST QUALITY SCENES</span>
                  </div>
                  <div className="w-4 h-2 flex flex-col justify-between">
                    <span className="w-full h-[1.5px] bg-black" />
                    <span className="w-full h-[1.5px] bg-black" />
                  </div>
                </div>

                {/* Vertical side watermark copy */}
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[6px] sm:text-[7px] font-mono text-neutral-300 tracking-widest uppercase">
                  1ST QUALITY SCENES
                </div>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[6px] sm:text-[7px] font-mono text-neutral-300 tracking-widest uppercase">
                  FINALITY SERIES
                </div>

                {/* Center Circle Dahlia Flower Frame */}
                <div className="self-center my-auto flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-neutral-100 shadow-inner bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop" 
                      alt="Golden Dahlia Flower" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Bar Buttons on screen */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-black border border-black/40 rounded-full px-2 py-0.5">
                    PS
                  </span>
                  <button className="bg-black text-white text-[8px] sm:text-[10px] font-mono font-medium px-4 py-1 rounded-full hover:bg-neutral-800 transition-colors">
                    Explore now
                  </button>
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-black border border-black/40 rounded-full px-2 py-0.5">
                    FIGMA
                  </span>
                </div>

              </div>

            </motion.div>

            {/* Left Hand Holding Tablet Graphic with slide-in entrance */}
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
                {/* Thumb grasping bezel */}
                <path 
                  d="M35 85 C45 75 58 80 55 95 C52 108 40 120 25 135" 
                  stroke="#111" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                />
              </svg>
            </motion.div>

            {/* Right Hand Holding Tablet Graphic with slide-in entrance */}
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
                {/* Thumb grasping bezel */}
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
          {/* ROW 1 - CARD 2 (Top-Right): iPhone Corner with HPA Yellow App Icon */}
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
            {/* iPhone Top Right Bezel Corner with slide-up reveal */}
            <motion.div 
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: premiumEase }}
              className="relative w-[92%] sm:w-[88%] h-[92%] sm:h-[88%] bg-[#080808] rounded-tl-[48px] sm:rounded-tl-[56px] border-t-[5px] border-l-[5px] border-[#2A2A2A] shadow-[-16px_-16px_36px_rgba(0,0,0,0.18)] p-5 sm:p-7 flex flex-col justify-between overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-500"
            >
              
              {/* Outer edge gloss highlight */}
              <div className="absolute top-0 left-0 right-0 h-full border-t border-l border-white/20 rounded-tl-[44px] pointer-events-none" />

              {/* Status Bar Row (11:47 & Dynamic Island notch) */}
              <div className="w-full flex items-center justify-between text-white pt-1">
                <span className="text-xl sm:text-2xl font-bold font-geist tracking-tight ml-4 sm:ml-6">
                  11:47
                </span>
                {/* Dynamic island pill on right edge */}
                <div className="w-12 sm:w-16 h-4 sm:h-5 bg-black rounded-full border border-neutral-800 -mr-6" />
              </div>

              {/* Center App Icon: Bright Yellow HPA Squircle with pop-in animation */}
              <div className="flex flex-col items-center justify-center my-auto">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -6 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.42, ease: premiumEase }}
                  className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FFE600] rounded-[24px] sm:rounded-[28px] shadow-[0_12px_28px_rgba(255,230,0,0.35)] flex items-center justify-center p-4 transform group-hover:rotate-3 transition-transform duration-300"
                >
                  {/* Stylized Black "H" Logo */}
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-black">
                    <path 
                      d="M26 18 V82 M74 18 V82 M26 50 H74 M26 34 L74 66" 
                      stroke="currentColor" 
                      strokeWidth="14" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </motion.div>
                
                {/* App Label */}
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide font-geist mt-3">
                  HPA
                </span>
              </div>

              {/* Volume / Power physical button mockup on outer frame */}
              <div className="absolute -left-[5px] top-28 w-1 h-10 bg-neutral-600 rounded-r-xs" />
            </motion.div>
          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 2 - CARD 3 (Middle-Left): Dark Forest Green Card with Acme Modal */}
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
            {/* Background geometric curved accent */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0B211E] rounded-l-[40px] pointer-events-none border-l border-emerald-900/30" />
            
            {/* White Floating Onboarding Modal with slide-in entrance */}
            <motion.div 
              initial={{ x: -24, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.25, ease: premiumEase }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[310px] bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] transform group-hover:translate-x-1 transition-transform duration-300"
            >
              
              {/* Modal Header */}
              <div className="flex items-center gap-1.5 mb-3 text-neutral-400 text-[10px] font-medium font-geist">
                <div className="w-3.5 h-3.5 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[8px]">
                  ▲
                </div>
                <span>Acme Welcome</span>
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight mb-1 font-geist">
                Join your company on Acme!
              </h4>
              <p className="text-[9px] text-neutral-400 mb-3 font-geist">
                These organizations match your email domain
              </p>

              {/* Company List */}
              <div className="space-y-2 mb-3">
                {/* Org 1 */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-neutral-900 text-white text-[9px] font-bold flex items-center justify-center">
                      D
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-none">Dra Collectia GmbH</div>
                      <div className="text-[8px] text-neutral-400 mt-0.5">2 members</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-white">
                    Join
                  </span>
                </div>

                {/* Org 2 */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center">
                      PS
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-neutral-900 leading-none">Personal space</div>
                      <div className="text-[8px] text-neutral-400 mt-0.5">1 member</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-white">
                    Join
                  </span>
                </div>
              </div>

              {/* Create new workspace action */}
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-neutral-600 pt-1 border-t border-neutral-100 cursor-pointer hover:text-black">
                <span className="text-xs">+</span>
                <span>Create new workspace</span>
              </div>

            </motion.div>

            {/* Bottom Right Legal / Terms Note on Dark Card */}
            <div className="absolute right-5 bottom-5 max-w-[160px] text-[8px] text-emerald-100/40 font-mono leading-relaxed pointer-events-none hidden sm:block">
              This client verification engine enforces single-tenant domain isolation with zero leaks.
            </div>

          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 2 - CARD 4 (Middle-Right): Angled iPad with Biological Age 26 */}
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
            {/* Ambient Warm Photography Background */}
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" 
              alt="Warm Lighting Hands Holding Device" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

            {/* Angled iPad Mockup Presentation with rotation reveal */}
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: premiumEase }}
              className="relative z-10 w-full h-full p-4 sm:p-6 flex items-center justify-center transform -rotate-1 sm:-rotate-2 group-hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-full max-w-[440px] bg-[#111111] rounded-[22px] border-[3px] border-neutral-700 shadow-2xl p-3 sm:p-4 overflow-hidden">
                
                {/* App Breadcrumb */}
                <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold mb-2.5">
                  <span>&lt;</span>
                  <span>&gt;</span>
                  <span className="text-white text-xs font-semibold">Data</span>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-12 gap-2.5">
                  
                  {/* Left Hero Card: Biological Age 26 (Vivid Orange) */}
                  <div className="col-span-7 bg-gradient-to-br from-[#FF4D00] to-[#E63900] rounded-[16px] p-3 text-white flex flex-col justify-between min-h-[140px] relative overflow-hidden shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                      Biological age
                    </span>
                    
                    {/* Giant Age Number */}
                    <div className="my-auto z-10">
                      <span className="text-4xl sm:text-5xl font-black font-geist tracking-tighter leading-none block">
                        26
                      </span>
                      <p className="text-[8px] sm:text-[9px] font-medium text-white/90 leading-tight mt-1">
                        2.5 years younger than your chronological age
                      </p>
                    </div>

                    {/* Silhouette of human head profile */}
                    <div className="absolute -right-2 -bottom-2 w-20 h-24 opacity-30 pointer-events-none">
                      <svg viewBox="0 0 100 120" fill="currentColor">
                        <path d="M50 0 C70 0 90 20 90 45 C90 65 75 75 75 90 C75 105 85 110 95 120 L5 120 C15 110 25 105 25 90 C25 75 10 65 10 45 C10 20 30 0 50 0 Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column: Blood Score & Biomarkers */}
                  <div className="col-span-5 flex flex-col gap-2 justify-between">
                    
                    {/* Top Blood Widget */}
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-[14px] p-2 text-white">
                      <div className="text-[8px] text-neutral-400 font-bold uppercase">Blood</div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-base font-bold text-white">60</span>
                        <span className="text-[8px] text-emerald-400 font-bold">● Optimal</span>
                      </div>
                    </div>

                    {/* Biomarker items */}
                    <div className="bg-[#1A1A1A] border border-neutral-800 rounded-[14px] p-2 space-y-1.5 text-[8px]">
                      <div className="flex justify-between text-neutral-300">
                        <span>Free Testosterone</span>
                        <span className="text-emerald-400 font-bold">● Opt</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Lipoprotein (a)</span>
                        <span className="text-emerald-400 font-bold">● Opt</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Magnesium</span>
                        <span className="text-emerald-400 font-bold">0.96</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 3 - CARD 5 (Bottom-Left): Desert Dunes Angled Tablet Interface */}
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
            {/* 3D Angled Screen Display with subtle reveal */}
            <motion.div 
              initial={{ y: 22, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.26, ease: premiumEase }}
              className="relative w-full max-w-[420px] aspect-[16/10] rounded-[20px] overflow-hidden border-[4px] border-neutral-800 shadow-2xl transform sm:rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500"
            >
              
              {/* Desert Dune Wallpaper */}
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop" 
                alt="Desert Sand Dunes Sunlight" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Glassmorphism Floating UI Card */}
              <div className="absolute inset-x-4 bottom-4 top-10 bg-black/40 backdrop-blur-md rounded-[16px] border border-white/20 p-3 text-white flex flex-col justify-between">
                
                {/* Glass Card Header */}
                <div className="flex justify-between items-center text-[9px] font-bold text-white/80">
                  <span>CLIMATE CONSOLE</span>
                  <span className="text-emerald-400">ONLINE ●</span>
                </div>

                {/* Dial Gauges / Telemetry */}
                <div className="grid grid-cols-2 gap-2 my-auto">
                  <div className="bg-white/10 rounded-lg p-2">
                    <span className="text-[8px] text-white/70 block">CABIN TEMP</span>
                    <span className="text-base font-bold font-geist">72°F</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <span className="text-[8px] text-white/70 block">RANGE</span>
                    <span className="text-base font-bold font-geist text-amber-300">340 MI</span>
                  </div>
                </div>

                {/* Bottom Action Pill */}
                <div className="w-full bg-white text-black text-[9px] font-bold py-1.5 rounded-full text-center">
                  Engage All-Terrain System
                </div>

              </div>

            </motion.div>
          </motion.div>


          {/* ========================================================================= */}
          {/* ROW 3 - CARD 6 (Bottom-Right): Pastel Blue Medusa Architecture Stack */}
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
            {/* White Presentation Canvas Card with subtle scale reveal */}
            <motion.div 
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.28, ease: premiumEase }}
              className="w-full max-w-[560px] bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-[0_16px_36px_rgba(66,99,235,0.12)] border border-blue-100 flex flex-col justify-between transform group-hover:scale-[1.01] transition-transform duration-300"
            >
              
              {/* Header: Star + Question */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 font-geist mb-1.5">
                <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                <span>What is Medusa?</span>
              </div>

              {/* Title & Description Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mb-6">
                <h3 className="md:col-span-7 text-sm sm:text-base md:text-lg font-extrabold text-neutral-900 leading-snug font-geist tracking-tight">
                  A commerce platform with a built-in framework for customizations
                </h3>
                <p className="md:col-span-5 text-[9px] sm:text-[10px] text-neutral-500 font-geist leading-relaxed">
                  Add business features with custom data models, workflows, UI extensions, and API endpoints.
                </p>
              </div>

              {/* Center 3D Isometric Layer Stack Blueprint */}
              <div className="relative w-full h-36 sm:h-44 flex items-center justify-center">
                
                {/* Left Architecture Labels */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[8px] font-mono text-neutral-400 space-y-1.5 tracking-wider hidden sm:block">
                  <div>STARTERS</div>
                  <div>ADMIN</div>
                  <div>MODULES</div>
                  <div>FRAMEWORK</div>
                  <div>CLOUD</div>
                </div>

                {/* Isometric Layer Stack SVG Illustration */}
                <div className="w-48 sm:w-60 h-32 relative">
                  <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
                    {/* Layer 4 (Bottom) */}
                    <path d="M120 120 L210 85 L120 50 L30 85 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                    {/* Layer 3 */}
                    <path d="M120 105 L210 70 L120 35 L30 70 Z" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                    {/* Layer 2 */}
                    <path d="M120 90 L210 55 L120 20 L30 55 Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
                    {/* Layer 1 (Top Glass Layer with UI Mockup Lines) */}
                    <path d="M120 75 L210 40 L120 5 L30 40 Z" fill="white" stroke="#2563EB" strokeWidth="2" />
                    
                    {/* Top Layer UI lines */}
                    <rect x="70" y="32" width="40" height="15" rx="3" transform="skewX(-30) rotate(15)" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
                    <rect x="130" y="28" width="50" height="22" rx="3" transform="skewX(-30) rotate(15)" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
                  </svg>
                </div>

                {/* Right Architecture Labels */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[7px] sm:text-[8px] font-mono text-neutral-400 text-right space-y-1.5 tracking-wider hidden sm:block">
                  <div>TEMPLATES FOR D2C, B2B, AND MORE</div>
                  <div>PRE-BUILT INTEGRATIONS</div>
                  <div>BUILT WITH NEXT.JS</div>
                </div>

              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Detail Modal on Card Click */}
      <AnimatePresence>
        {selectedCard !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[28px] border border-neutral-200 p-6 sm:p-8 shadow-2xl z-10 text-neutral-900 font-geist"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span>Case Study Inspection · Project 0{selectedCard}</span>
                </div>
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {selectedCard === 1 && "1st Quality Scenes · High-Fidelity Studio Mockup"}
                  {selectedCard === 2 && "HPA Brand Architecture & iOS Application"}
                  {selectedCard === 3 && "Acme Enterprise Domain Onboarding & Tenant Auth"}
                  {selectedCard === 4 && "Longevity & Biological Age Health Intelligence"}
                  {selectedCard === 5 && "All-Terrain Automotive & Climate Telemetry Console"}
                  {selectedCard === 6 && "Medusa Composable Commerce Architecture"}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {selectedCard === 1 && "Engineered with precision typography, ultra-high resolution asset rendering, and frictionless Figma/Photoshop handoff systems."}
                  {selectedCard === 2 && "Custom iOS mobile architecture featuring high-contrast iconography, fluid dynamic island integrations, and instant tactile navigation."}
                  {selectedCard === 3 && "Multi-tenant onboarding flow enforcing corporate email verification, automated workspace discovery, and zero data leakage across sub-organizations."}
                  {selectedCard === 4 && "Real-time biomarker telemetry dashboard tracking biological age reduction, multi-parameter blood analytics, and daily health score algorithms."}
                  {selectedCard === 5 && "Glassmorphic automotive cockpit UI with real-time powertrain feedback, ambient telemetry sensing, and offline-first edge compute."}
                  {selectedCard === 6 && "Full-stack decoupled headless architecture enabling bespoke data modeling, modular payment routing, and ultra-fast Next.js storefront rendering."}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Performance</span>
                    <span className="text-sm font-bold text-neutral-900">99.4% Latency Cut</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Deployment</span>
                    <span className="text-sm font-bold text-neutral-900">Production Ready</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Design System</span>
                    <span className="text-sm font-bold text-neutral-900">Custom Tokens</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

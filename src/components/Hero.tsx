import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import SpriteSequence from "./SpriteSequence";

export default function Hero() {
  const [sequenceDone, setSequenceDone] = useState(false);

  const scrollToWorks = () => {
    const gallery = document.getElementById("showcase-gallery");
    if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { name: "Web Design", dark: true },
    { name: "Social Media", dark: false },
    { name: "Marketing", dark: true },
    { name: "Paid Ads", dark: false, star: true },
    { name: "Branding", dark: false },
    { name: "Content Creation", dark: true }
  ];

  // Design.md smooth ease-out curve
  const premiumEase: any = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-transparent text-black font-geist pb-20 overflow-hidden relative">
      
      {/* Navbar with entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: premiumEase }}
        className="w-full relative z-30"
      >
        <Navbar />
      </motion.div>

      {/* Hero Central Stage */}
      <div className="w-full max-w-[1240px] flex flex-col items-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 text-center relative z-20">
        
        {/* Main Stage with Sprite Sequence Centered */}
        <div className="relative w-full min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex flex-col items-center justify-center">
          
          {/* Background Sprite Canvas Player (Single Cycle, No Loop) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <SpriteSequence 
              duration={3.2}
              loop={false}
              onComplete={() => setSequenceDone(true)}
              className="w-full max-w-[1100px] h-full object-contain opacity-95 scale-105 sm:scale-110 md:scale-115"
            />
          </div>

          {/* Foreground Hero Content Overlaid on the Sprite Sequence - Revealed AFTER hand cycle completes */}
          <AnimatePresence>
            {sequenceDone && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.05,
                    }
                  }
                }}
                className="relative z-10 flex flex-col items-center max-w-4xl px-4 py-8"
              >
                
                {/* Top Micro-Badge matching screenshot */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: premiumEase } }
                  }}
                  className="flex items-center gap-2 mb-4 sm:mb-6 select-none"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                  <span className="text-[11px] sm:text-[12px] font-bold font-inter tracking-wider text-[#065F46] uppercase">
                    Growth-Driven Marketing
                  </span>
                </motion.div>

                {/* Display Headline (Geist display-lg: 56px+ / -3.4px tracking per design.md) */}
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: premiumEase } }
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-geist font-normal text-black mb-4 sm:mb-6 tracking-[-2.8px] sm:tracking-[-3.8px] leading-[1.05]"
                >
                  We drive growth <br className="hidden sm:inline" /> to your business <span className="inline-block relative align-baseline">
                    <motion.svg 
                      initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: premiumEase, delay: 0.3 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 inline-block ml-1 text-[#065F46] transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </motion.svg>
                  </span>
                </motion.h1>

                {/* Subtitle (Geist body-base: 16px / line-height 1.5 per design.md) */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
                  }}
                  className="text-xs sm:text-sm md:text-base text-[#5E5E5E] leading-[1.6] max-w-xl font-geist font-normal mb-8 sm:mb-10 px-2"
                >
                  Unlock your brand's potential with our proven marketing expertise. <br className="hidden sm:inline" />
                  From strategy to execution, we drive growth.
                </motion.p>

                {/* Book a Call Golden Pill CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.92, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
                  }}
                >
                  <motion.button
                    onClick={scrollToWorks}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 bg-[#E0A533] text-black font-geist font-bold text-sm sm:text-base pl-7 pr-2.5 py-2.5 rounded-full transition-all shadow-[0_12px_24px_-8px_rgba(224,165,51,0.5)] hover:bg-[#c9942e] cursor-pointer group"
                  >
                    <span>Book a call</span>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </motion.button>
                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Three Column Bento Cards Layered Below - Revealed smoothly after hand animation */}
        <AnimatePresence>
          {sequenceDone && (
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: premiumEase, delay: 0.25 }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch mt-6 sm:mt-10"
            >
              
              {/* Card 1: Services */}
              <div className="bg-white/90 backdrop-blur-sm border border-[#D6D6D6] rounded-[27px] p-8 flex flex-col justify-between min-h-[280px] shadow-xs">
                <h3 className="text-2xl font-geist font-normal tracking-[-0.8px] text-black mb-6">
                  Services
                </h3>
                
                {/* Pill chips layout */}
                <div className="flex flex-wrap gap-2 items-end mt-auto">
                  {services.map((service, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
                      className={`text-[12px] font-inter font-bold px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 select-none ${
                        service.dark 
                          ? "bg-black border-black text-white" 
                          : "bg-white border-[#D6D6D6] text-black"
                      } flex items-center gap-1`}
                    >
                      {service.star && <span className="text-[#E0A533] text-xs">✦</span>}
                      {service.name}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card 2: Two smaller stacked cards */}
              <div className="flex flex-col gap-4 justify-between">
                {/* Top dark card */}
                <div className="bg-black text-white rounded-[20px] p-6 flex flex-col justify-between flex-1 min-h-[130px] shadow-sm transform transition-transform hover:-translate-y-1">
                  <span className="text-3xl sm:text-4xl font-geist font-normal tracking-[-1.6px]">
                    1.2M+
                  </span>
                  <p className="text-[12px] text-[#A3A3A3] font-inter font-bold leading-normal mt-2">
                    users have interacted with websites built by us.
                  </p>
                </div>
                
                {/* Bottom light card */}
                <div className="bg-white/90 backdrop-blur-sm border border-[#D6D6D6] rounded-[20px] p-6 flex flex-col justify-between flex-1 min-h-[130px] shadow-xs transform transition-transform hover:-translate-y-1">
                  <span className="text-3xl sm:text-4xl font-geist font-normal tracking-[-1.6px] text-black">
                    $3M
                  </span>
                  <p className="text-[12px] text-[#5E5E5E] font-inter font-bold leading-normal mt-2">
                    in funding raised by start-ups we've worked with.
                  </p>
                </div>
              </div>

              {/* Card 3: Testimonial */}
              <div className="bg-white/90 backdrop-blur-sm border border-[#D6D6D6] rounded-[27px] p-8 flex flex-col justify-between min-h-[280px] shadow-xs">
                <div className="text-[#A3A3A3] text-5xl font-serif leading-none select-none">
                  “
                </div>
                
                <p className="text-[16px] sm:text-[18px] font-geist font-normal text-black tracking-[-0.5px] leading-snug mt-2 mb-6">
                  The final product exceeded my expectations. Impressed with the results!
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex -space-x-2">
                    <img 
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Avatar 1"
                    />
                    <img 
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Avatar 2"
                    />
                  </div>
                  <span className="text-[12px] font-inter font-bold text-[#5E5E5E] uppercase tracking-wider">
                    AS.
                  </span>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}




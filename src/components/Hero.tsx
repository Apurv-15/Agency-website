import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Navbar from "./Navbar";
import HeroBadge from "./HeroBadge";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import TextWordReveal from "./TextWordReveal";

export default function Hero() {
  const scrollToWorks = () => {
    const gallery = document.getElementById("showcase-gallery");
    if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        
        {/* The Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0 scale-[1.01]"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" type="video/mp4" />
        </video>

        {/* Elegant overlay to brighten the video background and make all typography razor-sharp and legible */}
        <div className="absolute inset-0 bg-white/40 z-0 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
          <Navbar />
          
          <div className="w-full flex flex-col items-center pt-4 sm:pt-8 md:pt-12 px-6 text-center max-w-4xl">
            <HeroBadge />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-display font-bold text-neutral-950 mb-5 tracking-tight leading-[1.08] max-w-5xl [text-shadow:0_1px_20px_rgba(255,255,255,0.5)]">
              <TextWordReveal 
                text="Digital experiences" 
                delay={0.15}
                stagger={0.06}
              />
              <br />
              <TextWordReveal 
                text="built to move brands forward." 
                delay={0.35}
                stagger={0.06}
                wordClassName="text-[#1a2e23] italic font-normal font-playfair"
              />
            </h1>
            
            <div className="text-xs sm:text-sm md:text-base text-neutral-900 leading-relaxed max-w-2xl font-bold [text-shadow:0_1px_20px_rgba(255,255,255,0.9)] mb-6">
              <TextWordReveal 
                text="We design and engineer high-performance websites, digital products, and interactive experiences for ambitious brands."
                delay={0.6}
                stagger={0.02}
                blur={false}
              />
            </div>

            {/* Scroll Indicator with translateY(6.49px) Animation */}
            <motion.button
              onClick={scrollToWorks}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-2 group flex flex-col items-center gap-1.5 text-[#1a2e23] cursor-pointer"
              title="View our work"
            >
              <span className="text-[12px] font-mono tracking-widest uppercase opacity-85 font-bold">
                VIEW OUR WORK ↓
              </span>
              <div 
                className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-md animate-scroll-bounce group-hover:bg-[#1a2e23] group-hover:text-white transition-colors"
                style={{ willChange: "transform" }}
              >
                <ArrowDown className="w-4 h-4 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>

          <div className="w-full relative h-28 pointer-events-none">
            <div className="pointer-events-auto">
              <BottomLeftCard />
              <BottomRightCorner />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


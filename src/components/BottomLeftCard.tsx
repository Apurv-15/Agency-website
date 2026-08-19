import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function BottomLeftCard() {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3.5 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/40 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[150px] md:min-w-[170px] lg:min-w-[200px] w-fit border border-white/30 shadow-lg glow-button"
    >
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl md:text-4xl font-display font-bold text-[#1a2e23] tracking-tight">10+</span>
        </div>
        <span className="text-[11px] md:text-[13px] font-bold text-neutral-800 uppercase tracking-wider mt-0.5">BRANDS SCALED</span>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          const gallery = document.getElementById("showcase-gallery");
          if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center bg-white rounded-full pl-1.5 pr-4 md:pr-5 py-1.5 gap-2 hover:bg-neutral-50 transition-colors self-start group shadow-xs cursor-pointer text-[#1a2e23]"
      >
        <div className="bg-[#1a2e23]/10 p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#1a2e23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        <span className="text-[13px] md:text-[14px] font-bold">View Selected Work</span>
      </motion.button>
    </motion.div>
  );
}



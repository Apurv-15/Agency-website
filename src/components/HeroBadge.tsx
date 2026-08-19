import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/50 mx-auto mb-4 w-fit shadow-xs glow-button"
    >
      <div className="relative flex items-center justify-center">
        <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-framer-spin" style={{ willChange: "transform" }} />
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
      <span className="text-[13px] font-bold text-[#1a2e23] tracking-tight">10+ Global Brands Scaled · Greffon</span>
    </motion.div>
  );
}



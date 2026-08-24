import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 mx-auto mb-4 w-fit shadow-xs backdrop-blur-md"
    >
      <div className="relative flex items-center justify-center">
        <Sparkles className="w-3.5 h-3.5 text-accent-amber animate-framer-spin" style={{ willChange: "transform" }} />
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
      <span className="text-[12px] font-bold text-white tracking-tight font-inter">
        10+ Global Brands Scaled · Greffon
      </span>
    </motion.div>
  );
}

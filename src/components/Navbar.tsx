import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 md:py-6 px-6 md:px-10 w-full relative z-20">
      {/* Left Side Logo */}
      <div className="flex-1">
        <a href="#" className="font-bold tracking-tight text-xl text-[#1a2e23] font-display">
          GREFFON
        </a>
      </div>
      
      {/* Center Menu / Links */}
      <ul className="hidden md:flex items-center gap-6 text-neutral-900 font-bold text-xs backdrop-blur-md px-6 py-2.5 rounded-full bg-white/40 border border-white/40 shadow-xs">
        <li>
          <a href="#showcase-gallery" className="hover:text-black transition-colors">
            Selected Works
          </a>
        </li>
        <span className="text-neutral-400">·</span>
        <li>
          <a href="#about-apurv" className="hover:text-black transition-colors">
            Meet Apurv
          </a>
        </li>
        <span className="text-neutral-400">·</span>
        <li>
          <a href="#design-process" className="hover:text-black transition-colors">
            Process
          </a>
        </li>
        <span className="text-neutral-400">·</span>
        <li>
          <a href="#client-reviews" className="hover:text-black transition-colors">
            Reviews
          </a>
        </li>
        <span className="text-neutral-400">·</span>
        <li className="flex items-center gap-1.5 text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Available for New Projects</span>
        </li>
      </ul>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.a 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="flex items-center bg-[#1a2e23] text-white rounded-full pl-3 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-2.5 hover:opacity-90 transition-opacity group shadow-lg glow-button"
        >
          <span className="text-xs md:text-sm font-bold">Start a Project</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </div>
    </nav>
  );
}

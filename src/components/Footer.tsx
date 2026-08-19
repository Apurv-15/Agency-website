import { motion } from "motion/react";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-24 px-6 md:px-12 bg-[#f7f6f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Email Section */}
        <div className="flex items-center gap-4 mb-16 opacity-60">
          <a href="mailto:hello@xforge.agency" className="text-sm font-medium hover:underline transition-all">
            hello@xforge.agency
          </a>
          <div className="h-px flex-grow bg-neutral-300" />
        </div>

        {/* Massive Brand Name Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15vw] md:text-[12vw] font-playfair font-normal leading-none tracking-tight text-neutral-900"
          >
            Xforge
          </motion.h2>
        </div>

        {/* Pill Navigation Section */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-200 -z-10" />
          
          <div className="flex flex-wrap justify-center items-center gap-3 bg-[#f7f6f2] px-4">
            <a href="#" className="px-6 py-3 rounded-xl bg-white text-sm font-medium text-neutral-600 hover:text-black shadow-sm border border-neutral-100 transition-all">
              Home
            </a>
            <a href="#services" className="px-6 py-3 rounded-xl bg-white text-sm font-medium text-neutral-600 hover:text-black shadow-sm border border-neutral-100 transition-all">
              Services
            </a>
            <a href="#portfolio" className="px-6 py-3 rounded-xl bg-white text-sm font-medium text-neutral-600 hover:text-black shadow-sm border border-neutral-100 transition-all">
              Case Studies
            </a>
            <a href="#testimonials" className="px-6 py-3 rounded-xl bg-white text-sm font-medium text-neutral-600 hover:text-black shadow-sm border border-neutral-100 transition-all">
              Testimonials
            </a>
            <button 
              onClick={() => {
                const bookingSection = document.getElementById("booking");
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a2e23] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
            >
              Book Our Team
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-sm font-medium text-neutral-600 hover:text-black shadow-sm border border-neutral-100 transition-all">
              Direct Contact
            </a>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="flex justify-center items-center gap-4 opacity-40">
          <div className="h-px w-20 bg-neutral-400" />
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-900">
            &copy; {year} Xforge &mdash; All Rights Reserved
          </p>
          <div className="h-px w-20 bg-neutral-400" />
        </div>
      </div>

      {/* Decorative blurred elements (matches the app's overall high-end feel) */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neutral-200/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-neutral-200/50 rounded-full blur-[100px] pointer-events-none -z-10" />
    </footer>
  );
}

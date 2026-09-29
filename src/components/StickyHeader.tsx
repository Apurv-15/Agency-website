import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect if the user is over dark sections (like #about, #perspective, #reviews)
      const darkSections = document.querySelectorAll(
        '[data-bg="#0B0C0E"], [data-bg="#000000"], [data-bg="#0F1115"], [data-bg="#050505"], #about'
      );
      
      let overDark = false;
      const headerTriggerY = 50; // top offset

      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerTriggerY && rect.bottom >= headerTriggerY) {
          overDark = true;
        }
      });

      setIsDarkSection(overDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 flex items-center justify-between">
        
        {/* Left: Monogram / Wordmark */}
        <div className="pointer-events-auto flex items-center">
          <a
            href="#"
            className={`group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full transition-all duration-300 ${
              isDarkSection
                ? "bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-white backdrop-blur-xl"
                : "bg-white/80 hover:bg-white border border-[#E7E7E4] text-[#111111] backdrop-blur-xl shadow-xs"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center font-geist font-bold text-[10px] tracking-tight transition-colors ${
                isDarkSection ? "bg-white text-black" : "bg-[#111111] text-white"
              }`}
            >
              G
            </div>
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase font-geist">
              GREFFON
            </span>
          </a>
        </div>

        {/* Center: Editorial Island Pill Navigation */}
        <nav
          className={`pointer-events-auto hidden md:flex items-center gap-7 text-[13px] font-geist font-normal px-6 py-2 rounded-full transition-all duration-300 ${
            isDarkSection
              ? "bg-white/[0.08] border border-white/[0.12] text-neutral-300 backdrop-blur-xl"
              : "bg-white/80 border border-[#E7E7E4] text-neutral-600 backdrop-blur-xl shadow-xs"
          }`}
        >
          <a
            href="#"
            className={`transition-colors ${
              isDarkSection ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Home
          </a>
          <a
            href="#services"
            className={`font-medium flex items-center gap-1.5 transition-colors ${
              isDarkSection ? "text-white" : "text-black"
            }`}
          >
            <span>Services</span>
            <span
              className={`w-1 h-1 rounded-full ${
                isDarkSection ? "bg-white" : "bg-black"
              }`}
            />
          </a>
          <a
            href="#projects"
            className={`transition-colors ${
              isDarkSection ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Work
          </a>
          <a
            href="#about"
            className={`transition-colors ${
              isDarkSection ? "hover:text-white" : "hover:text-black"
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`transition-colors ${
              isDarkSection ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right: Pill Button */}
        <div className="pointer-events-auto">
          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-geist font-medium transition-all duration-200 active:scale-[0.98] group ${
              isDarkSection
                ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                : "bg-[#111111] text-white hover:bg-neutral-800 shadow-sm"
            }`}
          >
            <span>Get a Quote</span>
            <ArrowUpRight
              className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isDarkSection ? "text-neutral-600" : "text-neutral-400 group-hover:text-white"
              }`}
            />
          </a>
        </div>

      </div>
    </header>
  );
}

import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Mail, Twitter, Instagram, Github, Zap } from "lucide-react";

export default function AboutMeily() {
  const scrollToProjects = () => {
    const gallery = document.getElementById("showcase-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="about-apurv" 
      className="w-full text-white py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden font-geist bg-transparent"
    >
      
      <div className="max-w-[1140px] mx-auto">
        
        {/* Top Header Divider */}
        <div className="flex items-center justify-center gap-4 w-full mb-12 select-none">
          <div className="h-px bg-neutral-800 flex-1 max-w-[280px]" />
          <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-widest px-2 font-normal">
            Apurv
          </h2>
          <div className="h-px bg-neutral-800 flex-1 max-w-[280px]" />
        </div>

        {/* 2-Column Bento Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (5 Cols): Portrait + Speech Box + Skills Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Card: Portrait Photo & Speech Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#14161B] border border-neutral-800 rounded-[28px] p-5 relative overflow-hidden flex flex-col items-center shadow-lg"
            >
              {/* Decorative Sparkles */}
              <Sparkles className="w-5 h-5 text-neutral-400 absolute top-5 left-6 opacity-70 animate-pulse" />
              <Sparkles className="w-5 h-5 text-neutral-400 absolute top-7 right-6 opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />

              {/* Profile Avatar Photo */}
              <div className="relative mt-2 mb-4">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-neutral-800 shadow-xl bg-neutral-900">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                    alt="Apurv - Founder & Lead Developer"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
              </div>

              {/* Accent Speech Box */}
              <div className="w-full bg-[#E0A533] text-black rounded-[24px] p-5 text-center shadow-md relative">
                <h3 className="text-xl sm:text-2xl font-geist font-normal mb-1 tracking-[-1px]">
                  Hello, I'm <span className="underline underline-offset-4 decoration-2">Apurv</span>
                </h3>
                <p className="text-xs sm:text-[13px] font-inter font-bold leading-relaxed text-black/70 px-1 mt-1">
                  “ Passionate engineer driven by scalability & digital performance! ”
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: Experience & Capabilities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 text-white space-y-6 flex-1 shadow-lg"
            >
              {/* Education & Experience */}
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-inter mb-2">
                  Experience & Leadership
                </h4>
                <div className="flex justify-between items-baseline text-sm font-normal font-geist text-white tracking-tight">
                  <span>Greffon Studio</span>
                  <span className="text-neutral-500 text-[12px] font-inter font-bold">2022 - Present</span>
                </div>
                <div className="flex justify-between items-baseline text-[13px] text-neutral-400 mt-1 font-inter font-bold">
                  <span>Founder & Lead Developer</span>
                  <span className="text-[#E0A533] font-bold">$20M+ Impact</span>
                </div>
              </div>

              <div className="w-full h-px bg-neutral-800/80" />

              {/* Designing & Architectural Skills */}
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-inter mb-2">
                  Engineering Capabilities
                </h4>
                <p className="text-[13px] text-neutral-200 font-inter font-bold leading-relaxed">
                  Full-Stack Web Architecture, Shopify & Headless eCommerce, Custom Inventory CRMs, Conversion Funnels
                </p>
              </div>

              <div className="w-full h-px bg-neutral-800/80" />

              {/* Software Stack */}
              <div>
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 font-inter mb-2">
                  Software Stack
                </h4>
                <p className="text-[13px] text-neutral-200 font-inter font-bold leading-relaxed">
                  TypeScript, React 19, Next.js, Node.js, Python, Supabase, Tailwind, GSAP, AWS, Docker
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column (7 Cols): Featured Work Bento + Action Bar */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Bento Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 sm:p-7 relative overflow-hidden flex-1 shadow-lg flex flex-col justify-between"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-geist font-normal text-white tracking-[-1.6px]">
                  Featured Work
                </h3>
                <button 
                  onClick={scrollToProjects}
                  className="text-[12px] font-bold font-inter text-[#E0A533] flex items-center gap-1 hover:underline cursor-pointer group"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* 2x2 Bento Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Item 1: White Card Quote/Statement */}
                <div className="bg-white border border-transparent text-black rounded-[20px] p-6 shadow-xs flex flex-col items-center justify-center text-center min-h-[170px]">
                  <p className="text-xl sm:text-2xl font-geist font-normal text-black leading-snug tracking-[-0.5px]">
                    Nudging users to scale their digital flagship <Zap className="w-5 h-5 inline text-[#E0A533] fill-[#E0A533]" />
                  </p>
                </div>

                {/* Item 2: Amber Card Revenue Widget */}
                <div className="bg-[#E0A533] text-black rounded-[20px] p-5 shadow-xs flex flex-col justify-between min-h-[170px]">
                  <div className="bg-white/90 rounded-xl p-3 shadow-xs border border-black/10">
                    <div className="flex justify-between items-center text-[12px] font-inter font-bold mb-2">
                      <span>$10,000</span>
                      <span className="text-[10px] text-neutral-500 uppercase">1 YR</span>
                      <span className="text-emerald-700">$14,000 ∨</span>
                    </div>
                    {/* Slider bar mockup */}
                    <div className="w-full h-2 bg-neutral-200 rounded-full relative overflow-hidden">
                      <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold font-inter text-neutral-900 uppercase tracking-wider self-end mt-2">
                    Live Revenue Sync
                  </span>
                </div>

                {/* Item 3: Amber Card Live Analytics Trigger */}
                <div className="bg-[#E0A533] text-black rounded-[20px] p-5 shadow-xs flex flex-col justify-between min-h-[190px]">
                  <div className="space-y-2">
                    <div className="bg-white/90 rounded-lg p-2 text-[11px] font-inter font-bold flex justify-between items-center border border-black/10 shadow-sm">
                      <span>NESTLE Verified</span>
                      <span className="text-emerald-700">₹4,000 profit 🔥</span>
                    </div>
                    <div className="bg-white/80 rounded-lg p-2 text-[10px] font-inter font-bold space-y-1 shadow-sm">
                      <div className="flex justify-between text-emerald-700">
                        <span>1 Day</span>
                        <span className="text-emerald-700">▲ 11.2%</span>
                      </div>
                      <div className="flex justify-between text-emerald-700">
                        <span>1 Month</span>
                        <span className="text-emerald-700">▲ 9.3%</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold font-inter text-neutral-900 uppercase tracking-wider mt-2">
                    Multi-Channel CRM
                  </span>
                </div>

                {/* Item 4: White Card Conversion Sparkline */}
                <div className="bg-white border border-transparent text-black rounded-[20px] p-5 shadow-xs flex flex-col justify-between min-h-[190px]">
                  <div>
                    <span className="text-2xl font-normal font-geist text-black block leading-tight tracking-[-1px]">
                      40% LCP Boost
                    </span>
                    <span className="text-[12px] text-neutral-500 font-inter font-bold mt-1 block">
                      in conversion over 2 weeks
                    </span>
                  </div>
                  
                  {/* Mini Graph Mockup */}
                  <div className="w-full h-16 bg-neutral-50 border border-neutral-200 rounded-xl p-2 flex items-end">
                    <svg className="w-full h-12 text-emerald-600" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M 0 35 Q 20 30, 40 20 T 70 25 T 100 5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Bottom Action / Social Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#14161B] border border-neutral-800 rounded-[24px] p-4 flex flex-wrap items-center justify-between gap-4 shadow-lg"
            >
              {/* Social Icon Pills */}
              <div className="flex items-center gap-2.5">
                {[
                  { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com", title: "Twitter" },
                  { icon: <Mail className="w-4 h-4" />, href: "mailto:contact@greffon.studio", title: "Email" },
                  { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com", title: "Instagram" },
                  { icon: <Github className="w-4 h-4" />, href: "https://github.com", title: "GitHub" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-neutral-600 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Action Button: Start a Project / Resume */}
              <button
                onClick={scrollToContact}
                className="bg-white text-black font-inter font-bold text-[13px] px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer hover:bg-neutral-200"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}


import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Calendar, ArrowRight, X, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  projectType: string;
  avatar: string;
  bgImage: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Keller",
    role: "VP of Product & Co-Founder",
    company: "Bintelleapps LLC",
    location: "San Francisco Bay Area, USA",
    country: "USA",
    projectType: "iOS & Android Creator Marketplace",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    quote: "Apurv solved our biggest technical bottleneck. He engineered a custom delta-sync caching engine with BullMQ background workers that achieved zero-memory overhead on both iOS and Android, sailing through strict App Store compliance on the first review.",
    rating: 5.0,
  },
  {
    id: "2",
    name: "Ananya Roy",
    role: "Founder & Creative Director",
    company: "Jewells By Nova",
    location: "Mumbai, India",
    country: "Global Direct-to-Consumer",
    projectType: "Next.js 15 Full-Stack eCommerce",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    quote: "Our previous store kept losing checkout conversions. Apurv completely re-architected our platform on Next.js 15 and Supabase on AWS ECS. His live silver rate pricing engine and WhatsApp triggers dropped LCP load times by 40% and boosted revenue.",
    rating: 5.0,
  },
  {
    id: "3",
    name: "Rohan Mehta",
    role: "Head of Operations & Systems",
    company: "Ekotex Electrificient",
    location: "Mumbai, India",
    country: "Industrial Tech",
    projectType: "Offline-First Mobile & Inventory Sync",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    quote: "The cross-platform app Apurv built transformed our distribution pipeline. Real-time multi-branch inventory sync with Supabase triggers, Row Level Security, and offline-first mobile support eliminated all field paperwork and automated our warranty tracking.",
    rating: 5.0,
  },
  {
    id: "4",
    name: "Siddharth Deshmukh",
    role: "Director of Technology",
    company: "Ignicia Technologies",
    location: "Pune & Mumbai, India",
    country: "Enterprise Mobility",
    projectType: "Fleet Logistics & Booking Platform",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1542744801-43256666700c?q=80&w=1200&auto=format&fit=crop",
    quote: "Apurv developed our full-stack charter booking platform with dedicated administrative dispatch portals and real-time driver notification feeds. His ability to translate complex group transportation logistics into clean interfaces was exceptional.",
    rating: 5.0,
  }
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCallModal, setShowCallModal] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [callBooked, setCallBooked] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const submitCallBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) return;
    setCallBooked(true);
    setTimeout(() => {
      setShowCallModal(false);
      setCallBooked(false);
      setClientEmail("");
    }, 2000);
  };

  return (
    <section id="client-reviews" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-transparent text-black font-geist select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        
        {/* Header with Background Watermark "Testimonials" (Matches reference image) */}
        <div className="relative w-full flex flex-col items-center text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 font-bold tracking-tight mb-1">
            (Why clients love Apurv)
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-neutral-200/60 uppercase pointer-events-none select-none font-geist">
            Testimonials
          </h2>
        </div>

        {/* Dual Bento Grid Layout (Matches Reference Screenshot) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT BENTO CARD: High-Contrast Dark Stats Stack */}
          <div className="col-span-1 lg:col-span-4 bg-neutral-950 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
            
            {/* Smokey Abstract Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-950 to-neutral-900 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop" 
              alt="Smokey texture overlay" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale pointer-events-none mix-blend-overlay"
            />

            <div className="relative z-10 space-y-8 sm:space-y-10 my-auto">
              {/* Stat 1 */}
              <div>
                <h3 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-geist">
                  26+
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-400 font-geist mt-1">
                  Finalized Projects
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-geist">
                  98%
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-400 font-geist mt-1">
                  Client satisfaction rate
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-geist">
                  10M
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-400 font-geist mt-1">
                  Gross Revenue Generated
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT BENTO CARD: Full-Bleed Photo Review Carousel */}
          <div className="col-span-1 lg:col-span-8 relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-neutral-200/40 shadow-2xl min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-12 text-white bg-neutral-900">
            
            {/* Dynamic Full-Bleed Background Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.bgImage}
                alt={current.company}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-110"
              />
            </AnimatePresence>

            {/* Dark Vignette Overlay for Crisp Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 pointer-events-none" />

            {/* TOP BAR: Index Counter 01 / 04 */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-300">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
                <div className="w-12 h-0.5 bg-white/30 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-neutral-200">
                {current.projectType}
              </span>
            </div>

            {/* MAIN QUOTE & AUTHOR DETAILS */}
            <div className="relative z-10 max-w-[680px] my-auto py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug font-geist mb-6">
                    "{current.quote}"
                  </blockquote>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-geist">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-geist mt-0.5">
                      {current.role}, <span className="text-white font-semibold">{current.company}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM NAV CONTROLS: Circular Arrow Buttons (< and >) */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15">
              <button
                onClick={() => setShowCallModal(true)}
                className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="p-3.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Book Strategy Session Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            onClick={() => setShowCallModal(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <div className="relative w-full max-w-lg bg-[#14161B] border border-neutral-800 rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 text-white font-geist">
            <button 
              onClick={() => setShowCallModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {callBooked ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E0A533]/20 text-[#E0A533] flex items-center justify-center mb-4 border border-[#E0A533]/40">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Strategy Session Confirmed</h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                  Thank you! We'll send calendar coordinates and technical briefing to <span className="text-white font-bold">{clientEmail}</span>.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2 text-[#E0A533] text-[10px] font-bold tracking-widest uppercase font-inter">
                  <Calendar className="w-4 h-4" />
                  <span>Free 30-Min Strategy Session</span>
                </div>
                
                <h3 className="text-2xl font-normal text-white mb-2 leading-tight">
                  Let's architect your scalable roadmap.
                </h3>
                
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Direct technical briefing with Apurv. We'll audit your mobile app timeline, Shopify LCP performance, or custom Next.js storefront.
                </p>

                <form onSubmit={submitCallBooking} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 font-inter">
                      Work Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 shadow-sm cursor-pointer font-inter"
                  >
                    <span>Confirm Strategy Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

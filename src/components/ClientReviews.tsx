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
    <section id="client-reviews" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-transparent text-white font-geist select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* /superdesign Editorial Section Header */}
        <div className="relative w-full mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800/80 pb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-inter font-bold tracking-[0.18em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
                <span>Client Endorsements</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-2px] sm:tracking-[-3px] text-white leading-[1.08]">
                Proven outcomes. <br />
                <span className="font-serif-italic font-normal tracking-normal text-[1.12em] text-neutral-300">
                  Verified by founders.
                </span>
              </h2>
            </div>

            <div className="flex flex-col sm:items-end text-left sm:text-right">
              <div className="flex items-center gap-1.5 text-[#E0A533] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#E0A533" strokeWidth={0} />
                ))}
                <span className="text-sm font-inter font-bold text-white ml-1">5.0 / 5.0</span>
              </div>
              <span className="text-xs font-inter text-neutral-400 font-medium">
                100% On-Time Enterprise Delivery
              </span>
            </div>
          </div>

          {/* Depth Background Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.035] select-none overflow-hidden">
            <span className="text-[72px] sm:text-[130px] md:text-[180px] lg:text-[220px] font-geist font-black tracking-[-0.04em] uppercase whitespace-nowrap text-white block">
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* Dual Bento Grid Layout (Superdesign Editorial Layout) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          
          {/* LEFT BENTO CARD: /superdesign Architectural Stats Card */}
          <div className="col-span-1 lg:col-span-4 bg-[#0D0F12] rounded-[32px] p-8 sm:p-10 border border-neutral-800/80 shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
            {/* Fine Dotted Subtle Grid Accent */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.14]"
              style={{
                backgroundImage: 'radial-gradient(rgb(255, 255, 255) 0.6px, rgba(0, 0, 0, 0) 1.4px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-neutral-800/60">
              <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#E0A533] uppercase">
                PERFORMANCE METRICS
              </span>
              <span className="text-xs font-script text-neutral-400 rotate-[-4deg]">
                measured impact
              </span>
            </div>

            {/* Metric Stack (Geist Display-Lg style) */}
            <div className="relative z-10 space-y-7 sm:space-y-8 my-auto py-4">
              {/* Stat 1 */}
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl sm:text-5xl font-normal text-white tracking-[-2px] font-geist">
                    26+
                  </h3>
                  <span className="text-xs font-inter font-bold text-[#E0A533] uppercase">Shipped</span>
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 font-geist mt-1">
                  Full-stack digital products & platforms
                </p>
              </div>

              <div className="w-full h-px bg-neutral-800/60" />

              {/* Stat 2 */}
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl sm:text-5xl font-normal text-white tracking-[-2px] font-geist">
                    98%
                  </h3>
                  <span className="text-xs font-inter font-bold text-emerald-400 uppercase">Retention</span>
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 font-geist mt-1">
                  Client satisfaction & re-engagement rate
                </p>
              </div>

              <div className="w-full h-px bg-neutral-800/60" />

              {/* Stat 3 */}
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl sm:text-5xl font-normal text-white tracking-[-2px] font-geist">
                    $10M+
                  </h3>
                  <span className="text-xs font-inter font-bold text-[#E0A533] uppercase">Scaled</span>
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-neutral-400 font-geist mt-1">
                  Gross client revenue generated & processed
                </p>
              </div>
            </div>

            {/* Bottom Card Footer with Avatar Trust Group */}
            <div className="relative z-10 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
              <div className="flex -space-x-2">
                {testimonials.map((t) => (
                  <img
                    key={t.id}
                    src={t.avatar}
                    alt={t.name}
                    className="w-7 h-7 rounded-full border border-neutral-700 object-cover shadow-xs"
                  />
                ))}
              </div>
              <span className="text-[11px] font-inter font-bold text-neutral-400">
                Verified Global Leaders
              </span>
            </div>

          </div>

          {/* RIGHT BENTO CARD: Full-Bleed Editorial Review Card */}
          <div className="col-span-1 lg:col-span-8 relative rounded-[32px] overflow-hidden border border-neutral-800/80 shadow-2xl min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-12 text-white bg-neutral-950">
            
            {/* Dynamic Full-Bleed Background Image with subtle zoom */}
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.bgImage}
                alt={current.company}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-35"
              />
            </AnimatePresence>

            {/* Film grain / dark vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50 pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none" />

            {/* TOP BAR: Index Counter + Project Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#E0A533] uppercase">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
                <div className="w-16 h-1 bg-white/15 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#E0A533]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-inter font-bold tracking-tight text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0A533]" />
                <span>{current.projectType}</span>
              </div>
            </div>

            {/* MAIN QUOTE & AUTHOR DETAILS */}
            <div className="relative z-10 max-w-[700px] my-auto py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="text-xl sm:text-2xl md:text-[28px] font-normal tracking-[-0.8px] sm:tracking-[-1.2px] text-white leading-[1.35] font-geist mb-7">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Persona Pill */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-md"
                    />
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-white font-geist tracking-tight">
                        {current.name}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-neutral-400 font-geist">
                        {current.role} · <span className="text-white font-medium">{current.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM NAV CONTROLS: Superdesign Pill CTA & Circular Arrow Controls */}
            <div className="relative z-10 flex items-center justify-between pt-5 border-t border-white/15">
              <button
                onClick={() => setShowCallModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-geist font-medium hover:bg-neutral-200 transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-x-0.5 group-hover:text-black transition-transform" />
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/15 text-white transition-all flex items-center justify-center cursor-pointer shadow-sm hover:border-white/30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/15 text-white transition-all flex items-center justify-center cursor-pointer shadow-sm hover:border-white/30"
                >
                  <ChevronRight className="w-4 h-4" />
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

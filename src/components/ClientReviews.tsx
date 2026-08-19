import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Calendar, ArrowUpRight, CheckCircle2, X, MapPin, Building2, Globe } from "lucide-react";
import TextWordReveal from "./TextWordReveal";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  projectType: string;
  avatar: string;
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
    quote: "Apurv solved our biggest technical bottleneck. We were struggling with heavy LCP latency rendering 500+ high-res creator images in our mobile marketplace. He engineered a custom delta-sync caching engine with BullMQ background workers that achieved zero-memory overhead on both iOS and Android. He also streamlined Apple Pay and Stripe checkouts, sailing through strict App Store compliance on the very first review. Outstanding engineer.",
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
    quote: "Our previous store was sluggish and kept losing sales. Apurv completely re-architected our platform on Next.js 15, React 19, and Supabase deployed on AWS ECS. The live silver rate pricing API and automated WhatsApp order notifications he integrated dropped our page load times by 40% and boosted our checkout conversions significantly. He treats your business like his own.",
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
    quote: "The cross-platform app Apurv built transformed our entire distribution pipeline. Having real-time multi-branch inventory synchronization with Supabase triggers, Row Level Security, and offline-first mobile support eliminated all field paperwork and automated our warranty QR tracking. Truly high-caliber architectural depth.",
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
    quote: "Apurv developed our full-stack charter booking platform with dedicated administrative dispatch portals and real-time driver notification feeds. His ability to translate complex group transportation logistics into clean, intuitive interfaces and dependable backend pipelines was exceptional from start to finish.",
    rating: 5.0,
  }
];

const stats = [
  {
    value: "50+",
    label: "Digital projects shipped.",
  },
  {
    value: "10+",
    label: "Global brands scaled.",
  },
  {
    value: "99.4%",
    label: "Client retention & satisfaction.",
  },
];

interface ClientReviewsProps {
  onBookCall?: () => void;
}

export default function ClientReviews({ onBookCall }: ClientReviewsProps) {
  const [showCallModal, setShowCallModal] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [callBooked, setCallBooked] = useState(false);

  const handleBookCall = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      setShowCallModal(true);
    }
  };

  const scrollToServices = () => {
    const process = document.getElementById("design-process");
    if (process) {
      process.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <section id="client-reviews" className="w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid: Left Studio Photo | Right Header & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 md:mb-18">
          
          {/* Left Column: Black & White Designer Studio Scene */}
          <div className="lg:col-span-5 flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 rounded-[1.8rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl group"
              style={{ willChange: "transform, opacity" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Engineering studio team working on software architecture and high-performance apps" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-neutral-300">
                    Verified Client Engagements · U.S. & International
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title, Subtitle & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-6 w-fit shadow-2xs glow-button">
              <span className="w-2 h-2 rounded-full border border-neutral-400 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
              </span>
              <span>Client Endorsements</span>
            </div>

            {/* Main Heading with Word Reveal */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-bold text-white tracking-tight leading-[1.05] mb-6">
              <TextWordReveal 
                text="Client Reviews" 
                delay={0.1}
                stagger={0.06}
              />
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8">
              <TextWordReveal 
                text="Real feedback from founders and engineering leaders across the United States and global markets who trusted us to build and scale their high-performance software."
                delay={0.25}
                stagger={0.015}
                blur={false}
              />
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleBookCall}
                className="px-7 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-white text-xs sm:text-sm font-semibold border border-neutral-700 hover:border-white/50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.06)] active:scale-98 flex items-center gap-2 cursor-pointer glow-button"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Book a Strategy Call</span>
              </button>

              <button
                onClick={scrollToServices}
                className="px-7 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-neutral-300 hover:text-white text-xs sm:text-sm font-semibold border border-neutral-800 hover:border-neutral-700 transition-all shadow-md active:scale-98 flex items-center gap-1.5 cursor-pointer glow-button"
              >
                <span>See Process & Tech</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

          </div>

        </div>

        {/* Middle Section: Client Review Cards Grid (2x2 Grid Featuring All Companies) */}
        <div className="relative mb-14 md:mb-18">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-[1.6rem] sm:rounded-[2rem] bg-neutral-950/85 border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Top Subtle Highlight Badge for US Client */}
                {idx === 0 && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-emerald-500/10 border-l border-b border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Featured U.S. Client</span>
                  </div>
                )}

                <div>
                  {/* Top: Avatar, Name & Location */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-neutral-700/80 bg-neutral-800 shrink-0">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 pr-2">
                      <div className="flex items-baseline justify-between flex-wrap gap-1">
                        <h3 className="text-xl font-bold font-display text-white">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-neutral-300 font-medium mt-0.5">
                        {item.role} · <strong className="text-white font-semibold">{item.company}</strong>
                      </p>

                      {/* Location Badge */}
                      <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-emerald-400">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Focus Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 mb-4">
                    <Building2 className="w-3 h-3 text-neutral-500" />
                    <span>{item.projectType}</span>
                  </div>

                  {/* Subtle Divider */}
                  <div className="w-full h-px bg-neutral-800/80 my-3" />

                  {/* Humanized Quote */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom: 5.0 Star Rating */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-900/60">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-200">
                      {item.rating.toFixed(1)}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">Verified Project</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Section: 3-Column Stats Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-[1.8rem] sm:rounded-[2.4rem] bg-neutral-950/80 border border-neutral-900 p-8 sm:p-12 md:p-14 shadow-2xl"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-900">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center px-4 pt-6 md:pt-0 first:pt-0"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Direct Call Booking Modal */}
      <AnimatePresence>
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCallModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-[2rem] bg-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Schedule Discovery Session
                  </span>
                </div>
                <button 
                  onClick={() => setShowCallModal(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {callBooked ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Discovery Call Scheduled</h3>
                  <p className="text-neutral-400 text-sm max-w-xs">
                    Calendar invite and preparation briefing sent to <strong className="text-white">{clientEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitCallBooking} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white mb-1">
                      Book 30-Min Engineering Strategy Call
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                      Discuss mobile architectures, Next.js eCommerce, custom inventory CRMs, or backend pipelines directly with Apurv.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Your Work Email</label>
                      <input 
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer glow-button"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}



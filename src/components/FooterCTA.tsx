import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, CheckCircle2, X, Dribbble, Sparkles } from "lucide-react";
import TextWordReveal from "./TextWordReveal";

interface FooterCTAProps {
  onBookCall?: () => void;
}

export default function FooterCTA({ onBookCall }: FooterCTAProps) {
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
    <footer id="contact" className="w-full bg-black text-white relative min-h-[680px] md:min-h-[780px] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 md:px-10">
      
      {/* Liquid Silk Smoke Wave Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neutral-800/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Dynamic Abstract Silk Wave Render (SVG Wave Masked with Smoke Gradient) */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="smokeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a3a3a3" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="smokeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#737373" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="35" />
            </filter>
            <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          {/* Deep Ambient Smoked Ribbons */}
          <path
            d="M-100,550 C300,680 450,220 720,400 C990,580 1150,280 1540,420 L1540,900 L-100,900 Z"
            fill="url(#smokeGrad1)"
            filter="url(#blurFilter)"
            opacity="0.6"
          />
          <path
            d="M-50,620 C250,450 480,180 820,340 C1160,500 1250,150 1500,480"
            stroke="url(#smokeGrad2)"
            strokeWidth="90"
            fill="none"
            filter="url(#softBlur)"
            opacity="0.7"
          />
          {/* Crisp Silk Ridge Lines */}
          <path
            d="M-50,620 C250,450 480,180 820,340 C1160,500 1250,150 1500,480"
            stroke="white"
            strokeWidth="3.5"
            fill="none"
            filter="url(#softBlur)"
            opacity="0.8"
          />
          <path
            d="M0,660 C320,480 520,240 850,380 C1180,520 1300,220 1500,520"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Ambient Dark Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Available For Work Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-8 backdrop-blur-md shadow-2xs glow-button"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available For Work</span>
        </motion.div>

        {/* Main Center Headline with Word Reveal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-medium text-white tracking-tight leading-[1.25] md:leading-[1.2] max-w-3xl mb-9 px-2">
          <TextWordReveal 
            text="Curious about what we can create together? Let’s bring something extraordinary to life!"
            delay={0.15}
            stagger={0.035}
            blur={true}
          />
        </h2>

        {/* Main Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
          style={{ willChange: "transform, opacity" }}
        >
          <button
            onClick={handleBookCall}
            className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-900 text-white text-sm font-semibold border border-neutral-700/90 hover:border-white/60 transition-all shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,255,0.16)] active:scale-98 flex items-center gap-2.5 cursor-pointer glow-button"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Book a Free Call</span>
          </button>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-5 text-neutral-400 text-sm font-medium"
          style={{ willChange: "opacity" }}
        >
          {/* Behance */}
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center font-bold text-base tracking-tight"
            title="Behance"
          >
            Bē
          </a>

          <span className="text-neutral-700 select-none">|</span>

          {/* X (Twitter) */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center"
            title="X (Twitter)"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <span className="text-neutral-700 select-none">|</span>

          {/* Dribbble */}
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center"
            title="Dribbble"
          >
            <Dribbble className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Subtle Copyright & Studio Notice */}
        <div className="mt-14 text-xs text-neutral-600 font-mono">
          © {new Date().getFullYear()} Greffon Studio. All rights reserved.
        </div>

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
                    Direct Consultation Request
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
                  <h3 className="text-xl font-bold text-white mb-2">Consultation Scheduled</h3>
                  <p className="text-neutral-400 text-sm max-w-xs">
                    Apurv's calendar link and Greffon onboarding briefing have been dispatched to <strong className="text-white">{clientEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitCallBooking} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white mb-1">
                      Schedule a 1-on-1 Call
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                      Let's review your product roadmap, custom Shopify funnels, CRM apps, and start scaling your business.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Your Email</label>
                      <input 
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="you@company.com"
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
    </footer>
  );
}


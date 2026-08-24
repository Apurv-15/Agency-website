import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, CheckCircle2, X, Dribbble } from "lucide-react";
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
    <footer id="contact" className="w-full bg-transparent text-text-primary relative min-h-[680px] md:min-h-[780px] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 md:px-10 rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 md:-mt-20 z-10 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.05)]">
      
      {/* Liquid Silk Smoke Wave Background Effect (Light version) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neutral-100/50 blur-[130px] rounded-full pointer-events-none" />

        {/* Dynamic Abstract Silk Wave Render (SVG Wave Masked with Light Smoke Gradient) */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-multiply"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="smokeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#f5f5f5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e5e5e5" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#f5f5f5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="smokeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="40%" stopColor="#f5f5f5" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#d4d4d4" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
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
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="3.5"
            fill="none"
            filter="url(#softBlur)"
            opacity="0.8"
          />
          <path
            d="M0,660 C320,480 520,240 850,380 C1180,520 1300,220 1500,520"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Ambient Light Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Available For Work Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-border-muted text-xs font-bold text-text-primary mb-8 shadow-2xs"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
          <span className="font-inter uppercase tracking-wide text-[10px]">Available For Work</span>
        </motion.div>

        {/* Main Center Headline with Word Reveal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-geist font-normal text-text-primary tracking-tight leading-[1.25] md:leading-[1.2] max-w-3xl mb-9 px-2">
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
            className="px-8 py-3.5 rounded-full bg-surface-dark hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2.5 cursor-pointer font-inter uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4 text-accent-amber" />
            <span>Book a Free Call</span>
          </button>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-5 text-text-secondary text-sm font-bold font-inter"
          style={{ willChange: "opacity" }}
        >
          {/* Behance */}
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-text-primary transition-colors flex items-center tracking-tight"
            title="Behance"
          >
            Bē
          </a>

          <span className="text-border-muted select-none">|</span>

          {/* X (Twitter) */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-text-primary transition-colors flex items-center"
            title="X (Twitter)"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <span className="text-border-muted select-none">|</span>

          {/* Dribbble */}
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-text-primary transition-colors flex items-center"
            title="Dribbble"
          >
            <Dribbble className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Subtle Copyright & Studio Notice */}
        <div className="mt-14 text-[11px] text-text-secondary font-bold uppercase tracking-wider font-inter">
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
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-card-large bg-white border border-border-muted p-6 sm:p-8 shadow-2xl z-10 text-text-primary"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-amber animate-pulse" />
                  <span className="text-[10px] font-bold font-inter uppercase tracking-wider text-text-secondary animate-pulse">
                    Direct Consultation Request
                  </span>
                </div>
                <button 
                  onClick={() => setShowCallModal(false)}
                  className="p-1.5 rounded-full hover:bg-surface-light text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {callBooked ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center mb-4 border border-accent-amber/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 font-geist">Consultation Scheduled</h3>
                  <p className="text-text-secondary text-sm max-w-xs font-geist">
                    Apurv's calendar link and Greffon onboarding briefing have been dispatched to <strong className="text-text-primary font-bold">{clientEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitCallBooking} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-normal font-geist text-text-primary mb-1">
                      Schedule a 1-on-1 Call
                    </h3>
                    <p className="text-text-secondary text-xs font-geist">
                      Let's review your product roadmap, custom Shopify funnels, CRM apps, and start scaling your business.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1 font-inter">Your Email</label>
                      <input 
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-control bg-white border border-border-muted text-text-primary placeholder-text-secondary/40 text-sm focus:outline-none focus:border-text-primary font-geist"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3 font-inter">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(false)}
                      className="px-4 py-2 text-xs font-bold text-text-secondary hover:text-text-primary cursor-pointer uppercase tracking-wider"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-pill bg-surface-dark text-white font-bold text-xs hover:opacity-90 transition-colors shadow-sm cursor-pointer uppercase tracking-wider"
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

import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-[1024px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-amber mb-4 block font-inter">
              Direct Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-geist font-normal text-text-primary mb-8 leading-tight tracking-tight">
              Ready to architect <br /> your next digital era?
            </h2>
            <p className="text-text-secondary text-sm mb-12 leading-relaxed font-geist">
              We're currently accepting new projects. Speak directly with our lead developers to discuss your technical specifications and launch roadmap.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-control bg-surface-light flex items-center justify-center border border-border-muted group-hover:bg-text-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-0.5 font-inter">
                    Engineering Team
                  </p>
                  <p className="text-base font-bold font-geist text-text-primary">
                    hello@warmframe.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-control bg-surface-light flex items-center justify-center border border-border-muted group-hover:bg-accent-amber group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-0.5 font-inter">
                    Direct WhatsApp
                  </p>
                  <p className="text-base font-bold font-geist text-text-primary">
                    +1 (555) 012-3456
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-control bg-surface-light flex items-center justify-center border border-border-muted group-hover:bg-text-primary group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-0.5 font-inter">
                    Global HQ
                  </p>
                  <p className="text-base font-bold font-geist text-text-primary">
                    London, UK | Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-card-normal bg-surface-light border border-border-muted/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1 font-inter">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Sarah Jenkins" 
                    className="w-full px-4 py-3 rounded-control bg-white border border-border-muted focus:border-text-primary outline-none transition-all text-sm font-geist text-text-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1 font-inter">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="sarah@bintelleapps.com" 
                    className="w-full px-4 py-3 rounded-control bg-white border border-border-muted focus:border-text-primary outline-none transition-all text-sm font-geist text-text-primary" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1 font-inter">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-control bg-white border border-border-muted focus:border-text-primary outline-none transition-all text-sm font-geist text-text-primary cursor-pointer appearance-none">
                  <option>Website Design & Dev</option>
                  <option>iOS / Android Mobile Architecture</option>
                  <option>Offline-first Database Integration</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-1 font-inter">
                  Project Brief
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your vision..." 
                  className="w-full px-4 py-3 rounded-control bg-white border border-border-muted focus:border-text-primary outline-none transition-all text-sm font-geist text-text-primary resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-surface-dark text-white rounded-pill font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer text-xs uppercase tracking-wider font-inter">
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

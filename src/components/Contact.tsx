import { motion } from "motion/react";
import { MessageSquare, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Direct Contact</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight tracking-tight">
              Ready to architect your <br /> next digital era?
            </h2>
            <p className="text-neutral-500 text-lg mb-12 leading-relaxed">
              We're currently accepting new projects. Speak directly with our lead architects to discuss your technical specifications and launch roadmap.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Engineering Team</p>
                  <p className="text-xl font-bold font-display">hello@xforge.agency</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Direct WhatsApp</p>
                  <p className="text-xl font-bold font-display">+1 (555) 012-3456</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Global HQ</p>
                  <p className="text-xl font-bold font-display">London, UK | Remote</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-white border border-neutral-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-900 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-900 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-900 outline-none transition-all appearance-none cursor-pointer">
                  <option>Website Design & Dev</option>
                  <option>SEO Optimization</option>
                  <option>Dashboard Integration</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-4">Project Brief</label>
                <textarea rows={4} placeholder="Describe your vision..." className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-900 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

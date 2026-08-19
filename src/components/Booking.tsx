import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Calendar, PhoneCall, Sparkles, Video, ShieldCheck, ArrowRight } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

export default function Booking() {
  const [calUsername, setCalUsername] = useState("calcom/30min");
  const [customLink, setCustomLink] = useState("");

  const activeLink = customLink.trim() || calUsername;

  // Format link correctly for iframe
  const iframeUrl = activeLink.startsWith("http") 
    ? activeLink 
    : `https://cal.com/${activeLink}?theme=light`;

  return (
    <section id="booking" className="py-24 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1a2e23]/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Calendar Integration</span>
          <ScrollRevealText>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight text-reveal text-reveal-target">
              Schedule Your Free Strategy Call
            </h2>
            <p className="text-neutral-500 font-medium text-reveal text-reveal-target">
              Claim a high-impact 30-minute consultation. We'll audit your load times, map out a conversion framework, and configure your digital growth roadmap.
            </p>
          </ScrollRevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Call Details & Interactive Link customizer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[2.5rem] p-8 md:p-10 border border-neutral-100 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                  100% Free Call
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400 font-medium">
                  <Video className="w-3.5 h-3.5" /> Video Call
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                What we'll deliver in 30 minutes:
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Conversion Architecture Audit</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      We check your current landing page layouts and identify leaks that are costing you mobile sign-ups and leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a2e23]/10 flex items-center justify-center shrink-0 text-[#1a2e23]">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Interactive Custom Roadmap</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Walk away with a concrete system blueprint tailored specifically to your target conversion metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">GSAP Motion & Speed Analysis</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Review how performance-first layout design and lightweight animations can cut your load time to under 1.5s.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Link Customizer for Sandbox Testing */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                Live Cal.com / Cal.ai Integration Sandbox
              </span>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                To link your own calendar, select a preset below or enter your personalized Cal.com path/URL:
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { label: "Default (30m Demo)", val: "calcom/30min" },
                  { label: "RIVR Strategy Call", val: "calcom/15min" },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => {
                      setCalUsername(preset.val);
                      setCustomLink("");
                    }}
                    className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                      activeLink === preset.val && !customLink
                        ? "bg-[#1a2e23] text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  placeholder="Or enter your link (e.g. peer/intro)"
                  className="w-full text-xs px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#1a2e23] transition-colors font-mono"
                />
                <div className="absolute right-3 top-3 flex items-center">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dynamic Interactive Cal.com IFrame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] border border-neutral-100 shadow-xl overflow-hidden min-h-[550px] lg:min-h-[650px] flex flex-col relative"
          >
            {/* Header toolbar for scheduling frame */}
            <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-neutral-400 ml-2 tracking-tight">cal.com/{activeLink}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                ● Live Integration
              </span>
            </div>

            {/* Cal.com Embed Area */}
            <div className="flex-grow w-full h-full relative bg-neutral-50/50">
              <iframe
                src={iframeUrl}
                title="Cal.com scheduling widget"
                className="absolute inset-0 w-full h-full border-0 rounded-b-[2.5rem]"
                allow="camera; microphone; geolocation"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

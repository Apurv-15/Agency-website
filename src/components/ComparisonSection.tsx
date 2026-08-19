import { motion } from "motion/react";
import { Check, Minus, ShieldCheck, Award, Users, Trophy } from "lucide-react";

const rows = [
  { benefit: "Direct access to senior full-stack engineers", internet: false, expert: true },
  { benefit: "Zero account-manager layers or telephone games", internet: false, expert: true },
  { benefit: "Sub-1.5s load times & 99+ Core Web Vitals", internet: false, expert: true },
  { benefit: "Real-time sync, offline-first & custom 3D web", internet: false, expert: true },
  { benefit: "Production CI/CD (AWS ECS, Docker, EAS)", internet: false, expert: true },
  { benefit: "App Store, Play Store & Stripe/Apple Pay compliance", internet: false, expert: true },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-normal text-neutral-900 mb-6 italic">
          Our Team vs. Traditional Agencies
        </h2>
        <p className="text-neutral-500 max-w-2xl mx-auto font-medium mb-16 leading-relaxed">
          Traditional agencies bill you for account managers while delegating work to junior developers. We provide direct access to principal engineers with verified production deployments across high-scale platforms.
        </p>

        {/* Comparison Table */}
        <div className="rounded-[2rem] overflow-hidden border border-neutral-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] bg-[#F8F7F3]">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-neutral-200/60">
            <div className="p-6 md:p-8 text-left font-bold text-neutral-400 uppercase tracking-widest text-[10px] md:text-xs">Deliverable Standard</div>
            <div className="p-6 md:p-8 font-bold text-neutral-400 uppercase tracking-widest text-[10px] md:text-xs">Traditional Agency / DIY</div>
            <div className="p-6 md:p-8 bg-[#1a2e23] text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">Our Engineering Team</div>
          </div>

          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-neutral-200/40 last:border-0 hover:bg-neutral-50/50 transition-colors">
              <div className="p-6 md:p-8 text-left text-sm md:text-base font-medium text-neutral-800">{row.benefit}</div>
              <div className="p-6 md:p-8 flex items-center justify-center">
                <Minus className="w-5 h-5 text-neutral-300" />
              </div>
              <div className="p-6 md:p-8 flex items-center justify-center bg-[#1a2e23]/[0.02]">
                <div className="w-8 h-8 rounded-full bg-[#1a2e23]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#1a2e23]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Trust Badges */}
        <div className="mt-16 pt-8 border-t border-neutral-100">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-bold text-neutral-900">Worked With 100+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-bold text-neutral-900">GDG Industry Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-bold text-neutral-900">Trusted Advisors</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-bold text-neutral-900">Proven Results</span>
            </div>
          </div>
        </div>

        {/* GDG Trust Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white shadow-xl"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-neutral-900 bg-neutral-200" />
            ))}
          </div>
          <span className="text-xs font-bold tracking-tight uppercase">Trusted by Google Developers Group Community</span>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Cpu, Layers, Sparkles, Orbit, Landmark, Activity } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const partners = [
  {
    name: "Rivr Finance",
    logo: Landmark,
    accent: "Fintech leader"
  },
  {
    name: "Apex Labs",
    logo: Cpu,
    accent: "Hardware AI"
  },
  {
    name: "Horizon Systems",
    logo: Orbit,
    accent: "Enterprise cloud"
  },
  {
    name: "Aether AI",
    logo: Sparkles,
    accent: "Deep Learning"
  },
  {
    name: "Helix Bio",
    logo: Activity,
    accent: "Genomics"
  },
  {
    name: "Stratos Corp",
    logo: Layers,
    accent: "Data logistics"
  }
];

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white border-t border-b border-neutral-100 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#1a2e23]/5 rounded-full filter blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1a2e23] mb-2 block">
            Engineering partners across industries
          </span>
          <ScrollRevealText>
            <h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight text-reveal text-reveal-target">
              Trusted by high-growth startups and global enterprises
            </h3>
          </ScrollRevealText>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => {
            const Icon = partner.logo;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl border border-neutral-50 bg-neutral-50/50 hover:bg-white hover:border-neutral-200/60 hover:shadow-sm transition-all w-full max-w-[170px] group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-[#1a2e23] group-hover:bg-[#1a2e23]/5 transition-colors mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-neutral-800 tracking-tight mb-0.5">
                  {partner.name}
                </span>
                <span className="text-[9px] font-medium text-neutral-400 uppercase tracking-wider">
                  {partner.accent}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

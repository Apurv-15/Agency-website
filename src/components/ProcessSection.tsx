import { motion } from "motion/react";
import { ArrowUpRight, Star, MoveRight } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

const steps = [
  {
    number: "1",
    title: "Discovery & Scheduling",
    description: "Book your consultation in just a few clicks. We identify your core challenges and business opportunities right from the start."
  },
  {
    number: "2",
    title: "Deep Request Analysis",
    description: "Our GDG-certified experts perform a deep dive into your requirements, analyzing technical feasibility and competitive alignment."
  },
  {
    number: "3",
    title: "Personalized Execution",
    description: "We craft and execute a bespoke strategy tailored to your exact goals, ensuring elite engineering and measurable growth."
  },
  {
    number: "4",
    title: "Ongoing Partnership",
    description: "We stay with you beyond launch, offering continuous support and architectural refinements as your business scales."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:sticky lg:top-24">
            <ScrollRevealText>
              <h2 className="text-4xl md:text-5xl font-playfair font-normal text-neutral-900 mb-6 italic leading-tight text-reveal text-reveal-target">
                Proven Process for Your Goals
              </h2>
              <p className="text-neutral-500 max-w-sm mb-10 font-medium leading-relaxed text-reveal text-reveal-target">
                Our step-by-step approach simplifies challenges, delivers tailored strategies, and drives measurable results.
              </p>
            </ScrollRevealText>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center gap-2 bg-[#1a2e23] text-white px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-white text-neutral-900 px-8 py-3.5 rounded-xl font-bold hover:bg-neutral-50 transition-all border border-neutral-100 text-sm">
                Our Services
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-1 text-[#1a2e23]">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="h-4 w-px bg-neutral-300" />
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Rated by loving Clients</span>
            </div>
          </div>

          {/* Right Column - Step Cards */}
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white rounded-[2rem] p-10 md:p-14 text-center border border-neutral-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all"
              >
                {/* Decorative circle/number backdrop */}
                <div className="relative mb-10 inline-block">
                  <span className="text-[120px] font-playfair font-normal leading-none text-neutral-900">
                    {step.number}
                  </span>
                  {/* Subtle brush underline effect simulated with div */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[140%] h-4 bg-neutral-100/50 rounded-full blur-md -z-10" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-medium text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium">
                  {step.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a2e23]/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-[#1a2e23]/[0.05] transition-colors" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

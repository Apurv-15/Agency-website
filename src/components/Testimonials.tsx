import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "CEO of Rivr Finance",
    text: "The glassmorphism UI Xforge built for our dashboard completely transformed how our users perceive our brand. It's premium, polished, and extremely intuitive.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Peak Realty",
    text: "Speed was our number one priority. Xforge delivered a site that loads in under 1 second and tripled our mobile conversion rate within the first month.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    text: "Working with Xforge felt like having an elite internal web team. Their design sensibility is unmatched, and the technical execution is flawless.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-neutral-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 block">What Our Clients Say</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Loved by forward-thinking <br /> industry leaders.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Here is how partnering with our senior engineering team accelerated speed-to-market and unlocked scalable conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-white/20 mb-6" />
                <p className="text-lg leading-relaxed text-neutral-300 font-medium italic">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold font-display">{t.name}</h4>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

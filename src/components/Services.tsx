import { motion } from "motion/react";
import { 
  Target, 
  Palette, 
  Cpu, 
  LineChart, 
  ArrowUpRight, 
  MoveRight,
  Globe,
  Settings,
  Users,
  ShieldCheck,
  Leaf,
  Lightbulb
} from "lucide-react";

const services = [
  {
    title: "Product Strategy",
    description: "Crafting clear, actionable roadmaps that align with your business vision, ensuring sustainable growth and a competitive edge.",
    icon: Target,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    title: "Premium UX/UI Design",
    description: "Providing expert visual direction and interaction design to strengthen user engagement and long-term brand loyalty.",
    icon: Palette,
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    title: "Scalable Development",
    description: "Our engineering process is designed to help businesses eliminate technical debt and reduce operational costs at scale.",
    icon: Cpu,
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    title: "Growth & Analytics",
    description: "Our Market Intelligence service empowers businesses with the technical SEO and data they need to navigate markets confidently.",
    icon: LineChart,
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-23671d17c24d?q=80&w=2070&auto=format&fit=crop"
    ]
  },
];

const tags = [
  { label: "Digital Transformation", icon: Globe },
  { label: "Organizational Design", icon: Settings },
  { label: "Talent Management", icon: Users },
  { label: "Project Planning", icon: MoveRight },
  { label: "Risk & Compliance", icon: ShieldCheck },
  { label: "Sustainability", icon: Leaf },
  { label: "Product Development", icon: Lightbulb },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#f7f6f2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-normal text-neutral-900 mb-6 italic">What We Even Do</h2>
          <p className="text-neutral-500 max-w-xl mx-auto font-medium">
            Explore our range of services to discover the perfect solution tailored to your project's unique needs.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 border border-neutral-100">
                <service.icon className="w-5 h-5 text-neutral-800" />
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-4 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Dual Image Preview */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={service.images[0]} 
                    alt="Process" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={service.images[1]} 
                    alt="Result" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {tags.map((tag) => (
            <div key={tag.label} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm border border-neutral-100 text-sm font-bold text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors cursor-default">
              <tag.icon className="w-4 h-4 opacity-70" />
              {tag.label}
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 text-center shadow-sm border border-neutral-100 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-normal text-neutral-900 mb-8 italic">Reach Out for Consultancy Inquiries</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#1a2e23] text-white px-8 py-4 rounded-xl font-bold hover:gap-3 transition-all shadow-lg">
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-neutral-100 text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-all">
              Our Services
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

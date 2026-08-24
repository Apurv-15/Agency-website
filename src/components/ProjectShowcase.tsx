import { ArrowUpRight, Star } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  format: string;
  duration: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerAvatar: string;
  innerHeadline: string;
  innerBio: string;
  accentQuote: string;
}

export default function ProjectShowcase() {
  const projects: ProjectItem[] = [
    {
      id: "bintelleapps",
      title: "Bintelleapps Creator Marketplace",
      description: "Cross-platform mobile delivery marketplace for creator nail artists. Engineered with zero-memory delta-sync caching, BullMQ background job queues, and Stripe integrations.",
      format: "iOS & Android Mobile Architecture",
      duration: "8 weeks",
      reviewerName: "Sarah Jenkins",
      reviewerRole: "Founder, Bintelleapps",
      reviewerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&fit=crop&q=80",
      innerHeadline: "REVOLUTIONIZING CREATOR MOBILE COMMERCE",
      innerBio: "Hi, I'm Sarah Jenkins. We built Bintelleapps to empower independent nail creators with a seamless delivery experience.",
      accentQuote: "Antigravity delivered a flawless React Native cache manager that solved all of our media loading bottlenecks."
    },
    {
      id: "jewells-nova",
      title: "Jewells By Nova Flagship",
      description: "Luxury jewelry storefront with real-time precious metal price feeds, high-performance Supabase query optimizations, and a cinematic modern checkout funnel.",
      format: "Next.js 15 & Supabase eCommerce",
      duration: "6 weeks",
      reviewerName: "Marcus Vance",
      reviewerRole: "CTO, Nova Group",
      reviewerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&fit=crop&q=80",
      innerHeadline: "LUXURY ECOMMERCE FEEDS AND APIS",
      innerBio: "Marcus Vance here. Managing precious metal price variance in real-time was our biggest hurdle.",
      accentQuote: "LCP was reduced by 40% immediately upon launching the Next.js storefront on our ECS clusters."
    },
    {
      id: "ekotex-mobile",
      title: "Ekotex Enterprise App",
      description: "Offline-first multi-branch inventory tracking application with real-time sync, warranty QR code processing, and Row Level Security controls.",
      format: "Offline-First Enterprise Mobile",
      duration: "12 weeks",
      reviewerName: "Helena Rostova",
      reviewerRole: "Director of Product, Ekotex",
      reviewerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&fit=crop&q=80",
      innerHeadline: "OFFLINE SYNC AND INVENTORY WRAPPING",
      innerBio: "Helena Rostova, handling global operations. Ekotex needed a way for technicians to scan products offline.",
      accentQuote: "A highly specialized solution that continues to sync transactions under zero-connectivity field states."
    }
  ];

  return (
    <section id="portfolio" className="w-full bg-white py-24 px-6">
      <div className="w-full max-w-[1024px] mx-auto flex flex-col gap-32">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-10">
            
            {/* 1. Device Mockup */}
            <div className="w-full aspect-[16/10] md:aspect-[16/9.5] bg-[#5E5E5E] border-[8px] md:border-[10px] border-accent-amber rounded-card-large p-3 md:p-4 shadow-[-24px_24px_24px_0px_rgba(0,0,0,0.2)] relative overflow-hidden">
              {/* Inner screen content */}
              <div className="w-full h-full rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-[#121212]">
                
                {/* Left Pane: Light Panel (Simulates creator profile) */}
                <div className="bg-white p-6 flex flex-col justify-between h-full border-r border-border-muted">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={project.reviewerAvatar} 
                        alt={project.reviewerName}
                        className="w-10 h-10 rounded-full object-cover border border-border-muted" 
                      />
                      <div>
                        <h4 className="font-bold text-[13px] text-text-primary font-inter leading-none">
                          {project.reviewerName}
                        </h4>
                        <p className="text-[11px] text-text-secondary font-inter mt-1 leading-none">
                          {project.reviewerRole}
                        </p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-text-secondary leading-relaxed font-inter">
                      {project.innerBio}
                    </p>
                  </div>

                  {/* Contact Chip Row */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-pill bg-[#CCDAE3] text-[#2C4A5E] font-inter">
                      Contact
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-pill border border-border-muted text-text-secondary font-inter">
                      Portfolio
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-pill bg-accent-blue/10 text-accent-blue font-inter">
                      Active
                    </span>
                  </div>
                </div>

                {/* Right Pane: Dark Textured Panel */}
                <div className="p-8 flex flex-col justify-between h-full text-white relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] radial-dot-pattern">
                  <div className="absolute inset-0 radial-dot-pattern opacity-10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-accent-amber font-inter">
                      Case Study Spec
                    </span>
                    <h3 className="text-xl md:text-2xl font-normal leading-tight tracking-tight mt-2 font-geist text-white">
                      {project.innerHeadline}
                    </h3>
                  </div>

                  {/* Inner Accent Controls */}
                  <div className="flex items-center gap-2 mt-6 relative z-10">
                    {/* Filled Accent Button (#FF2600) */}
                    <button className="h-8 px-4 bg-accent-red text-white rounded-pill text-[11px] font-bold hover:opacity-90 transition-opacity cursor-pointer">
                      Launch App
                    </button>
                    {/* Outline Button */}
                    <button className="h-8 px-4 border border-border-muted bg-transparent text-white rounded-pill text-[11px] font-bold hover:bg-white/10 transition-colors cursor-pointer">
                      Details
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Details Layout (Split Row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Left Column: Title and Description */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] font-normal leading-tight tracking-tight font-geist text-text-primary">
                  {project.title}
                </h2>
                <p className="body-base text-text-secondary font-geist leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Metadata List & Testimonial */}
              <div className="flex flex-col justify-start">
                
                {/* Metadata List separated by hairline dividers */}
                <div className="border-t border-border-muted py-3 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider font-inter">
                    Live Link
                  </span>
                  <a 
                    href="#" 
                    className="flex items-center gap-1 text-[13px] font-bold text-text-primary hover:text-accent-blue transition-colors"
                  >
                    <span>Visit Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="border-t border-border-muted py-3 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider font-inter">
                    Format
                  </span>
                  <span className="text-[13px] font-bold text-text-primary font-inter">
                    {project.format}
                  </span>
                </div>

                <div className="border-t border-border-muted py-3 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider font-inter">
                    Duration
                  </span>
                  <span className="text-[13px] font-bold text-text-primary font-inter">
                    {project.duration}
                  </span>
                </div>

                <div className="border-t border-border-muted py-3 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider font-inter">
                    Reviewer
                  </span>
                  <div className="flex items-center gap-2">
                    <img 
                      src={project.reviewerAvatar} 
                      alt={project.reviewerName} 
                      className="w-5 h-5 rounded-full object-cover" 
                    />
                    <span className="text-[13px] font-bold text-text-primary font-inter">
                      {project.reviewerName}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border-muted" />

                {/* 3. Testimonial Quote Card */}
                <div className="mt-6 bg-surface-light rounded-card-normal p-6 flex flex-col gap-3">
                  <p className="text-[13px] font-bold text-text-secondary leading-relaxed font-inter">
                    "{project.accentQuote}"
                  </p>
                  <div className="flex items-center gap-0.5 text-accent-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

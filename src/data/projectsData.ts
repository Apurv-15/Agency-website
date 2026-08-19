export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  height: number;
  description: string;
  deliverables: string[];
  specs: ProjectSpec[];
  accentQuote: string;
  visible: boolean;
  order: number;
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "bintelleapps",
    title: "Bintelleapps Creator Marketplace & App",
    category: "iOS & Android Mobile Architecture",
    client: "Bintelleapps LLC (San Francisco, USA)",
    year: "2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    height: 380,
    description: "Cross-platform mobile delivery marketplace for creator nail artists. Engineered with zero-memory delta-sync caching, BullMQ background job queues for 500+ high-res assets, Apple Pay / Stripe flows, and App Store compliance.",
    deliverables: ["iOS & Android Production Apps", "Delta-Sync Caching Engine", "Apple Pay / Stripe Gateway", "Creator Dashboard"],
    specs: [
      { label: "Platform", value: "React Native / iOS & Android" },
      { label: "Caching", value: "BullMQ & Disk Delta-Sync" },
      { label: "Checkout", value: "Stripe & Apple Pay Native" },
      { label: "Location", value: "San Francisco Bay Area, USA" }
    ],
    accentQuote: "Zero-latency media rendering and seamless Apple App Store compliance.",
    visible: true,
    order: 1
  },
  {
    id: "jewells-nova",
    title: "Jewells By Nova High-Converting Flagship",
    category: "Next.js 15 & Supabase eCommerce",
    client: "Jewells By Nova",
    year: "2026",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    height: 480,
    description: "Next.js 15 & Supabase (PostgreSQL) luxury jewelry store with live silver rate dynamic pricing, real-time cart sync, automated WhatsApp order triggers, and 40% reduced LCP on AWS ECS Fargate.",
    deliverables: ["Next.js 15 Storefront", "Live Silver Market API", "WhatsApp Order Engine", "Shiprocket Automated Logistics"],
    specs: [
      { label: "Framework", value: "Next.js 15 / React 19" },
      { label: "Database", value: "Supabase PostgreSQL" },
      { label: "Performance", value: "-40% LCP Reduction" },
      { label: "Deployment", value: "Docker / AWS ECS Fargate" }
    ],
    accentQuote: "Live precious metals pricing engine paired with cinematic modern typography.",
    visible: true,
    order: 2
  },
  {
    id: "ekotex-mobile",
    title: "Ekotex Multi-Branch Field & Inventory App",
    category: "Offline-First Enterprise Mobile",
    client: "Ekotex Electrificient",
    year: "2026",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    height: 320,
    description: "Cross-platform enterprise app automating warranty QR tracking, field technician visits, and multi-branch real-time inventory synchronization with Supabase triggers and Row Level Security.",
    deliverables: ["Field Technician Mobile App", "QR Warranty System", "Offline-First Sync Engine", "EAS CI/CD Pipeline"],
    specs: [
      { label: "Security", value: "PostgreSQL Multi-Branch RLS" },
      { label: "Sync Mode", value: "Offline-First Mobile Sync" },
      { label: "Automation", value: "QR Code Warranty Generation" },
      { label: "Speed", value: "Instant Field Dispatch" }
    ],
    accentQuote: "Enterprise field mobility engineered to function in zero-connectivity environments.",
    visible: true,
    order: 3
  },
  {
    id: "ignicia-charter",
    title: "Ignicia Fleet Booking & Logistics Dispatch",
    category: "Full-Stack Logistics Platform",
    client: "Ignicia Technologies",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    height: 440,
    description: "Full-stack charter transport booking platform with custom requirement mapping, real-time driver notification system, and administrative group dispatch dashboards.",
    deliverables: ["Charter Booking Portal", "Driver Notification Engine", "Admin Dispatch Console", "Real-Time Route Tracker"],
    specs: [
      { label: "Architecture", value: "Full-Stack Node.js & React" },
      { label: "Real-Time", value: "Instant Driver Notifications" },
      { label: "Cost Saving", value: "Zero Single-Seat Waste" },
      { label: "Operations", value: "Multi-Route Fleet Dispatch" }
    ],
    accentQuote: "Transforming fragmented transportation bookings into high-efficiency fleet workflows.",
    visible: true,
    order: 4
  },
  {
    id: "hirehunt-ai",
    title: "HireHunt AI Automation & Stealth Engine",
    category: "AI & Asynchronous Distributed Systems",
    client: "HireHunt AI",
    year: "2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    height: 360,
    description: "AI-driven automation platform leveraging Google Gemini 1.5 Flash Vision for real-time CAPTCHA solving, Socket.io log streaming, Redis BullMQ asynchronous workers, and stealth browser clustering.",
    deliverables: ["Gemini Vision Solver", "Socket.io Streaming Logs", "Redis / BullMQ Cluster", "Stealth Automation Core"],
    specs: [
      { label: "AI Model", value: "Gemini 1.5 Flash & Pro" },
      { label: "Queues", value: "Redis / BullMQ Workers" },
      { label: "Real-Time", value: "Socket.io Log Streaming" },
      { label: "Bypass", value: "Ghost Cursor Trajectories" }
    ],
    accentQuote: "Cutting-edge computer vision and stealth automation delivering resilient job processing.",
    visible: true,
    order: 5
  },
  {
    id: "synth-interface",
    title: "Tactile Audio Synthesizer Interface",
    category: "Hardware & Interactive UI Design",
    client: "Teenage Engineering x SoundLab",
    year: "2025",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    height: 280,
    description: "Machined aluminum portable synthesizer interface built with strict minimalist tactile ergonomics, high-precision haptic dials, and sub-millimeter industrial tolerances.",
    deliverables: ["Hardware Industrial Casing", "Laser-Etched Typographic System", "Tactile Control Architecture", "Companion Web Interface"],
    specs: [
      { label: "Material", value: "Anodized 6061 Aluminum" },
      { label: "Tactile Latency", value: "< 2ms Mechanical Switch" },
      { label: "Design Award", value: "Red Dot Best of the Best" },
      { label: "Production Run", value: "10,000 Units Worldwide" }
    ],
    accentQuote: "A masterclass in tactile restraint and uncompromising monochromatic industrial precision.",
    visible: true,
    order: 6
  },
  {
    id: "solitude-wellness",
    title: "Solitude Botanical Body Oil",
    category: "Holistic Packaging & Campaign",
    client: "Solitude Sanctuary",
    year: "2024",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    height: 320,
    description: "Monochrome launch campaign and cold-pressed botanical oil packaging designed for sensory clarity, ritual wellness, and high-converting direct-to-consumer funnels.",
    deliverables: ["Silk-Screened Bottle", "Outer Folding Box", "Launch Editorial Photography", "Digital Campaign"],
    specs: [
      { label: "Glass Base", value: "Ultra-Clear Flint" },
      { label: "Printing", value: "UV Matte Black Silkscreen" },
      { label: "Editorial Reach", value: "2.1M Impressions" },
      { label: "Sell-Through", value: "100% Sold in 7 Days" }
    ],
    accentQuote: "A celebration of modern simplicity, tactile materials, and sensory wellness rituals.",
    visible: true,
    order: 7
  },
  {
    id: "noir-reserve",
    title: "Noir Reserve Ceremonial Matcha",
    category: "Airless Pouch & High-End D2C",
    client: "Uji Heritage Roasters",
    year: "2024",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1200&auto=format&fit=crop",
    height: 440,
    description: "Ultra-matte triple-barrier black foil pouch with airtight zip closure and precision degassing valve to preserve ceremonial grade stone-ground matcha.",
    deliverables: ["Triple-Ply Foil Construction", "Tactile Soft-Touch Coating", "Monochrome Identity Seal", "Wholesale Shipping Carton"],
    specs: [
      { label: "Barrier Rating", value: "Zero Oxygen Permeability" },
      { label: "Shelf Life", value: "18 Months Freshness Lock" },
      { label: "Pre-Orders", value: "15,000 Bags in 10 Days" },
      { label: "Subscription Lift", value: "+210% ARR Growth" }
    ],
    accentQuote: "Absolute light and oxygen barrier engineered in an unapologetically dark silhouette.",
    visible: true,
    order: 8
  }
];

const STORAGE_KEY = "greffon_studio_projects_v1";

export function loadStoredProjects(): ProjectItem[] {
  if (typeof window === "undefined") return INITIAL_PROJECTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROJECTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }
  } catch (err) {
    console.error("Failed to load stored projects:", err);
  }
  return INITIAL_PROJECTS;
}

export function saveStoredProjects(projects: ProjectItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Failed to save projects to localStorage:", err);
  }
}

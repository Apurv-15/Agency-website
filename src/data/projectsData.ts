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
    id: "jewells-nova",
    title: "Jewells By Nova Sterling Silver Flagship",
    category: "Next.js 15 & Supabase eCommerce",
    client: "Jewells By Nova",
    year: "2026",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    height: 480,
    description: "High-converting luxury sterling silver e-commerce platform built with Next.js 15 App Router, React 19, and Supabase (PostgreSQL). Features live bullion rate dynamic pricing, real-time database cart sync, automated Shiprocket logistics, and automated WhatsApp order notifications.",
    deliverables: ["Next.js 15 Storefront", "Live Bullion Pricing API", "WhatsApp Order Triggers", "Shiprocket Automated Logistics"],
    specs: [
      { label: "Framework", value: "Next.js 15 / React 19" },
      { label: "Database", value: "Supabase PostgreSQL RLS" },
      { label: "Performance", value: "-40% LCP (0.6s)" },
      { label: "Logistics", value: "Shiprocket API Webhooks" }
    ],
    accentQuote: "Live precious metals pricing engine paired with sub-second page performance.",
    visible: true,
    order: 1
  },
  {
    id: "ekotex-mobile",
    title: "Ekotex Multi-Branch Field & Inventory App",
    category: "Offline-First Enterprise Mobile",
    client: "Ekotex Electrificient",
    year: "2026",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    height: 380,
    description: "Cross-platform enterprise React Native (Expo) app automating product warranty QR tracking, field technician visits, and multi-branch real-time inventory synchronization with Supabase triggers and offline-first delta caching.",
    deliverables: ["Field Technician Mobile App", "QR Warranty System", "Offline-First Sync Engine", "Automated OTA Hotfixes"],
    specs: [
      { label: "Security", value: "PostgreSQL Multi-Branch RLS" },
      { label: "Sync Mode", value: "Offline-First Mobile Delta Sync" },
      { label: "Automation", value: "QR Code Warranty Verification" },
      { label: "UI List Speed", value: "60fps FlashList Virtualization" }
    ],
    accentQuote: "Enterprise field mobility engineered to function in zero-connectivity environments.",
    visible: true,
    order: 2
  },
  {
    id: "hirehunt-ai",
    title: "HireHunt AI Automation & Stealth Engine",
    category: "AI & Asynchronous Distributed Systems",
    client: "HireHunt AI Enterprise",
    year: "2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    height: 360,
    description: "AI-driven automation platform leveraging Google Gemini 1.5 Flash Vision for real-time CAPTCHA solving, Socket.io log streaming telemetry, Redis BullMQ asynchronous workers, and stealth browser clustering.",
    deliverables: ["Gemini Vision Solver", "Socket.io Streaming Logs", "Redis / BullMQ Cluster", "Stealth Automation Core"],
    specs: [
      { label: "AI Model", value: "Google Gemini 1.5 Flash Vision" },
      { label: "Queues", value: "Redis / BullMQ Async Workers" },
      { label: "Real-Time", value: "Socket.io Log Streaming" },
      { label: "Bypass Rate", value: "99.4% Stealth Trajectories" }
    ],
    accentQuote: "Cutting-edge computer vision and stealth automation delivering resilient job processing.",
    visible: true,
    order: 3
  },
  {
    id: "soul-viva-soap",
    title: "Soul-Viva Soap & Glycerin Bathing Bars",
    category: "Luxury Skincare D2C Catalog",
    client: "Soul-Viva Skincare",
    year: "2025",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    height: 340,
    description: "Immersive D2C digital showcase for a premium range of transparent glycerin bathing bars (Sea Minerals, Menthol, Waterlily & Pear, Black Currant & Lavender). Features 3D mouse parallax depth movement, fluid transitions, and single-page analytics queues.",
    deliverables: ["3D Parallax Storefront", "Ingredient Video Showcase", "Firebase Event Queues", "Responsive Touch UI"],
    specs: [
      { label: "Interactivity", value: "3D Parallax Mouse Response" },
      { label: "Stack", value: "Next.js / GSAP / Framer Motion" },
      { label: "Analytics", value: "Hash-Based SPA Event Queue" },
      { label: "Satisfaction", value: "98% Positive Feedback" }
    ],
    accentQuote: "A celebration of modern simplicity, tactile 3D interactions, and sensory wellness rituals.",
    visible: true,
    order: 4
  },
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
    order: 5
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
    order: 6
  }
];

const STORAGE_KEY = "greffon_studio_projects_v2";

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

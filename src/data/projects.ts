export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  websiteUrl: string;
  technologies: string[];
  role: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "noillin",
    title: "Noillin / SaaS",
    category: "SaaS Platform",
    description: "A centralized ecosystem bridging the gap between high-growth brands and top-tier influencers.",
    longDescription: "Noillin is a sophisticated SaaS solution architected to resolve the friction in influencer marketing. By replacing fragmented communication channels with a unified dashboard, it provides brands with data-driven discovery tools and influencers with a professional service management suite. The platform emphasizes security, transparency, and scalable growth.",
    features: [
      "Dynamic Influencer Discovery Engine",
      "Real-time Collaboration Dashboard",
      "Secure Escrow-based Payment Integration",
      "Comprehensive Review & Rating System",
      "Automated Contract Generation"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop",
    websiteUrl: "https://noillin-web.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    role: "Lead Full-Stack Developer",
    year: "2024"
  },
  {
    id: "woodspire",
    title: "Woodspire / E-Commerce",
    category: "E-Commerce",
    description: "A premium digital storefront for high-end furniture, focusing on immersive visual storytelling.",
    longDescription: "Woodspire redefines the online furniture shopping experience through a 'cinematic commerce' approach. Every interaction is designed to evoke the tactility and craftsmanship of the products. Beyond the aesthetics, the platform features a robust inventory management system and a highly optimized checkout flow designed for high-conversion rates.",
    features: [
      "Cinematic Product Galleries",
      "Intelligent Search & Filtering",
      "Optimized Multi-step Checkout",
      "Inventory Management Dashboard",
      "JWT-based Secure Authentication"
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2670&auto=format&fit=crop",
    websiteUrl: "https://woodspire.vercel.app/",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB Atlas", "Redux"],
    role: "Backend Architect & UI Lead",
    year: "2023"
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker / Productivity",
    category: "Productivity",
    description: "A data-driven productivity tool designed to help users architect their ideal daily routines.",
    longDescription: "This Habit Tracker goes beyond simple checkboxes, offering users deep insights into their behavioral patterns. Built with a focus on low-latency interactions and offline-first capabilities, it provides a seamless experience for tracking personal growth milestones. The architecture focuses on data integrity and high-performance real-time updates.",
    features: [
      "Visual Progress Analytics",
      "Customizable Tracking Intervals",
      "Cross-device Synchronization",
      "Gamified Achievement System",
      "Focus Mode & Reminder Notifications"
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2670&auto=format&fit=crop",
    websiteUrl: "https://habit-tracker-one-nu.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    role: "Full-Stack Developer",
    year: "2024"
  }
];

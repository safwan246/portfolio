"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Woodspire",
    type: "E-Commerce",
    description: "Woodspire is a full-stack furniture e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a responsive interface for browsing products and managing purchases, supported by a RESTful API and a MongoDB Atlas cloud database. JWT-based authentication is implemented to ensure secure user login and protected access.",
    bg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Habit Tracker",
    type: "Productivity",
    description: "Habit Tracker is a web application built using Next.js and TypeScript that helps users manage and track their daily habits. It supports full CRUD operations, allowing users to create, update, and delete habits efficiently. JWT-based authentication is implemented to ensure secure user access and data protection.",
    bg: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Noillin",
    type: "SaaS Platform",
    description: "Noillin is a full-stack web platform that connects businesses with influencers through a structured and secure collaboration system. It replaces unorganized DMs with features like influencer discovery, service listings, collaboration requests, in-app chat, and review systems. The platform includes JWT-based authentication and a secure payment flow, ensuring transparency, trust, and professional communication between both parties.",
    bg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col pt-12 md:pt-24 mt-12 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between lg:items-end mb-16 md:mb-24 gap-6 px-4 md:px-8 border-b border-black/10 dark:border-white/10 pb-12"
      >
        <h2 className="font-pixel text-3xl md:text-5xl lg:text-6xl tracking-tighter text-black dark:text-white uppercase leading-[1.1]">
          PROJECTS
        </h2>
        <p className="text-black/60 dark:text-white text-xs md:text-sm max-w-sm font-medium pb-2">
          A showcase of full-stack platforms, crafted with modern architectures and stunning user interfaces.
        </p>
      </motion.div>

      <div className="flex flex-col w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row gap-10 lg:gap-24 items-center py-12 md:py-24 border-b border-black/10 dark:border-white/10 last:border-b-0 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Cinematic Image Container */}
            <div className="w-full lg:w-1/2 group overflow-hidden bg-black/5 dark:bg-white/5 relative rounded-[2rem] aspect-[4/3] shadow-sm">
              <div
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${project.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>

            {/* Borderless Text Information */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-0">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="font-pixel text-[10px] md:text-xs text-black/40 dark:text-white tracking-[0.2em] uppercase">
                  0{idx + 1}
                </span>
                <div className="h-[1px] w-12 bg-black/20 dark:bg-white/20"></div>
                <span className="font-pixel text-[10px] md:text-xs text-black/40 dark:text-white tracking-[0.2em] uppercase">
                  {project.type}
                </span>
              </div>

              <h3 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-black dark:text-white uppercase leading-[1.1] tracking-tighter mb-6">
                {project.title}
              </h3>

              <p className="text-black/70 dark:text-white text-sm md:text-base leading-relaxed font-medium mb-10 max-w-lg">
                {project.description}
              </p>

              <div>
                <a href="#" className="inline-flex items-center gap-3 group">
                  <span className="font-pixel text-[10px] uppercase tracking-widest text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-1 group-hover:border-black dark:hover:border-white transition-colors">
                    Explore Project
                  </span>
                  <span className="text-black dark:text-white group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 px-4 md:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Clean & Focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-20 md:mb-32 border-b border-border pb-12"
        >
          <span className="font-pixel text-[10px] text-accent uppercase tracking-widest">02 // Projects</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
            A showcase of full-stack applications and digital products built with a focus on clean code, scalable architecture, and user-centric design.
          </p>
        </motion.div>

        {/* Project List - Balanced & Professional */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Image Side - Simple & Clean */}
              <div className="w-full md:w-1/2 group">
                <Link href={`/projects/${project.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </Link>
              </div>

              {/* Info Side - Clear Hierarchy */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-pixel text-accent">0{idx + 1}</span>
                    <span className="text-[10px] font-pixel text-muted-foreground uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-tight text-foreground py-1.5 px-4 bg-muted border border-border rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest group"
                  >
                    <span className="border-b-2 border-accent pb-1 group-hover:text-accent transition-colors">View Case Study</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

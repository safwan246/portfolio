"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Project, projects } from "@/data/projects";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Use useMemo to derived the project from the current params
  const project = useMemo(() => 
    projects.find(p => p.id === params?.id), 
    [params?.id]
  );

  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure params are hydrated
    const timeout = setTimeout(() => setIsReady(true), 100);
    
    if (project) {
      const currentIndex = projects.findIndex(p => p.id === project.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setNextProject(projects[nextIndex]);
    } else if (isReady) {
      router.push("/");
    }
    
    return () => clearTimeout(timeout);
  }, [project, router, isReady]);

  if (!isReady || !project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Refined Navigation Header */}
      <nav className="fixed top-0 w-full z-[60] py-8 px-4 md:px-8 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/#projects" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-500">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
              <span className="text-sm">←</span>
            </div>
            <span className="font-pixel text-[8px] uppercase tracking-[0.3em] hidden md:block">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Main Case Study Header */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent"></span>
                <span className="font-pixel text-[10px] text-accent uppercase tracking-[0.3em]">
                  {project.category} // {project.year}
                </span>
              </div>
              <h1 className="text-5xl md:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] lg:-ml-1">
                {project.title.split(' / ')[0]} <br />
                <span className="text-muted-foreground/20">{project.title.split(' / ')[1]}</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-12 border-t border-border mt-12">
              <div className="flex flex-col gap-2">
                <span className="font-pixel text-[8px] text-muted-foreground uppercase tracking-widest">Role</span>
                <p className="text-sm font-bold uppercase">{project.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pixel text-[8px] text-muted-foreground uppercase tracking-widest">Deliverables</span>
                <p className="text-sm font-bold uppercase">UI/UX, Full-Stack Dev</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-pixel text-[8px] text-muted-foreground uppercase tracking-widest">Client</span>
                <p className="text-sm font-bold uppercase">Internal Project</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Removed negative margin for cleaner rhythm */}
      <section className="px-4 md:px-8 mb-32 md:mb-56">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] mx-auto aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${project.image}')` }}
          />
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>
      </section>

      {/* Case Study Content */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Project Details Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <span className="font-pixel text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-muted border border-border rounded-xl text-[10px] font-bold uppercase tracking-tight">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden p-8 bg-foreground text-background rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="font-pixel text-[8px] uppercase tracking-widest opacity-60">Launch Project</span>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold uppercase tracking-tighter italic">Live Platform</span>
                    <span className="text-3xl group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              </a>
            </div>
          </aside>

          {/* Main Content Body */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-32">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">The Vision</h2>
              <p className="text-xl md:text-3xl text-muted-foreground leading-snug font-medium max-w-3xl">
                {project.longDescription}
              </p>
            </div>

            <div className="flex flex-col gap-16">
              <div className="flex items-center gap-6">
                <h3 className="text-[10px] font-pixel uppercase tracking-[0.4em] text-accent">Strategic Features</h3>
                <div className="h-[1px] flex-1 bg-border/50"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-10 bg-muted/50 border border-border/50 rounded-3xl hover:bg-muted hover:border-accent/30 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center mb-8 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all">
                      <span className="font-pixel text-[10px] text-muted-foreground group-hover:text-accent">0{i+1}</span>
                    </div>
                    <p className="text-xl font-bold uppercase tracking-tight leading-tight">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      {nextProject && (
        <section className="bg-foreground text-background">
          <Link href={`/projects/${nextProject.id}`} className="group block w-full py-48 md:py-64 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-background/30 group-hover:w-20 group-hover:bg-accent transition-all duration-700"></div>
                <span className="font-pixel text-[10px] uppercase tracking-[0.4em] text-background/60 group-hover:text-accent">Next Work</span>
                <div className="w-12 h-[1px] bg-background/30 group-hover:w-20 group-hover:bg-accent transition-all duration-700"></div>
              </div>
              <h2 className="text-6xl md:text-[12rem] font-bold tracking-tighter uppercase group-hover:italic transition-all duration-700">
                {nextProject.title.split(' / ')[0]}
              </h2>
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                <span>View Full Case Study</span>
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <span className="text-xl text-background">→</span>
                </div>
              </div>
            </div>
            
            {/* Immersive Background Transition */}
            <div 
              className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 scale-110 group-hover:scale-100 transition-transform duration-[2000ms] grayscale" 
              style={{ backgroundImage: `url('${nextProject.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
            />
          </Link>
        </section>
      )}

      {/* Global Minimal Footer */}
      <footer className="py-24 px-4 md:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-2">
            <div className="font-pixel text-[8px] text-muted-foreground uppercase tracking-[0.3em]">Built With Precision</div>
            <div className="text-[10px] font-bold uppercase tracking-widest">© 2026 Safwan Studio</div>
          </div>
          <div className="flex gap-12 items-center">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Index</Link>
            <Link href="/#about" className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">Archive</Link>
            <Link href="/#contact" className="px-6 py-3 bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all">Let's Talk</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

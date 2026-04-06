"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-32 border-b border-black/10 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <span className="font-pixel text-[10px] md:text-xs text-black/30 dark:text-white/30 tracking-[0.2em] uppercase">
          01 // ABOUT ME
        </span>

        <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold leading-[1.2] tracking-tighter uppercase mb-2 max-w-4xl">
          I don't just write code. I architect scalable, <span className="text-black/20 dark:text-white/20">user-centric digital experiences</span> that bridge the gap between complex logic and stunning cinematic design.
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 pt-12 lg:pt-16 mt-4 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col w-full md:w-1/2">
            <span className="font-pixel text-[10px] text-black/40 dark:text-white/40 tracking-widest uppercase mb-6">Background</span>
            <p className="text-sm md:text-base text-black/80 dark:text-white leading-relaxed font-medium">
              I am Safwan, a BCA graduate from the University of Calicut and a dedicated Full-Stack Developer. I specialize deeply in the MERN stack and modern web technologies to turn complex technical challenges into simple, highly functional digital products.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <span className="font-pixel text-[10px] text-black/40 dark:text-white/40 tracking-widest uppercase mb-6">The Architecture</span>
            <p className="text-sm md:text-base text-black/80 dark:text-white leading-relaxed font-medium">
              My core approach revolves around clean architecture and highly efficient backend integrations. Every application I craft is built natively from the ground up to be scalable, secure, and obsessively user-focused.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

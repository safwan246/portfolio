"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full flex flex-col py-16 md:py-32 border-b border-black/10 dark:border-white/10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between lg:items-end mb-16 md:mb-24 gap-6 px-4 md:px-8 border-none"
      >
        <h2 className="font-pixel text-3xl md:text-5xl lg:text-6xl tracking-tighter text-black dark:text-white uppercase leading-[1.1]">
          SKILLS &<br />SERVICES
        </h2>
        <p className="text-black/60 dark:text-white text-xs md:text-sm max-w-sm font-medium pb-2">
          I collaborate with forward-thinking frameworks and industry-leading systems that push the web forward.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 px-4 md:px-8">

        {/* Core Stack - Minimalist List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <h3 className="font-pixel text-[10px] md:text-xs text-black/50 dark:text-white tracking-[0.2em] uppercase mb-6">TECHNOLOGY STACK</h3>

          {[
            { Icon: FaReact, name: "React Ecosystem" },
            { Icon: SiNextdotjs, name: "Next.js Framework" },
            { Icon: FaNodeJs, name: "Node.js & Express" },
            { Icon: SiMongodb, name: "MongoDB Architectures" },
            { Icon: SiTypescript, name: "TypeScript" },
            { Icon: SiTailwindcss, name: "Tailwind Styling" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-6 group border-b border-black/10 dark:border-white/10 pb-6 pt-4"
            >
              <item.Icon className="text-2xl text-black/30 dark:text-white group-hover:text-black dark:hover:text-white transition-colors duration-300" />
              <span className="font-sans font-bold text-black/70 dark:text-white tracking-widest uppercase text-sm md:text-base group-hover:text-black dark:hover:text-white transition-colors duration-300">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Milestones & Strategy - Minimalist Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-16 lg:pt-8">
          <div>
            <h3 className="font-pixel text-[10px] md:text-xs text-black/50 dark:text-white tracking-[0.2em] uppercase mb-8">MILESTONES</h3>
            <div className="flex gap-16 md:gap-24">
              <div className="flex flex-col">
                <span className="font-pixel text-4xl md:text-5xl text-black dark:text-white mb-2 leading-none">7<span className="text-black/30 dark:text-white">+</span></span>
                <span className="text-xs text-black/50 dark:text-white font-bold uppercase tracking-widest mt-1">Architectures</span>
              </div>
              <div className="flex flex-col">
                <span className="font-pixel text-4xl md:text-5xl text-black dark:text-white mb-2 leading-none">24<span className="text-black/30 dark:text-white">+</span></span>
                <span className="text-xs text-black/50 dark:text-white font-bold uppercase tracking-widest mt-1">Projects</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-pixel text-[10px] md:text-xs text-black/50 dark:text-white tracking-[0.2em] uppercase mb-6">STRATEGY</h3>
            <p className="text-black/80 dark:text-white text-sm md:text-base leading-relaxed font-medium max-w-md">
              I craft digital experiences that elevate brands. From conceptualization to deployment, I build scalable architectures designed specifically to handle rapid growth and flawless user interactions without compromising code quality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

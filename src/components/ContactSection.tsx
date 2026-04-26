"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-32 border-b border-black/10 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 px-4 md:px-8"
      >
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-pixel text-3xl md:text-5xl lg:text-6xl tracking-tighter text-black dark:text-white uppercase leading-[1.1] mb-8">
            CONTACT
          </h2>
          <p className="text-black/70 dark:text-white text-sm md:text-base leading-relaxed font-medium max-w-md mb-12">
            Ready to transform your bold ideas into digital experiences? Let's talk logic, strategy, and pristine execution. Secure communication channel established.
          </p>

          <div className="flex gap-12 font-pixel text-xs uppercase tracking-widest text-black/50 dark:text-white">
            <a href="#" className="border-b border-transparent hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors pb-1">TWITTER</a>
            <a href="https://www.linkedin.com/in/saffwann/" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors pb-1">LINKEDIN</a>
            <a href="https://github.com/safwan246" target="_blank" rel="noopener noreferrer" className="border-b border-transparent hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors pb-1">GITHUB</a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:mt-4">
          <div className="relative">
            <input type="text" placeholder="NAME / ALIAS" className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-4 pl-0 font-pixel text-[10px] md:text-xs text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-500" />
          </div>

          <div className="relative mt-2">
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-4 pl-0 font-pixel text-[10px] md:text-xs text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-500" />
          </div>

          <div className="relative mt-2">
            <textarea placeholder="PROJECT OUTLINE / MESSAGE" rows={5} className="w-full bg-transparent border-b border-black/20 dark:border-white/20 p-4 pl-0 font-pixel text-[10px] md:text-xs text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-500 resize-none"></textarea>
          </div>

          <button className="self-start mt-6 bg-black text-white font-pixel text-xs px-10 py-5 rounded-full hover:bg-white hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white border border-transparent transition-all tracking-widest">
            DEPLOY MESSAGE
          </button>
        </div>
      </motion.div>
    </section>
  );
}

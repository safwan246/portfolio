"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const firstName = "MUHAMMED".split("");
const lastName = "SAFVAN".split("");

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full relative min-h-[85vh] flex flex-col justify-between border-b border-black/10 dark:border-white/10 pb-8 overflow-hidden"
    >
      {/* Background Profile Layer */}
      <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 bg-[url('/profile.jpg')] bg-cover bg-top md:bg-center mix-blend-multiply opacity-40 z-0 grayscale"
        style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}></div>

      <div className="relative z-10 p-4 md:p-8 flex justify-between items-start pt-24 w-full">
        <div className="flex flex-col max-w-2xl mt-12 md:mt-0">

          {/* Animated Heading */}
          <h1 className="font-pixel text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-black dark:text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-4 md:mb-6 cursor-default">

            {/* First Name Wave */}
            <div className="flex pb-2">
              {firstName.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: index * 0.05 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }
                  }}
                  className="inline-block"
                  style={{ display: char === " " ? "pre" : "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Last Name Wave */}
            <div className="flex pb-2">
              {lastName.map((char, index) => (
                <motion.span
                  key={index + 20}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.4 + index * 0.05 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4 + index * 0.1
                    }
                  }}
                  className="inline-block"
                  style={{ display: char === " " ? "pre" : "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="font-sans text-black/80 dark:text-white/80 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] sm:text-xs uppercase mt-2"
          >
            FULL STACK DEV • MERN STACK
          </motion.p>
        </div>

        <div className="hidden lg:block max-w-[250px] text-black dark:text-white pt-4">
          <p className="text-xs leading-relaxed font-medium">
            I break boundaries to craft robust custom architectures that stand out and deliver results. Blending elite React engineering with cinematic aesthetic frontends.
          </p>
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="relative z-20 flex justify-between items-end w-full px-4 md:px-8 mt-auto">
        <a href="#contact" className="bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors hidden md:inline-block">
          Contact +
        </a>

        <div className="flex items-center gap-6 lg:gap-12 font-pixel text-[10px] text-black/60 dark:text-white/60 uppercase tracking-[0.15em] pb-2">
          <ThemeToggle />
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white">About</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white">Projects</a>
        </div>
      </div>
    </motion.section>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-4 h-4"></div>;

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center pr-4 md:pr-6 border-r border-black/10 dark:border-white/10"
      title="Toggle Dark Mode"
    >
      {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

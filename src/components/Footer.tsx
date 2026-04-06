export default function Footer() {
  return (
    <footer className="w-full bg-[#fafffa] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 mt-10 text-black dark:text-white transition-colors duration-500">
      <div className="font-pixel text-3xl tracking-tighter text-black dark:text-white">
        SAFVAN
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-pixel text-xs tracking-widest text-black/50 dark:text-white/50">
        <a href="#" className="hover:text-black dark:hover:text-white transition-colors">HOME</a>
        <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">ABOUT</a>
        <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">PROJECTS</a>
      </div>

      <div className="text-black/40 dark:text-white/40 text-[10px] font-pixel tracking-widest uppercase">
        © 2026 MUHAMMED SAFVAN
      </div>
    </footer>
  );
}

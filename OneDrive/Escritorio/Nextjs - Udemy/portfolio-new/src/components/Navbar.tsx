"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsAtTop(currentScroll < 10);

      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false); // Bajando
        setOpen(false); // Cerramos menú mobile si baja
      } else {
        setVisible(true); // Subiendo
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 px-6 pt-6 pointer-events-none"
    >
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto border ${
          isAtTop 
            ? "bg-transparent border-transparent" 
            : "bg-black/40 backdrop-blur-md border-white/10 shadow-2xl shadow-black/50"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-cyan-400 transition-colors duration-300">
            CM
          </div>
          <span className="text-white font-bold tracking-tighter text-lg">
            moreno<span className="text-cyan-400">.</span>site
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {item.name}
                  </span>
                  {/* Línea animada refinada */}
                  <motion.span
                    className="absolute left-0 bottom-0 h-[1px] bg-cyan-400"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {!isActive && (
                    <span className="absolute left-0 bottom-0 h-[1px] bg-cyan-400/50 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contacto"
            className="ml-4 px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all duration-300 active:scale-95"
          >
            Presupuesto
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-4 mx-auto max-w-6xl rounded-3xl bg-black/90 backdrop-blur-xl border border-white/10 p-8 pointer-events-auto"
          >
            <div className="flex flex-col gap-6 text-left">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-white/5 my-2" />
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="w-full py-4 rounded-2xl bg-cyan-400 text-black text-center font-bold text-lg"
              >
                Solicitar presupuesto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
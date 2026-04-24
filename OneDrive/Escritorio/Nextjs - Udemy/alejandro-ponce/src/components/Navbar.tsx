"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const links = [
    { href: "/modelo", label: "Modelos" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control de visibilidad
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
      // Control de estilo (glassmorphism al scrollear)
      setIsScrolled(currentScrollY > 20);
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -140 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Custom ease-out expo
      className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Barra Superior - Estilo Pill/Cápsula */}
        <div className="hidden md:flex justify-center mb-3">
          <div className="bg-[#001E50] text-[10px] uppercase tracking-[0.2em] text-blue-100/80 py-1.5 px-6 rounded-full shadow-2xl backdrop-blur-md border border-white/10">
            Asesor Oficial Auto Haus — Volkswagen
          </div>
        </div>

        {/* Navbar Principal */}
        <nav 
          className={`transition-all duration-500 rounded-2xl border flex items-center justify-between px-6 py-4
            ${isScrolled 
              ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
              : "bg-white border-transparent shadow-none"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#001E50] leading-none transition-colors">
              ALEJANDRO <span className="font-light text-blue-600">PONCE</span>
            </span>
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.15em] mt-1 group-hover:text-blue-500 transition-colors">
              Expert Advisor
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group text-sm font-medium text-[#001E50]/80 hover:text-[#001E50] transition-colors"
              >
                {label}
                <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-blue-600 origin-left transition-transform duration-300 
                  ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} 
                />
              </Link>
            ))}
            
            <Link 
              href="/contacto" 
              className="ml-4 bg-[#001E50] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#001E50]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-gray-100 md:hidden"
            >
              <ul className="flex flex-col gap-6">
                {links.map(({ href, label }) => (
                  <motion.li key={href} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-2xl font-bold ${pathname === href ? "text-blue-600" : "text-[#001E50]"}`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
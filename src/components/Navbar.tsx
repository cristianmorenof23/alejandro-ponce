"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaCar,
  FaUser,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const links = [
    { href: "/modelo", label: "Modelos", icon: <FaCar /> },
    { href: "/sobre-mi", label: "Sobre mí", icon: <FaUser /> },
    { href: "/contacto", label: "Contacto", icon: <FaPhone className="rotate-120" />  },
  ];

  // 🔹 Ocultar navbar al hacer scroll down, mostrar al subir
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 🔹 Barra superior con degradado azul */}
      <div className="bg-linear-to-r from-[#001E50] via-[#002B80] to-[#0044CC] text-white text-sm py-2 px-4 flex justify-center items-center shadow-sm">
        <span className="text-center font-medium tracking-wide text-gray-100">
          Volkswagen Auto Haus Córdoba · Asesoramiento Oficial
        </span>
      </div>

      {/* 🔹 Navbar principal */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo / Nombre */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[#001E50] hover:opacity-90 transition"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight">
                Alejandro Ponce
              </span>
              <span className="text-xs text-gray-600 font-medium uppercase">
                Asesor Comercial
              </span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-10 text-[#001E50] font-medium">
            {links.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 transition-all ${
                  pathname === href
                    ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
                    : "hover:text-[#003399]"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </div>

          {/* Botón Menú (mobile) */}
          <button
            className="md:hidden flex items-center gap-2 text-[#001E50] text-xl font-medium"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="uppercase text-sm font-semibold">Menú</span>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* 🔹 Menú móvil animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#001E50] text-white py-10 shadow-xl border-t border-blue-800"
            >
              <ul className="flex flex-col items-center gap-6 text-lg font-medium">
                {links.map(({ href, label, icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                        pathname === href
                          ? "bg-blue-800 text-blue-200 font-semibold"
                          : "hover:bg-blue-900 hover:text-blue-200"
                      }`}
                    >
                      {icon}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

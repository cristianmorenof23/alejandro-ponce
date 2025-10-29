"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar, FaUser, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/modelo", label: "Modelos", icon: <FaCar /> },
    { href: "/sobre-mi", label: "Sobre mí", icon: <FaUser /> },
    { href: "/contacto", label: "Contacto", icon: <FaPhone /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 border-b border-gray-100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#001E50] font-bold text-xl hover:opacity-80 transition"
        >
          <FaCar className="text-blue-600 text-2xl" />
          <span className="font-semibold">Alejandro Ponce</span>
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 text-[#001E50] font-medium">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 transition ${
                pathname === href ? "text-blue-700 font-semibold" : "hover:text-[#003399]"
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#001E50] text-2xl hover:cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#001E50] text-white py-8 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6 text-lg font-medium">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`hover:text-blue-300 transition ${
                      pathname === href ? "text-blue-300 font-semibold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

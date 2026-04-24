"use client";

import { FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lógica de visibilidad al hacer scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false);
          setIsOpen(false); // Cerramos el menú si el usuario scrollea hacia abajo
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const buttons = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={22} />,
      text: "WhatsApp",
      color: "bg-[#25D366]",
      href: "https://wa.me/3515607232",
    },
    {
      id: "instagram",
      icon: <FaInstagram size={22} />,
      text: "Instagram",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      href: "https://www.instagram.com/aleponceautohaus",
    },
    {
      id: "facebook",
      icon: <FaFacebookF size={20} />,
      text: "Facebook",
      color: "bg-[#1877F2]",
      href: "https://www.facebook.com/profile.php?id=61566892732814",
    },
    {
      id: "ubicacion",
      icon: <FaMapMarkerAlt size={20} />,
      text: "Showroom",
      color: "bg-[#001E50]",
      href: "https://maps.google.com",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col items-end gap-4">
      {/* Botones Secundarios (Se despliegan hacia arriba) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="flex flex-col gap-4 mb-2"
          >
            {buttons.map((btn, index) => (
              <motion.a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl overflow-visible"
              >
                {/* Círculo de color con blur en hover */}
                <div className={`absolute inset-0 rounded-full ${btn.color} transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]`} />
                
                <span className="relative z-10">{btn.icon}</span>

                {/* Tooltip Estilizado */}
                <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-[#001E50] text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg">
                  {btn.text}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Principal (Toggle) */}
      <motion.button
        animate={{ 
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
          rotate: isOpen ? 135 : 0
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,30,80,0.3)] transition-colors duration-500 z-50 ${
          isOpen ? 'bg-gray-800' : 'bg-[#001E50]'
        }`}
      >
        <FaPlus size={24} />
      </motion.button>

      {/* Overlay sutil al abrir */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-white/20 backdrop-blur-sm z-[-1] cursor-pointer"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
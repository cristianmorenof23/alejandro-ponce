"use client";
import { FaWhatsapp, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  // Oculta los botones al hacer scroll hacia abajo y los muestra al subir
  useEffect(() => {
    let lastY = 0;
    return scrollY.on("change", (y) => {
      if (y > lastY + 10) setVisible(false); // bajando
      else if (y < lastY - 10) setVisible(true); // subiendo
      lastY = y;
    });
  }, [scrollY]);

  const buttons = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={22} />,
      text: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      href: "https://wa.me/3515607232",
    },
    {
      id: "facebook",
      icon: <FaFacebookF size={20} />,
      text: "Facebook",
      color: "bg-[#1877F2] hover:bg-[#0d5fe0]",
      href: "https://www.facebook.com/profile.php?id=61566892732814",
    },
    {
      id: "ubicacion",
      icon: <FaMapMarkerAlt size={20} />,
      text: "Ubicación",
      color: "bg-[#001E50] hover:bg-[#003399]",
      href: "https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 100,
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
    >
      {buttons.map((btn) => (
        <motion.a
          key={btn.id}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(btn.id)}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl transition-all ${btn.color}`}
        >
          {btn.icon}

          {/* Tooltip elegante */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: hovered === btn.id ? 1 : 0,
              x: hovered === btn.id ? 0 : 20,
            }}
            transition={{ duration: 0.25 }}
            className="absolute right-full mr-3 bg-gray-900/90 text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap backdrop-blur-sm"
          >
            {btn.text}
          </motion.span>

          {/* Efecto glow */}
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-20 transition duration-300" />
        </motion.a>
      ))}
    </motion.div>
  );
}

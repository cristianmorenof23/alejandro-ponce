"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar/ocultar el botón según el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[50] p-4 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-cyan-400 hover:text-black transition-colors duration-300 group"
          aria-label="Volver arriba"
        >
          <ArrowUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Un pequeño anillo de luz decorativo */}
          <div className="absolute inset-0 rounded-full border border-white/20 scale-125 animate-ping opacity-20 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
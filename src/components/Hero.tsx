"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center bg-linear-to-b from-[#001E50] to-[#003399] text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        Encontrá tu próximo Volkswagen
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-200 mb-10"
      >
        Asesoramiento personalizado, confianza garantizada.
      </motion.p>

      <motion.a
        href="#modelos"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="bg-white text-[#001E50] font-semibold px-10 py-4 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        Ver modelos
      </motion.a>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
  const text = useTypewriter([
    "estrategia",
    "creatividad",
    "tecnología",
    "resultados",
  ]);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-white">
              Diseño web que{" "}
            </span>

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              te hace destacar
            </span>
          </motion.h1>

          {/* TEXTO DINÁMICO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl text-gray-300"
          >
            Combinando{" "}
            <span className="text-cyan-400 font-medium">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          {/* DESCRIPCIÓN */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 max-w-lg"
          >
            Desarrollo páginas modernas, rápidas y pensadas para diferenciar tu negocio y generar una presencia profesional online.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center md:justify-start"
          >
            <Link
              href="#servicios"
              className="px-7 py-3 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              Conocer más
            </Link>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[320px] h-[320px] bg-cyan-500/30 blur-[120px] rounded-full"
          />

          {/* IMAGEN */}
          <motion.img
            src="/hero-image.png"
            alt="Preview web"
            className="relative w-full max-w-lg rounded drop-shadow-[0_20px_80px_rgba(0,255,255,0.25)]"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
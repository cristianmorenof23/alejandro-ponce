"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#001E50] text-white text-center px-6">
      
      {/* 🔹 Luces de fondo (Efecto Studio) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0044CC]/20 blur-[120px] rounded-full" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#003399]/40 blur-[150px] rounded-full" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge superior sutil */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 text-blue-400/80"
        >
          Experiencia Volkswagen Auto Haus
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-[0.95]"
        >
          Encontrá tu próximo <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/60">
            Volkswagen
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300/90 max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Asesoramiento personalizado de principio a fin, <br className="hidden md:block" /> 
          respaldado por la confianza de un líder.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/modelo"
            className="group relative bg-white text-[#001E50] font-bold px-12 py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-white/10 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Explorar Modelos</span>
            {/* Efecto de brillo al pasar el mouse */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-white/20 hover:border-white transition-all py-2"
          >
            Hablar con un asesor
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Decoración minimalista lateral (Coordenadas o Ref) */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-[10px] text-white/20 rotate-90 origin-left tracking-widest font-mono uppercase">
          Cordoba, AR // 2026
        </p>
      </div>
    </section>
  );
}
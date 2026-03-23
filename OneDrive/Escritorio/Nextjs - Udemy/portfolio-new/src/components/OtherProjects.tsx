"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  { title: "Alejandro Ponce", category: "Portfolio", image: "/alejandro_1.jpg", link: "https://www.alejandro-ponce.com.ar/" },
  { title: "Luz Serena", category: "E-commerce", image: "/velas_1.jpg", link: "https://www.velasluzserena.com/" },
  { title: "Calefacción Central", category: "Landing", image: "/calefaccion_1.jpg", link: "https://calefaccion.vercel.app/" },
  { title: "Santi Riccio", category: "Trainer", image: "/trainer_1.jpg", link: "https://www.trainersantiriccio.com/home/inicio" },
  { title: "Cris Trainer", category: "Fitness", image: "/cris_trainer.jpg", link: "https://www.cris-trainer.com/home/inicio" },
  { title: "Luz Serena v2", category: "E-commerce", image: "/velas_2.jpg", link: "https://www.velasluzserena.com/" },
];

export default function ProjectsGrid() {
  return (
    <section className="py-20 px-6 bg-[#050510] mt-20">
      
      <div className="max-w-6xl mx-auto mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white tracking-tighter"
        >
          Archivo de <span className="text-gray-500 italic">Trabajos.</span>
        </motion.h2>
      </div>

      {/* GRID COMPACTO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            // Reducimos la altura de 450px a 320px para que sea más denso
            className="group relative h-[320px] rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-2xl"
            data-cursor="VER"
          >
            {/* IMAGEN */}
            <div className="absolute inset-0">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover opacity-70 grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40"
              />
            </div>

            {/* INFO CARD COMPACTA */}
            <div className="absolute inset-x-3 bottom-3 z-20">
              <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="text-cyan-400 font-mono text-[8px] uppercase tracking-[0.2em] mb-0.5 block">
                    {p.category}
                  </span>
                  <h3 className="text-white font-bold text-lg tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* GRADIENTE SUTIL */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
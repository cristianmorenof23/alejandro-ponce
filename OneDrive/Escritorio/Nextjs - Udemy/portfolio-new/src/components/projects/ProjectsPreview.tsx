"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPreview() {
  // Tomamos 3 para un diseño asimétrico o 4 para un grid compensado
  const preview = projects.slice(0, 3);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      {/* HEADER CON ESTILO */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase block">
            Selección 2024-2026
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
            Proyectos <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Destacados.
            </span>
          </h2>
        </div>
        
        <Link 
          href="/proyectos" 
          className="group flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors pb-2"
        >
          Explorar todo el archivo 
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* GRID DINÁMICO CON DATA-CURSOR */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {preview.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            viewport={{ once: true }}
            // El primer proyecto ocupa 8 columnas, los otros 4
            className={`group relative rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] border border-white/5 
              ${i === 0 ? "md:col-span-8 h-[450px] md:h-[600px]" : "md:col-span-4 h-[450px] md:h-[600px]"}`}
            data-cursor="VER" // <-- Aquí se activa el cursor personalizado
          >
            <Link href={`/proyectos/${p.slug}`} className="block h-full w-full">
              {/* IMAGEN CON ZOOM LENTO */}
              <div className="relative h-full w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-40"
                />
                
                {/* GRADIENTE INFERIOR */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                
                {/* CONTENIDO */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      {p.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                      {p.title}
                    </h3>

                    <p className="text-gray-400 text-sm max-w-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
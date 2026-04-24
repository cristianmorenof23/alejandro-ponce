"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ModeloProps {
  modelo: {
    nombre: string;
    descripcion: string;
    slug: string;
    imagenes: string[];
    categoria?: string; // Opcional, para el badge
  };
}

export default function ModeloCard({ modelo }: ModeloProps) {
  return (
    <Link href={`/modelo/${modelo.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
      >
        {/* Contenedor de Imagen con Zoom */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-[#F2F2F2]">
          <Image
            src={modelo.imagenes[0]}
            alt={modelo.nombre}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Badge de Categoría Sutil */}
          {modelo.categoria && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md text-[#001E50] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {modelo.categoria}
              </span>
            </div>
          )}

          {/* Overlay de brillo en hover */}
          <div className="absolute inset-0 bg-linear-to-t from-[#001E50]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Contenido de la Card */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-black text-[#001E50] tracking-tighter uppercase">
              {modelo.nombre}
            </h3>
            <motion.span 
              className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0"
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.span>
          </div>

          <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2 italic">
            {modelo.descripcion}
          </p>

          {/* Link Estilizado (En lugar de un botón tosco) */}
          <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#001E50]/40 group-hover:text-blue-600 transition-colors">
              Explorar Detalles
            </span>
            <div className="h-2px w-0 bg-blue-600 group-hover:w-12 transition-all duration-500" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
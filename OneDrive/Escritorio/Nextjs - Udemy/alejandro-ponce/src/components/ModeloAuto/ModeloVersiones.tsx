/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaListUl } from "react-icons/fa";

export default function ModeloVersiones({ versiones }: any) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#001E50]">
        Versiones
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {versiones.map((v: any, i: number) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
          >
            {/* Imagen */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={v.imagen}
                alt={v.nombre}
                fill
                className="rounded-xl object-cover"
              />
            </div>

            {/* Título */}
            <h3 className="text-2xl font-semibold mb-3 text-[#001E50] flex items-center gap-2">
              <FaListUl className="text-[#003399]" /> {v.nombre}
            </h3>

            {/* Especificaciones */}
            {v.specs ? (
              <ul className="space-y-1 pl-1 text-gray-700">
                {v.specs.map((linea: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#003399] mt-[3px]">•</span>
                    <span>{linea}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Detalles no disponibles.</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

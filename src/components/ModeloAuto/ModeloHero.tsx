/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCarSide, FaBolt, FaShieldAlt, FaLightbulb } from "react-icons/fa";

const iconMap: Record<string, any> = {
  FaCarSide,
  FaBolt,
  FaShieldAlt,
  FaLightbulb,
};

export default function ModeloHero({ modelo }: { modelo: any }) {
  const { nombre, descripcion, imagenes, features = [] } = modelo; 

  return (
    <section className="relative bg-[#001E50] text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Imagen principal */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={imagenes?.[0] || "/placeholder.webp"} 
            alt={nombre}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* Texto + iconos */}
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            {nombre}
          </motion.h1>

          <p className="text-lg text-gray-200 mb-6">{descripcion}</p>

          {/* Solo mostrar features si existen */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f: any, i: number) => {
                const Icon = iconMap[f.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    {Icon && <Icon className="text-3xl text-yellow-400 mb-2" />}
                    <span className="text-sm">{f.title}</span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

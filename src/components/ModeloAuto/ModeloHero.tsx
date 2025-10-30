/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCarSide, FaBolt, FaShieldAlt, FaLightbulb, FaTruckPickup, FaPlay, FaToolbox } from "react-icons/fa";

const iconMap: Record<string, any> = {
  FaCarSide,
  FaBolt,
  FaShieldAlt,
  FaLightbulb,
  FaTruckPickup,
  FaPlay,
  FaToolbox
};

export default function ModeloHero({ modelo }: { modelo: any }) {
  const { nombre, descripcion, imagenes, features = [] } = modelo;

  return (
    <section className="relative bg-[#001E50] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* 🔹 Texto + iconos */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            {nombre}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed"
          >
            {descripcion}
          </motion.p>

          {/* 🔹 Features */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
              {features.map((f: any, i: number) => {
                const Icon = iconMap[f.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {Icon && <Icon className="text-3xl sm:text-4xl text-yellow-400 mb-2" />}
                    <span className="text-xs sm:text-sm font-medium">{f.title}</span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* 🔹 Imagen principal con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md md:max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imagenes?.[0] || "/placeholder.webp"}
              alt={nombre}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

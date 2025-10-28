"use client";
import { motion } from "framer-motion";
import { FaHandshake, FaClock, FaAward, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function SobreMi() {
  return (
    <>
      {/* 🔹 Banner superior animado */}
      <section className="relative w-full h-[60vh] bg-gradient-to-r from-[#001E50] via-[#002B80] to-[#003399] flex items-center justify-center text-white overflow-hidden">
        {/* Fondo animado sutil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/autos_banner.webp')] bg-cover bg-center brightness-75"
        />

        {/* Contenido del banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Conocé a tu Asesor</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Más de una década ayudando a cientos de familias a encontrar su vehículo Volkswagen ideal.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Sección principal */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#001E50] mb-4">
            Alejandro Ponce
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Soy <strong>Asesor Comercial Volkswagen</strong> con más de{" "}
            <strong>10 años de experiencia</strong> ayudando a las personas a elegir el
            vehículo ideal. Mi prioridad es ofrecer un servicio{" "}
            <strong>personalizado, transparente y profesional</strong>, asegurando que cada
            cliente viva una experiencia de compra única.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Represento con orgullo los valores de Volkswagen: innovación, seguridad y
            confianza. Te acompaño desde el primer contacto hasta la entrega de tu nuevo
            vehículo — y mucho después.
          </p>

          {/* Iconos de confianza */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <FaAward className="text-blue-600 text-3xl" />
              <span className="text-gray-800 font-medium">+10 años de experiencia</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <FaHandshake className="text-blue-600 text-3xl" />
              <span className="text-gray-800 font-medium">Atención personalizada</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <FaUsers className="text-blue-600 text-3xl" />
              <span className="text-gray-800 font-medium">+800 clientes felices</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <FaClock className="text-blue-600 text-3xl" />
              <span className="text-gray-800 font-medium">Disponibilidad inmediata</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Imagen del asesor */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#001E50]/10">
            <Image
              src="/vendedor.jpg" // ⚠️ colocá tu imagen acá
              alt="Alejandro Ponce - Asesor Comercial Volkswagen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

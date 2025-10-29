"use client";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaClock,
  FaAward,
  FaUsers,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function SobreMi() {
  return (
    <>
      {/* 🔹 Banner superior */}
      <section className="relative w-full h-[60vh] bg-linear-to-r from-[#001E50] via-[#002B80] to-[#003399] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/autos_banner.webp')] bg-cover bg-center brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Conoce a tu Asesor</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Más de una década ayudando a cientos de personas a encontrar su VW ideal          </p>
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
            <strong>personalizado, transparente y profesional</strong>, asegurando una experiencia única.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Represento con orgullo los valores de Volkswagen: innovación, seguridad y
            confianza. Te acompaño desde el primer contacto hasta la entrega de tu nuevo
            vehículo — y mucho después.
          </p>

          {/* Iconos de confianza */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              { icon: <FaAward />, text: "+10 años de experiencia" },
              { icon: <FaHandshake />, text: "Atención personalizada" },
              { icon: <FaUsers />, text: "+800 clientes felices" },
              { icon: <FaClock />, text: "Disponibilidad inmediata" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <span className="text-gray-800 font-medium">{item.text}</span>
              </motion.div>
            ))}
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
              src="/alejandro_perfil.jpg"
              alt="Alejandro Ponce - Asesor Comercial Volkswagen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* 🔹 Redes sociales como CARDS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#001E50] mb-10">Conectá conmigo</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ y: -6, scale: 1.03 }}
              href="https://wa.me/3515607232"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-2xl py-8 flex flex-col items-center justify-center hover:shadow-xl transition border-t-4 border-green-500"
            >
              <FaWhatsapp className="text-green-500 text-5xl mb-3" />
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
              <p className="text-sm text-gray-500 mt-1">Chateá directo</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ y: -6, scale: 1.03 }}
              href="https://instagram.com/aleponceautohaus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-2xl py-8 flex flex-col items-center justify-center hover:shadow-xl transition border-t-4 border-pink-500"
            >
              <FaInstagram className="text-pink-500 text-5xl mb-3" />
              <h3 className="font-semibold text-gray-800">Instagram</h3>
              <p className="text-sm text-gray-500 mt-1">Seguime en redes</p>
            </motion.a>

            {/* Facebook */}
            <motion.a
              whileHover={{ y: -6, scale: 1.03 }}
              href="https://www.facebook.com/profile.php?id=61566892732814"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-2xl py-8 flex flex-col items-center justify-center hover:shadow-xl transition border-t-4 border-[#1877F2]"
            >
              <FaFacebookF className="text-[#1877F2] text-5xl mb-3" />
              <h3 className="font-semibold text-gray-800">Facebook</h3>
              <p className="text-sm text-gray-500 mt-1">Enterate de novedades</p>
            </motion.a>

            {/* Ubicación */}
            <motion.a
              whileHover={{ y: -6, scale: 1.03 }}
              href="https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-2xl py-8 flex flex-col items-center justify-center hover:shadow-xl transition border-t-4 border-blue-600"
            >
              <FaMapMarkerAlt className="text-blue-600 text-5xl mb-3" />
              <h3 className="font-semibold text-gray-800">Dónde encontrarme</h3>
              <p className="text-sm text-gray-500 mt-1">Ver ubicación</p>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}

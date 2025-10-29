"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      {/* 🔹 Sección hero azul */}
      <section className="relative w-full py-24 bg-linear-to-r from-[#001E50] via-[#00308F] to-[#0048CC] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contacto
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            Comunicate por asesoramiento personalizado
          </p>
        </motion.div>
      </section>

      {/* 🔹 Contenido principal */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                <p>
                  <strong>Dirección:</strong> Av. Castro Barros 1639, Córdoba
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <p>
                  <strong>Teléfono:</strong>{" "}
                  <a href="tel:08003450439" className="hover:underline">
                    351 560 7232                  </a>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-blue-600 text-xl" />
                <p>
                  <strong>Horarios: </strong>
                  Lunes a Viernes de 9:00 a 18:00 hs
                  <br />
                  Sábados de 9:00 a 13:00 hs
                </p>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 pt-8">
              <Link
                href="https://wa.me/5493515607232"
                target="_blank"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-xl" /> Escribime por WhatsApp
              </Link>

              <Link
                href="https://www.google.com/maps/place/Volkswagen+Auto+Haus+-+Castro+Barros,+Av.+Castro+Barros+1639,+Córdoba/"
                target="_blank"
                className="flex items-center gap-3 bg-[#001E50] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#002B80] transition"
              >
                <FaMapMarkerAlt className="text-xl" /> Ver ubicación
              </Link>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.8359555541206!2d-64.20443809999999!3d-31.391086500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432993052f0ac7b%3A0x853f65713bb783be!2sVolkswagen%20Auto%20Haus%20-%20Castro%20Barros!5e0!3m2!1ses!2sar!4v1761778341279!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}

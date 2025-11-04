"use client";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      {/* 🔹 Hero */}
      <section className="relative w-full py-28 bg-linear-to-r from-[#001E50] via-[#00308F] to-[#0048CC] text-white text-center shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contacto
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Atención personalizada · Asesor Volkswagen
          </p>
        </motion.div>
      </section>

      {/* 🔹 Info + Mapa */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full p-8 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl"
          >
            <div className="space-y-6 text-gray-700 text-[15px]">

              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <p>
                  <span className="font-semibold">Dirección:</span><br />
                  Av. Castro Barros 1639, Córdoba
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <p>
                  <span className="font-semibold">Teléfono:</span>{" "}
                  <a href="tel:3515607232" className="underline hover:text-blue-600">
                    351 560 7232
                  </a>
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FaClock className="text-blue-600 text-xl" />
                <p>
                  <span className="font-semibold">Horarios:</span><br />
                  Lun a Vie · 9:00 a 18:00<br />
                  Sáb · 9:00 a 13:00
                </p>
              </div>
            </div>

            {/* Redes */}
            <div className="flex items-center gap-4 mt-8">
              <p className="font-semibold text-gray-700">Redes:</p>
              <Link
                href="https://www.instagram.com/aleponceautohaus"
                target="_blank"
                className="p-3 bg-linear-to-r from-pink-500 to-yellow-500 rounded-full text-white text-lg hover:opacity-90 transition shadow-md"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61566892732814"
                target="_blank"
                className="p-3 bg-blue-600 rounded-full text-white text-lg hover:bg-blue-700 transition shadow-md"
              >
                <FaFacebookF />
              </Link>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3 pt-8">
              <Link
                href="https://wa.me/5493515607232"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 transition text-sm"
              >
                <FaWhatsapp className="text-lg" /> Escribime por WhatsApp
              </Link>

              <Link
                href="https://www.google.com/maps/place/Volkswagen+Auto+Haus+-+Castro+Barros/"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-[#001E50] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#012d80] transition text-sm"
              >
                <FaMapMarkerAlt className="text-lg" /> Ver ubicación
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              Respuesta rápida garantizada ✅
            </p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
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

"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function Contacto() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001E50] mb-4">
          Contacto
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Estamos para ayudarte a encontrar tu próximo Volkswagen.  
          Visitá nuestra sucursal, llamanos o escribinos por WhatsApp.
        </p>
      </motion.div>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Información */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#001E50] mb-4">
            Volkswagen Auto Haus - Castro Barros
          </h2>

          <div className="flex items-start gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
            <p>
              <strong>Dirección:</strong> Av. Castro Barros 1639, Córdoba  
              <br />{" "}
              <span className="text-sm text-gray-500">
                Compras en tienda · Retiro en tienda
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:08003450439" className="hover:underline">
                0800-345-0439
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaClock className="text-blue-600 text-xl" />
            <p>
              <strong>Horarios:</strong> Lunes a Viernes de 9:00 a 18:00 hs  
              <br />
              Sábados de 9:00 a 13:00 hs
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="https://wa.me/5493510000000"
              target="_blank"
              className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp
            </Link>

            <Link
              href="https://www.google.com/maps/place/Volkswagen+Auto+Haus+-+Castro+Barros,+Av.+Castro+Barros+1639,+Córdoba/"
              target="_blank"
              className="flex items-center gap-3 bg-[#001E50] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#002B80] transition"
            >
              <FaMapMarkerAlt className="text-xl" /> Cómo llegar
            </Link>
          </div>
        </motion.div>

        {/* Mapa embebido */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.2488369397943!2d-64.16959452357576!3d-31.40428107426392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2820e7ffb05%3A0x3b5f4bcb7da26bcd!2sVolkswagen%20Auto%20Haus%20-%20Castro%20Barros!5e0!3m2!1ses!2sar!4v1730060000000"
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
  );
}

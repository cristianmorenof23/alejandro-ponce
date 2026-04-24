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
    <main className="bg-white">
      {/* 🔹 Hero Header - Estilo Concesionario Oficial */}
      <section className="relative w-full py-32 bg-[#001E50] overflow-hidden">
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">
            Canales Oficiales
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Atención <span className="font-light italic">Exclusiva</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* 🔹 Sección de Contenido */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Tarjeta de Información - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 w-full p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
          >
            {/* Adorno decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0" />

            <div className="relative z-10 space-y-10">
              <header>
                <h2 className="text-2xl font-bold text-[#001E50] tracking-tight">Información de Contacto</h2>
                <p className="text-gray-400 text-sm mt-1 font-light italic">Alejandro Ponce · Asesor Senior</p>
              </header>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Ubicación</p>
                    <p className="text-[#001E50] font-medium leading-relaxed">
                      Av. Castro Barros 1639,<br />Córdoba, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Teléfono Directo</p>
                    <a href="tel:3515607232" className="text-[#001E50] font-bold text-lg hover:text-blue-600 transition-colors">
                      +54 351 560 7232
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-gray-50 rounded-2xl text-gray-600 group-hover:bg-[#001E50] group-hover:text-white transition-colors duration-300">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Horario Comercial</p>
                    <p className="text-[#001E50] font-medium">Lunes a Viernes: 09:00 — 18:00</p>
                    <p className="text-gray-500 text-sm font-light italic">Sábados: 09:00 — 13:00</p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col gap-4 pt-6">
                <Link
                  href="https://wa.me/5493515607232"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" /> Consultar por WhatsApp
                </Link>

                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/aleponceautohaus"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-100 p-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <FaInstagram className="text-pink-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61566892732814"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-100 p-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <FaFacebookF className="text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mapa - Estilo Full Bleed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.672005047867!2d-64.19565572346761!3d-31.395642696009827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985392769485%3A0x6b15099f6674c10a!2sAuto%20Haus%20Volkswagen!5e0!3m2!1ses!2sar!4v1711200000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay informativo del Mapa */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#001E50]/90 backdrop-blur-md p-6 rounded-3xl text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-1">Punto de Entrega</p>
                <p className="font-bold text-lg">Auto Haus Castro Barros</p>
              </div>
              <Link 
                href="https://maps.google.com" 
                target="_blank"
                className="bg-white text-[#001E50] p-3 rounded-full hover:scale-110 transition-transform"
              >
                <FaMapMarkerAlt />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
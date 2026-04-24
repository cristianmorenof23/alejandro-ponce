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
    <main className="bg-white">
      {/* 🔹 Banner Superior Estilo "Portrait" */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#001E50] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/autos_banner.webp')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#001E50]/80 to-[#001E50]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Trayectoria y Confianza
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4">
            Compromiso <span className="font-light italic">Volkswagen</span>
          </h1>
        </motion.div>
      </section>

      {/* 🔹 Sección Perfil - Diseño Asimétrico */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Imagen con Composición Premium */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              {/* Elemento decorativo detrás */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-600 rounded-2xl z-0" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/alejandro_perfil.jpg"
                  alt="Alejandro Ponce"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                <p className="text-[#001E50] font-black text-3xl leading-none">+10</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">Años de éxito</p>
              </div>
            </div>
          </motion.div>

          {/* Texto de Perfil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-5xl font-black text-[#001E50] tracking-tighter mb-2">
                Alejandro Ponce
              </h2>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Asesor Comercial Senior · Auto Haus
              </p>
            </div>

            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Elegir un vehículo no es solo una transacción, es una decisión que marca tu día a día. 
                Con más de <strong>una década en el ecosistema Volkswagen</strong>, mi enfoque se aleja de la venta tradicional para centrarse en la consultoría experta.
              </p>
              <p>
                Mi compromiso es la transparencia total. En <strong>Auto Haus</strong>, no solo entregamos llaves; construimos relaciones basadas en la seguridad y la innovación alemana que define a nuestra marca.
              </p>
            </div>

            {/* Grid de Stats Minimalista */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              {[
                { icon: <FaHandshake />, label: "Asesoría", text: "1 a 1" },
                { icon: <FaUsers />, label: "Clientes", text: "+800 Felices" },
                { icon: <FaAward />, label: "Garantía", text: "Oficial VW" },
                { icon: <FaClock />, label: "Entrega", text: "Inmediata" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-blue-600 text-2xl">{item.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 leading-none mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[#001E50]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Sección de Conectividad Estilo Moderno */}
      <section className="bg-[#F8F9FA] py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#001E50] mb-16 tracking-tight">Canales de Atención Directa</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaWhatsapp />, name: "WhatsApp", desc: "Consultas rápidas", color: "text-green-500", link: "https://wa.me/3515607232" },
              { icon: <FaInstagram />, name: "Instagram", desc: "@aleponceautohaus", color: "text-[#E1306C]", link: "https://instagram.com/aleponceautohaus" },
              { icon: <FaFacebookF />, name: "Facebook", desc: "Novedades VW", color: "text-[#1877F2]", link: "#" },
              { icon: <FaMapMarkerAlt />, name: "Showroom", desc: "Visitanos hoy", color: "text-blue-600", link: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className={`${social.color} text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {social.icon}
                </div>
                <h3 className="font-bold text-[#001E50] mb-1">{social.name}</h3>
                <p className="text-xs text-gray-400 font-medium">{social.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
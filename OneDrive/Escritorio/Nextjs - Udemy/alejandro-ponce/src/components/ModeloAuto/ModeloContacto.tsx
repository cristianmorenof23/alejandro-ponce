"use client";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModeloContacto({ contacto }: any) {
  return (
    <section className="relative bg-[#001E50] py-24 overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl -ml-32 -mb-32" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          ¿ESTÁS LISTO PARA TU PRÓXIMO <span className="text-blue-400 font-light italic">VW</span>?
        </h2>
        <p className="text-blue-100/70 text-lg font-light mb-12 max-w-2xl mx-auto">
          Asesoramiento personalizado de lunes a sábados. Elegí tu canal preferido de atención.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href={contacto.whatsapp} target="_blank" className="flex items-center justify-center gap-3 bg-[#25D366] p-4 rounded-2xl font-bold text-white hover:scale-105 transition-transform shadow-xl">
            <FaWhatsapp size={20} /> WhatsApp
          </a>

          <a href={contacto.instagram} target="_blank" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl font-bold text-white hover:bg-white/20 transition-all">
            <FaInstagram size={20} className="text-pink-400" /> Instagram
          </a>

          <a href={contacto.facebook} target="_blank" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl font-bold text-white hover:bg-white/20 transition-all">
            <FaFacebookF size={20} className="text-blue-400" /> Facebook
          </a>

          <a href={contacto.ubicacion} target="_blank" className="flex items-center justify-center gap-3 bg-blue-600 p-4 rounded-2xl font-bold text-white hover:bg-blue-500 transition-all shadow-xl">
            <FaMapMarkerAlt size={20} /> Visitar Showroom
          </a>
        </div>
      </div>
    </section>
  );
}
"use client";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/5493510000000" // reemplazar por el número real
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={22} />
        <span className="font-semibold">WhatsApp</span>
      </a>

      {/* Botón Ubicación */}
      <a
        href="https://www.google.com/maps/place/AutoHaus+VW" // reemplazar con la ubicación real
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#001E50] text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-[#003399] transition-all"
      >
        <FaMapMarkerAlt size={20} />
        <span className="font-semibold">Dónde encontrarme</span>
      </a>
    </div>
  );
}

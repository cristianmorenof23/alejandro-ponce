"use client";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModeloContacto({ contacto }: any) {
  return (
    <section className="bg-[#001E50] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">¿Querés más información?</h2>
        <p>Contactate con nosotros o visitá el concesionario</p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* WhatsApp */}
          <a
            href={contacto.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          {/* Instagram */}
          <a
            href={contacto.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-pink-700 transition"
          >
            <FaInstagram /> Instagram
          </a>

          {/* Facebook */}
          {contacto.facebook && (
            <a
              href={contacto.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#145DBF] transition"
            >
              <FaFacebookF /> Facebook
            </a>
          )}

          {/* Ubicación */}
          <a
            href={contacto.ubicacion}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FaMapMarkerAlt /> Dónde encontrarnos
          </a>
        </div>
      </div>
    </section>
  );
}

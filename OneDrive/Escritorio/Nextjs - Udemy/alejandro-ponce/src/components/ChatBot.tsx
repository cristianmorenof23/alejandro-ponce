"use client";

import { useState, JSX, useEffect, useRef } from "react";
import { FaChevronLeft, FaComments, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { modelos as autosLista } from "../data/modelos";

// ✅ Componente interno para las tarjetas de autos
const CarLink = ({ slug }: { slug: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auto = autosLista.find((a: any) => a.slug === slug);
  if (!auto) return null;

  return (
    <Link href={`/modelo/${auto.slug}`} className="group flex items-center gap-3 p-2 bg-gray-50 hover:bg-white border border-gray-100 rounded-xl transition-all hover:shadow-md mb-2">
      <div className="relative w-16 h-10 overflow-hidden rounded-lg border border-gray-200">
        <Image src={auto.imagenes?.[0] ?? "/car-placeholder.png"} alt={auto.nombre} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-[12px] font-bold text-[#001E50]">{auto.nombre}</span>
        <span className="text-[10px] text-blue-600 font-medium">Explorar →</span>
      </div>
    </Link>
  );
};

// ✅ Respuestas
const respuestas: Record<string, JSX.Element> = {
  suv: (
    <div className="space-y-1">
      <p className="mb-3 text-gray-600">Excelente elección. Estas son nuestras **SUV premium**: </p>
      {["tera", "t-cross", "nivus", "taos", "nuevo-tiguan"].map(s => <CarLink key={s} slug={s} />)}
    </div>
  ),
  sedan: (
    <div className="space-y-1">
      <p className="mb-3 text-gray-600">Nuestros sedanes combinan elegancia y confort:</p>
      {["polo", "virtus", "golf-gti"].map(s => <CarLink key={s} slug={s} />)}
    </div>
  ),
  pickup: (
    <div className="space-y-1">
      <p className="mb-3 text-gray-600">Potencia y robustez Volkswagen:</p>
      {["amarok", "saveiro"].map(s => <CarLink key={s} slug={s} />)}
    </div>
  ),
  contacto: (
    <div className="text-center py-2">
      <p className="mb-4">Escribime ahora y coordinamos una atención personalizada:</p>
      <a href="https://wa.me/3515607232" target="_blank" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform">
        WhatsApp Directo
      </a>
    </div>
  ),
  ubicacion: (
    <div className="space-y-3">
      <p className="font-medium text-[#001E50]">📍 AutoHaus Castro Barros 1639</p>
      <div className="text-xs bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1 text-gray-500">
        <p><strong>Lunes a Viernes:</strong> 9:00 a 18:00</p>
        <p><strong>Sábados:</strong> 9:00 a 13:00</p>
      </div>
      <Link href="https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros" target="_blank" className="block text-center text-blue-600 text-xs font-bold uppercase tracking-widest pt-2">
        Abrir en Google Maps
      </Link>
    </div>
  ),
};

const preguntas = [
  {
    pregunta: "¿Qué modelo te interesa?",
    opciones: [
      { label: "SUV", id: "suv" },
      { label: "Sedanes", id: "sedan" },
      { label: "Pickups", id: "pickup" },
    ],
  },
  {
    pregunta: "Consultas",
    opciones: [
      { label: "Asesoramiento VIP", id: "contacto" },
      { label: "Ubicación y Horarios", id: "ubicacion" },
    ],
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [historial, setHistorial] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const ultima = historial[historial.length - 1];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ultima) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }, 800);
      return () => clearTimeout(t);
    }
  }, [ultima]);

  return (
    <div className="fixed bottom-6 right-24 z-[99">
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-4xl w-[350px] overflow-hidden mb-4 border border-gray-100"
          >
            {/* Header Premium */}
            <div className="bg-[#001E50] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                {historial.length > 0 && (
                  <button onClick={() => setHistorial(historial.slice(0, -1))} className="hover:text-blue-300 transition-colors">
                    <FaChevronLeft size={16} />
                  </button>
                )}
                <div className="relative">
                  <Image src="/alejandro_perfil.jpg" alt="Alejandro" width={45} height={45} className="rounded-full border-2 border-blue-400/30" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#001E50] rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-none">Alejandro Ponce</h4>
                  <p className="text-[10px] text-blue-300 font-medium mt-1 uppercase tracking-widest">En línea ahora</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
                <FaTimes />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="p-6 h-[400px] overflow-y-auto bg-gray-50/50">
              {/* Mensaje de bienvenida siempre visible si no hay historial */}
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Hola 👋 Soy Alejandro. ¿En qué puedo asesorarte hoy para tu próximo **Volkswagen**?
                </p>
              </div>

              {ultima ? (
                <div className="space-y-4">
                  {typing ? (
                    <div className="flex gap-1 p-2">
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm">
                      {respuestas[ultima]}
                    </motion.div>
                  )}
                  
                  {!typing && (
                    <button onClick={() => setHistorial([])} className="w-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#001E50] transition-colors py-4">
                      Volver al menú inicial
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {preguntas.map((grupo, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">{grupo.pregunta}</p>
                      <div className="flex flex-wrap gap-2">
                        {grupo.opciones.map((op) => (
                          <button
                            key={op.id}
                            onClick={() => setHistorial([...historial, op.id])}
                            className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold text-[#001E50] hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
                          >
                            {op.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante con Notificación Sutil */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative bg-[#001E50] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(0,30,80,0.3)] group"
      >
        <AnimatePresence mode="wait">
          {open ? <FaTimes key="close" size={20} /> : <FaComments key="open" size={20} />}
        </AnimatePresence>
        
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
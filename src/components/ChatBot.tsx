"use client";
import { useState, JSX } from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const preguntas = [
  {
    pregunta: "Modelos disponibles 🚗",
    opciones: [
      { label: "SUV (T-Cross, Taos, Nivus)", id: "suv" },
      { label: "Sedanes (Virtus, Vento)", id: "sedan" },
      { label: "Pickups (Amarok, Saveiro)", id: "pickup" },
      { label: "Ver todos los modelos", id: "modelos" },
    ],
  },
  {
    pregunta: "Planes y financiación 💸",
    opciones: [
      { label: "Plan de ahorro", id: "plan" },
      { label: "Financiación tradicional", id: "credito" },
      { label: "Usado como parte de pago", id: "usado" },
    ],
  },
  {
    pregunta: "Consulta general ✍️",
    opciones: [
      { label: "Quiero asesoramiento", id: "contacto" },
      { label: "Ubicación / Horarios", id: "ubicacion" },
    ],
  },
];

const respuestas: Record<string, JSX.Element> = {
  suv: <>• T-Cross<br />• Nivus<br />• Taos<br /><br />👉 <Link href="/modelo" className="underline text-blue-600">Ver catálogo</Link></>,
  sedan: <>• Virtus<br />• Vento GLI</>,
  pickup: <>• Amarok<br />• Saveiro</>,
  modelos: <>👉 <Link href="/modelo" className="underline text-blue-600">Ver todos los modelos</Link></>,
  plan: <>Plan de ahorro VW ✅<br />Simulación personalizada 🚀</>,
  credito: <>Financiación bancaria / VW Financial ✅</>,
  usado: <>Tomamos tu usado 💥<br />Cotización personalizada</>,
  contacto: <>Escribime 👇<br /><a href="https://wa.me/3515607232" target="_blank" className="text-green-600 underline">Ir a WhatsApp</a></>,
  ubicacion: <>📍 AutoHaus Córdoba<br />Castro Barros<br /><a href="https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros" target="_blank" className="underline text-blue-600">Ver mapa</a></>,
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [historial, setHistorial] = useState<string[]>([]);

  const ultima = historial[historial.length - 1];

  return (
    <div className="fixed bottom-6 right-24 z-9999">
      {open && (
        <div className="bg-white shadow-xl rounded-2xl w-80 p-4 mb-3 border border-gray-200 animate-fadeIn">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            
            {/* Back */}
            {historial.length > 0 ? (
              <button
                onClick={() => setHistorial(historial.slice(0, -1))}
                className="text-gray-700 hover:text-blue-600"
              >
                <FaChevronLeft size={18} />
              </button>
            ) : <span />}

            {/* Foto + Nombre */}
            <div className="flex flex-col items-center">
              <Image
                src="/alejandro_perfil.jpg" 
                alt="Alejandro Ponce"
                width={38}
                height={38}
                className="rounded-full border border-gray-300"
              />
              <p className="text-[11px] font-medium text-gray-600 mt-1">
                Alejandro · VW
              </p>
            </div>

            {/* Cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-red-600 text-xl font-bold leading-none"
            >
              ✕
            </button>
          </div>

          {/* CONTENIDO */}
          <div className="text-sm text-gray-700 max-h-72 overflow-y-auto pr-1">
            {ultima ? (
              <div className="space-y-3">
                <div>{respuestas[ultima]}</div>
                <button 
                  onClick={() => setHistorial([])}
                  className="text-xs text-gray-500 underline mt-2"
                >
                  Reiniciar
                </button>
              </div>
            ) : (
              preguntas.map((grupo, i) => (
                <div key={i} className="mb-3">
                  <p className="font-semibold mb-1">{grupo.pregunta}</p>
                  {grupo.opciones.map((op) => (
                    <button
                      key={op.id}
                      onClick={() => setHistorial([...historial, op.id])}
                      className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded mb-1 text-sm"
                    >
                      {op.label}
                    </button>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* BOTÓN */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-700 text-white p-3 rounded-full shadow-xl hover:bg-blue-800 transition"
      >
        <FaComments size={22} />
      </button>

      {/* Animación */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn .2s ease-out; }
      `}</style>
    </div>
  );
}

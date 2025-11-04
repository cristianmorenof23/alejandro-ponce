/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, JSX, useEffect } from "react";
import { FaChevronLeft, FaComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// ✅ Usamos tus modelos reales
import { modelos as autosLista } from "../data/modelos";

// ✅ Slugs correctos de tus categorías
const categorias = {
  suv: ["tera", "t-cross", "nivus", "taos", "nuevo-tiguan"],
  sedan: ["polo", "virtus", "golf-gti"],
  pickup: ["amarok", "saveiro"],
};

// ✅ Función para mostrar autos + links + imagen
const generarLinks = (lista: string[]) => (
  <>
    {lista.map((slug) => {
      const auto = autosLista.find((a: any) => a.slug === slug);
      if (!auto) return null;

      return (
        <div key={slug} className="mb-3 flex gap-2">
          {/* Foto mini */}
          <Image
            src={auto.imagenes?.[0] ?? "/car-placeholder.png"}
            alt={auto.nombre}
            width={60}
            height={40}
            className="rounded shadow-sm border object-cover"
          />

          <div className="flex flex-col">
            <div className="font-medium text-sm">{auto.nombre}</div>

            <Link
              href={`/modelo/${auto.slug}`}
              className="underline text-blue-600 text-xs"
            >
              Ver detalles →
            </Link>


          </div>
        </div>
      );
    })}
  </>
);

// ✅ Respuestas del bot
const respuestas: Record<string, JSX.Element> = {
  suv: (
    <>
      <strong>SUV disponibles:</strong> <br /><br />
      {generarLinks(categorias.suv)}
    </>
  ),
  sedan: (
    <>
      <strong>Sedanes:</strong> <br /><br />
      {generarLinks(categorias.sedan)}
    </>
  ),
  pickup: (
    <>
      <strong>Pickups:</strong> <br /><br />
      {generarLinks(categorias.pickup)}
    </>
  ),
  todos: (
    <>
      {autosLista.map((auto: any) => (
        <div key={auto.slug} className="mb-3 flex gap-2">
          <Image
            src={auto.imagenes?.[0]}
            width={60}
            height={40}
            className="rounded border shadow-sm object-cover"
            alt={auto.nombre}
          />

          <div className="flex flex-col">
            <div className="font-medium text-sm">{auto.nombre}</div>

            <Link
              href={`/modelo/${auto.slug}`}
              className="underline text-blue-600 text-xs"
            >
              Ver detalles →
            </Link>


          </div>
        </div>
      ))}
    </>
  ),

  contacto: (
    <>
      ¡Genial! Escribime 👇 <br /><br />
      <a
        href="https://wa.me/3515607232"
        target="_blank"
        className="text-green-600 underline font-semibold"
      >
        Ir a WhatsApp
      </a>
    </>
  ),

  ubicacion: (
    <>
      📍 AutoHaus Córdoba <br />
      Castro Barros <br /><br />
      <a
        href="https://maps.google.com/?q=Auto+Haus+Volkswagen+Castro+Barros"
        target="_blank"
        className="underline text-blue-600"
      >
        Ver mapa
      </a>
    </>
  ),
};

// ✅ Preguntas principales
const preguntas = [
  {
    pregunta: "Modelos disponibles 🚗",
    opciones: [
      { label: "SUV (T-Cross, Nivus, Taos...)", id: "suv" },
      { label: "Sedanes (Virtus, Vento)", id: "sedan" },
      { label: "Pickups (Amarok, Saveiro)", id: "pickup" },
      { label: "Ver todos los modelos", id: "todos" },
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

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [historial, setHistorial] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const ultima = historial[historial.length - 1];

  useEffect(() => {
    if (ultima) {
      setTyping(true);
      const t = setTimeout(() => setTyping(false), 800);
      return () => clearTimeout(t);
    }
  }, [ultima]);

  return (
    <div className="fixed bottom-6 right-24 z-50">
      {/* Ventana del chat */}
      {open && (
        <div className="bg-white shadow-2xl rounded-2xl w-80 p-4 mb-3 border animate-fadeIn">

          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            {historial.length > 0 ? (
              <button
                onClick={() => setHistorial(historial.slice(0, -1))}
                className="text-gray-700 hover:text-blue-600"
              >
                <FaChevronLeft size={18} />
              </button>
            ) : <span />}

            <div className="flex flex-col items-center">
              <Image
                src="/alejandro_perfil.jpg"
                alt="Alejandro Ponce"
                width={42}
                height={42}
                className="rounded-full border shadow"
              />
              <p className="text-[11px] font-medium text-gray-600 mt-1">
                Alejandro · Asesor VW
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="text-sm text-gray-700 max-h-72 overflow-y-auto pr-1">
            {ultima ? (
              <div className="space-y-3">
                {typing
                  ? <p className="text-gray-400 italic text-xs">Escribiendo…</p>
                  : <div>{respuestas[ultima]}</div>}

                <button
                  onClick={() => setHistorial([])}
                  className="text-xs text-gray-500 underline block text-center"
                >
                  Reiniciar chat
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

      {/* Botón flotante */}
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

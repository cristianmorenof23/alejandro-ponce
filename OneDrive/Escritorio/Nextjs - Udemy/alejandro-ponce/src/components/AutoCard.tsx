"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AutoCardProps {
  nombre: string;
  imagenes: string[];
}

export default function AutoCard({ nombre, imagenes }: AutoCardProps) {
  const [hovered, setHovered] = useState(false);

  // Creamos el slug automáticamente, ej: "T-Cross" -> "t-cross"
  const slug = nombre.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="text-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen */}
      <div className="bg-[#f6f6f6] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <Link href={`/modelo/${slug}`}>
          <Image
            src={hovered ? imagenes[1] : imagenes[0]}
            alt={nombre}
            width={400}
            height={250}
            className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Nombre */}
      <h3 className="text-lg font-semibold mt-4">{nombre}</h3>

      {/* Botón */}
      <Link href={`/modelo/${slug}`}>
        <button className="mt-3 bg-[#001E50] text-white px-6 py-2 rounded-full hover:bg-[#003399] transition hover:cursor-pointer">
          Descubrilo
        </button>
      </Link>
    </div>
  );
}

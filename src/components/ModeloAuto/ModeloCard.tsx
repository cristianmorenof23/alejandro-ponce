"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModeloCard({ modelo }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <Image
        src={modelo.imagen}
        alt={modelo.nombre}
        width={600}
        height={400}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#001E50] mb-2">
          {modelo.nombre}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{modelo.descripcion}</p>
        <Link
          href={`/modelo/${modelo.slug}`}
          className="inline-block bg-[#001E50] text-white font-medium px-6 py-2 rounded-full hover:bg-[#003399] transition"
        >
          Descubrilo
        </Link>
      </div>
    </motion.div>
  );
}

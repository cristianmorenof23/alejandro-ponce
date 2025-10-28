"use client";
import { motion } from "framer-motion";
import AutoCard from "./AutoCard";
import { autos } from "../data/autos";

export default function CategoriaSection() {
  return (
    <section
      id="modelos"
      className="max-w-6xl mx-auto px-4 py-20 bg-white text-vwBlue"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Conocé nuestros modelos
      </motion.h2>

      {Object.entries(autos).map(([categoria, modelos]) => (
        <div key={categoria} className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-10 uppercase tracking-wide border-l-4 border-vwBlue pl-3"
          >
            {categoria}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {modelos.map((auto) => (
              <motion.div
                key={auto.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AutoCard {...auto} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

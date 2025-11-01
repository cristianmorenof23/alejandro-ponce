"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    imagen: "/tcross-header.jpg",
    titulo: "T-Cross",
    texto: "El SUV ideal para tu día a día",
    ruta: "/modelo/t-cross",
  },
  {
    imagen: "/polo-header.png",
    titulo: "Polo",
    texto: "Elegancia, confort y potencia Volkswagen",
    ruta: "/modelo/polo",
  },
  {
    imagen: "/tera_swipper.webp",
    titulo: "Tera",
    texto: "Tecnología, diseño y potencia en un solo SUV",
    ruta: "/modelo/tera",
  },
  {
    imagen: "/nivus_swipper.webp",
    titulo: "Nivus",
    texto: "Deportividad y tecnología sin límites",
    ruta: "/modelo/nivus",
  },
  {
    imagen: "/amarok_swipper.webp",
    titulo: "Amarok",
    texto: "Fuerza y estilo para cualquier terreno",
    ruta: "/modelo/amarok",
  },
];

export default function HeroSwiper() {
  return (
    <section className="relative w-full min-h-[80vh] md:h-[90vh] overflow-hidden mt-0 pt-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh] md:h-[90vh]">
              {/* Imagen de fondo */}
              <Image
                src={slide.imagen}
                alt={slide.titulo}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_70%] md:object-center brightness-90"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Contenido */}
              <div className="absolute inset-x-6 bottom-16 md:left-16 md:bottom-24 text-white z-10 text-center md:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg"
                >
                  {slide.titulo}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg mb-6 drop-shadow-md"
                >
                  {slide.texto}
                </motion.p>

                {/* Botón que lleva a la página del modelo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={slide.ruta}
                    className="inline-block bg-white text-[#001E50] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
                  >
                    Descubrilo
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Importar estilos necesarios
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    imagen: "/tcross-header.jpg",
    titulo: "T-Cross",
    texto: "El SUV ideal para tu día a día.",
    ruta: "/modelo/t-cross",
  },
  {
    imagen: "/polo-header.png",
    titulo: "Polo",
    texto: "Elegancia, confort y potencia Volkswagen.",
    ruta: "/modelo/polo",
  },
  // ... resto de tus slides
];

export default function HeroSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // Cambio a desvanecimiento para más elegancia
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Imagen con efecto Ken Burns (Zoom suave) */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: activeIndex === index ? 1.1 : 1 }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slide.imagen}
                  alt={slide.titulo}
                  fill
                  priority={index === 0}
                  className="object-cover object-center brightness-[0.85]"
                />
              </motion.div>

              {/* Overlay Premium: Gradiente sutil para legibilidad */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent md:from-black/60 md:via-transparent" />

              {/* Contenido Centrado/Lateralizado */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-16">
                  <div className="max-w-2xl text-white">
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <div key={index}>
                          <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4 drop-shadow-2xl"
                          >
                            {slide.titulo}
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl font-light text-gray-200 mb-8 max-w-lg leading-relaxed"
                          >
                            {slide.texto}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            <Link
                              href={slide.ruta}
                              className="group relative inline-flex items-center gap-3 overflow-hidden bg-white px-10 py-4 rounded-full transition-all hover:pr-14"
                            >
                              <span className="relative z-10 text-[#001E50] font-bold uppercase tracking-wider text-sm">
                                Explorar ahora
                              </span>
                              <div className="absolute -right-5 opacity-0 group-hover:opacity-100 group-hover:right-5 transition-all duration-300">
                                <span className="text-[#001E50]">→</span>
                              </div>
                              <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            </Link>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS personalizado para los dots de la paginación */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
          transition: all 0.3s;
          opacity: 0;
        }
        .relative:hover .swiper-button-next, .relative:hover .swiper-button-prev {
          opacity: 0.5;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
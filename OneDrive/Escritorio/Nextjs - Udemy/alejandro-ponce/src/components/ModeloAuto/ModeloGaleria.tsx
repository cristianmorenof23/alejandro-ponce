"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModeloGaleria({ imagenes }: any) {
  return (
    <section className="w-full py-12">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={20}
        className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {imagenes.map((img: string, i: number) => (
          <SwiperSlide key={i} className="bg-gray-100">
            <div className="relative w-full h-[500px] md:h-[650px]">
              <Image
                src={img}
                alt="Volkswagen Detail"
                fill
                className="object-cover transition-transform duration-5000 hover:scale-110"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
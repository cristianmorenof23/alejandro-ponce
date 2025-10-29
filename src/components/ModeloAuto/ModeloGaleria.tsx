"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModeloGaleria({ imagenes }: any) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3500 }}
        loop
        className="rounded-2xl shadow-lg"
      >
        {imagenes.map((img: string, i: number) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="imagen del modelo"
              width={1280}
              height={720}
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

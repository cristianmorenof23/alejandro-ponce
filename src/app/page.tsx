"use client";

import CategoriaSection from "../components/CategoriaSection";
import Hero from "../components/Hero";
import HeroSwiper from "../components/HeroSwiper";

export default function Home() {
  return (
    <>
      <HeroSwiper />
      <Hero />
      <CategoriaSection />
    </>
  );
}

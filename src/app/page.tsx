
export const metadata = {
  title: "Volkswagen Córdoba | Alejandro Ponce · Asesor Comercial",
  description:
    "Encontrá tu Volkswagen 0km con asesoramiento personalizado. Alejandro Ponce · Auto Haus Córdoba. Financiación, test drives y entrega inmediata.",
  keywords: [
    "Volkswagen Córdoba",
    "Comprar auto Córdoba",
    "Volkswagen Argentina",
    "AutoHaus Córdoba",
    "Alejandro Ponce",
    "asesor Volkswagen",
    "0km Córdoba",
    "Volkswagen T-Cross",
    "Volkswagen Nivus",
    "Volkswagen Polo",
    "Volkswagen Taos",
    "Volkswagen Amarok",
    "Plan de ahorro VW",
  ],
  openGraph: {
    title: "Volkswagen Córdoba | Alejandro Ponce",
    description:
      "Descubrí la línea Volkswagen. Atención personalizada, planes de financiación y entrega inmediata.",
    url: "https://alejandroponce.vercel.app",
    siteName: "Alejandro Ponce - Volkswagen Córdoba",
    images: [
      {
        url: "/seo_ap.png",
        width: 1200,
        height: 630,
        alt: "Volkswagen Córdoba | Alejandro Ponce",
      },
    ],
  },
};



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

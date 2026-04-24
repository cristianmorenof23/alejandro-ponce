

export const metadata = {
  title: "Modelos Volkswagen | Alejandro Ponce Córdoba",
  description:
    "Explorá los modelos Volkswagen disponibles en Córdoba: T-Cross, Taos, Polo, Nivus, Amarok y más. Cotizá tu 0km con Alejandro Ponce.",
  keywords: [
    "Modelos Volkswagen",
    "Volkswagen Córdoba",
    "Volkswagen T-Cross",
    "Volkswagen Taos",
    "Volkswagen Amarok",
    "Volkswagen Nivus",
    "Volkswagen Polo",
    "concesionaria Volkswagen Córdoba",
    "0km Volkswagen",
  ],
  openGraph: {
    title: "Modelos Volkswagen disponibles | Córdoba",
    description:
      "Todos los modelos Volkswagen disponibles con asesoramiento oficial.",
    images: [
      {
        url: "/seo_ap.png",
        width: 1200,
        height: 630,
        alt: "Modelos Volkswagen Argentina",
      },
    ],
  },
};



import ModeloCard from "@/src/components/ModeloAuto/ModeloCard";
import { modelos } from "@/src/data/modelos";

export default function ModelosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#001E50] text-center mb-12">
        Modelos Volkswagen
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {modelos.map((modelo, index) => (
          <ModeloCard key={index} modelo={modelo} />
        ))}
      </div>
    </main>
  );
}

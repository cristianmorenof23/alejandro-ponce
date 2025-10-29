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

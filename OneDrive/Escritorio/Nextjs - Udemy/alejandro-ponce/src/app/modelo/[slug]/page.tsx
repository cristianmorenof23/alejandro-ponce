import ModeloContacto from "@/src/components/ModeloAuto/ModeloContacto";
import ModeloFichaTecnica from "@/src/components/ModeloAuto/ModeloFichaTecnica";
import ModeloGaleria from "@/src/components/ModeloAuto/ModeloGaleria";
import ModeloHero from "@/src/components/ModeloAuto/ModeloHero";
import ModeloVersiones from "@/src/components/ModeloAuto/ModeloVersiones";
import { modelos } from "@/src/data/modelos";

export default async function ModeloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 

  const modelo = modelos.find((m) => m.slug === slug);

  if (!modelo) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Modelo no encontrado</h1>
        <p className="text-gray-600">
          El modelo que estás buscando no existe o fue removido.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <ModeloHero modelo={modelo} />
      <ModeloGaleria imagenes={modelo.imagenes} />
      <ModeloVersiones versiones={modelo.versiones} />
      <ModeloFichaTecnica ficha={modelo.ficha} />
      <ModeloContacto contacto={modelo.contacto} />
    </div>
  );
}

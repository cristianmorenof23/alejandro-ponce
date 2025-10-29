/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export default function ModeloFichaTecnica({ ficha }: any) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#001E50]">
        Ficha Técnica
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {ficha.map((f: any, i: number) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h4 className="font-semibold text-[#001E50]">{f.titulo}</h4>
            <p className="text-gray-600">{f.detalle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

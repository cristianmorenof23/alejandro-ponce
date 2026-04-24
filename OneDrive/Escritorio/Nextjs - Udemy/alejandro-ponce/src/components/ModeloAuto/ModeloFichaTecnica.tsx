/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
export default function ModeloFichaTecnica({ ficha }: any) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-black text-[#001E50] tracking-tighter uppercase leading-none">
            Ficha <br /><span className="text-blue-600 font-light italic">Técnica</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm font-medium tracking-widest uppercase">Especificaciones de ingeniería</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {ficha.map((f: any, i: number) => (
            <div key={i} className="border-b border-gray-100 pb-4 group">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-1 group-hover:translate-x-1 transition-transform">
                {f.titulo}
              </h4>
              <p className="text-[#001E50] font-medium text-lg leading-tight">{f.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
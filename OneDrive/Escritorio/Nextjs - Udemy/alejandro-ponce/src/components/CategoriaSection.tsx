"use client";
import { motion, cubicBezier } from "framer-motion";
import AutoCard from "./AutoCard"; // Asegúrate de que la ruta sea correcta
import { autos } from "../data/autos";



export const metadata = {
  title: "Volkswagen Córdoba | Alejandro Ponce · Asesor Comercial",
  description:
    "Encontrá tu Volkswagen 0km con asesoramiento personalizado. Alejandro Ponce · Auto Haus Córdoba. Financiación, test drives y entrega inmediata.",
  keywords: [
    "Volkswagen Córdoba",
    "Comprar auto Córdoba",
    // ...
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
    // 👇 redes sociales para SEO
    socialProfiles: [
      "https://www.instagram.com/aleponceautohaus",
      "https://www.facebook.com/profile.php?id=61566892732814",
      "https://wa.me/3515607232"
    ],
  },
};



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } 
  },
};

export default function CategoriaSection() {
  return (
    <section id="modelos" className="py-32 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header de Sección Estilo Boutique */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-16 h-[1.5px] bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Showroom Digital
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-[#001E50] tracking-tighter leading-none"
          >
            Explorá la gama <br />
            <span className="font-light italic text-blue-900/40">Volkswagen</span>
          </motion.h2>
        </header>

        {Object.entries(autos).map(([categoria, modelos]) => (
          <div key={categoria} className="mb-32 last:mb-0">
            {/* Divisor Editorial */}
            <div className="flex items-end justify-between border-b border-gray-200 mb-16 pb-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-black uppercase tracking-tighter text-[#001E50]"
              >
                {categoria}
              </motion.h3>
              <div className="hidden md:block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Disponibilidad Inmediata / {modelos.length} Unidades
              </div>
            </div>

            {/* Grilla Animada */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
            >
              {modelos.map((auto) => (
                <motion.div 
                  key={auto.nombre} 
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                    <AutoCard {...auto} />
                  </div>
                  
                  {/* Detalles decorativos en Hover */}
                  <div className="absolute -bottom-8 left-0 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-[#001E50] font-bold text-xs uppercase tracking-widest px-2">
                    <span>Configurar Unidad</span>
                    <span className="h-1px w-8 bg-blue-600"></span>
                    <span>→</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
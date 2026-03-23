"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Rocket, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Page",
    tag: "Conversión Rápida",
    description: "Ideal para campañas específicas o lanzamientos de productos. Una sola página diseñada para convertir visitas en clientes.",
    features: ["Diseño 100% Responsive", "Optimización de Velocidad (LCP)", "Copywriting enfocado en ventas", "Botón de WhatsApp directo"],
  },
  {
    icon: Rocket,
    title: "Web Corporativa",
    tag: "Presencia Sólida",
    description: "Para negocios que necesitan autoridad. Varias secciones para comunicar servicios, equipo y trayectoria profesional.",
    features: ["Hasta 5 secciones personalizadas", "SEO On-page incluido", "Formularios de contacto inteligentes", "Blog o sección de noticias"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    tag: "Ventas 24/7",
    description: "Tu tienda abierta todo el año. Gestión de productos, stock y pagos automatizados para que solo te preocupes por vender.",
    features: ["Pasarelas de pago (MercadoPago/Stripe)", "Gestión de inventario y stock", "Panel de administración intuitivo", "Cuentas de usuario y pedidos"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-32 px-6 overflow-hidden bg-[#050510]">

      {/* GLOW DECORATIVO */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase block"
          >
            Soluciones Digitales
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter max-w-3xl"
          >
            Páginas web diseñadas para generar <span className="text-gray-600 italic font-light">resultados.</span>
          </motion.h2>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm flex flex-col h-full"
              >
                {/* ICON & TAG */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                        <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA INTERNO */}
                <div className="mt-auto">
                  <a
                    href="#contacto"
                    className="flex items-center justify-center w-full py-4 rounded-2xl border border-white/10 text-white text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-500"
                  >
                    Consultar Proyecto
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left"
        >
          <p className="text-gray-500 text-sm max-w-xl italic">
            &quot;No se trata solo de código. Se trata de entender tu negocio y crear la herramienta que te ayude a escalar.
          </p>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-white font-bold text-sm">Cristian Moreno</p>
              <p className="text-cyan-500 text-[10px] font-mono uppercase tracking-widest">Full Stack Developer</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#050510] flex items-center justify-center text-white text-xs font-bold">CM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
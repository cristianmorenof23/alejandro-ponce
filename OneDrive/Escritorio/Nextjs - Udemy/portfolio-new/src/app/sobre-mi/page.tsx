"use client";

import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiNestjs, SiPrisma, SiPostgresql, SiTailwindcss,
} from "react-icons/si";

export default function SobreMiPage() {
  const techs = [
    { icon: <SiJavascript />, name: "JS", color: "hover:text-yellow-400" },
    { icon: <SiTypescript />, name: "TS", color: "hover:text-blue-500" },
    { icon: <SiReact />, name: "React", color: "hover:text-cyan-400" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-white" },
    { icon: <SiNodedotjs />, name: "Node", color: "hover:text-green-500" },
    { icon: <SiNestjs />, name: "Nest", color: "hover:text-red-500" },
    { icon: <SiPrisma />, name: "Prisma", color: "hover:text-white" },
    { icon: <SiPostgresql />, name: "SQL", color: "hover:text-blue-300" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "hover:text-sky-400" },
  ];

  // Variantes de animación para el contenedor y los items
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">

      {/* Fondo Ambient: Luces desenfocadas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="grid lg:grid-cols-2 gap-24 items-start">

        {/* TEXTO IZQUIERDA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVars}
          className="space-y-10"
        >
          <motion.div variants={itemVars} className="space-y-4">
            <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase block">
              Sistemas & Desarrollo
            </span>
            <h1 className="text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              Cristian <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
                Moreno.
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVars} className="space-y-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            <p>
              Como <span className="text-white font-medium italic">Analista de Sistemas</span>, entiendo que el código es solo el medio para un fin: resolver problemas complejos con elegancia técnica. Mi enfoque se centra en la intersección del rendimiento crudo y la experiencia de usuario intuitiva.
            </p>
            <p>
              Me especializo en el ecosistema <span className="text-white border-b border-cyan-500/30">JavaScript moderno</span>, transformando ideas abstractas en infraestructuras digitales escalables. Cada línea de código que escribo está guiada por principios de mantenibilidad, seguridad y una obsesión por el detalle visual.
            </p>
            <p className="text-sm">
              Actualmente, diseño y despliego soluciones Full Stack que no solo funcionan a la perfección, sino que también cuentan una historia visual coherente y minimalista.
            </p>
          </motion.div>

          {/* SECCIÓN DE STATS ACTUALIZADA */}
          <motion.div variants={itemVars} className="flex gap-12 border-l border-white/10 pl-8">
            {[
              { val: 4, label: "Años de código", prefix: "+" },
              { val: 14, label: "Sistemas Pro", prefix: "+" },
              { val: 100, label: "Performance", suffix: "%" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                {/* Glow de fondo estático muy sutil */}
                <div className="absolute -inset-2 bg-cyan-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <h3 className="text-5xl text-white font-extralight italic relative tracking-tighter">
                  {stat.prefix}<Counter value={stat.val} />{stat.suffix}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* TECH GRID DERECHA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVars}
          className="relative lg:mt-12"
        >
          <div className="grid grid-cols-3 gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                variants={itemVars}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group flex flex-col items-center justify-center aspect-square rounded-3xl 
                bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 
                backdrop-blur-md transition-all duration-300 ${tech.color} hover:border-white/20`}
              >
                <div className="text-4xl mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  {tech.icon}
                </div>
                <span className="text-[9px] font-mono tracking-widest opacity-40 group-hover:opacity-100 uppercase transition-opacity">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Un toque extra: Una línea de "status" debajo del grid */}
          <motion.div
            variants={itemVars}
            className="mt-8 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400/80">Disponible para nuevos proyectos disruptivos</span>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER DE LA SECCIÓN */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-40 grid md:grid-cols-3 gap-16 border-t border-white/5 pt-20"
      >
        <div className="space-y-4">
          <div className="text-white text-sm font-bold tracking-tighter">01 / ARQUITECTURA</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Diseño sistemas que no solo resuelven el presente, sino que están preparados para el volumen y la complejidad del futuro.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-white text-sm font-bold tracking-tighter">02 / ESTÉTICA</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Menos es más. Interfaces limpias, tipografía impecable y una jerarquía visual que guía al usuario sin esfuerzo.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-white text-sm font-bold tracking-tighter">03 / ESTRATEGIA</div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Como analista, mi prioridad es entender el modelo de negocio para asegurar que cada funcionalidad aporte valor real.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
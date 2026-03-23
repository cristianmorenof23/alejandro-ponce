"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050510] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Glow de fondo decorativo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* SECCIÓN SUPERIOR: CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              ¿Tenés un proyecto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                en mente?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Estoy disponible para nuevos desafíos. Creemos algo increíble juntos.
            </p>
          </div>
          <Link
            href="mailto:tuemail@gmail.com"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-transform active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hablemos <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        {/* GRID DE LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

          {/* BRAND AREA */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-black font-black flex items-center justify-center rounded-lg text-xs">
                CM
              </div>
              <span className="text-white font-bold tracking-tighter text-xl">moreno.site</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
              Analista de Sistemas & Full Stack Developer.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="text-white text-[10px] font-mono tracking-[0.3em] uppercase mb-6 opacity-50">Menú</h4>
            <ul className="space-y-4">
              {['Inicio', 'Proyectos', 'Sobre Mí', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-1">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="text-white text-[10px] font-mono tracking-[0.3em] uppercase mb-6 opacity-50">Servicios</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Landing Pages</li>
              <li>E-commerce</li>
              <li>SaaS Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-white text-[10px] font-mono tracking-[0.3em] uppercase mb-6 opacity-50">Social</h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors flex items-center gap-2 text-sm">
                <Linkedin size={18} /> LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <Github size={18} /> GitHub
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm">
                <Mail size={18} /> Email
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © {currentYear} Cristian Moreno — Córdoba, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
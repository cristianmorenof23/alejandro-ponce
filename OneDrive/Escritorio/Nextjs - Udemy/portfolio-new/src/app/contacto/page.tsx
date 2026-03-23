"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);

  // Simulación de envío
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Aquí podrías integrar EmailJS, Resend o un API Route de Next.js
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito, Cristian te contactará pronto!");
      setIsSending(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="contacto" className="min-h-screen flex flex-col justify-center items-center px-6 py-24 relative">
      
      {/* HEADER DE SECCIÓN */}
      <div className="text-center mb-16 space-y-4">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase block"
        >
          Hablemos
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
        >
          Contacto<span className="text-gray-600 font-light italic">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        
        {/* INFO Y REDES */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center space-y-8"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            ¿Tenés una idea innovadora o un negocio que necesita despegar en el mundo digital? 
            <br /><br />
            Estoy listo para ayudarte a construir una solución robusta y con diseño premium.
          </p>

          <div className="space-y-4">
            <h4 className="text-white text-[10px] font-mono tracking-[0.3em] uppercase opacity-50">Conectemos</h4>
            <div className="flex gap-6 text-2xl">
              {[
                { icon: <FaEnvelope />, href: "mailto:cristian.morenof@hotmail.com", color: "hover:text-cyan-400" },
                { icon: <FaGithub />, href: "https://github.com/cristianmorenof23", color: "hover:text-white" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/cristian-morenof23", color: "hover:text-blue-500" },
                { icon: <FaWhatsapp />, href: "https://wa.me/3513336631", color: "hover:text-green-400" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FORMULARIO MEJORADO */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full bg-white/5 p-8 rounded-[2rem] border border-white/5 backdrop-blur-md"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="group relative">
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="group relative">
            <input
              type="email"
              name="email"
              required
              placeholder="Tu email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="group relative">
            <textarea
              name="mensaje"
              rows={4}
              required
              placeholder="¿En qué puedo ayudarte?"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase text-xs tracking-widest"
          >
            {isSending ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              <>
                <FaPaperPlane size={14} /> Enviar Mensaje
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
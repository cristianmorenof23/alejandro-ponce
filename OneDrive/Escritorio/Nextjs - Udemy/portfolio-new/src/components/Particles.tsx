"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
}

export default function Particles({ className }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
    }[] = [];
    let animationId: number;
    
    // Guardamos las dimensiones lógicas para las colisiones
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      
      // Reiniciamos partículas al redimensionar para que no queden fuera
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      // Usamos las dimensiones lógicas para limpiar
      ctx.clearRect(0, 0, w, h);
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.3)"; // Cian de tu marca
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(6, 182, 212, 0.5)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // Colisiones con rebote suave usando dimensiones lógicas
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className ?? ""}`}
      style={{ zIndex: -1 }} // Aseguramos que esté detrás de todo
      aria-hidden="true"
    />
  );
}
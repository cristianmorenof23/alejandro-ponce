"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate, motion, useMotionValue, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
}

export default function Counter({ value }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Definimos el MotionValue base
  const count = useMotionValue(0);

  // Creamos los transformadores por separado para evitar el error de mezcla de tipos
  // shadowOpacity: número (0 a 0.8)
  const shadowOpacity = useTransform(count, [0, value * 0.5, value], [0, 0.8, 0.2]);
  
  // glowSize: número (0 a 20) para manejarlo más fácil en el template string
  const glowSize = useTransform(count, [0, value * 0.5, value], [0, 20, 4]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  // Usamos una función de renderizado limpia para el estilo dinámico
  const textShadow = useTransform(
    () => `0px 0px ${glowSize.get()}px rgba(6, 182, 212, ${shadowOpacity.get()})`
  );

  return (
    <motion.span
      ref={ref}
      style={{ textShadow }}
      className="transition-colors duration-500"
    >
      {displayValue}
    </motion.span>
  );
}
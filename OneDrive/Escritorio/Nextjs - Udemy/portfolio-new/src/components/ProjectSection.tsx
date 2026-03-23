"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorCustom() {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuramos un "spring" para que el movimiento sea fluido y con inercia
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Buscamos si el elemento tiene un atributo data-cursor
      const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorType) {
        setCursorText(cursorType);
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-cyan-500 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold uppercase text-black overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 80 : 16,
        height: isHovering ? 80 : 16,
        backgroundColor: isHovering ? "#fff" : "#06b6d4",
      }}
    >
      {isHovering && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="whitespace-nowrap"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
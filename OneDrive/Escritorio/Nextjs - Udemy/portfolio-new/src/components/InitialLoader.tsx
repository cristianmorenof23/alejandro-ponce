"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.random() * 12, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0A0A0F]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-4">

        {/* Barra */}
        <div className="w-44 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
          />
        </div>

        {/* Texto */}
        <span className="text-xs text-gray-400 tracking-widest">
          Cargando Portfolio {Math.floor(progress)}%
        </span>

      </div>
    </motion.div>
  );
}

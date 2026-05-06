"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* --- SPEED STREAKS (Nitrous Blur) --- */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "200%", y: `${12 * i + 10}%` }}
                animate={{ x: "-200%" }}
                transition={{ 
                  duration: 0.4, 
                  repeat: Infinity, 
                  ease: "linear", 
                  delay: i * 0.05 
                }}
                className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-crimson-red to-transparent"
              />
            ))}
          </div>

          {/* --- CENTRAL SUPERBIKE SILHOUETTE --- */}
          <div className="relative">
            {/* Pulsing Underglow */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-crimson-red/30 blur-2xl rounded-full"
            />

            <motion.svg
              width="180"
              height="100"
              viewBox="0 0 180 100"
              fill="none"
              className="relative z-10"
            >
              {/* Modern Superbike Profile Path */}
              <motion.path
                d="M30 75 L45 75 M135 75 L150 75 M40 75 C25 75 20 60 40 45 C50 35 70 30 90 35 C110 30 130 30 145 45 C155 55 155 75 140 75 M70 35 L60 20 L90 15 L110 25"
                stroke="#e11d48"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  y: [0, -2, 0] 
                }}
                transition={{ 
                  pathLength: { duration: 2, ease: "easeInOut" },
                  y: { duration: 0.15, repeat: Infinity, ease: "linear" } 
                }}
              />
              
              {/* Spinning Wheels (Dash Array Effect) */}
              <motion.circle 
                cx="45" cy="75" r="12" 
                stroke="#e11d48" strokeWidth="2" 
                strokeDasharray="10 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="135" cy="75" r="12" 
                stroke="#e11d48" strokeWidth="2" 
                strokeDasharray="10 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>
          </div>

          {/* --- STATUS --- */}
          <div className="mt-16 text-center">
             <motion.p 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="text-white font-black italic uppercase text-xs tracking-[0.8em]"
             >
                Warming Up Tires
             </motion.p>
             <div className="mt-6 flex gap-2 justify-center">
                <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: "-100%" }}
                     animate={{ x: "100%" }}
                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                     className="h-full w-full bg-crimson-red"
                   />
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
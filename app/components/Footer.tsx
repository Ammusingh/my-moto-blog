"use client";

import { motion } from "framer-motion";
import { ArrowUp, Zap } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 px-6 md:px-20 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-crimson-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity (5 Columns) */}
          <div className="md:col-span-5 space-y-8">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-black italic text-4xl uppercase tracking-tighter"
            >
              AMANO<span className="text-crimson-red">MOTO</span>
            </motion.h3>
            <p className="text-zinc-500 text-lg italic leading-relaxed max-w-sm">
              Capturing the raw essence of the open road. Designed for those who live for the next horizon.
            </p>
            
            {/* Back to Top Engine Button */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-crimson-red hover:text-black transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to Base</span>
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/20">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </div>

          {/* Navigation Links (3 Columns) */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-8">// Explore</p>
            <ul className="space-y-4">
              {['Journal', 'Garage', 'Gear Guide', 'About Mission'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-crimson-red font-bold uppercase italic text-sm tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-crimson-red group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Radar (4 Columns) */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-8">// Transmission</p>
            <div className="flex flex-wrap gap-4">
              {[
                // { icon: Instagram, label: "Instagram" },
                // { icon: Youtube, label: "YouTube" },
                // { icon: Twitter, label: "Twitter" },
                { icon: Zap, label: "Strava" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/5 rounded-xl hover:border-crimson-red/40 hover:bg-crimson-red/5 transition-all group"
                >
                  <social.icon size={16} className="text-zinc-500 group-hover:text-crimson-red transition-colors" />
                  <span className="text-xs font-black uppercase italic tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Background Logo Text */}
        <div className="relative">
          <h2 className="font-black italic uppercase text-[22vw] leading-none text-white/[0.02] text-center select-none tracking-tighter">
            AMANO
          </h2>
          
          {/* Copyright Bar */}
          <div className="absolute bottom-4 left-0 w-full flex flex-col md:flex-row justify-between items-center px-2 gap-4">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 AMANOMOTO // STABLE_BUILD_V2
            </p>
            <div className="flex gap-8 text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
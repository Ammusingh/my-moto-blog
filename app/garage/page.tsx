"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Settings, ArrowRight, Gauge, Layers } from "lucide-react";
import Navbar from "../components/Navbar";
import GaragePage from "../components/GaragePage";
import CrewPage from "../components/CrewPage";
import GearPage from "../components/GearPage";

const builds = [
  {
    id: "RN-042",
    title: "The Crimson Raven",
    status: "In-Progress",
    overallProgress: 75,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2000",
    categories: [
      { name: "Engine & Drivetrain", progress: 90 },
      { name: "Chassis & Suspension", progress: 85 },
      { name: "Electronics & Wiring", progress: 40 },
      { name: "Paint & Aesthetics", progress: 10 },
    ],
    specs: [
      { label: "Engine", value: "648cc Parallel Twin" },
      { label: "Est. Completion", value: "June 2026" }
    ]
  },
  {
    id: "ST-099",
    title: "Midnight Stalker",
    status: "Planning",
    overallProgress: 15,
    image: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?q=80&w=2000",
    categories: [
      { name: "Concept & Design", progress: 100 },
      { name: "Parts Sourcing", progress: 20 },
      { name: "Frame Prep", progress: 0 },
      { name: "Assembly", progress: 0 },
    ],
    specs: [
      { label: "Base", value: "Interceptor 650" },
      { label: "Style", value: "Scrambler" }
    ]
  }
];

export default function Garage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32">
      <Navbar />

      <section className="pt-40 pb-10 px-6 md:px-20 max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
          Build <span className="text-transparent" style={{ WebkitTextStroke: '2px #e11d48' }}>Logs.</span>
        </h1>
      </section>

      <section className="py-10 px-6 md:px-20 max-w-7xl mx-auto space-y-40">
        {builds.map((bike) => (
          <div key={bike.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Info & Progress Breakdown */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-crimson-red font-mono text-xs font-bold tracking-widest uppercase">{bike.id}</span>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase font-bold text-zinc-500">
                    Status: {bike.status}
                  </div>
                </div>
                <h2 className="text-5xl font-black uppercase italic">{bike.title}</h2>
              </div>

              {/* Main Progress Bar */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-400">Overall Completion</p>
                  <p className="text-3xl font-black italic text-crimson-red">{bike.overallProgress}%</p>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bike.overallProgress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-deep-ruby to-crimson-red shadow-[0_0_15px_rgba(225,29,72,0.5)]"
                  />
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 gap-6 pt-6">
                {bike.categories.map((cat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-zinc-500">{cat.name}</span>
                      <span className={cat.progress === 100 ? "text-green-500" : "text-white"}>{cat.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cat.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full rounded-full ${cat.progress === 100 ? "bg-green-500" : "bg-white/20"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Build Preview */}
            <div className="lg:col-span-7">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 group"
              >
                <img 
                  src={bike.image} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                  alt={bike.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Overlay Tech Specs */}
                <div className="absolute bottom-10 left-10 grid grid-cols-2 gap-10">
                  {bike.specs.map((spec, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-black uppercase text-crimson-red tracking-widest">{spec.label}</p>
                      <p className="font-bold text-lg italic">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        ))}
      </section>

      {/* --- WILDCARD: MAINTENANCE FORECAST --- */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5 mt-40">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-crimson-red">
               <Layers size={20} />
               <span className="font-mono text-xs font-bold uppercase tracking-widest">Maintenance Mode</span>
             </div>
             <h2 className="text-4xl font-black italic uppercase">Predictive Servicing</h2>
             <p className="text-zinc-500 max-w-sm">AI-driven analysis for the next oil change and tire wear based on your ride logs.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-8 py-6 bg-white/5 rounded-2xl text-center border border-white/5">
                <p className="text-3xl font-black">450</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Km to Service</p>
             </div>
             <div className="px-8 py-6 bg-white/5 rounded-2xl text-center border border-white/5">
                <p className="text-3xl font-black text-green-500">Optimum</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Engine Health</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
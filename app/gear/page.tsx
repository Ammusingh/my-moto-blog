"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wind, Thermometer, Zap, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import { useState } from "react";

const gearCategories = ["All", "Helmets", "Protection", "Apparel", "Tech"];

const gearItems = [
  {
    id: "GR-01",
    category: "Helmets",
    name: "Carbon Apex R1",
    brand: "Amano-Spec",
    price: "$849",
    rating: "ECE 22.06",
    image: "https://images.unsplash.com/photo-1542408590-f66b6851901a?q=80&w=1000",
    features: ["Ultra-light Carbon Shell", "Emergency Release System", "Optimum Aero"]
  },
  {
    id: "GR-02",
    category: "Protection",
    name: "Crimson Armored Vest",
    brand: "Titan-X",
    price: "$320",
    rating: "Level 2 CE",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000",
    features: ["D3O Impact Protection", "High-Flow Mesh", "Adjustable Fit"]
  },
  // Aur items add kar sakte ho...
];

export default function GearPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredGear = activeTab === "All" 
    ? gearItems 
    : gearItems.filter(item => item.category === activeTab);

  return (
    <main className="bg-[#050505] min-h-screen text-white pb-32">
      <Navbar />

      {/* --- HERO: THE LOADOUT --- */}
      <section className="pt-40 pb-16 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-crimson-red/10 blur-[150px] -rotate-12 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-crimson-red font-mono text-xs font-bold tracking-[0.5em] uppercase mb-4 block"
            >
              // Essential Protection
            </motion.span>
            <h1 className="text-8xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter">
              The <br /><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Loadout.</span>
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 bg-zinc-900/40 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
            {gearCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-xl font-black uppercase italic text-xs transition-all ${
                  activeTab === cat ? "bg-crimson-red text-white shadow-lg" : "hover:bg-white/5 text-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- GEAR GRID --- */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGear.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={item.id}
              className="group relative bg-zinc-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-crimson-red/30 transition-all duration-500"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden p-6">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt={item.name} 
                />
                <div className="absolute top-10 left-10">
                   <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                     {item.brand}
                   </span>
                </div>
                <div className="absolute top-10 right-10">
                   <span className="bg-crimson-red text-black text-xs font-black px-4 py-2 rounded-full italic">
                     {item.price}
                   </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-0">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                       <ShieldCheck className="text-crimson-red" size={14} />
                       <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.rating} certified</span>
                    </div>
                  </div>
                </div>

                {/* Quick Tech Specs */}
                <div className="space-y-3 mb-8">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1 w-1 rounded-full bg-crimson-red" />
                      <p className="text-xs text-zinc-400 font-medium italic">{feature}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-crimson-red hover:text-black transition-all group/btn">
                  <span className="font-black uppercase italic text-sm">View Details</span>
                  <ShoppingBag size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECH STATS SECTION --- */}
      <section className="mt-20 py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          <div className="space-y-4">
             <Wind className="text-crimson-red" size={32} />
             <h4 className="text-xl font-black italic uppercase">Aero Optimized</h4>
             <p className="text-zinc-500 text-sm italic">Tested in virtual wind tunnels to reduce drag by 15% during high-speed runs.</p>
          </div>
          <div className="space-y-4">
             <Thermometer className="text-crimson-red" size={32} />
             <h4 className="text-xl font-black italic uppercase">Thermal Control</h4>
             <p className="text-zinc-500 text-sm italic">Advanced moisture-wicking materials that keep you cool when the asphalt is burning.</p>
          </div>
          <div className="space-y-4">
             <Zap className="text-crimson-red" size={32} />
             <h4 className="text-xl font-black italic uppercase">Impact Ready</h4>
             <p className="text-zinc-500 text-sm italic">Highest safety certifications ensuring maximum energy absorption upon impact.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
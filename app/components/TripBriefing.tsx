"use client";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  Map, 
  ShieldCheck, 
  Fuel, 
  Thermometer, 
  Mountain, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function TripBriefing() {
  return (
    <>
      <Navbar />
      <div className="bg-brand-black min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <Link href="/trips" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-orange transition-colors mb-8 group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-black">Back to Expeditions</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Mission Details */}
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <div className="inline-block bg-brand-orange text-black px-4 py-1 rounded-sm font-black italic text-[10px] uppercase tracking-tighter">
                  Briefing // Mission_01
                </div>
                <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter text-white">
                  The <span className="text-brand-orange">Zanskar</span> <br /> Trail
                </h1>
                <p className="text-zinc-400 text-lg italic max-w-xl">
                  Entering the heart of Ladakh through the newly opened Shinku La pass. This is not a vacation; it's a test of machine and spirit.
                </p>
              </section>

              {/* Itinerary Timeline */}
              <section className="space-y-8">
                <h3 className="text-2xl font-black italic uppercase text-white flex items-center gap-4">
                  <Map className="text-brand-orange" /> Day-Wise Protocol
                </h3>
                <div className="space-y-4 border-l border-white/5 ml-3 pl-8">
                  {[
                    { day: "01", title: "Manali Arrival", desc: "Bike check-up and briefing at base camp." },
                    { day: "02", title: "Jispa Ascent", desc: "Climbing to 3,200m for initial acclimatization." },
                    { day: "03", title: "The Shinku La Push", desc: "Crossing the 5,091m pass into Zanskar Valley." },
                    { day: "04-06", title: "Padum Exploration", desc: "Remote trails and monastery visits." },
                  ].map((item) => (
                    <div key={item.day} className="relative group">
                      <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-brand-black border-2 border-brand-orange scale-0 group-hover:scale-100 transition-transform" />
                      <h4 className="text-brand-orange font-black italic text-lg uppercase leading-none">Day {item.day}</h4>
                      <p className="text-white font-bold mt-1 uppercase text-sm tracking-tighter">{item.title}</p>
                      <p className="text-zinc-500 text-sm mt-1 italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Technical Stats & Requirements */}
            <div className="space-y-6">
              <div className="bg-brand-surface/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 sticky top-32">
                <h3 className="text-xl font-black italic uppercase text-white mb-8 border-b border-white/5 pb-4">
                  Tech Specs
                </h3>
                
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                      <Thermometer size={18} className="text-brand-orange mb-2" />
                      <span className="block text-[10px] text-zinc-500 uppercase font-black">-15°C / 20°C</span>
                      <span className="block text-xs text-white font-bold italic">Temp Range</span>
                    </div>
                    <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                      <Mountain size={18} className="text-brand-orange mb-2" />
                      <span className="block text-[10px] text-zinc-500 uppercase font-black">5,091 Meters</span>
                      <span className="block text-xs text-white font-bold italic">Max Alt</span>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mandatory Gear</h4>
                    {[
                      "Off-road Protection (Level 2)",
                      "Hydration Pack (2L min)",
                      "Cold weather layers",
                      "Spare clutch/brake cables"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-brand-orange" />
                        <span className="text-zinc-300 text-xs italic font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-brand-orange text-black py-4 rounded-2xl font-black italic uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(255,77,0,0.2)]">
                    Reserve My Spot
                  </button>

                  <div className="flex items-center justify-center gap-2 py-2">
                    <ShieldCheck size={14} className="text-zinc-600" />
                    <span className="text-[9px] text-zinc-600 uppercase font-black tracking-tighter">Full Support Vehicle Included</span>
                  </div>
                </div>
              </div>

              {/* Fuel Warning */}
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-[2rem] p-6 flex items-start gap-4">
                <Fuel className="text-brand-orange shrink-0" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase text-brand-orange">Fuel Alert</p>
                  <p className="text-zinc-500 text-[11px] italic leading-tight mt-1">
                    No fuel stations for 340km. Riders must carry 10L additional capacity.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
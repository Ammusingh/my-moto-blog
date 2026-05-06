"use client";
import { Users, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CrewPage() {
  return (
    <>
      <Navbar />
      <div className="bg-brand-black min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 px-4 py-2 rounded-full border border-brand-orange/20">
            <Users size={16} className="text-brand-orange" />
            <span className="text-brand-orange font-mono text-[10px] uppercase font-black">Recruiting Riders</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-white">
            Ride With <br/> The <span className="text-brand-orange">Originals</span>
          </h1>
          
          <p className="text-zinc-500 text-xl italic max-w-2xl mx-auto">
            Not just a group, it's a brotherhood. Join us on our next expedition across the untamed terrains.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-brand-orange text-black px-12 py-6 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-4 group">
              Join WhatsApp Crew 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/10 text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Ride Calendar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-20 border-t border-white/5">
            {[ ["12", "Rides"], ["50+", "Riders"], ["15k+", "KMs"] ].map(([val, label]) => (
              <div key={label}>
                <h4 className="text-4xl font-black italic text-brand-orange">{val}</h4>
                <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
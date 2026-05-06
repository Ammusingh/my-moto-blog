"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ChevronRight, Info, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation"; // Next.js navigation
import Footer from "../components/Footer";

const expeditions = [
  {
    id: 1,
    title: "The Zanskar Trail",
    date: "June 2026",
    duration: "12 Days",
    difficulty: "Extreme",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200",
    instructions: [
      "Altitude: 4,000m+ (Acclimatization mandatory)",
      "Fuel: Carry 5L extra jerry cans",
      "Gear: Heated grips & Thermal liners essential",
      "Route: Manali > Padum > Shinku La"
    ]
  },
  {
    id: 2,
    title: "Coastal Burn (Konkan)",
    date: "Sept 2026",
    duration: "5 Days",
    difficulty: "Moderate",
    status: "Planning",
    image: "https://images.unsplash.com/photo-1590603740183-980e7f98e1ca?q=80&w=1200",
    instructions: [
      "Focus: Coastal curves & Ferry crossings",
      "Stay: Beach-side camping setup",
      "Check: Salt-water protection for chain"
    ]
  },
  {
    id: 3,
    title: "Rann of Kutch Night Raid",
    date: "Dec 2026",
    duration: "4 Days",
    difficulty: "Easy",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1625505459740-42354c73a25b?q=80&w=1200",
    instructions: [
      "White Desert entry permits required",
      "Night riding gear with high-vis reflectors",
      "Cold desert temperatures (-2°C)"
    ]
  }
];

export default function TripsPage() {
  const router = useRouter();

  const handleBriefingClick = () => {
    // Yahan aap dynamic ID pass kar sakte ho
    router.push(`/trips/briefing`); 
  };

  return (
    <>
      <Navbar />
      <div className="bg-brand-black min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
              <span className="font-mono text-xs tracking-[0.4em] text-zinc-500 uppercase">Mission // Expedition_Logs</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-none">
              The <span className="text-brand-orange">Routes</span>
            </h1>
          </header>

          {/* Trips Grid */}
          <div className="grid gap-12">
            {expeditions.map((trip, index) => (
              <motion.div 
                key={trip.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid md:grid-cols-2 gap-8 items-stretch group"
              >
                {/* Image Section */}
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/5">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6 bg-brand-orange text-black px-4 py-1 rounded-full font-black italic text-[10px] uppercase">
                    {trip.status}
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-brand-surface/30 backdrop-blur-md rounded-[3rem] p-10 border border-white/5 flex flex-col justify-between hover:border-brand-orange/20 transition-colors">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-4xl font-black italic uppercase leading-none text-white">{trip.title}</h3>
                      <MapPin className="text-brand-orange" size={24} />
                    </div>

                    <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-orange" /> {trip.date}</div>
                      <div className="flex items-center gap-2"><Clock size={14} className="text-brand-orange" /> {trip.duration}</div>
                    </div>

                    {/* Instructions Box */}
                    <div className="bg-black/40 rounded-2xl p-6 border-l-4 border-brand-orange space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Info size={16} className="text-brand-orange" />
                        <span className="font-black italic uppercase text-xs text-white">Rider Protocol</span>
                      </div>
                      <ul className="space-y-2">
                        {trip.instructions.map((ins, i) => (
                          <li key={i} className="text-zinc-500 text-sm flex items-start gap-2 italic font-medium">
                            <span className="text-brand-orange">•</span> {ins}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="mt-8 flex items-center justify-between w-full group/btn" onClick={handleBriefingClick}>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Full Briefing</span>
                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      <ChevronRight size={20} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer Footer */}
          <div className="bg-brand-orange/5 border border-brand-orange/20 p-8 rounded-[2rem] flex items-center gap-6">
            <AlertTriangle className="text-brand-orange shrink-0" size={32} />
            <p className="text-zinc-400 text-sm italic">
              <strong className="text-brand-orange uppercase">Safety Protocol:</strong> All expeditions require basic off-road training and safety gear. Group rides are subject to weather conditions and government permits.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
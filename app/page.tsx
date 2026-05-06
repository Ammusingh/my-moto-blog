"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import TestimonialSlider from "./components/TestimonialSlider";
import Reveal from "./components/Reveal";
import { ArrowRight, Share2, Timer } from "lucide-react";
import { ArrowUpRight, Gauge, Shield, Users } from "lucide-react";
import { Mail, Send, Bell } from "lucide-react";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const recentRides = [
    { title: "The Silent Valley Run", date: "May 2026", category: "Adventure", image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070" },
    { title: "Carbon Fiber & Chrome", date: "April 2026", category: "Garage", image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2000" },
    { title: "Desert Storm Diaries", date: "March 2026", category: "Trip Log", image: "https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?q=80&w=2000" },
  ];

  return (
    <main className="bg-brand-black min-h-screen text-brand-cream overflow-x-hidden font-body selection:bg-brand-orange selection:text-black">
      <Navbar />

      {/* ---------- HERO : CINEMATIC PARALLAX ---------- */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: yImg }} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070"
            className="w-full h-full object-cover"
            alt="Hero Bike"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-transparent to-transparent" />
        </motion.div>

        {/* top meta bar */}
        <div className="relative z-10 flex justify-between items-center px-6 md:px-20 pt-32 font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-400">
          <span>N 28.6° · E 77.2°</span>
          <span>Issue 014 — 2026</span>
        </div>

        <motion.div
          style={{ y: yText }}
          className="relative z-10 px-6 md:px-20 mt-20 md:mt-32 max-w-6xl"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="text-brand-orange font-mono tracking-[0.5em] uppercase text-xs mb-6"
          >
            ◢ Established 2026
          </motion.h2>

          <h1 className="font-display text-[18vw] md:text-[12rem] leading-[0.85] italic uppercase tracking-tighter">
            <motion.span
              initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >Ride</motion.span>
            <motion.span
              initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block text-transparent"
              style={{ WebkitTextStroke: "1.5px #F5F1EA" }}
            >Or Die</motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-zinc-400 text-base md:text-lg max-w-md mt-8 leading-relaxed"
          >
            Capturing the raw essence of motorcycling — the lens of adventure
            and mechanical soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button className="group relative bg-brand-orange text-black font-bold px-8 py-4 uppercase tracking-widest text-xs overflow-hidden">
              <span className="relative z-10">Explore Logs →</span>
              <span className="absolute inset-0 bg-brand-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="border border-white/30 text-white font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              The Garage
            </button>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.5em] text-zinc-500 uppercase z-10"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* ---------- MARQUEE STRIP ---------- */}
      <div className="border-y border-white/10 bg-brand-black overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap font-display italic uppercase text-4xl text-zinc-700"
        >
          {Array(8).fill("Two Wheels · One Soul · Endless Horizon ·").map((t, i) => (
            <span key={i}>{t} <span className="text-brand-orange">★</span></span>
          ))}
        </motion.div>
      </div>

      {/* ---------- FEATURED STORY (split editorial) ---------- */}
      <section className="relative py-40 px-6 md:px-20 max-w-screen-2xl mx-auto overflow-hidden bg-brand-black">
        {/* Background Decorative Element - Updated to Brand Orange */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* --- IMAGE VIEW (THE FIX) --- */}
          <div className="md:col-span-7 relative group">
            {/* Ornamental Tech Border */}
            <div className="absolute -inset-4 border border-white/5 rounded-2xl pointer-events-none group-hover:border-brand-orange/20 transition-colors duration-700" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl bg-brand-surface"
            >
              {/* Image HUD Overlays */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 italic">System.Active // Feed_01</span>
                  </div>
                  <Share2 className="text-white/20 group-hover:text-brand-orange transition-colors pointer-events-auto cursor-pointer" size={18} />
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 inline-flex items-center gap-6 self-start rounded-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2">
                    <Timer size={14} className="text-brand-orange" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic text-white">12 Min Read</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/20" />
                  <span className="text-[10px] font-black uppercase tracking-widest italic text-brand-orange">Adventure</span>
                </div>
              </div>

              {/* The Main Image */}
              <img
                src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1400"
                className="w-full h-full object-cover grayscale scale-110 group-hover:grayscale-0 group-hover:scale-100 transition-all duration-[1.5s] ease-out"
                alt="Featured"
              />

              {/* Orange Vignette on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Floating Category Badge - Updated to Brand Orange */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-brand-orange rounded-full flex items-center justify-center -rotate-12 border-8 border-brand-black z-30 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <span className="text-black font-black italic text-center leading-none uppercase text-sm">
                Top <br /> Pick
              </span>
            </div>
          </div>

          {/* --- TEXT CONTENT --- */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="font-mono text-[10px] uppercase tracking-[0.6em] text-brand-orange font-black"
              >
              // Cover Story
              </motion.p>

              <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter text-white">
                Crossing <br />
                The <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>High</span> <br />
                <span className="bg-gradient-to-r from-brand-orange to-[#ff8c00] bg-clip-text text-transparent italic underline decoration-brand-orange/20 underline-offset-8">
                  Himalayan
                </span> <br />
                Passes
              </h2>
            </div>

            <p className="text-zinc-500 text-lg md:text-xl italic font-light leading-relaxed border-l-2 border-white/5 pl-6">
              Oxygen is thin, but the adrenaline is thick. A 3,000 km journey
              through some of the most dangerous roads on the planet. Testing the limits of man and machine.
            </p>

            <motion.div
              whileHover={{ x: 10 }}
              className="pt-4"
            >
              <a className="group relative inline-flex items-center gap-6 cursor-pointer">
                <span className="text-sm font-black uppercase italic tracking-[0.2em] text-white group-hover:text-brand-orange transition-colors">
                  Dive into the story
                </span>
                <div className="relative flex items-center justify-center">
                  <div className="h-[2px] w-12 bg-white group-hover:w-24 group-hover:bg-brand-orange transition-all duration-500" />
                  <ArrowRight size={18} className="absolute -right-8 opacity-0 group-hover:opacity-100 group-hover:right-[-40px] transition-all text-brand-orange" />
                </div>
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ---------- LATEST REVS — BLOG GRID ---------- */}
      <section className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Reveal>
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.4em] mb-4">/ 02 — Journal</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase italic tracking-tighter leading-none">
              Latest <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #FF4D1C" }}>Revs</span>
            </h2>
          </Reveal>
          <p className="text-zinc-500 max-w-sm font-mono text-xs uppercase">
            Chronicles of speed, dirt and the endless pursuit of horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentRides.map((ride, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <BlogCard {...ride} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- BENTO GRID ---------- */}
      <section className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[750px]">

          {/* --- CARD 1: THE MAIN EXPEDITION (Journal/Home) --- */}
          <Link href="/journal" className="md:col-span-2 md:row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="h-full relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-brand-surface"
            >
              <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(255,77,0,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-white/60 uppercase italic">Active_Log // 2026</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1200"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
                alt="Ladakh"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute bottom-0 p-10 z-20 w-full">
                <h3 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter mb-4 text-white">
                  Into the <br /> <span className="text-brand-orange">Unknown</span>
                </h3>
                <div className="flex items-center gap-4 text-zinc-400 group-hover:text-white transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest italic">Ladakh Expedition</span>
                  <div className="h-px w-8 bg-brand-orange/50" />
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-orange" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* --- CARD 2: THE GARAGE --- */}
          <Link href="/garage">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ borderColor: 'rgba(255, 77, 0, 0.3)' }}
              className="h-full bg-brand-surface/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
            >
              <Gauge className="absolute -right-4 -top-4 text-white/[0.02] rotate-12" size={180} />
              <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-orange transition-all duration-500">
                <Gauge className="text-white group-hover:text-black transition-colors" size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase italic leading-none text-white">The Garage</h4>
                <p className="text-zinc-500 text-xs mt-3 font-medium uppercase tracking-widest italic">Specs & Performance</p>
              </div>
            </motion.div>
          </Link>

          {/* --- CARD 3: JOIN THE CREW --- */}
          <Link href="/crew">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="h-full bg-brand-orange p-8 rounded-[2rem] text-black flex flex-col justify-between group cursor-pointer shadow-[0_20px_50px_rgba(255,77,0,0.2)]"
            >
              <div className="flex justify-between items-start">
                <Users size={32} strokeWidth={2.5} />
                <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-black uppercase italic leading-none tracking-tighter">Join The <br /> Crew</h4>
              </div>
            </motion.div>
          </Link>

          {/* --- CARD 4: GEAR GUIDE --- */}
          <Link href="/gear" className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h-full bg-brand-surface/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group flex items-center cursor-pointer"
            >
              <span className="absolute -right-4 -bottom-10 font-black italic text-[12rem] uppercase pointer-events-none transition-all duration-700 group-hover:translate-x-10"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)', color: 'transparent' }}>
                GEAR
              </span>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between w-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-orange">
                    <Shield size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Loadout_01</span>
                  </div>
                  <h4 className="text-4xl font-black uppercase italic tracking-tighter text-white">Gear Guide</h4>
                </div>
                <div className="mt-6 md:mt-0 h-16 w-16 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-brand-orange transition-colors">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      {/* ---------- TESTIMONIAL SWIPER ---------- */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-b from-brand-black to-brand-carbon">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.4em] mb-4">/ 03 — Voices</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase italic mb-12">
              The <span className="text-brand-orange">Squad</span> Speaks
            </h2>
          </Reveal>
          <TestimonialSlider />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-32 px-6 relative overflow-hidden bg-brand-black">
        {/* Background Decorative Element - Updated to use Brand Orange with low opacity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative group"
        >
          {/* The Main Container - Uses brand-surface for card look */}
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-surface/40 border border-white/5 backdrop-blur-3xl p-12 md:p-24">

            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2000"
                className="w-full h-full object-cover"
                alt="background"
              />
            </div>

            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">

              {/* Left: Text Content */}
              <div className="md:col-span-7 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-brand-orange font-mono text-[10px] font-black uppercase tracking-[0.4em]">Join the Inner Circle</span>
                </div>

                <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8 text-white">
                  Refuel <br /> Your <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Soul.</span>
                </h2>

                <p className="text-zinc-500 font-medium italic text-lg max-w-md">
                  Get the rawest trip logs, exclusive gear drops, and high-octane stories delivered directly to your inbox.
                </p>
              </div>

              {/* Right: Input Form */}
              <div className="md:col-span-5 w-full">
                <form className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-orange transition-colors" size={20} />
                    <input
                      type="email"
                      placeholder="ENTER YOUR ENGINE ID (EMAIL)"
                      className="w-full bg-black/50 border border-white/5 rounded-2xl py-6 pl-16 pr-6 outline-none focus:border-brand-orange/50 transition-all font-mono text-xs uppercase tracking-widest placeholder:text-zinc-700 text-white"
                    />
                  </div>

                  {/* Button updated to brand-orange */}
                  <button className="group w-full relative bg-brand-orange text-black font-black uppercase italic py-6 rounded-2xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-widest">
                      IGNITION START <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    {/* Hover Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Bell size={12} className="text-zinc-600" />
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">No Spam. Just Pure Performance.</p>
                  </div>
                </form>
              </div>

            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 border-t-2 border-r-2 border-white/10 rounded-tr-3xl" />
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

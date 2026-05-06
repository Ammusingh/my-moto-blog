"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Globe, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-brand-orange selection:text-black">
            <Navbar />

            <main className="bg-[#050505] min-h-screen text-white pb-20 selection:bg-crimson-red">
                {/* --- HERO: THE WATERMARK --- */}
                <section className="relative pt-40 pb-20 px-6 md:px-20 overflow-hidden">
                    <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] z-0">
                        <h1 className="text-[30vw] font-black italic uppercase leading-none whitespace-nowrap">
                            SIGNAL SIGNAL SIGNAL
                        </h1>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

                        {/* --- LEFT: INFO & VIBE (5 Columns) --- */}
                        <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-2 w-2 rounded-full bg-crimson-red animate-pulse" />
                                    <h2 className="text-crimson-red font-mono tracking-[0.4em] uppercase text-xs font-black">
                  // Connection Established
                                    </h2>
                                </div>
                                <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8">
                                    Drop A <br />
                                    <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Signal.</span>
                                </h1>
                                <p className="text-zinc-500 text-lg italic max-w-sm border-l-2 border-crimson-red pl-6">
                                    Ready for the next big build or a cross-country ride? My inbox is open for high-octane collaborations.
                                </p>
                            </div>

                            {/* QUICK CONTACT CARDS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-crimson-red/30 transition-all group">
                                    <Mail className="text-crimson-red mb-4 group-hover:scale-110 transition-transform" size={20} />
                                    <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Email</p>
                                    <p className="font-bold italic">hello@amanmoto.com</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-crimson-red/30 transition-all group">
                                    <MapPin className="text-crimson-red mb-4 group-hover:scale-110 transition-transform" size={20} />
                                    <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Base</p>
                                    <p className="font-bold italic">New Delhi, India</p>
                                </div>
                            </div>

                            {/* SOCIAL RADAR */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">// Social Radar</p>
                                <div className="flex gap-4">
                                    {[
                                        // { icon: Instagram, label: "IG" },
                                        // { icon: Youtube, label: "YT" },
                                        { icon: Globe, label: "WEB" }
                                    ].map((social, i) => (
                                        <button key={i} className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-crimson-red hover:text-black transition-all">
                                            <social.icon size={18} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT: THE FORM (7 Columns) --- */}
                        <div className="lg:col-span-7 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[3rem] relative overflow-hidden"
                            >
                                {/* Decorative Tech Elements */}
                                <div className="absolute top-0 right-0 p-8">
                                    <Zap size={40} className="text-white/5" />
                                </div>

                                <form className="space-y-10 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="relative group">
                                            <input type="text" required className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-crimson-red transition-all font-bold italic text-lg peer placeholder-transparent" id="name" placeholder="Name" />
                                            <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-crimson-red transition-all">Rider Name</label>
                                        </div>
                                        <div className="relative group">
                                            <input type="email" required className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-crimson-red transition-all font-bold italic text-lg peer placeholder-transparent" id="email" placeholder="Email" />
                                            <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-crimson-red transition-all">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <textarea rows={4} required className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-crimson-red transition-all font-bold italic text-lg resize-none peer placeholder-transparent" id="message" placeholder="Message" />
                                        <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-crimson-red transition-all">Mission Details</label>
                                    </div>

                                    <button className="group w-full py-6 bg-crimson-red text-black font-black uppercase italic rounded-2xl flex items-center justify-center gap-4 hover:bg-white transition-all shadow-[0_20px_40px_rgba(225,29,72,0.2)]">
                                        Launch Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- MAP SECTION: TACTICAL VIEW --- */}
                <section className="px-6 md:px-20 max-w-7xl mx-auto py-20">
                    <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/5">
                        {/* Custom Dark Map Embed (Using Google Maps Embed with Styling) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.06889754725782!3d28.527280343714263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b34766285%3A0x5132540e696551ad!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                            className="w-full h-full grayscale invert opacity-60 contrast-125"
                            loading="lazy"
                        ></iframe>

                        {/* Floating Map Overlay */}
                        <div className="absolute top-10 left-10 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl hidden md:block">
                            <h4 className="text-xl font-black italic uppercase mb-2">Base Camp</h4>
                            <p className="text-zinc-400 text-sm italic mb-6">New Delhi, Central Hub</p>
                            <div className="flex items-center gap-3 text-crimson-red font-bold text-xs uppercase tracking-widest">
                                <div className="h-2 w-2 rounded-full bg-crimson-red animate-pulse" />
                                Live - Accepting Visitors
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FAQ / FOOTER CONNECT --- */}
                <section className="py-20 px-6 text-center border-t border-white/5 mt-20">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em] mb-4">Response Time: &lt; 24 Hours</p>
                    <p className="text-zinc-400 italic">Bhai, message chodo, reply engine se fast aayega!</p>
                </section>
            </main>

            {/* --- DECORATIVE FOOTER ELEMENT --- */}
            <div className="h-2 w-full bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent mt-20" />
            <Footer />
        </main>
    );
}
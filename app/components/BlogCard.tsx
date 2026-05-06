"use client";
import { motion } from "framer-motion";

export default function BlogCard({ title, date, category, image }: any) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5">
        <img src={image} alt={title}
             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <span className="absolute top-4 left-4 bg-brand-orange text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
          {category}
        </span>
        <span className="absolute bottom-4 right-4 text-white/60 font-mono text-xs">{date}</span>
      </div>
      <h3 className="font-display uppercase italic text-2xl leading-tight group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      <div className="mt-3 h-px w-10 bg-zinc-700 group-hover:w-24 group-hover:bg-brand-orange transition-all duration-500" />
    </motion.article>
  );
}

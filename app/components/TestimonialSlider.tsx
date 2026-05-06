"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const data = [
  { name: "Rahul Kapoor", bike: "Interceptor 650", quote: "Aman's blogs aren't just about bikes — they're about the soul of travel. The Spiti series helped me plan my first solo trip perfectly." },
  { name: "Vikram Singh", bike: "KTM Duke 390",     quote: "The technical reviews are spot on. No fluff, just pure machine talk." },
  { name: "Aisha Khan",   bike: "Himalayan 450",    quote: "Every story makes me want to gear up and just ride into the night." },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative, Pagination]}
      effect="creative"
      creativeEffect={{
        prev: { translate: ["-20%", 0, -200], opacity: 0 },
        next: { translate: ["100%", 0, 0] },
      }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="!pb-16"
    >
      {data.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-brand-surface border border-white/10 rounded-3xl p-12 md:p-20">
            <span className="font-display italic text-7xl text-brand-orange leading-none">“</span>
            <p className="text-2xl md:text-4xl font-light italic text-zinc-200 leading-snug mt-4 max-w-4xl">
              {t.quote}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center font-bold text-black">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider">{t.name}</p>
                <p className="text-xs text-brand-orange uppercase tracking-widest">{t.bike}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

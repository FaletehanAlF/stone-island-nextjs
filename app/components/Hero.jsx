"use client";

import { ArrowDown } from "lucide-react";
import { useApp } from "../lib/AppContext";

const heroImage = "https://i.pinimg.com/1200x/03/cf/b6/03cfb6131d606c42eb979eea43d8b785.jpg";

export default function Hero() {
  const { t } = useApp();
  const scrollToProducts = () => {
    document.getElementById("produk")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-cover bg-center anim-blur" style={{ backgroundImage: `url("${heroImage}")` }} />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center">
        <span className="anim-fade-up text-[9px] uppercase tracking-[0.4em] text-white/40">{t.heroLabel}</span>
        <h1 className="anim-fade-up anim-delay-1 mt-6 text-4xl font-light uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          {t.heroTitle1}<br /><span className="text-white/40">{t.heroTitle2}</span>
        </h1>
        <p className="anim-fade-up anim-delay-2 mt-5 max-w-md text-sm leading-7 text-white/45">{t.heroDesc}</p>
        <button type="button" onClick={scrollToProducts}
          className="anim-fade-up anim-delay-3 group mt-8 flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12] active:scale-[0.97]">
          {t.heroCta} <ArrowDown size={14} strokeWidth={1.3} className="transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">{t.heroLocation}</span>
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">{t.heroScroll}</span>
        </div>
      </div>
    </section>
  );
}

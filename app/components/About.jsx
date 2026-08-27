"use client";
import { useApp } from "../lib/AppContext";

export default function About() {
  const { t } = useApp();
  const values = [
    { icon: "◆", title: t.aboutMaterialInnovation, desc: t.aboutMaterialInnovationDesc },
    { icon: "◇", title: t.aboutPurposeDesign, desc: t.aboutPurposeDesignDesc },
    { icon: "○", title: t.aboutTimeless, desc: t.aboutTimelessDesc },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, rgba(128,128,128,0.8) 0%, transparent 70%)" }} />

      <div className="relative mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="anim-fade-right">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.aboutLabel}</p>
          <h2 className="mt-5 text-4xl font-light uppercase leading-[0.95] tracking-tight md:text-6xl">
            Research.<br /><span className="text-white/40">Function.</span><br />Identity.
          </h2>
        </div>
        <p className="anim-fade-right anim-delay-2 max-w-sm text-sm leading-7 text-white/45">
          Stone Island explores the relationship between material, innovation, and contemporary fashion through continuous research.
        </p>
      </div>

      <div className="anim-scale anim-delay-1 grid overflow-hidden border border-white/10 lg:grid-cols-2">
        <div className="group relative h-[420px] overflow-hidden md:h-[520px]">
          <img src="https://i.pinimg.com/736x/0f/84/12/0f8412fe9888d810238914e210e9b3dc.jpg" alt="Stone Island Fashion"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-white/60 to-transparent transition-all duration-700 group-hover:w-full" />
          <div className="absolute bottom-8 left-8">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">{t.aboutMaterialStudy}</p>
            <p className="mt-2 text-sm text-white/80">{t.aboutConstruction}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-zinc-950 p-8 md:p-10 lg:p-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.aboutPhilLabel}</p>
            <h3 className="mt-6 text-2xl font-light leading-tight md:text-3xl">
              {t.aboutPhil1}<br /><span className="text-white/45">{t.aboutPhil2}</span>
            </h3>
            <div className="mt-7 space-y-4 text-sm leading-7 text-white/45">
              <p>{t.aboutPhilDesc1}</p>
              <p>{t.aboutPhilDesc2}</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 border-t border-white/10 pt-7">
            <div className="group/stat">
              <p className="text-2xl font-light transition-colors duration-300 group-hover/stat:text-white">1982</p>
              <span className="text-[9px] uppercase tracking-widest text-white/30">{t.aboutFounded}</span>
            </div>
            <div className="border-l border-white/10 pl-5 group/stat">
              <p className="text-2xl font-light transition-colors duration-300 group-hover/stat:text-white">60+</p>
              <span className="text-[9px] uppercase tracking-widest text-white/30">{t.aboutMaterials}</span>
            </div>
            <div className="border-l border-white/10 pl-5 group/stat">
              <p className="text-2xl font-light transition-colors duration-300 group-hover/stat:text-white">IT</p>
              <span className="text-[9px] uppercase tracking-widest text-white/30">{t.aboutOrigin}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {values.map((item, i) => (
          <div key={item.title} className={`group/card relative border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/25 hover:bg-white/[0.04] ${i === 0 ? "anim-fade-up" : i === 1 ? "anim-fade-up anim-delay-2" : "anim-fade-up anim-delay-4"}`}>
            <div className="absolute left-0 top-0 h-px w-0 bg-white/50 transition-all duration-500 group-hover/card:w-full" />
            <span className="text-lg text-white/30 transition-colors duration-300 group-hover/card:text-white/60">{item.icon}</span>
            <h4 className="mt-4 text-sm font-medium uppercase tracking-wider text-white/80">{item.title}</h4>
            <p className="mt-3 text-xs leading-6 text-white/35">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
          <div className="h-1.5 w-1.5 rotate-45 border border-white/20" style={{ animation: "pulseGlow 3s ease-in-out infinite" }} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
        </div>
        <h3 className="text-xl font-light tracking-tight md:text-3xl">
          {t.aboutMaterial} <span className="text-white/40">{t.aboutFunction}</span> {t.aboutMovement}
        </h3>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">{t.aboutBottomDesc}</p>
      </div>
    </section>
  );
}

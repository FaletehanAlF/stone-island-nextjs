"use client";
import { useApp } from "../lib/AppContext";

export default function LogoMarquee() {
  const { t } = useApp();
  const brands = ["Supreme", "Nike", "New Balance", "Off-White", "Palm Angels", "CPFM", "Dior", "Goldwin", "Stüssy", "Comme des Garcons"];
  const items = [...brands, ...brands];

  return (
    <section className="border-t border-b border-white/10 bg-black py-10 overflow-hidden">
      <div className="mb-4 text-center">
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/25">{t.marqueeLabel}</span>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />
        <div className="marquee-track flex w-max">
          {items.map((brand, i) => (
            <div key={`${brand}-${i}`} className="mx-8 flex shrink-0 items-center gap-3">
              <span className="text-[1px] text-white/15">●</span>
              <span className="whitespace-nowrap text-sm font-light uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 hover:text-white/70">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

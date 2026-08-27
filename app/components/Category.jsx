"use client";
import { useApp } from "../lib/AppContext";

export default function Category() {
  const { t } = useApp();

  const categories = [
    { number: "01", name: "Jackets", count: 3, image: "https://i.pinimg.com/1200x/bb/8e/6c/bb8e6c185b2e08a0ffa3f36613ad0d43.jpg" },
    { number: "02", name: "Outerwear", count: 4, image: "https://i.pinimg.com/736x/d3/89/f6/d389f6dffa8a5d22828ee6d578477ba3.jpg" },
    { number: "03", name: "Sweatshirts", count: 2, image: "https://i.pinimg.com/1200x/5c/b1/56/5cb156c2094a228bcbf37a9ade9805db.jpg" },
    { number: "04", name: "T-Shirts", count: 4, image: "https://i.pinimg.com/1200x/6f/10/cf/6f10cfc9180b2e147167632a8337a5a7.jpg" },
    { number: "05", name: "Trousers", count: 2, image: "https://i.pinimg.com/1200x/26/c2/9c/26c29c68a2b18bed8ca4c659999e746a.jpg" },
    { number: "06", name: "Accessories", count: 4, image: "https://i.pinimg.com/736x/b4/81/18/b481186e1f6887b0cc02fc799f83c680.jpg" },
  ];

  const selectCategory = (category) => {
    window.dispatchEvent(new CustomEvent("product-category-change", { detail: category }));
    document.getElementById("produk")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="collections" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{t.catLabel}</p>
            <h2 className="mt-4 text-3xl font-light uppercase leading-none tracking-[-0.04em] md:text-5xl">
              {t.catTitle1}
              <br />
              <span className="text-white/40">{t.catTitle2}</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/40">{t.catDesc}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:gap-5">
          {categories.map((cat) => (
            <button
              key={cat.number}
              type="button"
              onClick={() => selectCategory(cat.name)}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl text-left bg-zinc-900"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-[1000ms] ease-out group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 transition-all duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)" }} />
              <span className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.2em] text-white/55">
                {cat.number}
              </span>
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <span className="text-[10px] font-medium text-white">{cat.count}</span>
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/60">products</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="mb-2 text-[8px] uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white/80 text-white/50">
                  {t.catCollection} {cat.number}
                </p>
                <h3 className="text-lg font-light uppercase tracking-[-0.02em] md:text-xl text-white">
                  {cat.name}
                </h3>
                <div className="mt-3 h-px w-0 bg-white/50 transition-all duration-700 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between pt-5 border-t border-white/10">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">{t.catSix}</span>
          <a href="#produk" onClick={() => selectCategory("All")}
            className="text-[9px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white">
            {t.catViewAll}
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useApp } from "../lib/AppContext";
import productNames from "../lib/productNames";
import productData from "../lib/productData";
import ProductDetail from "./ProductDetail";

const products = productData;

const filterKeys = ["prodFilterAll", "Jackets", "Outerwear", "Sweatshirts", "T-Shirts", "Trousers", "Accessories"];

function ProductCard({ product, t, lang, index, onOpen }) {
  const [hover, setHover] = useState(false);
  const names = productNames[lang] || productNames.en;
  const displayName = names[product.name] || product.name;

  return (
    <article
      className="group relative cursor-pointer product-grid-enter"
      style={{ animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img src={product.image} alt={displayName} loading="lazy"
          className={`h-full w-full object-cover transition-all duration-[900ms] ease-out ${hover ? "scale-105 opacity-100" : "scale-100 opacity-80"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
        <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white/50">{product.id}</span>
        <button type="button" aria-label={`View ${displayName}`} onClick={(e) => { e.stopPropagation(); onOpen(product); }}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white opacity-100 backdrop-blur-sm transition-all duration-500 md:opacity-0 md:group-hover:opacity-100">
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </button>
        <div className="absolute bottom-5 left-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">{product.category}</p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-white/10 py-5">
        <div>
          <h3 className="text-sm font-light tracking-tight text-white">{displayName}</h3>
          <p className="mt-2 text-[11px] text-white/50">{product.price}</p>
        </div>
        <div className="flex w-14 flex-col items-end justify-between">
          <span className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">01</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (<Star key={s} size={12} strokeWidth={0} fill="#FBBF24" className="text-yellow-400" />))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Produk() {
  const { t, lang } = useApp();
  const filters = filterKeys.map((k) => t[k] || k);
  const allLabel = t.prodFilterAll;
  const [activeFilter, setActiveFilter] = useState(allLabel);
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => { setActiveFilter(allLabel); }, [allLabel]);

  useEffect(() => {
    const handleCategoryChange = (event) => { setActiveFilter(event.detail); };
    window.addEventListener("product-category-change", handleCategoryChange);
    return () => window.removeEventListener("product-category-change", handleCategoryChange);
  }, []);

  // Map filter labels → English category names for product matching
  const categoryMap = {};
  filterKeys.forEach((key, i) => {
    const label = filters[i];
    categoryMap[label] = key === "prodFilterAll" ? "All" : key;
  });

  // Smooth transition when filter changes
  useEffect(() => {
    const filtered = activeFilter === allLabel
      ? products
      : products.filter((product) => product.category === categoryMap[activeFilter]);

    // Fade out
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setDisplayedProducts(filtered);
      setIsTransitioning(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [activeFilter, allLabel]);

  return (
    <section id="produk" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{t.prodLabel}</p>
            <h2 className="mt-5 text-4xl font-light uppercase leading-none tracking-[-0.04em] md:text-6xl">
              {t.prodTitle1}<br /><span className="text-white/40">{t.prodTitle2}</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-7 text-white/40">{t.prodDesc}</p>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">{t.prodCount}</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-14 flex items-center justify-between gap-4 border-y border-white/10 py-5">
          <div className="flex min-w-0 gap-6 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}
                className={`whitespace-nowrap text-[9px] uppercase tracking-[0.18em] transition-all duration-300 relative pb-1 ${activeFilter === filter ? "text-white" : "text-white/35 hover:text-white/60"}`}>
                {filter}
                {activeFilter === filter && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" style={{ animation: "filterSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }} />
                )}
              </button>
            ))}
          </div>
          <span className="hidden text-[9px] uppercase tracking-[0.18em] sm:block text-white/30">
            {String(displayedProducts.length).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </span>
        </div>

        {/* Product grid with smooth transitions */}
        <div ref={gridRef} className={`mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} t={t} lang={lang} index={index} onOpen={setSelectedProduct} />
          ))}
          {displayedProducts.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-white/40">{t.prodEmpty}</p>
          )}
        </div>

        <div className="mt-20 flex flex-col items-center border-t border-white/10 pt-10">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">{t.prodEnd}</p>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}

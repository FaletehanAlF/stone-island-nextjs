"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Star, Truck, Shield, RotateCcw } from "lucide-react";

export default function ProductDetail({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [phase, setPhase] = useState("enter"); // enter | visible | exit

  // Animate in
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(() => setPhase("visible"), 20);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  // Close handler
  const handleClose = useCallback(() => {
    setPhase("exit");
    setTimeout(onClose, 400);
  }, [onClose]);

  // ESC close
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const isReady = phase === "visible";
  const isExiting = phase === "exit";

  const ratings = [1, 2, 3, 4, 5];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-all duration-500 ease-out ${
          isReady && !isExiting ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backdropFilter: isReady && !isExiting ? "blur(12px)" : "blur(0px)",
          WebkitBackdropFilter: isReady && !isExiting ? "blur(12px)" : "blur(0px)",
        }}
      />

      {/* Modal */}
      <div
        className={`relative z-10 flex w-full max-w-[1080px] max-h-[92vh] overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950 shadow-[0_32px_64px_rgba(0,0,0,0.6)] transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isReady && !isExiting
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-[0.97]"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white hover:bg-black/70 cursor-pointer"
          aria-label="Close"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Content: side-by-side */}
        <div className="flex h-full w-full flex-col lg:flex-row">
          {/* Left: Image */}
          <div className="relative bg-black lg:w-[48%]">
            <div className="relative aspect-square h-full w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  No. {product.id}
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Details (NO SCROLL) */}
          <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:w-[52%] lg:p-9 overflow-hidden">
            {/* Top section */}
            <div>
              {/* Category */}
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">{product.category}</p>

              {/* Name */}
              <h2 className="mt-2 text-2xl font-light uppercase tracking-tight text-white sm:text-[28px] leading-tight">
                {product.name}
              </h2>

              {/* Price + Rating row */}
              <div className="mt-3 flex items-center gap-4">
                <p className="text-lg font-light text-white">{product.price}</p>
                <span className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {ratings.map((s) => (
                      <Star key={s} size={11} strokeWidth={0} fill="#FBBF24" />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/35">5.0</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-white/[0.07]" />

              {/* Material */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">Material</p>
              <p className="mt-1.5 text-[13px] text-white/50 leading-relaxed">{product.materialDetail}</p>
            </div>

            {/* Middle: Color + Size */}
            <div className="mt-5">
              {/* Color */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                Color — <span className="text-white/50">{product.colors[selectedColor]}</span>
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(i)}
                    className={`h-7 rounded-full border px-3 text-[10px] uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer ${
                      selectedColor === i
                        ? "border-white/40 bg-white/10 text-white"
                        : "border-white/[0.08] bg-transparent text-white/35 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>

              {/* Size */}
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">Size</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-9 min-w-[38px] items-center justify-center rounded-lg border px-3 text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        selectedSize === size
                          ? "border-white/40 bg-white/10 text-white"
                          : "border-white/[0.08] bg-transparent text-white/35 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Quantity + Cart + Trust */}
            <div className="mt-5">
              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-lg border border-white/[0.08]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center text-white/35 transition-colors hover:text-white cursor-pointer"
                  >
                    −
                  </button>
                  <span className="flex h-10 w-10 items-center justify-center text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="flex h-10 w-10 items-center justify-center text-white/35 transition-colors hover:text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98]">
                  Add to Cart
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.05] bg-white/[0.02] py-2">
                  <Truck size={13} strokeWidth={1.2} className="text-white/25" />
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">Free Shipping</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.05] bg-white/[0.02] py-2">
                  <Shield size={13} strokeWidth={1.2} className="text-white/25" />
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">2Y Warranty</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.05] bg-white/[0.02] py-2">
                  <RotateCcw size={13} strokeWidth={1.2} className="text-white/25" />
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">30 Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

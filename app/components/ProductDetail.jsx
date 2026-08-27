"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetail({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  // Close on ESC
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") handleClose();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const images = [product.image];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-350 ${
        isVisible && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      style={{ backdropFilter: isVisible && !isClosing ? "blur(8px)" : "blur(0px)" }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-black/80 transition-opacity duration-350 ${isVisible && !isClosing ? "opacity-100" : "opacity-0"}`} />

      {/* Modal */}
      <div
        className={`relative z-10 flex max-h-[90vh] w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-500 ${
          isVisible && !isClosing
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
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

        {/* Content */}
        <div className="flex flex-col overflow-y-auto lg:flex-row">
          {/* Left: Image */}
          <div className="relative flex flex-col bg-black lg:w-[50%]">
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Product ID badge */}
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">No. {product.id}</span>
              </div>

              {/* Category badge */}
              <div className="absolute right-16 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">{product.category}</span>
              </div>

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((p) => (p - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveImage((p) => (p + 1) % images.length)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-1 flex-col p-6 sm:p-8 lg:w-[50%] lg:p-10">
            {/* Title & Price */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">{product.category}</p>
              <h2 className="mt-2 text-2xl font-light uppercase tracking-tight text-white sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-3 text-xl font-light text-white">{product.price}</p>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} strokeWidth={0} fill="#FBBF24" className="text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-white/40">5.0 (128 reviews)</span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* Description */}
            <p className="text-sm leading-7 text-white/50">{product.description}</p>

            {/* Material */}
            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Material</p>
              <p className="mt-1.5 text-sm text-white/60">{product.materialDetail}</p>
            </div>

            {/* Color */}
            <div className="mt-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Color — <span className="text-white/50">{product.colors[selectedColor]}</span>
              </p>
              <div className="mt-3 flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(i)}
                    className={`flex h-8 items-center rounded-full border px-3 text-[10px] uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                      selectedColor === i
                        ? "border-white/50 bg-white/10 text-white"
                        : "border-white/10 bg-transparent text-white/40 hover:border-white/25 hover:text-white/70"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Size</p>
                <button className="text-[9px] uppercase tracking-[0.15em] text-white/30 underline underline-offset-4 decoration-white/20 transition-colors hover:text-white/60 cursor-pointer">
                  Size Guide
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 min-w-[40px] items-center justify-center rounded-lg border px-3 text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      selectedSize === size
                        ? "border-white/50 bg-white/10 text-white"
                        : "border-white/10 bg-transparent text-white/40 hover:border-white/25 hover:text-white/70"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-lg border border-white/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-white/40 transition-colors hover:text-white cursor-pointer"
                >
                  −
                </button>
                <span className="flex h-11 w-11 items-center justify-center text-sm text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="flex h-11 w-11 items-center justify-center text-white/40 transition-colors hover:text-white cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                <Truck size={16} strokeWidth={1.2} className="text-white/30" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                <Shield size={16} strokeWidth={1.2} className="text-white/30" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                <RotateCcw size={16} strokeWidth={1.2} className="text-white/30" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">30 Day Returns</span>
              </div>
            </div>

            {/* Care */}
            <div className="mt-6 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Care Instructions</p>
              <p className="mt-1.5 text-xs leading-5 text-white/40">{product.care}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

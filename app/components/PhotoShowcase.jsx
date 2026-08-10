"use client";

import { useEffect, useState } from "react";


const slides = [
  { image: "https://i.pinimg.com/736x/a0/bb/4b/a0bb4b3ef040952e3bfcfcff79dd4f69.jpg"},
  { image: "https://i.pinimg.com/1200x/38/83/32/388332b685eb2e3d751ba983470570b9.jpg"},
  { image: "https://i.pinimg.com/1200x/71/cb/5d/71cb5d9aed40be9d70ef3cc3ff21f700.jpg"},
  { image: "https://i.pinimg.com/736x/14/74/42/147442bba2c7dd0cc4098a5c254c546b.jpg",},
];

export default function PhotoShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{
              opacity: active === i ? 1 : 0,
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#18181b",
            }}
          />
        ))}

        {/* caption */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          {slides.map((slide, i) => (
            <p
              key={slide.caption}
              className="absolute bottom-6 left-6 right-6 text-sm uppercase tracking-[0.2em] text-white transition-all duration-700 ease-out"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {slide.caption}
            </p>
          ))}
        </div>

        {/* subtle border for a framed, premium feel */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>

      {/* indicator dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className="cursor-pointer py-2"
          >
            <span
              className="block h-[3px] rounded-full transition-all duration-300"
              style={{
                width: active === i ? "24px" : "10px",
                backgroundColor:
                  active === i ? "#ffffff" : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

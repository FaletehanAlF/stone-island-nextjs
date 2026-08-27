"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://i.pinimg.com/736x/a0/bb/4b/a0bb4b3ef040952e3bfcfcff79dd4f69.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/38/83/32/388332b685eb2e3d751ba983470570b9.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/71/cb/5d/71cb5d9aed40be9d70ef3cc3ff21f700.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/14/74/42/147442bba2c7dd0cc4098a5c254c546b.jpg",
  },
];

const INTERVAL = 5000;

export default function PhotoShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[260px]">
      {/* Main card */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0"
            style={{
              opacity: active === i ? 1 : 0,
              transform: active === i ? "scale(1)" : "scale(1.06)",
              transition:
                "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1), transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.65) 100%), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#18181b",
            }}
          />
        ))}

        {/* Frame border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}

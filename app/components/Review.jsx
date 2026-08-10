"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Arya Wibowo",
    location: "Jakarta, Indonesia",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Materialnya terasa premium dan detail produknya sangat rapi. Jaket yang saya pilih juga nyaman dipakai untuk aktivitas sehari-hari.",
  },
  {
    name: "Kenji Nakamura",
    location: "Tokyo, Japan",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "Design yang clean dan functional. Saya suka bagaimana setiap detail terlihat sederhana tetapi tetap punya karakter yang kuat.",
  },
  {
    name: "Luca Ferrara",
    location: "Milan, Italy",
    image: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    review:
      "Pengalaman berbelanja sangat baik. Produk terlihat persis seperti yang ditampilkan dan kualitas materialnya terasa sangat solid.",
  },
];

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={13}
          strokeWidth={1.2}
          fill={index < rating ? "currentColor" : "none"}
          className="text-white"
        />
      ))}
    </div>
  );
}

export default function Review() {
  return (
    <section
      id="review"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Field Notes
            </p>

            <h2 className="mt-5 text-4xl font-light uppercase leading-none tracking-[-0.04em] md:text-6xl">
              What They
              <br />
              <span className="text-white/40">Wear.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Rating rating={5} />

              <span className="text-sm text-white/60">
                4.9 / 5
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Feedback from people who experience the collection in their
              everyday environment.
            </p>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="group relative flex min-h-[390px] flex-col justify-between bg-zinc-950 p-7 transition-colors duration-500 hover:bg-zinc-900 md:p-9"
            >
              {/* TOP */}
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    0{index + 1} / Review
                  </span>

                  <Quote
                    size={22}
                    strokeWidth={1}
                    className="text-white/20 transition-colors duration-500 group-hover:text-white/50"
                  />
                </div>

                {/* RATING */}
                <div className="mt-10">
                  <Rating rating={review.rating} />
                </div>

                {/* REVIEW TEXT */}
                <blockquote className="mt-7 text-lg font-light leading-8 tracking-[-0.015em] text-white/80">
                  “{review.review}”
                </blockquote>
              </div>

              {/* USER */}
              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">

                {/* PROFILE */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-11 w-11 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />

                <div>
                  <p className="text-sm text-white">
                    {review.name}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                    {review.location}
                  </p>
                </div>

                {/* VERIFIED */}
                <span className="ml-auto text-[8px] uppercase tracking-[0.15em] text-white/30">
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Customer experience
          </p>

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            2,000+ customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
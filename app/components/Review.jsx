"use client";
import { Star, Quote } from "lucide-react";
import { useApp } from "../lib/AppContext";

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={1.2} fill={i < rating ? "currentColor" : "none"} className="text-white" />
      ))}
    </div>
  );
}

export default function Review() {
  const { t } = useApp();
  const reviews = t.reviews;

  return (
    <section id="review" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{t.reviewLabel}</p>
            <h2 className="mt-4 text-3xl font-light uppercase leading-none tracking-[-0.04em] md:text-5xl">{t.reviewTitle1}<br /><span className="text-white/40">{t.reviewTitle2}</span></h2>
          </div>
          <div className="max-w-sm">
            <div className="flex items-center gap-3"><Rating rating={5} /><span className="text-sm text-white/60">4.9 / 5</span></div>
            <p className="mt-3 text-sm leading-6 text-white/40">{t.reviewDesc}</p>
          </div>
        </div>
        <div className="mt-12 -mx-6 px-6 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4" style={{ minWidth: "max-content" }}>
            {reviews.map((review, index) => (
              <article key={review.name} className="group relative flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:w-[340px]">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">0{index + 1} {t.reviewNum}</span>
                    <Quote size={18} strokeWidth={1} className="text-white/15 transition-colors duration-500 group-hover:text-white/40" />
                  </div>
                  <div className="mt-6"><Rating rating={5} /></div>
                  <blockquote className="mt-5 text-[13px] font-light leading-6 tracking-[-0.01em] text-white/70">&ldquo;{review.review}&rdquo;</blockquote>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img src={review.image || `https://i.pravatar.cc/150?img=${index + 10}`} alt={review.name} className="h-9 w-9 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                  <div>
                    <p className="text-xs text-white">{review.name}</p>
                    <p className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-white/30">{review.location}</p>
                  </div>
                  <span className="ml-auto text-[7px] uppercase tracking-[0.15em] text-white/25">{t.reviewVerified}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">{t.reviewExp}</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">{t.reviewCount}</span>
        </div>
      </div>
    </section>
  );
}

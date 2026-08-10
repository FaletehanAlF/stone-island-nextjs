"use client";

import { ArrowDown, Star } from "lucide-react";

const heroImage =
  "https://i.pinimg.com/1200x/03/cf/b6/03cfb6131d606c42eb979eea43d8b785.jpg";

const people = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=13",
  "https://i.pravatar.cc/100?img=14",
];

const collaborations = [
  "https://i.pinimg.com/1200x/fb/4f/58/fb4f58a8bca46e97a589be8f9fadf983.jpg",
  "https://i.pinimg.com/1200x/39/a4/2b/39a42b751fca68ceaa172febb4cf96ca.jpg",
  "https://i.pinimg.com/736x/63/93/1b/63931bfeb9bb6d50ef8c0b4f237a3a9d.jpg",
  "https://i.pinimg.com/736x/eb/e0/e6/ebe0e68a6872f9eea1d9f4724194ebf2.jpg",
];

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("produk");

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[42rem]
        sm:min-h-svh
        flex-col
        overflow-hidden
        bg-black
        text-white
        pt-28
        pb-10
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/95" />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          shrink-0
          flex-col
          items-center
          px-4
          pt-4
          text-center
          sm:px-6
          sm:pt-8
          md:pt-10
          lg:pt-14
        "
      >
        {/* LABEL */}
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/50
            sm:text-[9px]
          "
        >
          Stone Island Collection
        </p>

        {/* TITLE */}
        <h1
          className="
            mt-3
            text-[32px]
            font-light
            uppercase
            leading-[0.95]
            tracking-[-0.05em]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Built for
          <br />

          <span className="text-white/45">
            modern explorers
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3
            max-w-sm
            text-[11px]
            leading-5
            text-white/50
            sm:text-xs
            md:text-sm
            md:leading-6
          "
        >
          Iconic streetwear crafted with innovative materials,
          timeless design, and a passion for pushing fashion
          beyond boundaries.
        </p>

        {/* BUTTON */}
        <button
          type="button"
          onClick={scrollToProducts}
          className="
            group
            mt-5
            flex
            cursor-pointer
            items-center
            gap-3
            bg-white
            px-6
            py-3
            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-black
            transition-all
            duration-300
            hover:bg-white/80
            sm:text-[9px]
          "
        >
          Explore Collection

          <ArrowDown
            size={13}
            strokeWidth={1.3}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </button>

        {/* RATING */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-3
          "
        >
          {/* PROFILE */}
          <div className="flex -space-x-2">
            {people.map((person, index) => (
              <img
                key={index}
                src={person}
                alt="Customer"
                className="
                  h-6
                  w-6
                  rounded-full
                  border
                  border-black
                  object-cover
                  grayscale
                  sm:h-7
                  sm:w-7
                "
              />
            ))}
          </div>

          {/* STARS */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={9}
                  fill="white"
                  strokeWidth={1}
                  className="text-white"
                />
              ))}
            </div>

            <span className="text-[8px] text-white/40 sm:text-[9px]">
              2,000+ customers
            </span>
          </div>
        </div>
      </div>

      {/* COLLABORATION */}
      <div
        className="
          relative
          mt-auto
          z-10
          shrink-0
          pt-10
          px-4
          sm:px-6
          md:pt-12
        "
      >
        <div className="mx-auto max-w-[950px]">
          {/* TITLE */}
          <div className="mb-5 text-center">
            <p
              className="
                text-[7px]
                uppercase
                tracking-[0.4em]
                text-white/35
                sm:text-[8px]
              "
            >
              Selected Collaborations
            </p>

            <h2
              className="
                mt-2
                text-[11px]
                font-light
                uppercase
                tracking-[0.22em]
                text-white/65
                sm:text-xs
                md:text-sm
              "
            >
              Creative Partnerships
            </h2>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:gap-4
              md:grid-cols-4
              md:gap-5
            "
          >
            {collaborations.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  h-14
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/30
                  sm:h-16
                "
              >
                <img
                  src={image}
                  alt={`Collaboration ${index + 1}`}
                  className="
                    h-full
                    w-full
                    object-cover
                    opacity-55
                    grayscale
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:opacity-90
                    group-hover:grayscale-0
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="relative mt-5 shrink-0 px-4 sm:px-6">
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            items-center
            justify-between
          "
        >
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            Jakarta — Indonesia
          </p>

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            Scroll ↓
          </p>
        </div>
      </div>
    </section>
  );
}

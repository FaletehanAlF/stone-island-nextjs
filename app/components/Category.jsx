"use client";

export default function Category() {
  const categories = [
    {
      number: "01",
      name: "Jackets",
      image:
        "https://i.pinimg.com/1200x/bb/8e/6c/bb8e6c185b2e08a0ffa3f36613ad0d43.jpg",
    },
    {
      number: "02",
      name: "Outerwear",
      image:
        "https://i.pinimg.com/736x/d3/89/f6/d389f6dffa8a5d22828ee6d578477ba3.jpg",
    },
    {
      number: "03",
      name: "Sweatshirts",
      image:
        "https://i.pinimg.com/1200x/5c/b1/56/5cb156c2094a228bcbf37a9ade9805db.jpg",
    },
    {
      number: "04",
      name: "T-Shirts",
      image:
        "https://i.pinimg.com/1200x/6f/10/cf/6f10cfc9180b2e147167632a8337a5a7.jpg",
    },
    {
      number: "05",
      name: "Trousers",
      image:
        "https://i.pinimg.com/1200x/26/c2/9c/26c29c68a2b18bed8ca4c659999e746a.jpg",
    },
    {
      number: "06",
      name: "Accessories",
      image:
        "https://i.pinimg.com/736x/b4/81/18/b481186e1f6887b0cc02fc799f83c680.jpg",
    },
  ];

  const selectCategory = (category) => {
    window.dispatchEvent(
      new CustomEvent("product-category-change", { detail: category })
    );

    document.getElementById("produk")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="collections"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Collection
            </p>

            <h2 className="mt-5 text-4xl font-light uppercase leading-none tracking-[-0.04em] md:text-6xl">
              Explore
              <br />
              <span className="text-white/40">Categories.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            Explore technical garments developed around movement, material
            and everyday function.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.number}
              type="button"
              onClick={() => selectCategory(category.name)}
              className="group relative aspect-[4/5] w-full overflow-hidden bg-zinc-950 text-left"
            >
              {/* IMAGE */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-[1000ms] ease-out group-hover:scale-105 group-hover:opacity-100"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 transition-all duration-700 group-hover:from-black/80" />

              {/* TOP NUMBER */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                  Category
                </span>

                <span className="text-[10px] text-white/40">
                  {category.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-500 group-hover:text-white/70">
                      Collection {category.number}
                    </p>

                    <h3 className="text-2xl font-light uppercase tracking-[-0.02em] md:text-3xl">
                      {category.name}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-black">
                    <span className="text-lg font-light">
                      ↗
                    </span>
                  </div>
                </div>

                {/* HOVER LINE */}
                <div className="mt-5 h-px w-0 bg-white/60 transition-all duration-700 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Six categories
          </p>

          <a
            href="#produk"
            onClick={() => selectCategory("All")}
            className="text-[9px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            View all products →
          </a>
        </div>
      </div>
    </section>
  );
}

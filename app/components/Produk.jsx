"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Soft Shell-R",
    category: "Outerwear",
    price: "Rp 12.900.000",
    image:
      "https://i.pinimg.com/1200x/dc/5e/2b/dc5e2b43fa4d953142b9145bbb67ceab.jpg",
  },
  {
    id: "02",
    name: "Nylon Metal Jacket",
    category: "Jackets",
    price: "Rp 15.400.000",
    image:
      "https://i.pinimg.com/1200x/d8/ca/88/d8ca88b05111fffedf9402ebd5f9ec2a.jpg",
  },
  {
    id: "03",
    name: "Ghost Piece Overshirt",
    category: "Overshirt",
    price: "Rp 9.750.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6h_1Jyoxci49RxKFtTHwGtynN7JEEnmUuedXnnFAOI0BwFibnqc7SmlV&s=10",
  },
  {
    id: "04",
    name: "Compass Hoodie",
    category: "Sweatshirts",
    price: "Rp 5.200.000",
    image:
      "https://i.pinimg.com/1200x/b1/2f/0d/b12f0df5424556f6f197ac494cd6485f.jpg",
  },
  {
    id: "05",
    name: "Cargo Pants",
    category: "Trousers",
    price: "Rp 6.400.000",
    image:
      "https://i.pinimg.com/1200x/60/5f/0f/605f0fc8d7f798c4d5a4d6f947a5328b.jpg",
  },
  {
    id: "06",
    name: "Technical Vest",
    category: "Outerwear",
    price: "Rp 8.900.000",
    image:
      "https://i.pinimg.com/1200x/ed/86/da/ed86da85324bae435bd82a50ece8863a.jpg",
  },
  {
    id: "07",
    name: "Organic Cotton Jersey",
    category: "T-Shirts",
    price: "Rp 2.850.000",
    image:
      "https://stoneisland-cdn.thron.com/delivery/public/image/stoneisland/L2S152100007S0500V0001_F/ppk73x/std/768x1024/2100007-organic-cotton-jersey,-photo.jpg?scalemode=centered&adjustcrop=reduce&quality=90&format=avif",
  },
  {
    id: "08",
    name: "Garment Dyed Jacket",
    category: "Jackets",
    price: "Rp 11.300.000",
    image:
      "https://i.pinimg.com/1200x/ba/cd/84/bacd849d6a830e4ec8598862bc673e51.jpg",
  },
  {
    id: "09",
    name: "Technical Overshirt",
    category: "Overshirt",
    price: "Rp 10.200.000",
    image:
      "https://www.zoofashions.com/cdn/shop/files/Stone-Island-Blue-Canvas-Weave-Overshirt-K2S151200004-V0020-1.jpg?v=1753465866&width=1200",
  },
  {
    id: "10",
    name: "Lightweight Parka",
    category: "Outerwear",
    price: "Rp 13.800.000",
    image:
      "https://i.pinimg.com/1200x/9c/5b/74/9c5b74b4f85422cdf7e0414f11a47c2c.jpg",
  },
  {
    id: "11",
    name: "Utility Shirt",
    category: "Shirts",
    price: "Rp 4.900.000",
    image:
      "https://i.pinimg.com/736x/62/63/01/626301c930dd7c7a4001bbab9250a9d1.jpg",
  },
  {
    id: "12",
    name: "Garment Dyed Sweat",
    category: "Sweatshirts",
    price: "Rp 5.600.000",
    image:
      "https://i.pinimg.com/1200x/91/3e/45/913e45de2a9a41d081f36ed8be722734.jpg",
  },
  {
    id: "13",
    name: "Field Jacket",
    category: "Jackets",
    price: "Rp 14.100.000",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTE3spr2irbdhfzrDDIvCz5HrMt5CDwCALaO70d3G_aKU3nKeYHyeO0ZY5_mGj6M1sFJ3Me3MjxmC31t-_Trfdk3H_LpgYAWNmKcEXZ0it6mpqz_UMpPeQ6G98",
  },
  {
    id: "14",
    name: "Technical Cargo",
    category: "Trousers",
    price: "Rp 7.200.000",
    image:
      "https://i.pinimg.com/1200x/1b/7e/1e/1b7e1eccb34b56905b5ff9b9707aceca.jpg",
  },
  {
    id: "15",
    name: "Compass Knit",
    category: "Knitwear",
    price: "Rp 6.800.000",
    image:
      "https://i.pinimg.com/1200x/ab/c0/87/abc087520a84b83f45318a6d0bc33fe7.jpg",
  },
  {
    id: "16",
    name: "Nylon Down Jacket",
    category: "Outerwear",
    price: "Rp 16.500.000",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStP88IEn_4gDI_xrQxYrE1C_2QTYXGH63sf4jQ6a35-icZ19rhWJIadD1jKkuoUD93t59E0nQDuKN0dwgqH9I4OggeOfy_SxSNjEPo1vGMO4jbt8dw2-rkpw",
  },
  {
    id: "17",
    name: "Compass Logo Cap",
    category: "Accessories",
    price: "Rp 2.850.000",
    image:
      "https://stoneisland-cdn.thron.com/delivery/public/image/stoneisland/L2S159100011S0076V0059_F/ppk73x/std/768x1024/9100011-nylon-metal-in-econylr,-photo.jpg?scalemode=centered&adjustcrop=reduce&quality=90&format=avif",
  },

  {
    id: "18",
    name: "Compass Patch Beanie",
    category: "Accessories",
    price: "Rp 2.450.000",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHpVJN2JnnxJRSYV-6xNUIhE14mV2LaeKg31_ti7xo0bJeuGxr",
  },

  {
    id: "19",
    name: "Technical Nylon Bag",
    category: "Accessories",
    price: "Rp 6.750.000",
    image:
      "https://stoneisland-cdn.thron.com/delivery/public/image/stoneisland/L1S159200015S0251V0024_F/ppk73x/std/768x1024/9200015-coated-nylon-metal-in-econylr,-photo.jpg?scalemode=centered&adjustcrop=reduce&quality=90&format=avif",
  },

  {
    id: "20",
    name: "Logo Badge Wallet",
    category: "Accessories",
    price: "Rp 3.950.000",
    image:
      "https://stoneisland-cdn.thron.com/delivery/public/image/stoneisland/K2S159500007S0209V002B_F/ppk73x/std/768x1024/9500002-rubberised-silicone,-photo.jpg?scalemode=centered&adjustcrop=reduce&quality=90&format=avif",
  },
  {
    id: "21",
    name: "Compass Logo T-Shirt",
    category: "T-Shirts",
    price: "Rp 3.950.000",
    image:
      "https://images.voila.id/pr:sharp/rs:fit:1080:0/plain/https%3A%2F%2Fassets.voila.id%2Fvoila%2Fimages%2Fproduct%2Fstone-island%2F1product-81152NS81V0029-Xms-2024-12-05T1331360700.jpeg@webp",
  },
  {
    id: "22",
    name: "Garment Dyed T-Shirt",
    category: "T-Shirts",
    price: "Rp 3.950.000",
    image:
      "https://eu.kith.com/cdn/shop/files/SI801523757-V0192-FRONT.jpg?v=1710924344&width=1920",
  },
  {
    id: "23",
    name: "Cotton Compass T-Shirt",
    category: "T-Shirts",
    price: "Rp 3.950.000",
    image:
      "https://stoneisland-cdn.thron.com/delivery/public/image/stoneisland/L2S152100026S0057V0189_F/ppk73x/std/768x1024/2100026-organic-cotton-jersey-fissato-effect,-photo.jpg?scalemode=centered&adjustcrop=reduce&quality=90&format=avif",
  },
];

const filters = [
  "All",
  "Jackets",
  "Outerwear",
  "Sweatshirts",
  "T-Shirts",
  "Trousers",
  "Accessories",
];

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className="group relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-[900ms] ease-out ${
            hover ? "scale-105 opacity-100" : "scale-100 opacity-80"
          }`}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

        {/* NUMBER */}
        <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white/50">
          {product.id}
        </span>

        {/* DETAIL BUTTON */}
        <button
          type="button"
          aria-label={`View ${product.name}`}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white opacity-100 backdrop-blur-sm transition-all duration-500 md:opacity-0 md:group-hover:opacity-100"
        >
          <ArrowUpRight size={15} strokeWidth={1.4} />
        </button>

        {/* CATEGORY ON IMAGE */}
        <div className="absolute bottom-5 left-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
            {product.category}
          </p>
        </div>
      </div>

      {/* INFO */}
      <div className="flex items-start justify-between gap-4 border-t border-white/10 py-5">
        <div>
          <h3 className="text-sm font-light tracking-tight text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-[11px] text-white/40">{product.price}</p>
        </div>

        <div className="flex w-14 flex-col items-end justify-between">
          <span className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
            01
          </span>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={12}
                strokeWidth={0}
                fill="#FBBF24"
                className="text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Produk() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleCategoryChange = (event) => {
      setActiveFilter(event.detail);
    };

    window.addEventListener("product-category-change", handleCategoryChange);

    return () => {
      window.removeEventListener(
        "product-category-change",
        handleCategoryChange,
      );
    };
  }, []);

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section
      id="produk"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Collection 01
            </p>

            <h2 className="mt-5 text-4xl font-light uppercase leading-none tracking-[-0.04em] md:text-6xl">
              New
              <br />
              <span className="text-white/40">Arrivals.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-white/40">
              Technical garments developed through material research and
              functional design.
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              16 Products / 2026
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="mt-14 flex items-center justify-between gap-4 border-y border-white/10 py-5">
          <div className="flex min-w-0 gap-6 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`whitespace-nowrap text-[9px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/35 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.18em] text-white/30 sm:block">
            {String(filteredProducts.length).padStart(2, "0")} /{" "}
            {String(products.length).padStart(2, "0")}
          </span>
        </div>

        {/* PRODUCTS */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {filteredProducts.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-white/40">
              No products are currently available in this category.
            </p>
          )}
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center border-t border-white/10 pt-10">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            End of collection
          </p>
        </div>
      </div>
    </section>
  );
}

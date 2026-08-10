export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
              Stone Island Concept
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
              Technical garments designed around material, function and
              everyday movement.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#produk"
                className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                Collection
              </a>

              <a
                href="#about"
                className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:care@stoneislandconcept.id"
                className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                stoneisland@gmail.com
              </a>

              <p className="text-sm text-white/35">
                Jakarta, Indonesia
              </p>

              <p className="text-sm text-white/35">
                Mon — Sat · 09:00 — 18:00 WIB
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10" />

        {/* LARGE BRAND */}
        <div className="overflow-hidden pt-10">
          <h2 className="w-full text-center text-[14vw] font-semibold uppercase leading-[0.78] tracking-[-0.07em] text-white/90 md:text-[11vw]">
            STONE ISLAND
          </h2>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 py-7 text-center">
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
            Student Concept Project
          </p>

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
            © 2026 Stone Island Concept Store
          </p>
        </div>

      </div>
    </footer>
  );
}
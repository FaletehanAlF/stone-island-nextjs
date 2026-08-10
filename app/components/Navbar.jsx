"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const logoUrl =
  "https://i.pinimg.com/736x/76/02/a3/7602a3953ed0ea9c12b521d57bd0fe35.jpg";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Collections", id: "collections" },
  { name: "Shop", id: "produk" },
  { name: "Review", id: "review" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={
          scrolled
            ? "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/85 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:px-5"
            : "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md transition-all duration-500 sm:px-5"
        }
      >
        {/* LOGO */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="group flex cursor-pointer items-center"
        >
          <img
            src={logoUrl}
            alt="Stone Island"
            className="h-8 w-auto max-w-[105px] object-contain transition-opacity duration-300 group-hover:opacity-75 sm:h-9 sm:max-w-[115px]"
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="group relative cursor-pointer text-[9px] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* DESKTOP ACTION */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/login"
            className="cursor-pointer rounded-full px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-white"
          >
            Login
          </a>

          <a
            href="/register"
            className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Register
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X size={20} strokeWidth={1.4} />
          ) : (
            <Menu size={20} strokeWidth={1.4} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={
          open
            ? "mx-auto mt-2 max-h-[calc(100svh-5.5rem)] max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-black/95 opacity-100 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden"
            : "mx-auto mt-2 max-h-0 max-w-6xl overflow-hidden rounded-3xl border border-transparent bg-black/95 opacity-0 transition-all duration-300 md:hidden"
        }
      >
        <nav className="flex flex-col p-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="flex cursor-pointer items-center justify-between border-b border-white/10 px-4 py-4 text-left text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 last:border-b-0 hover:text-white"
            >
              <span>{item.name}</span>

              <span className="text-white/25">→</span>
            </button>
          ))}

          <div className="grid grid-cols-2 gap-2 p-2 pt-4">
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-full border border-white/15 py-3 text-center text-[9px] uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Login
            </a>

            <a
              href="/register"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-full bg-white py-3 text-center text-[9px] uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white/80"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

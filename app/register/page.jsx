"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import PhotoShowcase from "../components/PhotoShowcase";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -5, y: px * 5 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Semua field harus diisi!");
      return;
    }

    alert("Akun berhasil dibuat!");

    setUsername("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div
      className={`${poppins.className} min-h-screen w-full bg-black lg:grid lg:grid-cols-2`}
    >
      {/* LEFT — BRAND PANEL */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-zinc-950 px-14 py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <span className="relative text-[11px] uppercase tracking-[0.35em] text-zinc-500">
          Est. Identity
        </span>

        <div className="relative flex flex-1 items-center justify-center">
          <PhotoShowcase />
        </div>

        <div className="relative">
          <span className="block text-white text-sm font-semibold tracking-[0.3em] mb-3">
            STONE ISLAND
          </span>
          <p className="text-2xl xl:text-3xl font-light leading-snug text-white">
            Join the archive,
            <br />
            wear the identity.
          </p>
          <p className="mt-4 text-sm text-zinc-500 max-w-xs">
            Create an account to save pieces, track orders, and get early
            access to drops.
          </p>
        </div>
      </div>

      {/* RIGHT — FORM PANEL */}
      <div className="flex min-h-screen items-center justify-center bg-white px-5 py-14 sm:px-8">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          className="w-full max-w-[400px]"
        >
          <div className="mb-10 lg:hidden">
            <span className="text-black text-base font-semibold tracking-[0.3em]">
              STONE ISLAND
            </span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
            02 — Register
          </span>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-black">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Fill in your details to get started.
          </p>

          <form onSubmit={handleRegister} className="mt-10 space-y-7">
            <div className="group">
              <label
                htmlFor="username"
                className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-black transition-colors duration-200"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Create a username"
                required
                autoComplete="username"
                className="mt-2.5 w-full border-0 border-b border-zinc-300 bg-transparent pb-2.5 text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200 focus:border-b-2 focus:border-black"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-black transition-colors duration-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="mt-2.5 w-full border-0 border-b border-zinc-300 bg-transparent pb-2.5 text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200 focus:border-b-2 focus:border-black"
              />
            </div>

            <div className="group">
              <label
                htmlFor="password"
                className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-black transition-colors duration-200"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  autoComplete="new-password"
                  className="mt-2.5 w-full border-0 border-b border-zinc-300 bg-transparent pb-2.5 pr-9 text-sm text-black placeholder-zinc-400 outline-none transition-all duration-200 focus:border-b-2 focus:border-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-0 top-1 text-zinc-400 hover:text-black transition-colors duration-200 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-black py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-200 hover:shadow-[0_14px_36px_-8px_rgba(0,0,0,0.7)] active:translate-y-[1px] active:shadow-[0_4px_14px_-6px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              Create Account
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-9 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-black underline underline-offset-4 hover:text-zinc-600 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

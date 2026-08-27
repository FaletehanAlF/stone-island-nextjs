"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import PhotoShowcase from "../components/PhotoShowcase";
import { useApp } from "../lib/AppContext";

export default function RegisterPage() {
  const { t } = useApp();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert(t.regAlertEmpty);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(t.regAlertSuccess);
      setUsername("");
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setLoading(false);
      window.location.href = "/login";
    }, 800);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black text-white">
      {/* Left Panel */}
      <div className="relative hidden lg:flex lg:w-[45%] flex-col overflow-hidden bg-zinc-950">
        <div className="relative z-10 px-10 pt-10">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition-colors text-white/30 hover:text-white/60 anim-fade-up"
          >
            <span>&larr;</span> {t.loginBack}
          </Link>
        </div>
        <div className="relative z-10 flex flex-1 items-center justify-center px-10 anim-scale anim-delay-2">
          <PhotoShowcase />
        </div>
        <div className="relative z-10 px-10 pb-10 anim-fade-up anim-delay-4">
          <span className="block text-[10px] uppercase tracking-[0.3em] mb-3 text-white/20">
            {t.regJoin}
          </span>
          <p className="text-sm max-w-xs leading-relaxed text-white/20">
            {t.regBottomDesc}
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex h-screen w-full items-center justify-center overflow-hidden px-8 sm:px-12 lg:w-[55%]">
        <div className="w-full max-w-[420px]">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition-colors lg:hidden text-white/30 hover:text-white/60"
          >
            <span>&larr;</span> {t.loginBack}
          </Link>

          <div className="mb-6 lg:hidden">
            <span className="text-sm font-semibold tracking-[0.3em] text-white/70">
              STONE ISLAND
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 anim-fade-up">
            {t.regLabel}
          </span>
          <h2 className="mt-3 text-3xl font-light tracking-tight anim-fade-up anim-delay-1">{t.regTitle}</h2>
          <p className="mt-2 text-sm text-white/35 anim-fade-up anim-delay-2 leading-relaxed">
            {t.regDesc}
          </p>

          {/* Social Register */}
          <div className="grid grid-cols-2 gap-3 mt-8 anim-fade-up anim-delay-3">
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4 anim-fade-up anim-delay-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/15 shrink-0">
              {t.regOr}
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5 anim-fade-up anim-delay-5">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/35 mb-2">
                {t.regUsername}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t.regUsernamePh}
                required
                autoComplete="username"
                className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-all focus:border-white/50"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/35 mb-2">
                {t.regEmail}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.regEmailPh}
                required
                autoComplete="email"
                className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-all focus:border-white/50"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/35 mb-2">
                {t.regPass}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.regPassPh}
                  required
                  autoComplete="new-password"
                  className="w-full border-0 border-b border-white/15 bg-transparent pb-3 pr-10 text-sm text-white outline-none transition-all focus:border-white/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/25 transition-colors hover:text-white/50 cursor-pointer"
                  aria-label="Toggle password"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <>
                  {t.regBtn} <span>&rarr;</span>
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/30 anim-fade-up anim-delay-6">
            {t.regHasAccount}{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 text-white/60 transition-colors hover:text-white"
            >
              {t.regLogin}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

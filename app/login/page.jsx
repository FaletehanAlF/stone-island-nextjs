"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "../lib/AppContext";
import PhotoShowcase from "../components/PhotoShowcase";

export default function Login() {
  const { t } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert(t.loginAlertEmpty);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(t.loginAlertSuccess);
      setLoading(false);
      window.location.href = "/";
    }, 800);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black text-white">
      {/* ─── Left Panel ─── */}
      <div className="relative hidden w-[45%] flex-col justify-between p-10 lg:flex bg-zinc-950">
        <Link
          href="/"
          className="relative z-20 flex items-center gap-2 text-xs tracking-widest uppercase transition-colors text-white/40 hover:text-white/70 anim-fade-up"
        >
          <span>&larr;</span>
          <span>{t.loginBack}</span>
        </Link>

        <div className="relative z-10 flex flex-1 items-center justify-center anim-scale anim-delay-2">
          <PhotoShowcase />
        </div>

        <div className="relative z-20 anim-fade-up anim-delay-4">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3 text-white/30">
            {t.loginEst}
          </p>
          <p className="max-w-[260px] text-xs leading-7 text-white/30">
            {t.loginBottomDesc}
          </p>
        </div>
      </div>

      {/* ─── Right Panel ─── */}
      <div className="flex w-full flex-col items-center justify-center overflow-hidden px-8 sm:px-14 lg:px-16 lg:w-[55%]">
        {/* Mobile Header */}
        <div className="mb-6 flex w-full flex-col gap-3 sm:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors text-white/30 hover:text-white/60"
          >
            <span>&larr;</span>
            <span>{t.loginBack}</span>
          </Link>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Stone Island
            </p>
            <p className="mt-2 text-3xl font-light uppercase tracking-tight anim-fade-up">
              {t.loginTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/40 anim-fade-up anim-delay-1">
              {t.loginDesc}
            </p>
          </div>
        </div>

        <div className="w-full max-w-[440px]">
          {/* Desktop Title */}
          <div className="mb-8 hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 anim-fade-up">
              {t.loginLabel}
            </p>
            <h1 className="mt-4 text-4xl font-light uppercase tracking-tight anim-fade-up anim-delay-1">
              {t.loginTitle}
            </h1>
            <p className="mt-3 max-w-[300px] text-sm leading-7 text-white/40 anim-fade-up anim-delay-2">
              {t.loginDesc}
            </p>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 anim-fade-up anim-delay-3">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
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
              className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4 anim-fade-up anim-delay-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 shrink-0">
              {t.loginOr}
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 anim-fade-up anim-delay-5">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35">
                {t.loginEmailLabel}
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none transition-colors focus:border-white/50"
                placeholder={t.loginEmailPh}
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35">
                {t.loginPassLabel}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none transition-colors focus:border-white/50"
                placeholder={t.loginPassPh}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] py-4 text-xs uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <>
                  <span>{t.loginBtn}</span>
                  <span>&rarr;</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center anim-fade-up anim-delay-6">
            <p className="text-xs text-white/25">
              {t.loginNoAccount}{" "}
              <Link
                href="/register"
                className="uppercase tracking-wider text-white/50 transition-colors hover:text-white"
              >
                {t.loginCreate}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // VALIDASI KOSONG
    if (!name || !email || !message) {
      alert("Mohon isi semua data terlebih dahulu.");
      return;
    }

    // VALIDASI EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Mohon masukkan alamat email yang valid.");
      return;
    }

    // BERHASIL
    alert("Pesan berhasil dikirim! Terima kasih telah menghubungi kami.");

    // RESET FORM
    form.reset();
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1100px]">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Client Service
          </p>

          <h2 className="mt-3 text-3xl font-light uppercase tracking-[-0.04em] sm:text-4xl">
            Get in touch.
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* INFORMATION */}
          <div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              Questions about sizing, fabric care, orders or our collection?
              Our client service team is ready to help.
            </p>

            <div className="mt-8 space-y-5">

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <Mail
                  size={16}
                  strokeWidth={1.2}
                  className="mt-0.5 text-white/50"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Email
                  </p>

                  <a
                    href="mailto:stobeisland@gmail.com"
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    stoneisland@gmail.com
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-4">
                <Clock
                  size={16}
                  strokeWidth={1.2}
                  className="mt-0.5 text-white/50"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Client Service
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Mon — Sat · 09:00 — 18:00 WIB
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={16}
                  strokeWidth={1.2}
                  className="mt-0.5 text-white/50"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="text-[9px] uppercase tracking-[0.2em] text-white/40"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60"
              />
            </div>

            {/* EMAIL */}
            <div className="mt-7">
              <label
                htmlFor="email"
                className="text-[9px] uppercase tracking-[0.2em] text-white/40"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60"
              />
            </div>

            {/* MESSAGE */}
            <div className="mt-7">
              <label
                htmlFor="message"
                className="text-[9px] uppercase tracking-[0.2em] text-white/40"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="mt-3 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="group mt-8 flex items-center gap-3 bg-white px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/80"
            >
              Send Message

              <ArrowUpRight
                size={13}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
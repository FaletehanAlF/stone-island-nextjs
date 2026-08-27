"use client";

import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { useApp } from "../lib/AppContext";

export default function Contact() {
  const { t } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) { alert(t.contactAlertEmpty); return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { alert(t.contactAlertEmail); return; }
    alert(t.contactAlertSuccess);
    form.reset();
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">{t.contactLabel}</p>
          <h2 className="mt-3 text-3xl font-light uppercase tracking-[-0.04em] sm:text-4xl">{t.contactTitle}</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="max-w-sm text-sm leading-6 text-white/50">{t.contactDesc}</p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <Mail size={16} strokeWidth={1.2} className="mt-0.5 text-white/50" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">{t.contactEmailLabel}</p>
                  <a href="mailto:stoneisland@gmail.com" className="mt-1 block text-sm text-white/70 transition-colors hover:text-white">stoneisland@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={16} strokeWidth={1.2} className="mt-0.5 text-white/50" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">{t.contactHoursLabel}</p>
                  <p className="mt-1 text-sm text-white/70">{t.contactHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} strokeWidth={1.2} className="mt-0.5 text-white/50" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">{t.contactLocationLabel}</p>
                  <p className="mt-1 text-sm text-white/70">{t.contactLocation}</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div>
              <label htmlFor="name" className="text-[9px] uppercase tracking-[0.2em] text-white/40">{t.contactName}</label>
              <input id="name" name="name" type="text" placeholder={t.contactNamePh} className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60" />
            </div>
            <div className="mt-7">
              <label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] text-white/40">{t.contactEmail}</label>
              <input id="email" name="email" type="email" placeholder={t.contactEmailPh} className="mt-3 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60" />
            </div>
            <div className="mt-7">
              <label htmlFor="message" className="text-[9px] uppercase tracking-[0.2em] text-white/40">{t.contactMessage}</label>
              <textarea id="message" name="message" rows={4} placeholder={t.contactMessagePh} className="mt-3 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-white/60" />
            </div>
            <button type="submit" className="group mt-8 flex items-center gap-3 bg-white px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/80">
              {t.contactSend} <ArrowUpRight size={13} strokeWidth={1.3} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

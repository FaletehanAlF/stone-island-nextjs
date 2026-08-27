"use client";
import { useApp } from "../lib/AppContext";

const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>);
const FacebookIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" /></svg>);
const ShopeeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>);
const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>);

const socials = [
  { name: "Instagram", icon: InstagramIcon, href: "#" },
  { name: "Facebook", icon: FacebookIcon, href: "#" },
  { name: "Shopee", icon: ShopeeIcon, href: "#" },
  { name: "Email", icon: MailIcon, href: "mailto:stoneisland@gmail.com" },
];

const footerLinks = [
  { key: "footerHome", href: "#home" },
  { key: "footerCollection", href: "#produk" },
  { key: "footerAbout", href: "#about" },
  { key: "footerContact", href: "#contact" },
];

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">{t.footerBrand}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">{t.footerBrandDesc}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">{t.footerExplore}</p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a key={link.key} href={link.href} className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white">{t[link.key]}</a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">{t.footerContactTitle}</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a href="mailto:stoneisland@gmail.com" className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white">stoneisland@gmail.com</a>
              <p className="text-sm text-white/35">Jakarta, Indonesia</p>
              <p className="text-sm text-white/35">{t.contactHours}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-3">
          {socials.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.name} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/25 hover:text-white hover:bg-white/[0.04]"><s.icon /></a>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10" />
        <div className="overflow-hidden pt-8">
          <h2 className="w-full text-center text-[12vw] font-semibold uppercase leading-[0.78] tracking-[-0.07em] text-white/90 md:text-[10vw]">STONE ISLAND</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 py-6 text-center">
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">{t.footerStudent}</p>
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

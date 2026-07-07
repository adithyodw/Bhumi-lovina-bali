"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

const linkDefs = [
  { href: "#home", key: "home" },
  { href: "#villa", key: "villa" },
  { href: "#amenities", key: "amenities" },
  { href: "#gallery", key: "gallery" },
  { href: "#location", key: "location" },
  { href: "#reviews", key: "reviews" },
  { href: "#book", key: "book" },
  { href: "#contact", key: "contact" },
] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = scrolled
    ? "text-charcoal/80 hover:text-secondary"
    : "text-white/90 hover:text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-xl shadow-soft border-b border-outline/50"
            : "bg-transparent"
        }`}
        aria-label="Main"
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 py-4 md:py-5">
          <Link
            href="#home"
            className={`font-serif text-lg md:text-xl font-light tracking-[0.15em] uppercase transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Bhumi Lovina
          </Link>

          <ul className="hidden xl:flex items-center gap-7">
            {linkDefs.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-sans text-sm font-light tracking-wide transition-colors duration-300 ${linkClass}`}
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher
              className={`hidden sm:block font-sans tracking-widest uppercase text-[10px] transition-opacity hover:opacity-100 ${
                scrolled ? "text-charcoal/50" : "text-white/60"
              }`}
            />
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-[10px]"
            >
              {t("enquire")}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className="absolute top-0 right-0 h-full w-[min(100%,320px)] bg-cream shadow-elevated pt-20 px-8 pb-8 flex flex-col">
            <ul className="flex flex-col gap-1">
              {linkDefs.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-serif text-lg text-charcoal hover:text-secondary transition-colors"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-outline">
              <LanguageSwitcher className="font-sans tracking-widest uppercase text-[10px] text-muted mb-4" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {t("enquire")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

const linkDefs = [
  { href: "/", key: "estate" },
  { href: "/villas", key: "villas" },
  { href: "/experiences", key: "experiences" },
  { href: "/info", key: "info" },
  { href: "/book", key: "book" },
] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-xl shadow-botanical"
          : "bg-transparent"
      }`}
      aria-label="Main"
    >
      <div className="max-w-[1920px] mx-auto flex justify-between items-center px-6 md:px-12 py-5 md:py-6">
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
            scrolled ? "text-primary" : "text-on-primary"
          }`}
        >
          Bhumi Lovina
        </Link>

        <ul className="hidden md:flex items-center gap-10 lg:gap-12">
          {linkDefs.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-serif tracking-tight text-base transition-colors duration-500 hover:text-secondary ${
                  scrolled ? "text-primary" : "text-on-primary/90"
                }`}
              >
                {t(l.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <LanguageSwitcher
            className={`font-sans tracking-widest uppercase text-[10px] transition-opacity hover:opacity-100 ${
              scrolled ? "text-primary opacity-50" : "text-on-primary opacity-60"
            }`}
          />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-5 md:px-8 py-2.5 md:py-3 rounded-md font-sans tracking-widest uppercase text-[10px] md:text-xs hover:bg-primary-container transition-all duration-300"
          >
            {t("enquire")}
          </a>
        </div>
      </div>
    </nav>
  );
}

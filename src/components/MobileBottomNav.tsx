"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const items = [
  { href: "#home", key: "home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { href: "#villa", key: "villa", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { href: "#book", key: "book", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { href: "#contact", key: "contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
] as const;

export default function MobileBottomNav() {
  const t = useTranslations("nav");

  return (
    <nav
      aria-label="Primary mobile"
      className="xl:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center px-2 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-cream/95 backdrop-blur-xl border-t border-outline/60 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center justify-center gap-1 px-3 py-1 text-charcoal/60 hover:text-primary transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d={item.icon}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-sans tracking-wide text-[9px] uppercase">
            {t(item.key)}
          </span>
        </Link>
      ))}
    </nav>
  );
}

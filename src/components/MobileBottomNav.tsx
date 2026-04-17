"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/site";

const items = [
  { href: "/", key: "estate" },
  { href: "/villas", key: "villas" },
  { href: "/info", key: "info" },
  { href: "/book", key: "book" },
] as const;

export default function MobileBottomNav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav
      aria-label="Primary mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center px-4 pt-3 pb-6 bg-surface/90 backdrop-blur-2xl rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-primary/5"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center font-sans tracking-widest uppercase text-[10px] ${
              active ? "text-secondary font-semibold" : "text-primary/60"
            }`}
          >
            {t(item.key)}
          </Link>
        );
      })}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center font-sans tracking-widest uppercase text-[10px] text-primary/60"
      >
        WhatsApp
      </a>
    </nav>
  );
}

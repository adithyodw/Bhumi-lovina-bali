"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface Props {
  className?: string;
}

export default function LanguageSwitcher({ className }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = locale === "en" ? "id" : "en";
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => router.refresh());
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label="Switch language"
      className={className}
    >
      {locale === "en" ? "ID" : "EN"}
    </button>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { site, whatsappLink } from "@/lib/site";
import { HERO_BOOK } from "@/lib/images";
import OTAButtons from "@/components/OTAButtons";

export const metadata: Metadata = {
  title: "Book Your Stay — Bhumi Lovina Residence, North Bali",
  description:
    "Book direct by WhatsApp for the best rate, or reserve through Traveloka, Booking.com or tiket.com.",
  alternates: { canonical: "/book" },
};

export default async function BookPage() {
  const t = await getTranslations("book");

  return (
    <>
      {/* Hero */}
      <header className="relative h-[60svh] md:h-[75svh] w-full overflow-hidden flex items-end">
        <Image
          src={HERO_BOOK}
          alt="Bhumi Lovina Residence — private pool at dusk, ready for arrival"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-primary/30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-on-primary/80 mb-6 block">
            {t("badge")}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            {t("headline")}
          </h1>
        </div>
      </header>

      {/* Booking panel */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("directLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
              {t("directHeadline")}
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10 text-pretty">
              {t("directCopy")}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary px-12 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
            >
              {t("messageBtn", { phone: site.contact.whatsappDisplay })}
            </a>
          </div>

          <div className="bg-surface-container-low rounded-xl p-10 shadow-botanical">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("trustedLabel")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 leading-tight">
              {t("otaHeadline")}
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              {t("otaCopy")}
            </p>
            <OTAButtons />
          </div>
        </div>
      </section>

      {/* Arrival info */}
      <section className="bg-primary text-on-primary py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-4 block">
              {t("checkinLabel")}
            </span>
            <div className="font-serif text-2xl font-light">{t("checkinValue")}</div>
            <p className="mt-3 text-on-primary/70 font-light">
              {t("checkinNote")}
            </p>
          </div>
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-4 block">
              {t("checkoutLabel")}
            </span>
            <div className="font-serif text-2xl font-light">{t("checkoutValue")}</div>
            <p className="mt-3 text-on-primary/70 font-light">
              {t("checkoutNote")}
            </p>
          </div>
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-4 block">
              {t("transferLabel")}
            </span>
            <div className="font-serif text-2xl font-light">{t("transferValue")}</div>
            <p className="mt-3 text-on-primary/70 font-light">
              {t("transferNote")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

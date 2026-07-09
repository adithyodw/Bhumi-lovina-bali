import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  site,
  whatsappLink,
} from "@/lib/site";
import HeroBanner from "@/components/HeroBanner";
import BookingCards from "@/components/BookingCards";
import Gallery from "@/components/Gallery";
import InstagramReels from "@/components/InstagramReels";
import Reveal from "@/components/Reveal";
import {
  IconAirCon,
  IconCheck,
  IconChevronDown,
  IconConcierge,
  IconHousekeeping,
  IconKitchen,
  IconPool,
  IconStar,
  IconWhatsApp,
  IconWifi,
} from "@/components/icons";

export default async function HomePage() {
  const t = await getTranslations("home");
  const routeUrl = googleMapsDirectionsUrl();

  const amenities = [
    { key: "pool", Icon: IconPool },
    { key: "wifi", Icon: IconWifi },
    { key: "kitchen", Icon: IconKitchen },
    { key: "ac", Icon: IconAirCon },
    { key: "breakfast", Icon: IconHousekeeping },
    { key: "concierge", Icon: IconConcierge },
  ] as const;

  const whyItems = ["why1", "why2", "why3", "why4"] as const;

  const guestReviews = [
    { title: t("review1Title"), body: t("review1Body") },
    { title: t("review2Title"), body: t("review2Body") },
    { title: t("review3Title"), body: t("review3Body") },
    { title: t("review4Title"), body: t("review4Body") },
    { title: t("review5Title"), body: t("review5Body") },
  ];

  const faqs = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"] as const;

  const villaTiers = [
    {
      label: t("tierSuiteLabel"),
      meta: t("tierSuiteMeta"),
      names: t("tierSuiteNames"),
      note: t("tierSuiteNote"),
    },
    {
      label: t("tierExecutiveLabel"),
      meta: t("tierExecutiveMeta"),
      names: t("tierExecutiveNames"),
      note: t("tierExecutiveNote"),
    },
    {
      label: t("tierDeluxeLabel"),
      meta: t("tierDeluxeMeta"),
      names: t("tierDeluxeNames"),
      note: t("tierDeluxeNote"),
    },
  ] as const;

  const policies = [
    { title: t("policyAboutTitle"), body: t("policyAboutBody") },
    { title: t("policyRulesTitle"), body: t("policyRulesBody") },
    { title: t("policyTermsTitle"), body: t("policyTermsBody") },
  ] as const;

  return (
    <>
      <HeroBanner
        badge={t("badge")}
        title={t("hero")}
        copy={t("heroCopy")}
        bookLabel={t("bookNow")}
        exploreLabel={t("exploreVilla")}
      />

      {/* Villa Overview */}
      <section id="villa" className="section-padding bg-cream">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <span className="section-label">{t("villaLabel")}</span>
            <h2 className="mb-6 font-serif text-3xl font-light leading-[1.12] text-balance md:text-4xl lg:text-5xl">
              {t("villaHeadline")}
            </h2>
            <p className="mb-12 max-w-3xl text-base font-light leading-relaxed text-on-surface-muted text-pretty md:text-lg">
              {t("villaCopy")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 border-t border-outline pt-10 sm:grid-cols-3">
            {[
              { value: "8", label: t("statVillas") },
              { value: "2", label: t("statBedrooms") },
              { value: "150+", label: t("statSqm") },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <div className="text-center sm:text-left">
                  <div className="mb-2 font-serif text-4xl text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs uppercase tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {villaTiers.map((tier, i) => (
              <Reveal key={tier.label} delay={i * 80}>
                <article className="h-full rounded-2xl border border-outline bg-surface p-6 shadow-soft md:p-8">
                  <h3 className="mb-2 font-serif text-xl font-light text-charcoal">
                    {tier.label}
                  </h3>
                  <p className="mb-4 font-sans text-[11px] uppercase tracking-widest text-secondary">
                    {tier.meta}
                  </p>
                  <p className="mb-3 text-sm font-light leading-relaxed text-on-surface-muted">
                    {tier.names}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-muted">{tier.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="section-padding bg-surface-warm">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="section-label">{t("whyLabel")}</span>
              <h2 className="font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
                {t("whyHeadline")}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((key, i) => (
              <Reveal key={key} delay={i * 80}>
                <div className="h-full rounded-2xl border border-outline bg-surface p-6 md:p-8 shadow-soft">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sand font-serif text-lg text-primary">
                    {i + 1}
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-light text-charcoal">
                    {t(`${key}Title`)}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-muted">
                    {t(`${key}Body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section-padding bg-cream">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="section-label">{t("amenitiesLabel")}</span>
              <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
                {t("amenitiesHeadline")}
              </h2>
              <p className="font-light leading-relaxed text-on-surface-muted text-pretty">
                {t("amenitiesCopy")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((item, i) => (
              <Reveal key={item.key} delay={i * 60}>
                <div className="h-full rounded-2xl border border-outline bg-surface p-6 shadow-soft transition-shadow duration-300 hover:shadow-card md:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-sand text-primary">
                    <item.Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-light">
                    {t(`amenity_${item.key}_title`)}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-muted">
                    {t(`amenity_${item.key}_body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery
        label={t("galleryLabel")}
        headline={t("galleryHeadline")}
        copy={t("galleryCopy")}
      />

      <InstagramReels
        label={t("reelsLabel")}
        headline={t("reelsHeadline")}
        copy={t("reelsCopy")}
      />

      {/* Location */}
      <section id="location" className="bg-primary-dark text-cream">
        <div className="mx-auto flex min-h-[640px] max-w-[1920px] flex-col lg:flex-row">
          <div className="flex w-full flex-col justify-center section-padding !py-16 lg:w-[28rem] xl:w-[32rem]">
            <Reveal>
              <span className="section-label !text-cream/50">{t("locationLabel")}</span>
              <h2 className="mb-6 font-serif text-3xl font-light leading-tight text-balance md:text-4xl">
                {t("locationHeadline")}
              </h2>
              <p className="mb-8 font-light leading-relaxed text-cream/70 text-pretty">
                {t("locationCopy")}
              </p>
              <ul className="mb-8 space-y-4">
                {(["highlight1", "highlight2", "highlight3", "highlight4"] as const).map(
                  (key) => (
                    <li
                      key={key}
                      className="flex items-start gap-3 text-sm font-light text-cream/80"
                    >
                      <IconCheck className="mt-0.5 shrink-0 text-sage-light" />
                      {t(key)}
                    </li>
                  ),
                )}
              </ul>
              <div className="mb-8 space-y-3 text-sm font-light">
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-cream/40">
                    {t("addressLabel")}
                  </div>
                  <div className="text-cream/80">{site.location.fullAddress}</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-widest text-cream/40">
                    {t("airportLabel")}
                  </div>
                  <div className="text-cream/80">{t("airportValue")}</div>
                </div>
              </div>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-cream/20 px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-cream transition-all hover:bg-cream/10"
              >
                {t("routeButton")}
              </a>
            </Reveal>
          </div>
          <div className="min-h-[400px] flex-grow lg:min-h-0">
            <iframe
              title={t("mapTitle")}
              src={googleMapsEmbedUrl()}
              loading="lazy"
              className="h-full min-h-[400px] w-full border-0 grayscale-[30%] contrast-[1.1]"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="section-padding bg-cream">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <span className="section-label">{t("reviewsLabel")}</span>
              <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
                {t("reviewsHeadline")}
              </h2>
              <p className="font-light leading-relaxed text-on-surface-muted text-pretty">
                {t("reviewsCopy")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guestReviews.map((review, i) => (
              <Reveal key={review.title} delay={i * 70}>
                <blockquote className="h-full rounded-2xl border border-outline bg-surface p-8 shadow-soft">
                  <div className="mb-4 flex gap-0.5 text-secondary" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <IconStar key={n} size={14} />
                    ))}
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-light text-balance">
                    {review.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-on-surface-muted">
                    {review.body}
                  </p>
                  <footer className="mt-6 font-sans text-[10px] uppercase tracking-[0.25em] text-muted">
                    {t("reviewsSource")}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now */}
      <section id="book" className="section-padding bg-surface-warm">
        <div className="mx-auto max-w-[1100px] text-center">
          <Reveal>
            <span className="section-label">{t("bookLabel")}</span>
            <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
              {t("bookHeadline")}
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-light leading-relaxed text-on-surface-muted text-pretty">
              {t("bookCopy")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <BookingCards bookLabel={t("bookNow")} />
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 border-t border-outline pt-10">
              <p className="mb-5 text-sm font-light text-on-surface-muted">
                {t("bookWhatsAppCopy")}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <IconWhatsApp size={18} />
                {t("bookWhatsApp")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="section-padding bg-surface-warm">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="section-label">{t("policiesLabel")}</span>
              <h2 className="font-serif text-3xl font-light leading-tight text-balance md:text-4xl">
                {t("policiesHeadline")}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {policies.map((policy, i) => (
              <Reveal key={policy.title} delay={i * 50}>
                <details
                  className="group overflow-hidden rounded-2xl border border-outline bg-surface shadow-soft"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-lg font-light md:p-7 [&::-webkit-details-marker]:hidden">
                    {policy.title}
                    <IconChevronDown className="shrink-0 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="space-y-3 border-t border-outline/40 px-6 pb-6 pt-5 text-sm font-light leading-relaxed text-on-surface-muted whitespace-pre-line md:px-7 md:pb-7">
                    {policy.body}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-cream">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="section-label">{t("faqLabel")}</span>
              <h2 className="font-serif text-3xl font-light leading-tight text-balance md:text-4xl">
                {t("faqHeadline")}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((key, i) => (
              <Reveal key={key} delay={i * 50}>
                <details className="group overflow-hidden rounded-2xl border border-outline bg-surface shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-serif text-lg font-light md:p-7 [&::-webkit-details-marker]:hidden">
                    {t(`${key}q`)}
                    <IconChevronDown className="shrink-0 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-outline/40 px-6 pb-6 pt-5 text-sm font-light leading-relaxed text-on-surface-muted md:px-7 md:pb-7">
                    {t(`${key}a`)}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-surface-warm pb-28 xl:pb-32">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <span className="section-label">{t("contactLabel")}</span>
            <h2 className="mb-6 font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
              {t("contactHeadline")}
            </h2>
            <p className="mb-10 font-light leading-relaxed text-on-surface-muted text-pretty">
              {t("contactCopy")}
            </p>
            <div className="space-y-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-outline bg-surface p-5 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-primary">
                  <IconWhatsApp size={22} />
                </div>
                <div>
                  <div className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                    WhatsApp
                  </div>
                  <div className="font-light">{site.contact.whatsappDisplay}</div>
                </div>
              </a>
              <a
                href={`https://instagram.com/${site.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-outline bg-surface p-5 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                    Instagram
                  </div>
                  <div className="font-light">@{site.contact.instagram}</div>
                </div>
              </a>
              <div className="rounded-2xl border border-outline bg-surface p-5 shadow-soft">
                <div className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                  {t("addressLabel")}
                </div>
                <div className="font-light leading-relaxed text-on-surface-muted">
                  {site.location.fullAddress}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

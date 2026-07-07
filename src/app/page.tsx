import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  site,
  whatsappLink,
} from "@/lib/site";
import HeroImage from "@/components/HeroImage";
import BookingCards from "@/components/BookingCards";
import Reveal from "@/components/Reveal";

const amenityIcons: Record<string, string> = {
  pool: "M2 20c2-4 6-4 8 0s6 4 8 0M4 12c2-3 5-3 7 0s5 3 7 0M6 4c2-2 5-2 7 0",
  wifi: "M5 12.55a11 11 0 0114.08 0M8.53 16.11a7 7 0 019.95 0M12 20h.01",
  kitchen: "M3 6h18M3 12h18M3 18h18",
  ac: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4",
  breakfast: "M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z",
  concierge: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
};

export default async function HomePage() {
  const t = await getTranslations("home");
  const routeUrl = googleMapsDirectionsUrl();

  const amenities = [
    { key: "pool", icon: amenityIcons.pool },
    { key: "wifi", icon: amenityIcons.wifi },
    { key: "kitchen", icon: amenityIcons.kitchen },
    { key: "ac", icon: amenityIcons.ac },
    { key: "breakfast", icon: amenityIcons.breakfast },
    { key: "concierge", icon: amenityIcons.concierge },
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

  const galleryCrops = [
    { position: "center 40%", label: t("galleryLabel1") },
    { position: "60% 30%", label: t("galleryLabel2") },
    { position: "center 60%", label: t("galleryLabel3") },
  ];

  return (
    <>
      {/* Hero */}
      <header
        id="home"
        className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center"
      >
        <HeroImage priority overlay="hero" className="absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-white/80 font-sans tracking-[0.4em] uppercase text-[11px] mb-6 block">
            {t("badge")}
          </span>
          <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.08] text-balance">
            {t("hero")}
          </h1>
          <p className="text-white/85 text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {t("heroCopy")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#book" className="btn-primary !bg-white !text-primary hover:!bg-sand">
              {t("bookNow")}
            </Link>
            <Link href="#villa" className="btn-outline">
              {t("exploreVilla")}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce" aria-hidden>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </header>

      {/* Villa Overview */}
      <section id="villa" className="section-padding bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <span className="section-label">{t("villaLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.12] text-balance mb-6">
                {t("villaHeadline")}
              </h2>
              <p className="text-on-surface-muted text-base md:text-lg font-light leading-relaxed mb-8 text-pretty">
                {t("villaCopy")}
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-outline pt-8">
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">8</div>
                  <div className="text-xs font-sans tracking-widest uppercase text-muted">{t("statVillas")}</div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">2</div>
                  <div className="text-xs font-sans tracking-widest uppercase text-muted">{t("statBedrooms")}</div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">150+</div>
                  <div className="text-xs font-sans tracking-widest uppercase text-muted">{t("statSqm")}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                <HeroImage overlay="card" objectPosition="center 35%" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="relative section-padding overflow-hidden">
        <HeroImage overlay="section" objectPosition="center" className="absolute inset-0" />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label !text-white/70">{t("whyLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight text-balance">
                {t("whyHeadline")}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((key, i) => (
              <Reveal key={key} delay={i * 80}>
                <div className="glass-panel rounded-2xl p-6 md:p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center mb-5">
                    <span className="font-serif text-lg text-sage">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light mb-3 text-charcoal">
                    {t(`${key}Title`)}
                  </h3>
                  <p className="text-on-surface-muted text-sm font-light leading-relaxed">
                    {t(`${key}Body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section-padding bg-surface-warm">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label">{t("amenitiesLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance mb-5">
                {t("amenitiesHeadline")}
              </h2>
              <p className="text-on-surface-muted font-light leading-relaxed text-pretty">
                {t("amenitiesCopy")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((item, i) => (
              <Reveal key={item.key} delay={i * 60}>
                <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow duration-300 h-full">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-sage mb-5"
                    aria-hidden
                  >
                    <path
                      d={item.icon}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="font-serif text-xl font-light mb-2">
                    {t(`amenity_${item.key}_title`)}
                  </h3>
                  <p className="text-on-surface-muted text-sm font-light leading-relaxed">
                    {t(`amenity_${item.key}_body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div className="max-w-xl">
                <span className="section-label">{t("galleryLabel")}</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
                  {t("galleryHeadline")}
                </h2>
              </div>
              <p className="text-on-surface-muted font-light max-w-sm text-pretty">
                {t("galleryCopy")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <Reveal className="md:col-span-8">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-card">
                <HeroImage overlay="card" objectPosition={galleryCrops[0].position} sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="absolute bottom-6 left-6 text-white font-sans text-xs tracking-widest uppercase">
                  {galleryCrops[0].label}
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delay={80}>
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-card">
                <HeroImage overlay="card" objectPosition={galleryCrops[1].position} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute bottom-6 left-6 text-white font-sans text-xs tracking-widest uppercase">
                  {galleryCrops[1].label}
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-12" delay={120}>
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-card">
                <HeroImage overlay="card" objectPosition={galleryCrops[2].position} sizes="100vw" />
                <div className="absolute bottom-6 left-6 text-white font-sans text-xs tracking-widest uppercase">
                  {galleryCrops[2].label}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-primary-dark text-cream">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row min-h-[640px]">
          <div className="w-full lg:w-[28rem] xl:w-[32rem] section-padding !py-16 flex flex-col justify-center">
            <Reveal>
              <span className="section-label !text-cream/50">{t("locationLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight text-balance">
                {t("locationHeadline")}
              </h2>
              <p className="text-cream/70 font-light leading-relaxed mb-8 text-pretty">
                {t("locationCopy")}
              </p>
              <ul className="space-y-4 mb-8">
                {(["highlight1", "highlight2", "highlight3", "highlight4"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm font-light text-cream/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-sage-light mt-0.5 shrink-0" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <div className="space-y-3 text-sm font-light mb-8">
                <div>
                  <div className="tracking-widest uppercase text-[10px] text-cream/40 mb-1">
                    {t("addressLabel")}
                  </div>
                  <div className="text-cream/80">{site.location.fullAddress}</div>
                </div>
                <div>
                  <div className="tracking-widest uppercase text-[10px] text-cream/40 mb-1">
                    {t("airportLabel")}
                  </div>
                  <div className="text-cream/80">{t("airportValue")}</div>
                </div>
              </div>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-cream/20 text-cream px-8 py-3.5 rounded-xl font-sans tracking-widest uppercase text-xs hover:bg-cream/10 transition-all"
              >
                {t("routeButton")}
              </a>
            </Reveal>
          </div>
          <div className="flex-grow min-h-[400px] lg:min-h-0">
            <iframe
              title={t("mapTitle")}
              src={googleMapsEmbedUrl()}
              loading="lazy"
              className="w-full h-full min-h-[400px] border-0 grayscale-[30%] contrast-[1.1]"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="section-padding bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="section-label">{t("reviewsLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-5 leading-tight text-balance">
                {t("reviewsHeadline")}
              </h2>
              <p className="text-on-surface-muted font-light leading-relaxed text-pretty">
                {t("reviewsCopy")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {guestReviews.map((review, i) => (
              <Reveal key={review.title} delay={i * 70}>
                <blockquote className="h-full rounded-2xl bg-surface border border-outline/60 p-8 shadow-soft">
                  <div className="text-secondary text-sm mb-4" aria-label="5 stars">★★★★★</div>
                  <h3 className="font-serif text-xl font-light mb-3 text-balance">
                    {review.title}
                  </h3>
                  <p className="text-on-surface-muted font-light leading-relaxed text-sm">
                    {review.body}
                  </p>
                  <footer className="mt-6 font-sans tracking-[0.25em] uppercase text-[10px] text-muted">
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
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <span className="section-label">{t("bookLabel")}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-5 leading-tight text-balance">
              {t("bookHeadline")}
            </h2>
            <p className="text-on-surface-muted font-light leading-relaxed mb-10 max-w-xl mx-auto text-pretty">
              {t("bookCopy")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <BookingCards bookLabel={t("bookNow")} />
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 pt-10 border-t border-outline">
              <p className="text-on-surface-muted text-sm font-light mb-5">{t("bookWhatsAppCopy")}</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t("bookWhatsApp")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-cream">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-label">{t("faqLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight text-balance">
                {t("faqHeadline")}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((key, i) => (
              <Reveal key={key} delay={i * 50}>
                <details className="group rounded-2xl bg-surface border border-outline/60 shadow-soft overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 md:p-7 font-serif text-lg font-light list-none [&::-webkit-details-marker]:hidden">
                    {t(`${key}q`)}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0 text-muted transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </summary>
                  <div className="px-6 md:px-7 pb-6 md:pb-7 text-on-surface-muted text-sm font-light leading-relaxed border-t border-outline/40 pt-5">
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
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <span className="section-label">{t("contactLabel")}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance mb-6">
                {t("contactHeadline")}
              </h2>
              <p className="text-on-surface-muted font-light leading-relaxed mb-10 text-pretty">
                {t("contactCopy")}
              </p>
              <div className="space-y-6">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-outline/60 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans tracking-widest uppercase text-[10px] text-muted mb-1">WhatsApp</div>
                    <div className="font-light">{site.contact.whatsappDisplay}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-outline/60 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-ocean" aria-hidden>
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans tracking-widest uppercase text-[10px] text-muted mb-1">Email</div>
                    <div className="font-light">{site.contact.email}</div>
                  </div>
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card">
                <HeroImage overlay="card" objectPosition="70% 50%" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

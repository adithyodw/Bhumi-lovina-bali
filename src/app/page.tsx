import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { villas, villaLocale } from "@/data/villas";
import { experiences, nearbyPlaces, experienceLocale, nearbyPlaceLocale } from "@/data/experiences";
import { googleMapsDirectionsUrl, googleMapsEmbedUrl, site } from "@/lib/site";
import { HERO_ESTATE, NEARBY_CAFE, NEARBY_RESTAURANT } from "@/lib/images";
import VillaCard from "@/components/VillaCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import InstagramGrid from "@/components/InstagramGrid";
import OTAButtons from "@/components/OTAButtons";
import Reveal from "@/components/Reveal";
import RouteIllustration from "@/components/RouteIllustration";

export default async function HomePage() {
  const t = await getTranslations("home");
  const locale = await getLocale();

  const featuredVillas = [
    villaLocale(villas.find((v) => v.slug === "kayu")!, locale),
    villaLocale(villas.find((v) => v.slug === "ashoka")!, locale),
    villaLocale(villas.find((v) => v.slug === "lili")!, locale),
  ];

  const tv = await getTranslations("villa");
  const routeUrl = googleMapsDirectionsUrl();
  const mapEmbedUrl = googleMapsEmbedUrl();

  return (
    <>
      {/* Hero */}
      <header className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_ESTATE}
            alt="Private infinity pool overlooking the Bali Sea at dawn, Bhumi Lovina Residence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-on-primary font-sans tracking-[0.4em] uppercase text-xs mb-6 block opacity-90">
            {t("badge")}
          </span>
          <h1 className="text-on-primary font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.05] text-balance">
            {t("hero")}
          </h1>
          <p className="text-on-primary/90 text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {t("heroCopy")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/villas"
              className="bg-on-primary text-primary px-10 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-surface-container transition-all"
            >
              {t("viewVillas")}
            </Link>
            <Link
              href="/book"
              className="border border-on-primary/40 text-on-primary backdrop-blur-sm px-10 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-on-primary/10 transition-all"
            >
              {t("reserve")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-on-primary/70 animate-bounce">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </header>

      {/* Intro Statement */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <Reveal>
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
            {t("estateLabel")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-balance mb-10">
            {t("estateHeadline")}
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-2xl mx-auto text-pretty">
            {t("estateCopy")}
          </p>
        </Reveal>
      </section>

      {/* Featured Villas */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("ourVillasLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-balance">
              {t("villaHeadline")}
            </h2>
          </div>
          <Link
            href="/villas"
            className="font-sans tracking-widest uppercase text-xs text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-all"
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-8">
            <VillaCard villa={featuredVillas[0]} size="wide" priority discoverLabel={tv("discover")} />
          </Reveal>
          <Reveal className="md:col-span-4" delay={120}>
            <VillaCard villa={featuredVillas[1]} size="tall" discoverLabel={tv("discover")} />
          </Reveal>
          <Reveal className="md:col-span-12" delay={60}>
            <VillaCard villa={featuredVillas[2]} size="wide" discoverLabel={tv("discover")} />
          </Reveal>
        </div>
      </section>

      {/* Video Feature */}
      <section className="bg-primary text-on-primary py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-6 block">
              {t("videoLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-balance">
              {t("watchEstate")}
            </h2>
          </div>
          <Reveal>
            <YouTubeEmbed id={site.video.youtubeId} title="Bhumi Lovina Residence" />
          </Reveal>
        </div>
      </section>

      {/* Experiences Bento */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("expLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6 text-balance">
              {t("expHeadline")}
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed text-pretty">
              {t("expCopy")}
            </p>
          </div>
          <Link
            href="/experiences"
            className="hidden md:inline-block font-sans tracking-widest uppercase text-xs text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-all"
          >
            {t("allExperiences")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Dolphin large */}
          <Link
            href="/experiences#lovina-dolphin-tour"
            className="md:col-span-8 group relative aspect-[16/9] overflow-hidden rounded-xl"
          >
            <Image
              src={experiences[0].image}
              alt="Wild dolphins at sunrise off Lovina beach, North Bali"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-10 left-8 md:left-10 text-on-primary">
              <span className="font-sans tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-80">
                {t("natureLabel")}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">
                {t("dolphinTitle")}
              </h3>
              <p className="text-sm opacity-90 max-w-md font-light">
                {t("dolphinCopy")}
              </p>
            </div>
          </Link>

          {/* Waterfall vertical */}
          <Link
            href="/experiences#north-bali-waterfalls"
            className="md:col-span-4 group relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <Image
              src={experiences[2].image}
              alt="Sekumpul waterfall cascading in North Bali jungle"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-10 left-8 md:left-10 text-on-primary">
              <span className="font-sans tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-80">
                {t("adventureLabel")}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">
                {t("waterfallTitle")}
              </h3>
              <p className="text-sm opacity-90 font-light">
                {t("waterfallCopy")}
              </p>
            </div>
          </Link>

          {/* Snorkeling */}
          <Link
            href="/experiences#snorkeling-and-diving-lovina"
            className="md:col-span-6 group relative aspect-[16/9] overflow-hidden rounded-xl"
          >
            <Image
              src={experiences[1].image}
              alt="Snorkeling the Menjangan Island reef, North Bali"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-10 left-8 md:left-10 text-on-primary">
              <span className="font-sans tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-80">
                {t("discoveryLabel")}
              </span>
              <h3 className="font-serif text-2xl font-light mb-1">
                {t("snorkelTitle")}
              </h3>
              <p className="text-sm opacity-90 font-light">
                {t("snorkelCopy")}
              </p>
            </div>
          </Link>

          {/* Temple */}
          <Link
            href="/experiences#temples-of-north-bali"
            className="md:col-span-6 group relative aspect-[16/9] overflow-hidden rounded-xl"
          >
            <Image
              src={experiences[3].image}
              alt="Ulun Danu Beratan temple floating on a crater lake"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-10 left-8 md:left-10 text-on-primary">
              <span className="font-sans tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-80">
                {t("cultureLabel")}
              </span>
              <h3 className="font-serif text-2xl font-light mb-1">
                {t("templeTitle")}
              </h3>
              <p className="text-sm opacity-90 font-light">
                {t("templeCopy")}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Nearby neighborhood */}
      <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl shadow-botanical">
              <Image
                src={NEARBY_CAFE}
                alt="Beachfront cafe in Lovina at dusk with bamboo furniture"
                width={900}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-1/2 aspect-square overflow-hidden rounded-xl shadow-botanical border-8 border-surface hidden md:block">
              <Image
                src={NEARBY_RESTAURANT}
                alt="Gourmet seafood platter at an upscale Lovina restaurant"
                width={600}
                height={600}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("neighborhoodLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
              {t("neighborhoodHeadline")}
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12 text-pretty">
              {t("neighborhoodCopy")}
            </p>
            <ul className="space-y-6 border-t border-outline/10 pt-10">
              {nearbyPlaces.slice(0, 5).map((p) => {
                const lp = nearbyPlaceLocale(p, locale);
                return (
                  <li
                    key={p.name}
                    className="flex justify-between items-start gap-6"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-light mb-1">
                        {p.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant">
                        {p.category} · {lp.summary}
                      </p>
                    </div>
                    <span className="text-xs font-sans tracking-widest uppercase text-secondary whitespace-nowrap">
                      {p.distanceKm.toFixed(1)} km
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative bg-background overflow-hidden">
        <div className="max-w-[1920px] mx-auto flex flex-col xl:flex-row min-h-[720px]">
          <div className="w-full xl:w-[34rem] p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-primary text-on-primary">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-6 block">
              {t("arrivingLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
              {t("arrivingHeadline")}
            </h2>
            <p className="text-on-primary/80 leading-relaxed mb-8 font-light text-pretty">
              {t("arrivingCopy")}
            </p>
            <div className="rounded-3xl border border-secondary-fixed-dim/20 bg-on-primary/5 p-6 mb-8">
              <div className="tracking-widest uppercase text-[10px] text-secondary-fixed-dim mb-3">
                {t("routeAdvisoryTitle")}
              </div>
              <p className="text-sm leading-7 text-on-primary/80 font-light">
                {t("routeAdvisoryCopy")}
              </p>
            </div>
            <div className="space-y-5 text-sm font-light mb-8">
              <div>
                <div className="tracking-widest uppercase text-[10px] text-secondary-fixed-dim mb-1">
                  {t("addressLabel")}
                </div>
                <div>{site.location.fullAddress}</div>
              </div>
              <div>
                <div className="tracking-widest uppercase text-[10px] text-secondary-fixed-dim mb-1">
                  {t("airportLabel")}
                </div>
                <div>{t("airportValue")}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row xl:flex-col gap-4 mb-10">
              <a
                href={site.location.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-on-primary text-primary px-8 py-4 font-sans tracking-widest uppercase text-xs transition-all hover:bg-surface-container"
              >
                {t("mapButton")}
              </a>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-on-primary/20 px-8 py-4 font-sans tracking-widest uppercase text-xs text-on-primary transition-all hover:bg-on-primary/10"
              >
                {t("routeButton")}
              </a>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-on-primary/10 bg-on-primary/5 p-5">
                <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-secondary-fixed-dim mb-2">
                  {t("routeStepOneTitle")}
                </div>
                <p className="text-sm text-on-primary/75 leading-7 font-light">
                  {t("routeStepOneCopy")}
                </p>
              </div>
              <div className="rounded-2xl border border-on-primary/10 bg-on-primary/5 p-5">
                <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-secondary-fixed-dim mb-2">
                  {t("routeStepTwoTitle")}
                </div>
                <p className="text-sm text-on-primary/75 leading-7 font-light">
                  {t("routeStepTwoCopy")}
                </p>
              </div>
              <div className="rounded-2xl border border-on-primary/10 bg-on-primary/5 p-5">
                <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-secondary-fixed-dim mb-2">
                  {t("routeStepThreeTitle")}
                </div>
                <p className="text-sm text-on-primary/75 leading-7 font-light">
                  {t("routeStepThreeCopy")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow bg-surface-container-low p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 h-full">
              <Reveal className="h-full">
                <div className="h-full rounded-[32px] border border-outline/10 bg-surface p-6 md:p-8">
                  <div className="mb-6">
                    <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-4 block">
                      {t("routeLabel")}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-balance mb-4">
                      {t("routeHeadline")}
                    </h3>
                    <p className="text-on-surface-variant font-light leading-8 text-pretty">
                      {t("routeCopy")}
                    </p>
                  </div>
                  <RouteIllustration
                    roadLabel={t("routeVisualRoad")}
                    waypointLabel={t("routeVisualWaypoint")}
                    destinationLabel={t("routeVisualDestination")}
                    avoidLabel={t("routeVisualAvoid")}
                    imageAlt={t("routeVisualImageAlt")}
                  />
                </div>
              </Reveal>

              <Reveal className="h-full" delay={120}>
                <div className="relative min-h-[420px] h-full overflow-hidden rounded-[32px] border border-outline/10 bg-surface shadow-botanical">
                  <div className="absolute left-6 top-6 z-10 rounded-full bg-surface/90 px-4 py-2 text-[10px] font-sans uppercase tracking-[0.3em] text-secondary shadow-sm">
                    {t("interactiveMapLabel")}
                  </div>
                  <iframe
                    title="Bhumi Lovina interactive map"
                    src={mapEmbedUrl}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          {t("bookLabel")}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
          {t("bookHeadline")}
        </h2>
        <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12 text-pretty">
          {t("bookCopy")}
        </p>
        <div className="flex flex-col items-center gap-8">
          <Link
            href="/book"
            className="bg-primary text-on-primary px-12 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
          >
            {t("bookWhatsApp")}
          </Link>
          <div className="w-full">
            <OTAButtons />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <InstagramGrid />
    </>
  );
}

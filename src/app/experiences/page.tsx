import type { Metadata } from "next";
import Image from "next/image";
import { experiences, nearbyPlaces } from "@/data/experiences";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experiences — Things to do in North Bali | Bhumi Lovina",
  description:
    "Lovina dolphin tour, Sekumpul & Gitgit waterfalls, Menjangan snorkeling, Ulun Danu temple and the best things to do in North Bali.",
  alternates: { canonical: "/experiences" },
};

const faqs = [
  {
    q: "Is the Lovina dolphin tour ethical?",
    a: "Our dolphin tour uses a single traditional jukung per guest group, with engines cut early and a respectful distance kept from the pods. We time trips to avoid the main crowded runs. No dolphin is ever fed, touched, or chased.",
  },
  {
    q: "What are the best waterfalls in North Bali?",
    a: "Gitgit is the closest and most iconic. Sekumpul, often called the most beautiful waterfall in Indonesia, is about an hour inland. Aling-Aling has natural rock slides and deep jumping pools for the more adventurous.",
  },
  {
    q: "Can we snorkel directly from the estate?",
    a: "The Lovina house reef is a 2-minute drive from the estate. For pristine reef, we run private half-day boats to Menjangan Island, a protected marine national park.",
  },
  {
    q: "How far is Bhumi Lovina from Ngurah Rai Airport?",
    a: "Approximately 3 hours by private car. We can arrange airport transfer, including a mid-route stop at a temple or café of your choice.",
  },
];

export default function ExperiencesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className="relative h-[70svh] md:h-[85svh] w-full overflow-hidden flex items-end">
        <Image
          src={experiences[0].image}
          alt="Dolphins at sunrise off Lovina beach, North Bali"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-primary/30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-on-primary/80 mb-6 block">
            Experiences
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            Things to do in North Bali
          </h1>
          <p className="mt-6 text-on-primary/90 text-base md:text-lg font-light max-w-2xl text-pretty">
            A curated short-list of the quieter things to do in Lovina and the
            north — from sunrise dolphin tours to hidden waterfalls.
          </p>
        </div>
      </header>

      {/* Experience list */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="space-y-20 md:space-y-32">
          {experiences.map((exp, i) => (
            <Reveal key={exp.slug}>
              <article
                id={exp.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-xl">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-4 block">
                    {exp.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6 text-balance">
                    {exp.title}
                  </h2>
                  <p className="text-on-surface text-lg font-light leading-[1.75] mb-6 text-pretty">
                    {exp.description}
                  </p>
                  <p className="text-sm text-on-surface-variant font-light">
                    Keywords:{" "}
                    {exp.keywords.map((k, idx) => (
                      <span key={k}>
                        <em className="not-italic">{k}</em>
                        {idx < exp.keywords.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
            Nearby
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8 text-balance">
            Where to eat in North Bali
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-2xl mb-12 text-pretty">
            The best restaurants, cafes, and markets in Lovina — the short-list
            we actually send to our guests.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {nearbyPlaces.map((p) => (
              <li
                key={p.name}
                className="flex justify-between items-start gap-6 border-b border-outline/10 pb-5"
              >
                <div>
                  <h3 className="font-serif text-xl font-light mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-light">
                    {p.category} · {p.summary}
                  </p>
                </div>
                <span className="text-xs font-sans tracking-widest uppercase text-secondary whitespace-nowrap">
                  {p.distanceKm.toFixed(1)} km
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1000px] mx-auto">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          Questions
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-12 text-balance">
          A quiet guide to the north.
        </h2>
        <div className="divide-y divide-outline/10 border-t border-outline/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-serif text-xl md:text-2xl font-light pr-6">
                  {f.q}
                </span>
                <span className="text-secondary text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-on-surface-variant font-light leading-relaxed text-pretty">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

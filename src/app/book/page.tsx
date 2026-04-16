import type { Metadata } from "next";
import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import { HERO_BOOK } from "@/lib/images";
import OTAButtons from "@/components/OTAButtons";

export const metadata: Metadata = {
  title: "Book Your Stay — Bhumi Lovina Residence, North Bali",
  description:
    "Book direct by WhatsApp for the best rate, or reserve through Traveloka, Booking.com or tiket.com.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
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
            Reserve
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            Book Your Stay
          </h1>
        </div>
      </header>

      {/* Booking panel */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              Direct · Preferred
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
              WhatsApp is the best rate, always.
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10 text-pretty">
              Message our villa host directly and we&rsquo;ll reply with
              availability, a made-to-measure itinerary, and a quiet personal
              answer to every question.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary px-12 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
            >
              Message {site.contact.whatsappDisplay}
            </a>
          </div>

          <div className="bg-surface-container-low rounded-xl p-10 shadow-botanical">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              Trusted Partners
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 leading-tight">
              Reserve via an OTA
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              Available on our preferred booking partners. Rates may be slightly
              higher than the direct WhatsApp rate.
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
              Check-in
            </span>
            <div className="font-serif text-2xl font-light">From 14:00</div>
            <p className="mt-3 text-on-primary/70 font-light">
              Early arrival available on request, subject to availability.
            </p>
          </div>
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-4 block">
              Check-out
            </span>
            <div className="font-serif text-2xl font-light">Until 12:00</div>
            <p className="mt-3 text-on-primary/70 font-light">
              Late check-out offered when the next arrival allows.
            </p>
          </div>
          <div>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-4 block">
              Transfer
            </span>
            <div className="font-serif text-2xl font-light">DPS → Lovina</div>
            <p className="mt-3 text-on-primary/70 font-light">
              Private airport transfer can be arranged for all bookings; ~3 h.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

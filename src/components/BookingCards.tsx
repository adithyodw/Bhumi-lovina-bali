import { site } from "@/lib/site";
import { IconExternalLink } from "./icons";

const partners = [
  {
    href: site.ota.traveloka,
    name: "Traveloka",
    tagline: "Best deals in Southeast Asia",
  },
  {
    href: site.ota.booking,
    name: "Booking.com",
    tagline: "Worldwide trusted bookings",
  },
  {
    href: site.ota.tiket,
    name: "tiket.com",
    tagline: "Indonesia's leading platform",
  },
] as const;

type BookingCardsProps = {
  bookLabel?: string;
  variant?: "light" | "dark";
};

export default function BookingCards({
  bookLabel = "Book Now",
  variant = "light",
}: BookingCardsProps) {
  const isDark = variant === "dark";

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
      {partners.map((partner) => (
        <a
          key={partner.href}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 md:p-8 ${
            isDark
              ? "border-cream/15 bg-cream/5 hover:border-cream/30 hover:bg-cream/10"
              : "border-outline bg-surface hover:border-secondary/30 hover:shadow-card shadow-soft"
          }`}
        >
          <div
            className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${
              isDark ? "bg-cream/10 text-cream" : "bg-sand text-primary"
            }`}
          >
            <IconExternalLink size={18} />
          </div>

          <h3
            className={`mb-2 font-serif text-xl font-light ${
              isDark ? "text-cream" : "text-charcoal"
            }`}
          >
            {partner.name}
          </h3>

          <p
            className={`mb-8 flex-grow text-sm font-light leading-relaxed ${
              isDark ? "text-cream/60" : "text-on-surface-muted"
            }`}
          >
            {partner.tagline}
          </p>

          <span
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 font-sans text-[11px] uppercase tracking-widest transition-all duration-300 ${
              isDark
                ? "bg-cream text-primary group-hover:bg-white"
                : "bg-primary text-on-primary group-hover:bg-primary-dark"
            }`}
          >
            {bookLabel}
            <IconExternalLink size={14} className="opacity-70" />
          </span>
        </a>
      ))}
    </div>
  );
}

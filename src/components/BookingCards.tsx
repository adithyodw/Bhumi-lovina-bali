import { site } from "@/lib/site";

const partners = [
  {
    href: site.ota.traveloka,
    name: "Traveloka",
    tagline: "Best deals in Southeast Asia",
    color: "#0194F3",
    bg: "bg-[#0194F3]/5",
    border: "border-[#0194F3]/20",
    hover: "hover:border-[#0194F3]/50 hover:bg-[#0194F3]/10",
    logo: (
      <svg viewBox="0 0 120 28" className="h-6 w-auto" aria-hidden>
        <text
          x="0"
          y="22"
          fill="#0194F3"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="22"
        >
          Traveloka
        </text>
      </svg>
    ),
  },
  {
    href: site.ota.booking,
    name: "Booking.com",
    tagline: "Worldwide trusted bookings",
    color: "#003580",
    bg: "bg-[#003580]/5",
    border: "border-[#003580]/20",
    hover: "hover:border-[#003580]/50 hover:bg-[#003580]/10",
    logo: (
      <svg viewBox="0 0 140 28" className="h-6 w-auto" aria-hidden>
        <text
          x="0"
          y="22"
          fill="#003580"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="20"
        >
          Booking.com
        </text>
      </svg>
    ),
  },
  {
    href: site.ota.tiket,
    name: "tiket.com",
    tagline: "Indonesia's leading platform",
    color: "#0064D2",
    bg: "bg-[#0064D2]/5",
    border: "border-[#0064D2]/20",
    hover: "hover:border-[#0064D2]/50 hover:bg-[#0064D2]/10",
    logo: (
      <svg viewBox="0 0 100 28" className="h-6 w-auto" aria-hidden>
        <text
          x="0"
          y="22"
          fill="#0064D2"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="22"
        >
          tiket.com
        </text>
      </svg>
    ),
  },
] as const;

type BookingCardsProps = {
  bookLabel?: string;
};

export default function BookingCards({ bookLabel = "Book Now" }: BookingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      {partners.map((partner) => (
        <a
          key={partner.href}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col rounded-2xl border ${partner.border} ${partner.bg} ${partner.hover} p-6 md:p-8 transition-all duration-300 shadow-soft hover:shadow-card`}
        >
          <div className="mb-6">{partner.logo}</div>
          <p className="text-on-surface-muted text-sm font-light leading-relaxed mb-8 flex-grow">
            {partner.tagline}
          </p>
          <span
            className="inline-flex items-center justify-center w-full py-3 rounded-xl font-sans tracking-widest uppercase text-[11px] text-white transition-all duration-300 group-hover:opacity-90"
            style={{ backgroundColor: partner.color }}
          >
            {bookLabel}
          </span>
        </a>
      ))}
    </div>
  );
}

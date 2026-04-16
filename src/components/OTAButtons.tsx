import { site } from "@/lib/site";

const otas = [
  { href: site.ota.traveloka, label: "Traveloka" },
  { href: site.ota.booking, label: "Booking.com" },
  { href: site.ota.tiket, label: "tiket.com" },
] as const;

export default function OTAButtons({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const base =
    "flex-1 min-w-[180px] px-8 py-4 text-center font-sans tracking-widest uppercase text-xs rounded-md transition-all duration-300";
  const style =
    variant === "dark"
      ? "border border-on-primary/30 text-on-primary backdrop-blur-sm hover:bg-on-primary/10"
      : "border border-primary/15 text-primary hover:border-primary hover:bg-primary hover:text-on-primary";

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      {otas.map((o) => (
        <a
          key={o.href}
          href={o.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${style}`}
        >
          {o.label}
        </a>
      ))}
    </div>
  );
}

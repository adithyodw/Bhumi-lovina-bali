import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/data/villas";

type Props = {
  villa: Villa;
  size?: "wide" | "tall" | "square";
  priority?: boolean;
  discoverLabel?: string;
};

const aspect = {
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
} as const;

export default function VillaCard({ villa, size = "wide", priority, discoverLabel = "Discover" }: Props) {
  return (
    <Link
      href={`/villas/${villa.slug}`}
      className={`group relative overflow-hidden rounded-xl block ${aspect[size]}`}
    >
      <Image
        src={villa.heroImage}
        alt={`${villa.name} — ${villa.tagline}`}
        fill
        priority={priority}
        sizes={
          size === "wide"
            ? "(max-width: 768px) 100vw, 66vw"
            : "(max-width: 768px) 100vw, 33vw"
        }
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-on-primary">
        <span className="font-sans tracking-[0.2em] uppercase text-[10px] opacity-80 mb-2 block">
          {villa.categoryLabel}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">
          {villa.name}
        </h3>
        <p className="text-sm opacity-90 max-w-md font-light line-clamp-2">
          {villa.tagline}
        </p>
        <span className="mt-4 inline-block font-sans tracking-widest uppercase text-[10px] border-b border-on-primary/40 pb-1 group-hover:border-on-primary transition-all">
          {discoverLabel}
        </span>
      </div>
    </Link>
  );
}

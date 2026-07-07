import Image from "next/image";
import { HERO_ALT, HERO_IMAGE } from "@/lib/images";

type HeroImageProps = {
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
  overlay?: "hero" | "section" | "card" | "none";
  className?: string;
  sizes?: string;
};

const overlays = {
  hero: "bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/30",
  section: "bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-charcoal/20",
  card: "bg-gradient-to-t from-charcoal/50 to-transparent",
  none: "",
};

export default function HeroImage({
  alt = HERO_ALT,
  priority = false,
  objectPosition = "center",
  overlay = "hero",
  className = "",
  sizes = "100vw",
}: HeroImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={HERO_IMAGE}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        className="object-cover"
        style={{ objectPosition }}
      />
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlays[overlay]}`} aria-hidden />
      )}
    </div>
  );
}

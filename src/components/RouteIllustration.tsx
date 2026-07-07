import Image from "next/image";

type RouteIllustrationProps = {
  roadLabel: string;
  waypointLabel: string;
  destinationLabel: string;
  avoidLabel: string;
  imageAlt: string;
};

export default function RouteIllustration({
  roadLabel,
  waypointLabel,
  destinationLabel,
  avoidLabel,
  imageAlt,
}: RouteIllustrationProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-outline/10 bg-surface shadow-botanical">
      <div className="relative aspect-[16/10] bg-surface-container-low">
        <Image
          src="/images/arrival-route-easy-road.png"
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1536px) calc(100vw - 3rem), calc(50vw - 4rem)"
          className="object-contain"
        />
        <div className="absolute bottom-4 left-4 rounded-full bg-surface/95 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-secondary shadow-sm">
          {avoidLabel}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 border-t border-outline/10 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f3ea_100%)] p-5 md:grid-cols-3">
        <div className="rounded-2xl bg-surface/90 p-4 shadow-sm">
          <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
            1
          </span>
          <p className="text-sm font-medium text-primary">{roadLabel}</p>
        </div>

        <div className="rounded-2xl bg-surface/90 p-4 shadow-sm">
          <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
            2
          </span>
          <p className="text-sm font-medium text-primary">{waypointLabel}</p>
        </div>

        <div className="rounded-2xl bg-surface/90 p-4 shadow-sm">
          <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
            3
          </span>
          <p className="text-sm font-medium text-primary">{destinationLabel}</p>
        </div>
      </div>
    </div>
  );
}

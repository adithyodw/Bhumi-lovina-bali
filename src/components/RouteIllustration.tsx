type RouteIllustrationProps = {
  roadLabel: string;
  waypointLabel: string;
  destinationLabel: string;
  avoidLabel: string;
};

export default function RouteIllustration({
  roadLabel,
  waypointLabel,
  destinationLabel,
  avoidLabel,
}: RouteIllustrationProps) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-outline/10 bg-[linear-gradient(145deg,#fbf7ef_0%,#eef4e7_46%,#d7e8dd_100%)] p-6 shadow-botanical">
      <svg
        viewBox="0 0 640 420"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="sea" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ac7c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d9efe6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="ridge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5f7f66" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#365242" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M30 60c95-65 220-55 310 0s175 58 270 16v120c-100 58-225 56-316-2S120 134 30 182Z"
          fill="url(#sea)"
        />

        <path
          d="M42 300c55-88 142-144 230-126s119 13 176-38c48-44 114-48 160-20v224H42Z"
          fill="url(#ridge)"
        />
        <path
          d="M0 356c60-60 135-66 212-34 65 28 124 34 191-8 66-42 150-47 237-11v117H0Z"
          fill="#cedfcf"
          fillOpacity="0.8"
        />

        <path
          d="M548 360C502 317 466 277 430 235c-19-22-43-40-76-50-46-15-90-11-132-29-43-19-74-49-108-86"
          fill="none"
          stroke="#f0bc42"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M548 360C502 317 466 277 430 235c-19-22-43-40-76-50-46-15-90-11-132-29-43-19-74-49-108-86"
          fill="none"
          stroke="#fff4cf"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="2 18"
        />

        <path
          d="M516 324c-38-38-81-86-122-112-44-28-91-38-152-60-43-16-74-44-112-93"
          fill="none"
          stroke="#c96f59"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="12 16"
          opacity="0.65"
        />
        <path
          d="M184 214l40 40m0-40-40 40"
          stroke="#b85545"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <circle cx="548" cy="360" r="18" fill="#274033" />
        <circle cx="362" cy="214" r="18" fill="#6a5530" />
        <circle cx="114" cy="92" r="18" fill="#274033" />
      </svg>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex justify-end">
          <span className="rounded-full bg-surface/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-secondary shadow-sm">
            {avoidLabel}
          </span>
        </div>

        <div className="space-y-4">
          <div className="ml-auto max-w-[210px] rounded-2xl bg-surface/92 p-4 shadow-sm">
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
              1
            </span>
            <p className="text-sm font-medium text-primary">{roadLabel}</p>
          </div>

          <div className="mx-auto max-w-[220px] rounded-2xl bg-surface/92 p-4 shadow-sm">
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
              2
            </span>
            <p className="text-sm font-medium text-primary">{waypointLabel}</p>
          </div>

          <div className="max-w-[240px] rounded-2xl bg-surface/92 p-4 shadow-sm">
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-on-primary">
              3
            </span>
            <p className="text-sm font-medium text-primary">
              {destinationLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

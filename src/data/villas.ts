export type VillaCategory = "deluxe" | "suite" | "executive";

export type Villa = {
  slug: string;
  name: string;
  category: VillaCategory;
  categoryLabel: string;
  bedrooms: number;
  maxGuests: number;
  sizeSqm: number;
  tagline: string;
  intro: string;
  description: string[];
  amenities: string[];
  heroImage: string;
  gallery: string[];
};

/**
 * Image paths follow the convention:
 *   /images/villas/<category>/<slug>/lovina-villa-<category>-<slug>-XX.webp
 *
 * Drop the real photos into /public/images/villas/... after they are
 * downloaded from the Google Drive asset folder.
 */
const img = (category: VillaCategory, slug: string, i: number) =>
  `/images/villas/${category}/${slug}/lovina-villa-${category}-${slug}-${String(i).padStart(2, "0")}.webp`;

const gallery = (category: VillaCategory, slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => img(category, slug, i + 1));

export const villas: Villa[] = [
  {
    slug: "lili",
    name: "Villa Lili",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    bedrooms: 1,
    maxGuests: 2,
    sizeSqm: 68,
    tagline: "A quiet bloom above the Bali Sea.",
    intro:
      "A serene deluxe retreat wrapped in Balinese hardwood, with a private plunge pool open to the sky.",
    description: [
      "Villa Lili is the softest of the deluxe collection. A single bedroom opens through wide glass doors onto a private plunge pool, framed by frangipani and an open stretch of sea.",
      "Inside, a hand-carved teak bed faces the horizon. The bathroom is a private garden of river-stone and bamboo, lit from above by a single shaft of morning light.",
    ],
    amenities: [
      "Private plunge pool",
      "King bed",
      "Outdoor rain shower",
      "Air conditioning & ceiling fan",
      "Smart TV & high-speed Wi-Fi",
      "Bluetooth audio",
      "In-villa safe",
      "Complimentary mini-bar",
      "Daily housekeeping",
      "Breakfast included",
    ],
    heroImage: img("deluxe", "lili", 1),
    gallery: gallery("deluxe", "lili", 6),
  },
  {
    slug: "lotus",
    name: "Villa Lotus",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    bedrooms: 1,
    maxGuests: 2,
    sizeSqm: 72,
    tagline: "A still pond at the centre of the estate.",
    intro:
      "A deluxe villa encircled by lotus ponds and shaded by ancient frangipani, designed for quiet contemplation.",
    description: [
      "Villa Lotus sits at the heart of the estate, framed by lily ponds and the slow breathing of frangipani. A hand-poured terrazzo bathtub opens to a private garden.",
      "Mornings begin with birdsong and fresh-cut fruit on the open terrace. Evenings close with a candle-lit soak under a sky of stars.",
    ],
    amenities: [
      "Private plunge pool",
      "King bed",
      "Terrazzo soaking tub",
      "Air conditioning",
      "Smart TV & Wi-Fi",
      "In-villa safe",
      "Mini-bar",
      "Daily housekeeping",
      "Breakfast included",
    ],
    heroImage: img("deluxe", "lotus", 1),
    gallery: gallery("deluxe", "lotus", 6),
  },
  {
    slug: "monstera",
    name: "Villa Monstera",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    bedrooms: 1,
    maxGuests: 2,
    sizeSqm: 70,
    tagline: "A canopy of green, a pool of sky.",
    intro:
      "A jungle-adjacent deluxe villa where wild monstera leaves meet a mirrored plunge pool.",
    description: [
      "Villa Monstera is cocooned by a sculpted garden of wild greens. The private plunge pool catches the sky and turns it into an inverted painting.",
      "The interior balances raw volcanic stone with soft ivory linen and warm teak — a study in tropical restraint.",
    ],
    amenities: [
      "Private plunge pool",
      "King bed",
      "Outdoor rain shower",
      "Garden day-bed",
      "Air conditioning",
      "Wi-Fi & Bluetooth audio",
      "In-villa safe",
      "Mini-bar",
      "Breakfast included",
    ],
    heroImage: img("deluxe", "monstera", 1),
    gallery: gallery("deluxe", "monstera", 6),
  },
  {
    slug: "krisna",
    name: "Villa Krisna",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    bedrooms: 1,
    maxGuests: 2,
    sizeSqm: 74,
    tagline: "A chapter of quiet heritage.",
    intro:
      "Balinese heritage detailing and a broad covered verandah set Villa Krisna apart.",
    description: [
      "Villa Krisna honours the craft traditions of North Bali — hand-chiselled limestone, woven pandan ceilings, and a bed carved from a single reclaimed tree.",
      "A generous verandah, shaded from the midday sun, opens onto the villa's own plunge pool and a tiled sun-deck for slow afternoons.",
    ],
    amenities: [
      "Private plunge pool",
      "King bed",
      "Covered verandah",
      "Outdoor shower",
      "Air conditioning",
      "Smart TV & Wi-Fi",
      "Safe & mini-bar",
      "Breakfast included",
    ],
    heroImage: img("deluxe", "krisna", 1),
    gallery: gallery("deluxe", "krisna", 6),
  },
  {
    slug: "tunjung",
    name: "Villa Tunjung",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    bedrooms: 1,
    maxGuests: 2,
    sizeSqm: 68,
    tagline: "The lotus that opens at dusk.",
    intro:
      "A deluxe villa named for the night-blooming lotus — warm, low-lit, and deeply private.",
    description: [
      "Villa Tunjung is the warmest of the deluxe villas, finished in burnished teak and smoked rattan. By evening, hidden lighting turns the plunge pool into a pool of amber.",
      "A tucked-away reading nook and a generous outdoor daybed make this the quietest of the five.",
    ],
    amenities: [
      "Private plunge pool",
      "King bed",
      "Outdoor daybed",
      "Reading nook",
      "Air conditioning",
      "Wi-Fi & Bluetooth",
      "Safe & mini-bar",
      "Breakfast included",
    ],
    heroImage: img("deluxe", "tunjung", 1),
    gallery: gallery("deluxe", "tunjung", 6),
  },
  {
    slug: "ashoka",
    name: "Villa Ashoka",
    category: "suite",
    categoryLabel: "Suite Villa",
    bedrooms: 2,
    maxGuests: 4,
    sizeSqm: 120,
    tagline: "A suite of rooms, a single view.",
    intro:
      "A two-bedroom suite villa with a private pool and a full open-air living pavilion.",
    description: [
      "Villa Ashoka is composed as a small compound: two bedroom pavilions, a living pavilion, and an outdoor kitchen, all arranged around a mirror-still private pool.",
      "It is an ideal retreat for families or two couples travelling together, with enough room to share the evening and retreat in private.",
    ],
    amenities: [
      "Private pool",
      "Two king bedrooms",
      "Open-air living pavilion",
      "Outdoor kitchen",
      "Two en-suite bathrooms",
      "Air conditioning throughout",
      "Smart TV & Wi-Fi",
      "In-villa safe",
      "Daily housekeeping",
      "Breakfast included",
    ],
    heroImage: img("suite", "ashoka", 1),
    gallery: gallery("suite", "ashoka", 8),
  },
  {
    slug: "bougainville",
    name: "Villa Bougainville",
    category: "suite",
    categoryLabel: "Suite Villa",
    bedrooms: 2,
    maxGuests: 4,
    sizeSqm: 130,
    tagline: "Two bedrooms, a garden of flame-red bloom.",
    intro:
      "A suite villa wrapped in bougainvillea, with a sculpted private garden and a full-length pool.",
    description: [
      "Villa Bougainville is the most generous of the suites. A long rectangular pool runs the length of the garden, framed by flame-red bougainvillea and a hand-laid terrazzo sun-deck.",
      "Both bedrooms open directly onto the garden, with deep-plunge bathtubs and private outdoor showers.",
    ],
    amenities: [
      "15 m private pool",
      "Two king bedrooms",
      "Two en-suite bathrooms",
      "Outdoor showers",
      "Living & dining pavilion",
      "Air conditioning",
      "Smart TV & Wi-Fi",
      "Safe & mini-bar",
      "Breakfast included",
    ],
    heroImage: img("suite", "bougainville", 1),
    gallery: gallery("suite", "bougainville", 8),
  },
  {
    slug: "kayu",
    name: "Villa Kayu",
    category: "executive",
    categoryLabel: "Executive Villa",
    bedrooms: 3,
    maxGuests: 6,
    sizeSqm: 220,
    tagline: "The estate's signature residence.",
    intro:
      "The signature executive residence — three bedrooms, a private infinity pool, and uninterrupted views of the Bali Sea.",
    description: [
      "Villa Kayu is the flagship residence of Bhumi Lovina. A long infinity pool reaches toward the sea, separated only by a line of frangipani. Three generous bedroom suites are arranged across two pavilions, each with its own open-air bathroom.",
      "A full chef's kitchen, dedicated dining pavilion, and a discreet butler's pantry make Villa Kayu ideal for families, close friends, or a small private retreat.",
      "Private airport transfer, a dedicated villa host, and a made-to-measure experience itinerary are included.",
    ],
    amenities: [
      "Private infinity pool",
      "Three king bedrooms",
      "Three en-suite bathrooms",
      "Open-air living & dining pavilion",
      "Full chef's kitchen",
      "Dedicated villa host",
      "Private airport transfer",
      "Smart TV & Wi-Fi",
      "Safe & mini-bar",
      "Breakfast included",
    ],
    heroImage: img("executive", "kayu", 1),
    gallery: gallery("executive", "kayu", 10),
  },
];

export const villaBySlug = (slug: string) =>
  villas.find((v) => v.slug === slug);

export const villasByCategory = (category: VillaCategory) =>
  villas.filter((v) => v.category === category);

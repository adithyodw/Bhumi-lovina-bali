import {
  EXP_DOLPHIN,
  EXP_SNORKELING,
  EXP_WATERFALL,
  EXP_TEMPLE,
  EXP_HOTSPRINGS,
} from "@/lib/images";

export type Experience = {
  slug: string;
  category: "Nature" | "Adventure" | "Culture" | "Wellness" | "Culinary";
  title: string;
  summary: string;
  description: string;
  image: string;
  keywords: string[];
};

export const experiences: Experience[] = [
  {
    slug: "lovina-dolphin-tour",
    category: "Nature",
    title: "Sunrise Dolphin Tour, Lovina",
    summary:
      "A private, ethical dolphin-watching journey on a traditional Balinese jukung at first light.",
    description:
      "Lovina is the only coast in Bali where wild spinner and bottlenose dolphins greet the dawn by the hundreds. Our private dolphin tour begins at 5:30 AM, a short walk from your villa, aboard a traditional jukung crewed by a local fisherman. We keep a respectful distance, ask that engines are cut early, and time the trip to avoid the crowded main pod.",
    image: EXP_DOLPHIN,
    keywords: [
      "lovina dolphin tour",
      "dolphin watching bali",
      "dolphin watching lovina",
      "sunrise dolphin tour bali",
    ],
  },
  {
    slug: "snorkeling-and-diving-lovina",
    category: "Adventure",
    title: "Snorkeling & Diving, Lovina Reef",
    summary:
      "Private snorkeling and diving trips to the quiet reefs of Lovina and Menjangan Island.",
    description:
      "The reef off Lovina is one of North Bali's quietest. Unlike the crowded south, here you can still drift alone above staghorn coral and clouds of butterflyfish. We offer guided half-day snorkeling trips to the house reef and full-day private boats to Menjangan Island, a protected marine national park.",
    image: EXP_SNORKELING,
    keywords: [
      "snorkeling lovina",
      "menjangan island snorkeling",
      "north bali diving",
    ],
  },
  {
    slug: "north-bali-waterfalls",
    category: "Nature",
    title: "Waterfalls of North Bali",
    summary:
      "Gitgit, Sekumpul and the seven-tier Aling-Aling — guided waterfall journeys with a private driver.",
    description:
      "North Bali's waterfalls are its best-kept secret. Gitgit is the classic — a single 40 m ribbon of white water in a jungle amphitheatre. Sekumpul, an hour inland, is often called the most beautiful in Indonesia — seven cascades fed by a volcanic river. Aling-Aling rewards the brave with natural rock slides and leaps into deep, cold pools.",
    image: EXP_WATERFALL,
    keywords: [
      "waterfalls in north bali",
      "gitgit waterfall",
      "sekumpul waterfall",
      "aling-aling waterfall",
    ],
  },
  {
    slug: "temples-of-north-bali",
    category: "Culture",
    title: "Temples of North Bali",
    summary:
      "Ulun Danu Beratan, Brahma Vihara Arama and the quiet village temples of Buleleng.",
    description:
      "North Bali is home to some of the island's most photogenic temples. Pura Ulun Danu Beratan floats on the edge of a crater lake. Brahma Vihara Arama, the island's largest Buddhist monastery, is a study in silence. We arrange private, respectful visits with a temple sash, a sarong, and a guide from the village.",
    image: EXP_TEMPLE,
    keywords: ["ulun danu beratan", "north bali temples", "brahma vihara"],
  },
  {
    slug: "banjar-hot-springs",
    category: "Wellness",
    title: "Banjar Hot Springs",
    summary:
      "Mineral-rich volcanic hot springs set in a jungle garden, 20 minutes from the estate.",
    description:
      "Air Panas Banjar is a trio of sulphur-rich natural hot-spring pools fed from deep beneath the Munduk volcano. A short drive inland, the springs sit in a quiet walled garden of frangipani and stone-carved nagas, and are best visited in the cool early evening.",
    image: EXP_HOTSPRINGS,
    keywords: ["banjar hot springs", "bali hot springs", "wellness bali"],
  },
];

export type NearbyPlace = {
  name: string;
  category: "Restaurant" | "Cafe" | "Market" | "Shop" | "Beach Club";
  distanceKm: number;
  summary: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  {
    name: "The Terrace at Lovina",
    category: "Restaurant",
    distanceKm: 0.8,
    summary: "Signature seafood and fine dining, a short walk from the estate.",
  },
  {
    name: "Kopi & Kalma",
    category: "Cafe",
    distanceKm: 1.2,
    summary: "Artisanal coffee and organic brunch in a quiet courtyard.",
  },
  {
    name: "SeaSalt Beach Club",
    category: "Beach Club",
    distanceKm: 2.5,
    summary: "Cocktails and the best uninterrupted sunsets on the north coast.",
  },
  {
    name: "Warung Dolphin",
    category: "Restaurant",
    distanceKm: 1.0,
    summary: "Balinese seafood the way the locals still cook it.",
  },
  {
    name: "Lovina Night Market",
    category: "Market",
    distanceKm: 1.5,
    summary: "Small, local, and very Balinese — best after sunset.",
  },
  {
    name: "Kalibukbuk Wellness Shop",
    category: "Shop",
    distanceKm: 1.1,
    summary: "Hand-blended oils, teas, and jamu by a local herbalist.",
  },
];

import {
  VILLA_ASHOKA_GALLERY,
  VILLA_BOUGAINVILLE_GALLERY,
  VILLA_KAYU_GALLERY,
  VILLA_KRISNA_GALLERY,
  VILLA_LILI_GALLERY,
  VILLA_LOTUS_GALLERY,
  VILLA_MONSTERA_GALLERY,
  VILLA_TUNJUNG_GALLERY,
} from "@/lib/villa-images";

export type VillaCategory = "deluxe" | "suite" | "executive";

type VillaTranslation = {
  categoryLabel: string;
  tagline: string;
  intro: string;
  description: string[];
  amenities: string[];
  occupancy: string;
  bathroom: string;
  bedSetup: string[];
  extraGuestPolicy: string;
  extraBeds: string;
  kitchenFacilities: string[];
  typeNote: string;
};

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
  occupancy: string;
  bathroom: string;
  bedSetup: string[];
  extraGuestPolicy: string;
  extraBeds: string;
  kitchenFacilities: string[];
  typeNote: string;
  translations?: { id: VillaTranslation };
};

export function villaLocale(v: Villa, locale: string): Villa {
  if (locale !== "id" || !v.translations?.id) return v;
  return { ...v, ...v.translations.id };
}

const COMMON_AMENITIES = [
  "2-bedroom private pool villa",
  "Private WiFi",
  "Full kitchen (refrigerator, stove, knife, frying pan, pot, cups, plates, spoon & fork)",
  "Dining utensils",
  "TV",
  "Water heater",
  "AC in every room",
  "Balcony",
  "Bathroom amenities (soap, shampoo, 2 towels)",
];

const COMMON_AMENITIES_ID = [
  "Vila 2 kamar tidur dengan kolam renang pribadi",
  "WiFi pribadi",
  "Dapur lengkap (kulkas, kompor, pisau, teplon, panci, cangkir, piring, sendok & garpu)",
  "Perlengkapan makan",
  "TV",
  "Water heater",
  "AC di setiap kamar",
  "Balkon",
  "Fasilitas kamar mandi (sabun, sampo, 2 handuk)",
];

const AQUA_AMENITY = "Complimentary Aqua gallon drinking water (dispenser)";
const AQUA_AMENITY_ID = "Fasilitas air galon Aqua gratis";

const COMMON_KITCHEN = [
  "Refrigerator",
  "Stove",
  "Knife",
  "Frying pan (teflon)",
  "Cooking pot",
  "Cups",
  "Plates",
  "Spoon & fork",
];

const COMMON_KITCHEN_ID = [
  "Kulkas",
  "Kompor",
  "Pisau",
  "Wajan teflon",
  "Panci",
  "Gelas",
  "Piring",
  "Sendok & garpu",
];

const DELUXE_BED_SETUP = [
  "Level 1: 1 Queen Bed",
  "Level 2: 2 Single Beds",
];

const DELUXE_BED_SETUP_ID = [
  "Lantai 1: 1 Queen Bed",
  "Lantai 2: 2 Single Beds",
];

const SUITE_BED_SETUP = [
  "Level 1: 1 Queen Bed",
  "Level 2: 1 Queen Bed",
];

const SUITE_BED_SETUP_ID = [
  "Lantai 1: 1 Queen Bed",
  "Lantai 2: 1 Queen Bed",
];

const EXECUTIVE_BED_SETUP = [
  "Level 1: 1 Queen Bed",
  "Level 2: 1 Queen Bed",
];

const EXECUTIVE_BED_SETUP_ID = [
  "Lantai 1: 1 Queen Bed",
  "Lantai 2: 1 Queen Bed",
];

function createVilla(base: {
  slug: string;
  name: string;
  category: VillaCategory;
  categoryLabel: string;
  sizeSqm: number;
  tagline: string;
  taglineId: string;
  heroImage: string;
  gallery: readonly string[];
  intro: string;
  introId: string;
  description: string[];
  descriptionId: string[];
  occupancy: string;
  occupancyId: string;
  bathroom: string;
  bathroomId: string;
  bedSetup: string[];
  bedSetupId: string[];
  typeNote: string;
  typeNoteId: string;
  amenities?: string[];
  amenitiesId?: string[];
  extraGuestPolicy?: string;
  extraGuestPolicyId?: string;
  extraBeds?: string;
  extraBedsId?: string;
  maxGuests?: number;
}): Villa {
  return {
    slug: base.slug,
    name: base.name,
    category: base.category,
    categoryLabel: base.categoryLabel,
    bedrooms: 2,
    maxGuests: base.maxGuests ?? 5,
    sizeSqm: base.sizeSqm,
    tagline: base.tagline,
    intro: base.intro,
    description: base.description,
    amenities: base.amenities ?? COMMON_AMENITIES,
    heroImage: base.heroImage,
    gallery: [...base.gallery],
    occupancy: base.occupancy,
    bathroom: base.bathroom,
    bedSetup: base.bedSetup,
    extraGuestPolicy:
      base.extraGuestPolicy ??
      "Extra adult: IDR 110,000/person · Extra child: IDR 55,000/person",
    extraBeds: base.extraBeds ?? "No extra beds available",
    kitchenFacilities: COMMON_KITCHEN,
    typeNote: base.typeNote,
    translations: {
      id: {
        categoryLabel:
          base.category === "executive"
            ? "Vila Eksekutif"
            : base.category === "suite"
              ? "Vila Suite"
              : "Vila Deluxe",
        tagline: base.taglineId,
        intro: base.introId,
        description: base.descriptionId,
        amenities: base.amenitiesId ?? COMMON_AMENITIES_ID,
        occupancy: base.occupancyId,
        bathroom: base.bathroomId,
        bedSetup: base.bedSetupId,
        extraGuestPolicy:
          base.extraGuestPolicyId ??
          "Tamu dewasa tambahan: IDR 110.000/orang · Tamu anak tambahan: IDR 55.000/orang",
        extraBeds: base.extraBedsId ?? "Tidak ada extra bed tersedia",
        kitchenFacilities: COMMON_KITCHEN_ID,
        typeNote: base.typeNoteId,
      },
    },
  };
}

const DELUXE_INTRO =
  "A 150 m² two-storey, two-bedroom private pool villa with 1 bathroom on the ground floor — ideal for up to 5 adults or 4 adults and 2 children.";
const DELUXE_INTRO_ID =
  "Vila 150 m², 2 lantai, 2 kamar tidur, kolam renang pribadi, dan 1 kamar mandi di lantai bawah — ideal untuk maksimal 5 dewasa atau 4 dewasa dan 2 anak.";
const DELUXE_DESCRIPTION = [
  "Each deluxe villa is one of eight private units at Bhumi Lovina Residence & Villa, with 2 bedrooms, 1 ground-floor bathroom, and a private pool.",
  "Bed configuration: Level 1 has 1 queen bed; Level 2 has 2 single beds. Standard bathroom amenities include soap, shampoo, and 2 towels.",
];
const DELUXE_DESCRIPTION_ID = [
  "Setiap vila deluxe merupakan salah satu dari 8 unit vila pribadi di Bhumi Lovina Residence & Villa, dengan 2 kamar tidur, 1 kamar mandi di lantai bawah, dan kolam renang pribadi.",
  "Susunan tempat tidur: Lantai 1 dengan 1 queen bed; Lantai 2 dengan 2 single beds. Fasilitas kamar mandi standar meliputi sabun, sampo, dan 2 handuk.",
];

const SUITE_INTRO =
  "A 200 m² premium-design two-storey suite with 2 bedrooms, 1 ground-floor bathroom, private pool, and complimentary Aqua gallon drinking water.";
const SUITE_INTRO_ID =
  "Suite premium 200 m², 2 lantai, 2 kamar tidur, 1 kamar mandi di lantai bawah, kolam renang pribadi, dan fasilitas air galon Aqua gratis.";
const SUITE_DESCRIPTION = [
  "Our two suite villas — Villa Ashoka and Villa Bougainville — offer premium design across 200 m² with 2 storeys and 2 bedrooms.",
  "Bed configuration: 1 queen bed on Level 1 and 1 queen bed on Level 2. Includes complimentary Aqua gallon drinking water (dispenser).",
];
const SUITE_DESCRIPTION_ID = [
  "Dua vila suite kami — Villa Ashoka dan Villa Bougainville — menawarkan desain premium seluas 200 m² dengan 2 lantai dan 2 kamar tidur.",
  "Susunan tempat tidur: 1 queen bed di Lantai 1 dan 1 queen bed di Lantai 2. Termasuk fasilitas air galon Aqua gratis.",
];

const EXEC_INTRO =
  "A 150 m² premium wood executive villa with 2 storeys, 2 bedrooms, 1 ground-floor bathroom, private pool, and complimentary Aqua gallon drinking water.";
const EXEC_INTRO_ID =
  "Vila eksekutif premium kayu 150 m², 2 lantai, 2 kamar tidur, 1 kamar mandi di lantai bawah, kolam renang pribadi, dan fasilitas air galon Aqua gratis.";
const EXEC_DESCRIPTION = [
  "Villa Kayu is our single executive unit with premium wood finishes, 2 bedrooms, 1 ground-floor bathroom, and a private pool.",
  "Bed configuration: 1 queen bed on Level 1 and 1 queen bed on Level 2. Strict maximum of 5 guests total — no exceptions and no extra beds.",
];
const EXEC_DESCRIPTION_ID = [
  "Villa Kayu adalah satu-satunya unit eksekutif kami dengan sentuhan kayu premium, 2 kamar tidur, 1 kamar mandi di lantai bawah, dan kolam renang pribadi.",
  "Susunan tempat tidur: 1 queen bed di Lantai 1 dan 1 queen bed di Lantai 2. Kapasitas maksimal ketat 5 orang — tanpa pengecualian dan tanpa extra bed.",
];

const SUITE_AMENITIES = [...COMMON_AMENITIES, AQUA_AMENITY];
const SUITE_AMENITIES_ID = [...COMMON_AMENITIES_ID, AQUA_AMENITY_ID];

export const villas: Villa[] = [
  createVilla({
    slug: "lotus",
    name: "Villa Lotus",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A still pond at the centre of the estate.",
    taglineId: "Kolam hening di jantung kawasan.",
    heroImage: VILLA_LOTUS_GALLERY[0],
    gallery: VILLA_LOTUS_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "lili",
    name: "Villa Lily",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A quiet bloom above the Bali Sea.",
    taglineId: "Mekar tenang di atas Laut Bali.",
    heroImage: VILLA_LILI_GALLERY[0],
    gallery: VILLA_LILI_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "monstera",
    name: "Villa Monstera",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A canopy of green, a pool of sky.",
    taglineId: "Kanopi hijau, kolam langit biru.",
    heroImage: VILLA_MONSTERA_GALLERY[0],
    gallery: VILLA_MONSTERA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "krisna",
    name: "Villa Krisna",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A chapter of quiet heritage.",
    taglineId: "Bab warisan yang sunyi.",
    heroImage: VILLA_KRISNA_GALLERY[0],
    gallery: VILLA_KRISNA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "tunjung",
    name: "Villa Tunjung",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "The lotus that opens at dusk.",
    taglineId: "Teratai yang mekar saat senja.",
    heroImage: VILLA_TUNJUNG_GALLERY[0],
    gallery: VILLA_TUNJUNG_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "ashoka",
    name: "Villa Ashoka",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Premium design across two serene levels.",
    taglineId: "Desain premium di dua lantai yang tenang.",
    heroImage: VILLA_ASHOKA_GALLERY[0],
    gallery: VILLA_ASHOKA_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: SUITE_DESCRIPTION,
    descriptionId: SUITE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: SUITE_BED_SETUP,
    bedSetupId: SUITE_BED_SETUP_ID,
    typeNote: "Premium design suite with complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite desain premium dengan fasilitas air galon Aqua gratis.",
    amenities: SUITE_AMENITIES,
    amenitiesId: SUITE_AMENITIES_ID,
  }),
  createVilla({
    slug: "bougainville",
    name: "Villa Bougainville",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Two bedrooms, a garden of flame-red bloom.",
    taglineId: "Dua kamar, taman bunga merah membara.",
    heroImage: VILLA_BOUGAINVILLE_GALLERY[0],
    gallery: VILLA_BOUGAINVILLE_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: SUITE_DESCRIPTION,
    descriptionId: SUITE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: SUITE_BED_SETUP,
    bedSetupId: SUITE_BED_SETUP_ID,
    typeNote: "Premium design suite with complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite desain premium dengan fasilitas air galon Aqua gratis.",
    amenities: SUITE_AMENITIES,
    amenitiesId: SUITE_AMENITIES_ID,
  }),
  createVilla({
    slug: "kayu",
    name: "Villa Kayu",
    category: "executive",
    categoryLabel: "Executive Villa",
    sizeSqm: 150,
    tagline: "Premium wood finishes in the executive residence.",
    taglineId: "Sentuhan kayu premium di hunian eksekutif.",
    heroImage: VILLA_KAYU_GALLERY[0],
    gallery: VILLA_KAYU_GALLERY,
    intro: EXEC_INTRO,
    introId: EXEC_INTRO_ID,
    description: EXEC_DESCRIPTION,
    descriptionId: EXEC_DESCRIPTION_ID,
    occupancy: "Strict maximum of 5 guests total",
    occupancyId: "Kapasitas maksimal ketat 5 orang",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: EXECUTIVE_BED_SETUP,
    bedSetupId: EXECUTIVE_BED_SETUP_ID,
    typeNote: "Executive villa with Aqua gallon drinking water. No extra beds.",
    typeNoteId: "Vila eksekutif dengan fasilitas air galon Aqua. Tidak ada extra bed.",
    amenities: SUITE_AMENITIES,
    amenitiesId: SUITE_AMENITIES_ID,
    extraGuestPolicy: "Strict maximum of 5 guests — no additional guests permitted",
    extraGuestPolicyId: "Kapasitas maksimal ketat 5 orang — tidak dapat menambah tamu",
    extraBeds: "No extra beds available — no exceptions",
    extraBedsId: "Tidak ada extra bed — tanpa pengecualian",
    maxGuests: 5,
  }),
];

export const villaBySlug = (slug: string) =>
  villas.find((v) => v.slug === slug);

export const villasByCategory = (category: VillaCategory) =>
  villas.filter((v) => v.category === category);

export const villaTiers = [
  {
    key: "suite" as const,
    count: 2,
    sizeSqm: 200,
    names: ["Villa Ashoka", "Villa Bougainville"],
  },
  {
    key: "executive" as const,
    count: 1,
    sizeSqm: 150,
    names: ["Villa Kayu"],
  },
  {
    key: "deluxe" as const,
    count: 5,
    sizeSqm: 150,
    names: [
      "Villa Lotus",
      "Villa Lily",
      "Villa Monstera",
      "Villa Krisna",
      "Villa Tunjung",
    ],
  },
];

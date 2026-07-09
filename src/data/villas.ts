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

const GROUND_QUEEN_UPPER_SINGLES = [
  "Ground floor: 1 Queen Bed",
  "Upper floor: 2 Single Beds",
];

const GROUND_QUEEN_UPPER_SINGLES_ID = [
  "Lantai bawah: 1 Queen Bed",
  "Lantai atas: 2 Single Beds",
];

const EXECUTIVE_BED_SETUP = [
  "Ground floor: 1 Queen Bed",
  "Upper floor: 1 Queen Bed",
];

const EXECUTIVE_BED_SETUP_ID = [
  "Lantai bawah: 1 Queen Bed",
  "Lantai atas: 1 Queen Bed",
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
  "An elegant 150 m² two-storey retreat with two bedrooms, a ground-floor bathroom, and your own private pool — thoughtfully composed for families and friends.";
const DELUXE_INTRO_ID =
  "Hunian elegan 150 m², 2 lantai, dengan dua kamar tidur, kamar mandi di lantai bawah, dan kolam renang pribadi — dirancang dengan penuh pertimbangan untuk keluarga dan teman.";
const DELUXE_DESCRIPTION = [
  "Each deluxe villa is a private sanctuary within our eight-villa estate, framed by rice fields and the quiet rhythm of North Bali.",
  "The ground floor welcomes you with a queen bedroom and living space opening to the pool. Upstairs, two single beds offer flexible sleeping for children or companions.",
];
const DELUXE_DESCRIPTION_ID = [
  "Setiap vila deluxe adalah surga pribadi di dalam kawasan delapan vila kami, dikelilingi sawah dan irama tenang Bali Utara.",
  "Lantai bawah menyambut Anda dengan kamar queen dan ruang tamu yang terbuka ke kolam. Di lantai atas, dua single bed memberikan fleksibilitas untuk anak atau teman menginap.",
];

const SUITE_INTRO =
  "Our most spacious 200 m² suite residences — premium Balinese design across two storeys, with a private pool, ground-floor bathroom, and complimentary Aqua gallon drinking water.";
const SUITE_INTRO_ID =
  "Hunian suite terluas kami seluas 200 m² — desain Bali premium di dua lantai, kolam renang pribadi, kamar mandi di lantai bawah, dan fasilitas air galon Aqua gratis.";

const EXEC_INTRO =
  "Villa Kayu is our singular executive residence — 150 m² of warm premium wood, two queen bedrooms across two storeys, and an intimate private pool setting.";
const EXEC_INTRO_ID =
  "Villa Kayu adalah satu-satunya hunian eksekutif kami — 150 m² dengan sentuhan kayu premium, dua kamar queen di dua lantai, dan kolam renang pribadi yang intim.";
const EXEC_DESCRIPTION = [
  "Crafted with rich timber accents and thoughtful spatial design, Villa Kayu offers a refined escape for guests who appreciate understated luxury.",
  "One queen bed on each floor provides comfortable sleeping for up to five guests — our strict maximum, with no additional guests permitted and no extra beds available.",
];
const EXEC_DESCRIPTION_ID = [
  "Dibuat dengan aksen kayu yang kaya dan tata ruang yang matang, Villa Kayu menawarkan pelarian halus bagi tamu yang menghargai kemewahan yang sederhana.",
  "Satu queen bed di setiap lantai menampung hingga lima tamu — kapasitas maksimal ketat kami, tanpa tamu tambahan dan tanpa extra bed.",
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
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
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
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
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
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
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
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
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
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Standard deluxe facilities across 150 m².",
    typeNoteId: "Fasilitas deluxe standar seluas 150 m².",
  }),
  createVilla({
    slug: "ashoka",
    name: "Villa Ashoka",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Where premium design meets the open sky.",
    taglineId: "Di mana desain premium bertemu langit terbuka.",
    heroImage: VILLA_ASHOKA_GALLERY[0],
    gallery: VILLA_ASHOKA_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: [
      "Named for the sacred Ashoka tree, this 200 m² suite is a study in calm — clean lines, natural textures, and generous light throughout two storeys.",
      "Ground floor queen bedroom opens to your private pool. The upper level holds two single beds for flexible family arrangements. Complimentary Aqua gallon included.",
    ],
    descriptionId: [
      "Dinamai dari pohon Ashoka yang sakral, suite 200 m² ini adalah perwujudan ketenangan — garis bersih, tekstur alami, dan cahaya melimpah di dua lantai.",
      "Kamar queen di lantai bawah terbuka ke kolam pribadi. Lantai atas memiliki dua single bed untuk susunan keluarga yang fleksibel. Termasuk galon Aqua gratis.",
    ],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Premium 200 m² suite with complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite premium 200 m² dengan fasilitas air galon Aqua gratis.",
    amenities: SUITE_AMENITIES,
    amenitiesId: SUITE_AMENITIES_ID,
  }),
  createVilla({
    slug: "bougainville",
    name: "Villa Bougainville",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Tropical bloom, timeless Balinese grace.",
    taglineId: "Mekar tropis, keanggunan Bali abadi.",
    heroImage: VILLA_BOUGAINVILLE_GALLERY[0],
    gallery: VILLA_BOUGAINVILLE_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: [
      "Inspired by the vivid bougainvillea that frames our estate, this 200 m² suite pairs bold tropical character with refined, resort-level comfort.",
      "A queen bedroom on the ground floor leads to the pool deck. Upstairs, two single beds accommodate children or guests. Complimentary Aqua gallon included.",
    ],
    descriptionId: [
      "Terinspirasi dari bougainvillea cerah yang membingkai kawasan kami, suite 200 m² ini memadukan karakter tropis dengan kenyamanan setara resor.",
      "Kamar queen di lantai bawah menuju dek kolam. Di lantai atas, dua single bed untuk anak atau tamu. Termasuk galon Aqua gratis.",
    ],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Premium 200 m² suite with complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite premium 200 m² dengan fasilitas air galon Aqua gratis.",
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

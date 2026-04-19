import {
  VILLA_LILI,
  VILLA_LOTUS,
  VILLA_MONSTERA,
  VILLA_KRISNA,
  VILLA_TUNJUNG,
  VILLA_BOUGAINVILLE,
  VILLA_KAYU,
} from "@/lib/images";
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
  "Kitchen + cooking equipment",
  "Dining utensils",
  "Refrigerator",
  "TV",
  "Water heater",
  "AC in every room",
  "Balcony",
  "Bathroom amenities (soap, shampoo, 2 towels)",
];

const COMMON_AMENITIES_ID = [
  "Vila 2 kamar dengan kolam renang pribadi",
  "WiFi pribadi",
  "Dapur + peralatan memasak",
  "Peralatan makan",
  "Kulkas",
  "TV",
  "Pemanas air",
  "AC di setiap kamar",
  "Balkon",
  "Perlengkapan kamar mandi (sabun, sampo, 2 handuk)",
];

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
  "1st floor: 1 Queen Bed",
  "2nd floor: 2 Single Beds",
];

const DELUXE_BED_SETUP_ID = [
  "Lantai 1: 1 Queen Bed",
  "Lantai 2: 2 Single Beds",
];

const EXECUTIVE_BED_SETUP = [
  "1st floor: 1 Queen Bed",
  "2nd floor: 1 Queen Bed",
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
}): Villa {
  return {
    slug: base.slug,
    name: base.name,
    category: base.category,
    categoryLabel: base.categoryLabel,
    bedrooms: 2,
    maxGuests: 5,
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
      "Extra adult: IDR 110,000/person · Extra child: IDR 55,000/person",
    extraBeds: "No extra beds available",
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
          "Tamu dewasa tambahan: IDR 110.000/orang · Tamu anak tambahan: IDR 55.000/orang",
        extraBeds: "Tidak ada extra bed tersedia",
        kitchenFacilities: COMMON_KITCHEN_ID,
        typeNote: base.typeNoteId,
      },
    },
  };
}

const DELUXE_INTRO =
  "A 150 m² two-bedroom private pool villa with 1 bathroom on the ground floor, ideal for up to 5 adults or 4 adults + 2 children.";
const DELUXE_INTRO_ID =
  "Vila 150 m² dengan 2 kamar tidur, kolam renang pribadi, dan 1 kamar mandi di lantai dasar, ideal untuk hingga 5 dewasa atau 4 dewasa + 2 anak.";
const DELUXE_DESCRIPTION = [
  "Each deluxe villa at Bhumi Lovina Residence is one of our 8 private villa units, arranged for practical family stays with 2 bedrooms, 1 bathroom on the ground floor, and a private pool.",
  "The bed setup is 1 queen bed on the 1st floor and 2 single beds on the 2nd floor. Bathroom amenities include soap, shampoo, and 2 towels, while extra charges apply at IDR 110,000 per adult and IDR 55,000 per child within the stated occupancy.",
];
const DELUXE_DESCRIPTION_ID = [
  "Setiap vila deluxe di Bhumi Lovina Residence merupakan bagian dari 8 unit vila pribadi kami, dirancang praktis untuk keluarga dengan 2 kamar tidur, 1 kamar mandi di lantai dasar, dan kolam renang pribadi.",
  "Susunan tempat tidurnya adalah 1 queen bed di lantai 1 dan 2 single beds di lantai 2. Perlengkapan kamar mandi meliputi sabun, sampo, dan 2 handuk, sementara biaya tambahan berlaku sebesar IDR 110.000 per dewasa dan IDR 55.000 per anak sesuai batas okupansi.",
];

const SUITE_INTRO =
  "A 200 m² two-bedroom private pool villa with 1 bathroom on the ground floor and complimentary Aqua gallon drinking water.";
const SUITE_INTRO_ID =
  "Vila 200 m² dengan 2 kamar tidur, kolam renang pribadi, 1 kamar mandi di lantai dasar, dan Aqua galon air minum gratis.";
const SUITE_DESCRIPTION = [
  "Our suite villas share the same core facilities as every Bhumi Lovina villa: 2 bedrooms, 1 bathroom on the ground floor, a private pool, private WiFi, and a complete kitchen setup.",
  "Each suite offers 200 m² of space with 1 queen bed on the 1st floor and 2 single beds on the 2nd floor. The only facility difference is complimentary Aqua gallon drinking water.",
];
const SUITE_DESCRIPTION_ID = [
  "Vila suite kami memiliki fasilitas inti yang sama dengan semua vila Bhumi Lovina: 2 kamar tidur, 1 kamar mandi di lantai dasar, kolam renang pribadi, WiFi pribadi, dan perlengkapan dapur lengkap.",
  "Setiap suite memiliki luas 200 m² dengan 1 queen bed di lantai 1 dan 2 single beds di lantai 2. Satu-satunya perbedaan fasilitas adalah Aqua galon air minum gratis.",
];

const EXEC_INTRO =
  "A 150 m² executive two-bedroom private pool villa with 1 bathroom on the ground floor and a maximum occupancy of 5 adults only.";
const EXEC_INTRO_ID =
  "Vila eksekutif 150 m² dengan 2 kamar tidur, kolam renang pribadi, 1 kamar mandi di lantai dasar, dan kapasitas maksimum 5 dewasa saja.";
const EXEC_DESCRIPTION = [
  "The executive villa follows the same core facility standard as our deluxe and suite categories, with 2 bedrooms, 1 bathroom on the ground floor, private WiFi, a private pool, and full kitchen equipment.",
  "This villa offers 1 queen bed on the 1st floor and 1 queen bed on the 2nd floor. Maximum occupancy is strictly 5 adults, with no extra beds available.",
];
const EXEC_DESCRIPTION_ID = [
  "Vila eksekutif mengikuti standar fasilitas inti yang sama dengan kategori deluxe dan suite kami, dengan 2 kamar tidur, 1 kamar mandi di lantai dasar, WiFi pribadi, kolam renang pribadi, dan perlengkapan dapur lengkap.",
  "Vila ini menyediakan 1 queen bed di lantai 1 dan 1 queen bed di lantai 2. Kapasitas maksimum adalah 5 dewasa dan tidak tersedia extra bed.",
];

const ASHOKA_HERO_IMAGE = VILLA_ASHOKA_GALLERY[3];

export const villas: Villa[] = [
  createVilla({
    slug: "lili",
    name: "Villa Lili",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A quiet bloom above the Bali Sea.",
    taglineId: "Mekar tenang di atas Laut Bali.",
    heroImage: VILLA_LILI,
    gallery: VILLA_LILI_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "All facilities are the same across villa types.",
    typeNoteId: "Semua tipe vila memiliki fasilitas yang sama.",
  }),
  createVilla({
    slug: "lotus",
    name: "Villa Lotus",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A still pond at the centre of the estate.",
    taglineId: "Kolam hening di jantung kawasan.",
    heroImage: VILLA_LOTUS,
    gallery: VILLA_LOTUS_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "All facilities are the same across villa types.",
    typeNoteId: "Semua tipe vila memiliki fasilitas yang sama.",
  }),
  createVilla({
    slug: "monstera",
    name: "Villa Monstera",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A canopy of green, a pool of sky.",
    taglineId: "Kanopi hijau, kolam langit biru.",
    heroImage: VILLA_MONSTERA,
    gallery: VILLA_MONSTERA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "All facilities are the same across villa types.",
    typeNoteId: "Semua tipe vila memiliki fasilitas yang sama.",
  }),
  createVilla({
    slug: "krisna",
    name: "Villa Krisna",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "A chapter of quiet heritage.",
    taglineId: "Bab warisan yang sunyi.",
    heroImage: VILLA_KRISNA,
    gallery: VILLA_KRISNA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "All facilities are the same across villa types.",
    typeNoteId: "Semua tipe vila memiliki fasilitas yang sama.",
  }),
  createVilla({
    slug: "tunjung",
    name: "Villa Tunjung",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "The lotus that opens at dusk.",
    taglineId: "Teratai yang mekar saat senja.",
    heroImage: VILLA_TUNJUNG,
    gallery: VILLA_TUNJUNG_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: DELUXE_DESCRIPTION,
    descriptionId: DELUXE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "All facilities are the same across villa types.",
    typeNoteId: "Semua tipe vila memiliki fasilitas yang sama.",
  }),
  createVilla({
    slug: "ashoka",
    name: "Villa Ashoka",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "A suite of rooms, a single view.",
    taglineId: "Serangkaian kamar, satu pemandangan.",
    heroImage: ASHOKA_HERO_IMAGE,
    gallery: [...VILLA_ASHOKA_GALLERY.slice(0, 3), ...VILLA_ASHOKA_GALLERY.slice(4)],
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: SUITE_DESCRIPTION,
    descriptionId: SUITE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Suite includes complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite termasuk Aqua galon air minum gratis.",
    amenities: [...COMMON_AMENITIES, "Aqua gallon drinking water"],
    amenitiesId: [...COMMON_AMENITIES_ID, "Aqua galon air minum"],
  }),
  createVilla({
    slug: "bougainville",
    name: "Villa Bougainville",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Two bedrooms, a garden of flame-red bloom.",
    taglineId: "Dua kamar, taman bunga merah membara.",
    heroImage: VILLA_BOUGAINVILLE,
    gallery: VILLA_BOUGAINVILLE_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: SUITE_DESCRIPTION,
    descriptionId: SUITE_DESCRIPTION_ID,
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: DELUXE_BED_SETUP,
    bedSetupId: DELUXE_BED_SETUP_ID,
    typeNote: "Suite includes complimentary Aqua gallon drinking water.",
    typeNoteId: "Suite termasuk Aqua galon air minum gratis.",
    amenities: [...COMMON_AMENITIES, "Aqua gallon drinking water"],
    amenitiesId: [...COMMON_AMENITIES_ID, "Aqua galon air minum"],
  }),
  createVilla({
    slug: "kayu",
    name: "Villa Kayu",
    category: "executive",
    categoryLabel: "Executive Villa",
    sizeSqm: 150,
    tagline: "The estate's signature residence.",
    taglineId: "Hunian unggulan kawasan.",
    heroImage: VILLA_KAYU,
    gallery: VILLA_KAYU_GALLERY,
    intro: EXEC_INTRO,
    introId: EXEC_INTRO_ID,
    description: EXEC_DESCRIPTION,
    descriptionId: EXEC_DESCRIPTION_ID,
    occupancy: "Max 5 adults only",
    occupancyId: "Maks 5 dewasa saja",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai dasar",
    bedSetup: EXECUTIVE_BED_SETUP,
    bedSetupId: EXECUTIVE_BED_SETUP_ID,
    typeNote: "No extra beds are available in the executive villa.",
    typeNoteId: "Tidak ada extra bed tersedia di vila eksekutif.",
  }),
];

export const villaBySlug = (slug: string) =>
  villas.find((v) => v.slug === slug);

export const villasByCategory = (category: VillaCategory) =>
  villas.filter((v) => v.category === category);

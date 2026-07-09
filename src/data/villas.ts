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
  highlights: string[];
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
  highlights: string[];
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
  highlights: string[];
  highlightsId: string[];
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
    highlights: base.highlights,
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
        highlights: base.highlightsId,
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

export const STAY_BENEFITS = [
  "Private plunge pool exclusively for your villa",
  "Daily housekeeping with fresh towels",
  "High-speed private WiFi throughout",
  "Fully equipped kitchen for self-catering",
  "Concierge for tours, transfers & local tips",
  "Peaceful rice-field setting in Temukus, Lovina",
] as const;

export const STAY_BENEFITS_ID = [
  "Kolam renang pribadi eksklusif untuk vila Anda",
  "Housekeeping harian dengan handuk segar",
  "WiFi pribadi berkecepatan tinggi",
  "Dapur lengkap untuk memasak sendiri",
  "Concierge untuk tur, transfer & rekomendasi lokal",
  "Suasana sawah yang tenang di Temukus, Lovina",
] as const;

const DELUXE_HIGHLIGHTS = [
  "Lumbung-inspired two-storey architecture",
  "Pool terrace with rice-field outlook",
  "Family-friendly bed layout upstairs",
];
const DELUXE_HIGHLIGHTS_ID = [
  "Arsitektur dua lantai bergaya Lumbung",
  "Teras kolam dengan pemandangan sawah",
  "Tata kamar ideal untuk keluarga di lantai atas",
];

const SUITE_HIGHLIGHTS = [
  "Generous 200 m² living space",
  "Premium design finishes throughout",
  "Complimentary Aqua gallon drinking water",
];
const SUITE_HIGHLIGHTS_ID = [
  "Ruang hunian lapang 200 m²",
  "Finishing desain premium di seluruh vila",
  "Fasilitas air galon Aqua gratis",
];

const EXEC_HIGHLIGHTS = [
  "Rich premium wood interiors",
  "Queen bedroom on each floor",
  "Intimate executive-scale layout",
];
const EXEC_HIGHLIGHTS_ID = [
  "Interior kayu premium yang hangat",
  "Kamar queen di setiap lantai",
  "Tata ruang eksekutif yang intim",
];
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
    tagline: "Still waters, open skies — a sanctuary named for serenity.",
    taglineId: "Air tenang, langit terbuka — surga yang dinamai dari ketenangan.",
    heroImage: VILLA_LOTUS_GALLERY[0],
    gallery: VILLA_LOTUS_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: [
      "Villa Lotus draws its name from the flower that symbolises purity in Balinese culture — and its design reflects that same sense of calm, with soft natural tones and unhurried spaces.",
      "Step from your queen bedroom onto the pool terrace, where rice fields stretch to the horizon. The upper floor's twin single beds make this villa a natural choice for families travelling with children.",
    ],
    descriptionId: [
      "Villa Lotus mengambil nama dari bunga yang melambangkan kesucian dalam budaya Bali — desainnya mencerminkan ketenangan yang sama, dengan nuansa alami yang lembut.",
      "Melangkah dari kamar queen ke teras kolam, sawah membentang ke cakrawala. Dua single bed di lantai atas menjadikan vila ini pilihan alami bagi keluarga dengan anak.",
    ],
    highlights: [...DELUXE_HIGHLIGHTS, "Soft, light-filled interiors", "Ideal for reflective, slow-paced stays"],
    highlightsId: [...DELUXE_HIGHLIGHTS_ID, "Interior lembut dan penuh cahaya", "Ideal untuk menginap yang tenang dan santai"],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Deluxe 150 m² villa with private pool and full kitchen.",
    typeNoteId: "Vila deluxe 150 m² dengan kolam pribadi dan dapur lengkap.",
  }),
  createVilla({
    slug: "lili",
    name: "Villa Lily",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "Delicate elegance, bathed in North Bali light.",
    taglineId: "Keanggunan halus, bermandikan cahaya Bali Utara.",
    heroImage: VILLA_LILI_GALLERY[0],
    gallery: VILLA_LILI_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: [
      "Villa Lily is among our most photogenic residences — airy interiors, graceful proportions, and a pool deck designed for long, languid afternoons.",
      "The ground-floor queen suite flows seamlessly to outdoor living. Upstairs, two single beds provide a comfortable retreat for younger guests while parents enjoy privacy below.",
    ],
    descriptionId: [
      "Villa Lily adalah salah satu hunian kami yang paling fotogenik — interior lapang, proporsi anggun, dan dek kolam untuk sore yang panjang dan santai.",
      "Suite queen di lantai bawah mengalir mulus ke ruang luar. Di lantai atas, dua single bed memberikan kenyamanan bagi tamu muda sementara orang tua menikmati privasi di bawah.",
    ],
    highlights: [...DELUXE_HIGHLIGHTS, "Bright, airy open-plan living", "Picture-perfect pool deck"],
    highlightsId: [...DELUXE_HIGHLIGHTS_ID, "Ruang tamu terbuka yang terang dan lapang", "Dek kolam yang sempurna untuk foto"],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Deluxe 150 m² villa with private pool and full kitchen.",
    typeNoteId: "Vila deluxe 150 m² dengan kolam pribadi dan dapur lengkap.",
  }),
  createVilla({
    slug: "monstera",
    name: "Villa Monstera",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "Tropical foliage frames every moment of your stay.",
    taglineId: "Dedaunan tropis membingkai setiap momen menginap Anda.",
    heroImage: VILLA_MONSTERA_GALLERY[0],
    gallery: VILLA_MONSTERA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: [
      "Villa Monstera celebrates Bali's lush botanical character — green views, natural materials, and a pool that feels tucked into a private garden.",
      "Inside, the two-storey layout offers a queen bedroom on the ground floor and twin singles above — perfect for groups who want space without sacrificing togetherness.",
    ],
    descriptionId: [
      "Villa Monstera merayakan karakter botani Bali yang subur — pemandangan hijau, material alami, dan kolam yang terasa seperti taman pribadi.",
      "Di dalam, tata ruang dua lantai menawarkan kamar queen di lantai bawah dan dua single di atas — sempurna untuk grup yang menginginkan ruang tanpa kehilangan kebersamaan.",
    ],
    highlights: [...DELUXE_HIGHLIGHTS, "Lush tropical garden setting", "Natural wood and stone accents"],
    highlightsId: [...DELUXE_HIGHLIGHTS_ID, "Suasana taman tropis yang subur", "Aksen kayu dan batu alami"],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Deluxe 150 m² villa with private pool and full kitchen.",
    typeNoteId: "Vila deluxe 150 m² dengan kolam pribadi dan dapur lengkap.",
  }),
  createVilla({
    slug: "krisna",
    name: "Villa Krisna",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "Quiet heritage, contemporary Balinese comfort.",
    taglineId: "Warisan yang tenang, kenyamanan Bali kontemporer.",
    heroImage: VILLA_KRISNA_GALLERY[0],
    gallery: VILLA_KRISNA_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: [
      "Villa Krisna honours Bali's cultural depth with thoughtful design details — from the Lumbung roofline to the warm, welcoming interiors that greet you on arrival.",
      "Your private pool sits at the heart of the villa, steps from the ground-floor queen bedroom. The upper level's two single beds are ideal for children or friends sharing the journey.",
    ],
    descriptionId: [
      "Villa Krisna menghormati kedalaman budaya Bali dengan detail desain yang matang — dari garis atap Lumbung hingga interior hangat yang menyambut kedatangan Anda.",
      "Kolam pribadi berada di jantung vila, beberapa langkah dari kamar queen di lantai bawah. Dua single bed di lantai atas ideal untuk anak atau teman perjalanan.",
    ],
    highlights: [...DELUXE_HIGHLIGHTS, "Authentic Lumbung roofline", "Warm, culturally rooted interiors"],
    highlightsId: [...DELUXE_HIGHLIGHTS_ID, "Garis atap Lumbung autentik", "Interior hangat berakar pada budaya"],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Deluxe 150 m² villa with private pool and full kitchen.",
    typeNoteId: "Vila deluxe 150 m² dengan kolam pribadi dan dapur lengkap.",
  }),
  createVilla({
    slug: "tunjung",
    name: "Villa Tunjung",
    category: "deluxe",
    categoryLabel: "Deluxe Villa",
    sizeSqm: 150,
    tagline: "The lotus opens at dusk — and so does this peaceful retreat.",
    taglineId: "Teratai mekar saat senja — begitu pula surga tenang ini.",
    heroImage: VILLA_TUNJUNG_GALLERY[0],
    gallery: VILLA_TUNJUNG_GALLERY,
    intro: DELUXE_INTRO,
    introId: DELUXE_INTRO_ID,
    description: [
      "Named for the lotus flower — tunjung in Balinese — this villa captures the golden-hour magic that makes Lovina unforgettable, with sunset views from the pool terrace.",
      "A queen bedroom on the ground floor and two single beds upstairs create a flexible layout for couples, families, and small groups seeking an authentic North Bali escape.",
    ],
    descriptionId: [
      "Dinamai dari bunga teratai — tunjung dalam bahasa Bali — vila ini menangkap keajaiban golden hour yang membuat Lovina tak terlupakan, dengan pemandangan senja dari teras kolam.",
      "Kamar queen di lantai bawah dan dua single bed di atas menciptakan tata ruang fleksibel untuk pasangan, keluarga, dan grup kecil yang mencari pelarian Bali Utara yang autentik.",
    ],
    highlights: [...DELUXE_HIGHLIGHTS, "Golden-hour pool terrace views", "Named for the sacred lotus flower"],
    highlightsId: [...DELUXE_HIGHLIGHTS_ID, "Pemandangan senja dari teras kolam", "Dinamai dari bunga teratai suci"],
    occupancy: "Max 5 adults or 4 adults + 2 children",
    occupancyId: "Maks 5 dewasa atau 4 dewasa + 2 anak",
    bathroom: "1 bathroom on the ground floor",
    bathroomId: "1 kamar mandi di lantai bawah",
    bedSetup: GROUND_QUEEN_UPPER_SINGLES,
    bedSetupId: GROUND_QUEEN_UPPER_SINGLES_ID,
    typeNote: "Deluxe 150 m² villa with private pool and full kitchen.",
    typeNoteId: "Vila deluxe 150 m² dengan kolam pribadi dan dapur lengkap.",
  }),
  createVilla({
    slug: "ashoka",
    name: "Villa Ashoka",
    category: "suite",
    categoryLabel: "Suite Villa",
    sizeSqm: 200,
    tagline: "Our most spacious suite — premium design, boundless calm.",
    taglineId: "Suite terluas kami — desain premium, ketenangan tanpa batas.",
    heroImage: VILLA_ASHOKA_GALLERY[0],
    gallery: VILLA_ASHOKA_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: [
      "Named for the sacred Ashoka tree, Villa Ashoka is the embodiment of Bhumi Lovina's premium tier — 200 m² of refined space, clean architectural lines, and natural textures throughout.",
      "The ground-floor queen bedroom opens directly to your private pool and rice-field views. Upstairs, two single beds offer flexible sleeping for families. Complimentary Aqua gallon drinking water is included.",
    ],
    descriptionId: [
      "Dinamai dari pohon Ashoka yang sakral, Villa Ashoka adalah perwujudan tipe premium Bhumi Lovina — 200 m² ruang halus, garis arsitektur bersih, dan tekstur alami di seluruh vila.",
      "Kamar queen di lantai bawah terbuka langsung ke kolam pribadi dan pemandangan sawah. Di lantai atas, dua single bed untuk keluarga. Termasuk fasilitas air galon Aqua gratis.",
    ],
    highlights: [...SUITE_HIGHLIGHTS, "Sacred Ashoka-inspired naming", "Expansive pool terrace with rice-field views"],
    highlightsId: [...SUITE_HIGHLIGHTS_ID, "Terinspirasi nama Ashoka yang sakral", "Teras kolam lapang dengan pemandangan sawah"],
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
    tagline: "Vivid tropical character, resort-level refinement.",
    taglineId: "Karakter tropis yang hidup, kemewahan setara resor.",
    heroImage: VILLA_BOUGAINVILLE_GALLERY[0],
    gallery: VILLA_BOUGAINVILLE_GALLERY,
    intro: SUITE_INTRO,
    introId: SUITE_INTRO_ID,
    description: [
      "Inspired by the bougainvillea that colours our estate, Villa Bougainville pairs bold tropical personality with the generous proportions and premium finishes of our 200 m² suite collection.",
      "A queen bedroom on the ground floor leads to an inviting pool deck. The upper level's twin single beds are perfect for families. Complimentary Aqua gallon drinking water is included.",
    ],
    descriptionId: [
      "Terinspirasi bougainvillea yang mewarnai kawasan kami, Villa Bougainville memadukan kepribadian tropis yang berani dengan proporsi lapang dan finishing premium koleksi suite 200 m² kami.",
      "Kamar queen di lantai bawah menuju dek kolam yang mengundang. Dua single bed di lantai atas sempurna untuk keluarga. Termasuk fasilitas air galon Aqua gratis.",
    ],
    highlights: [...SUITE_HIGHLIGHTS, "Bold bougainvillea-inspired palette", "Resort-scale pool and living areas"],
    highlightsId: [...SUITE_HIGHLIGHTS_ID, "Palet terinspirasi bougainvillea", "Kolam dan ruang tamu skala resor"],
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
    tagline: "Warm timber elegance — our singular executive residence.",
    taglineId: "Keanggunan kayu yang hangat — satu-satunya hunian eksekutif kami.",
    heroImage: VILLA_KAYU_GALLERY[0],
    gallery: VILLA_KAYU_GALLERY,
    intro: EXEC_INTRO,
    introId: EXEC_INTRO_ID,
    description: [
      "Villa Kayu — kayu meaning wood in Indonesian — is crafted entirely around rich timber finishes and an intimate sense of warmth. It is our only executive-tier villa, designed for guests who value understated luxury.",
      "One queen bed on each floor provides equal comfort on both levels. Maximum occupancy is strictly five guests with no additional guests permitted. Complimentary Aqua gallon drinking water is included.",
    ],
    descriptionId: [
      "Villa Kayu — kayu berarti kayu dalam bahasa Indonesia — dibuat sepenuhnya dengan finishing kayu yang kaya dan rasa kehangatan yang intim. Ini adalah satu-satunya vila tipe eksekutif kami.",
      "Satu queen bed di setiap lantai memberikan kenyamanan setara di kedua level. Kapasitas maksimal ketat lima tamu tanpa tamu tambahan. Termasuk fasilitas air galon Aqua gratis.",
    ],
    highlights: [...EXEC_HIGHLIGHTS, "Complimentary Aqua gallon drinking water", "Strict 5-guest maximum for privacy"],
    highlightsId: [...EXEC_HIGHLIGHTS_ID, "Fasilitas air galon Aqua gratis", "Maksimal 5 tamu untuk privasi"],
    occupancy: "Strict maximum of 5 guests total — no additional guests",
    occupancyId: "Kapasitas maksimal ketat 5 orang — tidak dapat menambah tamu",
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

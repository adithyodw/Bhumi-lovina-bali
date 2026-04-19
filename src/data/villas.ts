import {
  VILLA_LILI,
  VILLA_LOTUS,
  VILLA_MONSTERA,
  VILLA_KRISNA,
  VILLA_TUNJUNG,
  VILLA_ASHOKA,
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
  translations?: { id: VillaTranslation };
};

export function villaLocale(v: Villa, locale: string): Villa {
  if (locale !== "id" || !v.translations?.id) return v;
  return { ...v, ...v.translations.id };
}

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
    heroImage: VILLA_LILI,
    gallery: [...VILLA_LILI_GALLERY],
    translations: {
      id: {
        categoryLabel: "Vila Deluxe",
        tagline: "Mekar tenang di atas Laut Bali.",
        intro: "Retret deluxe yang tenang, dibalut kayu keras Bali, dengan kolam rendam pribadi terbuka ke langit.",
        description: [
          "Villa Lili adalah yang paling lembut di koleksi deluxe. Satu kamar tidur terbuka melalui pintu kaca lebar ke kolam rendam pribadi, dikelilingi bunga kamboja dan hamparan laut bebas.",
          "Di dalamnya, ranjang jati berukir tangan menghadap cakrawala. Kamar mandi adalah taman pribadi dari batu sungai dan bambu, diterangi seberkas cahaya pagi dari atas.",
        ],
        amenities: [
          "Kolam rendam pribadi",
          "Tempat tidur king",
          "Pancuran hujan outdoor",
          "AC & kipas langit-langit",
          "Smart TV & Wi-Fi",
          "Audio Bluetooth",
          "Brankas villa",
          "Mini-bar gratis",
          "Kamar dibersihkan setiap hari",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_LOTUS,
    gallery: [...VILLA_LOTUS_GALLERY],
    translations: {
      id: {
        categoryLabel: "Vila Deluxe",
        tagline: "Kolam hening di jantung kawasan.",
        intro: "Vila deluxe dikelilingi kolam teratai dan dinaungi kamboja purba, dirancang untuk perenungan yang tenang.",
        description: [
          "Villa Lotus berdiri di jantung kawasan, dikelilingi kolam teratai dan napas lambat kamboja. Bathtub terrazzo tuang tangan terbuka ke taman pribadi.",
          "Pagi dimulai dengan kicau burung dan buah segar di teras terbuka. Malam ditutup dengan rendam lilin di bawah langit berbintang.",
        ],
        amenities: [
          "Kolam rendam pribadi",
          "Tempat tidur king",
          "Bathtub terrazzo",
          "AC",
          "Smart TV & Wi-Fi",
          "Brankas villa",
          "Mini-bar",
          "Kamar dibersihkan setiap hari",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_MONSTERA,
    gallery: [...VILLA_MONSTERA_GALLERY],
    translations: {
      id: {
        categoryLabel: "Vila Deluxe",
        tagline: "Kanopi hijau, kolam langit biru.",
        intro: "Vila deluxe di tepi hutan, tempat daun monstera liar bertemu kolam rendam bercermin.",
        description: [
          "Villa Monstera diselimuti taman hijau yang rimbun. Kolam rendam pribadi memantulkan langit dan mengubahnya menjadi lukisan terbalik.",
          "Interior memadukan batu vulkanik mentah dengan linen gading lembut dan teak hangat — ketenangan tropis dalam kesederhanaan.",
        ],
        amenities: [
          "Kolam rendam pribadi",
          "Tempat tidur king",
          "Pancuran hujan outdoor",
          "Tempat tidur siang di taman",
          "AC",
          "Wi-Fi & audio Bluetooth",
          "Brankas villa",
          "Mini-bar",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_KRISNA,
    gallery: [...VILLA_KRISNA_GALLERY],
    translations: {
      id: {
        categoryLabel: "Vila Deluxe",
        tagline: "Bab warisan yang sunyi.",
        intro: "Detail warisan Bali dan beranda tertutup yang luas menjadikan Villa Krisna berbeda dari yang lain.",
        description: [
          "Villa Krisna merayakan tradisi kerajinan Bali Utara — batu kapur ukiran tangan, langit-langit pandan anyaman, dan ranjang yang dipahat dari satu pohon reklamasi.",
          "Beranda yang luas, terlindung dari terik siang, terbuka ke kolam rendam pribadi dan dek matahari bertegel untuk sore-sore yang santai.",
        ],
        amenities: [
          "Kolam rendam pribadi",
          "Tempat tidur king",
          "Beranda tertutup",
          "Pancuran outdoor",
          "AC",
          "Smart TV & Wi-Fi",
          "Brankas & mini-bar",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_TUNJUNG,
    gallery: [...VILLA_TUNJUNG_GALLERY],
    translations: {
      id: {
        categoryLabel: "Vila Deluxe",
        tagline: "Teratai yang mekar saat senja.",
        intro: "Vila deluxe bernama dari teratai yang mekar di malam hari — hangat, temaram, dan sungguh pribadi.",
        description: [
          "Villa Tunjung adalah yang paling hangat di antara vila deluxe, diselesaikan dalam teak mengkilap dan rotan asap. Di malam hari, pencahayaan tersembunyi mengubah kolam rendam menjadi genangan cahaya amber.",
          "Sudut baca yang tersembunyi dan tempat tidur siang outdoor yang lapang menjadikan ini yang paling hening di antara kelimanya.",
        ],
        amenities: [
          "Kolam rendam pribadi",
          "Tempat tidur king",
          "Tempat tidur siang outdoor",
          "Sudut baca",
          "AC",
          "Wi-Fi & Bluetooth",
          "Brankas & mini-bar",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_ASHOKA,
    gallery: [...VILLA_ASHOKA_GALLERY],
    translations: {
      id: {
        categoryLabel: "Suite Vila",
        tagline: "Serangkaian kamar, satu pemandangan.",
        intro: "Vila suite dua kamar dengan kolam renang pribadi dan paviliun tamu terbuka penuh.",
        description: [
          "Villa Ashoka dirancang sebagai kompleks kecil: dua paviliun kamar tidur, paviliun ruang tamu, dan dapur outdoor, semuanya tersusun di sekitar kolam renang pribadi yang tenang.",
          "Ideal untuk keluarga atau dua pasangan yang bepergian bersama, dengan cukup ruang untuk berbagi sore hari dan menarik diri dalam keintiman.",
        ],
        amenities: [
          "Kolam renang pribadi",
          "Dua kamar king",
          "Paviliun tamu terbuka",
          "Dapur outdoor",
          "Dua kamar mandi dalam kamar",
          "AC di seluruh villa",
          "Smart TV & Wi-Fi",
          "Brankas villa",
          "Kamar dibersihkan setiap hari",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_BOUGAINVILLE,
    gallery: [...VILLA_BOUGAINVILLE_GALLERY],
    translations: {
      id: {
        categoryLabel: "Suite Vila",
        tagline: "Dua kamar, taman bunga merah membara.",
        intro: "Vila suite yang diselimuti bougainvillea, dengan taman pribadi berukir dan kolam renang panjang penuh.",
        description: [
          "Villa Bougainville adalah yang paling lapang di antara suite. Kolam renang persegi panjang membentang sepanjang taman, dikelilingi bougainvillea merah membara dan dek matahari terrazzo buatan tangan.",
          "Kedua kamar tidur langsung terbuka ke taman, dengan bathtub celup dalam dan pancuran outdoor pribadi.",
        ],
        amenities: [
          "Kolam renang pribadi 15 m",
          "Dua kamar king",
          "Dua kamar mandi dalam kamar",
          "Pancuran outdoor",
          "Paviliun ruang tamu & makan",
          "AC",
          "Smart TV & Wi-Fi",
          "Brankas & mini-bar",
          "Sarapan sudah termasuk",
        ],
      },
    },
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
    heroImage: VILLA_KAYU,
    gallery: [...VILLA_KAYU_GALLERY],
    translations: {
      id: {
        categoryLabel: "Hunian Eksekutif",
        tagline: "Hunian unggulan kawasan.",
        intro: "Hunian eksekutif pilihan — tiga kamar tidur, kolam renang infinity pribadi, dan pemandangan Laut Bali yang tak terputus.",
        description: [
          "Villa Kayu adalah hunian unggulan Bhumi Lovina. Kolam renang infinity panjang menjangkau ke arah laut, hanya dipisahkan deretan kamboja. Tiga suite kamar tidur yang lapang tersusun di dua paviliun, masing-masing dengan kamar mandi terbuka.",
          "Dapur chef lengkap, paviliun makan tersendiri, dan pantri butler yang diskrit menjadikan Villa Kayu ideal untuk keluarga, sahabat karib, atau retret pribadi.",
          "Transfer bandara pribadi, host villa khusus, dan itinerary pengalaman yang dirancang khusus sudah termasuk.",
        ],
        amenities: [
          "Kolam renang infinity pribadi",
          "Tiga kamar king",
          "Tiga kamar mandi dalam kamar",
          "Paviliun ruang tamu & makan terbuka",
          "Dapur chef lengkap",
          "Host villa khusus",
          "Transfer bandara pribadi",
          "Smart TV & Wi-Fi",
          "Brankas & mini-bar",
          "Sarapan sudah termasuk",
        ],
      },
    },
  },
];

export const villaBySlug = (slug: string) =>
  villas.find((v) => v.slug === slug);

export const villasByCategory = (category: VillaCategory) =>
  villas.filter((v) => v.category === category);

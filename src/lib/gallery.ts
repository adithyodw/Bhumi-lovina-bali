export type GalleryImage = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
  featured?: boolean;
  villaSlug?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    slug: "01-estate-overview",
    src: "/images/gallery/01-10.jpg",
    alt: "Bhumi Lovina Residence & Villa estate overview — luxury private pool villas in Lovina North Bali",
    width: 1440,
    height: 1080,
    orientation: "landscape",
    featured: true,
  },
  {
    slug: "02-estate-grounds",
    src: "/images/gallery/02-11.jpg",
    alt: "Bhumi Lovina boutique villa estate surrounded by rice fields in Temukus Lovina",
    width: 1440,
    height: 1080,
    orientation: "landscape",
  },
  {
    slug: "03-villa-ashoka",
    src: "/images/gallery/03-ashoka-villa.jpg",
    alt: "Villa Ashoka premium suite private pool villa at Bhumi Lovina",
    width: 1125,
    height: 1500,
    orientation: "portrait",
    villaSlug: "ashoka",
  },
  {
    slug: "04-villa-bougainville",
    src: "/images/gallery/04-bougainville-villa.jpg",
    alt: "Villa Bougainville suite private pool villa at Bhumi Lovina North Bali",
    width: 1800,
    height: 1350,
    orientation: "landscape",
    villaSlug: "bougainville",
  },
  {
    slug: "05-villa-kayu",
    src: "/images/gallery/05-kayu-villa.jpg",
    alt: "Villa Kayu executive premium wood private pool villa Bhumi Lovina",
    width: 1440,
    height: 1080,
    orientation: "landscape",
    villaSlug: "kayu",
  },
  {
    slug: "06-villa-krisna",
    src: "/images/gallery/06-krisna-villa.jpg",
    alt: "Villa Krisna deluxe 2-bedroom private pool villa Bhumi Lovina",
    width: 1125,
    height: 1500,
    orientation: "portrait",
    villaSlug: "krisna",
  },
  {
    slug: "07-villa-lily",
    src: "/images/gallery/07-lili-villa.jpg",
    alt: "Villa Lily deluxe private pool villa at Bhumi Lovina Lovina Bali",
    width: 1280,
    height: 960,
    orientation: "landscape",
    villaSlug: "lili",
  },
  {
    slug: "08-villa-lotus",
    src: "/images/gallery/08-lotus-villa.jpg",
    alt: "Villa Lotus deluxe private pool villa among rice paddies Bhumi Lovina",
    width: 1125,
    height: 1500,
    orientation: "portrait",
    villaSlug: "lotus",
  },
  {
    slug: "09-villa-monstera",
    src: "/images/gallery/09-monstera-villa.jpg",
    alt: "Villa Monstera deluxe tropical private pool villa Bhumi Lovina",
    width: 1125,
    height: 1500,
    orientation: "portrait",
    villaSlug: "monstera",
  },
  {
    slug: "10-villa-tunjung",
    src: "/images/gallery/10-tunjung-villa.jpg",
    alt: "Villa Tunjung deluxe private pool villa at Bhumi Lovina North Bali",
    width: 1125,
    height: 1500,
    orientation: "portrait",
    villaSlug: "tunjung",
  },
];

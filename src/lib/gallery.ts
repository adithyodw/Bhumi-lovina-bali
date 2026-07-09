export type GalleryImage = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
  featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    slug: "01-aerial-estate",
    src: "/images/gallery/01-aerial-estate.jpg",
    alt: "Aerial view of Bhumi Lovina luxury 2-bedroom private pool villa estate in Lovina North Bali",
    width: 1024,
    height: 768,
    orientation: "landscape",
    featured: true,
  },
  {
    slug: "02-rice-paddy-estate",
    src: "/images/gallery/02-rice-paddy-estate.jpg",
    alt: "Bhumi Lovina private pool villas surrounded by emerald rice fields in Temukus Lovina",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "05-pool-villa-exterior",
    src: "/images/gallery/05-pool-villa-exterior.jpg",
    alt: "Bhumi Lovina 2-bedroom private pool villa exterior with Lumbung-style architecture",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "03-bedroom-lounge",
    src: "/images/gallery/03-bedroom-lounge.jpg",
    alt: "Bhumi Lovina luxury 2-bedroom private pool villa bedroom interior with lounge area",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "04-outdoor-dining-pool",
    src: "/images/gallery/04-outdoor-dining-pool.jpg",
    alt: "Outdoor dining pavilion beside private pool at Bhumi Lovina villa Lovina Bali",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "09-pool-breakfast",
    src: "/images/gallery/09-pool-breakfast.jpg",
    alt: "Private pool villa breakfast experience at Bhumi Lovina Lovina North Bali",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "07-bedroom-suite",
    src: "/images/gallery/07-bedroom-suite.jpg",
    alt: "Bhumi Lovina luxury 2-bedroom private pool villa suite bedroom interior",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "06-kitchen",
    src: "/images/gallery/06-kitchen.jpg",
    alt: "Fully equipped kitchen in Bhumi Lovina 2-bedroom private pool villa Lovina Bali",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "08-villa-deck",
    src: "/images/gallery/08-villa-deck.jpg",
    alt: "Wooden deck and private plunge pool at Bhumi Lovina villa estate North Bali",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "10-wooden-bedroom",
    src: "/images/gallery/10-wooden-bedroom.jpg",
    alt: "Bhumi Lovina private pool villa wooden bedroom interior with warm lighting",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "11-dining-view",
    src: "/images/gallery/11-dining-view.jpg",
    alt: "Outdoor dining with tropical hillside views at Bhumi Lovina villa Lovina Bali",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
];

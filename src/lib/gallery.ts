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
    alt: "Aerial view of Bhumi Lovina villa estate among rice paddies",
    width: 1024,
    height: 768,
    orientation: "landscape",
    featured: true,
  },
  {
    slug: "02-rice-paddy-estate",
    src: "/images/gallery/02-rice-paddy-estate.jpg",
    alt: "Bhumi Lovina villas reflected in Lovina rice paddies",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "05-pool-villa-exterior",
    src: "/images/gallery/05-pool-villa-exterior.jpg",
    alt: "Private pool villa with Lumbung-style architecture",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "03-bedroom-lounge",
    src: "/images/gallery/03-bedroom-lounge.jpg",
    alt: "Luxury villa bedroom with lounge chair and garden view",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "04-outdoor-dining-pool",
    src: "/images/gallery/04-outdoor-dining-pool.jpg",
    alt: "Outdoor dining pavilion beside private pool",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "09-pool-breakfast",
    src: "/images/gallery/09-pool-breakfast.jpg",
    alt: "Floating breakfast tray in private villa pool",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "07-bedroom-suite",
    src: "/images/gallery/07-bedroom-suite.jpg",
    alt: "Elegant two-bedroom villa suite interior",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "06-kitchen",
    src: "/images/gallery/06-kitchen.jpg",
    alt: "Fully equipped modern villa kitchen",
    width: 1024,
    height: 768,
    orientation: "landscape",
  },
  {
    slug: "08-villa-deck",
    src: "/images/gallery/08-villa-deck.jpg",
    alt: "Villa wooden deck with private plunge pool",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "10-wooden-bedroom",
    src: "/images/gallery/10-wooden-bedroom.jpg",
    alt: "A-frame wooden bedroom with warm ambient lighting",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
  {
    slug: "11-dining-view",
    src: "/images/gallery/11-dining-view.jpg",
    alt: "Outdoor dining with tropical hillside views",
    width: 768,
    height: 1024,
    orientation: "portrait",
  },
];

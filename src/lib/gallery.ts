export type GalleryImage = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Main Villa estate photography — featured in “A Glimpse of Paradise”. */
export const mainVillaGallery: GalleryImage[] = [
  {
    slug: "estate-overview",
    src: "/images/gallery/01-10.jpg",
    alt: "Bhumi Lovina Residence & Villa — aerial view of the luxury private pool villa estate in Lovina, North Bali",
    width: 1440,
    height: 1080,
  },
  {
    slug: "estate-grounds",
    src: "/images/gallery/02-11.jpg",
    alt: "Bhumi Lovina boutique villa estate nestled among emerald rice fields in Temukus, Lovina",
    width: 1440,
    height: 1080,
  },
];

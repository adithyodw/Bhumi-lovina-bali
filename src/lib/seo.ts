import { site } from "@/lib/site";
import { HERO_IMAGE } from "@/lib/images";

export const SEO_TITLE =
  "Bhumi Lovina Residence & Villas | 2BR Private Pool Villa Bali";

export const SEO_DESCRIPTION =
  "Discover Bhumi Lovina: 8 luxury 2-bedroom private pool villas in North Bali. Perfect for family stays, dolphin tours, and serene rice field escapes. Book direct!";

export const SEO_KEYWORDS = [
  "lovina private pool villa",
  "2 bedroom villa lovina",
  "bhumi lovina residence",
  "north bali luxury accommodation",
  "family villa temukus bali",
  "booking villa lovina",
];

export const OG_TITLE =
  "Bhumi Lovina Residence & Villas | Private Pool Villa Bali";

export const OG_DESCRIPTION =
  "Stay at North Bali's premium boutique estate. 8 modern private pool villas with 2 bedrooms, fully-equipped kitchens, and stunning rice field surroundings.";

const heroUrl = `${site.url}${HERO_IMAGE}`;
const galleryUrl = `${site.url}/images/gallery/11-10.webp`;

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": `${site.url}/#hotel`,
      name: site.name,
      description:
        "A premium boutique private villa estate featuring 8 luxury 2-bedroom private pool villas nestled among emerald rice fields in Temukus, Lovina, North Bali.",
      url: site.url,
      telephone: `+${site.contact.whatsapp}`,
      priceRange: "$$",
      image: [heroUrl, galleryUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dusun Bingin Banjar, Temukus, Kec. Banjar",
        addressLocality: "Kabupaten Buleleng",
        addressRegion: "Bali",
        postalCode: "81152",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-8.163346",
        longitude: "115.024312",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Private Swimming Pool",
          value: "true",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free High-Speed Private WiFi",
          value: "true",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fully Equipped Kitchen",
          value: "true",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Air Conditioning in all bedrooms",
          value: "true",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Balcony with views",
          value: "true",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Water Heater",
          value: "true",
        },
      ],
      numberOfRooms: "8",
      checkinTime: "14:00",
      checkoutTime: "11:00",
      sameAs: [
        `https://instagram.com/${site.contact.instagram}`,
        site.ota.traveloka,
        site.ota.booking,
        site.ota.tiket,
      ],
    },
    {
      "@type": "Accommodation",
      name: "Suite (Villa Ashoka & Villa Bougainville)",
      description:
        "Premium design 200m² private pool villa. 2 Storey, 2 Bedrooms. Ground floor has 1 Queen bed; upper floor has 2 Single beds. Maximum capacity: 5 adults or 4 adults and 2 children. Includes complimentary Aqua Gallon.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: "200",
        unitCode: "MTK",
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: "6",
      },
    },
    {
      "@type": "Accommodation",
      name: "Executive Suite (Villa Kayu)",
      description:
        "Premium wood design 150m² private pool villa. 2 Storey, 2 Bedrooms with Queen Size beds on both levels. Strict maximum capacity: 5 people total. Includes complimentary Aqua Gallon.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: "150",
        unitCode: "MTK",
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: "5",
      },
    },
    {
      "@type": "Accommodation",
      name: "Deluxe Villa (Villa Lotus, Lily, Monstera, Krisna, Tunjung)",
      description:
        "Standard 150m² private pool villa. 2 Storey, 2 Bedrooms. Level 1 has 1x Queen size bed, Level 2 has 2x Single beds. Maximum capacity: 5 adults or 4 adults and 2 children.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: "150",
        unitCode: "MTK",
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: "6",
      },
    },
  ],
};

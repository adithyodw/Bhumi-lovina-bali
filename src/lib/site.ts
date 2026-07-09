export const site = {
  name: "Bhumi Lovina Residence & Villa",
  shortName: "Bhumi Lovina",
  tagline: "A Private Sanctuary in North Bali",
  description:
    "Discover Bhumi Lovina: 8 luxury 2-bedroom private pool villas in North Bali. Perfect for family stays, dolphin tours, and serene rice field escapes in Temukus, Lovina.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bhumilovina.com",
  locale: "en_US",
  location: {
    address: "Dusun Bingin Banjar, Temukus, Kec. Banjar",
    fullAddress:
      "Dusun Bingin Banjar, Temukus, Kec. Banjar, Kabupaten Buleleng, Bali 81152, Indonesia",
    locality: "Temukus",
    region: "Bali",
    country: "Indonesia",
    postalCode: "81152",
    lat: -8.1777,
    lng: 115.0067,
    mapsShareUrl: "https://share.google/7dkdw4ZlXHO6xbCGC",
  },
  contact: {
    whatsapp: "6287845010779",
    whatsappDisplay: "+62 878-4501-0779",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "bhumilovina.villa",
  },
  ota: {
    traveloka:
      "https://www.traveloka.com/en-sg/hotel/indonesia/bhumi-lovina-residence--villa-9000001136176",
    booking:
      "https://www.booking.com/hotel/id/bhumi-lovina-residence-amp-villa.en-gb.html",
    tiket:
      "https://www.tiket.com/en-sg/homes/indonesia/bhumi-lovina-residence-villa-504001649499891158",
  },
} as const;

export const waMessage = "Hi, I would like to book Bhumi Lovina Residence & Villa";

export function whatsappLink(prefill = waMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    prefill,
  )}`;
}

export function googleMapsEmbedUrl() {
  const { lat, lng } = site.location;
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
}

export function googleMapsDirectionsUrl(
  waypoint = "Gitgit Waterfall",
  destination = site.location.fullAddress,
) {
  const params = new URLSearchParams({
    api: "1",
    destination,
    waypoints: waypoint,
    travelmode: "driving",
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

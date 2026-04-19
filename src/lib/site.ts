export const site = {
  name: "Bhumi Lovina Residence",
  shortName: "Bhumi Lovina",
  tagline: "A Private Sanctuary in North Bali",
  description:
    "Bhumi Lovina Residence is a private luxury villa estate in Lovina, North Bali — eight villas, dolphin-watching tours, waterfalls, and the quiet of the Bali Sea.",
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
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "6281290271990",
    whatsappDisplay: "+62 812 9027 1990",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "bhumilovina.villa",
  },
  ota: {
    traveloka: "https://trv.lk/fb9992ad",
    booking: "https://www.booking.com/Pulse-pbdrJ8",
    tiket:
      "https://www.tiket.com/homes/indonesia/bhumi-lovina-residence-villa-504001649499891158",
  },
  video: {
    youtubeId: "r4UaU5Tj7Pw",
  },
} as const;

export const waMessage =
  "Hi, I would like to book Bhumi Lovina Residence";

export function whatsappLink(prefill = waMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    prefill,
  )}`;
}

export function googleMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${site.location.lat},${site.location.lng}&hl=en&z=14&output=embed`;
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

export const site = {
  name: "Bhumi Lovina Residence",
  shortName: "Bhumi Lovina",
  tagline: "A Private Sanctuary in North Bali",
  description:
    "Bhumi Lovina Residence is a private luxury villa estate in Lovina, North Bali — eight villas, dolphin-watching tours, waterfalls, and the quiet of the Bali Sea.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bhumilovina.com",
  locale: "en_US",
  location: {
    address: "Jalan Raya Lovina, Kalibukbuk",
    region: "Buleleng, Bali",
    country: "Indonesia",
    lat: -8.158,
    lng: 115.027,
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

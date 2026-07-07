# Bhumi Lovina Residence

A private luxury villa estate in Lovina, North Bali — eight villas, dolphin tours, waterfalls, and the quiet of the Bali Sea.

Built with **Next.js 15** (App Router), **Tailwind CSS 3**, and **next/image** with AVIF/WebP optimisation. Designed to score 90+ on Lighthouse, rank for Lovina + dolphin + North Bali keywords, and convert visitors directly to WhatsApp bookings.

---

## Stack

| Layer | Tool |
| --- | --- |
| Framework | Next.js 15 (App Router, RSC) |
| Styling | Tailwind CSS 3, Noto Serif + Manrope (`next/font`) |
| Images | `next/image` with AVIF/WebP, lazy-loading, `priority` on LCP |
| SEO | `metadata` API, JSON-LD (Hotel, LodgingBusiness, LocalBusiness, FAQPage), auto `sitemap.xml`, `robots.txt` |
| Hosting | Vercel (recommended) |

---

## Project Structure

```
bhumi-lovina-website/
├── public/
│   ├── images/                  ← drop all villa/experience/Instagram photos here
│   │   ├── hero/
│   │   ├── villas/
│   │   │   ├── deluxe/{lili,lotus,monstera,krisna,tunjung}/
│   │   │   ├── suite/{ashoka,bougainville}/
│   │   │   └── executive/kayu/
│   │   ├── experiences/
│   │   ├── instagram/
│   │   ├── nearby/
│   │   └── og/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← global layout, fonts, JSON-LD, Nav, Footer
│   │   ├── page.tsx             ← home page
│   │   ├── globals.css
│   │   ├── sitemap.ts           ← auto-generated sitemap
│   │   ├── not-found.tsx
│   │   ├── villas/
│   │   │   ├── page.tsx         ← villa listing
│   │   │   └── [slug]/page.tsx  ← dynamic villa detail
│   │   ├── experiences/page.tsx
│   │   └── book/page.tsx
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx   ← sticky, global
│   │   ├── MobileBottomNav.tsx
│   │   ├── OTAButtons.tsx       ← Traveloka / Booking / tiket
│   │   ├── YouTubeEmbed.tsx     ← lazy-loaded iframe
│   │   ├── InstagramGrid.tsx
│   │   ├── VillaCard.tsx
│   │   └── Reveal.tsx           ← reduced-motion-aware scroll reveal
│   ├── data/
│   │   ├── villas.ts            ← 8 villas (source of truth)
│   │   └── experiences.ts       ← experiences + nearby places
│   └── lib/site.ts              ← site constants, WhatsApp helper
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

---

## 1. Install

```bash
cd bhumi-lovina-website
cp .env.example .env.local
npm install
```

Fill `.env.local` if you want to override defaults:

```
NEXT_PUBLIC_SITE_URL=https://bhumilovina.com
NEXT_PUBLIC_WHATSAPP=6281290271990
NEXT_PUBLIC_INSTAGRAM=bhumilovina.villa
```

## 2. Add Photos

All images referenced by the site live under `public/images/`. Download the assets from the provided Google Drive folder and place them using this naming convention:

```
public/images/
├── hero/
│   ├── estate-hero.webp                        ← homepage hero (LCP)
│   └── book-hero.webp                          ← /book hero
├── villas/
│   ├── deluxe/lili/lovina-villa-deluxe-lili-01.webp … -06.webp
│   ├── deluxe/lotus/lovina-villa-deluxe-lotus-01.webp … -06.webp
│   ├── deluxe/monstera/lovina-villa-deluxe-monstera-01.webp … -06.webp
│   ├── deluxe/krisna/lovina-villa-deluxe-krisna-01.webp … -06.webp
│   ├── deluxe/tunjung/lovina-villa-deluxe-tunjung-01.webp … -06.webp
│   ├── suite/ashoka/lovina-villa-suite-ashoka-01.webp … -08.webp
│   ├── suite/bougainville/lovina-villa-suite-bougainville-01.webp … -08.webp
│   └── executive/kayu/lovina-villa-executive-kayu-01.webp … -10.webp
├── experiences/
│   ├── lovina-dolphin-tour-01.webp
│   ├── snorkeling-lovina-01.webp
│   ├── sekumpul-waterfall-01.webp
│   ├── ulun-danu-temple-01.webp
│   └── banjar-hot-springs-01.webp
├── nearby/
│   ├── lovina-cafe-01.webp
│   └── lovina-restaurant-01.webp
├── instagram/
│   └── post-01.webp … post-08.webp
└── og/
    └── bhumi-lovina-og.jpg                     ← 1200×630 Open Graph image
```

**Image specs:**

- **Format:** prefer WebP or AVIF. `next/image` will further serve AVIF/WebP automatically.
- **Size:** ~1600 px on the long edge is plenty. Keep each file under ~300 KB.
- **Colour:** sRGB. Match the estate's warm-sand / deep-blue palette (no oversaturated filters).
- **Naming:** keep the SEO-friendly slugs (`lovina-villa-deluxe-lili-01.webp`) — they're what Google indexes.

> The site will still build and run if some photos are missing — `next/image` just shows a broken image box. Drop images in as you get them.

## 3. Run Locally

```bash
npm run dev
```

Open <http://localhost:3000>.

## 4. Production Build

```bash
npm run build
npm run start
```

---

## Deploy

### Option A — Vercel (recommended)

1. Install CLI once: `npm i -g vercel`
2. From the project root:

   ```bash
   vercel login
   vercel link           # creates .vercel/project.json
   vercel env add NEXT_PUBLIC_SITE_URL production
   vercel env add NEXT_PUBLIC_WHATSAPP production
   vercel env add NEXT_PUBLIC_INSTAGRAM production
   vercel --prod         # deploy
   ```

Vercel auto-detects Next.js 15, serves via Fluid Compute, optimises images via `/_next/image`, and provisions a CDN automatically. No extra config required.

### Option B — Vercel Dashboard (GitHub)

1. Push this repo to GitHub (see below).
2. Go to <https://vercel.com/new> → **Import Git Repository** → pick `bhumi-lovina-website`.
3. Framework preset: **Next.js** (auto-detected).
4. Add env vars from `.env.example` (values as above).
5. **Deploy.** First deploy takes ~60 s.
6. Add your custom domain in **Settings → Domains**.

### Push to GitHub

```bash
git init
git add .
git commit -m "feat: bhumi lovina residence site"
gh repo create bhumi-lovina-website --public --source=. --remote=origin --push
# or, if you don't have gh:
#   git remote add origin git@github.com:<your-user>/bhumi-lovina-website.git
#   git branch -M main
#   git push -u origin main
```

---

## Performance Checklist

- [x] Next.js `Image` everywhere, with `sizes` and `priority` on LCP hero
- [x] AVIF + WebP served automatically
- [x] Fonts via `next/font` (no render-blocking stylesheet)
- [x] YouTube iframe lazy-mounted (no third-party JS on first paint)
- [x] Google Maps iframe `loading="lazy"`
- [x] Reveal animations respect `prefers-reduced-motion`
- [x] HSTS, X-Frame-Options, Permissions-Policy, X-Content-Type-Options set in `next.config.ts`
- [x] Static long-cache for `/images/*`
- [x] Sticky WhatsApp CTA, mobile bottom nav
- [x] Auto `sitemap.xml` + `robots.txt`
- [x] JSON-LD for Hotel, LodgingBusiness, LocalBusiness, FAQPage

Target: Lighthouse ≥ 90 on all four metrics after real photos are dropped in.

---

## SEO Keywords Covered

`bhumi lovina`, `best villa in lovina bali`, `luxury villa lovina`, `north bali villa`, `lovina beach accommodation`, `lovina dolphin tour`, `dolphin watching bali`, `sunrise dolphin tour bali`, `waterfalls in north bali`, `gitgit waterfall`, `sekumpul waterfall`, `aling-aling waterfall`, `snorkeling lovina`, `menjangan island snorkeling`, `ulun danu beratan`, `banjar hot springs`, `best restaurants in lovina`, `where to eat in north bali`, `things to do in north bali`.

---

## Booking Endpoints

| Channel | Where | Notes |
| --- | --- | --- |
| WhatsApp | `+62 812 9027 1990` | Best rate, direct with villa host. Sticky global button + pre-filled message. |
| Traveloka | <https://trv.lk/fb9992ad> | |
| Booking.com | <https://www.booking.com/Pulse-pbdrJ8> | |
| tiket.com | <https://www.tiket.com/homes/indonesia/bhumi-lovina-residence-villa-504001649499891158> | |

---

## License

© Bhumi Lovina Residence. All rights reserved.

#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { put } from '@vercel/blob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = path.join(path.dirname(__dirname), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && !key.startsWith('#')) {
      const value = rest.join('=').replace(/^"|"$/g, '');
      process.env[key.trim()] = value.trim();
    }
  });
}

const VILLAS = {
  main: 'D:\\Gdrive\\Bhumi Lovina\\Main Villa',
  ashoka: 'D:\\Gdrive\\Bhumi Lovina\\Villa Ashoka (Suite)',
  bougainville: 'D:\\Gdrive\\Bhumi Lovina\\Villa Bougainville (Suite)',
  kayu: 'D:\\Gdrive\\Bhumi Lovina\\Villa Kayu (Executive)',
  krisna: 'D:\\Gdrive\\Bhumi Lovina\\Villa Krisna (Deluxe)',
  lily: 'D:\\Gdrive\\Bhumi Lovina\\Villa Lily (Deluxe)',
  lotus: 'D:\\Gdrive\\Bhumi Lovina\\Villa lotus (Deluxe)',
  monstera: 'D:\\Gdrive\\Bhumi Lovina\\Villa Monstera (Deluxe)',
  tunjung: 'D:\\Gdrive\\Bhumi Lovina\\Villa Tunjung (Deluxe)',
};

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
if (!BLOB_TOKEN) {
  console.error('❌ BLOB_READ_WRITE_TOKEN not set in .env.local');
  process.exit(1);
}

async function processAndUpload() {
  const results = {
    main: { hero: '', gallery: [] },
    ashoka: { hero: '', gallery: [] },
    bougainville: { hero: '', gallery: [] },
    kayu: { hero: '', gallery: [] },
    krisna: { hero: '', gallery: [] },
    lily: { hero: '', gallery: [] },
    lotus: { hero: '', gallery: [] },
    monstera: { hero: '', gallery: [] },
    tunjung: { hero: '', gallery: [] },
  };

  for (const [villa, villaPath] of Object.entries(VILLAS)) {
    console.log(`\n🏠 Processing ${villa}...`);

    const files = fs.readdirSync(villaPath)
      .filter(f => f.endsWith('.jpg'))
      .sort();

    console.log(`Found ${files.length} images`);

    // Select best images: use first one as hero, next 7 as gallery
    const heroFile = files[0];
    const galleryFiles = files.slice(1, 8); // 7 images for gallery

    // Process hero
    console.log(`⬆️ Uploading hero: ${heroFile}`);
    const heroPath = path.join(villaPath, heroFile);
    const heroBuffer = fs.readFileSync(heroPath);

    const heroImage = sharp(heroBuffer);
    const heroMetadata = await heroImage.metadata();

    let heroProcessing = heroImage;
    if (heroMetadata.orientation && heroMetadata.orientation !== 1) {
      console.log(`  ↻ Fixing rotation (EXIF: ${heroMetadata.orientation})`);
      heroProcessing = heroProcessing.rotate();
    }

    const heroWebp = await heroProcessing
      .resize(2000, 1333, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();

    const heroBlob = await put(`villas/${villa}/hero.webp`, heroWebp, {
      access: 'public',
      contentType: 'image/webp',
      allowOverwrite: true,
    });
    results[villa].hero = heroBlob.url;
    console.log(`✅ Hero: ${heroBlob.url}`);

    // Process gallery
    for (let i = 0; i < galleryFiles.length; i++) {
      const file = galleryFiles[i];
      console.log(`⬆️ Uploading gallery ${i + 1}/${galleryFiles.length}: ${file}`);

      const imgPath = path.join(villaPath, file);
      const buffer = fs.readFileSync(imgPath);

      const galleryImage = sharp(buffer);
      const galleryMetadata = await galleryImage.metadata();

      let galleryProcessing = galleryImage;
      if (galleryMetadata.orientation && galleryMetadata.orientation !== 1) {
        galleryProcessing = galleryProcessing.rotate();
      }

      const webp = await galleryProcessing
        .resize(1200, 800, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      const blob = await put(`villas/${villa}/gallery-${i + 1}.webp`, webp, {
        access: 'public',
        contentType: 'image/webp',
        allowOverwrite: true,
      });
      results[villa].gallery.push(blob.url);
      console.log(`✅ Gallery ${i + 1}: ${blob.url}`);
    }
  }

  // Generate TypeScript config
  const villaExports = Object.entries(results)
    .map(([villa, data]) => {
      const villaName = villa.charAt(0).toUpperCase() + villa.slice(1);
      return `export const VILLA_${villaName.toUpperCase()} =\n  "${data.hero}";`;
    })
    .join('\n\n');

  const galleryEntries = Object.entries(results)
    .flatMap(([villa, data]) => data.gallery.map(url => `"${url}"`))
    .join(',\n  ');

  const tsCode = `// Generated villa images from Vercel Blob
// Auto-generated - do not edit manually

// ── Villas ───────────────────────────────────────────────────────────────
${villaExports}

// ── Gallery pool (for villa detail pages) ────────────────────────────────
export const GALLERY_POOL = [
  ${galleryEntries},
];

export function galleryFor(heroImage: string, count: number): string[] {
  const pool = GALLERY_POOL.filter((u) => u !== heroImage);
  return Array.from({ length: count }, (_, i) => pool[i % pool.length]);
}
`;

  const outputPath = path.join(path.dirname(__dirname), 'src/lib/villa-images.ts');
  fs.writeFileSync(outputPath, tsCode);
  console.log(`\n✅ Generated: ${outputPath}`);

  console.log('\n📊 SUMMARY:');
  let totalImages = 0;
  Object.entries(results).forEach(([villa, data]) => {
    const count = data.gallery.length;
    totalImages += count;
    console.log(`${villa.padEnd(12)} → ${count} images`);
  });
  console.log(`\n✨ Total: ${totalImages} gallery images + ${Object.keys(results).length} heroes uploaded`);
}

processAndUpload().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});

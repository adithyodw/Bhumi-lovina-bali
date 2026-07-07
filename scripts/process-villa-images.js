#!/usr/bin/env node

/**
 * Villa Image Processor
 * Converts JPG images to optimized WebP variants and uploads to Vercel Blob
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream/promises');
const sharp = require('sharp');

const BLOB_API = 'https://blob.vercel-storage.com';
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN) {
  console.error('Error: BLOB_READ_WRITE_TOKEN environment variable not set');
  process.exit(1);
}

// Image configurations
const SIZES = {
  mobile: { width: 800, name: 'mobile' },
  tablet: { width: 1200, name: 'tablet' },
  desktop: { width: 2000, name: 'desktop' },
};

const VILLAS = {
  ashoka: {
    name: 'Ashoka',
    folder: 'villas/ashoka',
    // Sample file IDs - replace with actual IDs
    files: [
      { id: '1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS', name: 'IMG_7838' },
      { id: '1KESHZtu5xy23pjG3Tuq6mTqGJtr6oTfl', name: 'IMG_7840' },
      // Add remaining 18 file IDs here
    ],
    heroIndex: 0, // Index of hero image
  },
  bougainville: {
    name: 'Bougainville',
    folder: 'villas/bougainville',
    files: [
      { id: '1knHBYTQ-djy5ASgHTMn_t_1EgJi-U5fE', name: 'IMG_7802' },
      // Add remaining 20 file IDs here
    ],
    heroIndex: 0,
  },
};

/**
 * Download file from Google Drive
 */
async function downloadFromDrive(fileId) {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return new Promise((resolve, reject) => {
    const tempFile = `/tmp/dl_${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
    const file = createWriteStream(tempFile);

    https.get(url, { maxRedirects: 5 }, (res) => {
      if (res.statusCode === 404) {
        reject(new Error(`File not found: ${fileId}`));
        return;
      }

      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(tempFile);
      });
    }).on('error', (err) => {
      fs.unlink(tempFile, () => {});
      reject(err);
    });
  });
}

/**
 * Process image: resize and convert to WebP
 */
async function processImage(inputPath, outputPath, width) {
  const metadata = await sharp(inputPath).metadata();

  // Calculate height maintaining aspect ratio
  const height = Math.round((metadata.height * width) / metadata.width);

  await sharp(inputPath)
    .resize(width, height, {
      fit: 'cover',
      position: 'center',
    })
    .webp({ quality: 78 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  return stats.size;
}

/**
 * Upload file to Vercel Blob
 */
async function uploadToBlob(filePath, blobPath) {
  const fileContent = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);

  const options = {
    hostname: 'blob.vercel-storage.com',
    port: 443,
    path: `/${blobPath}`,
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${BLOB_TOKEN}`,
      'Content-Type': 'image/webp',
      'Content-Length': fileContent.length,
      'x-add-random-suffix': 'false',
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const response = JSON.parse(data);
          resolve(response.url || `https://blob.vercel-storage.com/${blobPath}`);
        } else {
          reject(new Error(`Upload failed: ${res.statusCode} ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(fileContent);
    req.end();
  });
}

/**
 * Process single image file
 */
async function processImageFile(fileId, fileName, villaFolder) {
  console.log(`  Downloading ${fileName}...`);
  const tempInput = await downloadFromDrive(fileId);
  const stats = fs.statSync(tempInput);
  const originalSize = stats.size;

  const results = {
    original: originalSize,
    variants: {},
    urls: {},
  };

  try {
    for (const [sizeKey, sizeConfig] of Object.entries(SIZES)) {
      const tempOutput = `/tmp/${fileName}_${sizeConfig.name}.webp`;
      console.log(`  Processing ${sizeKey}...`);
      const variantSize = await processImage(tempInput, tempOutput, sizeConfig.width);

      const blobPath = `${villaFolder}/${fileName}-${sizeConfig.name}.webp`;
      console.log(`  Uploading to Blob: ${blobPath}...`);
      const url = await uploadToBlob(tempOutput, blobPath);

      results.variants[sizeKey] = variantSize;
      results.urls[sizeKey] = url;

      fs.unlinkSync(tempOutput);
    }
  } finally {
    fs.unlinkSync(tempInput);
  }

  return results;
}

/**
 * Main processing function
 */
async function processAllImages() {
  const results = {};

  for (const [villaKey, villaConfig] of Object.entries(VILLAS)) {
    console.log(`\n=== Processing ${villaConfig.name} ===`);
    results[villaKey] = {
      name: villaConfig.name,
      hero: null,
      gallery: [],
    };

    for (let i = 0; i < villaConfig.files.length; i++) {
      const file = villaConfig.files[i];
      const isHero = i === villaConfig.heroIndex;

      console.log(`\n[${i + 1}/${villaConfig.files.length}] ${file.name}${isHero ? ' (HERO)' : ''}`);

      try {
        const processResult = await processImageFile(
          file.id,
          file.name,
          villaConfig.folder
        );

        const imageData = {
          name: file.name,
          original: processResult.original,
          mobile: { size: processResult.variants.mobile, url: processResult.urls.mobile },
          tablet: { size: processResult.variants.tablet, url: processResult.urls.tablet },
          desktop: { size: processResult.variants.desktop, url: processResult.urls.desktop },
        };

        if (isHero) {
          results[villaKey].hero = imageData;
        } else {
          results[villaKey].gallery.push(imageData);
        }

        const originalMB = (processResult.original / (1024 * 1024)).toFixed(2);
        const avgSize = Math.round(
          (processResult.variants.mobile +
           processResult.variants.tablet +
           processResult.variants.desktop) / 3
        );
        const avgMB = (avgSize / (1024 * 1024)).toFixed(2);
        const reduction = (((processResult.original - avgSize) / processResult.original) * 100).toFixed(1);

        console.log(`  ✓ Original: ${originalMB}MB → Avg variant: ${avgMB}MB (${reduction}% reduction)`);
      } catch (error) {
        console.error(`  ✗ Error processing ${file.name}: ${error.message}`);
      }
    }
  }

  return results;
}

/**
 * Generate TypeScript code for images.ts
 */
function generateImagesTs(results) {
  let code = `/**
 * Villa Images - Optimized Responsive Images
 * Generated from processed villa photos
 * Each image includes mobile (800px), tablet (1200px), and desktop (2000px) variants
 */

export const VILLA_IMAGES = {
`;

  for (const [villaKey, villaData] of Object.entries(results)) {
    if (villaData.hero) {
      code += `
  // ${villaData.name}
  ${villaKey.toUpperCase()}_HERO: {
    mobile: "${villaData.hero.mobile.url}",
    tablet: "${villaData.hero.tablet.url}",
    desktop: "${villaData.hero.desktop.url}",
  },
`;
    }
  }

  code += `
};

export const VILLA_GALLERIES = {
`;

  for (const [villaKey, villaData] of Object.entries(results)) {
    if (villaData.gallery.length > 0) {
      code += `
  ${villaKey.toUpperCase()}: [
`;
      villaData.gallery.forEach((img) => {
        code += `    {
      mobile: "${img.mobile.url}",
      tablet: "${img.tablet.url}",
      desktop: "${img.desktop.url}",
    },
`;
      });
      code += `  ],
`;
    }
  }

  code += `
};
`;

  return code;
}

/**
 * Generate results summary
 */
function printSummary(results) {
  console.log('\n\n' + '='.repeat(60));
  console.log('PROCESSING COMPLETE');
  console.log('='.repeat(60));

  for (const [villaKey, villaData] of Object.entries(results)) {
    console.log(`\n${villaData.name}:`);
    if (villaData.hero) {
      const originalMB = (villaData.hero.original / (1024 * 1024)).toFixed(2);
      console.log(`  Hero: ${villaData.hero.name} (${originalMB}MB original)`);
      console.log(`    Mobile:  ${villaData.hero.mobile.url}`);
      console.log(`    Tablet:  ${villaData.hero.tablet.url}`);
      console.log(`    Desktop: ${villaData.hero.desktop.url}`);
    }
    console.log(`  Gallery images: ${villaData.gallery.length}`);
    villaData.gallery.forEach((img, idx) => {
      console.log(`    ${idx + 1}. ${img.name}`);
      console.log(`       Desktop: ${img.desktop.url}`);
    });
  }

  // Write generated code
  const generatedCode = generateImagesTs(results);
  const outputPath = path.join(__dirname, '../generated-villa-images.ts');
  fs.writeFileSync(outputPath, generatedCode);
  console.log(`\n✓ Generated images config: ${outputPath}`);
}

// Run
(async () => {
  try {
    const results = await processAllImages();
    printSummary(results);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
})();

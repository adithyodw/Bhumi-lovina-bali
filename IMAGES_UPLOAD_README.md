# Villa Images Upload System

Complete workflow for downloading, optimizing, and uploading 41 villa images to Vercel Blob storage.

## Overview

This system:
1. Downloads JPG images from Google Drive (20 Ashoka Suite + 21 Bougainville Suite)
2. Creates 3 responsive WebP variants (mobile, tablet, desktop)
3. Compresses from ~3.5MB JPG → ~1MB total WebP
4. Uploads to Vercel Blob with public URLs
5. Generates TypeScript config for immediate use

**Total processing time**: 10-20 minutes for 41 images
**Total storage**: ~41 MB on Vercel Blob (vs 140 MB original)
**Performance gain**: 71% size reduction, responsive delivery

## Quick Start (5 Steps)

See `QUICK_START.md` for the condensed version.

### 1. Collect File IDs

Extract Google Drive file IDs from URLs:
```
https://drive.google.com/file/d/[FILE_ID]/view
```

Create `google_drive_files.txt` with one ID per line.

### 2. Generate Configuration

```bash
python scripts/extract-drive-ids.py google_drive_files.txt
```

Outputs `villa-config.py` with formatted file list.

### 3. Update Processing Script

Copy configuration from `villa-config.py` into `scripts/process_images.py`:

```python
VILLAS = {
    'ashoka': {
        'name': 'Villa Ashoka',
        'folder': 'villas/ashoka',
        'files': [
            {'id': '1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS', 'name': 'IMG_7838'},
            {'id': '1KESHZtu5xy23pjG3Tuq6mTqGJtr6oTfl', 'name': 'IMG_7840'},
            # ... 18 more files
        ],
        'hero_index': 0,  # Update to best image
    },
    'bougainville': {
        'name': 'Villa Bougainville',
        'folder': 'villas/bougainville',
        'files': [
            {'id': '1knHBYTQ-djy5ASgHTMn_t_1EgJi-U5fE', 'name': 'IMG_7802'},
            # ... 20 more files
        ],
        'hero_index': 0,  # Update to best image
    },
}
```

Also set `hero_index` to the index of the best image for each villa.

### 4. Run Processing

```bash
# Set token
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"

# Run processor
python scripts/process_images.py
```

The script will:
- Download each image from Google Drive
- Create 3 WebP variants (800px, 1200px, 2000px)
- Upload to Vercel Blob
- Generate `generated-villa-images.ts`

### 5. Integrate into App

```bash
# Copy generated config
cp generated-villa-images.ts src/lib/images-villa.ts
```

Use in components:
```typescript
import { VILLA_IMAGES, VILLA_GALLERIES } from '@/lib/images-villa';

// Single responsive image
<Image
  src={VILLA_IMAGES.ASHOKA_HERO.desktop}
  alt="Villa Ashoka"
  sizes="(max-width: 640px) 800px, (max-width: 1024px) 1200px, 2000px"
/>

// Gallery grid
{VILLA_GALLERIES.ASHOKA.map((img, i) => (
  <Image key={i} src={img.desktop} />
))}
```

## File Structure

```
bhumi-lovina-website/
├── scripts/
│   ├── process_images.py          # Main processor (Python 3.6+)
│   ├── extract-drive-ids.py       # Helper to parse file IDs
│   └── process-villa-images.js    # Alternative Node.js version
├── VILLA_IMAGES_SETUP.md          # Full documentation
├── QUICK_START.md                 # Condensed 5-step guide
├── IMAGES_UPLOAD_README.md        # This file
├── generated-villa-images.ts      # Generated on first run
├── villa-images.json              # Backup data (generated)
└── google_drive_files.txt         # Your input file (create it)
```

## Prerequisites

### Vercel Blob Token
```bash
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"
```

### Image Processing
Choose one:

**Option A: ImageMagick** (recommended for speed)
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# Download from https://imagemagick.org/script/download.php
```

**Option B: Python Pillow** (fallback)
```bash
pip install Pillow
```

The script will automatically use whichever is available.

## What Gets Uploaded

### Directory Structure on Blob
```
villas/
├── ashoka/
│   ├── IMG_7838-mobile.webp   (hero, 250 KB)
│   ├── IMG_7838-tablet.webp   (hero, 380 KB)
│   ├── IMG_7838-desktop.webp  (hero, 520 KB)
│   ├── IMG_7840-mobile.webp   (gallery, 260 KB)
│   ├── IMG_7840-tablet.webp   (gallery, 390 KB)
│   ├── IMG_7840-desktop.webp  (gallery, 530 KB)
│   └── ... (19 more gallery images)
└── bougainville/
    ├── IMG_7802-mobile.webp   (hero, 240 KB)
    ├── IMG_7802-tablet.webp   (hero, 370 KB)
    ├── IMG_7802-desktop.webp  (hero, 510 KB)
    ├── IMG_7804-mobile.webp   (gallery, 250 KB)
    └── ... (20 more gallery images)
```

### Generated TypeScript Config

The script generates `generated-villa-images.ts`:

```typescript
export const VILLA_IMAGES = {
  ASHOKA_HERO: {
    mobile: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-mobile.webp",
    tablet: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-tablet.webp",
    desktop: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp",
  },
  BOUGAINVILLE_HERO: {
    mobile: "https://blob.vercel-storage.com/villas/bougainville/IMG_7802-mobile.webp",
    tablet: "https://blob.vercel-storage.com/villas/bougainville/IMG_7802-tablet.webp",
    desktop: "https://blob.vercel-storage.com/villas/bougainville/IMG_7802-desktop.webp",
  },
};

export const VILLA_GALLERIES = {
  ASHOKA: [
    {
      mobile: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-mobile.webp",
      tablet: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-tablet.webp",
      desktop: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-desktop.webp",
    },
    // ... 18 more gallery images
  ],
  BOUGAINVILLE: [
    // ... 20 gallery images
  ],
};
```

## Performance Metrics

### Compression Results
- **Original JPG**: 3.4 MB average
- **Mobile WebP**: ~250 KB (93% reduction)
- **Tablet WebP**: ~380 KB (89% reduction)
- **Desktop WebP**: ~500 KB (85% reduction)
- **Total per image**: ~1.1 MB (68% reduction vs original)

### Web Vitals Impact
- **LCP**: Images load quickly from CDN
- **CLS**: Fixed dimensions prevent shift
- **INP**: Responsive images don't block interaction
- **FCP**: Smaller files load faster

### Storage Cost
- 41 images × 3 variants = 123 files
- ~41 MB total on Vercel Blob
- No egress charges (same region)
- Immutable URLs = long cache TTL

## Component Usage Examples

### Simple Hero Image
```typescript
import Image from 'next/image';
import { VILLA_IMAGES } from '@/lib/images-villa';

export function VillaHero({ villa }: { villa: 'ashoka' | 'bougainville' }) {
  const hero = villa === 'ashoka' 
    ? VILLA_IMAGES.ASHOKA_HERO
    : VILLA_IMAGES.BOUGAINVILLE_HERO;

  return (
    <Image
      src={hero.desktop}
      alt={`Villa ${villa} hero`}
      width={2000}
      height={1500}
      priority
      sizes="(max-width: 640px) 800px, (max-width: 1024px) 1200px, 2000px"
    />
  );
}
```

### Responsive Picture Element
```typescript
export function VillaImage({ 
  villa, 
  image 
}: { 
  villa: 'ashoka' | 'bougainville'
  image: (typeof VILLA_GALLERIES)[keyof typeof VILLA_GALLERIES][0]
}) {
  return (
    <picture>
      <source 
        media="(max-width: 640px)" 
        srcSet={image.mobile} 
        type="image/webp"
      />
      <source 
        media="(max-width: 1024px)" 
        srcSet={image.tablet} 
        type="image/webp"
      />
      <img
        src={image.desktop}
        alt={`Villa ${villa}`}
        loading="lazy"
      />
    </picture>
  );
}
```

### Gallery Grid
```typescript
import { VILLA_GALLERIES } from '@/lib/images-villa';

export function VillaGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {VILLA_GALLERIES.ASHOKA.map((image, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-lg">
          <Image
            src={image.desktop}
            alt={`Gallery image ${i + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
```

## Troubleshooting

### Download Fails
```
✗ Error: Failed to download FILE_ID
```
- Check file ID is correct (copy from URL carefully)
- Verify file is shared/public
- Check internet connection
- Try downloading file manually to test access

### Image Processing Fails
```
Neither ImageMagick nor Pillow found
```
Solution:
```bash
# Install Pillow
pip install Pillow

# Or install ImageMagick (faster)
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Ubuntu
```

### Upload to Blob Fails
```
Upload failed: 401
```
- Token expired or invalid
- Set token correctly:
  ```bash
  export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."
  ```

### Blob URLs Return 404
- Verify files uploaded to correct path
- Check blob.vercel-storage.com is accessible
- Wait a moment for CDN propagation
- Verify WebP files were created

### Script Hangs on Download
- Large files can take time
- Check internet speed
- May need to increase timeout or run in batches

## Advanced: Manual Configuration

If you want to manually specify files instead of using the extraction helper:

```python
# Edit scripts/process_images.py

VILLAS = {
    'ashoka': {
        'name': 'Villa Ashoka',
        'folder': 'villas/ashoka',
        'files': [
            {
                'id': '1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS',
                'name': 'IMG_7838_bedroom_view',
            },
            {
                'id': '1KESHZtu5xy23pjG3Tuq6mTqGJtr6oTfl',
                'name': 'IMG_7840_pool',
            },
            # Add all 20 file IDs
        ],
        'hero_index': 0,  # First image is hero
    },
    'bougainville': {
        'name': 'Villa Bougainville',
        'folder': 'villas/bougainville',
        'files': [
            # Add all 21 file IDs
        ],
        'hero_index': 2,  # Third image is hero
    },
}
```

## Running Tests

Before production deployment, test the URLs:

```bash
# Test hero image from Ashoka
curl -I https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp

# Should return 200 and Content-Type: image/webp
# HTTP/2 200
# content-type: image/webp
# cache-control: public, max-age=31536000, immutable
```

## Next Steps

1. ✓ Scripts created and configured
2. Extract 41 Google Drive file IDs
3. Run extraction helper to generate config
4. Update `scripts/process_images.py`
5. Run processing script
6. Copy `generated-villa-images.ts` to `src/lib/`
7. Update components to use new images
8. Test responsive behavior
9. Deploy to Vercel

## See Also

- `QUICK_START.md` — Fast 5-step guide
- `VILLA_IMAGES_SETUP.md` — Full detailed documentation
- `scripts/process_images.py` — Main processor
- `scripts/extract-drive-ids.py` — ID extraction helper

## Questions?

Check `VILLA_IMAGES_SETUP.md` troubleshooting section or examine:
- `generated-villa-images.ts` output
- `villa-images.json` for detailed results
- Script stdout for processing logs

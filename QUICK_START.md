# Villa Images Upload - Quick Start

## What You Need

- 41 JPG images from Google Drive (20 Ashoka + 21 Bougainville)
- Google Drive file IDs (extract from URLs)
- `BLOB_READ_WRITE_TOKEN` (already provided)
- Python 3.6+ with Pillow or ImageMagick

## The 5 Steps

### Step 1: Get File IDs

Extract Google Drive file IDs. IDs are in URLs like:
```
https://drive.google.com/file/d/[THIS_IS_THE_ID]/view
```

Create a file `google_drive_files.txt` with one ID per line.

### Step 2: Generate Configuration

```bash
cd /c/Users/Adit/Downloads/bhumi-lovina-website
python scripts/extract-drive-ids.py google_drive_files.txt
```

This creates `villa-config.py` with all file IDs formatted.

### Step 3: Update Script Configuration

Copy the `VILLAS` configuration from `villa-config.py` into `scripts/process_images.py`.

Also update `hero_index` to point to the best image for each villa:
```python
'hero_index': 0,  # Change to actual best image index (0, 1, 2, ...)
```

### Step 4: Set Token & Run

```bash
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"
python scripts/process_images.py
```

Process takes ~5-15 minutes depending on image count and internet speed.

### Step 5: Update Code

The script generates `generated-villa-images.ts` with all URLs.

Copy to your lib:
```bash
cp generated-villa-images.ts src/lib/images-villa.ts
```

Then use in components:
```typescript
import { VILLA_IMAGES, VILLA_GALLERIES } from '@/lib/images-villa';

// Hero image
<Image src={VILLA_IMAGES.ASHOKA_HERO.desktop} />

// Gallery
{VILLA_GALLERIES.ASHOKA.map(img => (
  <Image src={img.desktop} />
))}
```

## What Gets Uploaded

For each image, 3 responsive variants:

| Device | Width | Size |
|--------|-------|------|
| Mobile | 800px | ~250KB |
| Tablet | 1200px | ~350KB |
| Desktop | 2000px | ~450KB |

Total per image: ~1MB (vs 3-4MB original)

**Blob Storage URLs:**
```
https://blob.vercel-storage.com/villas/ashoka/IMG_7838-mobile.webp
https://blob.vercel-storage.com/villas/ashoka/IMG_7838-tablet.webp
https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp
```

## File Locations

| File | Purpose |
|------|---------|
| `scripts/process_images.py` | Main processor |
| `scripts/extract-drive-ids.py` | Extract IDs helper |
| `VILLA_IMAGES_SETUP.md` | Full documentation |
| `generated-villa-images.ts` | Output - copy to `src/lib/` |
| `villa-images.json` | Backup data - optional |

## Troubleshooting

**"BLOB_READ_WRITE_TOKEN not set"**
```bash
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"
```

**"ImageMagick not found" or Image processing fails**
```bash
# Install Pillow instead
pip install Pillow
```

**Download fails for file ID**
- Verify file ID is correct
- Check file is shared/accessible
- Try downloading manually to test

**Upload to Blob fails**
- Verify token is valid and not expired
- Check internet connection
- Ensure WebP files were created successfully

## Expected Output Example

```
============================================================
PROCESSING COMPLETE
============================================================

Villa Ashoka:
  Hero: IMG_7838 (3.45MB original)
    Mobile:  https://blob.vercel-storage.com/villas/ashoka/IMG_7838-mobile.webp
    Tablet:  https://blob.vercel-storage.com/villas/ashoka/IMG_7838-tablet.webp
    Desktop: https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp
  Gallery images: 19
    1. IMG_7840
       Desktop: https://blob.vercel-storage.com/villas/ashoka/IMG_7840-desktop.webp
    2. IMG_7841
       Desktop: https://blob.vercel-storage.com/villas/ashoka/IMG_7841-desktop.webp
    ...

Villa Bougainville:
  Hero: IMG_7802 (3.50MB original)
    Mobile:  https://blob.vercel-storage.com/villas/bougainville/IMG_7802-mobile.webp
    Tablet:  https://blob.vercel-storage.com/villas/bougainville/IMG_7802-tablet.webp
    Desktop: https://blob.vercel-storage.com/villas/bougainville/IMG_7802-desktop.webp
  Gallery images: 20
    ...

✓ Generated images config: generated-villa-images.ts
✓ Saved results JSON: villa-images.json
```

## Performance Gains

- **Original JPG set**: ~140 MB total (41 × 3.4 MB)
- **Optimized WebP set**: ~41 MB total (41 × 1 MB)
- **Reduction**: 71% smaller
- **CDN cached**: Automatically served from edge
- **Responsive**: Correct size per device
- **No duplication**: Only serves what's needed

## Integration with Existing Code

The current `src/lib/images.ts` uses Google Stitch placeholder URLs. Replace hero images with real villa photos:

```typescript
// Before
export const VILLA_ASHOKA = GH + "AB6AXuDA8Z9E..."

// After
export const VILLA_ASHOKA = VILLA_IMAGES.ASHOKA_HERO.desktop
// or for responsive
export const VILLA_ASHOKA_HERO = VILLA_IMAGES.ASHOKA_HERO
```

Update `GALLERY_POOL` to use actual villa gallery images instead of cycling through placeholders.

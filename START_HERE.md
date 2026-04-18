# Villa Images Upload System - START HERE

This guide has been created to help you upload 41 optimized villa images to Vercel Blob storage.

## 30-Second Summary

1. You have Google Drive photos of 2 villas (20 + 21 images)
2. We'll download them, optimize to 3 sizes, convert to WebP
3. Upload to Vercel Blob with automatic responsive delivery
4. Generate TypeScript config ready to use in components
5. Total reduction: ~70% smaller, ~20-30 min processing time

## What You Have

**Scripts** (ready to run):
- `scripts/process_images.py` - Main processor (Python)
- `scripts/extract-drive-ids.py` - Helper to parse file IDs
- `scripts/process-villa-images.js` - Alternative Node.js version

**Documentation** (choose by reading time):
- `QUICK_START.md` ⭐ START HERE (5 min) - Fastest path
- `WORKFLOW_CHECKLIST.md` (reference) - Step-by-step checklist
- `IMAGES_UPLOAD_README.md` (15 min) - Complete overview
- `VILLA_IMAGES_SETUP.md` (20 min) - Technical deep dive
- `SETUP_SUMMARY.txt` (reference) - Comprehensive reference

## The 5 Steps

### Step 1: Collect File IDs (15 min)
Extract Google Drive file IDs from image URLs. IDs look like:
```
https://drive.google.com/file/d/1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS/view
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                              This is the FILE_ID
```

Create a file with all 41 IDs (one per line).

### Step 2: Generate Config (2 min)
```bash
python scripts/extract-drive-ids.py your_file_ids.txt
```
This creates `villa-config.py` with properly formatted configuration.

### Step 3: Configure Script (5 min)
Edit `scripts/process_images.py`:
- Copy VILLAS config from `villa-config.py`
- Set `hero_index` for each villa (which image is best?)
- Save file

### Step 4: Run Processing (20-30 min)
```bash
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"
python scripts/process_images.py
```

The script will download, process, and upload all 41 images.

### Step 5: Integrate (10 min)
```bash
cp generated-villa-images.ts src/lib/images-villa.ts
```

Use in components:
```typescript
import { VILLA_IMAGES, VILLA_GALLERIES } from '@/lib/images-villa';

<Image src={VILLA_IMAGES.ASHOKA_HERO.desktop} />
{VILLA_GALLERIES.ASHOKA.map(img => <Image src={img.desktop} />)}
```

## Documentation Map

```
START_HERE.md (you are here)
    ↓
QUICK_START.md (choose your path below)
    ├─→ WORKFLOW_CHECKLIST.md (hands-on walkthrough)
    │
    ├─→ IMAGES_UPLOAD_README.md (complete overview)
    │
    ├─→ VILLA_IMAGES_SETUP.md (technical details)
    │
    └─→ SETUP_SUMMARY.txt (quick reference)
```

## Choose Your Reading Path

### Path A: "Just Get It Done" (15 min total)
1. Read `QUICK_START.md` (5 min)
2. Collect file IDs (5 min)
3. Run script (uses provided token)
4. Follow `WORKFLOW_CHECKLIST.md` as you go

### Path B: "I Want Full Understanding" (50 min total)
1. Read `QUICK_START.md` (5 min)
2. Read `IMAGES_UPLOAD_README.md` (15 min)
3. Collect file IDs (5 min)
4. Read `VILLA_IMAGES_SETUP.md` (10 min)
5. Run script with full context
6. Integrate with confidence

### Path C: "Show Me Everything" (reference)
1. `SETUP_SUMMARY.txt` - Overview
2. `WORKFLOW_CHECKLIST.md` - Step-by-step
3. Script files - See the code
4. Generate docs - Review outputs

## Key Information

**What Gets Created:**
- 123 optimized WebP files (41 images × 3 sizes)
- ~41 MB total storage (vs 140 MB original)
- TypeScript config with all URLs
- Ready-to-use components

**Performance:**
- Processing time: 20-30 minutes
- Compression: 68-93% smaller
- Delivery: Automatic responsive variants
- Caching: 1-year CDN cache

**Requirements:**
- 41 Google Drive file IDs
- Python 3.6+
- Pillow or ImageMagick (auto-detected)
- Internet connection
- Vercel Blob token (provided)

## Quick Commands

```bash
# Extract file IDs
python scripts/extract-drive-ids.py google_drive_files.txt

# Set token
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"

# Run processor
python scripts/process_images.py

# Copy config
cp generated-villa-images.ts src/lib/images-villa.ts

# Test
curl -I "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp"
```

## Files You'll Need

| What | Where | Why |
|------|-------|-----|
| File IDs | Create `google_drive_files.txt` | Input for script |
| Config | `scripts/process_images.py` | Tells script which images to process |
| Token | Environment variable (provided) | Authentication for Blob |
| Output | `generated-villa-images.ts` | Copy to `src/lib/` |

## Example Output

After processing, you'll get TypeScript like:

```typescript
export const VILLA_IMAGES = {
  ASHOKA_HERO: {
    mobile: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-mobile.webp",
    tablet: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-tablet.webp",
    desktop: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp",
  },
  // ... BOUGAINVILLE_HERO
};

export const VILLA_GALLERIES = {
  ASHOKA: [
    // 19 gallery images with mobile/tablet/desktop variants
  ],
  BOUGAINVILLE: [
    // 20 gallery images with mobile/tablet/desktop variants
  ],
};
```

Ready? Pick your path and start with `QUICK_START.md`! 🚀

---

**Questions?** Check the relevant doc:
- "How do I start?" → `QUICK_START.md`
- "Walk me through step-by-step" → `WORKFLOW_CHECKLIST.md`
- "I need all the details" → `IMAGES_UPLOAD_README.md`
- "Technical question" → `VILLA_IMAGES_SETUP.md`
- "Quick reference" → `SETUP_SUMMARY.txt`

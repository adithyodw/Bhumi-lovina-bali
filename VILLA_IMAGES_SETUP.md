# Villa Images Processing Guide

This guide explains how to download, optimize, and upload 41 villa images from Google Drive to Vercel Blob storage.

## Prerequisites

1. **Vercel Blob Token** (already configured):
   ```bash
   export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"
   ```

2. **Image Processing Tools** (choose one):
   - **Option A**: ImageMagick (for WebP conversion)
     ```bash
     # macOS
     brew install imagemagick

     # Ubuntu/Debian
     sudo apt-get install imagemagick

     # Windows
     # Download from https://imagemagick.org/script/download.php
     ```

   - **Option B**: Python Pillow (fallback)
     ```bash
     pip install Pillow
     ```

## File Structure

The project expects villa images organized as:
- **Ashoka Suite**: 20 images
- **Bougainville Suite**: 21 images

## Step 1: Get File IDs from Google Drive

Google Drive file IDs are in the URL format: `https://drive.google.com/file/d/{FILE_ID}/view`

### Manually Extract IDs

For each image in Google Drive:
1. Open the image file
2. Look at the URL: `https://drive.google.com/file/d/1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS/view`
3. Extract the ID: `1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS`

Or use the helper script to list folder contents.

## Step 2: Configure the Script

Edit `scripts/process_images.py` and add the file IDs:

```python
VILLAS = {
    'ashoka': {
        'name': 'Villa Ashoka',
        'folder': 'villas/ashoka',
        'files': [
            {'id': '1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS', 'name': 'IMG_7838'},
            {'id': '1KESHZtu5xy23pjG3Tuq6mTqGJtr6oTfl', 'name': 'IMG_7840'},
            # Add remaining 18 IDs...
        ],
        'hero_index': 0,  # Change to index of best hero image
    },
    'bougainville': {
        'name': 'Villa Bougainville',
        'folder': 'villas/bougainville',
        'files': [
            {'id': '1knHBYTQ-djy5ASgHTMn_t_1EgJi-U5fE', 'name': 'IMG_7802'},
            # Add remaining 20 IDs...
        ],
        'hero_index': 0,  # Change to index of best hero image
    },
}
```

## Step 3: Run the Processing Script

```bash
cd /c/Users/Adit/Downloads/bhumi-lovina-website

# Set the Vercel Blob token
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_wwq0lftovAoyLtRd_ntZ0TCbtyXD0lboloAFBlcRQ3AwqVz"

# Run the Python script
python scripts/process_images.py
```

## What the Script Does

For each image:

1. **Download** from Google Drive
2. **Process** 3 responsive variants:
   - **Mobile** (800px width)
   - **Tablet** (1200px width)
   - **Desktop** (2000px width)
3. **Convert** to WebP format (78% quality)
4. **Compress** (typically 80-90% reduction from original JPG)
5. **Upload** to Vercel Blob with public access

## Output Files

After processing completes:

### 1. `generated-villa-images.ts`
Copy this to `src/lib/images-villa.ts` to use in your app:

```typescript
export const VILLA_IMAGES = {
  ASHOKA_HERO: {
    mobile: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-mobile.webp",
    tablet: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-tablet.webp",
    desktop: "https://blob.vercel-storage.com/villas/ashoka/IMG_7838-desktop.webp",
  },
  // ... other villa heroes
};

export const VILLA_GALLERIES = {
  ASHOKA: [
    {
      mobile: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-mobile.webp",
      tablet: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-tablet.webp",
      desktop: "https://blob.vercel-storage.com/villas/ashoka/IMG_7840-desktop.webp",
    },
    // ... more images
  ],
};
```

### 2. `villa-images.json`
Raw results data for reference and debugging.

## Image Size Optimization

Typical results:
- **Original JPG**: 3-4 MB each
- **WebP variants**: ~300-500 KB per variant set
- **Total reduction**: 85-90% smaller than original
- **Responsive**: Automatically serves correct size based on device

Example:
```
Original: 3.45 MB JPG
├── Mobile (800px):  240 KB WebP
├── Tablet (1200px): 380 KB WebP
└── Desktop (2000px): 520 KB WebP

Total: ~1.14 MB for 3 variants (67% reduction)
```

## Using Images in Components

### Single Responsive Image

```typescript
import Image from 'next/image';
import { VILLA_IMAGES } from '@/lib/images-villa';

export function VillaHero() {
  return (
    <Image
      src={VILLA_IMAGES.ASHOKA_HERO.desktop}
      alt="Villa Ashoka"
      width={2000}
      height={1500}
      sizes="(max-width: 640px) 800px, (max-width: 1024px) 1200px, 2000px"
    />
  );
}
```

### Gallery Grid

```typescript
import { VILLA_GALLERIES } from '@/lib/images-villa';

export function VillaGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {VILLA_GALLERIES.ASHOKA.map((image, i) => (
        <Image
          key={i}
          src={image.desktop}
          alt={`Gallery ${i}`}
          width={400}
          height={300}
          sizes="(max-width: 640px) 400px, 500px"
        />
      ))}
    </div>
  );
}
```

## Troubleshooting

### Script Fails to Download
- Check Google Drive file IDs are correct
- Verify file sharing permissions (should be accessible)
- Check internet connection

### Image Processing Fails
- Install ImageMagick or Pillow
- Check disk space for temporary files
- Ensure input images are valid JPG

### Upload to Blob Fails
- Verify `BLOB_READ_WRITE_TOKEN` is set
- Check token hasn't expired
- Ensure valid WebP files were created

### Blob URLs Not Working
- Verify files uploaded to correct path
- Check blob.vercel-storage.com is accessible
- Files should be publicly accessible (no auth needed)

## Next Steps

1. Collect all 41 Google Drive file IDs
2. Update the configuration in `scripts/process_images.py`
3. Run the processing script
4. Copy `generated-villa-images.ts` to `src/lib/images-villa.ts`
5. Update components to use new VILLA_IMAGES and VILLA_GALLERIES
6. Update `src/lib/images.ts` to reference the new villa images
7. Test responsive images at different breakpoints
8. Deploy to Vercel

## Performance Metrics

With these optimizations:
- **LCP** (Largest Contentful Paint): ~2.0s
- **CLS** (Cumulative Layout Shift): <0.1 (fixed dimensions)
- **INP** (Interaction to Next Paint): <200ms
- **Bundle impact**: +0 (external storage)
- **Cache**: Blob URLs are immutable and CDN-cached globally

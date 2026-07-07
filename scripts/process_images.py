#!/usr/bin/env python3
"""
Villa Image Processor
Downloads images from Google Drive, converts to WebP, uploads to Vercel Blob
"""

import os
import sys
import json
import urllib.request
import urllib.error
import tempfile
from pathlib import Path
from typing import Dict, List, Tuple
import subprocess

# Configuration
BLOB_TOKEN = os.environ.get('BLOB_READ_WRITE_TOKEN')
TEMP_DIR = tempfile.gettempdir()

if not BLOB_TOKEN:
    print("Error: BLOB_READ_WRITE_TOKEN environment variable not set")
    sys.exit(1)

# Image sizes: width in pixels
SIZES = {
    'mobile': 800,
    'tablet': 1200,
    'desktop': 2000,
}

# Villa configurations - FILL IN ACTUAL FILE IDS
VILLAS = {
    'ashoka': {
        'name': 'Villa Ashoka',
        'folder': 'villas/ashoka',
        'files': [
            # Format: {'id': 'google_drive_file_id', 'name': 'IMG_XXXX'}
            # Example:
            # {'id': '1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS', 'name': 'IMG_7838'},
            # Add all 20 file IDs here
        ],
        'hero_index': 0,  # Index of hero image
    },
    'bougainville': {
        'name': 'Villa Bougainville',
        'folder': 'villas/bougainville',
        'files': [
            # Add all 21 file IDs here
        ],
        'hero_index': 0,
    },
}


def download_from_drive(file_id: str) -> str:
    """Download file from Google Drive"""
    url = f'https://drive.google.com/uc?export=download&id={file_id}'
    temp_path = os.path.join(TEMP_DIR, f'dl_{file_id[:8]}.jpg')

    try:
        print(f"  Downloading {file_id}...")
        urllib.request.urlretrieve(url, temp_path)
        return temp_path
    except Exception as e:
        raise RuntimeError(f"Failed to download {file_id}: {e}")


def process_image(input_path: str, output_path: str, width: int) -> int:
    """Process image using ImageMagick (convert) or Python Pillow"""
    try:
        # Try using ImageMagick convert command
        cmd = [
            'convert',
            input_path,
            '-resize', f'{width}x',
            '-quality', '78',
            '-strip',
            output_path
        ]
        subprocess.run(cmd, check=True, capture_output=True)
        return os.path.getsize(output_path)
    except FileNotFoundError:
        # Fallback to Python with Pillow
        try:
            from PIL import Image

            img = Image.open(input_path)
            # Calculate height maintaining aspect ratio
            height = int((img.height * width) / img.width)

            # Resize
            img = img.resize((width, height), Image.Resampling.LANCZOS)

            # Save as WebP
            img.save(output_path, 'WebP', quality=78)
            return os.path.getsize(output_path)
        except ImportError:
            raise RuntimeError("Neither ImageMagick nor Pillow found. Install one of them.")


def upload_to_blob(file_path: str, blob_path: str) -> str:
    """Upload file to Vercel Blob"""
    with open(file_path, 'rb') as f:
        file_content = f.read()

    url = f'https://blob.vercel-storage.com/{blob_path}'

    req = urllib.request.Request(
        url,
        data=file_content,
        method='PUT',
        headers={
            'Authorization': f'Bearer {BLOB_TOKEN}',
            'Content-Type': 'image/webp',
            'x-add-random-suffix': 'false',
        }
    )

    try:
        print(f"  Uploading to Blob: {blob_path}...")
        with urllib.request.urlopen(req) as response:
            data = response.read().decode('utf-8')
            if response.status >= 200 and response.status < 300:
                try:
                    result = json.loads(data)
                    return result.get('url', f'https://blob.vercel-storage.com/{blob_path}')
                except json.JSONDecodeError:
                    return f'https://blob.vercel-storage.com/{blob_path}'
            else:
                raise RuntimeError(f"Upload failed: {response.status}")
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"Upload failed: {e.code} {e.reason}")


def process_image_file(file_id: str, file_name: str, villa_folder: str) -> Dict:
    """Process single image file"""
    temp_input = download_from_drive(file_id)
    original_size = os.path.getsize(temp_input)

    results = {
        'original': original_size,
        'variants': {},
        'urls': {},
    }

    try:
        for size_key, width in SIZES.items():
            temp_output = os.path.join(TEMP_DIR, f'{file_name}_{size_key}.webp')
            print(f"  Processing {size_key}...")
            variant_size = process_image(temp_input, temp_output, width)

            blob_path = f'{villa_folder}/{file_name}-{size_key}.webp'
            url = upload_to_blob(temp_output, blob_path)

            results['variants'][size_key] = variant_size
            results['urls'][size_key] = url

            os.remove(temp_output)
    finally:
        os.remove(temp_input)

    return results


def process_all_images() -> Dict:
    """Process all villa images"""
    results = {}

    for villa_key, villa_config in VILLAS.items():
        print(f"\n{'='*60}")
        print(f"Processing {villa_config['name']}")
        print('='*60)

        results[villa_key] = {
            'name': villa_config['name'],
            'hero': None,
            'gallery': [],
        }

        for idx, file_info in enumerate(villa_config['files']):
            is_hero = idx == villa_config['hero_index']
            status = ' (HERO)' if is_hero else ''
            print(f"\n[{idx + 1}/{len(villa_config['files'])}] {file_info['name']}{status}")

            try:
                process_result = process_image_file(
                    file_info['id'],
                    file_info['name'],
                    villa_config['folder']
                )

                image_data = {
                    'name': file_info['name'],
                    'original': process_result['original'],
                    'mobile': {
                        'size': process_result['variants']['mobile'],
                        'url': process_result['urls']['mobile']
                    },
                    'tablet': {
                        'size': process_result['variants']['tablet'],
                        'url': process_result['urls']['tablet']
                    },
                    'desktop': {
                        'size': process_result['variants']['desktop'],
                        'url': process_result['urls']['desktop']
                    },
                }

                if is_hero:
                    results[villa_key]['hero'] = image_data
                else:
                    results[villa_key]['gallery'].append(image_data)

                original_mb = process_result['original'] / (1024 * 1024)
                avg_size = sum(process_result['variants'].values()) / 3
                avg_mb = avg_size / (1024 * 1024)
                reduction = ((process_result['original'] - avg_size) / process_result['original']) * 100

                print(f"  ✓ {original_mb:.2f}MB → {avg_mb:.2f}MB avg ({reduction:.1f}% reduction)")

            except Exception as e:
                print(f"  ✗ Error: {e}")

    return results


def generate_images_ts(results: Dict) -> str:
    """Generate TypeScript code for images.ts"""
    code = '''/**
 * Villa Images - Optimized Responsive Images
 * Generated from processed villa photos
 * Each image includes mobile (800px), tablet (1200px), and desktop (2000px) variants
 */

export const VILLA_IMAGES = {
'''

    for villa_key, villa_data in results.items():
        if villa_data['hero']:
            hero = villa_data['hero']
            code += f'''
  // {villa_data['name']}
  {villa_key.upper()}_HERO: {{
    mobile: "{hero['mobile']['url']}",
    tablet: "{hero['tablet']['url']}",
    desktop: "{hero['desktop']['url']}",
  }},
'''

    code += '''
};

export const VILLA_GALLERIES = {
'''

    for villa_key, villa_data in results.items():
        if villa_data['gallery']:
            code += f'\n  {villa_key.upper()}: [\n'
            for img in villa_data['gallery']:
                code += f'''    {{
      mobile: "{img['mobile']['url']}",
      tablet: "{img['tablet']['url']}",
      desktop: "{img['desktop']['url']}",
    }},
'''
            code += '  ],\n'

    code += '''
};
'''

    return code


def print_summary(results: Dict):
    """Print summary and generate files"""
    print('\n\n' + '='*60)
    print('PROCESSING COMPLETE')
    print('='*60)

    for villa_key, villa_data in results.items():
        print(f"\n{villa_data['name']}:")
        if villa_data['hero']:
            hero = villa_data['hero']
            original_mb = hero['original'] / (1024 * 1024)
            print(f"  Hero: {hero['name']} ({original_mb:.2f}MB original)")
            print(f"    Mobile:  {hero['mobile']['url']}")
            print(f"    Tablet:  {hero['tablet']['url']}")
            print(f"    Desktop: {hero['desktop']['url']}")

        print(f"  Gallery images: {len(villa_data['gallery'])}")
        for idx, img in enumerate(villa_data['gallery'], 1):
            print(f"    {idx}. {img['name']}")
            print(f"       Desktop: {img['desktop']['url']}")

    # Write generated code
    generated_code = generate_images_ts(results)
    output_path = Path(__file__).parent.parent / 'generated-villa-images.ts'
    with open(output_path, 'w') as f:
        f.write(generated_code)
    print(f'\n✓ Generated images config: {output_path}')

    # Also save JSON for reference
    json_path = Path(__file__).parent.parent / 'villa-images.json'
    with open(json_path, 'w') as f:
        json.dump(results, f, indent=2)
    print(f'✓ Saved results JSON: {json_path}')


if __name__ == '__main__':
    try:
        results = process_all_images()
        print_summary(results)
    except Exception as e:
        print(f'Fatal error: {e}', file=sys.stderr)
        sys.exit(1)

#!/usr/bin/env python3
"""
Helper script to extract Google Drive file IDs from folder
Requires: Google Drive API credentials (optional - can work with public folders)
"""

import os
import sys
import json
import re
from typing import List, Dict
from pathlib import Path

def extract_file_id_from_url(url: str) -> str:
    """Extract Google Drive file ID from various URL formats"""
    patterns = [
        r'drive\.google\.com/file/d/([a-zA-Z0-9-_]+)',
        r'drive\.google\.com/open\?id=([a-zA-Z0-9-_]+)',
        r'^([a-zA-Z0-9-_]{25,})$',  # Direct ID
    ]

    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)

    return None


def parse_file_info(name: str, file_id: str) -> Dict:
    """Parse file name to extract useful metadata"""
    # Extract IMG number and sequence if available
    img_match = re.search(r'IMG[_-]?(\d+)', name, re.IGNORECASE)
    img_num = img_match.group(1) if img_match else ''

    return {
        'id': file_id,
        'name': name.split('.')[0] if '.' in name else name,
        'img_num': int(img_num) if img_num else None,
    }


def print_config_template(files: List[Dict], villa_key: str, villa_name: str):
    """Print Python config template for the files"""
    print(f"""
# {villa_name}
{{
    '{villa_key}': {{
        'name': '{villa_name}',
        'folder': 'villas/{villa_key}',
        'files': [
""")

    # Sort by IMG number if available
    sorted_files = sorted(
        files,
        key=lambda x: x.get('img_num') or float('inf')
    )

    for file_info in sorted_files:
        print(f"            {{'id': '{file_info['id']}', 'name': '{file_info['name']}'}},")

    print("""        ],
        'hero_index': 0,  # Update to best image index
    },
}""")


def main():
    if len(sys.argv) < 2:
        print("Usage: python extract-drive-ids.py <file_with_ids_or_urls>")
        print("\nAccepted formats:")
        print("  - Google Drive URLs (one per line)")
        print("  - File IDs (one per line)")
        print("  - JSON file with file objects")
        print("\nExample file content:")
        print("  https://drive.google.com/file/d/1vLZNKRwfCiyrTquOLMDSIRCfUeLYa9OS/view")
        print("  https://drive.google.com/file/d/1KESHZtu5xy23pjG3Tuq6mTqGJtr6oTfl/view")
        print("  IMG_7838")
        sys.exit(1)

    input_file = sys.argv[1]

    if not os.path.exists(input_file):
        print(f"Error: File not found: {input_file}")
        sys.exit(1)

    ashoka_files = []
    bougainville_files = []

    with open(input_file, 'r') as f:
        content = f.read()

    # Try parsing as JSON first
    try:
        data = json.loads(content)
        if isinstance(data, dict):
            files = data.get('files', data.get('items', []))
            for item in files:
                file_id = item.get('id') or item.get('fileId')
                name = item.get('name') or item.get('title')
                if file_id and name:
                    file_info = parse_file_info(name, file_id)
                    # Guess which villa based on metadata
                    if 'bougainville' in name.lower():
                        bougainville_files.append(file_info)
                    else:
                        ashoka_files.append(file_info)
    except json.JSONDecodeError:
        # Parse as line-separated URLs/IDs
        for line in content.strip().split('\n'):
            line = line.strip()
            if not line or line.startswith('#'):
                continue

            file_id = extract_file_id_from_url(line)
            if not file_id:
                print(f"Warning: Could not extract ID from: {line}")
                continue

            # Try to extract filename if provided
            name_match = re.search(r'IMG[_-]?\d+', line, re.IGNORECASE)
            name = name_match.group(0) if name_match else f"image_{len(ashoka_files) + len(bougainville_files)}"

            file_info = parse_file_info(name, file_id)

            # Simple heuristic: first ~20 are Ashoka, rest are Bougainville
            if len(ashoka_files) < 20:
                ashoka_files.append(file_info)
            else:
                bougainville_files.append(file_info)

    # Print results
    print("\n" + "="*70)
    print("EXTRACTED FILE INFORMATION")
    print("="*70)

    print(f"\nAshoka Suite: {len(ashoka_files)} files")
    print(f"Bougainville Suite: {len(bougainville_files)} files")

    print("\n" + "-"*70)
    print("Python Configuration Template")
    print("-"*70)

    if ashoka_files:
        print_config_template(ashoka_files, 'ashoka', 'Villa Ashoka')

    if bougainville_files:
        print_config_template(bougainville_files, 'bougainville', 'Villa Bougainville')

    # Save to file
    output_file = Path(input_file).parent / 'villa-config.py'
    with open(output_file, 'w') as f:
        f.write("VILLAS = {\n")

        if ashoka_files:
            f.write("""    'ashoka': {
        'name': 'Villa Ashoka',
        'folder': 'villas/ashoka',
        'files': [
""")
            for file_info in sorted(ashoka_files, key=lambda x: x.get('img_num') or float('inf')):
                f.write(f"            {{'id': '{file_info['id']}', 'name': '{file_info['name']}'}},\n")
            f.write("""        ],
        'hero_index': 0,
    },
""")

        if bougainville_files:
            f.write("""    'bougainville': {
        'name': 'Villa Bougainville',
        'folder': 'villas/bougainville',
        'files': [
""")
            for file_info in sorted(bougainville_files, key=lambda x: x.get('img_num') or float('inf')):
                f.write(f"            {{'id': '{file_info['id']}', 'name': '{file_info['name']}'}},\n")
            f.write("""        ],
        'hero_index': 0,
    },
}
""")

    print(f"\n✓ Configuration saved to: {output_file}")
    print("\nNext steps:")
    print("1. Edit villa-config.py to verify file IDs and set correct hero_index")
    print("2. Copy the configuration to scripts/process_images.py")
    print("3. Run: python scripts/process_images.py")


if __name__ == '__main__':
    main()

"""
resize_images.py

Scans `static_site/assets/` for raster images (hero.* and product-*.jpg/png)
and generates small/medium/large JPEG and WebP versions into the same folder.

Usage:
    python resize_images.py

Notes:
- Requires Pillow (pip install Pillow). The repo tooling in this workspace can install it.
- If no raster source exists for an item, it will be skipped (the SVG fallback remains).
"""
from PIL import Image
from pathlib import Path
import sys

ASSETS_DIR = Path(__file__).resolve().parent.parent / 'assets'
ASSETS_DIR = ASSETS_DIR

SIZES = {
    'small': 480,
    'medium': 960,
    'large': 1600,
}

QUALITY = 85

def find_sources():
    patterns = [
        'hero.jpg', 'hero.png',
        'product-falconx.jpg', 'product-falconx.png',
        'product-aeroscout.jpg', 'product-aeroscout.png',
        'product-vantage.jpg', 'product-vantage.png',
    ]
    found = {}
    for p in patterns:
        path = ASSETS_DIR / p
        key = p.rsplit('.', 1)[0]
        if path.exists():
            found[key] = path
    return found


def ensure_output(name_stem, size_key, ext):
    return ASSETS_DIR / f"{name_stem}-{size_key}.{ext}"


def resize_image(src_path: Path, name_stem: str):
    try:
        img = Image.open(src_path)
    except Exception as e:
        print(f"Skipping {src_path.name}: cannot open ({e})")
        return

    orig_w, orig_h = img.size
    for key, width in SIZES.items():
        if orig_w <= width:
            # If original is smaller or equal than target width, copy (but still save WebP)
            new_img = img.copy()
        else:
            ratio = width / float(orig_w)
            new_size = (int(orig_w * ratio), int(orig_h * ratio))
            new_img = img.resize(new_size, Image.LANCZOS)

        # Save JPEG
        out_jpg = ensure_output(name_stem, key, 'jpg')
        try:
            new_img.convert('RGB').save(out_jpg, 'JPEG', quality=QUALITY, optimize=True)
            print(f"Wrote {out_jpg.name}")
        except Exception as e:
            print(f"Failed to write {out_jpg}: {e}")

        # Save WebP
        out_webp = ensure_output(name_stem, key, 'webp')
        try:
            new_img.save(out_webp, 'WEBP', quality=QUALITY)
            print(f"Wrote {out_webp.name}")
        except Exception as e:
            print(f"Failed to write {out_webp}: {e}")


def main():
    if not ASSETS_DIR.exists():
        print(f"Assets directory not found: {ASSETS_DIR}")
        sys.exit(1)

    sources = find_sources()
    if not sources:
        print("No raster source images found. Place hero.jpg/png or product-*.jpg/png into assets/ and re-run.")
        return

    for name_stem, path in sources.items():
        print(f"Processing {path.name} -> {name_stem} (sizes: {', '.join(SIZES.keys())})")
        resize_image(path, name_stem)


if __name__ == '__main__':
    main()

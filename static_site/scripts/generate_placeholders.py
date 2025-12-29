"""
generate_placeholders.py

Creates simple raster placeholder images (JPEG) for hero and product thumbnails
if the user hasn't provided raster images. These placeholders allow the resize
script to create responsive variants automatically.

Usage:
    python generate_placeholders.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ASSETS = Path(__file__).resolve().parent.parent / 'assets'
ASSETS.mkdir(parents=True, exist_ok=True)

def make_gradient(size, color1, color2):
    w,h = size
    base = Image.new('RGB', size, color1)
    top = Image.new('RGB', size, color2)
    mask = Image.new('L', size)
    md = ImageDraw.Draw(mask)
    for i in range(h):
        md.line((0,i,w,i), fill=int(255 * (i / h)))
    base.paste(top, (0,0), mask)
    return base

def draw_label(img, text, size=48):
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype('arial.ttf', size)
    except Exception:
        font = ImageFont.load_default()

    w,h = img.size
    tw,th = draw.textsize(text, font=font)
    x = (w - tw) // 2
    y = (h - th) // 2
    # subtle text shadow
    draw.text((x+2,y+2), text, font=font, fill=(10,20,30))
    draw.text((x,y), text, font=font, fill=(160,220,240))
    return img

def save_jpg(path:Path, img:Image.Image):
    img.save(path, 'JPEG', quality=90, optimize=True)

def create_hero():
    path = ASSETS / 'hero.jpg'
    if path.exists():
        print(f"hero.jpg already exists, skipping placeholder generation")
        return
    img = make_gradient((1600,900), (6,18,28), (2,58,72))
    img = draw_label(img, 'FlyTech — Hero Placeholder', size=64)
    save_jpg(path, img)
    print(f"Wrote {path.name}")

def create_product(name, label):
    path = ASSETS / f'{name}.jpg'
    if path.exists():
        print(f"{path.name} already exists, skipping")
        return
    img = make_gradient((800,500), (4,14,20), (8,40,48))
    img = draw_label(img, label, size=40)
    save_jpg(path, img)
    print(f"Wrote {path.name}")

def main():
    create_hero()
    create_product('product-falconx', 'Falcon X')
    create_product('product-aeroscout', 'AeroScout')
    create_product('product-vantage', 'Vantage Pro')

if __name__ == '__main__':
    main()

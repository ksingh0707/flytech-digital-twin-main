# FlyTech — Static Site (static_site)

This folder contains a static, responsive marketing site built with plain HTML and CSS (no JavaScript).

Files
- `index.html` — Main page with sections: Hero, About, Products, Features, Testimonials, Contact, Footer.
- `styles.css` — Styles (variables, layout, responsive rules).
- `assets/` — SVG placeholders for the hero and product thumbnails.

Quick preview
1. Open `index.html` in your browser.
2. Or serve it locally with Python (PowerShell example):

```powershell
python -m http.server --directory .\static_site 8000
# then open http://localhost:8000
```

Notes
- The contact form is static (no backend). Remove `onsubmit="return false;"` to enable normal form submission and set an `action` to a server endpoint.
- Replace the placeholder SVGs in `assets/` with production images if desired.

Adding your own photos (preferred)

Drop your images into `static_site/assets/` using one of the following filenames to have them automatically used by the page. The site prefers JPG/PNG files and falls back to the bundled SVG placeholders if no raster image is present.

- Hero (large banner): `hero.jpg` or `hero.png` — recommended size: 1600×900 (or wider; keep aspect ratio 16:9)
- Product thumbnails:
	- `product-falconx.jpg` / `.png`
	- `product-aeroscout.jpg` / `.png`
	- `product-vantage.jpg` / `.png`

Image tips
- Use progressive JPEGs or optimized PNGs for faster loading.
- Keep files under ~500KB for good performance; use WebP if you want extra savings (you can add WebP sources to the <picture> elements manually).

Automatic resizing script

This project includes a small Python script to generate small/medium/large JPEG and WebP versions of your images. It looks for raster images in `static_site/assets/` (see filenames above) and writes files like:

- `hero-small.jpg`, `hero-medium.jpg`, `hero-large.jpg` and corresponding `.webp` files
- `product-falconx-small.jpg`, `product-falconx-medium.jpg`, `product-falconx-large.jpg` (+ `.webp`)

Usage (PowerShell):

```powershell
# 1) Create a virtual environment (optional but recommended)
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# 2) Install dependency
pip install Pillow

# 3) Run the resize script from the repository root
python .\static_site\scripts\resize_images.py
```

After the script runs, refresh the site. The <picture> tags in `index.html` will use the generated WebP/JPEG sizes automatically.



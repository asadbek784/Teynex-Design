# TEYNEX Design Library — Lossless Vercel API

This package contains the complete extracted contents of the 5 original GitHub ZIPs.

## Integrity
- Original files: **6335**
- Unique SHA-256 files: **5888**
- Exact duplicate copies: **447**
- Original archives are preserved byte-for-byte in `original-archives/`.
- Every extracted file has a SHA-256 hash in `data/design-index.json` and `data/design-index.csv`.

## Vercel
The `library/` folder is static and is NOT deduplicated or deleted. The API searches the compact metadata index and returns a `content_url` for the exact file.

Deploy the project root to Vercel. Set:
- `TEYNEX_API_KEY` (optional but recommended)

Endpoints:
- `/api/health`
- `/api/stats`
- `/api/search?q=ai chat`
- `/api/designs?page=1&limit=50`
- `/api/designs?repo=ui-main&tag=dashboard`
- `/api/design?id=D00001`

## Important
Do not send an entire source file through an API response if it can exceed Vercel's response limit. The API returns a static `content_url`; Teynex can fetch the exact file directly.

# Chico Morais — portfolio site (static backup, 2026-11-16)

Static snapshot of https://portfolio.chicomorais.com. Serve this folder
(`npx serve`, VS Code Live Server, or any static host / GitHub Pages) —
do not just double-click index.html: browsers block the site scripts on file://.

## Publish on GitHub Pages (keep your domain!)
1. Back up your repo's `CNAME` file first (it holds your personal domain).
2. Unzip this package OVER your repo checkout — merge, do NOT wipe the repo
   folder and do NOT delete any existing files (especially `CNAME`).
3. `git add -A && git commit -m "update" && git push`.
4. After pushing, check the `CNAME` file is still there with your domain in it.
   Pages settings stay as they are (branch `main`, folder `/ (root)`).

## Contents
- `index.html` — the whole site (hash routes, no build step, no rewrites needed).
- `src/` — all images, CV PDF, 3D scan, fonts, JS libs, AI models.
- `tools/` — SEO mirror generator (`node tools/gen-mirrors.mjs --base <url>/`).
  NOTE: that script rewrites `CNAME` from the --base domain — only run it with
  your real domain, and back up `CNAME` first.

## Notes
- 100% self-hosted except video streams: Vimeo/YouTube iframes need the internet.
- Third-party CDNs vendored into `src/vendor/`: Google Fonts (woff2),
  model-viewer 3.5.0, MediaPipe tasks-vision 1.2.3 + wasm + pose/segmentation models (~23MB).
- 64 unreferenced images (~12.5MB) are still in `src/`; safe to delete, listed in the site spec section 10.

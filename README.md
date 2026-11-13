# Chico Morais — portfolio site

Static site. No build step, no dependencies. Just host the files.

## Host free on GitHub Pages

1. Create a new public repo on GitHub (e.g. `chicomorais-site`).
2. In a terminal inside this folder:

```sh
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chicomorais-site.git
git push -u origin main
```

3. On GitHub: repo **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main** / **/ (root)** → Save.
4. Your site is live at `https://YOUR-USERNAME.github.io/chicomorais-site/` within a minute or two.

Optional: add a custom domain under Settings → Pages → Custom domain (e.g. `www.chicomorais.com`), then add the `CNAME` record at your DNS provider.

## What’s inside

- `index.html` — the whole site (content, styles, app logic)
- `src/work/` — all project images (web-sized, faces protected)
- `src/docs/Chico-Morais-CV.pdf` — downloadable CV
- `src/*.md` — content spec and build notes (not linked from the site)

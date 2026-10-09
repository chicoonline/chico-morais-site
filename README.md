# Chico Morais — portfolio (static backup, 2 parts)

Unzip BOTH parts into the same folder. Static export, no build step, no dependencies beyond Google Fonts.

## Host on GitHub Pages

1. Push the combined contents to a repo root (`index.html` at root, `src/` and `work/` alongside it).
2. `CNAME` (portfolio.chicomorais.com) is included for the custom domain.
3. Repo Settings → Pages → Deploy from branch → `main`, `/ (root)`.

Routes are hash-based (`#/work`, `#/photography/<series>` …), so no redirects/rewrites are needed. `work/*` mirrors + `sitemap.xml` are included for SEO/social shares.

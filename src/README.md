# Chico Morais — Portfolio

Personal portfolio site for **Francisco "Chico" Morais Tavares** — designer, photographer and
creative technologist (Berlin; Brazilian / Portuguese / Spanish). Built as a single-page app with
hash routing, no build step and no runtime dependencies beyond Google Fonts.

Content follows **`chico-morais-portfolio-editorial-spec.md`** (in this folder since Oct 2026; §10
holds the builder's implementation log: what was built vs the spec, Chico's verbatim captions,
and draft captions awaiting approval) — it is the only
source for site text. Do not add, paraphrase or invent copy.

## Bilingual system (EN/PT)

Every text block exists in EN and PT. Content fields are `{en, pt}` objects (plain strings stay
language-neutral). `LANG` (`localStorage["cm-lang"]`, default `en`), `L(en,pt)` / `LL(v)` helpers,
`setLang()` + `paintLang()`; toggle button `#langBtn` in the header. `paintLang()` also rewrites
nav labels, mobile nav, footer nav links, footer line and copyright. Route titles go through `L()`.
`projTitle(p)` honours `titlePt`; `projRoles(p)` splits the `roles` line into tags.

## Files

| File | Role |
| --- | --- |
| `index.html` | The whole site: markup shell, CSS and a `<script type="module">` holding **all content data**, the render/router code and a lightweight 2D living-brain backdrop. |
| `src/README.md` | This file. |
| `main.pjs` | Only `$meta` (spec §2 default meta description, minimal header). |

There is intentionally no `src/*.js` — everything ships inside `index.html` so the unsaved editor
preview always works (no service-worker dependency for relative `src/` fetches).

`src/PROJECT-INDEX.md` and `src/CV-Chico-29.08.2026.pdf` are **reference material uploaded by the user**, not
part of the site and not linked from it. Everything under `src/` is publicly served from the
generator's origin, so treat both as public documents — remove them if that is not wanted.

`src/website-inspo-some-AI-generated-and-also-my-pic/` is the user's mood board for the ocean restyle
(AI mock-ups plus a photograph of them underwater). It is public and nothing in the site references
it, so it can be deleted whenever the user is done with it.

## Where to edit content

At the top of the `<script type="module">` in `index.html`, in this order:

- `SITE` — brand, location/eyebrow, hero line, intro (H2), email, links (the two Instagrams),
  and `practice` (the four H3 columns).
- `PROFILE` — about page: `lede`, `paras` (A1–A3), `experience`, `education`, `languages`, `also`.
  The About hero is the colour CV portrait (`src/work/about-chico.jpg`, from the user's
  `src/Chicos-photos/` original; the spec defines no About imagery — this was the user's call).
  Keep new images in existing served folders: a file added under a brand-new `src/` subfolder,
  or a `src/` file touched from outside the session, can 404 in the unsaved preview because the
  service worker's file map goes stale for that path — re-saving under a fresh filename fixes it.

## SEO mirrors (GitHub repo only, Oct 2026)

Hash routes give crawlers one page, so per-route share pages are generated: `tools/gen-mirrors.mjs`
(node stdlib only) reads titles/descriptions/covers from the `PROJECTS` + `SHOTS` constants in the
repo-root `index.html` (evaluated in an empty `vm` sandbox — no page code runs, no regex scraping)
plus `tools/seo-overrides.json` (ships `{}`, merged over constants for later copy tweaks), and writes
`work/<slug>/index.html` ×7 (real title/meta/canonical/og + visible fallback with `../../` cover path,
JS `location.replace` + noscript link, no meta refresh), `sitemap.xml`, `robots.txt` and `CNAME`.
og:image per project pinned in the overrides table (Oct 2026: pele-bruta → exhibition `hero-142.jpg`,
tapete → `mat-assembled.jpg`, folhas → `folhas-preview.jpg` (Chico's resized slide as JPG),
maite → `DSC_0013.jpg` (the cutout's original, web-sized), interfaces → `og-cover.jpg` (widget screenshot
as JPG); padronagens + graphic-work keep the site thumbnail per Chico).
Regen (repo root): `node tools/gen-mirrors.mjs --base https://portfolio.chicomorais.com/`.
Durable copies live in `src/tools/` (the generator itself never loads them).

## Static export (GitHub backup)

The site is fully portable: the markup shell has no perchance templating, and the single
module script uses no `root.*`, no imports, no `generatorName`. To rebuild
`scratch/chico-morais-site-backup.zip`: split `index.html` into markup / `<style>` /
`<script type="module">`, wrap as a standalone doc with `<meta charset/viewport>`, title and
description from `main.pjs`, copy everything under `src/work/` plus the other `src/`
asset folders referenced by the page (`src/docs/Chico-Morais-CV.pdf`, the downloadable CV;
all project images now live under `src/work/`, e.g. `src/work/tactile-room/`),
add `.nojekyll` + a `README.md`, and zip (built + zipped in `execute_js` with `@zip.js/zip.js`
from esm.sh). Push the zip's contents to a repo root for GitHub Pages; routes are hash-based
so no rewrites are needed. For later changes no full re-zip is needed: hand Chico the new
`index.html` plus zips of only the changed `src/` folders (paths inside the zip mirror the
repo, e.g. `src/work/photography/<series>/`, `src/work/archive-readiness/`), and he replaces those files in the repo. He enables
Pages once (repo Settings → Pages → Deploy from branch, `main`, `/ (root)`); the URL appears under
the sidebar's Deployments once the build finishes.

## Vendored third-party code (Nov 2026, ships in `src/vendor/`)

No CDN runtime deps remain: Google Fonts (Fraunces variable + Inter + IBM Plex Mono as woff2
+ `fonts.css`), model-viewer 3.5.0 (`model-viewer.min.js`), MediaPipe tasks-vision 1.2.3
(`tasks-vision.mjs` jsdelivr +esm bundle) with its wasm (`mediapipe-wasm/`) and the two model
files (`mediapipe-models/`, ~23MB). Page references are relative (`./src/vendor/...` for dynamic
`import()`, which needs the `./` — bare `src/...` specifiers fail; plain `src/...` for fetch-style
URLs). Only the Vimeo/YouTube iframes still need the internet. Added ~25MB to the quota.
  com Brinquedo Emprestado · Folhas · Maitê · Physical & Logical Interfaces · Padronagens ·
  Graphic Work. Each: `slug, title, [titlePt], subtitle{en,pt}, oneliner{en,pt} (card + detail
  lede), year, roles{en,pt}, context{en,pt}, filters[], sections[], credits{en,pt},
  videos[{id,title,note{en,pt},aspect}], [motif, palette]`.
  Section blocks: `{h{en,pt}|null, p[{en,pt}]}` plus at most one special each — `quote{en,pt}`
  (pull quote), `quotes[{pt, en_t, by{en,pt}}]` (PB13 reception: PT original always, EN
  translation EN-only), `cards[{en,pt}]` (numbered, e.g. Folhas F5), `grid[{t,line,link?}]`
  (PB5 series, P3 origins), `gallery[{en,pt}] + galleryLink` (caption grids), `youtube{id,cap}`
  (nocookie embed). `h: null` renders paragraphs without a heading (spec blocks with no
  heading — never invent one).
- `PHOTOGRAPHY` — series list in Chico's order (Oct 2026: Home Is · Devir, Gabi Monteiro · Transition · Product · Dao Tea · The Fire Boat Festival · Emotional Nakedness · Puro Tato · Biking and South East Asia · Spring in Japan · The Florist · Shibari Night · Antônia 15 — drives the index grid, the home-page photo band's six features and prev/next links; genre tags translate via `CAT_PT` in PT mode).
  `RECOGNITION` (10 items, spec §6.1), `FILMS` (8 films + RöyStore context line, spec §6.3).
- `FILTERS` — spec §4 chips (`All · Human-centred design · Exhibitions · UX and interaction ·
  Creative technology · Graphic and pattern` + PT); `match[]` holds filter ids, cards carry
  `data-disc` from `p.filters`.
- `SHOTS` — placeholder imagery keyed by project slug: `{cover{c{en,pt},k}, items[{s,c{en,pt},k,w?}]}`.
  Captions are spec captions (bilingual). Add `u:"<url>"` to any shot for a real image.
- The Florist is a photography page (`viewFlorist`, `#/photography/the-florist`, Vimeo 66032702,
  Blurb book link, Francis Rushby quote EN-original/PT-translation) showing all 17 gallery
  photographs from `src/work/photography/the-florist/` (compressed from the user's `src/The-Florist/`
  finals, hero `dsc-9213.jpg` first per spec §6.2); the PB5 grid links to it. Photography series
  live under `src/work/photography/<series>/` as web-sized max-1600px JPEGs (e.g. `biking-in-sea/`,
  8 photos, covers + gallery all local — folder lowercase, uploader's filenames kept).
  IMAGE PIPELINE (binding): Chico uploads full-size originals to `src/`; the builder resizes to max
  1600px long edge, JPEG q82, in `execute_js` (OffscreenCanvas + `convertToBlob`), overwrites in
  place, and never ships full-size files. Future batches go to `src/work/photography/<series>/`
  the same way. Old work slugs redirect via `OLD_SLUGS`
  (`the-florist → photography/the-florist`, `coursework → interfaces`, rest → `#/work`).

## Routing


Hash-based, so links are shareable and work on the published page:

- `#/` home · `#/work` index · `#/work/<slug>` case study (7 spec slugs) ·
  `#/photography` (lede + recognition + series + films) · `#/photography/the-florist`
  (spec §6.2 page) · `#/photography/<slug>` series gallery · `#/about` · `#/contact`
  Old work slugs redirect (see `OLD_SLUGS`).

The perchance editor loads the preview iframe with a `#edit` fragment; the router strips a leading
`edit` segment so the preview shows the home page instead of a 404.

## Imagery

Every image slot outside the Photography section is a **deterministic generative SVG** —
`coverSVG(seed, palette, motif, label, plain)`, seeded by project slug and caption, so the same slot
always produces the same picture. Motifs: `arcs orbit strata grid bloom signal frame` plus
`dusk boards dots sketch`. `plain` skips the per-image `feTurbulence` grain: the deck sets it on every
shot (20+ filtered SVGs on one page is expensive) and only the home-page feature covers pay for it.

The Photography section is the only place with real photographs; everywhere else the generated art
stands in for a process image, and the caption says which image belongs there (e.g. "CCIH letter —
official cleaning protocol"). This is deliberate: the site is structured so the user's own process
photographs can be dropped in without touching layout — add `u: "<url>"` to a `SHOTS` entry.

Home page proportions are intentional. **Selected work** is four large `.feat` spreads (image ≈62% of
the row, 16:10, cover taken from `SHOTS[slug].cover`). The **Photography band** (`.photoband`) is
full-bleed — it sits *outside* `.container`, so it spans the whole page width — and stacks four
`.prow` rows: `one` (single image, 16:9, `max-height: 90vh`), `two` (a pair, 3:2 each), `two`, then
`one`. Each `.pband` is an `<a>` with the photograph as `object-fit: cover` and an overlaid
`.o-cap` caption (serif title + mono decade meta) on a bottom gradient. Under 720px the pairs
collapse to single full-width photos. Photographs are the user's professional work and are meant to
dominate: **the user explicitly asked for the photography images to be BIG** — never shrink them into
a thumbnail strip.

The **Photography section uses real photographs** — 206 of them across 13 series. They were scraped
from the user's existing Adobe Portfolio site (`chicomorais.com`); all 13 series (206 photos)
now ship locally under `src/work/photography/` as Chico supplied originals, plus the Shibari hands detail crop used for its card + hero. MIGRATION (Oct 2026, complete):
now ship locally under `src/work/photography/` as Chico supplied originals. MIGRATION (Oct 2026, complete):
series move to local hosting under `src/work/photography/<series>/` as Chico supplies originals —
done: `the-florist/` (17), `biking-in-sea/` (8, journey order HKG→LAO→THL, cover `LAO_6097-Edit.jpg`),
`dao-tea/` (all 18 supplied files: 16 matched to gallery slots by product alt text plus `DSC_9924`
+ `DSC_0114` inserted after `dao-037` per Chico; per Chico the hero and card
cover is `dao-190-Edit.jpg` (slot 0, `dao-030.jpg` moves to slot 11, each photo
keeping its own alt) — `src/Cha-Dao/` upload folder deleted after migration, full-size
originals live only on Chico's disk),
`devir-gabi-monteiro/` (all 14 supplied files matched 1:1 to gallery slots by visual
match — portraits `383↔arms-crossed` / `392↔hands-front` disambiguated at full size,
gallery order otherwise kept, cover `gabidevir-506-Edit.jpg` — `src/Devir-Gabi-Monteiro/`
upload folder deleted after migration, full-size originals live only on Chico's disk),
`emotional-nakedness/` (25 of 26 gallery slots matched 1:1 by visual match, gallery order
kept, cover `totone.jpg` — the wide valley-river frame was not supplied and its slot
dropped, `LAO_6921-Edit.jpg` verified pixel-identical to its slot — `src/Emotional-Nakedness/`
upload folder deleted after migration, full-size originals live only on Chico's disk),
`antonia-15/` (25 of 25 gallery slots auto-matched 1:1 by perceptual hash with wide
margins, gallery order otherwise kept; `DSC_5534.jpg` (couple dancing) is the cover per Chico — replaced `DSC_5510.jpg` — and also leads the gallery at slot 0, so it is the series-page hero too — plus 2 supplied extras with no
gallery slot (`DSC_4715` cake close-up, `DSC_4974` fairy-lights curtain) appended at
the end, 27 images total — `src/Festa-Antonia-15/` upload folder deleted after
migration, full-size originals live only on Chico's disk),
`home-is/` (13 of 13 gallery slots auto-matched 1:1 by perceptual hash with wide
margins, gallery order kept, cover is the poster (slot 0, kept as `.jpg`) — plus 1
supplied extra with no slot (`DSC_0683`, outdoor dance, green sari) appended at the
end, 14 images total — `src/Home-Is/` upload folder (incl. a stray `DS_Store`)
deleted after migration, full-size originals live only on Chico's disk),
`spring-in-japan/` (31 of 31 gallery slots auto-matched 1:1 by perceptual hash with
wide margins, gallery order kept — the odd-ratio slots confirmed exact
(`2325` 1.6162, `2840` 1.5733, `2561` 1.4248, `2152` 0.7656); per Chico the card
cover is `japan-896-Edit.jpg` (gallery slot 11, gallery order otherwise kept) —
`src/Spring-in-Japan/` upload folder deleted after migration, full-size originals
live only on Chico's disk),
`product/` (8 of 8 gallery slots auto-matched 1:1 by perceptual hash with very wide
margins (42+), gallery order kept, descriptive alt texts preserved — the 3
`bonecos-casa` toy-arts, the rings sets, the yellow-shirt/bowtie (`1.3356`) and the
2 `PHL` coffee/tea sets all confirmed; per Chico the hero and card cover is
`bonecos-casa-017-Edit.jpg` (slot 0, `DSC_3930-Edit-2.jpg` moves to slot 1,
each photo keeping its own alt) — `src/Still/` upload
folder (incl. a stray `DS_Store`) deleted after migration, full-size originals live
only on Chico's disk),
`shibari-night/` (9 of 9 gallery slots auto-matched 1:1 by perceptual hash with
wide margins (36+), gallery order kept — 8 landscapes (`1.4981`) plus the portrait
`DSC_3728-Edit.jpg` (`0.6675`) at slot 4, no alt texts on this series; per Chico
the hero and card cover is a close-up crop of the bottom of `DSC_3728-Edit.jpg`
around the hands (local `DSC_3728-hands.jpg`, from the full-size original — the
series-page hero uses it via a one-line `cropHero` override in `viewPhotoSeries`,
so it is not repeated in the 9-item gallery) —
`src/Shibari-Night/` upload folder deleted after migration, full-size originals
live only on Chico's disk),
`transition/` (9 of 9 gallery slots auto-matched 1:1 by perceptual hash with
wide margins (18+), gallery order kept except `newzealand-1964.jpg` moved to
slot 0 as the series hero per Chico (with the card cover; `china-103-Edit.jpg`
moves to slot 8 — each photo keeps its own alt) — the odd-ratio slot
(`saharasesert.jpg`, 1.4298) confirmed exact — `src/Transition/` upload folder
deleted after migration, full-size originals live only on Chico's disk),
`fire-boat-festival/` (14 of 14 gallery slots auto-matched 1:1 by perceptual
hash with wide margins (21+), gallery order kept except `LAO_5655-Edit.jpg`
moved to slot 0 — the pano
(`LAO_5701-Pano-Edit.jpg`, 1.5936) and portrait (`LAO_5719-Edit.jpg`, 0.6625)
slots confirmed exact — it is the series hero
and card cover per Chico (`LAO_5492-HDR-Edit.jpg` moves to slot 7, each photo
keeping its own alt) — `src/The-Fire-Boat-Festival/` upload folder deleted after migration, full-size
originals live only on Chico's disk),
`puro-tato/` (12 of 12 gallery slots auto-matched 1:1 by perceptual hash with
wide margins (22+), gallery order kept — the portrait (`DSC_2321.jpg`, 0.6675)
slot confirmed exact; `DSC_2273.jpg` moved to slot 0 as the series hero and
card cover per Chico (`DSC_1873.jpg` moves to slot 8, each photo keeping its
own alt) — `src/Puro-Tato/` upload folder deleted after
migration, full-size originals live only on Chico's disk).
Nothing is hotlinked any more.
As each batch lands: resize per IMAGE PIPELINE, point `GALLERIES[slug].images[].u` + the series card
cover at the local files (keep `r` in sync with real aspect ratios), verify every image decodes in
the preview, hand Chico the updated `index.html` + folder zip. PAIRS: consecutive gallery entries
sharing a `"pair":"<id>"` render side-by-side in one scroll-mode row (`.pf-pair`, equal heights,
widths proportional to `r`, thumbnails CSS-cropped with `object-fit: cover`, clicks open the full
files; grid mode unwraps them via `display: contents`) — in use for dao-tea `dao-037` + `DSC_9924`.
The pair box follows the standard landscape-row width rule so its edges match every other row in all
viewports. `thumbAr` on an entry (dao-tea `dao-080`, 1.498) crops only that thumbnail into a
standard row box, same rule; clicks still open the full file. NOTE: thirteen Padronagens images added
later (`suit-hero`, `pattern-hongkong-harbour/tanks`, `pattern-japan-wreath`, the three `process-*`,
the two `pattern-sunset*`, and the two `applications-*` (the single-garment `application-arara*`
files were later removed from the page at the user's request — they duplicated garments already
shown in `applications-1.jpg` — but are kept on disk). `process-ararahead-big` is a `.png`: the
source had no real transparency (opaque white), so the background was keyed out by edge-connected
white removal and the file re-saved with alpha — the unkeyed `.jpg` is superseded but kept on disk.
Same treatment for `applications-1` (now a `.png` cutout with `clear: true`; gallery figures in
`galFig` now honor the `clear` flag too). Fully local since Oct 2026 (the old
`user.uploads.dev` preview fallback `SRC_FALLBACK` was removed; the `$meta.image`
hotlink in `main.pjs` was removed too, so listings/socials use the auto-screenshot).
Canonical copies remain `src/work/padronagens/`. The nine
Digital-Approaches-derived files were resized to max 1600px JPEGs; the folder's originals
(`natual-patterns/`, `research-book/`, module PDFs, `research.txt`) are fully superseded except the
research-book PDF, which was never referenced by the site. `mockups-swim-shirt.jpg` is unwired
(`applications-1.jpg` is the same swim+shirt composition) but kept on disk. Two sets live in the data:
`PHOTOGRAPHY.series[].img` (13 card covers) and `GALLERIES[slug].images` (the full series galleries).
Source pages are not in the repo; the raw URLs are gone once this session ends, so if a series needs
re-scraping, pull the images from the corresponding `chicomorais.com/<series>` page (the
`_rw_600/_rw_1200/_rw_1920` variants on `cdn.myportfolio.com` all share a UUID; the signed `?h=` query
is required or the CDN returns a 35-byte error).

Series pages open in **Gallery** mode and have two layouts, switched from the section head
(`#galScroll` / `#galGrid`, wired in `wirePhotoGallery`, remembered in `localStorage["cm-galmode"]`):

- **Gallery** (`.pgal.scroll`, the default) — the photographs are the page: a single centred column of
  large images, each shown whole at its own aspect ratio and capped so it always fits the screen
  (`max-width: min(100%, calc((100vh - var(--head-h) - 72px) * var(--ar)))`, with `--ar` written per
  item from `GALLERIES[].images[].r`). This is what the user asked for: a photographic project should
  exhibit the pictures large and be *scrolled*, not opened one at a time out of a grid.
- **Grid** — the aligned square grid: `.pgal.grid` (a plain `.pgal` without `.scroll`) is
  `grid-template-columns: repeat(3, 1fr)` (2 columns at ≤720px) and every `.pf-in` is
  `aspect-ratio: 1 / 1` with `object-fit: cover`. The point is alignment — with a
  justified/variable-height layout the portraits and the landscapes land in rows of different heights
  and the grid reads as ragged (the user asked for the verticals and horizontals to line up). Do
  **not** go back to a flex `flex-grow: var(--r)` justified layout.

`GALLERIES[].images[].r` (width ÷ height) drives the Gallery layout, so keep it accurate.

Clicking a `.pf-in` opens the lightbox (`#lightbox`, `openLightbox/showLightbox/closeLightbox` in
`wirePhotoGallery`), which supports buttons, arrow keys, Escape and swipe, and shows the photograph's
`alt` as a caption. Project-page `.shot` figures with real photos open the same lightbox via
`wireShots` (SVG placeholders are skipped). `.lb` sets its own `display: grid`, so it carries an explicit
`.lb[hidden] { display: none; }` guard — keep that if you restyle it.

Two real videos ARE embedded (Vimeo): *The Florist* (66032702) and *Expo PELE BRUTA* (96548872),
both on `vimeo.com/chicom`. They appear as a "Film" section on those project pages, and *The Florist*
also embeds at the top of its photography series page.

Images are lazy-loaded by the site's own code, not `loading="lazy"`: cards write `data-src` and
`hydrateImages()` swaps in `src` when the element nears the viewport (driven from `setupReveals`'
scroll handler, the IntersectionObserver callback, and a 2.6 s failsafe). Native lazy loading proved
unreliable in the preview iframe, so do not reintroduce `loading="lazy"` here. Gallery thumbnails are
800–1200px wide; the first image of each series is the `_rw_1920` "hero".

## Case-study deck

A project page (`#/work/<slug>`) is built as a presentation, not an article:

- the title block is the title slide (`detail-head`), followed by a full-bleed cover;
- `.deck-body` holds the slides: for each `sections[]` entry, `deckSection()` emits the paragraphs as
  numbered text blocks (`01 / 06`) interleaved with that section's `SHOTS`, then the callouts and the
  Vimeo film;
- shots are rendered by `shotGroupHTML` as `shot-full` (full-bleed, outside `.container`), `shot-wide`
  (in the text column) or `.shot-pair`, each with a `deck-cap` caption that carries a running figure
  number, the kind chip and the caption;
- a shot item can carry `ar: "3/4"` to override its frame ratio (default comes from `SHOT_AR[shot.k]`);
  `u` can be `{en, pt}` for language-dependent images (`shotMediaHTML` picks by `LANG` — used by the
  Pele Bruta schedule chart);
- `shotsFor(slug, si)` matches section INDEX, so inserting a section shifts every later `s:` —
  renumber the later shot groups when adding one (done Oct 2026 for the two new Pele Bruta
  sections: precursor deck PB2c → s:2, parallel strand PB6b text-only, everything after shifted);
- Pele Bruta photos live in `src/work/pele-bruta/{exhibition,works,process}/` (compressed from the
  user's `src/2014.1/` + `2012.1` uploads, ~4 MB total). New sections Oct 2026 (spec PB2c + PB6b):
  the Interação com Arte precursor deck (11 slides, Jorge Lopes, G0; accessibility framing kept as
  Chico's stated intent, notebooks in Brazil) and the parallel Kinect strand "animação interativa"
  (group of four, simulation shown, text-only block — no surviving video, unconfirmed consent on
  simulation photos, so none published). The research brief was removed Nov 2026 after its content
  shipped. The raw uploads stay in `src/` for now;
- PB4c's contact sheet (`process/contact-sheet-dan.jpg`) is spec PB4c's page 20 of `04-dan.pdf`
  from the user's `src/Cambridge-School-of-Arts/` upload, rebuilt into a clean 4×5 grid (the PDF's
  filename labels used a non-embedded font and rendered as tofu, so the 20 frames were recomposed
  on white). New shot kind `contact` (`SHOT_AR` + `SHOT_LABEL`). PB4's `Chicos photos/...jpeg`
  was NOT in that upload — still a placeholder;
- PB2b's deck slide (`process/deck-interacao.jpg`) is page 6 ("Similares — Google Art Project")
  of the user's `src/interacao-com-arte-pdf_pages-to-jpg/` export. New shot kind `slide`
  (`SHOT_AR` + `SHOT_LABEL`); its caption was drafted for approval since the spec gives none;
- PB9's MDF seam (`process/mdf-seam.jpg`) is `2014-05-22-20.15.50.jpg` from the user's
  `src/construcao-expo/` upload (close-up of brushing white paint over the joint); chosen as the
  closest match since the spec names no file — confirm or point to another;
- Tapete photos live in `src/work/tapete/` (copied as-is from the old Astro build's
  `src/chicomorais-site/public/images/tapete/` — already web-sized with faces already covered in the
  hospital shots, per spec §5 T3/T6/T10 and rule 8 (1 Oct 2026: all supplied photos with people — Tapete, Maitê, any future uploads — arrive with faces already covered; use as supplied, no face check/cover needed). T3 observation trio
  (`observation-01/02/03.jpg` = `DSC06976_blurred`, `DSC06985_blurred`,
  `DSC07004`) and the T6 experiment strip (`experiment-01…14.jpg` = spec
  `DSC07440…DSC07662`, blurred sources used throughout; `experiment-01`
  re-blurred from `DSC07440.JPG` since it had no blurred copy;
  `experiment-10.jpg` (ex-fig 15) removed 1 Oct 2026 per user (duplicate);
  `experiment-table.jpg` (third-round test photo) removed 1 Oct 2026 per user) were wired
  1 Oct 2026 from the `2008.2` folder (web-sized to max 1400px in
  `src/work/tapete/`). Ordered 1 Oct 2026 as trio(01 cart, 02 group table, 03 drawings) with one shared range caption — the trio
  branch now renders `01–03` + first item's caption like the wall/marquee captions
  instead of triplicating it into the narrow column. Trio prints forced to equal height
  via `eqh: true` on the group (new `.shot-trio.eqh` rule: fixed
  `clamp(200px,24vw,300px)` media height, cover-crop; full frames in the lightbox) —
  other trios unaffected. 01 shows a thumbnail-only crop (`observation-01-thumb.jpg`,
  1285×1220, tight on the cart with the blue pillar cut out); the full-frame
  `observation-01.jpg` (restored to the 2048×1536 `DSC06976_blurred` source) is what the
  lightbox opens, via a new per-shot `full` field (`shotMediaHTML` emits it as
  `data-full`, `wireShots` prefers it for the lightbox). The eqh row is flex with
  natural aspect widths, so the wide drawings photo shows nearly full-frame
  including the volunteer. Hero/36 swapped 1 Oct 2026 per user: the hero is now
  `mat-assembled-cut.png` (cut-out mat with one slice pulled out) and the old hero
  `cover-cut.png` sits at 36 (ar updated to 1600/1264); captions stayed in place. Mobile:
  every eqh trio stays one horizontal row (3-column grid, equal-height cover crops,
  caption below). 30–35 stay
  two-up on mobile via a new `duo` flag (`.shot-pair.duo` keeps 2 columns); other pairs
  still stack. Full-mat `cover-cut.png` moved 2 Oct 2026 next to the two single slices as
  an `eqh sm` trio (39–41, lower row height via `.shot-trio.eqh.sm`), so all three share
  one row at the same height; exploded/mat-full/mat-pizza stay full-width wides above.
  39–41 enlarged 2 Oct 2026 to fill the full content width (per-item `flex-grow` from the
  aspect ratio, right edge aligned with the wides above; mobile keeps the even 3-column
  grid via an sm-specific override). Word-game board 2 Oct 2026: no more backdrop panel —
  the prints sit straight on the page (tape, tilt, hover-zoom and lightbox kept). 42
  `with-object.jpg` widened 2 Oct 2026 (maxw 400→690px, i.e. ~560px of image) on desktop.
  Same day, per user: 42 reduced again to match 28 (`align: "left"` → 440px media at the
  content-column left edge, via `.shot-wide.align-left .shot-media`). Tapete work-card 2 Oct
  2026: borderless thumbnail (`bare: true` on the cover → `.cover.bare`, wired in `coverEl`).
  Grafica 2 Oct 2026: new "Bodhgaya Films calendar" subsection after Cabras Cabras
  (spiral-bound 2012 desk calendar; images copied from `src/Jobs/` to
  `src/work/introducao-a-grafica/bodhgaya-calendar-01…03.jpg`; spec §5.6 Entry 3). Grafica
  galleries moved 2 Oct 2026 to the full-width container (`gridFull: true` on all four
  sections) so the page centers like the other project pages; Bodhgaya 01/02 unpaired
  into stacked wides, 03 capped (maxw 608 → 480 image). Cabras poster/banner and the
  all-months composite enlarged 2 Oct 2026 to just under natural resolution
  (poster 500/505, banner 560/960, composite 700/885). Cabras Cabras expanded Nov 2026
  to six sections (CC1–CC6, incl. the cordel budget story) from Chico's
  paste-ready Cabras entry (merged Nov 2026; source file retired); images in `src/work/cabras-cabras/` (CC1 reuses the
  live façade photo). Lures sketch copied into
  `src/work/tapete/lures-sketch.png` 2 Oct 2026 — nothing on the site loads from
  `src/2008.2…/` or `src/Jobs/` any more (only written provenance notes name them). Same-date light enhancement (unsharp 1.2px/0.3, JPEG q0.9) with
  generous face boxes composited back from the source pixels first, so the
  supplier-blurred faces are byte-for-byte the supplied ones (no face work, per user). Five more round photos (`rounds-01…05.jpg` =
  `02_1a-experimentacao-diogo/DSC07425_blurred`, `DSC07447_blurred`,
  `03_2a-experimentacao-diogo/DSC07618_blurred`, `DSC07652_blurred`,
  `04_3a-experimentacao-rosario/DSC07664_blurred`; full-res downsized to 1400px,
  faces as supplied) appended 1 Oct 2026 at end of s:4 as trio+pair;
  `experiment-12…14` switched quad→trio so the groups stay clean.
  All 18 s:4 protos now render as a `marquee` group (row 1 = `experiment-01…08`,
  Diogo; row 2 = `experiment-09/11…14` + `rounds-01…05`, Rosário): two labelled
  auto-scrolling rows (interval drift at 8px/s, 4 identical copies per row with modulo
  wrap so the loop is seamless with no end gap, pause on
  hover/focus/drag, drag-to-scroll with click suppression, off under
  prefers-reduced-motion; `wireMarquee`, which also wires per-row lightbox clicks
  for originals and dupes alike).
- The Object (s:5) object cluster: `slice-out.jpg` (ex-DSC0154, tripod+foot visible)
  replaced by `mat-assembled.jpg` from `02_objeto-final/assets-web/tapetehighres1.tif`
  (same composition, clean studio shot); plus `mat-full.jpg` (DSC0136, full mat),
  `mat-pizza.jpg` (`tapetehighres2.tif`, yellow pizza side) as wides, and the two
  single slices as a transparent pair (`slice-orange-cut.png` from DSC0211 — re-flooded
  with multi-seed RGB72 tolerance after a beige gradient survived the first pass,
  `slice-pink-cut.png` from DSC0224 — RGB-distance flood-fill from the border, largest
  component kept so the purple sliver in DSC0224's corner is gone too). Quality
  leveling: per-image gain from border-white matching (capped 1.08, 0% clipping),
  gentle contrast/saturation; no faces in these frames, nothing blurred or screened.
- The two construction sketches show as a pair (`construction-scheme.jpg` from `05_confeccao-do-objeto/construction.JPG`,
  `carry-bag-sketch.jpg` from `bag-tp-carry.JPG`), followed by the construction quartet
  in the user's order: `process-cut.jpg` + `process-mould.jpg` as a pair, then
  `material-layers.jpg` (now `w:pair`) + `process-sewing.jpg` as a pair, all placed
  between the carry-bag sketch and the assembled-mat wide. `with-object.jpg` (portrait)
  now stands alone with `maxw:400px`. All exported
  from the full-res originals at 1600px with a light neutral pass (high-quality
  downscale, +3% contrast, +5/6% saturation — no faces in these frames, nothing
  blurred or screened); `process-mould.jpg` from its 1600px source, `process-cut.jpg`
  matched to `05_pecas-cortadas.jpg`, `process-sewing.jpg` matched to
  `01_costura-a-mao-NAO-sao-minhas-maos.jpg` (3072px). No AI upscaling available —
  this re-export is the restoration.
- The `desenhos-iscas.png` sketch (from `src/2008.2ProjectTapete.../01_pesquisa-de-campo/`)
  is wired as `galleryAfter` on the s:4 section: rendered after the marquee rows in a
  62ch left-flush wrapper (`.gshots--after > figure { margin: 0 auto 0 0 !important;
  padding-inline: 0 }` — the padding reset matters because `galFig` wide figures
  carry `.shot-wide`'s own side padding, which otherwise insets the image ~64px),
  numbered after the row range (k `sketch`, true 1280/1454 ar, 440px maxw). NOTE: the
  `galleryAfter` figures must be built AFTER the groups loop (lazy `.map`), otherwise
  they steal an early figure number. Row labels drafted for approval:
  EN "Experimentation with Diogo/Rosário" · PT "Experimentação com Diogo/Rosário". Object cutouts per spec rule 9: `cover-cut.png`,
  `assembly-cut.png`, `exploded-cut.png` (beige-backdrop flood-fill from the border, so interior
  white slices survive; no generative fill). `slice-out.jpg` still needs a manual mask (foot,
  tripod and cloth in frame — not auto-maskable) and stays a plain photo for now.
  `experiment-play.jpg` is intentionally unwired (spec T6 names `experiment-table.jpg` only).
  Pizza-prototype experimentation day (`pizza-01…12.jpg` = `01_experimentacao-pizza/`
  `DSC07716/20/22/23`, `DSC07725_blurred`, `DSC07727…29_blurred`,
  `DSC07730`, `DSC07732/33_blurred`, `DSC07735_blurred`
  (3 dropped per user: `DSC07726`, `DSC07731_blurred`, `DSC07734_blurred`); 640×480 originals upscaled 2×, faces as
  supplied, no face work) wired 1 Oct 2026 at end of s:5, just before Approved by
  the hospital; shown as a `wall` group (`.postit-wall`: uniform 4/3 prints with
  tape + rotations, one shared caption); caption drafted for approval.
  Last experimentation day (`pizza2-01…14.jpg` = `02_experimentacao-pizza-2/`
  `DSC07742_blurred`, `DSC07745_blurred`, `DSC07746`, `DSC07747_blurred`,
  `DSC07750_blurred`, `DSC07766_blurred`, `DSC07768_blurred`, `DSC07769/74`,
  `DSC07777_blurred`, `DSC07782/83`, `DSC07784/85_blurred`
  (9 dropped per user: `DSC07740`, `DSC07743_blurred`, `DSC07749`,
  `DSC07751_blurred`, `DSC07752`, `DSC07767`, `DSC07772`,
  `DSC07778_blurred`, `DSC07786`); same 2× treatment, faces as
  supplied) wired 1 Oct 2026 as a second `wall` after the protocol figure; the old
  `in-use-01/02.jpg` pair removed as duplicates.
- Marquee rows (1 Oct 2026): mobile swipe was dead because `touch-action: pan-y`
  forbade native horizontal panning — now `pan-x pan-y`, plus the auto-drift pauses on
  `touchstart`/`touchend`/`touchcancel` so it never fights the finger. Hover-pause is now
  `pointerenter`/`pointerleave` gated on `pointerType === "mouse"`: a tap's synthesized
  `mouseenter` (with no matching `mouseleave` once the lightbox opens) used to stick
  `paused = true` forever on touch devices. Desktop follow-up: a drag released outside
  the row (or a click that opened the lightbox) never delivered `pointerup` to the row,
  stranding `dragging = true` — now `setPointerCapture` on `pointerdown` (+
  `lostpointercapture` fallback) guarantees the release is always seen; drift SPEED 8→14
  so the motion reads at a glance. Final fix: hover/focus/touch pauses removed entirely
  (a parked cursor or a focus left on a thumbnail kept the drift off indefinitely) —
  the rows now pause only mid-drag; `prefers-reduced-motion` still freezes them.
  Mobile follow-up: some mobile browsers snap `scrollLeft` to whole pixels, so the old
  +0.7px ticks truncated back to zero forever on the `dir=+1` (Diogo) row while the
  `dir=-1` row still moved — the drift now accumulates fractionally in a `carry`
  variable and only ever writes whole-pixel steps (also immune to timer throttling
  via `Date.now` deltas).
- Words handed back (s:2, 1 Oct 2026): six `word-*.jpg` from `jogo-de-palavras/`
  (`jogo` four theme piles, `Conversas` sentences, `mesinha` table, `cha-o` three columns,
  `mesninha` full wall, `mesa` closer framing after 2× upscale) wired as one `wall`
  (postit-board, shared caption from the first item; the wall branch honours each
  item's own `ar` — the word prints are uniform vertical 3/4 (cropped in print, full
  frame in the lightbox) while the pizza walls stay 4/3). All six sharpened the same way (unsharp
  1.5px/0.35, JPEG q0.9, EXIF orientation honoured) — enhancement only, no true
  restoration available in-toolbox. Tone-matched 1 Oct 2026: all six re-exported from the originals with per-channel black/paper-white
  anchors mapped to `word-game.jpg` (fabric ≈ 8, paper ≈ 192 neutral), then the same
  sharpen — so 05 BOARD etc. no longer sit darker than the rest. Old
  `word-cards.jpg` (a crop of the same photo) superseded but left on disk.
- Salvaged from the deleted Astro build into `src/work/`: `folhas/` (9), `maite/` (12),
  `padronagens/` (9), `interfaces-fisicas-e-logicas/` (14, incl. the 12-frame `sequence.jpg`
  strip), `introducao-a-grafica/` (9). Its `pele-bruta/` set was skipped (PB page already built
  from better sources); its case-study `.md` copy was superseded by the spec, and `dist/` was
  disposable build output. All 7 image sets + all 7 EN case studies + the PT Pele Bruta were
  reviewed before deletion — the only durable extras were the per-image alt texts;
- Archive map (from the old build's `scripts/build-images.py`, for requesting future uploads):
  Pele Bruta → `Pele Bruta/2014.1/fotos` · Tapete → `2008.2 Project Tapete para Misturar o Mundo
  com Brinquedo Emprestado/04_website-selects` · Maitê → `2009.1 Project Maite` · Folhas →
  `2011.2 FOLHAS project` · Padronagens → `Padronagens (not PUC)` · Graphic work → `Outras
  matérias`. Missing Tapete originals live directly in the `2008.2` folder (not the selects);
- Animated assembly (`assembly.jpg`, 8-frame vertical strip): shot items support `frames: N`
  (`shotMediaHTML` emits `.sprite-anim.frames-N`, stepped `translateY` keyframes in CSS, frozen
  under `prefers-reduced-motion`; covers support it too via `coverEl`). Interfaces hero uses
  `frames: 12` (`.frames-12`/`asm12`, 6s, `-2.5s` delay so first paint shows the dog mid-jump,
  not the empty first frame). No static strip: the hero animation plus the live widget below
  already show the frames;
- Caption-only SHOTS items (no `u:`) render as labelled SVG placeholders — the treatment for
  visuals awaiting archive uploads (Folhas `pngs/`,
  Interfaces diagram, Cabras `Jobs/`). Maitê placeholders all filled 1 Oct 2026 from
  `src/2009.1ProjectMaite/`: M3 `miguel-couto.jpg` (miguel-couto/DSC00057, not the
  Píndaro-building DSC_0057 in experimentação), M4 `waiting-01…04` (quad), M5
  `report-cards.png` (report screenshot, copied as-is), M7 `old-board.jpg` +
  `nurses.jpg` (wide, not full-bleed, so no faces crop), M8 `tico-front.jpg`
  (objeto/DSC_0012, face visible — replaces behind-view `tico.jpg`, now unwired),
  M9 `workshop-01…07` (quad+trio, `construção` DSCs; `build-lab-01..03` stay unwired
  per spec), M10 `crying.jpg` (full spec caption incl. "on the other side of the
  picture"). Hero swapped 2 Oct 2026 per user: `hero-cut.png` (objeto/DSC_0013,
  edge-sealed flood-fill cutout to transparent, cardboard backdrop fully removed;
  tape/face/eyes preserved as one foreground each) with `clear+bare`; old hero
  `cover.jpg` moved to M8 after the ruler+Tico pair (portrait, maxw 420px, same
  caption). 2 Oct 2026 per user: Meet (Esta é a Maitê) moved after Making
  (A construção) — sections AND their `s:` shots swapped together. M6 scheme
  `construction-scheme.jpg` (user's caption + PT translation, portrait maxw
  560px) placed before the build photos. M5 +4 prototypes 2 Oct 2026 per user:
  `proto-ruler.jpg` (partido-adotado/DSC_0012 cardboard ruler),
  `proto-foam.jpg` (DSC00154 foam giraffe+monkey), `proto-snake.jpg`
  (DSC00197 snake finalist), `tico-sketch.jpg` (Untitled-5 monkey study) as two
  pairs after the sketches; captions drafted for approval. 2 Oct 2026 per user:
  figure-08 `nurses.jpg` unwired (file kept on disk); `nurses-final.jpg`
  (experimentação/DSC_0084) added as the page's final photo with the user's
  left-to-right caption. 2 Oct 2026 per user: the six s:5 `Testar ideias com as
  enfermeiras' figures (07–12) merged into one Tapete-style `postit-wall'
  (`w:"wall"`, tape+tilt+hover-zoom+lightbox; wall caption branch prefers a new
  optional `wallCap` field so the six keep their own `c` captions; shared
  caption drafted for approval). 2 Oct 2026 per user: `maite-head.jpg`
  (`objeto/DSC_0015.JPG`, head close-up with Tico, 3872px → max-1600, light
  pass, q0.88) appended to s:7 `Esta é a Maitê' with a drafted caption;
  later figures renumber +1. 2 Oct 2026 per user: white sides cropped off
  (`maite-head.jpg` 1600×1071 → 1060×890) and s:7 `Esta é a Maitê' set as two
  pairs (2×2: ruler-full+tico-front, cover+maite-head). Cover top/bottom blanks
  cropped (`cover.jpg` → 1071×974); head re-cut from the 3872px original to the
  same ratio (1600×1455, nose intact) so row 2 sits flush — shared `ar 1071/974'.
  Fix 2 Oct 2026 (user fullscreen screenshot: row 2 uneven — the cover `maxw'
  capped only one column): `maxw' removed so both pair cells fill their column
  at every width; display files stay tight-cropped while generous full-frames
  (`cover-full.jpg` ← `objeto/DSC_0002.JPG`, `maite-head-full.jpg` ←
  `objeto/DSC_0015.JPG`, max-1600, light pass) open in the lightbox via the
  existing per-shot `full` field. 2 Oct 2026 per user: workshop trio 20–22 uneven —
  not an aspect problem (all three files are 4/3) but the `.shot-trio' grid's
  narrow third column (`.55fr'); new opt-in `even: true' flag → `.shot-trio.evn'
  with three equal columns, no crops needed, other trios untouched. 2 Oct 2026 per
  user: fig 01 `miguel-couto.jpg' downscaled to 960px (noise averages out) and
  capped at `maxw 560px' on screen (too small per user → now `align:"left"' + new
  `mediaw:"700px"' single-shot field, media flush to the content left edge).
  2 Oct 2026 per user: `hero-cut.png' (hero + work card) still showed a top-edge
  sliver + backdrop fringe under Tico's base — cleared with a looser border
  flood (10k px; interiors unreachable) + isolated-speck sweep; single connected
  component verified on dark. 2 Oct 2026 per user: figures 07+09 (`old-board.jpg`,
  `proto-ruler.jpg`) flipped vertically in place (UNDO 2 Oct 2026 per user — was not
  what they wanted: both re-exported from the archive originals
  (`observac-a-o/DSC00118.JPG`, `partido-adotado/DSC_0012.JPG`) rotated 90° to
  stand vertical, heads at top (old-board CW, proto-ruler CCW; old-board still
  reads diagonal because the source photo was taken at an angle), same light
  pass, max-1600, JPEG q0.88. Layout fallout fixed: old-board `ar 3/4` +
  `maxw 560px`; ruler `ar 1071/1600` + `maxw 420px` un-paired to wide and foam
  to wide too (a portrait+landscape pair would sit ragged), snake+tico-sketch
  portrait pair untouched. Uploads arrive with faces already covered — wired as
  supplied, no face check/cover/blur/screening ever. Light global cleanup only, faces
  untouched: 16 new files max-1600px JPEG q0.88, plus the 8 already-wired files
  re-encoded in place (contrast 1.03, saturation 1.05, JPEG q0.9, native size kept —
  no detail invented, no upscaling); `g2-piece-01.jpg` deleted per spec (duplicate); `g2-piece-01.jpg` deleted per spec (duplicate);
  Folhas placeholders all filled from the uploaded `src/2011.2FOLHASproject/pngs/`:
  `screen-words` (inter01 screen-spec doc), `characters-dev` (personagens studies),
  `layout-concrete` (cim01 concrete list), `pattern-before` (lista2 loud pattern),
  `list-distance` (ip02 list with distances), `juice-detail` (Todos-os-Sucos screen);
  phone screenshots ship as trimmed transparent PNGs (no black boxes) with true `ar`
  + `maxw` (new `shotGroupHTML` single-item `maxw` support) so they read phone-sized
  and centered instead of cropped full-width; Folhas cover is a composed 21/9 hero
  (`cover-hero.jpg`: character pattern in blue + splash phone, after the Behance layout);
  s8 reordered chronologically (loud-pattern `pattern-before` before softened `cover`);
  new pairs `layout-concrete`+`layout-leaves` (cim02) and `map-screen` (ip01)+`list-distance`,
  spec captions split verbatim across each pair; pair branch also honors `maxw`;
  s8 chronological per author: Apple-UI `map-screen`+`list-distance` first, mesa
  `pattern-before` recaptioned as the table-set list, `cover` as a final restaurants
  list, and true before/after soften pair `pattern-loud` (new03) + `detail`;
  all nine phone pictures moved under s9 "The app"; soften pair switched to the juice
  screen (`juice-loud`, new05, + `juice-detail`), `detail` restored to its dishes/
  address/hours caption; `pattern-loud` now unused spare; process pictures live under
  s8 "The critique", s9 "The app" holds finals only (`cover` final list + `detail`);
  full pngs/ sweep: +30 figures (docs inter02-04 + flowchart; LOGO1, 4 sketch sheets,
  clean studies, transparent `logo-final`; transparent nabinho/crossaint/moldura,
  final cereja/tomate/semente drawings, 3 pattern sheets; Apple detail/filter/suggest
  pairs; loud Toutes pair; juice loud/mid pairs + soft single). Skipped as repeats:
  new01 (hero), new02 (cover), filtrar1 (ip05), logos-01 (logo-marks), onigiri-01 and
  desenhos nabinho/crossaint/moldura/logos (PNG or wired versions used instead).
- Interfaces I3 embed: the sent-in Claude artifact (`scratch/message-attachments/Motinorador.html`),
  adapted as `mxHTML()` + `wireMX(view)` on `s.widget: "motion-detector"`. Same pipeline:
  80×60 differencing, 0–100 score, threshold 65, transit frames gated out by its eye-checked
  `MXDOG` table, real `chico34–45.tif` snap labels, log + meter + restart + live-camera mode.
  Adapted: site's own `frame-01..12.jpg` (same-origin, no canvas taint), bubble cycles the
  owner's Opa! → Pssst! → Não!, everything bilingual, snaps open in the lightbox, timers and
  streams torn down on re-route. Sound off by default; live loop skips frames until the
  video has real dimensions (`readyState >= 2`, stale `livePrev` cleared), never dies on a
  bad frame (try/catch always reschedules the rAF), and scores live motion hotter
  (gate 45, ×500) so a person registers at the default threshold; any live motion above
  the adaptive noise floor (`liveBase` EMA + 15, min score 12) pops the owner's balloon
  on its own — crossing the slider threshold additionally fires badge + log + snapshot —
  and live balloons linger 1.6s instead of 0.7s; the widget renders in its own
  centered `.mx-full` container (max 1020px, outside the narrow text column) so it
  reads big on desktop like the other figures; the 12-frame cover keeps the standard
  21/9 hero window, with the `asm12` steps shifted so the crop sits on the bottom of
  each frame (table visible; narrow `asm12n` variant for the 3/2 window); the camera button
  toggles — running shows bilingual Stop/desligar, which stops the tracks, clears the
  video source, cancels the loop and resets the badge to idle;
  Pele Bruta parallel strand: webcam reconstruction of the 2014 Kinect piece, `bpHTML()` +
  `wireBP(view)` on `s.widget: "body-projection"` (in the new "A parallel strand" section, clearly
  labeled a 2026 reconstruction, not original footage). Pipeline: 640x480 ideal camera -> user captures an
  empty background -> per-frame abs-diff silhouette at 160x120 -> five modes clipped to the
  silhouette via a shared offscreen layer + `destination-in` mask: flow field (faithful port of the pasted Processing: value-noise field, ~650 particles
  respawned inside the mask, palette cycling, motion trails), colour washes (Chico's own 2014
  wash frames `study-wash-{red,green,blue}.jpg` as slow Ken-Burns textures, crossfading every 6s;
  flat vector bands are the fallback if a frame fails to load), seed-and-tree (radial burst from
  the silhouette's centre in the manner of `study-tree-autumn.jpg`: 9 arms, thin dark branches,
  5-lobed maple-leaf polygons, 9s growth then spring/summer/autumn/winter leaf cycle + winter
  snow),
  tattoos (Chico's own FOLHAS characters — tomato, two cherries, two seeds, two onigiri,
  two turnips, two croissants, each cropped as an individual — multiplied into the live skin
  inside a YCbCr skin mask, fading in and reseeding; since Nov 13 the
  tattoos optionally pin to 3D body landmarks — a lazily loaded on-device MediaPipe pose
  tracker (only fetched when the tattoo study is opened with the camera running) anchors each
  motif to a limb segment with its angle, falling back to the silhouette path when no body is
  detected) and falling
  crystals (slow fall, landing in sparkling column piles along the body's base up to 120,
  oldest resting recycled). Mode menu is a 2-col `.mx-modes` grid of `data-bpmode` buttons.
  Stage is 640x480 with dimmed mirrored video under the projection. Capture: the camera button
  starts the stream and auto-captures the background after 3s (so the user can step out of
  frame); Capture background stays for manual re-takes, and every capture reports through the
  `#bpMsg` status line instead of failing silently. Same teardown discipline as MX (stream + rAF killed on re-route via
  `BPSTREAM`/`BPRAF`; IntersectionObserver pauses offscreen; `visibilitychange` stops the stream for
  privacy; `getUserMedia`/play failures and the 8s play timeout fall back to the banner + new-tab
  link). Reduced motion: fewer/slower particles, no trails, frozen wash cycle, static full-grown
  tree, revealed tattoos, static crystals. Tested by stubbing
  `getUserMedia` with an animated-canvas `captureStream` (all five modes verified numerically +
  screenshots; note: background-tab throttling can starve rAF, so leave the tab focused while testing);
  of the user's `src/interacao-com-arte-pdf_pages-to-jpg/` export. New shot kind `slide`
  (`SHOT_AR` + `SHOT_LABEL`); its caption was drafted for approval since the spec gives none;
- the six-work grid cells (`s.grid`) support `img:` thumbnails (`.focus-img`, 3/2 crop); the PB15
  gallery (`s.gallery`) supports image items `{t, u, k, ar}` rendered as numbered `shot-wide`
  figures that open in the lightbox like any shot;
- `wireDeck()` drives `#deckBar`, a 2px accent progress line fixed under the header, from the deck's
  scroll position (it is hidden on every other route and works even though scroll listeners, not rAF,
  drive it).

## Design system

- Fonts: **Fraunces** (display serif), **Inter** (body), **IBM Plex Mono** (labels/meta).
- Header brand: the wordmark is plain text — `Chico Morais` (`.brand-name`). There used to be a
  circular `FM` monogram (`.brand-mark`) beside it; the user has no logo and "FM" reads as nothing to
  anyone who doesn't already know it stands for Francisco Morais, so it was removed. Don't
  reintroduce a monogram without asking.
- Palette: light editorial paper theme by default, dark variant under `html.theme-dark`
  (`:root { color-scheme: light dark; }`). Which one shows follows the visitor's device
  (`prefers-color-scheme`, matched on load AND live via a `change` listener) — the header sun/moon
  button (`#themeBtn`, bilingual labels via `paintThemeBtn()`, repainted on language switch) is a
  session-only override: it never writes storage, and `init()` deletes any legacy `cm-theme` key,
  so every reload re-follows the device. Earlier designs stored the choice and showed an "auto" dot —
  both removed at Chico's request (stored dark overrode the device on refresh; he disliked the dot).
  Attribute selectors with brackets are avoided in the stylesheet so the perchance template parser
  never touches them.
- Scroll reveals: `.reveal` + `IntersectionObserver`, with a `getBoundingClientRect` scroll
  fallback and a 2.6 s failsafe that reveals everything if the observer never fires.
- Footer "Elsewhere" links (`#footLinks`, built from `SITE.links` + `SITE.email`)
  are a horizontal, natively scrollable row (`.fl-track` inside `#footLinks`, hidden scrollbar). When
  the row overflows the footer column the second copy of `.fl-track` is appended and the row drifts
  left slowly (`CRUISE = 16px/s`, eased in over `RAMP = 3.6s` so it starts almost imperceptibly) and
  wraps seamlessly because the copies are identical. It pauses on hover/focus, slows/drags with the
  mouse (`pointerdown` + `pointermove`, a real drag suppresses the follow-up click), and hides the
  overflowing edge with a mask on `#footLinks.is-ticker`. Any change here must keep it working when
  `requestAnimationFrame` is starved in the preview iframe — the drift is driven by `setInterval`,
  not rAF.
- All motion is disabled under `prefers-reduced-motion` (the ticker removes its clone entirely).

## Living brain backdrop

A single fixed 2D canvas (`#brainCanvas`, `z-index: -1`) floats behind all content: a diffuse full-screen MICRONS-style neuron field baked once to an offscreen sprite (34 spread somas with tapered dendrite arbors each, long 26–48-step axons with boutons that exit the field, 900 neuropil filaments, 96 long wire-map fibres running edge-to-edge — neon magenta/cyan/lime/yellow, `lighter` blend) drawn per-frame only as one barely-rotating (`0.004 rad/s`) breathing `drawImage` through a smooth camera (`st.cam` in `drawBrain`, eased toward `brainCamTarget()` every frame): normally zoomed ~2.6× (2.0× narrow) into a small area of the map, panning with page scroll and per-route anchors (work → right, photography → left, about → lower), while `#/contact` zooms out to the full-map overview; on load the camera glides from overview into the zoomed view (jump-cut under `prefers-reduced-motion`). Sprite alpha is compensated by `1/sqrt(zoom)` so density stays even — and because magnifying a baked sprite pixelates, a crisp vector layer (`brainVectorLayer()`, fixed screen-space hairlines with viewport culling) crossfades in with zoom while the sprite fades out. Plus 70 twinkling tips, 6 travelling axon pulses, faint rings/ticks/slow sweep No text labels are drawn on the brain canvas (removed per user request). Centred right (`0.66vw`) and oversized so fibres leave the screen instead of forming a ball; the dark-field wash is wide, soft and faint in both themes (faintest in dark), and the hero keeps a soft `.hero-inner::before` paper halo so the serif title stays on clean paper; narrow screens shrink it 0.72× and drop it to `0.7vh` so it clears the title. Capped at DPR 2 and ~15fps, pauses when hidden, single static frame under `prefers-reduced-motion`.
The base layer is deliberately dim — dimmest in light theme, with thinner lines — so text stays readable: on load the map grows itself in organically over ~3.4s (each arbor draws outward from its soma with staggered timing and a bright wavefront, instant under `prefers-reduced-motion`), and hovering a soma shows a pointer cursor and glows just that circle; clicking toggles its network lit — several networks can stay lit at once, and each one lights up slowly, growing outward from its soma over a few seconds rather than flashing on (click again to release, empty space releases all, clicks on links/buttons are ignored).

## Design background (ocean removed)

The sea/WebGL backdrop and the 24-hour time-of-day control were removed at the user's request — they were distracting. The site now uses one calm editorial palette (warm paper `#faf8f3`, ink `#1d1a16`, terracotta accent `#9c3d1e`): `.hero`, `.page-top` and `.cta-band` are plain paper surfaces, the header shows only nav + menu, and `#heroHud` prints status/location statically. Light/dark follows the visitor's device (see Palette above);
the header button is a session-only override. Do not reintroduce stored preferences, auto
indicators, time-based theming, or animated backdrops without asking.


## TODO

- Decide whether the uploaded reference files (`PROJECT-INDEX.md`, `CV-Chico-29.08.2026.pdf`) should stay in
  `src/`, where they are publicly served — see the note above.
- Photograph captions come from the source pages' `alt` text, so only 100 of the 206 photographs have
  one, and they are only visible in the lightbox. The `alt` field in `GALLERIES` is where more would
  go; a per-photograph caption line under the grid cells in `viewPhotoSeries` would be the next step.
- Unity game rebuild (deferred; `src/Outras-mate-rias/` was deleted 30 Sep 2026 to free quota, so no
  source is kept): the `2011.1computacaoparajogos/` course folder held a Unity 2.x-era Web Player
  build (`mont.unity3d` — dead plugin format, unrunnable in modern browsers) plus full project
  source: menu scene with texture-swap buttons (`menuScript.js`: OnMouseEnter/Exit swaps
  guiTexture, OnMouseDown loads `faseCarregar`), 3 phases (`fase01-03.unity`), cart (`carrinho.FBX`,
  `carrinho.unity`/`.max`) on track (`trilho01.max`), mountain terrain (`montanha.FBX`,
  `New-Terrain.asset`), one slowed animation (`animScript.js`: `animation["Take 001"].speed=0.1`).
  Rebuild paths: (a) Chico re-exports WebGL from Unity (needs UnityScript→C# migration — UnityScript
  was dropped after Unity 2017), or (b) a fresh web tribute, which needs Chico to describe the
  actual gameplay since the code skeleton carries no rules.

#!/usr/bin/env node
// gen-mirrors.mjs — static SEO/social mirror pages for hash-routed case studies.
//
// Reads titles, descriptions and covers from the repo-root index.html data
// constants (PROJECTS + SHOTS) plus tools/seo-overrides.json. Nothing
// user-facing is hardcoded in this script: edit the copy (or the overrides
// table) and re-run.
//
// Usage (repo root):
//   node tools/gen-mirrors.mjs --base https://portfolio.chicomorais.com/
//
// Outputs (pass 1: work case studies):
//   work/<slug>/index.html  — static mirror with real <title>/meta/og tags,
//                             visible fallback content, JS redirect to the app
//   sitemap.xml, robots.txt, CNAME (custom-domain hosts only)
import fs from "node:fs";
import vm from "node:vm";

function fail(msg) {
  console.error("gen-mirrors: " + msg);
  process.exit(1);
}
function getArg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : null;
}

const BASE = getArg("--base") || fail("missing required --base (e.g. --base https://portfolio.chicomorais.com/)");
if (!/^https?:\/\/.+\/$/.test(BASE)) fail("--base must be an absolute http(s) URL ending in / (got '" + BASE + "')");
const ROOT = (getArg("--root") || ".").replace(/\/+$/, "");
const OVERRIDES_FILE = getArg("--overrides") || "tools/seo-overrides.json";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

let page;
try {
  page = fs.readFileSync(ROOT + "/index.html", "utf8");
} catch (e) {
  fail("cannot read " + ROOT + "/index.html: " + e.message);
}

// Slice a JS literal (array/object) out of page source by string-aware
// bracket matching. No regex field scraping: the whole literal is evaluated.
function sliceLiteral(decl, openCh, closeCh) {
  const di = page.indexOf(decl);
  if (di < 0) fail("mirror-data: declaration '" + decl + "' not found in index.html");
  const open = page.indexOf(openCh, di);
  if (open < 0) fail("mirror-data: opening bracket for '" + decl + "' not found");
  let depth = 0;
  let str = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  for (let j = open; j < page.length; j++) {
    const c = page[j];
    const n = page[j + 1];
    if (lineComment) {
      if (c === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (c === "*" && n === "/") {
        blockComment = false;
        j++;
      }
      continue;
    }
    if (str) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === str) str = null;
      continue;
    }
    if (c === "/" && n === "/") {
      lineComment = true;
      j++;
      continue;
    }
    if (c === "/" && n === "*") {
      blockComment = true;
      j++;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      str = c;
      continue;
    }
    if (c === openCh) depth++;
    else if (c === closeCh) {
      depth--;
      if (depth === 0) return page.slice(open, j + 1);
    }
  }
  fail("mirror-data: closing bracket for '" + decl + "' not found");
}

// Evaluate a data literal in an EMPTY vm sandbox: no page code runs,
// the result is plain data (or we abort with the label).
function evalData(src, label) {
  try {
    return vm.runInNewContext("(" + src + ")", {});
  } catch (e) {
    fail("mirror-data: cannot evaluate " + label + ": " + e.message);
  }
}

const PROJECTS = evalData(sliceLiteral("const PROJECTS =", "[", "]"), "PROJECTS");
const SHOTS = evalData(sliceLiteral("const SHOTS =", "{", "}"), "SHOTS");
if (!Array.isArray(PROJECTS) || !PROJECTS.every((p) => p && typeof p.slug === "string")) {
  fail("mirror-data: PROJECTS has unexpected shape (want [{slug, ...}])");
}
if (!SHOTS || typeof SHOTS !== "object" || Array.isArray(SHOTS)) {
  fail("mirror-data: SHOTS has unexpected shape (want {slug: {cover: {u}}})");
}

let overrides = {};
const overridesPath = ROOT + "/" + OVERRIDES_FILE;
if (fs.existsSync(overridesPath)) {
  try {
    overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));
  } catch (e) {
    fail("mirror-data: bad JSON in " + OVERRIDES_FILE + ": " + e.message);
  }
  if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) {
    fail("mirror-data: " + OVERRIDES_FILE + " must be an object keyed by slug");
  }
}

// Validate everything BEFORE writing anything. Any failure names slug+field.
const routes = PROJECTS.map((p) => {
  const slug = p.slug;
  const need = (ok, field) => {
    if (!ok) fail("mirror-data: slug '" + slug + "' missing/invalid '" + field + "'");
  };
  need(typeof p.title === "string" && p.title.length > 0, "title");
  need(p.oneliner && typeof p.oneliner.en === "string" && p.oneliner.en.length > 0, "oneliner.en");
  need(typeof p.year === "string" && p.year.length > 0, "year");
  const shot = SHOTS[slug] && SHOTS[slug].cover && SHOTS[slug].cover.u;
  const cover0 = shot && typeof shot === "object" ? shot.en : shot;
  need(typeof cover0 === "string" && cover0.indexOf("src/") === 0, "SHOTS['" + slug + "'].cover.u");
  const ov = overrides[slug] || {};
  if (ov && typeof ov !== "object") fail("mirror-data: slug '" + slug + "' override must be an object");
  const title = ov.title !== undefined ? ov.title : p.title;
  const desc = ov.description !== undefined ? ov.description : p.oneliner.en;
  const cover = ov.ogImage !== undefined ? ov.ogImage : cover0;
  need(typeof title === "string" && title.length > 0, "override 'title'");
  need(typeof desc === "string" && desc.length > 0, "override 'description'");
  need(typeof cover === "string" && cover.indexOf("src/") === 0, "override 'ogImage'");
  if (!fs.existsSync(ROOT + "/" + cover)) {
    fail("mirror-data: slug '" + slug + "' cover file not found: " + cover);
  }
  return { slug, title, desc, year: p.year, cover };
});

function mirror(r) {
  const url = BASE + "work/" + r.slug + "/";
  const app = BASE + "#/work/" + r.slug;
  const imgAbs = BASE + r.cover;
  const imgRel = "../../" + r.cover;
  const headTitle = r.title + " — Chico Morais";
  return (
    "<!DOCTYPE html>\n" +
    '<html lang="en">\n' +
    "<head>\n" +
    '<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    "<title>" +
    esc(headTitle) +
    "</title>\n" +
    '<meta name="description" content="' +
    esc(r.desc) +
    '">\n' +
    '<link rel="canonical" href="' +
    esc(url) +
    '">\n' +
    '<meta property="og:type" content="article">\n' +
    '<meta property="og:title" content="' +
    esc(headTitle) +
    '">\n' +
    '<meta property="og:description" content="' +
    esc(r.desc) +
    '">\n' +
    '<meta property="og:url" content="' +
    esc(url) +
    '">\n' +
    '<meta property="og:image" content="' +
    esc(imgAbs) +
    '">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n' +
    '<meta name="twitter:title" content="' +
    esc(headTitle) +
    '">\n' +
    '<meta name="twitter:description" content="' +
    esc(r.desc) +
    '">\n' +
    '<meta name="twitter:image" content="' +
    esc(imgAbs) +
    '">\n' +
    "<style>body{font-family:Georgia,serif;max-width:44rem;margin:3rem auto;padding:0 1.25rem;line-height:1.6;color:#1d1a16;background:#faf8f3}a{color:#9c3d1e}img{max-width:100%;height:auto}.eyebrow{font:12px monospace;letter-spacing:.08em;text-transform:uppercase;opacity:.7}</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<main>\n" +
    '<p class="eyebrow"><a href="' +
    esc(BASE) +
    '">Chico Morais</a> — Selected work</p>\n' +
    "<h1>" +
    esc(r.title) +
    "</h1>\n" +
    "<p>" +
    esc(r.desc) +
    "</p>\n" +
    '<figure><img src="' +
    esc(imgRel) +
    '" alt="' +
    esc(r.title) +
    '"></figure>\n' +
    "<p>" +
    esc(r.year) +
    "</p>\n" +
    '<p><a href="' +
    esc(app) +
    '">Open the case study →</a></p>\n' +
    "<noscript><p>This is a share preview. <a href=\"" +
    esc(app) +
    '">Open the full case study →</a></p></noscript>\n' +
    "</main>\n" +
    "<script>location.replace(" +
    JSON.stringify(app) +
    ");</script>\n" +
    "</body>\n" +
    "</html>\n"
  );
}

const written = [];
const write = (rel, content) => {
  fs.mkdirSync(ROOT + "/" + rel.slice(0, rel.lastIndexOf("/")), { recursive: true });
  fs.writeFileSync(ROOT + "/" + rel, content);
  written.push(rel);
};

for (const r of routes) {
  write("work/" + r.slug + "/index.html", mirror(r));
}

const today = new Date().toISOString().slice(0, 10);
let sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += "  <url><loc>" + esc(BASE) + "</loc><lastmod>" + today + "</lastmod></url>\n";
for (const r of routes) {
  sitemap += "  <url><loc>" + esc(BASE + "work/" + r.slug + "/") + "</loc><lastmod>" + today + "</lastmod></url>\n";
}
sitemap += "</urlset>\n";
write("sitemap.xml", sitemap);
write("robots.txt", "User-agent: *\nAllow: /\nSitemap: " + BASE + "sitemap.xml\n");

const host = BASE.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
if (!/(\.|^)(github\.io|localhost)$/.test(host)) {
  write("CNAME", host + "\n");
}

for (const f of written) console.log("gen-mirrors: wrote " + f);
console.log("gen-mirrors: " + routes.length + " routes, base " + BASE);

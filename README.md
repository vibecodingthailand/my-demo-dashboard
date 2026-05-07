# Handoff: Personal Portfolio (Editorial Paper Direction)

## Overview
A static personal portfolio for **Krish · krish.dev**, a senior software engineer with 10+ years of experience based in Bangkok. Four pages: **Home**, **About**, **Work**, **Contact**. Bilingual (Thai + English). The aesthetic is "Editorial Paper" — warm cream paper background, serif headlines (Fraunces), generous whitespace, magazine-style typography rhythm. The intended feeling is *minimal, clean, and trustworthy* — closer to a printed broadsheet than a tech-startup landing page.

## About the Design Files
The files in this bundle (`Portfolio Designs.html`, `app.jsx`, `variation-editorial.jsx`, `design-canvas.jsx`) are **design references created in HTML/React-via-Babel**. They are **prototypes showing intended look and behavior, not production code to copy directly**.

Your task is to **recreate these designs in your target codebase's environment**:
- If you already have a stack (Next.js, Astro, SvelteKit, etc.), use it and follow that codebase's existing patterns and component conventions.
- If no environment exists yet, my recommendation is **Astro** for a static personal portfolio of this kind — it ships zero JS by default, perfect for the editorial, document-like feel here. Next.js (App Router, static export) and SvelteKit (adapter-static) are also reasonable choices.

The other two design directions (Swiss Grid, Mono Terminal) are **NOT** part of this handoff — only Variation A (Editorial). The corresponding files (`variation-swiss.jsx`, `variation-mono.jsx`) are excluded from the bundle.

## Fidelity
**High-fidelity (hifi)**. Colors, type pairing, spacing, and layout proportions are final. Recreate pixel-perfectly. The only items that are placeholders (and need real content from the user) are:
- Portrait photographs (marked `[ portrait · 4:5 ]` and `[ portrait · 3:4 ]` — striped placeholder boxes).
- Project content (the four sample projects — Settle, Quietly, Field Notes, Northwind Health — are illustrative; replace with real work).
- All copy is sample copy and should be replaced/edited by the user.

The structural design — typographic scale, grid lines, color palette, density — is final.

---

## Design Tokens

### Colors
All colors are warm-toned. Avoid swapping them with cooler greys.

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#f4efe6` | Page background |
| `--paper-deep` | `#ede6d6` | Image placeholders, hover background on rows |
| `--ink` | `#1f1b14` | Primary text, headlines |
| `--ink-soft` | `#5b5347` | Secondary text, captions |
| `--rule` | `rgba(31,27,20,0.18)` | Hairline rules and borders |
| `--accent` | `#7a3d20` | Burnt sienna — used sparingly for eyebrow labels, "FIG. 01" markers, year tags |

### Typography
Three families. Load via Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..700,30..100&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500&family=Noto+Serif+Thai:wght@300;400;500;600&display=swap" rel="stylesheet">
```

| Family | Role | Notes |
|---|---|---|
| **Fraunces** | Display + serif body (English) | Variable font. Use `font-variation-settings: "opsz" 144` for large display sizes. For italic emphasis use `"opsz" 144, "SOFT" 100` to bring out the soft-italic character. Weight 300–400. |
| **Noto Serif Thai** | Display + serif body (Thai) | Pairs with Fraunces for bilingual body copy. Weight 300 for body, 400 for headlines. |
| **Inter** | UI / labels / nav (English) | Weight 400–500 only. 13–14px in nav, 11–12px for eyebrow/uppercase labels. |
| **IBM Plex Mono** | Metadata, year tags, "FIG. 01", captions, footer | Weight 400. Letter-spacing `0.08em–0.18em` for label/caption use. |

**Type scale used:**
- Hero display (Home): 96px / line-height 0.96 / weight 350 / letter-spacing -0.025em
- Section display (About, Contact): 56–80px / line-height 0.96–1.05 / weight 350 / letter-spacing -0.02em to -0.025em
- Section display (Work): 64px / weight 350 / letter-spacing -0.02em
- Project title (Work row): 28px / weight 400 / letter-spacing -0.01em
- Body serif (Thai): 15–19px / line-height 1.55–1.75 / weight 300 / `Noto Serif Thai`
- Eyebrow label: 11px / uppercase / letter-spacing 0.18em / `Inter`
- Mono caption: 10–12px / letter-spacing 0.08–0.12em / `IBM Plex Mono`

### Spacing
- Page horizontal padding: **56px** on all four pages
- Page top padding: 56–120px depending on page (Contact uses the most for vertical drama)
- Grid gaps: 24px / 40px / 56px / 64px / 80px (used contextually)
- Row vertical padding (Work list): 28px

### Borders & Rules
- All hairlines: `1px solid rgba(31,27,20,0.18)` (`--rule`)
- No box shadows anywhere. The aesthetic is flat, paper-like.
- No border-radius on anything. Hard edges throughout.

### Imagery
- Portrait placeholders use a 135° striped pattern: `repeating-linear-gradient(135deg, transparent 0 14px, rgba(31,27,20,0.04) 14px 15px)` over `--paper-deep` background, with a 1px `--rule` border. Inside, a centered mono caption like `[ portrait · 4:5 ]`.
- Real photos should keep this 4:5 (Home) and 3:4 (About) aspect ratio.
- A small `FIG. 01` tag in `--accent` color sits on the top-right of the Home portrait, bleeding 8px outside the frame.

### Interactions (subtle hover only)
- Work list rows: background fades to `--paper-deep` on hover (`transition: background 0.2s`).
- Nav links: active link gets a 1px bottom underline in `--ink`. Inactive links are `--ink-soft` and stay so on hover (or apply a faint underline if preferred).
- No parallax, no cursor effects, no scroll animations. Interactions stay quiet and intentional.

---

## Screens

All four pages share the same top nav and footer rhythm. Page sizes in the prototype are 1280×880, but the production site should be **fluid** with a **max-width of ~1400px** and the same 56px horizontal padding (gracefully reducing to 24–32px on mobile).

### Shared: Top Navigation
- Layout: flex row, `padding: 28px 56px`, bottom border `1px --rule`.
- Left: brand `Krish·dev` — `Fraunces`, italic, 22px, weight 500, letter-spacing -0.01em. The middle dot is `--accent` colored.
- Center: 4 nav links — `Home / About / Work / Contact` — `Inter`, 13px, color `--ink-soft`, gap 36px. Active link is `--ink` with a 1px bottom border in `--ink`, padding-bottom 2px.
- Right: small mono label `Bangkok · GMT+7` — `IBM Plex Mono`, 12px, `--ink-soft`, `font-variant-numeric: tabular-nums`.

---

### Page 1 — Home

**Purpose:** Introduce who Krish is in one strong statement, plus a quick "now" status strip.

**Layout:**
1. Top nav.
2. Hero section: `padding: 64px 56px 40px`, two-column grid `1fr 1fr` with 56px gap.
   - **Left column:**
     - Eyebrow: `Vol. 10 — Independent practice` (11px, uppercase, ls 0.18em, `--ink-soft`, mb 28px).
     - H1 headline: three lines, 96px Fraunces 350 weight, ls -0.025em, line-height 0.96. Lines:
       - `A developer`
       - `<em>thinking</em> in` *(em uses Fraunces SOFT 100 italic, weight 300)*
       - `systems.`
     - Sub: 19px Noto Serif Thai/Fraunces 300, color `--ink-soft`, max-width 460px.
       Copy: *"Krish — วิศวกรซอฟต์แวร์ผู้ทำงานกับเว็บมาสิบปี. ชอบเขียนระบบที่อ่านง่าย ออกแบบให้เรียบ และอยู่ทน."*
     - Footer row (mt 56px, flex, gap 32px):
       - Link "Read about my practice →" — 14px Inter, color `--ink`, 1px bottom border `--ink`, padding-bottom 3px.
       - Mono tag "est. 2015" — 12px IBM Plex Mono, `--ink-soft`.
   - **Right column:** 4:5 portrait placeholder with striped pattern (see Imagery). Tag `FIG. 01` (10px IBM Plex Mono, `--accent`, ls 0.12em) bleeds top-right -8px outside.
3. Status strip (top border `1px --rule`):
   - 4-column grid: `160px 1fr 1fr 1fr`, baseline-aligned.
   - First cell: eyebrow "Status" (11px uppercase ls 0.18em `--ink-soft`), padding 24px 0.
   - Three columns of `(label, value)` pairs separated by `1px --rule` vertical dividers between the value columns:
     - **Now** — `กำลังสร้าง infra สำหรับทีมเล็กๆ ที่ Bangkok-based fintech`
     - **Writing** — `"Boring code is good code" — บทความล่าสุด`
     - **Open to** — `งานที่ปรึกษา · architecture review · code coaching`
   - Each column: eyebrow label is 11px uppercase ls 0.14em `--accent`, mb 8px. Value is 17px Noto Serif Thai weight 300 line-height 1.4.

---

### Page 2 — About

**Purpose:** Brief biography, key facts, and a 4-row career timeline.

**Layout:**
1. Top nav.
2. Body: `padding: 56px 56px 40px`, two-column grid `320px 1fr` with 64px gap.
   - **Left aside (320px wide):**
     - Portrait placeholder: 3:4 aspect, striped pattern, `1px --rule` border.
     - Below, `margin-top: 24px`, mono fact list (11px IBM Plex Mono `--ink-soft`, line-height 1.7). Each row is `display: flex; justify-content: space-between`:
       - `BORN — 1992`
       - `BASED — BANGKOK`
       - `YEARS — 10+`
       - `STACK — TS · GO · PG`
   - **Right article:**
     - Eyebrow: "About — เกี่ยวกับฉัน" (11px uppercase ls 0.18em `--accent`).
     - H2: 56px Fraunces 350 weight, ls -0.02em, line-height 1.05.
       Two lines: `ผมเขียนโค้ดเพื่อให้คน` / `อื่นใช้ชีวิตได้ง่ายขึ้น`.
     - Body: **two columns** (`column-count: 2; column-gap: 40px`), 15px Noto Serif Thai weight 300, line-height 1.75. Three paragraphs of bio (sample copy in the source — replace with real bio).
     - Timeline (mt 48px, top border `1px --rule`, padding-top 28px):
       - Eyebrow "A timeline" (11px uppercase ls 0.18em `--ink-soft`, mb 18px).
       - Grid `80px 1fr` with row-gap 14px, 14px font-size:
         - `2024–` Independent · technical advisor for early-stage teams
         - `2021` Lead engineer · health-tech, Bangkok (Series A)
         - `2018` Senior · fintech, ย้ายจาก backend ไป platform
         - `2015` Junior dev · เขียน PHP+jQuery ตอนกลางคืน
       - Years column is 12px IBM Plex Mono `--accent`. Description is Noto Serif Thai weight 300.

---

### Page 3 — Work

**Purpose:** A list of 4 selected projects, each one row in a hairline-separated table. Lightweight — no project tiles, no thumbnails on this index. Individual case studies (out of scope here) would be linked from each row.

**Layout:**
1. Top nav.
2. Header (`padding: 56px 56px 0`):
   - Flex row, baseline-aligned, mb 32px.
   - Left: eyebrow "Selected work — ผลงานที่เลือก" + H2 "Twelve projects, four shown." (`shown.` is italic via Fraunces SOFT 100). H2 is 64px Fraunces 350 weight ls -0.02em line-height 1.
   - Right: mono date range "2021 — 2025" (11px IBM Plex Mono ls 0.1em `--ink-soft`).
3. Project list (top border `1px --rule`, mt 24px):
   - Each row is a 5-column grid `56px 80px 1fr 1fr 220px`, baseline-aligned, padding `28px 56px`, bottom border `1px --rule`. Hover: background fades to `--paper-deep` over 0.2s.
   - Columns:
     - **№** — 11px IBM Plex Mono `--ink-soft` (e.g., `01`).
     - **Year** — 12px IBM Plex Mono `--accent` (e.g., `2024`).
     - **Title block** — title is 28px Fraunces weight 400 ls -0.01em. Subtitle below is 13px Fraunces italic `--ink-soft`, mt 4px.
     - **Description** — 14px Noto Serif Thai weight 300.
     - **Tag** — right-aligned, 11px IBM Plex Mono `--ink-soft` ls 0.05em, ends with ` →`.
   - Sample rows (replace with real projects):

| № | Year | Title / Sub | Description | Tag |
|---|---|---|---|---|
| 01 | 2024 | **Settle** / *Reconciliation engine for fintech* | ระบบกระทบยอดที่ลด manual ops ลง 70% | Backend · Go · Postgres → |
| 02 | 2023 | **Quietly** / *Async-first writing tool* | เครื่องมือเขียนสำหรับทีมที่ไม่อยากประชุม | Product · TS · React → |
| 03 | 2022 | **Field Notes** / *CMS for slow journalism* | CMS เล็กๆ ที่ใช้ markdown + git workflow | Open source → |
| 04 | 2021 | **Northwind Health** / *Patient intake redesign* | ปรับ intake form ให้คนกรอกได้ใน 4 นาที | Lead · Health-tech → |

4. Footer line (`padding: 24px 56px`, flex justify-between, 12px IBM Plex Mono `--ink-soft`):
   - `+ 8 more in archive`
   - `see all →`

---

### Page 4 — Contact

**Purpose:** Email-first contact page with deliberate vertical drama. One channel.

**Layout:**
1. Top nav.
2. Body: `padding: 120px 56px 56px`, two-column grid `1fr 1fr` with 80px gap.
   - **Left column:**
     - Eyebrow: "Contact — ติดต่อ" (11px uppercase ls 0.18em `--accent`, mb 18px).
     - H2: 80px Fraunces 350 weight ls -0.025em line-height 0.96.
       Two lines: `Write me` / `<em>a letter.</em>` (em uses Fraunces SOFT 100 italic).
     - Body: 17px Noto Serif Thai weight 300, line-height 1.7, `--ink-soft`, max-width 420px. Copy describes that email is the best channel and that replies come within 1–2 business days.
   - **Right column:**
     - Email card (top border `1px --ink` 1.5–2px, padding-top 24px):
       - Eyebrow "Email" (11px uppercase ls 0.16em `--ink-soft`, mb 8px).
       - Email link: `hello@krish.dev` — 36px Fraunces weight 400 ls -0.01em, color `--ink`, 1px bottom border `--rule`, padding-bottom 4px. (Real implementation: `mailto:hello@krish.dev`. Optional: copy-to-clipboard on click.)
     - Specs grid (mt 40px, 2×2 grid `1fr 1fr` gap 24px). Each cell: top border `1px --rule`, padding-top 14px.
       - Eyebrow (11px uppercase ls 0.16em `--ink-soft`, mb 6px) + value (16px Noto Serif Thai weight 300):
         - **Response** — `1–2 วันทำการ`
         - **Timezone** — `GMT+7 · Bangkok`
         - **Available for** — `ที่ปรึกษา · review · coaching`
         - **Not for** — `full-time · งานเร่ง 1 สัปดาห์`
     - Sign-off (mt 56px): `— signed, k.` (11px IBM Plex Mono `--ink-soft` ls 0.08em).
3. Page footer (absolutely positioned `bottom: 24px; left: 56px; right: 56px`, flex justify-between):
   - `© 2026 KRISH.DEV`
   - `SET IN FRAUNCES & NOTO SERIF THAI`
   - `BANGKOK / GMT+7`
   - All three: 11px IBM Plex Mono `--ink-soft` ls 0.1em.

---

## Interactions & Behavior Summary
- **Nav links**: client-side or full-page navigation between four routes (`/`, `/about`, `/work`, `/contact`). Active route gets the underline treatment.
- **Work rows**: hover background fade only. Each row links to its case study URL (out of scope; for now, link to `#`).
- **Email link** on Contact: `mailto:hello@krish.dev`.
- **No JavaScript-driven animations.** No scroll triggers. No parallax. No cursor effects.
- **Responsive notes** (not shown in 1280px desktop mocks but please implement):
  - **Tablet (~768px)**: nav links collapse to a hamburger or stay horizontal at smaller font; hero H1 drops to ~64px; status strip becomes 1-col stacked; About becomes single column (portrait above article); Work table keeps 5 cols but at 12–13px; Contact becomes single column.
  - **Mobile (~375px)**: H1 drops to ~44px; all multi-column layouts stack; horizontal padding 24px; nav becomes hamburger.

## State Management
- Static site. No state management library needed.
- Active-nav-link state can be derived from the current route — no client state required.

## Accessibility
- Use proper semantic structure: one `<h1>` per page, `<nav>` for the top nav, `<main>` for the page content, `<article>` for the About bio, `<footer>` for the bottom strip.
- Color contrast: `--ink` on `--paper` is ~14:1 (AAA). `--ink-soft` on `--paper` is ~6:1 (AA large). `--accent` (`#7a3d20`) on `--paper` is ~6:1 — fine for the small eyebrow labels and FIG. tags but verify against your specific WCAG target.
- Set `lang="th"` on `<html>` (or `lang="en"` if English-first), and use `lang` attributes on Thai vs. English text spans for screen readers.
- Email link should be a real `<a href="mailto:…">`. Nav items should be real `<a href="…">`.

## Assets
- **Fonts**: Google Fonts (URL above).
- **Photography**: 2 portrait images required. Recommended specs:
  - Home: 4:5 aspect, ~1000×1250px, JPG or AVIF, color-graded warm.
  - About: 3:4 aspect, ~900×1200px, same treatment.
- **No icons used.** No SVGs to procure. Hairlines, mono labels, and serif type carry the visual load.
- **No logo image.** The "Krish·dev" wordmark is set in Fraunces — keep it as live text.

## Files in this bundle
- `README.md` — this document.
- `Portfolio Designs.html` — original prototype entry point. Open in a browser to see the design canvas; the Editorial section is the one you'll be implementing. (The other two directions are still rendered; ignore them.)
- `app.jsx` — design canvas composition file. Reference only.
- `variation-editorial.jsx` — the **source of truth** for the Editorial design. All four pages (`EditorialHome`, `EditorialAbout`, `EditorialWork`, `EditorialContact`) and the `EdNav` component are defined here, with the exact palette (`edPalette`) and styles (`edStyles`) used in the mocks. Lift values from this file when in doubt.
- `design-canvas.jsx` — the canvas wrapper. Not part of the design itself; can be ignored.

## Implementation suggestions (Astro example)
If starting fresh, a sensible structure:
```
src/
  layouts/
    BaseLayout.astro          # <html>, <head> with font links, <Nav />, <main><slot/></main>, <Footer />
  components/
    Nav.astro                 # the top nav (active link via Astro.url.pathname)
    Eyebrow.astro             # reusable 11px uppercase eyebrow label
    PortraitPlaceholder.astro # the striped placeholder (or accept a real image src)
  pages/
    index.astro               # Home
    about.astro
    work.astro
    contact.astro
  styles/
    tokens.css                # CSS custom properties for the palette + type scale
    global.css                # font imports (or use <link> in BaseLayout), reset, base styles
public/
  images/
    portrait-home.jpg         # user provides
    portrait-about.jpg        # user provides
```

CSS-only is enough — no Tailwind necessary (and arguably it would fight the editorial feel). Plain CSS with custom properties and a small set of utility classes (`.eyebrow`, `.serif-display`, `.mono-label`) will read closer to the source.

---

Questions on anything? The `variation-editorial.jsx` file is the canonical specification — when measurements in this README and the source disagree, **trust the source**.

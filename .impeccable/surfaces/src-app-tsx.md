---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Surface brief — portfolio single page

Scope: the whole single-page portfolio (`src/App.tsx` and every section it mounts). Visitor mode: **Experience**.

Audience: a recruiter scanning ~30s on a phone, and a tech lead arriving from GitHub to judge craft. Both weighted equally.
Job: understand what Nicolás builds, believe the craft claim, and either contact him or open a repo.
Constraints: React 19 + TS strict + Vite + Tailwind v4 + Framer Motion; static, no backend; bilingual ES/EN with ES default; `tsc -b` must pass. All content kept.
History (oct 2026): Sismógrafo shipped; Lámina técnica and the glassmorphism build were rejected — the glass build for being slow ("el scroll lento, se pega"). This direction comes from Nicolás's own references: two Pinterest dev-portfolio shots, motionsites "Impressive Hero", and jhey.dev. His picks: a typographic cover in the jhey.dev manner, one accent colour, his photo in natural colour. The cover was approved on its own before the rest was built.

## Direction contract

**THESIS** — A personal index page: one column of type on black, where the only colour points at things you can open. It refuses heavy effects entirely; the page must scroll as fast as the browser can, and every motion is a one-shot CSS transition, never tied to scroll.

**OWN-WORLD** — Night `#0a0a0a`, paper `#f2f2f0`, quieter text `#a8a8a4` / `#8b8b87`, hairlines `#262626`, one accent vermilion `#ff6a3d` for hand-drawn underlines, hover, selection and the scrollbar. Geist for text and display, Geist Mono for small uppercase labels and link rows. Components: InkLink (a wobbly SVG underline that draws once and redraws on hover), hairline sections with the heading in a left column, work rows that invert to paper on hover, hairline rounded cards for the stack, a portrait shown as a slightly crooked sticker, a corner grid fading in from the bottom right.

**STORY** — The visitor reads the name, the two mono lines and the paragraph in one glance, follows an underlined phrase or a project from the list, and finds the email in the fixed header from anywhere.

**FIRST VIEWPORT** — Left column: "Nicolás / Villagrán" at `clamp(3.25rem, 8.6vw, 6.75rem)`, two mono lines (role · title, current employer · city), a paragraph with four hand-underlined links, a mono row Proyectos · Trayectoria · Correo · CV, and a mono project list with pointer icons. Right: the colour portrait as a sticker, rotated 4°. Fixed header: `nv.` mark, es / en, a paper Correo pill.

**FORM** — User-pinned from his references (jhey.dev typographic cover + one accent + colour photo), approved cover-first; supersedes seed `0a01508b`. Motion grammar: scribble draw (stroke-dashoffset), section hairline draw once in view (transform), hover inversions and arrow nudges. Measured: scroll p95 under 9ms per frame, zero long animation frames.

**FINISH** — unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- ERP Ansimaq and Pilates: repo/demo links and screenshots still owed by Nicolás.
- EN copy is authored from the ES source and needs his read before it goes public.
- The served CV PDF still says «Egresado».

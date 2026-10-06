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
Proof on hand: 4–5 real projects, 3 certifications, CV PDF, GitHub, LinkedIn, profile photo. Project images, repo URLs, demo URLs, 2–3 experience entries and a thesis topic are real but **not yet supplied** — they ship as marked slots, never invented.
Constraints: React 19 + TS strict + Vite + Tailwind v4 + Framer Motion; static, no backend; bilingual ES/EN with ES default; `tsc -b` must pass.

## Direction contract

**THESIS** — The page is one continuous seismic recording, and the visitor is reading the drum. It refuses the portfolio grid outright: no card deck of projects, no hero-metric row, no eyebrow labels, no fade-up on every section. Quiet content is a flat trace; the work is where the pen jumps.

**OWN-WORLD** — Drum sheet read as a negative: ground `#08090A`, trace and type in bone `#F2F0EB`, time grid `#1D1E22`, annotation `#A5A29B` with `#8A8782` beneath it. The two annotation values replace a single `#71757A`, which fell below 4.5:1 on this ground; the grid was lifted from `#16181B` for the same reason. Zero hue, zero shadow; elevation is a hairline or nothing. Type is one family on its width axis — Archivo at Expanded for display, Normal for prose, Narrow for field labels — with Martian Mono reserved strictly for measured data: coordinates, timestamps, station codes, counters, sheet numbers, phase marks. Anything a visitor reads as language rather than as a reading is set in Narrow, never in mono. Components are instrument parts: traces, pick marks with filled triangles, leader lines, a margin register index with the title block at its foot, a component selector. No pills, no cards, no icons standing in for content.

**STORY** — The visitor lands on an instrument already running and understands within one screen that this person builds and verifies software. Scrolling advances the drum; each register announces itself with an amplitude event, so attention is directed by the recording rather than by decoration. They leave having opened a repo or written to him; the title-block actions make both reachable from any point on the sheet.

**FIRST VIEWPORT** — Full-bleed `#08090A` under a time grid of vertical hairlines, hour ticks labelled along the top edge in mono. Top-left, the station block: `EST. SANTIAGO · CL`, `LAT −33.4489 LON −70.6693`, `COMP. N-S`. Top-right, the ES/EN switch rendered as a component selector. Around a third of the way down, the trace: a full-bleed SVG polyline that draws left to right, flat and quiet until it bursts at ~62% width, then decays into a coda. A vertical pick line drops at onset, labelled `P` with a filled triangle. The trace runs edge to edge because the sheet does; the text block beneath it holds the sheet's own left margin instead, so `NICOLÁS VILLAGRÁN` in Archivo Expanded at `clamp(2.75rem, 8.5vw, 6rem)` is locked to the station block's datum, not the trace's, then one line of role prose. Bottom-left, the two actions as annotations with leader lines: the register jump and the CV. Bottom-right, `REG. 01 / 06`.

**FORM** — Sismógrafo: the analog seismograph drum, candidate 1 of my ordered grounded list, taken as IMPECCABLE'S PICK over the roll's assignment (candidate 5, Plancha Técnica). Seed key `b5bdf9b3`, direction scope, experience mode. Five disciplines carry over from the declined hands and bind here: measured facts instead of adjectives (forge); a numbered, addressable register index pinned in the margin (orizuru); state encoded in line weight and marker geometry, never a colour swap (secession); records arriving in stepped bands rather than a uniform fade, applied to the project and certification rows rather than to every section wrapper, since the craft floor refuses one identical entrance per section (darkroom); every line drawing itself via `stroke-dashoffset`, rendering already-drawn under `prefers-reduced-motion` (zine). The authored motion is the pen — one moment, everywhere else still. Nothing on this page enters from `opacity: 0`.

**FINISH** — unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Repo URLs, demo URLs, project images, experience entries, thesis topic, projects 4–5: slots ship marked and empty; Nicolás fills `src/content/`.
- EN copy is authored from the ES source and needs his read before it goes public.

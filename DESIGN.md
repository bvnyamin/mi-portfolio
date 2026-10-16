---
name: Nicolás Villagrán — Portfolio
description: A single-page portfolio read as one continuous seismic recording — bone ink on an unlit ground, zero hue, elevation a hairline or nothing.
colors:
  ink: "#08090a"
  bone: "#f2f0eb"
  bone-2: "#a5a29b"
  bone-3: "#8a8782"
  grid: "#1d1e22"
  grid-quiet: "#14151a"
  rule: "#2e2f33"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  record:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 5.2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 78"
  lead:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.3125rem)"
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 78"
  data:
    fontFamily: "Martian Mono, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  hair: "1px"
  tight: "16px"
  data: "24px"
  field: "32px"
  row: "40px"
  row-lg: "56px"
  block: "64px"
  group: "80px"
  group-lg: "96px"
  register: "112px"
  register-lg: "144px"
components:
  action-link:
    textColor: "{colors.bone-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 0 10px"
  action-link-hover:
    textColor: "{colors.bone}"
  action-link-primary:
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 0 10px"
  rail-item:
    textColor: "{colors.bone-3}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  rail-item-active:
    textColor: "{colors.bone}"
  channel-option:
    textColor: "{colors.bone-3}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "14px 12px"
  channel-option-active:
    textColor: "{colors.bone}"
  record-row:
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "40px 0"
  image-frame:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0"
  skip-link:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
---

# Design System: Nicolás Villagrán — Portfolio

## Overview

**Creative North Star: "The Drum Sheet Read as a Negative"**

The page is one continuous seismic recording and the visitor is reading the drum. A printed time grid runs behind everything; a pen writes across it; the content is what the pen wrote. Quiet material is a flat trace and the work is where the pen jumps. This is not a decorative theme laid over a portfolio — the instrument is the information architecture. Six numbered registers run top to bottom, a sheet index sits pinned in the left margin with the title block at its foot, and the foot of the page closes the record with `SHEET 06 / 06 · FIN`.

The density is that of a technical recording rather than a brochure: hairline rules instead of containers, field labels instead of headings-with-eyebrows, measured facts instead of adjectives. Nothing is boxed. Where a conventional layout would reach for a card, a pill, a chip, or an icon set, this system sets the term as type on a ruled row and lets the rule do the separating. The ground is unlit (`#08090a`) and the ink is bone (`#f2f0eb`): the sheet is read as a photographic negative of a paper seismogram, which is what buys the darkness its reason to exist.

The system is deliberately colourless. There is no accent anywhere, and there is no shadow anywhere. Emphasis is built from three things only — value, type width, and line weight. Confirmed rejections: the portfolio card grid, the hero-metric row, the eyebrow label above a heading, the uniform fade-up on every section wrapper, and any glyph icon standing in for a label or for content.

**Key Characteristics:**

- Zero hue: seven neutral tokens, no accent, no decorative colour.
- One type family on its width axis (Archivo Variable, `wdth` 62–125), with a mono reserved strictly for measured data.
- Elevation is a 1px rule or nothing — no shadows, no glass, no backdrop blur, no corner radius.
- State is carried by line weight and marker geometry; value shift only follows it.
- Nothing enters from `opacity: 0`; entrances are pen draws and stepped bands.
- Every entrance lands at its finished state under `prefers-reduced-motion`.

## Colors

A single neutral ramp with no accent at all: bone ink on an unlit ground, with the time grid and the hairline rule sitting between them. Measured in OKLCH the chroma across the whole palette is 0.003–0.011, which is effectively zero — the bone family carries a faint warm cast (hue ≈ 81–89) and the ground and grid family a faint cool one (hue ≈ 246–277). That split is the only hue information in the system and it is never allowed to read as colour.

### Primary

The system has no accent. Bone is the primary ink, and emphasis is produced by moving up the neutral ramp, not sideways into a hue.

- **Bone** (`{colors.bone}`): the ink. Display type, register headings, project titles, the email set at display scale, active marks in the rail and the channel selector, and the one inverted surface on the page (the skip link, which flips to bone ground with ink text). 17.5:1 on the ground.
- **Dust** (`{colors.bone-2}`): all running prose — leads, body, project summaries — plus secondary annotations and the resting state of secondary actions. 7.8:1.
- **Pencil** (`{colors.bone-3}`): the faintest text value in the system. Measured data labels, field labels naming a data field, inactive rail and selector states, and the marked-empty slot notices. 5.6:1 — still a passing normal-text value, which is why the palette needs no fourth step.

### Neutral

- **Unlit Ground** (`{colors.ink}`): the page ground, everywhere. Also the ground of the fixed top bar and the drawer, which are opaque rather than translucent because there is no blur in this system.
- **Time Grid** (`{colors.grid}`): the printed measuring surface — the vertical hairlines of the drum sheet and the hero's own baseline rule.
- **Quiet Grid** (`{colors.grid-quiet}`): the same grid dimmed where it runs behind dense content, so the measuring surface never competes with the record written on it.
- **Hairline Rule** (`{colors.rule}`): every divider, row separator, image frame, leader line at rest, and the 1px track beneath an inactive marker. This is the system's entire elevation vocabulary.

Two browser surfaces are themed from the same ramp outside the token set: the scrollbar thumb (`#2c2d31`, hover `#424347`) and text selection, which inverts to a bone ground with ink text.

### Named Rules

**The One-Mechanism Motion Rule.** Every moving thing on this page is the drum or the pen, and nothing else moves. The pen writes the opening record (`pen-draw`, `stroke-dashoffset`), drops the arrival pick (`pick-in`, clip-path), and keeps riding the paper at rest (`pen-live`, an irregular 2.4s translate on a nib that enters only after the opening pass finishes). The drum turns under it: scroll drives a single horizontal transform on the time grid, which runs 9% wider than the viewport and clips on the x axis so the slack never becomes a scrollbar, and scroll scrubs each register's arrival trace through `pathLength`. Under the cursor a project's record runs again at full gain — a second trace on the same seed, swept in by clip-path, never faded. Three animations run on a resting first viewport. A new effect that cannot be described as the drum or the pen does not belong; scattered motion is what makes a page read as templated, and the brief's call for movement is answered by one mechanism doing more, not by more mechanisms.

**The Reduced-Motion Rule.** Every one of those lands at its finished state under `prefers-reduced-motion`, and each by its own route: CSS animations are zeroed and `pen-live` is cancelled outright in the media block, `[data-band]` drops its clip entirely, and the scroll-driven transforms are guarded in JavaScript with `useReducedMotion` rather than in CSS, because an inline motion value never sees a media query. A motion system that can only be stopped from the stylesheet is only half stopped.

**The Vendored Mark Rule.** Technology marks in the Stack register are single SVG paths vendored into `src/content/marks.ts` from `simple-icons` (CC0-1.0), drawn on a 24x24 viewBox and filled with `currentColor` at `1.15em`. They never carry brand colour: nineteen brand palettes would be the only hue on the sheet and would break the system that every other rule here serves. A term whose owner has no mark in the set, or that names a practice rather than a product, renders as its label alone — the label is the anchor, so the row never breaks. Marks sit at the tertiary value and rise to full ink with their label on hover, which is the same weight-and-value pairing the rail and the component selector use.

**The No-Hue Rule.** There is no accent colour and there never will be one. If something needs to come forward, it moves up the neutral ramp, widens, or gains line weight. A chromatic value introduced anywhere on this sheet breaks the negative.

**The Pencil Floor Rule.** `{colors.bone-3}` is the faintest value any text may take. Nothing on this page is set in a value closer to the ground than that, and the hairline rule is never used as a text colour.

**The Graded Portrait Rule.** The station plate is graded in the asset itself — converted to greyscale and run through an S-curve that drops its backdrop onto the page ground (measured 26–41 down to 8.8–11.4 against a ground of 9), so the hairline reads as a mark on the sheet and the subject emerges from the same darkness rather than sitting in a lighter box. CSS filters are not used for it: a filter cannot bring a backdrop onto the ground without also flattening the subject, and the graded asset ships at a fraction of the weight.

**The Evidence-In-Colour Exception.** Project screenshots ship in their own colour, ungraded and undesaturated, by Nicolás's explicit decision taken after he was told they become the only hue on an otherwise zero-hue page. The reasoning that won: a screenshot is evidence of the work, and the work has a colour; showing the real interface outranks the system's consistency here. This is a bounded exception, not a loosening of the No-Hue Rule — it applies to screenshots of built software and to nothing else. Every other surface, the portrait and the technology marks included, stays neutral. A future pass must not "correct" these back to greyscale.

**The Served-Weight Rule.** Photographic rasters ship as WebP only, at two widths in a plain `<img srcset>`, sized by a real `sizes` attribute, with intrinsic `width`/`height` set so nothing reflows on load. Masters stay in the repository under a `-source` suffix and are never imported. `build.assetsInlineLimit` is `0`: inlining a small variant as a data URI charged every visitor for a size most of them never request, and base64 does not compress. There is no JPEG fallback: every browser this page targets has decoded WebP since 2020, and the fallbacks were weight in the repository that no visitor ever downloaded.

## Typography

**Display Font:** Archivo Variable, self-hosted, width axis `wdth` 62–125 (with `ui-sans-serif`, `system-ui`)
**Body Font:** Archivo Variable at Normal width — the same family
**Label/Mono Font:** Martian Mono, weights 400 and 500 (with `ui-monospace`, `Cascadia Mono`)

**Character:** One grotesque stretched and compressed along its own width axis does all the work a two-family pairing normally does, so the page never reads as two voices arguing. Expanded at display scale has the stamped authority of a station nameplate; Narrow at label scale reads like the printed legend on an instrument. The mono is not a second voice — it is the instrument's own readout, and it appears only where a number is being reported.

### Hierarchy

- **Display** (600, `clamp(2.75rem, 8.5vw, 6rem)`, line-height 0.88, `-0.035em`, Expanded, uppercase): the nameplate, once, in register 01. The ceiling of the system.
- **Headline** (600, `clamp(1.75rem, 4.6vw, 3rem)`, line-height 1.02, `-0.03em`, Expanded): the register heading, set on the same baseline as its mono sheet number.
- **Record** (600, `clamp(1.75rem, 5.2vw, 3.5rem)`, line-height 1.02, `-0.035em`, Expanded): a project title, and the email address at the foot of the sheet. Deliberately larger than the register heading above it — the work is where the pen jumps. The email takes the same treatment at `clamp(1.375rem, 5.4vw, 3.25rem)` because it is the one thing on the page that must be impossible to miss.
- **Title** (600, `clamp(1.25rem, 2.4vw, 1.625rem)`, line-height 1.25, `-0.015em`, Narrow): timeline entries, the three component lines, certification rows. Subordinate headings drop out of Expanded into Narrow rather than merely getting smaller.
- **Lead** (300, `clamp(1.0625rem, 1.5vw, 1.3125rem)` rising to `clamp(1.1875rem, 2.4vw, 1.75rem)` on the opening paragraph of a register, line-height 1.42–1.55, Normal): one paragraph directly under a heading. Capped at 46ch when it is the register's opening statement.
- **Body** (300, `1.0625rem`, line-height 1.65, Normal): running prose. Capped between 46ch and 68ch depending on column; no measure on the page exceeds 78ch.
- **Label** (500, `0.8125rem`, `0.1em`, uppercase, Narrow — the `field-label` utility): anything a visitor reads as language at label scale. Roles, organisations, issuers, stack headings, group subheadings, marked-empty notices, the footer rights line. Actions use the same face at `0.14em`.
- **Data** (500, `0.625rem`, `0.08em`, uppercase, tabular-nums, mono — the `data-label` utility): a reading, never a word. Coordinates, station codes, hour ticks, sheet counters, years, phase marks.

### Named Rules

**The Width-Axis Rule.** Hierarchy is width before it is size. Display and record type is Expanded (125%), prose is Normal (100%), labels and subordinate headings are Narrow (78%). Never add a second family to create contrast the width axis already provides.

**The Measured-Data Rule.** Martian Mono is reserved for measurements — coordinates, timestamps, station codes, counters, sheet numbers, years, phase marks. Anything a visitor reads as language belongs in `field-label`, never in mono. A role, an organisation, or an issuer set in mono is a bug, not a style.

**The Six-Rem Ceiling.** Display type stops at `6rem` (96px measured) and tracking never tightens past `-0.035em`. Those are the two walls of the type system.

## Layout

One container governs the whole sheet: centred, `max-width: 1180px`, with a `20px` gutter rising to `32px` at `sm`. From `lg` up the container takes a `216px` left inset and a `48px` right one — the left inset is the margin the fixed register rail occupies at `lg`. The rail itself is pinned to the viewport's left edge at `32px`: up to `1180px` it sits exactly in that margin, and above it the sheet centres while the index stays on the window edge. That was Nicolás's call (oct 2026), taken over an earlier version that anchored the rail to the centred box; do not re-anchor it.

Vertical rhythm is set by the register wrapper: `80px` of padding at phone width, `112px` at `sm`, `144px` at `lg`. Inside a register the sequence is fixed — the arrival rule and its trace (`56–64px` tall), the sheet number and heading on one baseline (`24px` below), an optional lead (`24px`), then the register's content (`56–64px`). Related groups within a register separate at `80–96px`, field groups at `32px`, a label from its value at `16px`. Repeated records are ruled rows of `40px` padding rising to `56px` at `sm`, separated by hairlines rather than gaps.

Two breakpoints carry everything: `sm` (640px) swaps stacked rows for label/value columns and turns on the faintest grid lines, and `lg` (1024px) is the structural one — below it the margin rail is replaced by a fixed top bar with a drawer index and a scroll-progress hairline, above it the rail appears and the top bar disappears. Multi-column content uses a 12-column grid at `lg` only (7/5 for a project row, 4/8 for the station plate); the three component lines use an equal 3-column grid from `sm`. The page is clipped against horizontal overflow at the body, and nothing overflows at 375px.

### Named Rules

**The One Container Rule.** Every section shares the single sheet container; the margin rail is the one deliberate exception, pinned to the viewport edge. A section that invents its own max-width or padding breaks the sheet's left datum, which is the one alignment the entire page is built on.

**The Full-Bleed Record Rule.** Traces and the time grid run edge to edge because the drum sheet does; type always holds the sheet's own margin. The hero nameplate is locked to the station block's datum, never to the trace's.

## Elevation & Depth

There is no elevation in this system. No `box-shadow`, no `filter: drop-shadow`, no `backdrop-filter`, no translucent panel, no gradient anywhere in the source. Depth is produced by exactly two devices: a 1px hairline in `{colors.rule}`, and value separation on the neutral ramp. Where a layer genuinely sits above the page — the fixed top bar, the drawer index — it is painted in opaque `{colors.ink}` with a hairline border and nothing else. The time grid supplies the only sense of a surface underneath, and it does that by being printed on the ground rather than floating over it.

### Named Rules

**The Hairline-Or-Nothing Rule.** A surface is separated by a 1px rule or it is not separated at all. If a layout feels unclear, the answer is a rule, more space, or a value step — never a shadow and never a radius.

**The Opaque Overlay Rule.** Anything that covers the sheet is opaque ink. Translucency and blur would reveal the grid moving behind an overlay, which reads as glass and breaks the negative.

## Shapes

Every corner on the page is square. The system carries one radius value — `0` — and the only rounded thing anywhere is the scrollbar thumb, which is a browser surface rather than a page surface. Image frames are a hairline border with no radius and no inner padding, the station plate held at a `4/5` aspect; project image slots take the same frame.

The recurring geometry is instrument geometry, drawn inline as SVG rather than drawn from an icon set: the seismogram polyline itself (a true 1px hairline stroke, round caps and joins, generated from a seeded PRNG so the same section draws the same line on every machine), the filled isosceles triangle at the head of a pick mark (`8×7`), the arrowhead travelling along an action's leader line (`14×10`), and the drawer's disclosure triangle (`12×8`). Those four marks plus the hairline are the entire form vocabulary. Markers are rectangles of two thicknesses — `1px` at rest, `3px` active — and the time axis in the trajectory register is a single `1px` vertical rule with `8–12px` ticks crossing it.

### Named Rules

**The Square Sheet Rule.** Nothing on the sheet has a corner radius. A rounded container is the single fastest way to make this page look like a template.

**The Drawn-Marks-Only Rule.** The only marks on the page are instrument geometry drawn inline: trace, triangle, arrowhead, hairline. No icon library, no icon font, and no glyph standing in for a label or for content — if a thing needs naming, it gets a `field-label`.

## Components

### Buttons

There are no filled buttons and no pills on this sheet. Every action is an annotation written the way the instrument writes one.

- **Shape:** square (`{rounded.none}`), no background, no border box; the only chrome is a leader line along the bottom edge.
- **Primary** (`action-link-primary`): `{typography.label}` at `0.14em` in `{colors.bone}`, padded `14px 0 10px`, over a leader line at 40% bone. An arrowhead sits inline at the end of the label.
- **Secondary** (`action-link`): the same geometry in `{colors.bone-2}` over a `{colors.rule}` leader line.
- **Hover / Focus:** a full-weight bone line draws across the leader from the left (`scale-x` 0→1, 500ms), the arrowhead travels `4px` right (400ms), and the label lifts to `{colors.bone}` (300ms). Focus-visible produces the same draw, so keyboard and pointer read identically.
- **Display action:** the email at the foot of the sheet is the same pattern at `record` scale — type over a hairline that draws across on hover.

### Cards / Containers

There are none, by design. Repeated content is a **ruled row** (`record-row`): no background, no border box, no radius, no shadow — a `{colors.rule}` hairline on top, `40px` of padding rising to `56px` at `sm`, and a border on the bottom only for the last row in a set. A project row holds its title and year on one baseline, its own trace beneath, then a 7/5 column split for summary and stack.

- **Hover (project row):** the title slides `8px` right (500ms, `ease-pen`), and the row's trace thickens from `1px` to `1.4px` and lifts from `{colors.bone-3}` to `{colors.bone}`. The geometry carries it; the value follows.
- **Image frame** (`image-frame`): a `1px` `{colors.rule}` border, square, content clipped, raster desaturated and tonally graded onto the ground.

### Chips

Not used, and not to be introduced. Stack terms and skill channel items are set as bare type — Narrow at `0.875rem`/`clamp(1rem, 1.7vw, 1.25rem)` — spaced on a wrapping row. Terms are set, not boxed.

### Inputs / Fields

The page is static and has no form. What it has instead is **field rows**: a `field-label` in `{colors.bone-3}` naming the field, its value beneath or beside it, hairline-separated. The channel list is a definition list on this pattern with the label column at `clamp(132px, 16vw, 196px)`. The caret colour and focus ring are themed globally for any input a future surface adds.

### Navigation

- **Margin rail** (`lg` and up): the sheet index pinned in the left margin, vertically centred, with the title block at its foot. Each entry is a `28px` marker, a mono counter, and a Narrow register name, at `10px` vertical padding. Default `{colors.bone-3}`, hover `{colors.bone-2}`, active `{colors.bone}` — but the state is the marker: a `1px` track with a `3px` bone bar animating from `0%` to `100%` width (500ms, `ease-pen`). The foot of the rail carries the three outcomes the page exists for — email, GitHub, CV — so none of them depends on reaching the bottom of the sheet.
- **Top bar** (below `lg`): opaque ink, the short name at left, the channel selector and a counter/disclosure button at right, and a `1px` `{colors.rule}` track under it with a bone bar scaled by scroll progress. The index opens as a height-animated drawer with the same marker-weight state story and the same three actions repeated at its foot. Escape closes it.
- **Channel selector** (`channel-option`): the locale switch, written as the control that picks which axis of the instrument you are reading. Mono option label, `14px 12px` padding, with a rule beneath that is `1px` `{colors.rule}` when inactive and `3px` `{colors.bone}` when active.
- **Skip link** (`skip-link`): the one inverted surface — bone ground, ink text, `8px 16px`, square.

### The Trace

The page's signature component and its only generated media. A seeded seismogram: background noise at two octaves under an exponential event envelope, sampled at one point per `1.9–3.2` CSS pixels and emitted as an SVG polyline. The SVG is sized in measured pixels rather than a stretched `viewBox`, so the stroke stays a true hairline on both axes and the noise keeps the same grain at every width — a drum does not stretch its record to fit the sheet. Amplitude is texture and never a measurement of anything about the work.

Three uses, each with its own motion:

- **The hero record:** draws itself once on mount via `stroke-dashoffset` (2.6s, `ease-pen`, 0.15s delay), with a pick mark wiping down its own line at 61% width labelled `P`.
- **The register arrival:** the rule across the top of each register, scroll-scrubbed — the pen's position is bound to scroll progress between `start end` and `start 35%`, so the arrival is literally recorded as the register comes into view. Each register declares its own amplitude (0.46–0.95), so attention is directed by the recording.
- **The record trace:** one per project row and per component line, arriving in stepped bands rather than drawing.

### Named Rules

**The Weight-Carries-State Rule.** Active state is geometry: a `3px` mark against a `1px` track. Value shift follows the geometry and never carries the state alone, and a colour swap is never the state.

**The Pen-Is-The-Motion Rule.** The authored moment is the pen writing. Everything else holds still. One page, one moving thing at a time.

**The Nothing-Fades-In Rule.** No element on this page enters from `opacity: 0`. Lines enter by `stroke-dashoffset` (the `pen-draw` keyframe); records enter by discrete `clip-path` bands (the `band-in` keyframe — three held steps over 0.72s with `steps(1, end)`, read like a test strip); marks enter by wiping down their own line (`pick-in`, 0.42s). All three are CSS-driven, because a script-driven tween can be dropped mid-stroke by a throttled tab and leave the record permanently half-written.

**The Content-Never-Waits Rule.** Only generated media is ever withheld for an entrance. Names, headings, prose and links are on the sheet from first paint, and the band reveal is gated by a hook that never hides what is already on screen, treats a missing `IntersectionObserver` as arrived, and carries a 6-second backstop. A reveal that can fail closed is worse than no reveal.

## Do's and Don'ts

### Do:

- **Do** build hierarchy from value, type width, and line weight only. Those three are the whole emphasis system.
- **Do** separate content with a `1px` `{colors.rule}` hairline and vertical space. A ruled row is this system's card.
- **Do** keep display type at or under `6rem` and tracking at or above `-0.035em`.
- **Do** set anything a visitor reads as language in `field-label`, and reserve `data-label`'s mono for actual measurements.
- **Do** route every section through the single sheet container so the left datum holds. The margin rail is the exception: it stays on the viewport's left edge.
- **Do** encode state as a `3px` mark against a `1px` track, letting value follow the geometry.
- **Do** keep text at `{colors.bone-3}` or lighter, and keep any measure at or under 78ch.
- **Do** desaturate every photographic raster, grade its backdrop onto the ground where you control the asset, and give it a hairline frame with square corners.
- **Do** route any new motion through the drum or the pen, and give it a reduced-motion path in the same change.
- **Don't** animate a fact in. Text, names, numbers and headings are on screen at first paint; only the instrument moves.
- **Do** draw a technology mark in `currentColor` at the label's own size. Brand marks are vendored paths on a 24x24 viewBox, never coloured; a term with no mark renders as text alone rather than taking a substitute glyph.
- **Don't** ship a photograph as PNG. The portrait arrived as a 600 KB PNG carrying a fully opaque alpha channel; as a graded WebP it serves at 9 KB.
- **Do** ship an absent artifact as a marked, named empty slot in a `field-label` — a visible placeholder is honest, invented content is not.
- **Do** land every entrance at its finished state under `prefers-reduced-motion`, and drive entrances from CSS rather than the frame loop.

### Don't:

- **Don't** introduce an accent colour, a gradient, or a colour photograph. Seven neutrals is the entire palette.
- **Don't** add a `box-shadow`, a `drop-shadow`, a `backdrop-filter`, or a translucent panel. Elevation is a hairline or nothing.
- **Don't** give anything a corner radius.
- **Don't** box a term. No cards, no pills, no chips, no tag backgrounds — stack items and skills are set as type on a row.
- **Don't** add an icon library, an icon font, or a glyph standing in for a label or for content. The only marks are the trace, the triangle, the arrowhead, and the hairline, drawn inline.
- **Don't** animate anything in from `opacity: 0`, and don't give every section the same entrance — the register arrival is a scrub and the record arrival is a band.
- **Don't** withhold text, a heading, or a link behind a scroll observer. Only generated media waits.
- **Don't** add a second type family to create contrast the width axis already provides, and don't set a role, organisation, or issuer in mono.
- **Don't** place an eyebrow or kicker above a heading. A `field-label` names a data field or heads a subordinate group; it is never decoration stacked over a larger heading.
- **Don't** let a section declare its own container width, or lock the nameplate to anything but the station block's datum.

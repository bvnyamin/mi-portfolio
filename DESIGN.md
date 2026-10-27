---
name: Nicolás Villagrán — Portfolio
description: A personal index page set as one column of type on black, where the only colour is a hand-drawn vermilion line under the things you can open.
colors:
  night: "#0a0a0a"
  paper: "#f2f2f0"
  paper-2: "#a8a8a4"
  paper-3: "#8b8b87"
  line: "#262626"
  accent: "#ff6a3d"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.6vw, 6.75rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  address:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 4.4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2.9vw, 2.375rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-row:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  intro:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.45vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono Variable, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.08em"
  mark:
    fontFamily: "Geist Mono Variable, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
rounded:
  focus: "4px"
  row: "10px"
  frame: "14px"
  card: "16px"
  sticker: "20px"
  pill: "9999px"
spacing:
  container: "1200px"
  gutter: "24px"
  gutter-sm: "40px"
  gutter-lg: "64px"
  section-top: "96px"
  section-top-lg: "128px"
  heading-column: "19rem"
  column-gap: "40px"
  column-gap-lg: "48px"
  row-y: "24px"
  card-pad: "20px"
  card-pad-sm: "24px"
  sticker-frame: "8px"
components:
  header-solid:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    height: "56px"
  email-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  email-pill-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.night}"
  ink-link:
    textColor: "{colors.paper}"
  ink-link-hover:
    textColor: "{colors.accent}"
  section-heading:
    textColor: "{colors.paper}"
    typography: "{typography.headline}"
    width: "{spacing.heading-column}"
  work-row:
    textColor: "{colors.paper}"
    padding: "24px 0"
  work-row-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    rounded: "{rounded.row}"
  stack-card:
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad-sm}"
  stack-card-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
  portrait-sticker:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.sticker}"
    padding: "{spacing.sticker-frame}"
    width: "min(19rem, 72vw)"
  screenshot-frame:
    rounded: "{rounded.frame}"
  skip-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Nicolás Villagrán — Portfolio

## Overview

**Creative North Star: "Tinta sobre negro"** (Ink on Black)

The page is a personal index: one column of type on a black page, read top to bottom like a list of what one engineer has done and where to find it. Type carries everything. There are no panels, no surfaces stacked on surfaces, no illustration; structure comes from hairlines, a fixed left column for headings, and the contrast between the sans text and a small uppercase mono voice for labels, dates and link rows.

One colour does all the pointing. Vermilion appears as a line drawn by hand under the words that lead somewhere, as the hover colour of those words, and in the browser chrome that belongs to the reader (selection, focus ring, scrollbar thumb). Everything else is night, paper and two quieter greys of paper. Colour photography is the second, deliberate exception to the monochrome: the portrait and the project screenshots are shown in full colour, framed so they read as objects placed on the page.

Speed is part of the look. Scroll is native, nothing is blurred, nothing is tied to scroll position, and every motion is a one-shot CSS transition or animation: an underline that draws itself, a section rule that extends once, a corner grid that fades in, a row that inverts under the pointer. All text is present at first paint. Confirmed rejections: glassmorphism and blur (rejected by the owner as slow, "el scroll lento, se pega"), smooth-scroll libraries, and scroll-scrubbed animation.

**Key Characteristics:**
- Black ground, paper text, one vermilion accent reserved for things that open.
- Geist for everything read; Geist Mono, small and uppercase, for everything labelled.
- Every section: a hairline across the top, the heading in a 19rem left column, content to the right.
- Hover states invert to paper; links shift to vermilion.
- Hand-drawn SVG underlines that draw once on arrival and redraw on hover.
- Colour only in photographs: the portrait as a crooked white-framed sticker, screenshots in hairline frames.
- One-shot CSS motion only; measured whole-page scroll p95 under 9ms per frame with no long animation frames.

## Colors

A near-black and warm off-white monochrome with a single hot vermilion that only ever points.

### Primary
- **Vermilion** (accent): the only chromatic colour in the interface. It draws the hand-made underline under every link, becomes the link's text colour on hover, fills the email pill on hover, rings focused elements (2px outline, 3px offset), highlights text selection (night text on vermilion) and colours the scrollbar thumb. The period of the `nv.` mark (and the dot in the favicon) is vermilion: the identity's one resting use, which licenses no other.

### Neutral
- **Night** (night): the page ground, the solid header once scrolled, the text colour of every inverted (paper) state, and the browser `theme-color`.
- **Paper** (paper): headings, primary text, link text at rest, the email pill, the portrait's sticker frame, the "ongoing" dot in the work list, and the fill of every hover inversion.
- **Paper, quieter** (paper-2): body paragraphs, section leads, the project role line and the stack items. A step down from paper so the headings and links lead.
- **Paper, quietest** (paper-3): mono metadata (dates, years, durations, tech lists, the footer), separators (`·`, `/`), inactive language options, and the drawn section rule.
- **Hairline** (line): every border and rule at rest: list rows, stack cards, screenshot frames, the footer rule, the scrolled header's bottom edge, and the undrawn track under each section rule.

### Named Rules
**The Only-What-Opens Rule.** Vermilion marks only things that open: links, the email pill, focus, selection, the scrollbar. It is never a heading colour, never a resting fill, never a status. The "ongoing" dot in the work list is paper, not vermilion.

**The Two Exceptions Rule.** Photography is shown in full natural colour (the portrait and every project screenshot); it is the only colour on the page besides vermilion. Brand logos are not: technology marks are drawn in the text colour.

**The Inverted Hover Rule.** On hover a row or card turns paper and its text turns night; its secondary text drops to night at 60–80% opacity. No other hover fill exists.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist Variable (same stack)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, Cascadia Mono, monospace)

**Character:** One neutral grotesque set tight and semibold for the name and headings, relaxed and grey for reading; its mono sibling, small and widely tracked in capitals, is the page's second voice for anything that is a label, a date, a stack list or a row of links.

### Hierarchy
- **Display** (600, clamp(3.25rem, 8.6vw, 6.75rem), 0.94, -0.04em): the name on the cover only, broken over two lines.
- **Address** (600, clamp(1.5rem, 4.4vw, 3.25rem), 1.1, -0.035em): the email address in Contacto, the largest link on the page, allowed to break anywhere on narrow screens.
- **Headline** (600, clamp(1.875rem, 2.9vw, 2.375rem), 1.02, -0.035em): section headings in the left column.
- **Title** (600, clamp(1.375rem, 2vw, 1.75rem), 1.1, -0.03em): project names. It stays at least a 1.36 step below the headline at small and mid widths (1.45 at 1200px).
- **Row title** (600, 1.25rem, snug, -0.02em): work-list titles and in-section subheadings; smaller row names step to 1.125rem and stack-card names to 1.0625rem.
- **Lead** (500, clamp(1.375rem, 2.2vw, 1.75rem), 1.35, -0.02em, max 40ch, balanced): the opening statement of Perfil.
- **Intro** (400, clamp(1.125rem, 1.45vw, 1.3125rem), 1.65): the cover paragraph, in paper-2 with paper links.
- **Body** (400, 1.0625rem, 1.7): reading paragraphs at 62–64ch; row bodies use 1rem at 1.65 and 56–62ch.
- **Body small** (400, 0.9375rem, 1.6): section leads (max 30ch), organisations, issuers, fact values.
- **Label** (Geist Mono 500, 0.8125rem, 1.6, 0.08em, uppercase): every label, date, year, duration, tech list, link row, the language switch, the email pill and the footer. Dates and phone numbers use tabular figures. Stack items keep the mono face but drop the uppercase so product names read as written.

### Named Rules
**The Two Voices Rule.** Sans is for what is read, mono is for what is labelled or listed. There is one mono style (the label); do not create a second size or weight of it.

**The Tight-Top Rule.** Tracking tightens as size grows: -0.04em on the name, -0.035em on headings, -0.03em on project titles, -0.02em on row titles and the lead; body text is untracked; only the mono label is opened up (+0.08em).

## Layout

One centred container, 1200px wide, with 24px gutters on phones, 40px from 640px and 64px from 1024px. Every section aligns to it.

The cover fills at least the small viewport height. At 1024px and up it is two columns: the text column (max 42rem) on the left and the portrait sticker on the right, top-aligned; below that the sticker follows the text. The text column runs name, two mono lines, the intro paragraph, a mono row of four links separated by `·`, then a short mono project list.

Every other section uses the same skeleton: 96px of top padding (128px from 1024px), a 1px hairline across the full container, then 40px below it a grid with the heading (and optional lead) in a 19rem left column and the content in the remaining width, 48px apart. Below 1024px the heading stacks above the content with a 40px gap. Section anchors offset by 64px so the fixed header never covers a heading.

Lists are ruled, not boxed: a hairline on top of the list and one under each row, rows padded 24px vertically (20px for certifications). From 640px rows split into a fixed mono column (11rem for dates in the work list, 8rem for certification dates, 14rem for profile line names) and a fluid content column 32px apart. The stack is a two-column grid of cards from 640px with 12px gaps; a final card left alone spans both columns. Project screenshots sit in a two-column grid with 16px gaps from 640px.

## Elevation & Depth

The system is flat. Depth comes from tone (paper on night, night on paper when inverted) and from 1px hairlines, never from layered translucent surfaces. There is no backdrop-filter anywhere; the fixed header is transparent over the cover and becomes solid night with a hairline bottom edge once the page has scrolled 40px.

### Shadow Vocabulary
- **Sticker lift** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.9)`): under the portrait sticker only, so the white frame reads as a physical card stuck on the page.

### Named Rules
**The One Shadow Rule.** The portrait sticker is the only element with a shadow. Rows, cards, frames and the header are flat.

**The Solid Header Rule.** The header is never translucent or blurred; past 40px of scroll it is solid night.

## Shapes

Corners soften as objects become more physical. Text structures (rules and rows) are square-ended lines; the inverted row's paper layer rounds to 10px; screenshots sit in 14px frames; stack cards are 16px; the portrait sticker is 20px outside with a 14px photo inside an 8px white border; the email pill and skip link are full pills. Focus rings round to 4px.

The portrait is the one rotated object: it rests at 4° and straightens on hover. The cover's corner grid is a 44px square lattice of 1px lines at 7% white, anchored to the bottom-right and dissolved toward the text by a radial mask intersected with a fade at the cover's foot, so it never sits behind a word.

## Components

### Navigation (fixed header)
Quiet, always reachable, never decorative.
- **Structure:** 56px high, in the container. Left: the `nv.` mark in Geist Mono 600 at 0.9375rem, period in vermilion, linking to the cover. Right: the `es / en` switch in mono labels (active in paper, inactive in paper-3, paper on hover) and the email pill.
- **States:** transparent with a transparent border over the cover; solid night with a hairline bottom border after 40px of scroll (300ms colour transition, no blur). The scroll listener is passive and only sets state when the threshold is crossed.
- **Email pill:** paper fill, night mono label, full pill, 6px × 16px; fills vermilion on hover (300ms).

### Ink Link (signature)
The page's only link treatment: a word or phrase in paper, underlined by hand in vermilion.
- **Drawn variant (default):** a single wobbly SVG path (2.2 stroke, round caps) sits 0.32em below the baseline, 0.42em tall, stretched to the word's width. It is held undrawn (stroke-dashoffset 1) until the link first enters the viewport, then draws in 0.9s with the house ease, staggered 0.12s per link in reading order from a 0.15s base. On hover or keyboard focus it redraws from the left in 0.55s and the text turns vermilion (300ms). The link does not wrap.
- **Wrap variant:** for links inside long prose that must break across lines. It uses the browser's wavy underline (1.5px, 0.3em offset), transparent until the link is first seen, then inked to vermilion over 0.9s; text turns vermilion on hover.
- **Usage:** cover paragraph links, the cover's mono link row, project links (with an up-right arrow that nudges on hover), the contact address and the contact row. External links open in a new tab.

### Section
The repeating unit of the page.
- **Rule:** a 1px hairline track in line colour; over it a paper-3 line scales from the left across the full width in 1.2s, once, when the section is 15% into the viewport. It is a transform on one element, never scroll-linked.
- **Head:** headline-style h2 in the 19rem column, with an optional body-small lead in paper-2 under it.

### Work Row (Trayectoria)
- **Rest:** hairline-ruled row; left column shows the date range and duration in mono (paper-3), with a 6px paper dot and "ongoing" for the current role; right column has the row title, organisation, body (paper-2) and a mono tech list (paper-3).
- **Hover:** a paper layer fades in behind the row (200ms), bleeding 16px past each side (20px from 640px) with 10px corners, so the hairlines above and below stay flush with every other list. Text turns night; secondary text drops to night at 60–80%; the dot turns night.

### Cards / Containers (Stack)
- **Corner Style:** 16px.
- **Background:** none at rest; paper on hover.
- **Border:** 1px line at rest; paper on hover.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Internal Padding:** 20px, 24px from 640px.
- **Content:** card name in sans 600 at 1.0625rem; items as mono labels without uppercase in paper-2, each led by a 14px technology mark drawn in currentColor (vendored simple-icons paths). A term with no mark keeps its slot with a 3px dot at 60% opacity, so the row keeps one rhythm. On hover the card inverts and items drop to night at 75%.

### Portrait Sticker
The colour photograph of the owner, treated as an object.
- **Shape:** paper frame, 8px padding, 20px corners; the 4:5 photo inside has 14px corners. Width min(19rem, 72vw).
- **State:** rotated 4° at rest; on hover it straightens, scales to 1.03 and lifts 4px over 0.6s. Transform only.
- **Depth:** the sticker lift shadow.

### Project Entry and Screenshot Frame
- **Entry:** title-style h3 with the year in mono paper-3 on the same baseline, role in mono paper-2, summary in body paper-2, stack in mono paper-3, then Ink Links (or a mono "private code" note with a lock icon). Entries are separated by hairlines.
- **Screenshot frame:** 14px corners, 1px line border, a near-black placeholder while the image loads, 16:10 crop anchored to the top. Screenshots are always full colour and lazy-loaded.

### Corner Grid
A measuring surface on the cover only: the 44px lattice described in Shapes fades and settles in (opacity 0 to 1, scale 1.04 to 1) over 1.6s after a 0.2s delay, once, on load. It is non-interactive and hidden from assistive technology.

### Footer
A hairline, then the copyright and the build note in mono paper-3, stacked on phones and split left/right from 640px.

## Do's and Don'ts

### Do:
- **Do** keep vermilion on things that open: drawn underlines, link hover text, the email pill's hover fill, the focus ring, text selection and the scrollbar thumb.
- **Do** open every section with the Section pattern: a top hairline that draws once, the heading in the 19rem left column, the content on the right; stack below 1024px.
- **Do** set every label, date, tech list and link row in the single mono label style (Geist Mono 500, 0.8125rem, 0.08em, uppercase), with tabular figures for numbers.
- **Do** underline short links with the drawn scribble and links inside wrapping prose with the wavy variant.
- **Do** express hover as an inversion to paper (200ms) for rows and cards, or as a shift to vermilion (300ms) for links.
- **Do** keep every motion one-shot (on first view or on hover), animating only transform, opacity, stroke-dashoffset or colour, eased with cubic-bezier(0.16, 1, 0.3, 1).
- **Do** render all text at first paint; only rules, underlines, the grid and hover states move.
- **Do** show the portrait and project screenshots in full colour, in their frames.
- **Do** honour reduced motion: every scribble and wavy line shown already drawn, every animation and transition effectively instant.
- **Do** draw technology marks in currentColor, with a 3px dot holding the slot when a term has no mark.

### Don't:
- **Don't** use vermilion on headings, resting fills, status indicators or decoration; the "ongoing" dot is paper.
- **Don't** add a second accent colour, tinted surfaces or gradient text.
- **Don't** use backdrop-filter or blur, smooth-scroll libraries such as Lenis, or any animation tied to scroll position; the page must hold scroll p95 under 9ms per frame with no long animation frames.
- **Don't** fade or slide text blocks in on entry; content is never hidden behind an animation.
- **Don't** add shadows beyond the portrait sticker's, or box content into panels; lists are ruled with hairlines.
- **Don't** show technology logos in their brand colours.
- **Don't** make the header translucent; past 40px it is solid night.

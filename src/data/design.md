---
version: "superdesign-alpha"
name: "Warm-frame portfolio light"
description: "White-dominant editorial system built around a chestnut-framed device mockup, hand-scrawled labels, and a single black-into-charcoal band for process content."
colors:
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#5E5E5E"
  border-muted: "#D6D6D6"
  accent-amber: "#E0A533"
  accent-blue: "#0000EE"
  chip-tint: "#CCDAE3"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "1.15"
    letterSpacing: "-3.4px"
  headline-md:
    fontFamily: "Geist"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "1.35"
    letterSpacing: "-1.6px"
  body-md:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "1.75"
  label-md:
    fontFamily: "Geist"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.8"
    letterSpacing: "-0.8px"
  body-base:
    fontFamily: "Geist"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-script:
    fontFamily: "Nanum Pen Script"
    fontStyle: "normal"
    role: "hand-drawn micro-labels (e.g. carousel arrows, logo mark caption)"
  legacy-serif:
    fontFamily: "Times New Roman"
    role: "fallback/system serif, used sparingly if at all"
spacing:
  base: "8px"
  gap: "16px"
  gap-lg: "24px"
  section-padding: "180px"
  micro: "10px"
rounded:
  control: "4px"
  card: "27px"
  card-lg: "32px"
  pill: "696px"
  avatar: "696px"
components:
  navbar:
    background: "transparent"
    width: "100% (edge-to-edge)"
    height: "60px"
    radius-tl: "0px"
    radius-tr: "0px"
    radius-br: "0px"
    radius-bl: "0px"
    position: "sticky"
    item-count: 5
  button-primary-hero:
    background: "#000000 (observed near-black solid)"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "~48px (observed)"
    note: "hero primary is the black pill 'Book an intro call', not the navbar glass control"
  button-nav-cta:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
  button-outline:
    background: "transparent"
    border: "1px solid #D6D6D6"
    text-color: "#000000"
    radius: "9999px"
    height: "~36px"
  button-fill-accent:
    background: "#FF2600"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "~36px"
  card-device-mockup:
    background: "#5E5E5E frame on chestnut/amber border"
    radius: "32px"
    padding: "0px"
    border: "amber ring, ~8-10px"
    shadow: "`rgba(0, 0, 0, 0.2) -24px 24px 24px 0px`"
  card-project-detail:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
    border: "hairline #D6D6D6 dividers between meta rows"
  card-testimonial:
    background: "#F7F7F7"
    radius: "27px"
    padding: "24px"
  card-navbar-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Warm-frame portfolio light

Source: https://deliver.framer.website/

## Overview
This is a white-dominant editorial-minimalist system with a portfolio/showroom sensibility: an oversized, tight-tracked Geist display headline sits over a near-empty white canvas, then hands off to a single chestnut-and-amber-bordered device mockup that carries almost all the mid-page visual richness. A black full-bleed band interrupts the white rhythm once, mid-scroll, to hold a plainer process list. The identity reads as a hybrid of Swiss-grid restraint (tight negative tracking, hairline dividers, left-aligned body copy) and a portfolio-site theatricality (a hand-scrawled script accent, star ratings, avatar stacks) — polish delivered through one recurring hero-object (the mockup) rather than through color.

## Composition
The first screen is centered and sparse: a small circular badge, then the display headline (two lines, centered), a short centered subhead, a black pill CTA paired with a stacked-avatar trust cluster, and a hand-labeled carousel control below. This is a deliberate choice to keep the very top of the page nearly colorless and let a single large framed device mockup — introduced immediately below the fold line — carry all the visual density; the rejected alternative would have been a busy gradient hero with baked-in product screenshots. Scrolling further, the page repeats a rhythm of: mockup → left-aligned project title/description block → right-column metadata rows (link, format, duration, reviewer) → a light-gray quote card with a star row. This project-detail rhythm repeats at least three times (chestnut frame, then a second mockup, then a third). The page then breaks pattern entirely into a black full-bleed band holding a plain vertical list of four labeled process steps, before returning to a white card-frame section and, finally, an all-white/near-blank terminus that stands in for the footer band.

## Colors
White (#FFFFFF, ~42% declared / ~65% rendered including near-white grays) is the page role, not a hero background — it is the resting surface for nearly the whole document. Black (#000000, ~37% declared / ~21% rendered) is rationed to three jobs: the primary CTA fill, all display-headline ink, and the one full-bleed process band. Amber (#E0A533, ~1.8%) is used only as the device-mockup's outer frame/border and a small "available" chip fill, functioning as the single warm accent against the otherwise monochrome field. A pale blue-gray (#CCDAE3, ~1.8%) tints small chips/badges. Mid-gray (#5E5E5E) and light gray (#D6D6D6, #F7F7F7) carry secondary text, hairline dividers, and card surfaces. Legacy link-blue (#0000EE) and a saturated red-orange (#FF2600) appear only inside the framed mockup content as that inner "site's" own accent system — they are not part of the outer page's palette and must not bleed outside the device frame. Nothing else is colored: backgrounds, dividers, and body copy stay strictly black/white/gray.

## Typography
Geist is the structural voice: the 56px/1.15, -3.4px-tracked display-lg carries the hero headline; 32px/1.35 headline-md carries section titles (e.g. the process band, the project-detail headers); 20px/1.8 label-md sets slightly larger UI labels/list items. Inter at 13px/700/1.75 is used for dense small caption/meta text (durations, formats, reviewer titles). Base body copy runs Geist 16px/400 in black, with secondary/supporting lines set lighter in gray. A Nanum Pen Script accent appears exactly once as a small hand-drawn label pairing with the carousel arrows — a marginal, playful signature rather than a repeated device. Times New Roman exists only as an inert system fallback and carries no visible role.

## Layout
Content is held to a centered max-width column (1024px), with the framed device mockup breaking that column width and floor and reading as a full-bleed showcase object rather than a grid card. Section padding is generous — 180px-scale gaps separate major bands — while internal component spacing runs tighter (16px/24px gaps, 8-10px micro-paddings for chip/tag padding). Radii escalate by role: 4px on compact tags/small controls, 27-32px on card and mockup frames, full 9999px pills on all buttons and avatar chips. There is no visible multi-column card grid in the traditional bento/masonry sense — the repeating unit is a single hero-scale device mockup per project section, stacked vertically one after another (a "list layout" of full-width feature blocks, not a row-based grid), interrupted once by the black process band which itself is single-column, top-aligned text with no imagery.

## Components
- **Navbar** — edge-to-edge square bar, 60px tall, spans 100% viewport width (0px inset both sides), transparent background, sticky, 0px corner radii on all four corners (a true full-width flat bar, not an inset/rounded capsule). Holds 5 items: a circular logo/hexagon badge at far left, three text nav links center-right, and one black pill CTA at far right.
- **Hero primary CTA** — an observed near-black solid pill button beneath the headline, ~48px tall, full 9999px radius, white text, paired with a small icon glyph; this is the single most emphasized control on the first screen.
- **Nav CTA button** — smaller black pill, 9999px radius, ~40px height, top-right of the navbar; same fill/text-color family as the hero primary but a distinct, smaller instance for persistent access while scrolling.
- **Outline button** — transparent fill, thin light-gray border, black text, 9999px radius, ~36px height; appears beside filled buttons inside the framed mockup content as a secondary action.
- **Filled accent button** — solid #FF2600 fill, white text, 9999px radius, small height (~36px); appears only inside the device-mockup's own inner page content, not on the outer page chrome.
- **Device mockup / project card** — the dominant recurring "card" family, one per project section (×3+ across the scroll), full content-column width: a thick chestnut/amber outer frame (border ~8-10px, radius 32px) wrapping a flat gray bezel, holding a two-pane inner screenshot (left: avatar + short bio + contact chip row; right: oversized reversed-out headline text over a dark textured panel). Shadow: `rgba(0, 0, 0, 0.2) -24px 24px 24px 0px`. Below each mockup: a bold-lead project name + descriptive sentence on the left, and a right-aligned metadata list (link row with arrow, format row, duration row, reviewer name+role+avatar row) separated by hairline dividers.
- **Testimonial quote card** — light-gray (#F7F7F7) surface, ~27px radius, ~24px padding, sits directly beneath each metadata list; holds a short quote sentence followed by a 5-star icon row.
- **Trust/avatar cluster** — a horizontal stack of ~5 overlapping circular avatars beside the hero CTA, paired with a small caption label underneath.
- **Process band (black section)** — one full-bleed black-background band, single column, left-aligned: a headline, a thin horizontal divider, then four stacked label+paragraph pairs (short bold sub-heading, gray descriptive sentence beneath each) — no cards, no imagery, pure typographic list.
- **Chips/badges** — small pill-shaped tags (pale blue-gray or amber fill) holding short status text, seen beside project mockups and inside the inner "site" content.
- **Footer** — white background, 7 links, minimal-height terminal band closing the page.

## Graphics & Effects
No page-wide gradient exists; the only gradient evidence is a small dotted radial-dot texture — `radial-gradient(rgb(0, 0, 0) 0.6px, rgba(0, 0, 0, 0) 1.4px)` — covering roughly 5% of the page, read as a fine grain/dot-pattern texture layered subtly behind or within a section divider, not a hero wash. A second near-invisible top-right sheen gradient (`radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.37) 0%, rgba(255, 255, 255, 0) 100%)`) is a glass highlight on a small surface, negligible in area. The device-mockup frame carries a soft layered drop shadow (`-24px 24px 24px rgba(0,0,0,0.2)`) plus, on nested inner elements, a fine multi-stop soft shadow stack (the long rgba sequence from -1.5px to -88px offsets) giving a paper-stack/elevation feel to stacked cards inside the mockup; an inset variant of that same multi-stop shadow recipe is used for pressed/inset states on small inner controls. Media inside the mockups is treated as flat static screenshots (no live canvas/video), framed by the chestnut/amber border as a picture-frame device.

## Motion
Motion is driven by framer-motion, implying scroll-triggered fades/slides on section entry consistent with the alternating reveal rhythm of mockup → text → metadata seen across the scroll. A `__framer-loading-spin` keyframe drives a rotating loader for async/loading states (spinner icon). No numeric durations/easings are exposed beyond this; treat entrances as short, ease-out fades/translates typical of scroll-triggered reveals, kept subtle so they don't compete with the static device-mockup imagery.

## Guardrails
- Do not fill the hero or any full-viewport section with a saturated gradient — the page is white-dominant with black and amber strictly rationed to specific elements.
- Do not turn the navbar into a rounded, inset, or capsule bar — it is a flat, edge-to-edge, 0px-radius, transparent bar at 60px height.
- Do not substitute the navbar's smaller CTA pill for the hero's primary button — the hero primary is a distinct, larger black pill under the headline.
- Do not build the project sections as a multi-column card grid — they are single, full-width, stacked device-mockup blocks, one after another.
- Keep #FF2600 and #0000EE confined to the inner device-mockup content; they are not outer-page accents.
- Preserve the one black full-bleed process band as plain typographic list content with no imagery or cards inside it.
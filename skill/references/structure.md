# Structure

Most AI-generated UIs are visually distinct but structurally identical: hero → three features → CTA → footer. Same heading positions, same column counts, same component vocabulary. **Structural sameness is the AI fingerprint, not visual sameness.** Hallmark's job is to break it.

This file catalogues the axes of structural variety. Pick one option from each axis to form a *structural fingerprint*. Two pages should never share the same fingerprint.

## The six axes

### 1. Section-heading placement

Where does a section's title live in space? Pick one per page.

| Pattern | Description | Real-world reference |
| --- | --- | --- |
| **Left-margin** | Eyebrow / number / label sits in a narrow left column; heading and body to the right. Editorial / specimen. | The New York Times Magazine; our Specimen theme. |
| **Hanging** | Heading floats in negative space *above* the section, with generous breathing room. | David Airey's portfolio; minimal modernist. |
| **Centered display** | Heading dominates centre stage, symmetrical. Formal, welcoming, can feel static if used everywhere. | Apple product pages; Atelier-style runway invitations. |
| **Bottom-aligned** | Heading anchors the *base* of a section, content flows above. Inverts hierarchy. | Swiss editorial; Newsprint masthead-below pattern. |
| **Overlapping image** | Heading layered atop photography or colour block. Demands strong contrast. | Pentagram project pages; Manifesto posters. |
| **Sticky / pinned** | Heading remains visible while content scrolls beneath. Orientation aid. | GSAP ScrollTrigger docs; Almanac-style references. |
| **Numbered display** | "01." with a rule line and the heading right beside it. Procedural, sequenced. | Rauno Freiberg's portfolio. |
| **Inline with body** | No section break — the heading emerges from the paragraph flow. Conversational. | Medium articles; long-form essays. |

### 2. Body composition

How does long-form content lay out beyond "single column at 65ch"?

| Pattern | When | Reference |
| --- | --- | --- |
| **Single column** | Narrative-first, reading-led. The default for editorial. | Most blogs. |
| **Two-column asymmetric** | Wide body + narrow margin column for metadata, captions, marginalia. | Semplice; Linen-style. |
| **Multi-column justified** | Newspaper rhythm; 2–3 narrow columns, hyphenated, justified. | The Guardian; FT.com; Newsprint. |
| **Marginalia** | Sidenotes in a generous outer margin run alongside core text. | Tufte CSS; scholarly publications. |
| **Three-column equal** | Encyclopedia / reference / data-density. Chunked, scannable. | Wikipedia; Whole Earth Catalog; Almanac. |
| **Full-bleed with margin reset** | Body at 65ch, but pull-quotes or images bleed full-viewport. Emphasis via scale change. | Medium pull-quotes; Manifesto sections. |
| **Asymmetric spans** | Columns vary widthwise; intentional 2-1-3 ratios via CSS Grid. | Locomotive; portfolio sites. |

### 3. Divider language

How do sections separate?

- **Hairline rule.** 0.5–1px line, inset or full-bleed. Hallmark's default; modernist.
- **Ornament.** Fleuron (`❦`), centered dot, geometric mark. Salon, editorial classic.
- **Negative space.** No rule at all — the gap *is* the divider. Apple, Linen, modern minimalism.
- **Bleed-color block.** Section background colour shifts; the colour edge is the divider. Manifesto, Brutal.
- **Double rule / typographic mark.** Top + bottom line tight together; signals masthead in Newsprint.

### 4. Button voice

How do CTAs happen?

- **Outlined.** Border, no fill. Secondary or quiet primary. Hallmark default.
- **Unstyled link.** Underlined word, no box. Trust the typography. Editorial / craft sites.
- **Oversized solid.** Big block of accent colour, full padding. Manifesto, Sport, statement-CTA.
- **Typographic-only.** A word in a specific weight/size/colour, no rule, no box. Looks like a headline that happens to be clickable. Atelier, Salon.
- **Form-as-CTA.** The button is part of an inline form; the action *is* fill-this-field. Newsletter signups.

### 5. Image treatment

How does imagery enter the page?

- **Full-bleed.** Edge-to-edge, viewport width, image as architecture. Manifesto, Sport.
- **Tightly cropped.** Small, deliberate, sized to grid. Almanac, Atelier still-life.
- **Inline with text.** Image flows within the paragraph rhythm, sized to measure. Editorial, Newsprint.
- **Margin-aligned.** Image sits in the wide outer margin; body unbroken. Linen, Tufte.
- **None.** No imagery; typography carries everything. Specimen, Manifesto-as-text-poster, Terminal.

### 6. Reveal pattern

What happens on page-load and on scroll?

- **Fade-up stagger.** Default. Subtle, broadly safe; orchestrated once with exponential ease-out.
- **Horizontal sweep.** Element slides in from one edge; clip-path or transform. Directional momentum.
- **Type-unmask.** clip-path animates open over text. Graceful when the type is the hero.
- **Number-tick.** Counter from 0 to final value; for stats, prices, dates. Almanac, dashboards.
- **Typewriter.** Character-by-character; honest about the medium. Terminal only.
- **None.** Everything is just there at load. Some sites should not move. Pentagram, brutalist sites.

## Picking a fingerprint

A fingerprint = one choice per axis. There are 8 × 7 × 5 × 5 × 5 × 6 = **42 000** fingerprints. You will never run out.

Two rules govern choices:

1. **Coherence.** A Newsprint page with multi-column justified body should have a typographic CTA, not an oversized solid button — those don't share a voice. Pick choices that belong to the same *world*.
2. **Anti-repetition.** Across consecutive pages built in the same session, no two should share more than three of the six axes. If the previous page used left-margin headings + single column + hairline divider + outlined button, this page should differ on at least three of those.

## Theme-suggested fingerprints

Each Hallmark theme has a default structural fingerprint. Use them as starting points, deviate when the brief demands.

| Theme | Heading | Body | Divider | Button | Image | Reveal |
| --- | --- | --- | --- | --- | --- | --- |
| Specimen | Left-margin | Asymmetric spans | Hairline | Outlined | None | Fade-up |
| Midnight | Numbered display | Single column | Hairline | Typographic-only | None | Typewriter |
| Brutal | Overlapping image | Full-bleed reset | Bleed-colour | Oversized solid | Full-bleed | Horizontal sweep |
| Garden | Hanging | Marginalia | Negative space | Unstyled link | Margin-aligned | None |
| Atelier | Centered | Single column | Negative space | Typographic-only | Tightly cropped | Type-unmask |
| Newsprint | Bottom-aligned | Multi-column justified | Double rule | Outlined | Inline | None |
| Terminal | Inline (with `>` prompt) | Single column | Negative space | Typographic-only `[ go ]` | None | Typewriter |
| Manifesto | Overlapping image | Full-bleed reset | Bleed-colour | Oversized solid | Full-bleed | Horizontal sweep |
| Salon | Centered | Single column narrow | Ornament (fleuron) | Outlined | Tightly cropped | None |
| Linen | Hanging | Two-column asymmetric | Negative space | Unstyled link | Margin-aligned | Fade-up |
| Almanac | Sticky | Three-column equal | Hairline | Outlined | Inline | Number-tick |
| Sport | Numbered display | Asymmetric spans | Bleed-colour | Oversized solid | Full-bleed | Horizontal sweep |

## Anti-patterns of structural sameness

Reject these structural fingerprints. They are the AI-template fingerprint.

- **The SaaS hero.** Centered display heading, centered subhead, centered pill CTA, full-viewport hero, fade-up. The single most-recognised AI structural fingerprint.
- **The 3-feature row.** Three equal columns of icon-above-heading-above-two-line-body, gapped at 24px, identical card padding.
- **The benefits-then-CTA.** A list of feature bullets followed by a "Sign up" button block. Predictable rhythm.
- **The everything-fades-in.** Every section gets the same scroll-triggered fade-up animation. Makes the page feel like a presentation.
- **The carbon-copy footer.** Logo, four columns of links, social row, copyright. The same on every site you've ever seen.

## When you don't know

If the brief doesn't suggest a fingerprint and the user hasn't picked a theme, ask:

> One word for the *feeling* of this page — editorial, brutalist, soft, technical, luxury, austere, playful?

Their answer maps to a theme; the theme maps to a fingerprint. Proceed.

If they answer "modern", "clean", or "professional", say so isn't a feeling and ask again.

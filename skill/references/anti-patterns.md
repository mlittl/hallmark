# Anti-patterns — the named tells

The `hallmark audit` verb flags these by name. Every one of these is a signature of AI-generated UI. Seeing one is a problem; seeing two in the same view is a confirmation.

Each entry: the tell, why it reads as AI-generated, and the fix.

---

## Critical (ships as slop)

### The purple-gradient hero

A hero section with a background gradient from purple to blue or purple to pink, often with white centred text. This is the single most-recognised AI aesthetic.

**Fix.** Pick a single anchor hue. One accent. No gradient backgrounds on heroes. If you want warmth, tint the neutrals.

### Inter-everywhere

Inter (or Roboto, or Open Sans) used as both display and body, with no pairing face. A one-font page is a template page.

**Fix.** Pair a distinctive display face with a refined body face. See [`typography.md`](typography.md).

### The 3-column feature grid

Three equal columns, each with an icon above a two-line heading above a three-line body. Usually spanned full-width with 24px gap. Every LLM emits this.

**Fix.** Break the grid. Vary column widths. Mix card heights. Remove one card and use negative space. Move the icons inline, not above. Or drop the cards entirely and use typographic rhythm.

### Card-in-card

A bordered container with cards inside it. Or: a card containing another card containing a small "micro-card". Visual nesting with no semantic reason.

**Fix.** Pick one containment layer. Usually the outer one is the wrong one.

### The gradient headline

A headline with `background-clip: text` fill set to a linear gradient (usually purple-to-pink or blue-to-cyan). Signals "AI generated" faster than almost anything else.

**Fix.** Solid ink. If you want the headline to feel alive, use weight or italic or a display face — not a gradient fill.

### The side-stripe card

A card with a thick coloured border on one edge (usually left, 4–6px, purple or green). Very recognisable; very 2018-SaaS-AI.

**Fix.** Use a hairline border all around, or no border, or a small accent square beside the heading. Never an asymmetric thick stripe.

### Full-viewport centred hero

`min-height: 100vh` (or `100dvh`), everything centred, one short sentence, one big CTA. The default LLM landing page.

**Fix.** Let the hero be the height of its content. Bias left or right. Put more than a sentence in it.

### Pure black, pure white

`#000000` background or `#ffffff` surface. Both read as flat and synthetic.

**Fix.** Tint toward your anchor hue. See [`color.md`](color.md).

---

## Major (looks AI-generated)

### Bounce and elastic easing

Buttons that bounce in, icons that wobble on hover. These easings were trendy a decade ago.

**Fix.** Exponential ease-out. See [`motion.md`](motion.md).

### Centred everything

Headline centred, body centred, button centred, section after section of centred columns.

**Fix.** Bias the layout. Wide left margin, narrow right. Or the reverse. Breaking symmetry once is enough.

### Shadow-glow on dark

A card on a dark background with a `box-shadow` that leaves a soft coloured halo around it.

**Fix.** On dark surfaces, use elevation via *lightness* (brighter surface = higher), not shadow. If you must shadow, keep it tight and dark.

### Icon-tile feature card

Rounded rectangle, icon in a coloured square at the top-left, heading below it, two lines of copy, optional "Learn more →" link. The universal template.

**Fix.** If you need these, let them be asymmetric — vary sizes, vary alignments, pull the icon inline with the heading, or drop the icon entirely.

### Glassmorphism without purpose

Frosted-glass panels everywhere — usually layered over a gradient that you also shouldn't have.

**Fix.** Glassmorphism can work when it communicates depth (overlay over content). It cannot work as decoration.

### Hover-only affordances

Hover reveals a menu; hover shows a delete button; hover triggers a tooltip that contains crucial information. Touch users get nothing.

**Fix.** Every hover affordance has a focus state and is accessible via tap/click on coarse pointers.

### Tabular data without tabular-nums

A list of prices, dates, or metrics where the numbers don't align vertically because the font uses proportional figures.

**Fix.** `font-variant-numeric: tabular-nums;` on any container displaying columns of numbers.

### Animate-on-scroll on everything

Every section fades in when it enters the viewport. Every list staggers. The page never settles.

**Fix.** Pick one orchestrated entrance. Let the rest just *be there*.

---

## Microinteraction tells

These are the named tells of AI-generated *motion*. See [`microinteractions.md`](microinteractions.md) for the full catalogue and recipes.

### `transition-all`

Every property animating, including ones that should be instant (visibility, focus rings).

**Fix.** Specify the properties. `transition: background-color var(--dur-short) var(--ease-out), transform 100ms var(--ease-out)`.

### Universal `hover:scale-105`

Every card lifts on hover, with no shadow change, no easing specified, no purpose.

**Fix.** Pick one signal per element. A 1px translate, or a colour shift, or an underline thickening — never all four.

### Bouncy overshoot easings on UI

`cubic-bezier(0.34, 1.56, 0.64, 1)` and friends on buttons, modals, tooltips. Tasteless throwback.

**Fix.** Reserve overshoots for genuine physical interactions (drag-and-drop release). For UI state, use `--ease-out` from `motion.md`.

### Animated hover gradients

Background gradient slides through colour space on hover.

**Fix.** Cut. Or pick one colour shift, instant.

### Cursor follower dots

A trailing dot that lags behind the pointer.

**Fix.** Cut.

### Auto-rotating carousels with no pause

WCAG 2.2.2 failure.

**Fix.** Manual advance only, or pause-on-hover-and-focus, or autoplay disabled by default.

### Celebratory success toasts

"Done!" when the user just saved a thing they can see was saved.

**Fix.** Silent success. Toasts only for failures, async actions whose effect isn't visible, and explicit confirmations the user will need.

### Confirmation dialogs for reversible actions

"Are you sure you want to delete this?" before a one-row delete.

**Fix.** Optimistic delete + 5–10s Undo toast. Reserve the modal for irreversible destructive actions, and even then, type-the-name confirmation, not click-OK.

### Tooltips with the same delay on hover and focus

Both delay 800ms.

**Fix.** Hover delay 800–1000ms. Focus delay 0ms. Different intents, different timing.

### Focus rings that animate in

The ring fades in over 200ms — keyboard users have no indicator at the start of the transition.

**Fix.** Focus rings appear instantly. Always. Don't transition `outline` or `box-shadow` when the element gains focus.

### Toasts that shift layout

New toast pushes content down; dismissed toast lets it spring back.

**Fix.** Stack at a viewport corner, fixed positioning. Existing toasts don't move when a new one arrives.

### Universal scroll-triggered fade-up

Every section fades in on intersection. The page never settles.

**Fix.** One orchestrated entrance on first load. After that, content is just there.

### Spinners that flash

A spinner appears for 50ms while a fast action completes.

**Fix.** Either delay-show the spinner (150ms before showing) or enforce a minimum visible duration (300ms once shown). Skeletons over spinners when the layout is known.

---

## Minor (small taste issues)

### Straight quotes

`"Hello"` and `'word'` in rendered text. A sign nothing was proof-read.

**Fix.** Curly quotes: `"Hello"`, `'word'`.

### Double-hyphen dashes

`--` in body copy where an em-dash belongs.

**Fix.** `—` (U+2014).

### Three periods instead of ellipsis

`...` in body copy.

**Fix.** `…` (U+2026).

### Placeholder names

"Jane Doe", "John Smith", "Example User".

**Fix.** Plausible placeholder names reflecting the audience, or pull from a seeded faker. "Maya Okonkwo", "Sam Tan", "Elena Ruiz".

### Startup-cliché product names

"Acme", "Nexus", "Pulse", "Unleash", "Seamless", "Supercharge".

**Fix.** Name the thing concretely. If it's a demo, use a domain-specific placeholder — "Maple Weekly", "Ridgeline Inventory" — not abstract startup bingo.

### `z-index: 9999`

Arbitrary large z-values.

**Fix.** Use the six-level named scale. See [`layout-and-space.md`](layout-and-space.md).

### Every section padded the same

Top padding, bottom padding, horizontal padding — all equal across every section.

**Fix.** Vary. Tighten one, expand another.

### 100vw widths

`width: 100vw` on anything. Breaks on scrollbar-visible desktops.

**Fix.** `width: 100%` with container padding.

---

## How `hallmark audit` should report

For each finding:

```
[severity] Tell name — file:line
  why it's a tell (one line)
  → fix (one line)
```

Then:

```
Summary — N critical · M major · K minor
Verdict — [ships as slop | reads as AI-generated | close, fix the minors]
```

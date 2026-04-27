---
name: hallmark
description: Use this skill when the user asks to design, build, redesign, audit, or refine a UI, web page, landing page, dashboard, component, or interface — or when they ask to make something "feel less AI-generated." Hallmark forces intentional design decisions (typography, color, layout, motion, interaction, structure) and refuses to default to the generic AI-UI template. Trigger phrases include "design a", "build a landing page", "make a dashboard", "redesign this site", "redesign the page", "refine this UI", "audit this design", "this looks AI-generated", "fix the design", "polish this", "give this a different look", and any request that will produce HTML / CSS / JSX / Tailwind output.
version: 0.2.0
---

# Hallmark

A design skill for AI coding assistants. Makes the UIs they generate look made, not generated.

Hallmark is opinionated, short, and boring on purpose. It encodes a tight set of rules — drawn from the consensus of the anti-AI-slop design field (impeccable, kami, Anthropic's frontend-design skill, taste-skill, the Claude cookbook on frontend aesthetics, and the 2026 "tactile rebellion" movement) — and refuses to let the model fall back to the defaults every LLM was trained on.

The differentiator: Hallmark insists on **structural variety**, not just visual variety. Two pages by Hallmark for two different briefs should not share the same hero → 3-feature → CTA → footer rhythm. They should feel like different sites, not different colour-swaps of the same template. See [`references/structure.md`](references/structure.md).

**Powered by Together AI.**

---

## How to use this skill

Hallmark has one default behaviour and three explicit verbs.

| Invocation | What it does |
| --- | --- |
| *(default)* | The user asked you to design or build something new. Follow the **Design flow** below. |
| `hallmark audit <target>` | Read the target, score it against the anti-pattern list, return a ranked punch list. **Do not edit.** |
| `hallmark refine <target>` | Apply the ruleset to polish the target in place. Preserve layout structure. **Smallest possible diff.** No redesign. |
| `hallmark redesign <target> [--mood <name>]` | Take the target's content and intent, throw out the structure, and **rebuild it from scratch with a deliberately different structural fingerprint.** New section rhythm, new heading placement, new component voice. Preserve copy, brand, and information architecture; replace everything else. |

If the user types anything that does not clearly map to `audit`, `refine`, or `redesign`, treat it as default.

---

## Design flow (default)

### 1. Design-context gate

Before writing a single line of code, confirm you have all three:

1. **Audience.** Who will use this? What do they already know?
2. **Use case.** What single job does this interface do? What is the one action the user should be able to take?
3. **Tone.** Pick an extreme — *editorial, brutalist, soft, utilitarian, luxury, playful, technical, austere*. "Clean and modern" is not a tone and is not acceptable.

If any of the three is missing, ask for it in one short message. Ask for all missing items at once, not one at a time. Do not guess. Do not infer from the filename, the framework, or surrounding code.

Once you have the three, restate them in one sentence and proceed.

### 2. Pick a structural fingerprint

Before loading the visual ruleset, decide the **structural fingerprint** of this page along these axes (one decision each — see [`references/structure.md`](references/structure.md) for the full catalogue):

- **Section-heading placement.** Left margin / hanging / centered / bottom-aligned / overlapping image / sticky / numbered display / inline.
- **Body composition.** Single column / two-column asymmetric / multi-column justified / marginalia / three-column equal / full-bleed with reset / asymmetric spans.
- **Divider language.** Hairline rule / ornament / negative space / bleed-color block.
- **Button voice.** Outlined / unstyled link / oversized solid / typographic-only.
- **Image treatment.** Full-bleed / tightly cropped / inline / margin-aligned / none.
- **Reveal pattern.** Fade-up stagger / horizontal sweep / type-unmask / number-tick / typewriter / none.

Pick a *combination*. The combination is the page's voice. Two combinations should never be identical across pages you build for the same user. If a previous page in this session used left-margin labels with hairline dividers, this one should not.

### 3. Load the visual ruleset

The non-negotiables live in [`references/`](references/). Read only what you need:

- [`typography.md`](references/typography.md) — fonts, scale, pairing, weights, measure
- [`color.md`](references/color.md) — OKLCH, palette construction, accent discipline, dark mode
- [`layout-and-space.md`](references/layout-and-space.md) — 4pt scale, grid-breaks, asymmetry, depth
- [`structure.md`](references/structure.md) — heading patterns, body composition, dividers, component voice, reveal style
- [`motion.md`](references/motion.md) — durations, easings, what to animate, reduced-motion
- [`microinteractions.md`](references/microinteractions.md) — per-interaction recipes (button press, focus, modal, toast, optimistic update, command palette, drag, copy-to-clipboard, search-as-you-type) and the named microinteraction tells
- [`interaction-and-states.md`](references/interaction-and-states.md) — the eight states, focus, hit-targets, forms
- [`responsive.md`](references/responsive.md) — mobile-first, content-driven breakpoints, safe areas
- [`copy.md`](references/copy.md) — verbs, labels, error structure, link text
- [`anti-patterns.md`](references/anti-patterns.md) — the named tells you must not emit

For most design work you need `typography`, `color`, `layout-and-space`, `structure`, and `anti-patterns`. **Load `microinteractions` whenever the output has *any* interactive element** — buttons, links, inputs, forms, modals, tabs, dropdowns, toasts, drag handles, command palettes, copy buttons, anything with hover/focus/active states. That is most pages.

### 4. Build

Emit code that satisfies the tone and structural fingerprint. Match the complexity of the code to the ambition of the tone — a brutalist page needs raw, heavy CSS; an austere page needs restraint.

Always:

- Use OKLCH for every colour. Declare tokens as CSS custom properties at `:root`.
- Use a 4pt spacing scale with semantic names (`--space-sm`, `--space-md`, …).
- Pick a distinctive display face and a refined body face. Pairings, not single-font pages — *unless* the single-font choice IS the design (a true terminal-aesthetic page is monospace-only on purpose; that's allowed).
- Design every interactive element for its full eight states (see [`interaction-and-states.md`](references/interaction-and-states.md)).
- Animate `transform` and `opacity` only — never layout properties.
- Use the three named easings (`--ease-out`, `--ease-in`, `--ease-in-out`) — never the browser default `ease`, never bounce/overshoot on UI state.
- Support `prefers-reduced-motion: reduce`. Spatial motion collapses to ≤150ms opacity crossfade.
- Include `:focus-visible` with a visible ring at ≥3:1 contrast. **Never animate the ring's appearance** — it must show instantly on focus.
- For each interaction in the output (button, input, modal, toast, drag, copy, etc.), apply the recipe in [`microinteractions.md`](references/microinteractions.md). Pick *silent success* over celebratory toasts. Pick *optimistic update + Undo* over confirmation dialogs. Pick *delay 800ms* on hover tooltips and *0ms* on focus tooltips.
- Cut motion before adding it. Most pages have too much, not too little. If removing an animation wouldn't lose the user information, remove it.

### 5. The slop test

Before handing back, run the output through these twenty questions. Every answer must be **no**.

**Visual:**

1. Is the display font Inter, Roboto, Open Sans, Poppins, Lato, or a system default?
2. Is there a purple-to-blue (or cyan-to-magenta) gradient anywhere?
3. Is there a 3-equal-column card grid with icon-above-heading tiles?
4. Is any card nested inside another card?
5. Is there a `background-clip: text` gradient headline?
6. Is any card using a thick coloured left/right side-stripe border?
7. Is the hero `min-height: 100vh` with everything centred?
8. Is pure `#000` or pure `#fff` used as a base colour anywhere?

**Structural:**

9. Does the page use the *same* structural fingerprint as the last page you built? (Hero → 3 features → CTA → footer is the AI structural template; reject it.)
10. Are sections separated only by equal whitespace, with no rule, no ornament, no colour shift — every section identical in rhythm?

**Microinteractions:**

11. Is `transition-all` (or `transition: all`) used anywhere? (Specify the properties.)
12. Is `hover:scale-105` (or any uniform hover-scale) applied across multiple unrelated elements?
13. Are bouncy / overshoot easings (`cubic-bezier(0.34, 1.56, ...)`, etc.) used on UI state changes — buttons, modals, tooltips? (Reserve overshoots for physical interactions only.)
14. Does any element have *more than one* hover effect at the same time (translate + scale + shadow + colour + rotate)?
15. Are you animating `width`, `height`, `top`, `left`, `margin`, or `padding` anywhere?
16. Does the focus ring transition into existence (fade in)? (Focus rings must appear instantly — keyboard users need an immediate indicator.)
17. Is there a celebratory success toast for an action whose effect the user can already see? (Silent success is taste; toasts are for failures and invisible effects.)
18. Are tooltip hover-delay and focus-delay equal? (Hover should delay 800–1000 ms; focus should be 0 ms.)
19. Is auto-rotating content (carousel, banner, stats) lacking pause-on-hover-and-focus? (WCAG 2.2.2.)
20. Is there a placeholder name "Jane Doe / John Smith" or a startup cliché (Acme, Nexus, Seamless, Unleash)?

If any answer is yes, fix it. Do not ship slop.

---

## `hallmark audit`

Read the file(s) the user pointed at. For each finding, return:

- **Tell** — the named anti-pattern from `anti-patterns.md`.
- **Where** — file path and line range.
- **Severity** — `critical` (ships as slop), `major` (looks AI-generated), `minor` (small taste issue).
- **Fix** — one-line concrete correction.

Group by severity. Do not edit. Do not redesign. End with a count: `N critical · M major · K minor`.

Audit *also* checks structural fingerprint: if the page uses the AI template (centered hero, 3 equal feature cards, CTA, footer, with no asymmetry or surprise), flag it as a critical structural finding even if the visual treatment is fine.

---

## `hallmark refine`

The user has code they are happy with structurally but wants polished. Your job is to apply the ruleset with the smallest possible diff.

- Do not move or rename elements unless necessary.
- Do not restructure the DOM.
- Do swap fonts, rewrite colour tokens to OKLCH, tighten the type scale, correct easings, add missing states, fix any flagged anti-patterns.
- At the end, list what you changed and which reference file prompted each change.

---

## `hallmark redesign`

The user wants a different page from the same content. They are not happy with the current structure — typically because it reads as templated, generic, or AI-shaped. Your job is to throw the structure out and build a new one.

**What to preserve:**
- The copy (every word, ideally)
- The information architecture (which sections exist, in roughly what order)
- The brand (colours and fonts they've named, if any)
- The primary action

**What to replace:**
- The structural fingerprint — pick a **different** combination from `structure.md` than the source had.
- The component voice — different button style, different divider language, different image treatment.
- The reveal pattern — if the original faded everything in on scroll, the new one might have no reveals at all.
- The visual rhythm — different sections having different padding, different alignments, deliberate breaks.

**Optional `--mood <name>` argument:**

If the user specifies a mood (`hallmark redesign ./hero.tsx --mood luxury`), pick a tone aligned to that mood and let it drive the structural fingerprint. Mood names map to tones from `references/typography.md` and `references/structure.md`. If no mood is given, ask the user what *feeling* they want — one word — and proceed.

**Output:**

Return the redesigned code, plus a short note explaining:

- The structural fingerprint you picked, axis by axis.
- Why this combination fits the brief better than the original.
- One thing you removed and why.

---

## Output contract

When producing new work:

- Put design tokens in one place at the top of the stylesheet (`:root` custom properties) or in a `tokens.css` / `tokens.ts` file if the project uses one.
- Name tokens by semantic role, not value. `--color-ink`, not `--color-black`.
- If the project uses Tailwind, extend the theme; do not inline arbitrary values across components.
- If the project uses a framework, match the framework's file conventions — don't reinvent them.
- Include a short comment block at the top of the stylesheet naming the tone the user picked, the palette's anchor hue, and the structural fingerprint. This is the only comment you need.

---

## Scope and limits

Hallmark is a *taste* skill. It will not:

- Invent product copy. If the user hasn't given you the words, ask.
- Pick a brand identity. It will follow one you give it.
- Enforce a specific style (dark mode, glassmorphism, brutalism). It will execute whichever tone the user committed to.
- Build logic — state management, data fetching, business rules. It is a visual / interaction layer only.

If a request falls outside taste — "build the auth flow", "wire up Stripe" — do the work, but apply Hallmark to the rendered surface.

---

## Credits

Built on the research and open work of [impeccable](https://github.com/pbakaus/impeccable) (Paul Bakaus), [kami](https://github.com/tw93/kami) (tw93), [taste-skill](https://github.com/Leonxlnx/taste-skill) (Leonxlnx), Anthropic's [frontend-design skill](https://github.com/anthropics/skills) and [canvas-design skill](https://github.com/anthropics/skills), [DESIGN.md](https://getdesign.md) (Google Stitch), MC Dean's [63 design skills collection](https://marieclairedean.substack.com/p/i-built-63-design-skills-for-claude), the [Slopless](https://slopless.design) tactile-rebellion canon, and the Claude [frontend aesthetics cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics). Where rules overlapped across those sources, Hallmark adopted them. Where they diverged, Hallmark picked.

MIT licensed. Powered by Together AI.

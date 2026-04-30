# Test 07 — Foundry (SOC2 / ISO27001 compliance automation)

## The prompt

> "Build a landing page for Foundry — SOC2 and ISO 27001 compliance automation for B2B SaaS. Show: how many companies got compliant, what it costs, who uses it. Audience: founders + CTOs. Tone: technical but trustworthy."

## Context gate — fully answered

Audience, use, tone all explicit. No inference needed.

## Domain inference

`platform / tool / infra / observability / dashboard SaaS` (try-or-talk-to-sales) → from the refined trio table: **Bento Grid / Workbench / Stat-Led** are reasonable picks.

The skill picks **Stat-Led** because the brief explicitly leads with a number ("how many companies"), and compliance is a *proof-by-numbers* sale. The hero is one giant number; every section anchors on a stat.

## Theme

The previous SaaS test (Tracejam) used **Pastel** (light · geometric-sans · cool-indigo · pinkish paper). Hallmark's existing themes lean heavily warm-paper (Specimen, Atelier, Newsprint, Salon, Linen, Almanac all sit in the cream-to-pink band). For variety, Foundry deliberately departs from those: a flat **#ffffff** paper, near-neutral cool greys (low chroma, hue 245), a deep ink-blue accent, and a display-heavy Inter Tight wordmark/headline pairing.

The theme is named **Plain** in the macrostructure stamp — a Klim-Type-Foundry-leaning stark-white look that fits compliance brand voice (sober, structured, no-nonsense) and gives the gallery a colour change from the warm-paper run.

### Diversification axes

| Theme | Paper band | Display style | Accent hue |
| --- | --- | --- | --- |
| Pastel (Tracejam) | light cream-cool | geometric-sans | cool-indigo |
| **Plain (Foundry)** | **light pure-white** | **display-heavy** | **cool-deep-ink-blue** |
| Differs on | (subtly — pure white vs tinted) | DIFFERS | (same hue family, near-neutral chroma) |

Display style differs definitively (display-heavy vs geometric-sans). Two of three axes have visible separation. **Passes.**

## Enrichment

**None.** Stat-Led's hero is the number; adding a mockup would dilute the proof. A typographic-only hero is correct here — Tier 0 (typography only) on the enrichment hierarchy. The slight typographic flourish is the dot-period ("847.") in deep ink-blue, sized off-baseline as a deliberate Pentagram-style end-stop.

## Microinteractions

The skill's microinteractions rule says Stat-Led is **default-on**. Three primitives, max:

1. **Number reveal** on the "847" — IntersectionObserver triggers a `requestAnimationFrame` count from 0 to target over 1.4 s, ease-out. Reduced-motion: render the final value instantly.
2. **Pricing card hover lift** — `translateY(-3px)` + shadow upgrade, 180 ms ease-out. Active state drops back at 60 ms.
3. **Recommended-tier pulse** — one-shot `@keyframes pulse-border` 2 s, runs once on viewport entry. Subtle: opacity 0.4 → 1 → 0.4 on the border. Doesn't loop.

## Macrostructure stamp

```
/* Hallmark · macrostructure: Stat-Led · S1 hero knobs: number=8xl, alignment=left-bias, supporting=enumerated
 * theme: Plain · pure-white paper (#ffffff) · accent: deep ink-blue ~3% (rules + recommended-tier)
 * enrichment: none (typography only — the number is the hero)
 * studied: no · context: explicit
 * motion: number-reveal (counter), pricing-lift, recommended-pulse — three primitives, default-on per archetype
 * background: deliberately pure #ffffff — departing from Hallmark's usual warm-paper themes for variety
 */
```

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Inter Tight 900 | "847." headline, h2 section titles |
| Body | Inter Tight 400/500/700 | Single-family page is allowed — Brutalist tone where the family IS the design |
| Label | IBM Plex Mono | Eyebrows, captions, nav links, tier metadata |
| Wordmark | Bricolage Grotesque 800 | Different family from display + body — wordmark differentiation per typography.md |

The wordmark choice (Bricolage Grotesque) costs nothing as a free Google Font, and adds the one typographic register that says *this is a brand, not a wireframe*.

## What the page does

1. **Hero (Stat-Led).** "847" big enough to be the room. Supporting prose: "companies passed audit using Foundry. Avg time-to-compliant: 31 days, vs industry avg of 9 months."
2. **Logo wall.** 8 customer wordmarks, monochrome, tabular, one row.
3. **Stats grid.** Three supporting numbers — pass rate, avg days, hours saved.
4. **Features (4 cards).** Continuous monitoring · Auto-evidence collection · Vendor risk · Audit-day support.
5. **Testimonials (3).** Pull-quote, name, role, company. Specific to use cases.
6. **Pricing (3 tiers).** Starter $299/mo · Team $899/mo (recommended) · Scale (custom). Feature checklist per tier. Animated pulse on Team.
7. **FAQ (8 questions).** Conversational FAQ, expanded by default.
8. **CTA strip.** "Start your audit. 14 days free." One button.
9. **Footer.** Index-style, 4 columns.

The page is intentionally long — it demonstrates the SaaS page sequence rule from `macrostructures.md`: hero → social proof → features → testimonials → pricing → FAQ → CTA → footer.

## What's distinct about this test in the gallery

The white-paper, sans-display, ink-blue-accent palette is deliberately *not* like any other test in the set. Tracejam (Pastel cream-cool), Salon (Cohort warm-amber), Newsprint (originally chosen here, warm cream), Atelier (Tide warm), Linen (bakery warm), Studio (Anya warm) — all warm. Foundry sits at the cool, stark, B2B-serious end of the spectrum that the rest of the gallery doesn't cover.

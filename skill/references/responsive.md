# Responsive

Mobile-first. Content-driven breakpoints. No desktop-only interactions.

## Principles

- Base styles are for the smallest viewport. `min-width` media queries add as you go up. Never `max-width` as the primary direction.
- Breakpoints are where the *content* breaks, not where a device sits. If the headline reflows awkwardly at 720px, that's a breakpoint — regardless of what the Tailwind defaults say.
- Use `pointer` and `hover` media queries instead of width to detect *interaction capability*.

## Breakpoints

Three or four, content-driven. As a default:

```css
@media (min-width: 40rem) { /* ~640px — tablet, small laptop */ }
@media (min-width: 60rem) { /* ~960px — desktop baseline */ }
@media (min-width: 90rem) { /* ~1440px — wide */ }
```

Use `rem` so the breakpoints respect the user's font size.

## Fluid scaling

Prefer `clamp()` for sizes that change continuously; use media queries for layouts that change discretely.

```css
h1 { font-size: clamp(2.5rem, 4vw + 1rem, 6rem); }
.container { padding-inline: clamp(1rem, 4vw, 4rem); }
```

## Pointer and hover queries

```css
@media (hover: hover) and (pointer: fine) {
  .card:hover { transform: translateY(-2px); }
}
@media (pointer: coarse) {
  .btn { min-height: 48px; }
}
```

Never build a mouse-hover interaction that has no touch equivalent.

## Viewport units

- Use `dvh` / `svh` / `lvh` instead of `vh` for heights that interact with mobile chrome.
- Never `width: 100vw`. Use `width: 100%` with padding; `100vw` includes the scrollbar on desktop and causes overflow.

## Safe areas

For iOS notch / Android navigation bars:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
body {
  padding-inline: max(1rem, env(safe-area-inset-left));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

## Tables on small screens

Tables of data that won't fit: collapse to cards. Use `display: block` on `<tr>` and `data-label` attributes keyed from `<th>`, rendered via `::before`. Or, the better option: redesign the data for small screens — tables are rarely the right mobile representation.

## Images

- `srcset` with width descriptors for responsive sizing.
- `<picture>` for art direction (different crop at different widths).
- `loading="lazy"` on anything below the fold.
- `width` and `height` attributes on every image, always, to avoid CLS.

## Internationalisation

- Reserve 30–40% extra horizontal space for German, Russian, and Finnish translations.
- Use logical properties: `margin-inline-start`, `padding-block`, `border-inline-end`. Not `margin-left` etc. RTL comes for free.
- Don't hard-code language-specific punctuation or date formats.

## Bans

- Desktop-first media queries (`max-width: 768px` as the primary direction).
- `vh` on full-height layouts (use `dvh`).
- `100vw` widths.
- Device-sniffing UA strings instead of feature queries.
- Hover-only interactions.
- Ignoring `prefers-color-scheme` when the app claims to support dark mode.
- Fixed pixel breakpoints that don't respect `rem`.
- Tables of 10+ columns on mobile without a redesign.

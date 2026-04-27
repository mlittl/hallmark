# Interaction and states

Every interactive element has eight states. Most AI-generated UI styles two (default, hover) and forgets the rest. That's where interfaces break.

## The eight states

| State | When | Treatment |
| --- | --- | --- |
| Default | At rest | Base styling |
| Hover | Pointer over (only with `@media (hover: hover)`) | Small shift: colour, 1px translate, subtle border |
| Focus | Keyboard or programmatic focus | Visible ring, `:focus-visible` |
| Active / Pressed | During press | Pressed-in: darker, translate(0 1px) |
| Disabled | Not interactive | Reduced opacity (0.5) + `cursor: not-allowed` + `aria-disabled` |
| Loading | Processing | Inline spinner or progress, label stays readable |
| Error | Failed state | Red border, error icon, message, `aria-invalid` |
| Success | Completed | Green check, confirmation, auto-dismiss |

If any of these is missing on a production element, the element isn't finished.

## Focus rings

Visible, always, on every interactive element. The default focus ring most browsers give you is fine; a custom one is better.

```css
:focus { outline: none; }
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: inherit;
}
```

Requirements:

- 2–3px, ≥ 3:1 contrast against both element and page.
- 2px offset from the element.
- `:focus-visible`, not `:focus`, so it's keyboard-only.
- Never `outline: none` without a replacement. `outline: none` with no other focus style is the most common accessibility bug and an immediate audit failure.

## Hit targets

Minimum 44×44 CSS px for any touch-reachable element. Use padding or an `::before` overlay to expand the hit target without changing visual size:

```css
.icon-btn {
  position: relative;
}
.icon-btn::before {
  content: "";
  position: absolute;
  inset: -12px;
}
```

## Forms

- Labels above inputs. Visible. Never placeholder-as-label.
- Placeholders show format, not instruction. `Placeholder: 01 Jan 2026`, not `Placeholder: Enter your birth date`.
- Helper text below input. Error text replaces helper text.
- Validate on **blur**, not on every keystroke. Revalidate on change once the field has been blurred once (the "touched" pattern).
- Error message: (1) what broke, (2) why, (3) what to do. One sentence if possible.
- Associate errors with `aria-describedby`. Set `aria-invalid="true"` on the field.
- Required fields marked with `aria-required`, never with colour alone.
- Disable the submit button only when the form is in a known-invalid or in-flight state. Never on idle.

## Modals and overlays

- Use the native `<dialog>` element. It handles focus trap, escape to close, and `::backdrop` styling for free.
- Set `inert` on the page content behind a modal so tab order doesn't leak.
- Close on: escape key, backdrop click, explicit close button.
- First focus goes to the first interactive element, not the close button.

## Dropdowns, tooltips, popovers

- Use the Popover API (`popover` attribute). It handles light-dismiss, stacking, and escape for free, and works in every modern browser.
- Position with CSS Anchor Positioning where it's available; fall back to `position: fixed` + `getBoundingClientRect()`.
- Never put a dropdown inside an `overflow: hidden` container without escape. It will clip.
- Flip when near the viewport edge.

## Undo over confirm

- For reversible actions, skip the confirm dialog. Do the thing. Show a toast with an Undo button for 5–10 seconds.
- For destructive, irreversible actions (delete account, drop table), keep the confirm — and make the user type the thing being destroyed, not just click "OK".

## Loading and empty states

- **Skeleton** screens over spinners for content that has a predictable shape (lists, cards, tables).
- **Inline spinners** for in-button state. Replace the label, don't add beside it.
- **Empty states** always have: an illustration or icon (a small one), a one-line explanation of why it's empty, an action to fix it.
- Never show a generic "No results" with no context.

## Bans

- Placeholder-as-label.
- Hover-only functionality (touch users can't hover).
- Focus rings removed without replacement.
- Confirmation dialogs for low-stakes actions.
- Touch targets < 44px.
- Custom cursors on interactive elements.
- Disabled elements with no explanation of why they're disabled.
- Colour-only error states.
- Spinners where a skeleton would show layout.

### S3 · Sticky pinned
Heading remains in viewport while content scrolls beneath. Orientation aid.
*Use when:* the section is dense and the user benefits from always seeing where they are.
*Don't confuse with:* S1 Left-margin (which doesn't move).

```html
<header class="head-sticky">
  <p class="num-label">02</p>
  <h2>…</h2>
</header>
```
```css
.head-sticky { position: sticky; top: 0; background: var(--color-paper); padding-block: var(--space-sm); border-bottom: 1px solid var(--color-ink); z-index: 10; }
```

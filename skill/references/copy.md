# Copy

Words are part of the design. A great layout with stock copy looks generic. Tight copy in an average layout reads as considered.

## Principles

- **Specific verbs.** "Save changes" beats "OK" beats "Submit".
- **Labels describe.** "Email address" beats "Email".
- **Link text stands alone.** "View pricing plans" beats "Click here".
- **Errors are instructions.** Describe what broke, why, how to fix — in that order.
- **Active voice.** "We couldn't find your account" beats "Your account could not be found".
- **Consistency.** Pick one of "Delete" or "Remove". Pick one of "Sign in" or "Log in". Use it everywhere.

## Buttons

Use the verb for the action the button performs.

Good: `Save changes`, `Create account`, `Send invitation`, `Copy link`, `Open file`.
Bad: `OK`, `Submit`, `Click here`, `Continue` (only as the secondary button of a multi-step flow).

## Error messages

Three parts:

1. **What happened.** Past tense, factual. "That card was declined."
2. **Why, if known.** "Your bank flagged the charge."
3. **What to do.** Imperative. "Try another card, or contact your bank."

Never apologetic for the *user's* input. Don't say "Oops!" on a validation error. A form that won't accept a value should explain the value, not perform embarrassment.

## Empty states

Three beats:

1. One line naming what's empty. "No projects yet."
2. One line on why this matters / what projects are. "Projects group your tasks and team."
3. One button. The single next action. "Create a project".

## Loading

- Short wait: spinner with no text.
- Medium wait (>2s): spinner + "Loading…".
- Long wait (>10s): spinner + progress indication + an honest label — "Compiling (this can take a minute)."

## Microcopy bans

- "Click here." Link text must stand alone.
- "Oops!", "Uh oh!", "Something went wrong." Name the thing that broke.
- "Enter your email below." If the input is below, you don't need to say so.
- Exclamation marks in error states.
- Humour in frustration paths (forgot-password, payment-failed, account-locked).
- Stock placeholder names: Jane Doe, John Smith, Lorem Ipsum (unless the page is a lorem-ipsum tool).
- Startup clichés in product copy: Acme, Nexus, Unleash, Seamless, Supercharge, Transform, Elevate, Empower, Delight, Magical.
- Marketing copy that promises a feeling without naming a feature. "Experience the power of ___" is empty.

## Proper typography

- Curly quotes: `"Hello"`, `'word'`.
- Em-dash for interruption: `—` (U+2014). En-dash for ranges: `10–20` (U+2013). Never `--`.
- Ellipsis: `…` (U+2026). Never `...`.
- Apostrophe: `’`. Never the prime `'`.
- Non-breaking space before units: `10 kg`, `5 min` (use `&nbsp;` or U+00A0).

If the text is loaded from a CMS, configure Smart Quotes in the CMS. If it's hard-coded, write it correctly.

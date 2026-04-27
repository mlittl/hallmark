# Hallmark

A design skill for AI coding assistants. Makes the UIs they generate look made, not generated.

**Powered by Together AI.**

---

## What it is

Hallmark is a single, opinionated skill — short on purpose — that teaches Claude Code / Cursor / Codex a firm, consensus-backed set of rules for typography, colour, layout, motion, interaction, responsive behaviour, and copy. It refuses to design without a confirmed audience, use case, and tone. It refuses to emit the on-distribution defaults every LLM was trained into (Inter + purple gradient + centred hero + 3-column icon tiles).

It ships one holistic verb and two auxiliary ones:

| Invocation | What it does |
| --- | --- |
| *(default)* | Build / edit UI. Requires design context before touching code. |
| `hallmark audit <target>` | Score existing code against the named anti-patterns. Returns a punch list. |
| `hallmark refine <target>` | Apply the ruleset to polish existing code with the smallest possible diff. |

---

## Install

### Any harness, via npx

```
npx skills add hallmark
```

### Claude Code

Copy [`skill/SKILL.md`](skill/SKILL.md) and [`skill/references/`](skill/references/) into `~/.claude/skills/hallmark/`.

### Cursor

Create `.cursor/rules/hallmark.mdc` with the body of `SKILL.md` (no frontmatter).

### Manual

`git clone` this repo; copy `skill/` into whatever config directory your agent uses.

---

## Philosophy

Five skills — [impeccable](https://github.com/pbakaus/impeccable), [kami](https://github.com/tw93/kami), [taste-skill](https://github.com/Leonxlnx/taste-skill), Anthropic's [frontend-design skill](https://github.com/anthropics/skills), and the Claude [frontend aesthetics cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics) — have converged on roughly the same anti-slop ruleset. Hallmark takes that consensus, restates it in one voice, and keeps the surface small so it actually gets loaded into context.

Hallmark's distinct choices:

- **One skill, three verbs.** Not eighteen commands. Use the default; reach for `audit` or `refine` when you need them.
- **Design-context gate.** No audience + use case + tone → no design. The skill will ask.
- **Tone as a first-class decision.** "Clean and modern" is rejected. You pick an extreme: editorial, brutalist, soft, utilitarian, luxury, playful, technical, austere.
- **The slop test.** Before handing back, the skill runs ten yes/no checks. One yes fails the output.

---

## The landing page

[`site/`](site/) is a live specimen — it's the skill applied to itself. Serve it statically:

```
cd site && python3 -m http.server 4173
# → http://localhost:4173
```

The page uses Together AI's "The Future" typeface (distributed here with permission for demonstration), an OKLCH warm-oat palette anchored at hue 80, a single signal-orange accent (`#FC4C02`, ≤ 3 % of any view), and a drafting-specimen layout language — hairline rules, small-caps section numbering, asymmetric columns.

No framework. No build step. One `index.html`, four stylesheets, one ES module.

---

## Repo layout

```
hallmark/
├── README.md               ← you are here
├── LICENSE                 ← MIT
├── package.json            ← for `npx skills add`
├── skill/
│   ├── SKILL.md            ← main routing + principles
│   └── references/
│       ├── typography.md
│       ├── color.md
│       ├── layout-and-space.md
│       ├── motion.md
│       ├── interaction-and-states.md
│       ├── responsive.md
│       ├── copy.md
│       └── anti-patterns.md
└── site/
    ├── index.html
    ├── css/{tokens,base,components,sections}.css
    ├── js/main.js
    └── fonts/the-future-*.woff2
```

---

## Credits

Built on the open work of Paul Bakaus ([impeccable](https://github.com/pbakaus/impeccable)), tw93 ([kami](https://github.com/tw93/kami)), Leonxlnx ([taste-skill](https://github.com/Leonxlnx/taste-skill)), and Anthropic's skills team. Where their rules overlapped, Hallmark adopted them; where they diverged, Hallmark picked. See each source for its own deeper treatment of the same problem.

---

## Licence

MIT. Use it, fork it, ship it.

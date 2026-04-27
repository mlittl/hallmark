// Hallmark — reveals + theme picker + microinteractions.
// Dogfoods the patterns in skill/references/microinteractions.md.

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* — Page-load reveals (one orchestrated entrance) ——————————— */
const reveals = document.querySelectorAll(".reveal");
if (reduced || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
}

/* — Copy-to-clipboard (silent success, label swap pattern) ————— */
const copyBtns = document.querySelectorAll("[data-copy-btn]");
copyBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const source = btn.closest("[data-copy-source]");
    const textNode = source && source.querySelector("[data-copy-text]");
    const text = textNode ? textNode.textContent.trim() : "";
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }

    btn.dataset.state = "copied";
    btn.setAttribute("aria-live", "polite");
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
      delete btn.dataset.state;
    }, 2200);
  });
});

/* — Theme picker ————————————————————————————————————— */
const THEMES = {
  specimen:  "Specimen",
  midnight:  "Midnight",
  brutal:    "Brutal",
  garden:    "Garden",
  atelier:   "Atelier",
  newsprint: "Newsprint",
  terminal:  "Terminal",
  manifesto: "Manifesto",
  salon:     "Salon",
  linen:     "Linen",
  almanac:   "Almanac",
  sport:     "Sport",
};
const STORAGE_KEY = "hallmark-theme";

const root = document.documentElement;
const themer = document.querySelector(".themer");
const trigger = document.getElementById("themer-trigger");
const panel = document.getElementById("themer-panel");
const currentLabel = document.querySelector("[data-theme-current]");
const buttons = document.querySelectorAll("[data-theme-btn]");

function setPressed(theme) {
  buttons.forEach((btn) => {
    const active = btn.dataset.themeBtn === theme;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
  if (currentLabel) currentLabel.textContent = THEMES[theme] || "Specimen";
}

function applyTheme(theme) {
  if (!THEMES[theme]) return;
  const apply = () => {
    root.dataset.theme = theme;
    setPressed(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  };
  if (!reduced && document.startViewTransition) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}

const stored = (() => {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
})();
const initial = THEMES[stored] ? stored : (root.dataset.theme || "specimen");
setPressed(initial);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.themeBtn);
    closePanel();
    trigger.focus();
  });
});

/* — Popover open/close ————————————————————————————————— */
function isOpen() { return themer.getAttribute("aria-expanded") === "true"; }

function openPanel() {
  themer.setAttribute("aria-expanded", "true");
  trigger.setAttribute("aria-expanded", "true");
  document.addEventListener("keydown", onKey);
  document.addEventListener("click", onOutside, { capture: true });
  // Focus the currently-pressed theme button so arrow keys make sense
  const active = panel.querySelector('[aria-pressed="true"]') || panel.querySelector("[data-theme-btn]");
  if (active) {
    requestAnimationFrame(() => active.focus());
  }
}

function closePanel() {
  themer.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-expanded", "false");
  document.removeEventListener("keydown", onKey);
  document.removeEventListener("click", onOutside, { capture: true });
}

function togglePanel() { isOpen() ? closePanel() : openPanel(); }

trigger.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePanel();
});

function onKey(e) {
  if (e.key === "Escape") {
    closePanel();
    trigger.focus();
  }
}

function onOutside(e) {
  if (!themer.contains(e.target)) closePanel();
}

// Arrow-key navigation in the panel
panel.addEventListener("keydown", (e) => {
  const focusables = Array.from(panel.querySelectorAll("[data-theme-btn]"));
  const i = focusables.indexOf(document.activeElement);
  if (i < 0) return;
  let next = i;
  if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % focusables.length;
  else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + focusables.length) % focusables.length;
  else if (e.key === "Home") next = 0;
  else if (e.key === "End") next = focusables.length - 1;
  else return;
  e.preventDefault();
  focusables[next].focus();
});

/* — Global keyboard shortcuts ————————————————————————————— */
// "T" opens the theme picker — shown via the delay-revealed kbd hint.
document.addEventListener("keydown", (e) => {
  // Don't intercept if the user is typing in an input
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (e.key === "t" || e.key === "T") {
    e.preventDefault();
    if (!isOpen()) openPanel();
  }
});

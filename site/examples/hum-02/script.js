/* Hum · Sprout — nav scroll-frost + counter tick-up on view-enter. */
(function () {
  const nav = document.getElementById('nav');
  if (nav) {
    let ticking = false;
    function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 24); ticking = false; }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();
  }

  /* Count up to data-to once visible */
  const counters = Array.from(document.querySelectorAll('.count'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function run(el) {
    const to = parseInt(el.dataset.to, 10) || 0;
    if (reduce) { el.textContent = to; return; }
    const dur = 1100, start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
      else { el.textContent = to; el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 320, easing: 'ease-out' }); }
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && counters.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { io.observe(c); });
  } else { counters.forEach(run); }
})();

(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const btn = document.querySelector(".navToggle");
  const nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("isOpen");
      btn.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("isOpen");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Slow reveal + subtle stagger
  const nodes = document.querySelectorAll(".reveal, .revealSection");
  nodes.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("isVisible");
    });
  }, { threshold: 0.12 });

  nodes.forEach(n => io.observe(n));
})();

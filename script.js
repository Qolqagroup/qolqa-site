(() => {
  // Footer year
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

  // Reveal on scroll (subtle, luxury)
  const targets = document.querySelectorAll(".section, .hero__left, .hero__right");
  targets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("isVisible");
    });
  }, { threshold: 0.12 });

  targets.forEach(el => io.observe(el));

  // Slow ambient drift (almost imperceptible)
  const halo = document.querySelector(".ambient__halo");
  if (!halo) return;

  let tx = 0, ty = 0;
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    tx = x * 10;
    ty = y * 10;
  }, { passive: true });

  const tick = () => {
    halo.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    requestAnimationFrame(tick);
  };
  tick();
})();

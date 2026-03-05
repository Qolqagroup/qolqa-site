(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Subtle parallax drift for the glow (luxury, almost imperceptible)
  const glow = document.querySelector(".bg-glow");
  if (!glow) return;

  let tx = 0, ty = 0;
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    tx = x * 10;
    ty = y * 10;
  }, { passive: true });

  const tick = () => {
    glow.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    requestAnimationFrame(tick);
  };
  tick();
})();

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/* Mobile navigation */
const menuToggle = qs(".menu-toggle");
const navPanel = qs(".nav-panel");

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const open = navPanel.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  qsa(".nav-panel a").forEach(link => {
    link.addEventListener("click", () => {
      navPanel.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navPanel.contains(event.target) && !menuToggle.contains(event.target)) {
      navPanel.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* Scroll progress */
const progress = qs(".scroll-progress");
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${value}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* Soft reveal animation */
const revealItems = qsa(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealItems.forEach(el => observer.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("visible"));
}

/* Community role switcher */
const laneTabs = qsa(".lane-tab");
const lanePanels = qsa(".lane-panel");

laneTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const lane = tab.dataset.lane;

    laneTabs.forEach(item => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    lanePanels.forEach(panel => {
      panel.classList.toggle("hidden", panel.dataset.panel !== lane);
    });
  });
});

/* Current year */
const year = qs("#year");
if (year) year.textContent = new Date().getFullYear();

/* Desktop pointer glow — disabled on touch */
const glow = qs(".cursor-glow");
if (glow && window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
  let targetX = -300;
  let targetY = -300;
  let x = targetX;
  let y = targetY;

  window.addEventListener("pointermove", event => {
    targetX = event.clientX;
    targetY = event.clientY;
    glow.style.opacity = "1";
  }, { passive: true });

  const animateGlow = () => {
    x += (targetX - x) * 0.14;
    y += (targetY - y) * 0.14;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    requestAnimationFrame(animateGlow);
  };
  animateGlow();

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

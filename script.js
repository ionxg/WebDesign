// ---- Design switcher ----
const STORAGE_KEY = "selectedDesign";
const switcher = document.querySelector(".switcher");
const switcherToggle = document.getElementById("switcherToggle");
const switcherCurrent = switcher.querySelector(".switcher__current");
const switcherBtns = document.querySelectorAll(".switcher__btn");
const designs = document.querySelectorAll(".design");

const LABELS = { property: "Property", hospitality: "Hospitality", aurora: "Studio" };

function setDesign(name) {
  document.body.setAttribute("data-design", name);

  designs.forEach((d) => {
    d.hidden = d.dataset.name !== name;
  });
  switcherBtns.forEach((b) => {
    b.classList.toggle("is-active", b.dataset.target === name);
  });
  if (switcherCurrent) switcherCurrent.textContent = LABELS[name] || "Design";

  try {
    localStorage.setItem(STORAGE_KEY, name);
  } catch (e) {
    /* storage unavailable — ignore */
  }

  // Re-run reveal animations for the now-visible design
  revealIn(document.querySelector(`.design[data-name="${name}"]`));
  window.scrollTo({ top: 0 });
}

// Expand / collapse the options
function setExpanded(open) {
  switcher.classList.toggle("is-collapsed", !open);
  switcherToggle.setAttribute("aria-expanded", String(open));
}
switcherToggle.addEventListener("click", () => {
  setExpanded(switcher.classList.contains("is-collapsed"));
});

switcherBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setDesign(btn.dataset.target);
    setExpanded(false); // collapse after choosing
  });
});

// Collapse when clicking elsewhere
document.addEventListener("click", (e) => {
  if (!switcher.contains(e.target)) setExpanded(false);
});

// ---- Reveal on scroll ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function revealIn(scope) {
  if (!scope) return;
  scope.querySelectorAll(".reveal").forEach((el, i) => {
    el.classList.remove("is-visible");
    el.style.transitionDelay = `${i * 0.07}s`;
    observer.observe(el);
  });
}

// ---- Current year ----
document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---- Demo form handler ----
function handleSubmit(event) {
  event.preventDefault();
  const note = event.target.querySelector(".contact__note");
  if (note) note.hidden = false;
  event.target.reset();
  return false;
}

// ---- Init ----
let initial = "property";
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "property" || saved === "hospitality" || saved === "aurora") initial = saved;
} catch (e) {
  /* ignore */
}
setDesign(initial);

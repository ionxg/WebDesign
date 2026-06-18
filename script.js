// ---- Build the page from the registered designs ----
const STORAGE_KEY = "selectedDesign";
const registered = window.__designs || [];

const designRoot = document.getElementById("designRoot");
const switcherOptions = document.getElementById("switcherOptions");
const LABELS = {};

registered.forEach((def, i) => {
  // The design section itself
  const main = document.createElement("main");
  main.className = `design design--${def.name}`;
  main.dataset.name = def.name;
  main.hidden = i !== 0; // only the first is visible until a choice is made
  main.innerHTML = def.html;
  designRoot.appendChild(main);

  // Its button in the switcher
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "switcher__btn";
  btn.dataset.target = def.name;
  btn.textContent = def.label;
  switcherOptions.appendChild(btn);

  LABELS[def.name] = def.label;
});

// ---- Design switcher ----
const switcher = document.querySelector(".switcher");
const switcherToggle = document.getElementById("switcherToggle");
const switcherCurrent = switcher.querySelector(".switcher__current");
const switcherBtns = document.querySelectorAll(".switcher__btn");
const designs = document.querySelectorAll(".design");

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
const names = registered.map((d) => d.name);
let initial = names[0] || "property";
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (names.includes(saved)) initial = saved;
} catch (e) {
  /* ignore */
}
setDesign(initial);

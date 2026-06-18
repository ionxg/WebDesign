// ---- Design registry ----
// Each design file calls registerDesign(...) to add itself to the list.
// script.js reads window.__designs and builds the page from it, so adding a
// new design is just a new file in /designs plus one <script> tag in index.html.
window.__designs = window.__designs || [];

window.registerDesign = function registerDesign(def) {
  // def: { name, label, html }
  window.__designs.push(def);
};

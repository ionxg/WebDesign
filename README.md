# Aurora landing page

A landing page concept for a fictional creative studio. I built it to practice
layout, responsive design, and a few small animations. It's just HTML, CSS and
plain JavaScript, so you can open it without installing anything.

## Running it

Open `index.html` in a browser. That's it.

## What's in here

- `index.html` — the shell: the design switcher and the `<script>` tags that pull everything together
- `styles.css` — all the styling
- `script.js` — the "middle" that combines the designs into the page, plus the switcher, the fade-in-on-scroll bits, and the fake form
- `designs/` — one file per design concept
  - `registry.js` — the small `registerDesign()` helper each design uses to add itself
  - `property.js`, `hospitality.js`, `aurora.js` — the markup for each design

Adding a new design is a new file in `designs/` (calling `registerDesign({...})`) plus one `<script>` line in `index.html`.
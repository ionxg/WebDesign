# Web design portfolio

A handful of landing page concepts I built to practice layout, responsive design,
and a few small animations. Each one is a different fictional brand, and you can
flip between them with the switcher in the top-right corner. It remembers your
last pick, so it'll still be there when you come back.

It's just HTML, CSS, and plain JavaScript — no build step, no dependencies. Open
it and it runs.

## The designs

- **Property** — a real estate / property brand
- **Hospitality** — a hotel-ish, warmer look
- **Aurora** — a creative studio concept
- **Startup** — a SaaS landing page (Nyx)

## Running it

Open `index.html` in a browser. That's the whole thing.

## How it's put together

- `index.html` — the shell: the switcher and the `<script>` tags that pull everything in
- `styles.css` — all the styling
- `script.js` — the "middle" that stitches the designs into the page: the switcher,
  fade-in-on-scroll, the demo contact form, and remembering your choice in `localStorage`
- `designs/` — one file per design concept
  - `registry.js` — the little `registerDesign({...})` helper each design uses to add itself
  - `property.js`, `hospitality.js`, `aurora.js`, `startup.js` — the markup for each one

## Adding another design

1. Drop a new file in `designs/` that calls `registerDesign({ name, label, html })`
2. Add one `<script>` line for it in `index.html`

That's it — `script.js` picks it up from the registry and builds the switcher button
and section automatically. The first design registered is the one shown by default.

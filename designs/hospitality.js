// DESIGN 2 · HOSPITALITY / HOTEL
registerDesign({
  name: "hospitality",
  label: "Hospitality",
  html: `
    <header class="nav">
      <div class="container nav__inner">
        <a href="#" class="logo">Maison<span>Lumière</span></a>
        <nav class="nav__links">
          <a href="#h-rooms">Rooms</a>
          <a href="#h-amenities">Amenities</a>
          <a href="#h-dining">Dining</a>
          <a href="#h-book" class="btn btn--primary">Book your stay</a>
        </nav>
      </div>
    </header>

    <section class="hero hero--hospitality">
      <div class="hero__overlay" aria-hidden="true"></div>
      <div class="container hero__inner">
        <p class="eyebrow reveal">A boutique retreat · Coastal escape</p>
        <h1 class="hero__title reveal">Where every stay<br />feels like a <span class="accent">homecoming</span>.</h1>
        <p class="hero__lead reveal">
          Sun-warmed suites, slow mornings, and a shoreline that's all yours.
          Maison Lumière is your quiet luxury by the sea.
        </p>
        <div class="hero__cta reveal">
          <a href="#h-book" class="btn btn--primary">Check availability</a>
          <a href="#h-rooms" class="btn btn--ghost">Explore rooms</a>
        </div>
      </div>
    </section>

    <section class="section" id="h-rooms">
      <div class="container">
        <div class="section__head section__head--center">
          <p class="eyebrow">Accommodation</p>
          <h2 class="section__title">Rooms &amp; suites</h2>
          <p class="section__sub">Each room designed for rest, light, and the sound of the sea.</p>
        </div>
        <div class="grid grid--3">
          <article class="room reveal">
            <div class="room__media" style="--c1:#e6d7c3;--c2:#c2a37c"></div>
            <div class="room__body">
              <h3>Garden Room</h3>
              <p>A serene retreat opening onto the courtyard gardens.</p>
              <div class="room__foot"><span class="room__price">$220<small>/night</small></span><a href="#h-book" class="link">Reserve →</a></div>
            </div>
          </article>
          <article class="room reveal">
            <div class="room__media" style="--c1:#d9c7b8;--c2:#a98e74"></div>
            <div class="room__body">
              <h3>Ocean Suite</h3>
              <p>Floor-to-ceiling views and a private sea-facing terrace.</p>
              <div class="room__foot"><span class="room__price">$390<small>/night</small></span><a href="#h-book" class="link">Reserve →</a></div>
            </div>
          </article>
          <article class="room reveal">
            <div class="room__media" style="--c1:#e3d2c0;--c2:#b8946b"></div>
            <div class="room__body">
              <h3>Lumière Penthouse</h3>
              <p>Our crowning suite, with rooftop plunge pool and lounge.</p>
              <div class="room__foot"><span class="room__price">$680<small>/night</small></span><a href="#h-book" class="link">Reserve →</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="h-amenities">
      <div class="container">
        <div class="section__head section__head--center">
          <p class="eyebrow">Stay well</p>
          <h2 class="section__title">Amenities</h2>
        </div>
        <div class="features">
          <div class="feature reveal"><div class="feature__icon">≈</div><h3>Infinity pool</h3><p>A heated pool that melts into the horizon.</p></div>
          <div class="feature reveal"><div class="feature__icon">❋</div><h3>Spa &amp; sauna</h3><p>Treatments rooted in coastal botanicals.</p></div>
          <div class="feature reveal"><div class="feature__icon">☼</div><h3>Private beach</h3><p>Loungers, cabanas, and sunset service.</p></div>
          <div class="feature reveal"><div class="feature__icon">✦</div><h3>Concierge</h3><p>Day trips, dining, and the little details.</p></div>
        </div>
      </div>
    </section>

    <section class="section" id="h-dining">
      <div class="container about">
        <div class="about__text">
          <p class="eyebrow">The table</p>
          <h2 class="section__title">Dining at Lumière</h2>
          <p>Seasonal coastal cuisine from our kitchen, served beneath the olive trees or by candlelight on the terrace.</p>
          <p>Breakfast is unhurried, dinner is a celebration, and the wine list is worth lingering over.</p>
          <a href="#h-book" class="btn btn--primary">Reserve a table</a>
        </div>
        <ul class="about__list">
          <li><strong>Sunrise breakfast</strong>Fresh pastries, fruit, and sea views.</li>
          <li><strong>Coastal lunch</strong>Light plates by the pool.</li>
          <li><strong>Candlelit dinner</strong>A tasting menu that tells a story.</li>
          <li><strong>Nightcap bar</strong>Cocktails under the stars.</li>
        </ul>
      </div>
    </section>

    <section class="section section--alt" id="h-book">
      <div class="container contact">
        <p class="eyebrow">Reservations</p>
        <h2 class="section__title">Book your stay</h2>
        <p class="section__sub">Share your dates and we'll craft the perfect escape.</p>
        <form class="contact__form" onsubmit="return handleSubmit(event)">
          <div class="field">
            <input type="text" required placeholder=" " />
            <label>Your name</label>
          </div>
          <div class="field">
            <input type="email" required placeholder=" " />
            <label>Email address</label>
          </div>
          <div class="field">
            <input type="date" required placeholder=" " />
            <label class="label--static">Check-in</label>
          </div>
          <div class="field">
            <input type="date" required placeholder=" " />
            <label class="label--static">Check-out</label>
          </div>
          <div class="field field--full">
            <textarea rows="3" placeholder=" "></textarea>
            <label>Any special requests?</label>
          </div>
          <button type="submit" class="btn btn--primary">Request booking</button>
          <p class="contact__note" hidden>Thanks! This is a demo form — no booking was actually made.</p>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <a href="#" class="logo">Maison<span>Lumière</span></a>
        <p>© <span class="year"></span> Maison Lumière. A coastal retreat.</p>
        <div class="footer__social">
          <a href="#" aria-label="Instagram">In</a>
          <a href="#" aria-label="Pinterest">Pt</a>
        </div>
      </div>
    </footer>
  `,
});

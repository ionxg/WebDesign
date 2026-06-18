// DESIGN 1 · PROPERTY / REAL ESTATE
registerDesign({
  name: "property",
  label: "Property",
  html: `
    <header class="nav">
      <div class="container nav__inner">
        <a href="#" class="logo">Haven<span>Estates</span></a>
        <nav class="nav__links">
          <a href="#p-listings">Listings</a>
          <a href="#p-why">Why us</a>
          <a href="#p-agents">Agents</a>
          <a href="#p-contact" class="btn btn--primary">Book a viewing</a>
        </nav>
      </div>
    </header>

    <section class="hero hero--property">
      <div class="container hero__inner">
        <p class="eyebrow reveal">Luxury real estate · Since 1998</p>
        <h1 class="hero__title reveal">Find a place<br />you'll love to <span class="accent">call home</span>.</h1>
        <p class="hero__lead reveal">
          Hand-picked homes and investment properties across the city's most
          desirable neighbourhoods, guided by agents who know every street.
        </p>

        <form class="search reveal" onsubmit="return handleSubmit(event)">
          <div class="search__field">
            <label>Location</label>
            <input type="text" placeholder="City or neighbourhood" />
          </div>
          <div class="search__field">
            <label>Type</label>
            <select>
              <option>Any type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>
          <div class="search__field">
            <label>Max price</label>
            <select>
              <option>No max</option>
              <option>$500k</option>
              <option>$1M</option>
              <option>$2M+</option>
            </select>
          </div>
          <button type="submit" class="btn btn--primary search__btn">Search</button>
        </form>

        <div class="hero__stats reveal">
          <div><strong>1,200+</strong><span>Homes sold</span></div>
          <div><strong>25</strong><span>Years of trust</span></div>
          <div><strong>98%</strong><span>Client satisfaction</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="p-listings">
      <div class="container">
        <div class="section__head">
          <h2 class="section__title">Featured listings</h2>
          <p class="section__sub">A selection of homes newly on the market.</p>
        </div>
        <div class="grid grid--3">
          <article class="property reveal">
            <div class="property__media" style="--c1:#cdbfa6;--c2:#8a7b5c">
              <span class="property__badge">For sale</span>
            </div>
            <div class="property__body">
              <p class="property__price">$1,250,000</p>
              <h3>Maple Ridge Residence</h3>
              <p class="property__addr">14 Maple Ridge Dr, Westbrook</p>
              <ul class="property__specs">
                <li>4 Beds</li><li>3 Baths</li><li>2,950 sqft</li>
              </ul>
            </div>
          </article>
          <article class="property reveal">
            <div class="property__media" style="--c1:#b9c4c9;--c2:#5d7a82">
              <span class="property__badge">New</span>
            </div>
            <div class="property__body">
              <p class="property__price">$845,000</p>
              <h3>Harbourview Loft</h3>
              <p class="property__addr">8 Pier Lane, Old Harbour</p>
              <ul class="property__specs">
                <li>2 Beds</li><li>2 Baths</li><li>1,640 sqft</li>
              </ul>
            </div>
          </article>
          <article class="property reveal">
            <div class="property__media" style="--c1:#d8c2b0;--c2:#9c6f4e">
              <span class="property__badge">For sale</span>
            </div>
            <div class="property__body">
              <p class="property__price">$2,100,000</p>
              <h3>The Birchwood Villa</h3>
              <p class="property__addr">3 Birchwood Court, Hillcrest</p>
              <ul class="property__specs">
                <li>5 Beds</li><li>4 Baths</li><li>4,200 sqft</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="p-why">
      <div class="container">
        <div class="section__head">
          <h2 class="section__title">Why choose Haven</h2>
          <p class="section__sub">Personal service from first viewing to final signature.</p>
        </div>
        <div class="features">
          <div class="feature reveal">
            <div class="feature__icon">⌂</div>
            <h3>Curated portfolio</h3>
            <p>Every listing is vetted for quality, value, and long-term potential.</p>
          </div>
          <div class="feature reveal">
            <div class="feature__icon">◷</div>
            <h3>Move at your pace</h3>
            <p>No pressure — we guide you with honest, market-backed advice.</p>
          </div>
          <div class="feature reveal">
            <div class="feature__icon">✓</div>
            <h3>End-to-end support</h3>
            <p>Mortgages, legal, and moving partners, all handled in one place.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="p-agents">
      <div class="container about">
        <div class="about__text">
          <h2 class="section__title">Meet your local experts</h2>
          <p>Our agents live and breathe these neighbourhoods. They'll match you with a home that fits your life — not just your budget.</p>
          <p>Book a no-obligation consultation and we'll build a shortlist tailored to you within 48 hours.</p>
          <a href="#p-contact" class="btn btn--primary">Talk to an agent</a>
        </div>
        <ul class="about__list">
          <li><strong>Discovery</strong>We learn your goals, must-haves, and budget.</li>
          <li><strong>Shortlist</strong>We curate homes worth your time.</li>
          <li><strong>Viewings</strong>We arrange private tours around you.</li>
          <li><strong>Close</strong>We negotiate and handle the paperwork.</li>
        </ul>
      </div>
    </section>

    <section class="section section--alt" id="p-contact">
      <div class="container contact">
        <h2 class="section__title">Book a private viewing</h2>
        <p class="section__sub">Tell us what you're looking for and we'll be in touch within 24 hours.</p>
        <form class="contact__form" onsubmit="return handleSubmit(event)">
          <div class="field">
            <input type="text" required placeholder=" " />
            <label>Your name</label>
          </div>
          <div class="field">
            <input type="email" required placeholder=" " />
            <label>Email address</label>
          </div>
          <div class="field field--full">
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Which property or area interests you?</label>
          </div>
          <button type="submit" class="btn btn--primary">Request viewing</button>
          <p class="contact__note" hidden>Thanks! This is a demo form — no message was actually sent.</p>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <a href="#" class="logo">Haven<span>Estates</span></a>
        <p>© <span class="year"></span> Haven Estates. All rights reserved.</p>
        <div class="footer__social">
          <a href="#" aria-label="Facebook">Fb</a>
          <a href="#" aria-label="Instagram">In</a>
        </div>
      </div>
    </footer>
  `,
});

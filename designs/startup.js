// DESIGN 4 · TECH STARTUP (Nyx) — SaaS landing page
registerDesign({
  name: "startup",
  label: "Startup",
  html: `
    <header class="nav">
      <div class="container nav__inner">
        <a href="#" class="logo">nyx<span>.</span></a>
        <nav class="nav__links">
          <a href="#s-features">Features</a>
          <a href="#s-pricing">Pricing</a>
          <a href="#s-about">How it works</a>
          <a href="#s-contact" class="btn btn--primary">Get started</a>
        </nav>
      </div>
    </header>

    <section class="hero hero--startup">
      <div class="container hero__inner">
        <p class="eyebrow reveal">Backed by Y&nbsp;Combinator · Series A</p>
        <h1 class="hero__title reveal">Ship faster with<br />AI that <span class="grad">writes the boring code</span>.</h1>
        <p class="hero__lead reveal">
          Nyx plugs into your stack and automates the repetitive 80% — tests,
          migrations, and boilerplate — so your team can focus on the product.
        </p>
        <div class="hero__cta reveal">
          <a href="#s-contact" class="btn btn--primary">Start free trial</a>
          <a href="#s-features" class="btn btn--ghost">See how it works</a>
        </div>
        <div class="hero__stats reveal">
          <div><strong>12k+</strong><span>Developers onboard</span></div>
          <div><strong>4.2M</strong><span>PRs automated</span></div>
          <div><strong>99.99%</strong><span>Uptime SLA</span></div>
        </div>
      </div>
      <div class="hero__glow" aria-hidden="true"></div>
    </section>

    <section class="trustbar reveal">
      <div class="container trustbar__inner">
        <span>Trusted by engineering teams at</span>
        <ul>
          <li>Vercel</li>
          <li>Linear</li>
          <li>Stripe</li>
          <li>Notion</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>

    <section class="section" id="s-features">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="eyebrow">Platform</span>
          <h2 class="section__title">Everything you need to move fast</h2>
          <p class="section__sub">One platform, no glue code. Connect a repo and you're live in minutes.</p>
        </div>
        <div class="features">
          <div class="feature reveal">
            <div class="feature__icon">⚡</div>
            <h3>Instant setup</h3>
            <p>Connect GitHub or GitLab and Nyx indexes your codebase in seconds.</p>
          </div>
          <div class="feature reveal">
            <div class="feature__icon">🤖</div>
            <h3>AI pull requests</h3>
            <p>Describe a change in plain English and get a reviewable PR back.</p>
          </div>
          <div class="feature reveal">
            <div class="feature__icon">🔒</div>
            <h3>SOC 2 secure</h3>
            <p>Your code never trains our models. Encrypted in transit and at rest.</p>
          </div>
          <div class="feature reveal">
            <div class="feature__icon">📈</div>
            <h3>Ship analytics</h3>
            <p>Track velocity, review time, and coverage from one dashboard.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="s-pricing">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="eyebrow">Pricing</span>
          <h2 class="section__title">Simple plans that scale with you</h2>
          <p class="section__sub">Start free. Upgrade when your team grows. Cancel anytime.</p>
        </div>
        <div class="pricing">
          <article class="plan reveal">
            <h3 class="plan__name">Starter</h3>
            <p class="plan__price"><strong>$0</strong><span>/mo</span></p>
            <p class="plan__desc">For solo devs and side projects.</p>
            <ul class="plan__list">
              <li>1 repository</li>
              <li>50 AI PRs / month</li>
              <li>Community support</li>
            </ul>
            <a href="#s-contact" class="btn btn--ghost plan__cta">Start free</a>
          </article>
          <article class="plan plan--featured reveal">
            <span class="plan__badge">Most popular</span>
            <h3 class="plan__name">Team</h3>
            <p class="plan__price"><strong>$49</strong><span>/seat/mo</span></p>
            <p class="plan__desc">For growing engineering teams.</p>
            <ul class="plan__list">
              <li>Unlimited repositories</li>
              <li>Unlimited AI PRs</li>
              <li>Ship analytics dashboard</li>
              <li>Priority support</li>
            </ul>
            <a href="#s-contact" class="btn btn--primary plan__cta">Start 14-day trial</a>
          </article>
          <article class="plan reveal">
            <h3 class="plan__name">Enterprise</h3>
            <p class="plan__price"><strong>Custom</strong></p>
            <p class="plan__desc">For organizations with scale needs.</p>
            <ul class="plan__list">
              <li>SSO &amp; SCIM</li>
              <li>Self-hosted option</li>
              <li>99.99% uptime SLA</li>
              <li>Dedicated success manager</li>
            </ul>
            <a href="#s-contact" class="btn btn--ghost plan__cta">Contact sales</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="s-about">
      <div class="container about">
        <div class="about__text">
          <span class="eyebrow">How it works</span>
          <h2 class="section__title">From idea to merged in three steps</h2>
          <p>
            No new workflow to learn. Nyx lives where your team already works —
            in your repo, your CI, and your pull requests.
          </p>
          <p>Most teams ship their first AI-authored PR within an hour of signing up.</p>
          <a href="#s-contact" class="btn btn--primary">Get started free</a>
        </div>
        <ul class="about__list">
          <li><strong>1 · Connect</strong>Link your repo with one click — read-only by default.</li>
          <li><strong>2 · Describe</strong>Open an issue or type a prompt. Nyx drafts the change.</li>
          <li><strong>3 · Review &amp; merge</strong>Review the PR like any other and merge with confidence.</li>
        </ul>
      </div>
    </section>

    <section class="section section--alt" id="s-contact">
      <div class="container contact">
        <span class="eyebrow">Get started</span>
        <h2 class="section__title">Try Nyx free for 14 days</h2>
        <p class="section__sub">No credit card required. Talk to us and we'll set your team up.</p>
        <form class="contact__form" onsubmit="return handleSubmit(event)">
          <div class="field">
            <input type="text" required placeholder=" " />
            <label>Your name</label>
          </div>
          <div class="field">
            <input type="email" required placeholder=" " />
            <label>Work email</label>
          </div>
          <div class="field field--full">
            <textarea rows="4" required placeholder=" "></textarea>
            <label>Tell us about your team and stack</label>
          </div>
          <button type="submit" class="btn btn--primary">Request access</button>
          <p class="contact__note" hidden>Thanks! This is a demo form — no message was actually sent.</p>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <a href="#" class="logo">nyx<span>.</span></a>
        <p>© <span class="year"></span> Nyx Labs, Inc. Built for builders.</p>
        <div class="footer__social">
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="GitHub">Gh</a>
        </div>
      </div>
    </footer>
  `,
});

// DESIGN 4 · TECH STARTUP (Nyx) — "out of this world" cosmic SaaS landing page
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
      <div class="nyx-stars" aria-hidden="true"></div>
      <div class="nyx-aurora" aria-hidden="true"></div>
      <div class="container hero__inner nyx-hero">
        <div class="nyx-hero__copy">
          <p class="eyebrow nyx-chip reveal">◇ Backed by the void · Series A</p>
          <h1 class="hero__title nyx-title reveal">Ship at<br /><span class="grad">escape velocity</span>.</h1>
          <p class="hero__lead reveal">
            Nyx plugs into your stack and automates the repetitive 80% — tests,
            migrations, and boilerplate — so your team can leave the boring code
            behind and reach orbit.
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
        <div class="nyx-orbit reveal" aria-hidden="true">
          <div class="nyx-orbit__core"></div>
          <div class="nyx-orbit__ring nyx-orbit__ring--1"><span class="nyx-planet"></span></div>
          <div class="nyx-orbit__ring nyx-orbit__ring--2"><span class="nyx-planet nyx-planet--2"></span></div>
          <div class="nyx-orbit__ring nyx-orbit__ring--3"><span class="nyx-planet nyx-planet--3"></span></div>
        </div>
      </div>
    </section>

    <section class="nyx-marquee reveal" aria-label="Trusted by engineering teams">
      <div class="nyx-marquee__track">
        <span>Vercel</span><span>Linear</span><span>Stripe</span><span>Notion</span><span>Figma</span><span>Supabase</span>
        <span>Vercel</span><span>Linear</span><span>Stripe</span><span>Notion</span><span>Figma</span><span>Supabase</span>
      </div>
    </section>

    <section class="section" id="s-features">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="eyebrow">Platform</span>
          <h2 class="section__title">Everything you need to leave orbit</h2>
          <p class="section__sub">One platform, no glue code. Connect a repo and you're live before your coffee lands.</p>
        </div>
        <div class="features nyx-bento">
          <div class="feature nyx-card nyx-card--lg reveal">
            <div class="feature__icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg></div>
            <h3>Warp-speed setup</h3>
            <p>Connect GitHub or GitLab and Nyx maps your entire codebase in seconds — no config, no babysitting.</p>
          </div>
          <div class="feature nyx-card nyx-card--lg reveal">
            <div class="feature__icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg></div>
            <h3>PRs from plain English</h3>
            <p>Describe a change the way you'd say it out loud and get a clean, reviewable pull request back.</p>
          </div>
          <div class="feature nyx-card nyx-card--sm reveal">
            <div class="feature__icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></div>
            <h3>Zero-gravity security</h3>
            <p>SOC 2. Your code never trains our models.</p>
          </div>
          <div class="feature nyx-card nyx-card--sm reveal">
            <div class="feature__icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
            <h3>Ship telemetry</h3>
            <p>Velocity, review time, and coverage in one view.</p>
          </div>
          <div class="feature nyx-card nyx-card--sm reveal">
            <div class="feature__icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></div>
            <h3>Runs anywhere</h3>
            <p>Cloud, self-hosted, or air-gapped on your turf.</p>
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
      <div class="container contact nyx-panel">
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

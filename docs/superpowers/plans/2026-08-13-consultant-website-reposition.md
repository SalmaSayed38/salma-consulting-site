# Consultant Website Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the consultant site's copy from a payments-domain-specialist
positioning to a cross-industry operations/partnerships/delivery
positioning, and add a headshot photo to the About section.

**Architecture:** This is a content-only revision to an already-built,
already-merged static site (`index.html`, `style.css`, `script.js`,
`README.md` at repo root). No new tooling, no build step, no structural
HTML changes beyond one new `<img>` in the About section and its
supporting CSS. Every task is a targeted find-and-replace against
`index.html` (and, for the photo task, one additive block in `style.css`).

**Tech Stack:** Plain HTML5/CSS3, no framework, no build step (unchanged
from the original build).

## Global Constraints

- **No current employer name.** "PaySky" must never appear anywhere in
  `index.html`, `style.css`, or `script.js`.
- **No licensing/regulatory-expertise claims.** Copy must never claim or
  imply Salma is a regulatory or licensing specialist.
- **GIM UEMOA / MTN MoMo Marketplace / Valeo / Integrant / SEITech** are
  safe to use verbatim (platform names and past employers, not the current
  employer).
- **Hero stays photo-free.** The monogram "SS" in the hero is unchanged;
  the new headshot photo (`assets/headshot.jpg`, already added to the repo
  in commit `a3f2a20`) is used in the About section only.
- No new dependencies, no build step, no changes to `script.js` or
  `README.md`.

---

### Task 1: Add About-section headshot photo

**Files:**
- Modify: `index.html` (About section markup)
- Modify: `style.css` (add `.about-photo` rule near the existing
  `.credentials` rules, and one responsive tweak)

**Interfaces:**
- Consumes: `assets/headshot.jpg` (480×480 JPEG, already committed to the
  repo root's new `assets/` directory).
- Produces: `.about-photo` CSS class, used only in this task.

- [ ] **Step 1: Add the `<img>` tag to the About section**

In `index.html`, find:

```html
        <ul class="credentials">
          <li>MBA</li>
          <li>PMP — Project Management Professional</li>
          <li>CSM — Certified ScrumMaster</li>
        </ul>
```

Replace with:

```html
        <div class="about-side">
          <img class="about-photo" src="assets/headshot.jpg" alt="Salma Salem" width="480" height="480" loading="lazy">
          <ul class="credentials">
            <li>MBA</li>
            <li>PMP — Project Management Professional</li>
            <li>CSM — Certified ScrumMaster</li>
          </ul>
        </div>
```

(Wrapping in `.about-side` keeps the photo and credentials stacked
together as one grid column — the existing `.about-inner` grid still only
has two columns: `.about-text` and this new `.about-side`.)

- [ ] **Step 2: Add CSS for `.about-side` and `.about-photo`**

In `style.css`, find:

```css
.credentials {
  list-style: none;
  border-left: 2px solid var(--cyan);
  padding-left: 20px;
  align-self: start;
}
```

Replace with:

```css
.about-side {
  align-self: start;
}

.about-photo {
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--cyan);
  margin-bottom: 24px;
}

.credentials {
  list-style: none;
  border-left: 2px solid var(--cyan);
  padding-left: 20px;
}
```

(Note `align-self: start` moved from `.credentials` to the new
`.about-side` wrapper, since `.about-side` is now the direct grid child.)

- [ ] **Step 3: Verify no leftover references and correct nesting**

Run: `grep -c "about-side" index.html style.css`
Expected: `1` for each file (one opening usage in the HTML wrapper, one
CSS rule — the class name should appear exactly once per file since it's
only used/declared once each).

Run: `grep -c "about-photo" index.html style.css`
Expected: `1` for each file.

Run: `grep -c "assets/headshot.jpg" index.html`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add headshot photo to About section"
```

---

### Task 2: Rewrite page metadata and Hero

**Files:**
- Modify: `index.html` (`<head>` title/meta, `#hero` section)

**Interfaces:**
- None — pure content replacement, no new selectors or scripts involved.

- [ ] **Step 1: Replace the page title and meta description**

Find:

```html
  <title>Salma Salem — Payments &amp; Product Strategy Consultant</title>
  <meta name="description" content="Independent consultant in digital payments and product strategy. Fractional leadership, project consulting, and advisory for banks, fintechs, and telecom operators.">
```

Replace with:

```html
  <title>Salma Salem — Operations, Partnerships &amp; Delivery Consultant</title>
  <meta name="description" content="Independent consultant for management, partnerships, and delivery challenges — escalations, delays, stalled execution. 14+ years across automotive and fintech industries.">
```

- [ ] **Step 2: Replace the Hero H1 and subhead**

Find:

```html
        <h1>Payments &amp; Product,<br>Strategically Delivered</h1>
        <p class="hero-subhead">I help banks, payment schemes, fintechs, and telecom operators turn complex payment challenges into scalable products and lasting partnerships.</p>
```

Replace with:

```html
        <h1>Delays Fixed. Escalations Resolved.<br>Partnerships Built.</h1>
        <p class="hero-subhead">14+ years leading teams, partnerships, and delivery — from automotive engineering to digital payments. Brought in when execution has stalled, partners are at odds, or a team needs a steady hand to get things moving again.</p>
```

- [ ] **Step 3: Verify**

Run: `grep -c "Delays Fixed" index.html`
Expected: `1`

Run: `grep -c "Payments &amp; Product," index.html`
Expected: `0`

Run: `grep -c "Payments &amp; Product Strategy Consultant" index.html`
Expected: `0`

Run: `grep -c "Operations, Partnerships &amp; Delivery Consultant" index.html`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "Rewrite page metadata and hero for cross-industry positioning"
```

---

### Task 3: Rewrite Career Highlights body copy

**Files:**
- Modify: `index.html` (`#highlights` section)

**Interfaces:**
- None. Card headings ("18 Countries", "GIM UEMOA", "MTN MoMo
  Marketplace", "Executive Partnerships") and the 4-card grid are
  unchanged — only each `<p>` body changes.

- [ ] **Step 1: Replace the four highlight card bodies**

Find:

```html
          <div class="highlight-card">
            <h3>18 Countries</h3>
            <p>Led strategic payment initiatives across banking, telecom, and fintech markets in Africa and the Middle East.</p>
          </div>
          <div class="highlight-card">
            <h3>GIM UEMOA</h3>
            <p>Delivered a regional e-commerce payment platform to production.</p>
          </div>
          <div class="highlight-card">
            <h3>MTN MoMo Marketplace</h3>
            <p>Directed implementation, go-live, and stabilization of a mobile money marketplace.</p>
          </div>
          <div class="highlight-card">
            <h3>Executive Partnerships</h3>
            <p>Trusted advisor to banks, telecom operators, payment schemes, and fintech partners.</p>
          </div>
```

Replace with:

```html
          <div class="highlight-card">
            <h3>18 Countries</h3>
            <p>Built and ran executive partnerships across banking, telecom, and fintech markets in Africa and the Middle East — each with its own players, priorities, and politics to align.</p>
          </div>
          <div class="highlight-card">
            <h3>GIM UEMOA</h3>
            <p>Took a multi-country e-commerce payment platform from stalled to live, aligning banks, schemes, and partners who didn't naturally agree.</p>
          </div>
          <div class="highlight-card">
            <h3>MTN MoMo Marketplace</h3>
            <p>Directed go-live and stabilization of a marketplace platform under heavy timeline and partner pressure — turned a rocky launch into a stable one.</p>
          </div>
          <div class="highlight-card">
            <h3>Executive Partnerships</h3>
            <p>Trusted by leadership across banks, telecom operators, payment schemes, and fintechs to resolve what internal teams alone couldn't.</p>
          </div>
```

- [ ] **Step 2: Verify**

Run: `grep -c "Built and ran executive partnerships" index.html`
Expected: `1`

Run: `grep -c "Led strategic payment initiatives" index.html`
Expected: `0`

Run: `grep -c "<h3>18 Countries</h3>" index.html`
Expected: `1` (heading text must be untouched)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Reframe Career Highlights copy around transferable skills"
```

---

### Task 4: Restructure Services into problem-first cards

**Files:**
- Modify: `index.html` (`#services` section)

**Interfaces:**
- None. Still 3 cards inside the existing `.service-grid` — only card
  headings and bodies change (headings change from engagement-type names
  to problem-type names, per the approved spec).

- [ ] **Step 1: Replace the three service cards**

Find:

```html
          <div class="service-card">
            <h3>Fractional / Interim Leadership</h3>
            <p>Part-time, ongoing leadership for teams that need senior payments or product expertise without a full-time hire — strategic accounts, product delivery, or both.</p>
          </div>
          <div class="service-card">
            <h3>Project-Based Consulting</h3>
            <p>Defined-scope engagements: payment platform launch advisory, partnership strategy, and product roadmap reviews.</p>
          </div>
          <div class="service-card">
            <h3>Advisory &amp; Retainer</h3>
            <p>Ongoing, lighter-touch strategic guidance for founders and executives on a monthly basis.</p>
          </div>
```

Replace with:

```html
          <div class="service-card">
            <h3>Escalations &amp; Partner Recovery</h3>
            <p>When a partnership has stalled or a relationship has soured, I step in to rebuild trust and get delivery moving again — as a short project or an ongoing fractional role.</p>
          </div>
          <div class="service-card">
            <h3>Process &amp; Delivery Turnaround</h3>
            <p>For teams missing deadlines or drowning in ambiguity, I diagnose what's broken in the process and drive the fix — available project-based or as interim leadership.</p>
          </div>
          <div class="service-card">
            <h3>Cross-Functional Program Leadership</h3>
            <p>Ongoing or fractional leadership for programs that span teams, functions, or external partners and need one person accountable for getting it done — including a monthly advisory/retainer arrangement.</p>
          </div>
```

- [ ] **Step 2: Verify**

Run: `grep -c "Escalations &amp; Partner Recovery" index.html`
Expected: `1`

Run: `grep -c "Fractional / Interim Leadership" index.html`
Expected: `0`

Run: `grep -c "Advisory &amp; Retainer" index.html`
Expected: `0`

Run: `grep -c "service-card" index.html`
Expected: `3` (still exactly 3 cards)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Restructure Services into problem-first cards"
```

---

### Task 5: Rewrite About section copy

**Files:**
- Modify: `index.html` (`.about-text` paragraphs inside `#about`)

**Interfaces:**
- None. The `.about-photo`/`.about-side` wrapper from Task 1 and the
  credentials list are untouched by this task — only the two `<p>` tags
  inside `.about-text` change.

- [ ] **Step 1: Replace the About paragraphs**

Find:

```html
          <p>With 14+ years of experience, I've evolved from software engineering into product delivery, strategic account management, and digital payments. I partner with banks, payment schemes, fintechs, and telecom operators across Africa and the Middle East to align business strategy, customer needs, product vision, and execution.</p>
          <p>Currently, I lead strategic accounts and product delivery for a payments company. Previously, I built and scaled engineering and delivery functions at SEITech, Integrant, and Valeo.</p>
```

Replace with:

```html
          <p>With 14+ years of experience, I've worked across two very different industries — starting in automotive engineering at Valeo, then moving into product delivery, strategic account management, and digital payments at Integrant, SEITech, and beyond. That range is the point: the same skills — management, communication, partnership-building, and process improvement — solve problems regardless of industry.</p>
          <p>Currently, I lead strategic accounts and product delivery for a payments company, partnering with banks, payment schemes, fintechs, and telecom operators across Africa and the Middle East. I'm not a regulatory or licensing specialist — I'm the person who gets people, timelines, and partners aligned so the work actually ships.</p>
```

- [ ] **Step 2: Verify**

Run: `grep -c "starting in automotive engineering at Valeo" index.html`
Expected: `1`

Run: `grep -c "I've evolved from software engineering" index.html`
Expected: `0`

Run: `grep -ci "paysky" index.html`
Expected: `0`

Run: `grep -c "I'm not a regulatory or licensing specialist" index.html`
Expected: `1`

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Rewrite About copy with automotive-to-payments arc"
```

---

### Task 6: Update Contact heading

**Files:**
- Modify: `index.html` (`#contact` heading)

**Interfaces:**
- None. Form markup, honeypot, submit button, and LinkedIn link are
  untouched — only the `<h2>` text changes.

- [ ] **Step 1: Replace the Contact heading**

Find:

```html
        <h2>Let's talk about your next payments challenge</h2>
```

Replace with:

```html
        <h2>Let's talk about what's stuck</h2>
```

- [ ] **Step 2: Verify**

Run: `grep -c "Let's talk about what's stuck" index.html`
Expected: `1`

Run: `grep -c "your next payments challenge" index.html`
Expected: `0`

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "Update Contact heading to match new positioning"
```

---

### Task 7: Final QA sweep

**Files:**
- Modify: `index.html` (only if issues are found)

**Interfaces:**
- None — this task only verifies the output of Tasks 1–6.

- [ ] **Step 1: Confirm the employer name never appears**

Run: `grep -ci "paysky" index.html style.css script.js`
Expected: no matches in any of the three files.

- [ ] **Step 2: Confirm no regulatory/licensing-expertise claims were introduced**

Run: `grep -ni "licens\|regulat" index.html`
Expected: only one match — the About sentence "I'm not a regulatory or
licensing specialist" (a disclaimer, not a claim). If any other match
appears, read it in context and confirm it doesn't imply expertise; fix if
it does.

- [ ] **Step 3: Confirm every required new string is present exactly once**

Run:
```bash
grep -c "Delays Fixed" index.html
grep -c "Operations, Partnerships &amp; Delivery Consultant" index.html
grep -c "Built and ran executive partnerships" index.html
grep -c "Escalations &amp; Partner Recovery" index.html
grep -c "Process &amp; Delivery Turnaround" index.html
grep -c "Cross-Functional Program Leadership" index.html
grep -c "starting in automotive engineering at Valeo" index.html
grep -c "Let's talk about what's stuck" index.html
grep -c "about-photo" index.html
```
Expected: `1` for every line above.

- [ ] **Step 4: Confirm no old payments-specific strings remain**

Run:
```bash
grep -c "Payments &amp; Product," index.html
grep -c "Payments &amp; Product Strategy Consultant" index.html
grep -c "Fractional / Interim Leadership" index.html
grep -c "Project-Based Consulting" index.html
grep -c "Advisory &amp; Retainer" index.html
grep -c "your next payments challenge" index.html
grep -c "I've evolved from software engineering" index.html
```
Expected: `0` for every line above.

- [ ] **Step 5: Confirm required, unchanged elements are still intact**

Run:
```bash
grep -c "MTN MoMo Marketplace" index.html
grep -c "GIM UEMOA" index.html
grep -c 'id="contact-form"' index.html
grep -c "linkedin.com/in/salma-ssalem" index.html
grep -c "MBA" index.html
```
Expected: `1` for every line above (these were never meant to change).

- [ ] **Step 6: Commit (only if Steps 1–5 required fixes)**

```bash
git add index.html
git commit -m "Fix content QA issues"
```

If no fixes were needed, skip this commit.

---

## Manual steps required from Salma (not automatable by an agent)

None for this revision — no new Formspree, GitHub, or hosting steps.
Once merged, the live site (if already deployed per the original plan's
Task 10 README instructions) picks up these changes on the next `git
push` to the deployed branch.

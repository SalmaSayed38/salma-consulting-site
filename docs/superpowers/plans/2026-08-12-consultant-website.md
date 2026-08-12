# Consultant Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and prepare for deployment a one-page static website positioning Salma Salem as an independent digital payments / product strategy consultant.

**Architecture:** Single static page (`index.html` + `style.css` + `script.js`), no framework, no build step, no backend. Contact form posts to a third-party free service (Formspree). Hosted on GitHub Pages.

**Tech Stack:** Plain HTML5, CSS3 (custom properties, flexbox/grid), vanilla JS (ES6). No npm, no bundler, no dependencies.

## Global Constraints

- Never use the string "PaySky" anywhere in the site content (current employer must stay unnamed).
- Current role is described generically (e.g. "a payments company"), but "GIM UEMOA" and "MTN MoMo Marketplace" may be named specifically — they are platform names, not the employer's name.
- Free tools only: GitHub Pages for hosting (no custom domain purchase this phase), Formspree free tier for the contact form.
- No professional photo is available — hero uses typography + a monogram mark ("SS"), not an image.
- Visual style: "Modern Fintech" — dark navy-to-cyan gradient hero, cyan accent color, sans-serif system font stack, rounded elements.
- Section order (confirmed "Proof First"): Hero → Career Highlights → Services → About → Contact.
- No automated test suite is expected (static content site) — verification steps below use `grep` checks and manual browser checks instead.

---

## File Structure

```
salma-consulting-site/
├── index.html      # all page content/markup, single page
├── style.css       # all styles
├── script.js       # contact form submit handling only
├── README.md       # deployment + Formspree setup instructions
└── .gitignore
```

---

### Task 1: Project skeleton — HTML shell with anchor comments

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`
- Create: `.gitignore`

**Interfaces:**
- Produces: HTML section anchors `<!-- HERO CONTENT -->`, `<!-- HIGHLIGHTS CONTENT -->`, `<!-- SERVICES CONTENT -->`, `<!-- ABOUT CONTENT -->`, `<!-- CONTACT CONTENT -->` inside `index.html`, each later replaced verbatim by Tasks 3–7. CSS anchor comments `/* HERO STYLES */`, `/* HIGHLIGHTS STYLES */`, `/* SERVICES STYLES */`, `/* ABOUT STYLES */`, `/* CONTACT STYLES */`, `/* RESPONSIVE */` inside `style.css`, each later replaced by the matching task.

- [ ] **Step 1: Create `.gitignore`**

```
.DS_Store
```

- [ ] **Step 2: Create `index.html` with the full page shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Salma Salem — Payments &amp; Product Strategy Consultant</title>
  <meta name="description" content="Independent consultant in digital payments and product strategy. Fractional leadership, project consulting, and advisory for banks, fintechs, and telecom operators.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header id="top" class="site-nav">
    <a class="logo" href="#top">SS</a>
    <nav>
      <a href="#highlights">Highlights</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <!-- HERO CONTENT -->
    </section>

    <section id="highlights" class="highlights">
      <!-- HIGHLIGHTS CONTENT -->
    </section>

    <section id="services" class="services">
      <!-- SERVICES CONTENT -->
    </section>

    <section id="about" class="about">
      <!-- ABOUT CONTENT -->
    </section>

    <section id="contact" class="contact">
      <!-- CONTACT CONTENT -->
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; 2026 Salma Salem</p>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
```

- [ ] **Step 3: Create `style.css` with reset, design tokens, and section anchors**

```css
:root {
  --navy-dark: #0f172a;
  --navy: #1e3a5f;
  --cyan: #22d3ee;
  --cyan-dark: #0891b2;
  --text-dark: #0f172a;
  --text-light: #f8fafc;
  --text-muted: #64748b;
  --bg-light: #ffffff;
  --bg-alt: #f8fafc;
  --radius: 12px;
  --max-width: 1080px;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  color: var(--text-dark);
  background: var(--bg-light);
  line-height: 1.5;
}

a { color: inherit; text-decoration: none; }

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px 24px;
}

.site-nav .logo {
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
}

.site-nav nav {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.site-nav nav a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
}

.site-nav nav a:hover { color: var(--navy); }

.site-footer {
  text-align: center;
  padding: 32px 24px;
  color: var(--text-muted);
  font-size: 13px;
}

/* HERO STYLES */

/* HIGHLIGHTS STYLES */

/* SERVICES STYLES */

/* ABOUT STYLES */

/* CONTACT STYLES */

/* RESPONSIVE */
```

- [ ] **Step 4: Create `script.js` as an empty stub (filled in by Task 7)**

```js
// Contact form submit handling is added in Task 7.
```

- [ ] **Step 5: Verify the skeleton is well-formed**

Run: `grep -c '<section' index.html`
Expected: `5`

Run: `grep -c 'CONTENT -->' index.html`
Expected: `5`

Run: `grep -c 'STYLES \*/' style.css`
Expected: `5`

- [ ] **Step 6: Commit**

```bash
git add index.html style.css script.js .gitignore
git commit -m "Add site skeleton with section anchors"
```

---

### Task 2: Hero section

**Files:**
- Modify: `index.html` (replace `<!-- HERO CONTENT -->`)
- Modify: `style.css` (replace `/* HERO STYLES */`)

**Interfaces:**
- Consumes: `.hero` section element and `#hero` id produced by Task 1.
- Produces: `.hero-cta` class (button linking to `#contact`) that Tasks elsewhere may reference visually but nothing downstream depends on its internals.

- [ ] **Step 1: Replace the hero anchor in `index.html`**

Old:
```html
    <section id="hero" class="hero">
      <!-- HERO CONTENT -->
    </section>
```

New:
```html
    <section id="hero" class="hero">
      <div class="hero-inner">
        <div class="monogram">SS</div>
        <h1>Payments &amp; Product,<br>Strategically Delivered</h1>
        <p class="hero-subhead">I help banks, payment schemes, fintechs, and telecom operators turn complex payment challenges into scalable products and lasting partnerships.</p>
        <a class="hero-cta" href="#contact">Let's talk →</a>
      </div>
    </section>
```

- [ ] **Step 2: Replace the hero styles anchor in `style.css`**

Old:
```css
/* HERO STYLES */
```

New:
```css
.hero {
  background: linear-gradient(135deg, var(--navy-dark), var(--navy) 60%, var(--cyan-dark));
  color: var(--text-light);
  padding: 96px 24px;
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.monogram {
  display: inline-block;
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  max-width: 640px;
  margin-bottom: 20px;
}

.hero-subhead {
  font-size: 17px;
  color: rgba(248,250,252,0.85);
  max-width: 560px;
  margin-bottom: 32px;
}

.hero-cta {
  display: inline-block;
  background: var(--cyan);
  color: var(--navy-dark);
  font-weight: 600;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 999px;
}

.hero-cta:hover { background: #67e8f9; }
```

- [ ] **Step 3: Verify**

Run: `grep -c "Strategically Delivered" index.html`
Expected: `1`

Run: `grep -c "linear-gradient" style.css`
Expected: `1`

Run: `grep -ci "paysky" index.html`
Expected: `0`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add hero section"
```

---

### Task 3: Career Highlights section

**Files:**
- Modify: `index.html` (replace `<!-- HIGHLIGHTS CONTENT -->`)
- Modify: `style.css` (replace `/* HIGHLIGHTS STYLES */`)

**Interfaces:**
- Consumes: `.highlights` section from Task 1.
- Produces: `.highlight-grid` / `.highlight-card` classes, reused visually (not referenced by later tasks' logic).

- [ ] **Step 1: Replace the highlights anchor in `index.html`**

Old:
```html
    <section id="highlights" class="highlights">
      <!-- HIGHLIGHTS CONTENT -->
    </section>
```

New:
```html
    <section id="highlights" class="highlights">
      <div class="highlights-inner">
        <div class="highlight-grid">
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
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Replace the highlights styles anchor in `style.css`**

Old:
```css
/* HIGHLIGHTS STYLES */
```

New:
```css
.highlights {
  background: var(--bg-alt);
  padding: 64px 24px;
}

.highlights-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.highlight-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.highlight-card p {
  font-size: 14px;
  color: var(--text-muted);
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "MTN MoMo Marketplace" index.html`
Expected: `1`

Run: `grep -c "GIM UEMOA" index.html`
Expected: `1`

Run: `grep -ci "paysky" index.html`
Expected: `0`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add career highlights section"
```

---

### Task 4: Services section

**Files:**
- Modify: `index.html` (replace `<!-- SERVICES CONTENT -->`)
- Modify: `style.css` (replace `/* SERVICES STYLES */`)

**Interfaces:**
- Consumes: `.services` section from Task 1.
- Produces: `.service-grid` / `.service-card` classes (visual only).

- [ ] **Step 1: Replace the services anchor in `index.html`**

Old:
```html
    <section id="services" class="services">
      <!-- SERVICES CONTENT -->
    </section>
```

New:
```html
    <section id="services" class="services">
      <div class="services-inner">
        <h2>How I can help</h2>
        <div class="service-grid">
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
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Replace the services styles anchor in `style.css`**

Old:
```css
/* SERVICES STYLES */
```

New:
```css
.services {
  padding: 80px 24px;
}

.services-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.services h2 {
  font-size: 28px;
  margin-bottom: 32px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  border: 1px solid #e2e8f0;
  border-radius: var(--radius);
  padding: 28px;
  transition: border-color 0.2s;
}

.service-card:hover { border-color: var(--cyan); }

.service-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-card p {
  font-size: 14px;
  color: var(--text-muted);
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "Fractional / Interim Leadership" index.html`
Expected: `1`

Run: `grep -c "Advisory &amp; Retainer" index.html`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add services section"
```

---

### Task 5: About section

**Files:**
- Modify: `index.html` (replace `<!-- ABOUT CONTENT -->`)
- Modify: `style.css` (replace `/* ABOUT STYLES */`)

**Interfaces:**
- Consumes: `.about` section from Task 1.

- [ ] **Step 1: Replace the about anchor in `index.html`**

Old:
```html
    <section id="about" class="about">
      <!-- ABOUT CONTENT -->
    </section>
```

New:
```html
    <section id="about" class="about">
      <div class="about-inner">
        <div class="about-text">
          <h2>About</h2>
          <p>With 14+ years of experience, I've evolved from software engineering into product delivery, strategic account management, and digital payments. I partner with banks, payment schemes, fintechs, and telecom operators across Africa and the Middle East to align business strategy, customer needs, product vision, and execution.</p>
          <p>Currently, I lead strategic accounts and product delivery for a payments company. Previously, I built and scaled engineering and delivery functions at SEITech, Integrant, and Valeo.</p>
        </div>
        <ul class="credentials">
          <li>MBA</li>
          <li>PMP — Project Management Professional</li>
          <li>CSM — Certified ScrumMaster</li>
        </ul>
      </div>
    </section>
```

- [ ] **Step 2: Replace the about styles anchor in `style.css`**

Old:
```css
/* ABOUT STYLES */
```

New:
```css
.about {
  background: var(--bg-alt);
  padding: 80px 24px;
}

.about-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
}

.about h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 15px;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.credentials {
  list-style: none;
  border-left: 2px solid var(--cyan);
  padding-left: 20px;
  align-self: start;
}

.credentials li {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "Certified ScrumMaster" index.html`
Expected: `1`

Run: `grep -ci "paysky" index.html`
Expected: `0`

Run: `grep -c "SEITech" index.html`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add about section"
```

---

### Task 6: Contact section markup + form

**Files:**
- Modify: `index.html` (replace `<!-- CONTACT CONTENT -->`)
- Modify: `style.css` (replace `/* CONTACT STYLES */`)

**Interfaces:**
- Produces: `<form id="contact-form">` with `name`, `email`, `message` fields, a `_gotcha` honeypot field, and a `.form-status` element with `data-state` attribute (`""`, `"sending"`, `"success"`, `"error"`) — this exact id/attribute contract is consumed by `script.js` in Task 7.

- [ ] **Step 1: Replace the contact anchor in `index.html`**

Old:
```html
    <section id="contact" class="contact">
      <!-- CONTACT CONTENT -->
    </section>
```

New:
```html
    <section id="contact" class="contact">
      <div class="contact-inner">
        <h2>Let's talk about your next payments challenge</h2>
        <p class="contact-subhead">Tell me a bit about what you're working on — I'll get back to you within a couple of days.</p>

        <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <input type="text" name="_gotcha" class="honeypot" tabindex="-1" autocomplete="off">

          <button type="submit">Send message</button>

          <p class="form-status" data-state="" role="status"></p>
        </form>

        <a class="linkedin-link" href="https://www.linkedin.com/in/salma-ssalem/" target="_blank" rel="noopener">Connect on LinkedIn →</a>
      </div>
    </section>
```

- [ ] **Step 2: Replace the contact styles anchor in `style.css`**

Old:
```css
/* CONTACT STYLES */
```

New:
```css
.contact {
  padding: 80px 24px;
}

.contact-inner {
  max-width: 560px;
  margin: 0 auto;
}

.contact h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

.contact-subhead {
  color: var(--text-muted);
  margin-bottom: 32px;
}

#contact-form label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 16px;
}

#contact-form input[type="text"],
#contact-form input[type="email"],
#contact-form textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: var(--font-sans);
  font-size: 14px;
}

#contact-form .honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

#contact-form button {
  margin-top: 24px;
  background: var(--navy-dark);
  color: var(--text-light);
  border: none;
  border-radius: 999px;
  padding: 12px 28px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}

#contact-form button:hover { background: var(--navy); }
#contact-form button:disabled { opacity: 0.6; cursor: not-allowed; }

.form-status { margin-top: 14px; font-size: 14px; }
.form-status[data-state="success"] { color: #16a34a; }
.form-status[data-state="error"] { color: #dc2626; }

.linkedin-link {
  display: inline-block;
  margin-top: 28px;
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
  border-bottom: 1px solid var(--navy);
}
```

- [ ] **Step 3: Verify**

Run: `grep -c 'id="contact-form"' index.html`
Expected: `1`

Run: `grep -c 'name="_gotcha"' index.html`
Expected: `1`

Run: `grep -c 'linkedin.com/in/salma-ssalem' index.html`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Add contact section with Formspree form markup"
```

---

### Task 7: Contact form submit handling (script.js)

**Files:**
- Modify: `script.js`

**Interfaces:**
- Consumes: `#contact-form`, `.form-status[data-state]`, and the honeypot field `name="_gotcha"` produced by Task 6.

- [ ] **Step 1: Replace the stub in `script.js`**

Old:
```js
// Contact form submit handling is added in Task 7.
```

New:
```js
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    button.disabled = true;
    status.dataset.state = 'sending';
    status.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.dataset.state = 'success';
        status.textContent = "Thanks — I'll be in touch soon.";
        form.reset();
      } else {
        status.dataset.state = 'error';
        status.textContent = 'Something went wrong — please email me directly instead.';
      }
    } catch (err) {
      status.dataset.state = 'error';
      status.textContent = 'Something went wrong — please email me directly instead.';
    } finally {
      button.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
```

- [ ] **Step 2: Verify the script loads without errors**

Run: `python3 -m http.server 8123 --directory .` (leave running)
Then open `http://localhost:8123/` in a browser and open the developer console.
Expected: no errors printed to the console on page load; typing in the Name/Email/Message fields works normally.
Stop the server with Ctrl+C when done.

- [ ] **Step 3: Verify the handler is wired to the real form id**

Run: `grep -c "getElementById('contact-form')" script.js`
Expected: `1`

- [ ] **Step 4: Commit**

```bash
git add script.js
git commit -m "Add contact form submit handling"
```

---

### Task 8: Responsive layout pass

**Files:**
- Modify: `style.css` (replace `/* RESPONSIVE */`)

**Interfaces:**
- Consumes: all classes produced by Tasks 2–6 (`.hero`, `.highlight-grid`, `.service-grid`, `.about-inner`, `.contact-inner`).

- [ ] **Step 1: Replace the responsive anchor in `style.css`**

Old:
```css
/* RESPONSIVE */
```

New:
```css
@media (max-width: 768px) {
  .hero h1 { font-size: 32px; }
  .highlight-grid { grid-template-columns: repeat(2, 1fr); }
  .service-grid { grid-template-columns: 1fr; }
  .about-inner { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .site-nav { flex-direction: column; align-items: flex-start; gap: 12px; }
  .hero { padding: 64px 20px; }
  .highlight-grid { grid-template-columns: 1fr; }
  .credentials { border-left: none; border-top: 2px solid var(--cyan); padding-left: 0; padding-top: 16px; }
}
```

- [ ] **Step 2: Manual verification at three widths**

Run: `python3 -m http.server 8123 --directory .` (leave running)
Open `http://localhost:8123/` in a browser and resize the window (or use dev tools device toolbar) to check:
- **375px wide**: nav stacks vertically, highlight cards are single column, service cards are single column, about section stacks (text above credentials list).
- **768px wide**: highlight cards show 2 columns, service cards single column, about section stacks.
- **1200px wide**: highlight cards show 4 columns, service cards show 3 columns, about section shows 2 columns (text + credentials side by side).

Fix any overflow or overlap issues found by adjusting the rules above, then re-check.
Stop the server with Ctrl+C when done.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "Add responsive layout rules"
```

---

### Task 9: Final content QA sweep

**Files:**
- Modify: `index.html` (only if issues are found)

**Interfaces:**
- None — this task only verifies output of Tasks 1–8.

- [ ] **Step 1: Confirm the employer name never appears**

Run: `grep -ci "paysky" index.html style.css script.js`
Expected: no matches (grep exits non-zero / prints nothing for all three files)

- [ ] **Step 2: Confirm every required content element is present**

Run:
```bash
grep -c "Strategically Delivered" index.html
grep -c "GIM UEMOA" index.html
grep -c "MTN MoMo Marketplace" index.html
grep -c "Fractional / Interim Leadership" index.html
grep -c "Project-Based Consulting" index.html
grep -c "Certified ScrumMaster" index.html
grep -c 'id="contact-form"' index.html
grep -c "linkedin.com/in/salma-ssalem" index.html
```
Expected: `1` for every line above.

- [ ] **Step 3: Confirm no leftover anchor comments remain**

Run: `grep -c "CONTENT -->" index.html`
Expected: `0`

Run: `grep -c "STYLES \*/" style.css`
Expected: `0` (the six `/* ... STYLES */` and `/* RESPONSIVE */` opening comments were each replaced, not just appended to — re-check Tasks 2–6 if this fails)

- [ ] **Step 4: Commit (only if Step 1–3 required fixes)**

```bash
git add index.html
git commit -m "Fix content QA issues"
```

If no fixes were needed, skip this commit.

---

### Task 10: README and manual deployment steps

**Files:**
- Create: `README.md`

**Interfaces:**
- None — this documents manual steps for the user; nothing downstream depends on it.

- [ ] **Step 1: Create `README.md`**

```markdown
# Salma Salem — Consultant Website

A static one-page site. No build step — open `index.html` directly or serve
the folder with any static file server.

## Local preview

    python3 -m http.server 8123

Then open http://localhost:8123/

## Before going live: connect the contact form

The form in `index.html` currently posts to a placeholder Formspree URL
(`https://formspree.io/f/YOUR_FORM_ID`). To make it actually deliver
messages:

1. Go to https://formspree.io and create a free account.
2. Create a new form and copy the form ID it gives you (looks like
   `xoqgrkzp`).
3. In `index.html`, find the line:
   `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   and replace `YOUR_FORM_ID` with your real ID.
4. Commit and push the change.
5. Submit the form once yourself on the live site to confirm the email
   arrives, and to complete Formspree's first-submission confirmation step.

## Deploying to GitHub Pages (free)

1. Create a new **public** repository on https://github.com/new (e.g.
   `salma-consulting-site`). Do not initialize it with a README (this repo
   already has one).
2. In this folder, run:

       git remote add origin https://github.com/<your-username>/<repo-name>.git
       git branch -M main
       git push -u origin main

3. On GitHub, go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then GitHub will show the live URL (something like
   `https://<your-username>.github.io/<repo-name>/`).

The site stays off search engines' radar by default (no submission to
Google Search Console, no sitemap) — it's reachable only by anyone who has
the direct link, until you decide to promote it further.

## Adding a custom domain later (optional, not required now)

Buy a domain from any registrar, then follow GitHub's guide for
"Configuring a custom domain for your GitHub Pages site" — add a `CNAME`
file to the repo and update the domain's DNS records.
```

- [ ] **Step 2: Verify**

Run: `grep -c "YOUR_FORM_ID" README.md`
Expected: `1`

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "Add README with deployment and Formspree setup instructions"
```

---

## Manual steps required from Salma (not automatable by an agent)

These require an account/browser action only she can perform, documented in
`README.md` from Task 10:

1. Create a free Formspree account and form, and swap `YOUR_FORM_ID` into
   `index.html`.
2. Create a GitHub account (if she doesn't have one) and a repository, then
   push this code to it.
3. Enable GitHub Pages on that repository via the Settings UI.

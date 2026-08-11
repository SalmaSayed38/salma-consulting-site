# Consultant Website — Design Spec

Date: 2026-08-12

## Purpose

A personal one-page website for Salma Salem positioning her as an independent
consultant in digital payments and product strategy, to attract freelance
engagements (fractional/interim exec roles, project-based consulting,
advisory/retainer work). Built while she is still employed full-time at
PaySky, so the site must stay low-key: discoverable but not loudly promoted,
and must not name her current employer.

## Constraints

- **No current employer name.** The site must never say "PaySky." Her
  current role is described generically (e.g. "Currently leading strategic
  accounts and product delivery for a payments company").
- **Achievements from the current role CAN be named specifically** — "GIM
  UEMOA e-commerce platform" and "MTN MoMo Marketplace" are industry-known
  platform names, not the employer's name, so they're safe to use verbatim.
- **Free tools only, zero ongoing cost required.** Static hosting (GitHub
  Pages), free-tier form backend (Formspree). No custom domain purchase for
  this phase — free `*.github.io` URL is fine.
- **No professional photo available.** Hero uses typography + a monogram
  mark ("SS"), not a headshot.
- Not yet ready to go fully public/loud — site should exist and be
  functional, but promotion/sharing timing is the user's call, not part of
  this build.

## Approach

Plain static HTML/CSS/vanilla JS, single page, no framework and no build
step. This is a solo-maintained brochure site with no dynamic data — a
static-site generator or JS framework would add tooling overhead for no
benefit. Deployed to GitHub Pages (free). Contact form posts directly to a
Formspree endpoint (free tier, ~50 submissions/month) so there is no backend
to run or pay for.

## Visual style

**Modern Fintech**: dark navy-to-cyan gradient hero, cyan accent color,
sans-serif (system font stack), rounded buttons/pills. Signals "current,
tech-fluent payments operator" rather than traditional corporate/banking
aesthetic. Confirmed via mockup comparison against "Executive Navy" (serif,
navy/gold, traditional) and "Editorial Minimal" (off-white, minimal, quiet).

## Content structure — "Proof First" order

Confirmed via layout mockup comparison against a "Credentials First" order
(About before Highlights). Proof First was chosen because it surfaces hard
numbers to a skimming visitor immediately after the hero, before asking them
to read a bio.

1. **Hero**
   - Name, monogram mark ("SS"), no photo.
   - Headline: positioning statement (payments + product strategy).
   - One-line subhead: what she does / who she works with.
   - Primary CTA button → scrolls to Contact.

2. **Career Highlights** (immediately after hero)
   - "Strategic payment initiatives across 18 countries"
   - "Delivered the GIM UEMOA e-commerce payment platform to production"
   - "Directed the MTN MoMo Marketplace implementation, go-live, and
     stabilization"
   - "Executive partnerships across banks, telecom operators, payment
     schemes, and fintechs"
   - Presented as short punchy stat/line items, not paragraphs.

3. **Services** — three cards, matching the engagement types the user wants
   to attract:
   - **Fractional / Interim Leadership** — part-time ongoing product or
     strategic-accounts leadership for a company that needs senior payments
     expertise without a full-time hire.
   - **Project-Based Consulting** — defined-scope engagements: platform
     launch advisory, partnership strategy, product roadmap review.
   - **Advisory & Retainer** — ongoing lighter-touch strategic guidance for
     founders/execs on a monthly basis.

4. **About**
   - Condensed version of the CV's Executive Profile: 14+ years, evolution
     from software engineering into product delivery, strategic accounts,
     and digital payments; partners with banks, payment schemes, fintechs,
     and telecom operators across Africa and the Middle East.
   - Current role stated generically, no employer name (see Constraints).
   - Past roles (Valeo, Integrant, SEITech) may be referenced by name since
     they are not the current employer.

5. **Contact**
   - Formspree-backed form: name, email, message fields, all required
     (HTML5 `required`), plus Formspree's built-in honeypot for spam.
   - On successful submit, show an inline "Thanks, I'll be in touch" success
     state (no page navigation/redirect needed).
   - Secondary contact path: a button linking out to her LinkedIn profile
     (https://www.linkedin.com/in/salma-ssalem/).

## Non-goals

- No blog, no case-study subpages, no CMS — single page only.
- No analytics/tracking setup in this phase.
- No custom domain purchase in this phase (can be added later by pointing a
  purchased domain at GitHub Pages).
- No automated test suite — appropriate for a static page whose only logic
  is a third-party-hosted form submission.

## Testing / QA plan

- Manual responsive check at mobile (~375px), tablet (~768px), and desktop
  widths — single-column stacking below ~600px.
- Manual check in at least two browsers.
- Manual end-to-end test of the Formspree form (real submission received).
- No automated tests planned, given the scope.

## Open items for implementation planning

- Exact copywriting/wording for headline, subhead, and service card body
  text (draft during implementation, review with user before finalizing).
- Formspree account setup (user will need to create a free account and
  supply the form endpoint/ID).
- GitHub repo + Pages setup (user will need a GitHub account if she doesn't
  already have one for this).

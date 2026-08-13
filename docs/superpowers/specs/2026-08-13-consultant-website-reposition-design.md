# Consultant Website — Repositioning Design Spec

Date: 2026-08-13

## Purpose

Revise the copy on the existing one-page consultant site
(`docs/superpowers/specs/2026-08-12-consultant-website-design.md`, already
built and merged to `main`) to reflect a broader positioning. The original
site framed Salma as a payments/product-strategy domain specialist. That
undersold her actual differentiator: she is a cross-industry operations,
partnership, and delivery leader — the person brought in when something is
stuck (delays, escalations, stalled partnerships, broken process) —
regardless of industry. Her career spans automotive engineering (Valeo)
through digital payments (Integrant, SEITech, and her current role).
Fintech is where she's currently active and building visibility, but it is
one proof point among several, not the whole pitch.

This is a **content-only revision**. Visual style (Modern Fintech
navy-to-cyan gradient), section order, HTML structure, CSS, and JS behavior
are all unchanged from the original build — only the words change.

## Constraints

All constraints from the original design spec still apply, plus one new
one:

- **No current employer name.** Unchanged — "PaySky" must never appear.
- **No licensing/regulatory-expertise claims.** New constraint, same tier
  as the employer-name rule. Salma is introducing herself into the fintech
  industry but explicitly does not want to be positioned as the expert or
  go-to person on licenses or regulations. Copy must never claim or imply
  regulatory/licensing specialization. Where relevant (About section), this
  is stated as an explicit boundary, not just an omission.
- **GIM UEMOA / MTN MoMo Marketplace / Valeo / Integrant / SEITech** remain
  safe to name verbatim (platform names and past employers, not the
  current employer).
- Free tools only, no build step — unchanged (this revision touches
  `index.html` text content only; no new tooling, hosting, or backend
  changes).

## Positioning

Cross-industry operations, partnerships, and delivery leader. Core
strengths: management, communication, customer/partner handling, executive
partnership-building, and process enhancement — applied to organizations
facing delays, escalations, or stalled execution, in any industry. Fintech
is a current, active proof point (via her payments-industry career), not a
domain-expert claim.

## Scope

Content-only rewrite of `index.html`. No changes to `style.css`,
`script.js`, section structure, grid layouts, or card counts (Highlights
stays 4 cards, Services stays 3 cards). Confirmed with the user: this is
not a visual redesign.

## Content changes

### Page metadata

- Title: `Salma Salem — Operations, Partnerships & Delivery Consultant`
  (was "Payments & Product Strategy Consultant")
- Meta description: `Independent consultant for management, partnerships,
  and delivery challenges — escalations, delays, stalled execution. 14+
  years across automotive and fintech industries.`

### Hero

- H1: `Delays Fixed. Escalations Resolved. Partnerships Built.` (was
  "Payments & Product, Strategically Delivered") — industry-agnostic,
  skills-first, per user's explicit choice over a fintech-first or
  automotive→fintech-arc headline.
- Subhead: `14+ years leading teams, partnerships, and delivery — from
  automotive engineering to digital payments. Brought in when execution
  has stalled, partners are at odds, or a team needs a steady hand to get
  things moving again.`
- CTA button: unchanged (`Let's talk →`, scrolls to `#contact`).

### Career Highlights

Same 4 cards, same headline stats (kept per user's explicit choice to
preserve these as proof points) — only body copy reframed from
payments-domain framing to transferable-skill framing:

- **18 Countries** — `Built and ran executive partnerships across banking,
  telecom, and fintech markets in Africa and the Middle East — each with
  its own players, priorities, and politics to align.`
- **GIM UEMOA** — `Took a multi-country e-commerce payment platform from
  stalled to live, aligning banks, schemes, and partners who didn't
  naturally agree.`
- **MTN MoMo Marketplace** — `Directed go-live and stabilization of a
  marketplace platform under heavy timeline and partner pressure — turned
  a rocky launch into a stable one.`
- **Executive Partnerships** — `Trusted by leadership across banks,
  telecom operators, payment schemes, and fintechs to resolve what
  internal teams alone couldn't.`

### Services

Restructured from engagement-type headlines (Fractional/Interim,
Project-Based, Advisory & Retainer) to problem-first headlines, per user's
explicit choice. Engagement type (fractional, project-based, retainer) now
appears inside each card's body text instead of as the card title:

- **Escalations & Partner Recovery** — `When a partnership has stalled or
  a relationship has soured, I step in to rebuild trust and get delivery
  moving again — as a short project or an ongoing fractional role.`
- **Process & Delivery Turnaround** — `For teams missing deadlines or
  drowning in ambiguity, I diagnose what's broken in the process and drive
  the fix — available project-based or as interim leadership.`
- **Cross-Functional Program Leadership** — `Ongoing or fractional
  leadership for programs that span teams, functions, or external
  partners and need one person accountable for getting it done —
  including a monthly advisory/retainer arrangement.`

### About

Two paragraphs, replacing the original. Explicitly names the
automotive→payments arc (new fact from the user) and explicitly states the
no-licensing/regulatory-expert boundary (new constraint):

> `With 14+ years of experience, I've worked across two very different
> industries — starting in automotive engineering at Valeo, then moving
> into product delivery, strategic account management, and digital
> payments at Integrant, SEITech, and beyond. That range is the point: the
> same skills — management, communication, partnership-building, and
> process improvement — solve problems regardless of industry.`

> `Currently, I lead strategic accounts and product delivery for a
> payments company, partnering with banks, payment schemes, fintechs, and
> telecom operators across Africa and the Middle East. I'm not a
> regulatory or licensing specialist — I'm the person who gets people,
> timelines, and partners aligned so the work actually ships.`

Credentials list (MBA, PMP, CSM) is unchanged.

### Contact

- Heading: `Let's talk about what's stuck` (was "Let's talk about your
  next payments challenge")
- Subhead: unchanged.
- Form fields, honeypot, LinkedIn button: unchanged (no functional
  changes in this revision).

### Nav / footer

Unchanged — logo "SS", nav links (Highlights/Services/About/Contact),
footer copyright were never industry-specific.

## Non-goals

- No visual/style/layout changes.
- No new sections, no removed sections, no change to card counts.
- No changes to `style.css`, `script.js`, `README.md`, or any
  functionality (form submission behavior, responsive breakpoints, etc.).
- LinkedIn profile updates are out of scope for this spec/plan — handled
  as a separate recommendation to the user, not a website deliverable.

## Testing / QA plan

Same approach as the original build: no automated test suite (static
content-only change). Verification via `grep`:

- Confirm "PaySky" still never appears anywhere in `index.html`.
- Confirm no licensing/regulatory-expertise claims were introduced (manual
  read of the About paragraph, since this isn't a single grep-able
  string).
- Confirm all new required strings (new H1, new service headings, new
  About paragraph text, new Contact heading) are present exactly once.
- Confirm old payments-specific strings that were meant to be fully
  replaced (old H1 "Payments & Product, Strategically Delivered", old
  service headings "Fractional / Interim Leadership" / "Project-Based
  Consulting" / "Advisory & Retainer" as card titles, old Contact heading)
  no longer appear, so this is a clean replacement rather than a
  duplication.

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

This is primarily a **content revision**, plus one small visual addition:
a real photo of Salma is now available and replaces the original site's
"no photo" constraint in the About section only. Visual style (Modern
Fintech navy-to-cyan gradient), section order, overall HTML structure, and
JS behavior are otherwise unchanged from the original build — only the
words change, plus the one photo addition described below.

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
- Free tools only, no build step — unchanged. This revision touches
  `index.html` content, adds one static image asset
  (`assets/headshot.jpg`) and one CSS rule for it; no new tooling,
  hosting, or backend changes.
- **No professional photo available** (from the original spec) is
  superseded: a headshot is now available and used, but only in the
  About section — see the Photo section below.

## Positioning

Cross-industry operations, partnerships, and delivery leader. Core
strengths: management, communication, customer/partner handling, executive
partnership-building, and process enhancement — applied to organizations
facing delays, escalations, or stalled execution, in any industry. Fintech
is a current, active proof point (via her payments-industry career), not a
domain-expert claim.

## Scope

Content rewrite of `index.html`, plus one new image asset and its
supporting CSS. No changes to section order, `script.js`, or the
Highlights/Services grid layouts or card counts. Confirmed with the user:
this is not a broader visual redesign — the hero stays text/monogram-led
("SS"), and the only visual addition is the About-section photo below.

## Photo

A real photo of Salma is now available and supersedes the original
spec's "No professional photo available" constraint, but only for the
About section — the user explicitly chose to keep the Hero as-is
(monogram "SS", no photo) rather than replace the hero's visual anchor.

- **Source:** a close headshot (not the alternate full-body conference
  photo, which had a busy backdrop with an event/company logo — avoided
  given the no-employer-reveal constraint).
- **Processing done:** cropped to a top-aligned square (full smile, chin,
  and shoulders visible — tighter crops cut the chin off), resized to
  480×480, re-encoded as a fresh JPEG so no camera EXIF/GPS metadata is
  carried into the repo.
- **Asset path:** `assets/headshot.jpg` (new `assets/` directory at repo
  root — first binary asset in this otherwise-flat file structure).
- **Placement:** About section only, alongside the existing
  `.about-inner` two-column grid (about-text + credentials). The photo
  becomes a circular image (matching the site's existing circle/monogram
  motif from the hero), styled with a cyan accent border consistent with
  `--cyan`, positioned above the credentials list within the credentials
  column.
- **Markup:** `<img class="about-photo" src="assets/headshot.jpg"
  alt="Salma Salem" width="480" height="480" loading="lazy">` — explicit
  width/height to avoid layout shift, `loading="lazy"` since it's below
  the fold, descriptive alt text for accessibility.
- **Responsive:** at the existing `about-inner` mobile breakpoint (where
  the two-column grid collapses to one column), the photo stacks above
  the credentials list, same as the rest of that column's content.

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

Credentials list (MBA, PMP, CSM) is unchanged. The `about-photo` image
(see Photo section above) is added to this section's markup.

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

- No broader visual/style/layout changes beyond the one About-section
  photo addition described above — the hero, gradient, typography, and
  overall layout are untouched.
- No new sections, no removed sections, no change to card counts.
- No changes to `script.js`, `README.md`, or any existing functionality
  (form submission behavior, responsive breakpoints, etc.) — `style.css`
  gets one additive rule for `.about-photo`, nothing else in it changes.
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
- Confirm `assets/headshot.jpg` exists, is referenced from `index.html`
  with correct `src`/`alt`/`width`/`height`, and that no other image
  assets or `<img>` tags were introduced (hero stays photo-free).
- Manual visual check: photo renders correctly inside the About section
  at desktop, tablet, and mobile widths (circular crop, no distortion,
  reasonable stacking order on mobile).

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

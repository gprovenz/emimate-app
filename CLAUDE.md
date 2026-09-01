# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is the **public website** for Emimate, an Android headache diary app. It is **not** the app
source — the app lives in a separate private repository. This repo contains only:

- Two hand-written landing pages (Italian at the root, English under `en/`)
- The app's **privacy policy** (`privacy.html`, `en/privacy.html`), which exists here because
  Google Play requires the policy at a public URL and the app repo is private
- The site's **cookie policy** (`cookie.html`, `en/cookie.html`)
- Shared `assets/` (one stylesheet, a self-hosted font, one script, screenshots)

There is **no build step and no framework**, and exactly one script. Pages are served as written.

Note the split: `privacy.html` covers the **app**, `cookie.html` covers the **website**. They are
separate documents with separate subjects — do not merge them or move content between them.

## Build, test, run

None of the usual tooling exists (no `package.json`, no linters, no tests). To preview locally,
serve the directory with any static file server so relative paths and the `/en/` subpath resolve,
e.g. `python -m http.server` then open `http://localhost:8000/`.

Deployment is automatic: pushing to `main` publishes via GitHub Pages. `CNAME` sets the custom
domain (`emimate.it`); `.nojekyll` disables Jekyll processing. Google Search Console verification
is the `google*.html` file at the root — keep it if it is there.

## Conventions that matter

- **Every path is relative.** The site is served from a subpath in some contexts, so absolute
  paths (`/assets/...`) break it. Root pages reference `assets/...`; pages under `en/` reference
  `../assets/...`.
- **Nothing loads from another host.** The font (Manrope) is self-hosted in `assets/` instead of
  Google Fonts on purpose: the site's central claim is that the app sends nothing anywhere, so
  the site itself must not hand visitors' addresses to a third party. Do not add CDN scripts,
  external stylesheets, remote fonts, analytics, or embeds.
- **The site stores nothing in the browser.** No cookies, no `localStorage`, no `sessionStorage`,
  no fingerprinting, no tracking pixels. `cookie.html` states this as fact and invites readers to
  verify it in devtools, so any code that broke it would make a published policy false. The one
  script, `assets/promo.js`, reads the device clock and writes a sentence — nothing else. Keep it
  that way; this is the constraint to check before adding any client-side behaviour.
- **One stylesheet for both languages** (`assets/style.css`). App colors are sampled from the
  wordmark/brand; CSS custom properties for palette live in `:root` at the top of the file.
- **Keep the Italian and English pages in sync.** `index.html` / `en/index.html`, `privacy.html` /
  `en/privacy.html` and `cookie.html` / `en/cookie.html` are each the same document in two
  languages — same sections, same structure, same asset references (only the `../` prefix
  differs). A change to one page's layout or content should be mirrored in its translation.
- **The Play release date lives in one place**: the `data-release` attribute on the `.promo`
  banner, with the sentences the countdown can print in the `data-` attributes beside it (one set
  per language, which is why `promo.js` is shared rather than inlined twice).

## Release day (20 September 2026) — pre-launch content to retire

Three pieces of the landing pages describe a state that ends when the app ships. All are marked
with an HTML comment where they sit, and all exist in both `index.html` and `en/index.html`:

1. **The `.promo` banner** — remove `hidden` from `.promo-cta` so the button shows, and rewrite the
   static `.promo-msg` sentence (it is the no-JavaScript fallback, and it names the release date).
   The button is hidden until then because the Play URL 404s while the app is unpublished.
2. **The `.beta` section** — the closed test ends at publication. Remove the section, its
   `#beta` anchor, and the `.beta-panel` / `.beta-cta` rules in `assets/style.css` if nothing else
   has come to use them.
3. **The hero's `.soon` line** — it names the release date and links to `#beta`; both go stale.
- **Per-page SEO block.** Each page sets `<link rel="canonical" href="./">` plus `alternate`
  hreflang links for `it`, `en`, and `x-default`. Root points its `en` alternate at `en/`; pages
  under `en/` point `it` and `x-default` at `../`. Titles, descriptions, and `og:` tags are
  language-specific.

## Privacy policy is load-bearing

The policy asserts the app collects nothing and *cannot* transmit anything. That rests on two
concrete facts about the app: it does not request the `INTERNET` permission, and `allowBackup` is
off. If either ever changes in the app, `privacy.html` and `en/privacy.html` must change with it.

The URL registered with Google Play is the **Italian** `privacy.html` (English is one click away
in the header). Do not change which file answers that address without updating the Play listing.

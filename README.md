# Emimate

A headache diary for Android. One tap opens an attack, one tap closes it.

**<https://emimate.it>**

---

This repository is the app's public site. The app's own source lives elsewhere and is private.

| Page | |
| --- | --- |
| `index.html` · `en/index.html` | The landing page, Italian and English |
| `privacy.html` · `en/privacy.html` | Privacy policy — covers the **app** |
| `cookie.html` · `en/cookie.html` | Cookie policy — covers the **site** |
| `assets/` | Stylesheet, font, countdown script, screenshots |

Hand-written: no framework, no build step, one script. Nothing loads from another host — the font
is self-hosted rather than pulled from Google Fonts, because a site whose claim is that the app
sends nothing anywhere cannot hand every visitor's address to a third party to set that sentence.
Every path is relative. `.nojekyll` keeps Pages from running the site through Jekyll.

Google Play needs a policy at a public URL: give it <https://emimate.it/privacy.html>, not the site
root. (The older `gprovenz.github.io/emimate-app/` address still redirects here.) That page states
the app collects nothing and cannot transmit anything, which rests on the app not requesting the
`INTERNET` permission and on `allowBackup` being off. If either changes, that page changes too.

Working on this repo: see `CLAUDE.md`.

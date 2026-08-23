# emimate-privacy

The privacy policy for **Emimate**, a headache diary for Android that keeps everything on the
phone. This repository exists so the policy can be served as a public page, which the Google
Play Console requires a link to.

`index.html` is the policy itself, in English and Italian. It is a single self-contained file:
no build step, no assets, no dependencies.

## Publishing it

1. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
2. Wait for the first deploy, then take the URL GitHub shows.
3. Paste that URL into the Play Console listing, under Privacy policy.

## Keeping it true

The policy claims the app collects nothing and cannot transmit anything. That rests on the app
not requesting the `INTERNET` permission and on `allowBackup` being off. If either of those ever
changes in the app, this page has to change with it.

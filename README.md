# Emimate

A headache diary that stays out of your way. One tap to open an attack, one tap to close it —
everything else is optional.

> **Coming to Google Play.** Once published the app will be at
> <https://play.google.com/store/apps/details?id=com.emimate.app>

---

## English

When an attack starts, filling in a form is the last thing you want to do. Emimate asks for one
tap to open it and one tap to close it. Intensity, medication, triggers and notes are optional,
and you add them afterwards if you feel like it.

**One tap, literally.** One big button in the middle of the screen. While an attack is running a
notification shows the timer and an End button, so you never have to open the app, and a home
screen widget does the same from your home screen. Noticed late? Pick the date and time from the
calendar instead.

**A report your doctor will actually read.** The PDF export is an A4 document with a header, five
summary numbers, a month-by-month calendar with days shaded by intensity, and the full table of
attacks. The intensity scale uses one hue in four steps, so it still reads when photocopied in
black and white.

**Your data stays yours.** Emimate does not even ask for permission to use the internet — Android
enforces that, so it is a property of the app rather than a promise. No account, no ads, no
analytics, no automatic backup to Drive.

**Take your data with you.** Back up the whole diary to a CSV file you place yourself, and restore
it later. Share a report or a spreadsheet for any period you choose.

**Five languages** — English, Italian, French, Spanish and German — interface and report, switchable inside the app.

Emimate is a diary. It records what you tell it and prints it back out. It does not diagnose,
does not give medical advice, and is not a medical device. Decisions about your health belong
with your doctor.

---

## Italiano

Quando arriva un attacco non hai voglia di compilare moduli. Emimate ti chiede un tap per aprirlo
e un tap per chiuderlo. Intensità, farmaci, trigger e note sono facoltativi, e li aggiungi dopo,
con calma, se ti va.

**Un tap, davvero.** Un bottone grande in mezzo alla schermata. Mentre l'attacco è in corso una
notifica mostra il timer e il tasto Termina, quindi non devi nemmeno aprire l'app, e un widget
fa lo stesso dalla schermata home. Te ne sei accorto in ritardo? Scegli data e ora dal calendario.

**Il referto che il medico legge volentieri.** L'export PDF è un documento in A4 con
l'intestazione, cinque numeri di sintesi, il calendario mese per mese con i giorni colorati per
intensità e la tabella completa degli attacchi. La scala di intensità usa una sola tinta in
quattro gradini, quindi resta leggibile anche fotocopiata in bianco e nero.

**I tuoi dati restano tuoi.** Emimate non chiede nemmeno il permesso di accedere a internet — è
Android a farlo rispettare, quindi è una proprietà dell'app, non una promessa. Nessun account,
nessuna pubblicità, nessun analytics, nessun backup automatico su Drive.

**I dati li porti via quando vuoi.** Fai il backup dell'intero diario in un file CSV che collochi
tu, e lo ripristini quando serve. Condividi un referto o un foglio di calcolo per il periodo che
scegli.

**Cinque lingue** — italiano, inglese, francese, spagnolo e tedesco — interfaccia e referto, con il cambio lingua dentro l'app.

Emimate è un diario: registra quello che gli dici e te lo ristampa. Non diagnostica, non dà
consigli medici e non è un dispositivo medico. Le decisioni sulla tua salute spettano al tuo
medico.

---

## About this repository

This repository is the app's public site, served at <https://gprovenz.github.io/emimate-app/>:

| Page | What it is |
| --- | --- |
| `index.html` | The landing page — what the app does, in English and Italian |
| `privacy.html` | The **privacy policy**, in English and Italian |

Google Play requires a policy at a public URL, and the app's source repository is private, so the
policy lives here. It is at <https://gprovenz.github.io/emimate-app/privacy.html> — that is the
address to give Play, not the site root.

The policy states that the app collects nothing and cannot transmit anything. That rests on the
app not requesting the `INTERNET` permission and on `allowBackup` being off. If either ever
changes, this page has to change with it.

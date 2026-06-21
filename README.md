# Fort Payne Gold Panning Resource Hub

Beginner-friendly web app for learning how to pan for gold safely, legally, and successfully within 150 straight-line miles of downtown Fort Payne, Alabama.

The app is designed for a beginner audience: large readable text, simple navigation, Little River Canyon / northeast Alabama mountain styling, legal status badges, beginner lessons, field diagrams, gear guidance, hiking basics, an interactive map, and a printable trip checklist.

> **Important:** This app is general education, not legal advice. Rules change and land ownership varies creek-by-creek. Always confirm current rules with the responsible agency, land manager, or landowner before anyone pans.

---

## Required frontend file

The required frontend entry file is at the project root:

```text
index.html
```

The browser title inside `index.html` is exactly:

```text
index
```

Do not rename this file. Vite and Cloudflare Pages expect it at the project root.

Because this is a **Vite + React + TypeScript** app, do not use double-clicking `index.html` from File Explorer as the final test. Vite compiles and serves the app during local development, and Cloudflare Pages compiles it during deployment.

---

## Project file tree

```text
fort-payne-gold-panning-github-ready/
  index.html                  # Required frontend entry file; browser title is "index"
  package.json                # App scripts and dependencies
  package-lock.json           # Locked dependency versions for repeatable installs
  vite.config.ts              # Vite configuration
  tsconfig.json               # TypeScript configuration
  README.md                   # Setup, GitHub, Cloudflare, and safety instructions
  LICENSE
  .gitignore
  .nvmrc                      # Node version hint
  .node-version               # Node version hint
  public/
    photos/
      README.md               # Notes for optional local photos
  src/
    main.tsx                  # React startup file
    App.tsx                   # Main app navigation and page state
    styles.css                # App styling and themes
    vite-env.d.ts
    components/
      AppShell.tsx
      Dashboard.tsx
      FieldManual.tsx
      FilterPanel.tsx
      GearGuide.tsx
      Glossary.tsx
      GuidePage.tsx
      HikingBasics.tsx
      LearningCourse.tsx
      LegalGuide.tsx
      LocationCard.tsx
      MapView.tsx
      TripChecklist.tsx
    data/
      gear.ts
      legalRules.ts
      lessons.ts
      locations.ts
    utils/
      distance.ts
```

This GitHub-ready zip intentionally does **not** include `node_modules/` or `dist/`.

---

## What is included in the app

- **Dashboard Home** — beginner-friendly starting point with Little River Canyon mountain/canyon images.
- **Beginner Guide** — plain-language explanation of what gold panning is.
- **Field Manual** — creek-reading and panning technique diagrams.
- **Learning Course** — five short lessons from zero to first trip.
- **Interactive Map** — Fort Payne-centered map with a 150-mile radius, filters, pins, legal colors, and source links.
- **Map-first Travel Guide** — easiest and safest trips listed first.
- **Gear Guide** — beginner kit, safety gear, and what not to buy yet.
- **Legal & Safety Guide** — public/private/commercial/restricted/prohibited guidance with source links.
- **Trip Planner** — printable checklist for before, during, and after the trip.
- **Hiking Basics** — creek and trail safety for beginners.
- **Glossary** — plain-language definitions.

All location and legal entries include a `lastChecked` field and an official/operator source URL in the app data.

---

## Tech stack

- Vite + React + TypeScript
- Leaflet / React-Leaflet interactive map
- OpenStreetMap map tiles with attribution
- No backend
- No paid API keys
- No embedded videos
- Inline SVG diagrams
- Little River Canyon images displayed from official National Park Service pages with visible source links in the dashboard captions

---

## Local setup

Install Node.js 22+ before running the app.

Open Git Bash in the project folder:

```bash
cd fort-payne-gold-panning-github-ready
npm install
npm run dev
```

Then open the local URL printed in Git Bash, usually:

```text
http://localhost:5173/
```

Production build check:

```bash
npm run build
```

Optional production preview:

```bash
npm run preview
```

Then open the preview URL printed in Git Bash, usually:

```text
http://localhost:4173/
```

---

## GitHub upload using Git Bash

Create a new empty GitHub repository named:

```text
fort-payne-gold-panning
```

Then run these commands from inside the project folder:

```bash
git init
git add .
git commit -m "Initial Fort Payne gold panning app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fort-payne-gold-panning.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

Do **not** push API keys, passwords, `.env` files, proprietary company data, customer data, personal medical information, or confidential work data to GitHub or public AI tools.

---

## GitHub upload using the GitHub website

1. Unzip this project folder.
2. Open the unzipped `fort-payne-gold-panning-github-ready` folder.
3. Upload the files and folders inside it into an empty GitHub repository.
4. Make sure the root of the GitHub repository contains `index.html`, `package.json`, `src/`, and `public/`.

Do not upload `node_modules/`.

---

## Deploy to Cloudflare Pages from GitHub

Recommended deployment path:

```text
GitHub repository -> Cloudflare Pages -> automatic redeploy on every git push
```

Cloudflare Pages settings:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
Node version: 22.16.0
```

Deployment steps:

1. Log in to Cloudflare.
2. Open **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages**.
5. Choose **Connect to Git**.
6. Connect GitHub if prompted.
7. Select the `fort-payne-gold-panning` repository.
8. Set the build settings listed above.
9. Save and deploy.
10. Cloudflare will provide a live `*.pages.dev` link.

After the first deployment, updates are simple:

```bash
git add .
git commit -m "Update gold panning guide"
git push
```

Cloudflare will rebuild automatically.

---

## Editing content later

- Edit locations: `src/data/locations.ts`
- Edit legal rules: `src/data/legalRules.ts`
- Edit gear: `src/data/gear.ts`
- Edit lessons: `src/data/lessons.ts`
- Edit page styling: `src/styles.css`
- Edit dashboard photos: `src/components/Dashboard.tsx`

When updating a location or rule, update the `lastChecked` date and re-check the linked source.

---

## Legal and safety disclaimer

This project is provided for **general educational purposes only** and is **not legal advice**.

Gold panning rules are controlled by federal, state, and local agencies and by private landowners. They change over time and can differ from one stretch of creek to the next. Before panning anywhere, verify the current rules with the responsible agency, land manager, or landowner.

Never trespass. Never pan in National Park Service units. Do not disturb stream banks. Follow Leave No Trace practices. Do not go alone. Watch weather, water level, slippery rocks, snakes, ticks, and heat stress.

Licensed under the MIT License. See `LICENSE`.

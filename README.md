# Fermor homepage (concept)

A responsive homepage for Fermor, built for the frontend assignment. React + Vite, plain CSS, no other runtime dependencies.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Deploy
Push to GitHub, import the repo in Vercel. Framework preset: Vite. Build command `npm run build`, output `dist`. No environment variables needed.

## Decisions
- **Positioning** uses only Fermor's own line: understand, act, grow. No invented stats, partners or certifications.
- **The hero's job** is to say what Fermor is in one sentence; the proof is the working demo right below it.
- **Interactive demo** (Understand / Act / Grow tabs) computes every figure live from `src/lib/finance.js`. It is clearly labelled illustrative and is not advice.
- **Design**: cool off-white, deep green ink, one mint accent. Serif headlines (Newsreader) with Manrope for UI text. Few cards, with rules and spacing doing the structural work.
- **Motion** is limited to the hero entrance and responses to user actions. `prefers-reduced-motion` is respected.
- **Accessibility**: skip link, semantic landmarks, ARIA tabs, labelled sliders, visible focus, keyboard-operable mobile menu.
- **CTA** links to fermor.in because there is no backend; I did not fake a signup form.

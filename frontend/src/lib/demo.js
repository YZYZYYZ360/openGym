// Demo / personal local build (VITE_DEMO=1) — the static, no-backend build (GitHub Pages, Cloudflare Pages).
//
// Pages can only serve static files, so there is no API: passkey sign-in, per-profile sync
// and the admin dashboard all need the Node backend and are simply not part of a demo build.
// The app therefore stays in guest mode (everything in localStorage, photos/videos in IndexedDB).
// PERSONAL FORK: boot no longer seeds an example history — a first visit starts blank and an
// existing local profile is never touched (demoSeed.js is no longer imported by the app).
//
// Only these constants are shared with normal builds: Vite replaces VITE_DEMO at build
// time, so the demo-only UI folds away.
export const DEMO = import.meta.env.VITE_DEMO === '1'
export const REPO = 'https://gitlab.com/DuarteSantos8/opengym'

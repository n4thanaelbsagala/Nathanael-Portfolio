# Nathanael Sagala — Portfolio

Personal academic portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and plain CSS.
Designed for undergraduate research applications, AI/ML opportunities, and academic networking.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint (next/core-web-vitals)
npm run typecheck    # tsc --noEmit
```

Requires Node.js 18.17 or newer.

## Deploying to Vercel

### Option A — GitHub (recommended)

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/Nathanael-Sagala/portfolio.git
git push -u origin main
```

Then go to <https://vercel.com/new>, sign in with GitHub, import the repository, and press
**Deploy**. Vercel detects Next.js automatically — no build settings need to be changed.
Every later `git push` redeploys the site.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Project structure

```
app/
  layout.tsx        Fonts, metadata, <html> shell
  page.tsx          Section composition
  globals.css       Design tokens and all styles
components/         One component per section, plus shared pieces
data/               All content, typed and separated from markup
lib/types.ts        Shared interfaces
```

## Updating content

Nothing that needs editing lives in a component. All copy is in `data/`.

| Change | File |
|---|---|
| Add a project | `data/projects.ts` — append to the `projects` array |
| Add a GitHub repo link | `data/projects.ts` — set `repoUrl` on that project |
| Add the LinkedIn URL | `data/profile.ts` — set `linkedin` to the URL (the card switches from placeholder to link automatically) |
| Update GPA, dates, scholarship | `data/profile.ts` → `education` |
| Add a role | `data/experience.ts` → `roles` |
| Add a skill | `data/experience.ts` → `skillGroups` |
| Change research interests | `data/research.ts` (icons are keyed by `id` in `components/Icons.tsx`) |

### Adding project figures

Each project can declare `figureSlots`, which render as dashed placeholders. To replace one with a
real chart, drop the image in `public/` and swap the placeholder markup in
`components/ProjectCard.tsx` for a `next/image` element.

## Notes on content

The site deliberately contains no invented information: no LinkedIn URL, no repository links, no
model accuracy figures, and no claimed research positions. The hero visualisation is labelled as an
illustration of the k-nearest-neighbours rule, not as model output.

## Accessibility

Semantic landmarks, a single `h1`, skip link, keyboard-operable menu and disclosures with
`aria-expanded`, visible focus rings, a live region for the copy-email confirmation, and full
`prefers-reduced-motion` support (the hero animation freezes on a static frame).

# Hassan Raza Portfolio

A premium one-page portfolio for Hassan Raza, focused on machine learning, data science, retail intelligence, geospatial analytics, forecasting, and AI-driven business tools.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## Highlights

- Light editorial visual system with restrained lime accents
- Proof-of-work code sessions styled after a real development environment
- Unified commercial and research project showcase with filters
- Impact, expertise, experience, about, and focused contact sections
- Accessible responsive navigation and reduced-motion support

## Local Development

Prerequisites: Node.js 18+ and npm

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If the dev server starts serving stale `/_next/static/...` files after a restart, clear the cache and start again:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Credibility.tsx
│   ├── Expertise.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Impact.tsx
│   ├── Navbar.tsx
│   ├── Work.tsx
│   └── ui/
│       ├── CodeSession.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectMedia.tsx
│       ├── Reveal.tsx
│       └── SectionHeader.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── sessions.ts
│   ├── site.ts
│   └── skills.ts
├── public/
│   └── images/
│       ├── hassan-photo.png
│       └── projects/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Main Sections

- `Navbar`: fixed responsive navigation
- `Hero`: positioning, CTAs, social links, and code-session proof
- `Credibility`: selected client and engagement strip
- `Work`: unified commercial and research project showcase
- `Impact`: measurable delivery outcomes
- `Expertise`: focused capability areas
- `Experience`: career history and technology stack
- `About`: profile narrative and scope
- `Contact`: direct mailto CTA and profile links
- `Footer`: closing navigation and profile information

## Content Editing Guide

Update these files to keep the portfolio current:

| Content | File |
|---|---|
| Profile, navigation, hero, metrics, and contact copy | `data/site.ts` |
| Code-session visuals | `data/sessions.ts` |
| Project cards | `data/projects.ts` |
| Experience timeline | `data/experience.ts` |
| Skill groups | `data/skills.ts` |
| Colors, spacing, animations | `app/globals.css` |
| Page composition | `app/page.tsx` |

## Assets

- Hero portrait: `public/images/hassan-photo.png`
- Project visuals: `public/images/projects/`

Match project image filenames with the `image` field in `data/projects.ts`.

## Deployment

### GitHub + Vercel

1. Push changes to the production branch, usually `main`
2. Vercel detects the new commit automatically
3. A new production deployment is built and published if the build succeeds

### Vercel CLI

```bash
npm install -g vercel
vercel
```

No environment variables are currently required.

## Contact Form Note

The form currently uses a `mailto:` action, which opens the user’s email client.

If you want to upgrade it later, common options are:

- Formspree
- Resend via a Next.js API route
- SendGrid via a server action or API route

## License

MIT

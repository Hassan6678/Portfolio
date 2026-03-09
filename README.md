# Hassan Raza Portfolio

A premium one-page portfolio for Hassan Raza, focused on machine learning, data science, retail intelligence, geospatial analytics, forecasting, and AI-driven business tools.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## Highlights

- Premium dark visual system with custom CSS variables
- Animated hero with rotating role list and portrait panel
- Curated project section covering retail intelligence, forecasting, ETL, NLP, and geospatial analytics
- Selected impact, experience timeline, skill groups, and premium contact section
- Mobile-responsive single-page layout

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
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Skills.tsx
│   ├── Specialties.tsx
│   ├── Testimonials.tsx
│   ├── Work.tsx
│   └── ui/
│       ├── CodeBg.tsx
│       └── TypeWriter.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useInView.ts
│   └── useTypewriter.ts
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

- `Navbar`: fixed navigation with mobile menu
- `Hero`: positioning, credibility badges, CTA, social links, portrait composition
- `Specialties`: high-level capability cards
- `About`: profile summary and stats
- `Work`: selected projects and tags
- `Testimonials.tsx`: currently used as the `Impact` section
- `Experience`: timeline of roles and tech stack
- `Skills`: grouped capabilities
- `Contact`: CTA, direct contact cards, and mailto form
- `Footer`: minimal closing section

## Content Editing Guide

Update these files to keep the portfolio current:

| Content | File |
|---|---|
| Hero roles, badges, social links | `components/Hero.tsx` |
| About copy and stats | `components/About.tsx` |
| Project cards | `data/projects.ts` |
| Experience timeline | `data/experience.ts` |
| Skill groups | `data/skills.ts` |
| Contact links | `components/Contact.tsx` |
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

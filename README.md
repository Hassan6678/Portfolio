# Hassan Raza — Portfolio

A one-page portfolio focused on machine learning, retail intelligence, geospatial
analytics, forecasting, and AI-driven business tools.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If the dev server serves stale `/_next/static/...` files after a restart, clear
the cache first:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```text
app/
  globals.css          all component styles and responsive rules
  layout.tsx           fonts and metadata
  opengraph-image.tsx  generated social card
  page.tsx             section order
components/            one file per page section
components/ui/         BrandIcon, ClientMark, ProjectMedia, Reveal
data/                  all copy and content
public/images/         portrait, client logos, project visuals, world map
```

## Editing content

| Content | File |
|---|---|
| Profile, nav, hero, metrics, about, contact copy | `data/site.ts` |
| Case studies and research projects | `data/projects.ts` |
| Client brand band | `data/clients.ts` |
| Experience timeline | `data/experience.ts` |
| Skill groups | `data/skills.ts` |
| Colors, layout, animation | `app/globals.css` |
| Section order | `app/page.tsx` |

Project images live in `public/images/projects/` and are matched by the `image`
field in `data/projects.ts`. Client logos live in `public/images/clients/`; a
brand falls back to its wordmark when the file is missing.

## Sections

`Navbar` · `Hero` · `Credibility` · `Clients` · `Work` · `Research` · `Impact` ·
`Expertise` · `Experience` · `About` · `Contact` · `Footer`

## Deployment

Pushing to `main` triggers a Vercel production build.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so the canonical URL and
`og:image` resolve to it rather than the per-deployment hostname. Without it the
site still builds and works.

## License

MIT

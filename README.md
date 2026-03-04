# Hassan Raza — Portfolio v2

Personal portfolio website for Hassan Raza, ML Engineer & Data Scientist.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel
**Design:** GitHub Dark aesthetic with IDE/terminal elements, typewriter effect, scrolling code background.

---

## Local Development

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx        # Root layout — Syne, JetBrains Mono, Inter via next/font
│   ├── page.tsx          # Single-page composition of all sections
│   └── globals.css       # CSS variables, animations, fade-up, scrolling code, blink
├── components/
│   ├── Navbar.tsx        # Fixed nav, hide-on-scroll, fullscreen mobile menu overlay
│   ├── Hero.tsx          # Two-column: typewriter + bio / photo + floating terminal
│   ├── About.tsx         # Bio + 2x2 stats grid + client logo strip
│   ├── Work.tsx          # Filter tabs + 2-col project card grid + placeholders
│   ├── Experience.tsx    # Vertical timeline with tech stack pill badges
│   ├── Skills.tsx        # 3-column skill chip groups with // comment labels
│   ├── Contact.tsx       # 4 contact link cards + mailto form
│   ├── Footer.tsx        # Single-line footer
│   └── ui/
│       ├── TypeWriter.tsx  # Typewriter cycling component
│       └── CodeBg.tsx      # Scrolling code background animation
├── data/
│   ├── projects.ts       # 7 projects — see file for instructions to add more
│   ├── experience.ts     # 3 work experience entries with stack arrays
│   └── skills.ts         # 3 skill groups with // comment labels
├── hooks/
│   ├── useInView.ts      # IntersectionObserver → fade-up "visible" class
│   └── useTypewriter.ts  # Typewriter effect hook (char-by-char, delete, cycle)
├── public/
│   └── images/
│       ├── hassan-photo.jpg         ← ADD YOUR PHOTO HERE
│       └── projects/
│           ├── bat-territory.png    ← ADD PROJECT SCREENSHOTS HERE
│           ├── ebm-dashboard.png
│           ├── nielsen-chatbot.png
│           ├── surveyauto.png
│           ├── vlc-gesture.png
│           ├── urdu-asr.png
│           └── urdu-ocr.png
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Adding Your Photo

1. Place your photo at `public/images/hassan-photo.jpg`
2. Open [components/Hero.tsx](components/Hero.tsx) and find the `PHOTO PLACEHOLDER` comment block
3. Remove the placeholder `<div>` and uncomment the `<Image>` component

## Adding Project Screenshots

1. Export screenshots (recommended: 1280×720 or 1920×1080) as PNG
2. Save them to `public/images/projects/` matching the filename in `data/projects.ts`
3. The card will automatically use the image instead of the gradient placeholder

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → import repository
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required.

---

## Customisation Quick Reference

| What | File |
|------|------|
| Projects | `data/projects.ts` |
| Work experience | `data/experience.ts` |
| Skill groups | `data/skills.ts` |
| Color palette | `app/globals.css` → `:root {}` |
| Fonts | `app/layout.tsx` |
| Typewriter roles | `components/Hero.tsx` → `ROLES` array |
| Contact links | `components/Contact.tsx` → `contactLinks` |
| SEO metadata | `app/layout.tsx` → `metadata` export |

## Contact Form

The form uses a `mailto:` action (opens email client). To upgrade:

- **Formspree**: set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"`
- **API route**: create `app/api/contact/route.ts` with Resend/SendGrid

---

## License

MIT

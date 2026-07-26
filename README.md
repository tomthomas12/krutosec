# Krutosec

Marketing site for Krutosec — a penetration testing and secure development company.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — pages: home, about, services, packages, blog, contact
- `components/` — shared UI: Navbar, Footer, cards, FAQ accordion, animated stat counter, circuit-trace decoration
- `public/logo.png` — the Krutosec logo (used in navbar, footer, favicon, Open Graph image)

## Design tokens

- Primary teal `#00A19B`, background sand `#E4DDD3` — set in `tailwind.config.ts`
- Display type: Space Grotesk · Body: Inter · Mono/labels: IBM Plex Mono
- Dark "terminal" sections use `panel` (`#0A1614`) with `mist` (`#7FA8A3`) text

## Notes for next steps

- Swap the placeholder contact form action, email, phone, and map embed for real details
- Wire the contact form to an email service or API route (currently static markup only)
- Replace placeholder testimonials and blog post excerpts with real client content
- Individual per-service detail pages and a real CMS-backed blog were left out of this pass — the `/services` and `/blog` pages currently cover this at a summary level

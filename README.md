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

## Contact form setup (required for it to actually send email)

The contact form on `/contact` posts to `app/api/contact/route.ts`, which sends the
message to **hello@krutosec.com** using [Resend](https://resend.com) (free tier is
enough for this volume).

1. Sign up at resend.com (free) and grab an API key from the dashboard.
2. In Vercel: Project → Settings → Environment Variables → add
   `RESEND_API_KEY` with that value → redeploy.
3. For local development, copy `.env.example` to `.env.local` and paste the key there.

Out of the box, emails send from Resend's shared sandbox address
(`onboarding@resend.dev`) — this works immediately with **zero DNS setup**, and
messages still land in `hello@krutosec.com` with **reply-to set to the visitor's
email**, so replying goes straight to them. Once you verify `krutosec.com` as a
sending domain in Resend (a couple of DNS records, same idea as the Vercel/Cloudflare
setup), change `FROM_ADDRESS` in `app/api/contact/route.ts` to send as
`hello@krutosec.com` instead, for a fully first-party look.

If the form is submitted before `RESEND_API_KEY` is set, it fails gracefully with a
message telling the visitor to email hello@krutosec.com directly, rather than silently
losing their message.

## Notes for next steps

- Replace placeholder testimonials and blog post excerpts with real client content
- Individual per-service detail pages and a real CMS-backed blog were left out of this pass — the `/services` and `/blog` pages currently cover this at a summary level

# Portfolio

Simple Next.js portfolio site for listing shipped projects.

## Stack

- Next.js App Router
- Tailwind CSS
- Vercel Analytics and Speed Insights

## Local development

```bash
npm install
npm run dev
```

## Deployment

Deploy on Vercel with `npm`. This repo intentionally keeps a single lockfile:

- `package-lock.json`

Set `NEXT_PUBLIC_SITE_URL` in Vercel so the sitemap, robots file, and metadata use the correct production domain.

# Kirchenmusiker-Website (Astro)

Static site. Astro + Tailwind v4 + self-hosted fonts. Free to host (Netlify/Cloudflare Pages).

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## What's done (no input needed)
- Full single-page structure: Hero, Vita, Termine, Hörproben, Kontakt, Footer
- Design system (organ-brass on church-ink, Fraunces + Instrument Sans), pipe-rank signature
- Concert list driven by ONE file: `src/data/concerts.json` (past dates auto-hide)
- Event structured data (JSON-LD) so Google can show concerts
- Impressum + Datenschutz pages (privacy-friendly by default: self-hosted fonts, no analytics, no trackers, mailto not form)
- Sitemap, robots.txt, favicon, SEO meta

## What needs input (search files for CONTENT-TODO)
NEEDS THE MUSICIAN:
- Name (currently placeholder "Jonas Reinhardt") — global find/replace
- Bio text, Hochschule, teachers, instruments  -> Hero.astro, Vita.astro
- Real concerts -> src/data/concerts.json
- Recordings (links) -> Hoerproben.astro
- Contact email -> Kontakt.astro
- Photos (none yet — add a portrait to Hero/Vita once supplied)

NEEDS A DECISION:
- Domain -> astro.config.mjs (site:), robots.txt, sitemap
- Legal data for Impressum + Datenschutz (his full name + address — legally required)

## Concert workflow (handover)
He edits `src/data/concerts.json`, commits, Netlify redeploys. If he won't touch
git, add Decap CMS later for a login-based editor. Don't build the CMS until he asks.

## Deploy (free)
Push to GitHub -> connect repo in Netlify -> build `npm run build`, publish `dist`.
Set the domain in astro.config.mjs first.

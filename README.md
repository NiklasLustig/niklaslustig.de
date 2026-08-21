# niklaslustig.de

Static site for **Niklas Lustig — Dirigent & Organist**, Berlin.
Astro + Tailwind v4 + self-hosted fonts. Free to host (Netlify).

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the build
```

## Where things live

| What | File |
|---|---|
| All page copy | `src/data/site.ts` |
| Concert dates | `src/data/concerts.json` |
| Photos | `src/assets/photos/*.jpg` (referenced by slug) |
| Design tokens | `src/styles/global.css` |

Search the repo for `CONTENT-TODO` to find everything still waiting on input.

### Changing a photo
Photos are referenced by slug, not by path. To swap the hero, change one line in
`src/data/site.ts`:

```ts
export const hero = { image: 'dirigat-01', … }
```

Photos are grouped by event date:

```
src/assets/photos/
  MANIFEST.json                     provenance: which camera frame each file came from
  2026-05-31-mensch-natur-gott/     21 frames
  2026-08-16-abschlusskonzert/      12 frames
```

`src/assets/photos/` is the **library**; `src/lib/photos.ts` is the **published set**.
Only photos imported in `photos.ts` are built into `dist` — everything else stays
local. That is deliberate: a glob would publish every frame in the folder at a
guessable hashed URL, including shots of audience members and unapproved images.

To publish a new photo: put a **web-sized** JPEG (long edge ≤ 2400px) in the folder
for its event, add an import + map entry in `src/lib/photos.ts`, then reference it by
slug. Astro generates the responsive WebP variants at build time.

Never put full-resolution camera originals in here — a 6000×4000 NEF/JPEG set runs to
hundreds of MB and would be committed to git forever. `.gitignore` blocks `DSC_*.JPG`,
`*.NEF` and `*.MOV` under this folder as a backstop. Originals stay on the Desktop.
`MANIFEST.json` records the source frame and md5 for every file, and whether the frame
came from Lennert's own "Nähere Auswahl" curation.

### Adding a concert
Append an object to `src/data/concerts.json` and commit. Past dates move to
"Rückblick" automatically; nothing needs deleting.

```json
{
  "id": "2027-03-14-bach",
  "title": "Bach — Johannespassion",
  "date": "2027-03-14",
  "time": "18:00",
  "venue": "St. Marien",
  "city": "Berlin",
  "role": "Leitung",
  "program": "J. S. Bach — Johannespassion BWV 245",
  "ticketUrl": "",
  "note": ""
}
```

### Adding a recording
Add an entry to `recordings` in `src/data/site.ts`. `kind: 'youtube'` embeds on
click (nothing loads before that), `'link'` opens externally, `'audio'` plays a
file from `public/`.

## Sections that hide themselves
Repertoire, press quotes and the press-kit download list disappear while their
data is empty, so the page never shows a placeholder. Entries containing
`CONTENT-TODO` are filtered out of the repertoire at build time.

## Still open
- Hero portrait — a studio shot replaces `hero.image`; no layout change needed.
- Photographer credit for the 2026 concert photos → `PHOTO_CREDIT` in `site.ts`.
- Repertoire beyond the two documented 2026 programmes.
- Press quotes, press-kit PDF.
- 17 processed photos sit unpublished in the two event folders, waiting for a
  decision. Publish one by importing it in `src/lib/photos.ts`.
- Five **published** photos come from the wider `JPEG+MOV Auswahl` folder rather than
  Lennert's "Nähere Auswahl" curation, and he has approved them: `orgel-spieltisch`
  (also the social preview image), `haende-bewegung`, `haende-manuale`, `raum-empore`,
  `portrait-nach-konzert`. `raum-fenster` was reviewed and unpublished.
  `MANIFEST.json` flags provenance for every file.

## Deploy
Push to GitHub → Netlify builds `npm run build`, publishes `dist`.
Domain is set in `astro.config.mjs` (`site:`), which also drives canonical URLs
and the sitemap.

## Privacy
Self-hosted fonts, no analytics, no trackers, `mailto:` instead of a form, and
click-to-load for anything third-party. Keep it that way — `datenschutz.astro`
promises exactly this.

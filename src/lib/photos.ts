import type { ImageMetadata } from 'astro';

// Photos are referenced by slug rather than by import path, so swapping an image
// anywhere on the site is a one-word change in src/data/site.ts.
//
// Imports are listed explicitly on purpose. A glob over the folder would make Astro
// emit EVERY file in src/assets/photos into dist — including frames that are on no
// page — leaving unpublished concert photos fetchable at hashed URLs. Only what is
// imported here ships. Publishing a photo = adding a line here.
//
// Source folders are named by event date; src/assets/photos/MANIFEST.json records
// which original camera frame each file came from.

// 31 May 2026 — «Mensch Natur Gott», St. Josef Berlin
import dirigatBeideHaende from '../assets/photos/2026-05-31-mensch-natur-gott/dirigat-beide-haende.jpg';
import dirigatAufschwung from '../assets/photos/2026-05-31-mensch-natur-gott/dirigat-aufschwung.jpg';
import dirigatZeigend from '../assets/photos/2026-05-31-mensch-natur-gott/dirigat-zeigend.jpg';
import chorVonHinten from '../assets/photos/2026-05-31-mensch-natur-gott/chor-von-hinten.jpg';
import portraitLaechelnd from '../assets/photos/2026-05-31-mensch-natur-gott/portrait-laechelnd.jpg';
import portraitVerschraenkt from '../assets/photos/2026-05-31-mensch-natur-gott/portrait-verschraenkt.jpg';
import detailBeethovenPartitur from '../assets/photos/2026-05-31-mensch-natur-gott/detail-beethoven-partitur.jpg';
import detailWeberFreischuetz from '../assets/photos/2026-05-31-mensch-natur-gott/detail-weber-freischuetz.jpg';
import detailCello from '../assets/photos/2026-05-31-mensch-natur-gott/detail-cello.jpg';

// 16 Aug 2026 — Abschlusskonzert, Pauluskirche Berlin-Zehlendorf
import orgelSpieltisch from '../assets/photos/2026-08-16-abschlusskonzert/orgel-spieltisch.jpg';
import haendeBewegung from '../assets/photos/2026-08-16-abschlusskonzert/haende-bewegung.jpg';
import haendeManuale from '../assets/photos/2026-08-16-abschlusskonzert/haende-manuale.jpg';
import raumProspekt from '../assets/photos/2026-08-16-abschlusskonzert/raum-prospekt.jpg';
import raumEmpore from '../assets/photos/2026-08-16-abschlusskonzert/raum-empore.jpg';
import portraitNachKonzert from '../assets/photos/2026-08-16-abschlusskonzert/portrait-nach-konzert.jpg';

export const photos: Record<string, ImageMetadata> = {
  'dirigat-beide-haende': dirigatBeideHaende,
  'dirigat-aufschwung': dirigatAufschwung,
  'dirigat-zeigend': dirigatZeigend,
  'chor-von-hinten': chorVonHinten,
  'portrait-laechelnd': portraitLaechelnd,
  'portrait-verschraenkt': portraitVerschraenkt,
  'detail-beethoven-partitur': detailBeethovenPartitur,
  'detail-weber-freischuetz': detailWeberFreischuetz,
  'detail-cello': detailCello,
  'orgel-spieltisch': orgelSpieltisch,
  'haende-bewegung': haendeBewegung,
  'haende-manuale': haendeManuale,
  'raum-prospekt': raumProspekt,
  'raum-empore': raumEmpore,
  'portrait-nach-konzert': portraitNachKonzert,
};

export function photo(slug: string): ImageMetadata {
  const found = photos[slug];
  if (!found) {
    throw new Error(
      `Unknown photo "${slug}". Published slugs: ${Object.keys(photos).join(', ')}. ` +
        `Other frames sit unpublished in src/assets/photos/<event>/ and need an import here first.`,
    );
  }
  return found;
}

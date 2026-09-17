import type { ImageMetadata } from 'astro';

// Video posters, kept separate from src/lib/photos.ts: those are concert
// photography with provenance tracked in MANIFEST.json, these are artwork that
// belongs to a recording.
//
// Self-hosted on purpose. YouTube serves the same frame from i.ytimg.com, but
// linking it there would contact Google on page load — before the visitor has
// clicked anything — which is exactly what datenschutz.astro says does not
// happen. The file is YouTube's thumbnail for the video, cropped free of the
// pillarbox bars it is padded with.
import menschNaturGott from '../assets/video/mensch-natur-gott-plakat.jpg';

const posters: Record<string, ImageMetadata> = {
  'mensch-natur-gott': menschNaturGott,
};

export function poster(slug: string): ImageMetadata {
  const found = posters[slug];
  if (!found) throw new Error(`Unknown poster slug: ${slug}. Add it to src/lib/posters.ts.`);
  return found;
}

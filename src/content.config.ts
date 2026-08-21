import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Concerts live in one JSON file so they can be edited without touching code.
// Past dates move to the archive automatically; nothing needs deleting.
const concerts = defineCollection({
  loader: file('src/data/concerts.json'),
  schema: z.object({
    title: z.string(),
    date: z.string(),        // YYYY-MM-DD
    time: z.string(),        // HH:MM
    venue: z.string(),
    city: z.string(),
    role: z.string().optional(),      // 'Leitung', 'Orgel', 'Assistenz' …
    program: z.string().optional(),
    ticketUrl: z.string().optional(),
    note: z.string().optional(),
    poster: z.string().optional(),
  }),
});

export const collections = { concerts };

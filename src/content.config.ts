import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Concerts live in one JSON file so it can be edited without touching code.
// CONTENT-TODO: keep src/data/concerts.json up to date. Old entries auto-hide.
const concerts = defineCollection({
  loader: file('src/data/concerts.json'),
  schema: z.object({
    title: z.string(),
    date: z.string(),        // YYYY-MM-DD
    time: z.string(),        // HH:MM
    venue: z.string(),
    city: z.string(),
    program: z.string().optional(),
    ticketUrl: z.string().optional(),
    note: z.string().optional(),
    poster: z.string().optional(),
  }),
});

export const collections = { concerts };

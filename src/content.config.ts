import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { eventSchema, lessonSchema } from '@/lib/content/schemas';

const events = defineCollection({
  loader: file('data/events.json'),
  schema: ({ image }) => eventSchema(image),
});

// Entry ids are the file path, `<workshop>/<lesson>`, e.g. `react-fundamentals/what-is-jsx`
const lessons = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/markdown/workshops',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: lessonSchema,
});

export const collections = { events, lessons };

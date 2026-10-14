import { z } from 'astro/zod';

// ISO 8601 with an explicit offset (e.g. 2025-12-04T17:00:00-06:00), so the instant
// doesn't depend on the timezone of the machine running the build
const eventTime = z.iso
  .datetime({ offset: true })
  .transform((value) => new Date(value));

// `image` is Astro's image() helper, which only exists inside content.config.ts
export const eventSchema = <Image extends z.ZodType>(image: () => Image) =>
  z
    .object({
      id: z.string(),
      title: z.string(),
      startTime: eventTime,
      endTime: eventTime,
      details: z.string(),
      location: z.string(),
      address: z.string(),
      image: z.object({ src: image(), alt: z.string() }).optional(),
    })
    .refine((event) => event.endTime > event.startTime, {
      message: 'endTime must be after startTime',
      path: ['endTime'],
      // Only compare once both times are valid, so a bad time reports one clear error
      when: ({ issues }) => issues.length === 0,
    });

export const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  number: z.number().int().nonnegative(),
});

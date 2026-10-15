import { describe, expect, it } from 'vitest';
import { z } from 'astro/zod';
import { eventSchema } from './schemas';

// Stand-in for Astro's image() helper, which only exists inside content.config.ts
const image = () => z.string();
const schema = eventSchema(image);

const validEvent = {
  id: '38',
  title: 'Developer Happy Hour',
  startTime: '2025-12-04T17:00:00-06:00',
  endTime: '2025-12-04T19:00:00-06:00',
  details: 'Wrap up the year with our December Developer Happy Hour.',
  location: 'Keg Grove Brewing Company',
  address: '712 E Empire Street, Bloomington, IL',
  image: { src: '../src/assets/keg-grove-christmas-1.webp', alt: 'Keg Grove' },
};

describe('eventSchema', () => {
  it('accepts a valid Event and parses its times to the correct instants', () => {
    const event = schema.parse(validEvent);

    expect(event.startTime.toISOString()).toBe('2025-12-04T23:00:00.000Z');
    expect(event.endTime.toISOString()).toBe('2025-12-05T01:00:00.000Z');
  });

  it('rejects a time without a UTC offset, which would be read in the build machine timezone', () => {
    const result = schema.safeParse({
      ...validEvent,
      startTime: '2025-12-04T17:00:00',
    });

    expect(result.error?.issues.map(({ path }) => path)).toEqual([
      ['startTime'],
    ]);
  });

  it.each([
    ['before', '2025-12-04T16:00:00-06:00'],
    ['equal to', '2025-12-04T17:00:00-06:00'],
  ])('rejects an endTime %s the startTime', (_, endTime) => {
    const result = schema.safeParse({ ...validEvent, endTime });

    expect(result.success).toBe(false);
  });

  it('rejects an Event missing a required field', () => {
    const result = schema.safeParse({ ...validEvent, endTime: undefined });

    expect(result.success).toBe(false);
  });
});

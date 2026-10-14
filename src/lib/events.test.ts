import { describe, expect, it } from 'vitest';
import { formatEventDate, formatEventDateTime, splitEvents } from './events';

describe('formatEventDateTime', () => {
  it('formats a winter Event in Central Standard Time', () => {
    const start = new Date('2025-12-04T17:00:00-06:00');
    const end = new Date('2025-12-04T19:00:00-06:00');

    expect(formatEventDateTime(start, end)).toBe(
      'Thu, Dec 4 · 05:00 PM - 07:00 PM CST',
    );
  });

  it('formats a summer Event in Central Daylight Time', () => {
    const start = new Date('2025-10-07T17:00:00-05:00');
    const end = new Date('2025-10-07T19:00:00-05:00');

    expect(formatEventDateTime(start, end)).toBe(
      'Tue, Oct 7 · 05:00 PM - 07:00 PM CDT',
    );
  });

  it('shows the Central date for an evening Event that is already the next day in UTC', () => {
    // 7:30pm CST is 1:30am UTC the following day
    const start = new Date('2025-12-04T19:30:00-06:00');
    const end = new Date('2025-12-04T21:00:00-06:00');

    expect(formatEventDateTime(start, end)).toBe(
      'Thu, Dec 4 · 07:30 PM - 09:00 PM CST',
    );
  });
});

describe('formatEventDate', () => {
  it('formats the Next Event banner date in Central Time', () => {
    expect(formatEventDate(new Date('2025-12-04T19:30:00-06:00'))).toBe(
      'Thursday, December 4',
    );
  });
});

const event = (id: string, startTime: string, endTime: string) => ({
  id,
  data: { startTime: new Date(startTime), endTime: new Date(endTime) },
});

const ids = (events: { id: string }[]) => events.map(({ id }) => id);

describe('splitEvents', () => {
  const happyHour = event(
    'happy-hour',
    '2025-12-04T17:00:00-06:00',
    '2025-12-04T19:00:00-06:00',
  );

  it('keeps an Event that is in progress as an Upcoming Event', () => {
    const now = new Date('2025-12-04T17:30:00-06:00');

    const { upcoming, past } = splitEvents([happyHour], now);

    expect(ids(upcoming)).toEqual(['happy-hour']);
    expect(ids(past)).toEqual([]);
  });

  it('makes an Event a Past Event at the moment it ends', () => {
    const now = new Date('2025-12-04T19:00:00-06:00');

    const { upcoming, past } = splitEvents([happyHour], now);

    expect(ids(upcoming)).toEqual([]);
    expect(ids(past)).toEqual(['happy-hour']);
  });

  it('orders Upcoming Events soonest first and Past Events most recent first', () => {
    const now = new Date('2025-10-15T12:00:00-05:00');
    const events = [
      event('sep', '2025-09-03T17:00:00-05:00', '2025-09-03T19:00:00-05:00'),
      event('dec', '2025-12-04T17:00:00-06:00', '2025-12-04T19:00:00-06:00'),
      event('aug', '2025-08-06T17:00:00-05:00', '2025-08-06T19:00:00-05:00'),
      event('nov', '2025-11-05T17:00:00-06:00', '2025-11-05T19:00:00-06:00'),
    ];

    const { upcoming, past } = splitEvents(events, now);

    expect(ids(upcoming)).toEqual(['nov', 'dec']);
    expect(ids(past)).toEqual(['sep', 'aug']);
  });
});

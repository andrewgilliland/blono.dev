import { describe, expect, it } from 'vitest';
import { calendarLink } from './calendar';

// Mirrors the data-* attributes on AddToCalendarButton.astro (element.dataset)
const happyHour = {
  title: 'Developer Happy Hour',
  location: 'Keg Grove Brewing Company',
  details: 'Wrap up the year with fellow developers.',
  start: '2025-12-04T17:00:00-06:00',
  eventEnd: '2025-12-04T19:00:00-06:00',
};

describe('calendarLink', () => {
  it('builds a Google Calendar link for the Event’s exact start and end', () => {
    const url = new URL(calendarLink('google', happyHour));

    expect(url.hostname).toBe('calendar.google.com');
    expect(url.searchParams.get('text')).toBe('Developer Happy Hour');
    expect(url.searchParams.get('location')).toBe('Keg Grove Brewing Company');
    // 5pm-7pm CST is 23:00-01:00 UTC
    expect(url.searchParams.get('dates')).toBe(
      '20251204T230000Z/20251205T010000Z',
    );
  });

  it('builds an Apple Calendar (.ics) file for the Event’s exact start and end', () => {
    const ics = decodeURIComponent(calendarLink('ics', happyHour));

    expect(ics).toMatch(/^data:text\/calendar/);
    expect(ics).toContain('SUMMARY:Developer Happy Hour');
    expect(ics).toContain('DTSTART:20251204T230000Z');
    expect(ics).toContain('DTEND:20251205T010000Z');
  });
});

// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest';
import { applyUpcomingCheck } from './upcoming';

// Mirrors the markup of EventSection.astro and EventCard.astro
const card = (id: string, end: string) =>
  `<a data-event-card data-id="${id}" data-event-end="${end}"></a>`;

const cardIds = (list: 'upcoming' | 'past') =>
  [
    ...document.querySelectorAll(`[data-events="${list}"] [data-event-card]`),
  ].map((el) => (el as HTMLElement).dataset.id);

describe('applyUpcomingCheck on the events page', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-events="upcoming">
        ${card('nov', '2025-11-05T19:00:00-06:00')}
        ${card('dec', '2025-12-04T19:00:00-06:00')}
      </div>
      <div data-events="past">
        ${card('oct', '2025-10-07T19:00:00-05:00')}
      </div>`;
  });

  it('moves an Event that has ended to the top of the Past Events', () => {
    applyUpcomingCheck(document, new Date('2025-11-20T12:00:00-06:00'));

    expect(cardIds('upcoming')).toEqual(['dec']);
    expect(cardIds('past')).toEqual(['nov', 'oct']);
  });

  it('keeps Past Events most recent first when several have ended', () => {
    applyUpcomingCheck(document, new Date('2025-12-10T12:00:00-06:00'));

    expect(cardIds('upcoming')).toEqual([]);
    expect(cardIds('past')).toEqual(['dec', 'nov', 'oct']);
  });

  it('keeps an Event that is in progress as an Upcoming Event', () => {
    applyUpcomingCheck(document, new Date('2025-11-05T18:00:00-06:00'));

    expect(cardIds('upcoming')).toEqual(['nov', 'dec']);
  });
});

describe('applyUpcomingCheck on the home page', () => {
  it('removes an Event that has ended, since there is no Past list', () => {
    document.body.innerHTML = `
      <div data-events="upcoming">
        ${card('nov', '2025-11-05T19:00:00-06:00')}
        ${card('dec', '2025-12-04T19:00:00-06:00')}
      </div>`;

    applyUpcomingCheck(document, new Date('2025-11-20T12:00:00-06:00'));

    expect(cardIds('upcoming')).toEqual(['dec']);
    expect(document.querySelectorAll('[data-event-card]')).toHaveLength(1);
  });
});

describe('applyUpcomingCheck on the Next Event banner', () => {
  const banner = () =>
    document.querySelector<HTMLElement>('[data-next-event-banner]')!
      .textContent;

  beforeEach(() => {
    // Mirrors HeaderBanner.astro: the Upcoming Events as of the build, soonest first
    const upcoming = JSON.stringify([
      { start: '2025-11-05T17:00:00-06:00', end: '2025-11-05T19:00:00-06:00' },
      { start: '2025-12-04T17:00:00-06:00', end: '2025-12-04T19:00:00-06:00' },
    ]);
    document.body.innerHTML = `<div data-next-event-banner data-upcoming='${upcoming}'>
      Bloomington-Normal Developer's next event is on Wednesday, November 5
    </div>`;
  });

  it('moves on to the next Upcoming Event once the Next Event has ended', () => {
    applyUpcomingCheck(document, new Date('2025-11-20T12:00:00-06:00'));

    expect(banner()).toBe(
      "Bloomington-Normal Developer's next event is on Thursday, December 4",
    );
  });

  it('says there are no upcoming events once every Event has ended', () => {
    applyUpcomingCheck(document, new Date('2025-12-10T12:00:00-06:00'));

    expect(banner()).toBe('No upcoming events');
  });
});

describe('applyUpcomingCheck on an Event page', () => {
  const calendarButton = () => document.querySelector('[data-add-to-calendar]');

  beforeEach(() => {
    // Mirrors AddToCalendarButton.astro
    document.body.innerHTML = `<div>
      <div data-add-to-calendar data-event-end="2025-12-04T19:00:00-06:00"></div>
    </div>`;
  });

  it('keeps Add to calendar while the Event is in progress', () => {
    applyUpcomingCheck(document, new Date('2025-12-04T18:00:00-06:00'));

    expect(calendarButton()).not.toBeNull();
  });

  it('removes Add to calendar once the Event has ended', () => {
    applyUpcomingCheck(document, new Date('2025-12-04T19:00:00-06:00'));

    expect(calendarButton()).toBeNull();
  });
});

// Every Event Time is shown in Central Time, wherever the site is built or viewed
const TIME_ZONE = 'America/Chicago';
const LOCALE = 'en-US';

const dayFormat = new Intl.DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  weekday: 'short',
  month: 'short',
  day: 'numeric',
});

const timeFormat = new Intl.DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
});

const zoneFormat = new Intl.DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  timeZoneName: 'short',
});

// CST or CDT, depending on whether daylight time applies on that date
const zoneName = (date: Date) =>
  zoneFormat.formatToParts(date).find(({ type }) => type === 'timeZoneName')
    ?.value;

// e.g. "Thu, Dec 4 · 05:00 PM - 07:00 PM CST"
export const formatEventDateTime = (start: Date, end: Date) =>
  `${dayFormat.format(start)} · ${timeFormat.format(start)} - ${timeFormat.format(end)} ${zoneName(start)}`;

const longDayFormat = new Intl.DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});

// e.g. "Thursday, December 4"
export const formatEventDate = (start: Date) => longDayFormat.format(start);

type Schedulable = { data: { startTime: Date; endTime: Date } };

const byStart = (a: Schedulable, b: Schedulable) =>
  a.data.startTime.getTime() - b.data.startTime.getTime();

// An Upcoming Event hasn't ended yet (it may be in progress); a Past Event has ended.
// Upcoming is soonest first, so upcoming[0] is the Next Event. Past is most recent first.
export const splitEvents = <T extends Schedulable>(events: T[], now: Date) => ({
  upcoming: events.filter(({ data }) => data.endTime > now).sort(byStart),
  past: events
    .filter(({ data }) => data.endTime <= now)
    .sort((a, b) => byStart(b, a)),
});

import { google, ics, outlook } from 'calendar-link';

const providers = { google, outlook, ics };

export type CalendarProvider = keyof typeof providers;

// The Event as carried in AddToCalendarButton.astro's data-* attributes
type CalendarEventData = {
  title?: string;
  location?: string;
  details?: string;
  start?: string;
  eventEnd?: string;
};

// Built in the browser, not at build time: Outlook links use the viewer's local time
export const calendarLink = (
  provider: CalendarProvider,
  { title, location, details, start, eventEnd }: CalendarEventData,
) =>
  providers[provider]({
    title: title ?? '',
    location,
    description: details,
    start: new Date(start!),
    end: new Date(eventEnd!),
  });

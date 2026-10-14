// The upcoming check from ADR-0001: the HTML is correct as of the build, so this
// re-evaluates Upcoming vs Past against the viewer's clock on every page load.
// Elements opt in with data-event-end (an ISO time), matching splitEvents.
import { hasEnded, nextEventBannerText } from '@/lib/events';

type BannerEvent = { start: string; end: string };

const elementHasEnded = (el: HTMLElement, now: Date) =>
  hasEnded(new Date(el.dataset.eventEnd!), now);

const cardsIn = (list: Element) => [
  ...list.querySelectorAll<HTMLElement>('[data-event-card]'),
];

export const applyUpcomingCheck = (root: ParentNode, now: Date) => {
  const upcomingList = root.querySelector('[data-events="upcoming"]');
  const pastList = root.querySelector('[data-events="past"]');

  if (upcomingList) {
    // Upcoming is soonest first, so prepending in order leaves Past most recent first
    for (const card of cardsIn(upcomingList).filter((c) =>
      elementHasEnded(c, now),
    )) {
      if (pastList) pastList.prepend(card);
      else card.remove();
    }
  }

  const banner = root.querySelector<HTMLElement>('[data-next-event-banner]');
  if (banner) {
    // Soonest first, so the first one that hasn't ended is the Next Event
    const upcoming: BannerEvent[] = JSON.parse(banner.dataset.upcoming ?? '[]');
    const next = upcoming.find(({ end }) => !hasEnded(new Date(end), now));
    banner.textContent = nextEventBannerText(
      next ? new Date(next.start) : undefined,
    );
  }

  // Adding a finished Event to a calendar makes no sense
  for (const button of root.querySelectorAll<HTMLElement>(
    '[data-add-to-calendar]',
  )) {
    if (elementHasEnded(button, now)) button.remove();
  }
};

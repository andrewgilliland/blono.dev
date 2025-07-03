import { getEvents } from '@/lib/data/events';
import { SupabaseEvent } from '@/types';

const HeaderBanner = async () => {
  const events = await getEvents();

  const getNextEventDate = (events: SupabaseEvent[]) => {
    // Filter out past events
    events = events.filter((event) => new Date(event.start_time) > new Date());

    // Sort by date
    events.sort(
      (a, b) =>
        new Date(a.start_time).getTime() - new Date(b.start_time).getTime(),
    );

    const nextEvent = events[0];

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };

    return nextEvent
      ? new Date(nextEvent.start_time).toLocaleDateString(undefined, options)
      : null;
  };

  // If no events are provided, return null
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center bg-green-500 px-[10%] pb-1 pt-2">
      <a className="group" href="#events">
        <div className="text-balance text-center text-sm font-semibold text-black">
          {getNextEventDate(events)
            ? `Bloomington-Normal Developer's next event is on ${getNextEventDate(events)}`
            : 'No upcoming events'}
        </div>
        <div className="h-[2px] w-[0%] rounded-full bg-black transition-all group-hover:w-full" />
      </a>
    </div>
  );
};

export default HeaderBanner;

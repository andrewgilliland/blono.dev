import { Event } from "@/types";
import { FC } from "react";

type HeaderBannerProps = {
  events?: Event[];
};

const HeaderBanner: FC<HeaderBannerProps> = ({ events }) => {
  const getNextEventDate = (events: Event[]) => {
    // Filter out past events
    events = events.filter((event) => new Date(event.date) > new Date());

    // Sort by date
    events.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const nextEvent = events[0];

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      weekday: "long",
    };

    return nextEvent
      ? new Date(nextEvent.date).toLocaleDateString(undefined, options)
      : null;
  };

  // If no events are provided, return null
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className="text-center bg-green-500 font-semibold text-balance text-sm text-black px-[10%] py-1">
      <a href="#events" className="hover:underline">
        {getNextEventDate(events)
          ? `Bloomington-Normal Developer's next event is on ${getNextEventDate(events)}`
          : "No upcoming events"}
      </a>
    </div>
  );
};

export default HeaderBanner;

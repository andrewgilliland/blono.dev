import { EventType } from "@/types";
import { FC } from "react";

type HeaderBannerProps = {
  events?: EventType[];
};

const HeaderBanner: FC<HeaderBannerProps> = ({ events }) => {
  const getNextEventDate = (events: EventType[]) => {
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
    <div className="flex justify-center bg-green-500 px-[10%] pt-2 pb-1">
      <a className="group" href="#events">
        <div className="font-semibold text-balance text-center text-sm text-black">
          {getNextEventDate(events)
            ? `Bloomington-Normal Developer's next event is on ${getNextEventDate(events)}`
            : "No upcoming events"}
        </div>
        <div className="bg-black h-[2px] w-[0%] rounded-full group-hover:w-full transition-all" />
      </a>
    </div>
  );
};

export default HeaderBanner;

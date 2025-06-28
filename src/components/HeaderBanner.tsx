import { Event } from "@/types";
import { FC } from "react";

type HeaderBannerProps = {
  events: Event[];
};

const HeaderBanner: FC<HeaderBannerProps> = ({ events }) => {
  const getNextEventDate = (events: Event[]) => {
    const nextEvent = events.find((event) => new Date(event.date) > new Date());

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      weekday: "long",
    };

    console.log(nextEvent);

    return nextEvent
      ? new Date(nextEvent.date).toLocaleDateString(undefined, options)
      : null;
  };

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

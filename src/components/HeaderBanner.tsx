import { FC } from "react";
import { Content } from "../../content";

const HeaderBanner = () => {
  const getNextEventDate = (events) => {
    const nextEvent = events.find((event) => new Date(event.date) > new Date());
    return nextEvent
      ? new Date(nextEvent.date).toLocaleDateString()
      : "No upcoming events";
  };

  return (
    <div className="text-center bg-green-500 font-semibold text-balance text-sm text-black px-[10%] py-1">
      {`Bloomington-Normal Developer's next event is on ${"date"}`}
    </div>
  );
};

export default HeaderBanner;

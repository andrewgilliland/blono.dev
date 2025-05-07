import { Event } from "@/types";
import { FC } from "react";
import EventCard from "./EventCard";
import { HEADER_HEIGHT } from "./Layout";
import Circle from "./icons/Circle";

type EventSectionProps = {
  events: Event[];
};

const UpcomingEventsSection: FC<EventSectionProps> = ({ events }) => {
  const now = new Date();

  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  upcomingEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section
      id="events"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="max-w-5xl mx-auto mt-24"
    >
      <div>
        <div className="relative">
          <div>
            <Circle
              size={250}
              className="absolute fill-purp-dark -translate-x-24 -translate-y-24 opacity-20"
            />
            <Circle
              size={100}
              className="absolute fill-purp-dark translate-x-40 translate-y-12 opacity-20"
            />
            <Circle
              size={100}
              className="absolute fill-purp-dark translate-x-64 -translate-y-12 opacity-20 hidden md:block"
            />
          </div>
          <h2 className="relative text-heading-secondary mb-12">
            Upcoming Events
          </h2>
        </div>
        <div className="grid gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

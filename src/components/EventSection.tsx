import { Event } from '@/types';
import { FC, useState } from 'react';
import EventCard from './EventCard';
import { HEADER_HEIGHT } from './Layout';
import Button from './Button';
import Circle from './icons/Circle';

type EventSectionProps = {
  events: Event[];
};

const EventSection: FC<EventSectionProps> = ({ events }) => {
  const [numberOfEventsToShow, setNumberOfEventsToShow] = useState(3);

  const now = new Date();

  // console.log("events: ", events);
  // console.log("now: ", now);

  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  upcomingEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const filteredPastEvents = pastEvents.slice(0, numberOfEventsToShow);

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
              className="absolute fill-purp-dark translate-x-64 -translate-y-12 opacity-20"
            />
            <Circle
              size={100}
              className="absolute fill-purp-dark translate-x-40 translate-y-12 opacity-20"
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
      <div className="mt-20">
        <h2 className="text-heading-secondary mb-12">Past Events</h2>
        <div className="grid gap-6">
          {filteredPastEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-16">
          {numberOfEventsToShow < pastEvents.length && (
            <Button
              onClick={() => setNumberOfEventsToShow(numberOfEventsToShow + 5)}
            >
              Show More
            </Button>
          )}
          {numberOfEventsToShow > 3 && (
            <Button
              onClick={() => setNumberOfEventsToShow(numberOfEventsToShow - 5)}
            >
              Show Less
            </Button>
          )}
        </div>
        <div className="relative flex justify-center">
          <Circle
            size={125}
            className="absolute fill-purp-dark translate-x-64 -translate-y-12 opacity-20"
          />
          <Circle
            size={200}
            className="absolute fill-purp-dark translate-x-12 translate-y-8 opacity-20"
          />
          <Circle
            size={150}
            className="absolute fill-purp-dark -translate-x-24 -translate-y-24  opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;

import { Event } from '@/types';
import { FC, useState } from 'react';
import EventCard from './EventCard';
import { HEADER_HEIGHT } from './Layout';
import Button from './Button';

type EventSectionProps = {
  events: Event[];
};

const EventSection: FC<EventSectionProps> = ({ events }) => {
  const [numberOfEventsToShow, setNumberOfEventsToShow] = useState(3);

  const now = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const filteredPastEvents = pastEvents.slice(0, numberOfEventsToShow);

  return (
    <section
      id="events"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="max-w-5xl mx-auto mt-24"
    >
      <div>
        <h2 className="font-bold font-brand text-purple-600 text-4xl text-shadow mb-12">
          Upcoming Events
        </h2>
        <div className="grid gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold font-brand text-purple-600 text-4xl text-shadow mb-12">
          Past Events
        </h2>
        <div className="grid gap-6">
          {filteredPastEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <div className="flex justify-center gap-4">
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
      </div>
    </section>
  );
};

export default EventSection;

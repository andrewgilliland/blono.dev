import Circle from '../icons/Circle';
import EventCard from './EventCard';
import { SECTION_TOP_PADDING_OFFSET } from '@/lib/constants';
import { getEvents } from '@/lib/data/events';

const EventSection = async () => {
  const events = await getEvents();
  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.start_time) > now,
  );
  upcomingEvents.sort(
    (a, b) =>
      new Date(b.start_time).getTime() - new Date(a.start_time).getTime(),
  );

  const pastEvents = events.filter((event) => new Date(event.start_time) < now);

  return (
    <section
      id="events"
      style={{ paddingTop: SECTION_TOP_PADDING_OFFSET }}
      className="mx-auto mt-24 max-w-5xl"
    >
      <div>
        <div className="relative">
          <div>
            <Circle
              size={250}
              className="absolute -translate-x-24 -translate-y-24 fill-purp-dark opacity-20"
            />
            <Circle
              size={100}
              className="absolute translate-x-40 translate-y-12 fill-purp-dark opacity-20"
            />
            <Circle
              size={100}
              className="absolute hidden -translate-y-12 translate-x-64 fill-purp-dark opacity-20 md:block"
            />
          </div>
          <h2 className="text-heading-secondary relative mb-12">
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
        <div className="grid gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <div className="relative flex justify-center">
          <Circle
            size={125}
            className="absolute hidden -translate-y-12 translate-x-64 fill-purp-dark opacity-20 md:block"
          />
          <Circle
            size={200}
            className="absolute translate-x-12 translate-y-8 fill-purp-dark opacity-20"
          />
          <Circle
            size={150}
            className="absolute -translate-x-24 -translate-y-24 fill-purp-dark opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSection;

import Circle from '@/components/icons/Circle';
import EventCard from '../EventCard';
import Container from '@/components/layout/Container';
import { SECTION_TOP_PADDING_OFFSET } from '@/lib/constants';
import { getAllEvents } from '@/lib/actions/events';

const UpcomingEventsSection = () => {
  const events = getAllEvents();
  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.startTime) > now,
  );
  upcomingEvents.sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
  );

  return (
    <section id="events" style={{ paddingTop: SECTION_TOP_PADDING_OFFSET }}>
      <Container className="mt-24">
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
      </Container>
    </section>
  );
};

export default UpcomingEventsSection;

import { FC } from 'react';
import { EventType } from '@/types';
import Circle from '@/components/icons/Circle';
import EventCard from '../EventCard';
import Container from '@/components/layout/Container';
import { SECTION_TOP_PADDING_OFFSET } from '@/lib/constants';

type EventSectionProps = {
  events: EventType[];
};

const UpcomingEventsSection: FC<EventSectionProps> = ({ events }) => {
  const now = new Date();

  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  upcomingEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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

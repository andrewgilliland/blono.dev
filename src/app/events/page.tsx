import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import EventSection from '@/components/sections/EventSection';
import { getEvents } from '@/lib/data/events';

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <section>
        <Container className="mt-24">
          <div className="max-w-3xl">
            <h1>Events</h1>
            <p className="mt-20 text-2xl font-semibold text-white">
              From tech meetups to community gatherings, stay updated with our
              upcoming events.
            </p>
          </div>
        </Container>
      </section>
      <EventSection />
      <ContactSection />
    </>
  );
}

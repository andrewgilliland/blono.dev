import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import EventSection from '@/components/sections/EventSection';

export default function EventsPage() {
  return (
    <>
      <section>
        <Container className="mt-24">
          <h1 className="mb-12">Events</h1>
          <p className="max-w-2xl">
            From tech meetups to community gatherings, stay updated with our
            upcoming events.
          </p>
        </Container>
      </section>
      <EventSection />
      <ContactSection />
    </>
  );
}

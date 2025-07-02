import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import EventSection from '@/components/sections/EventSection';
import { createClient } from '@/lib/supabase/server';

export default async function EventsPage() {
  const supabase = await createClient();
  const { data: events } = await supabase.from('events').select();

  console.log('events:', events);

  return (
    <>
      <section>
        <Container className="mt-24">
          <h1>Events</h1>
          <p>
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

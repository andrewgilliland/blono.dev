import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import EventSection from '@/components/sections/EventSection';
import { createClient } from '@/lib/supabase/server';

export default async function EventsPage() {
  const supabase = await createClient();

  const { data: events, error } = await supabase.from('events').select(`
    title,
    details,
    start_time,
    end_time,
    cover_image_url,
    location:location_id (
      name,
      street_address,
      city,
      state,
      postal_code,
      country
    )
  `);

  if (error) {
    console.error('Error fetching events:', error);
    return <p>Error loading events.</p>;
  }

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

import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import Image from 'next/image';
import { getEventById as getEvent } from '@/lib/data/events';
import { SupabaseEvent } from '@/types';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

const EventPage = async ({ params }: EventPageProps) => {
  const { id } = await params;
  const event: SupabaseEvent = await getEvent(id);

  const {
    title,
    details,
    start_time,
    end_time,
    cover_image_url,
    location: { name, street_address, city, state, postal_code, country },
  } = event;

  const formattedStartTime = new Date(start_time).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  });

  const formattedEndTime = end_time
    ? new Date(end_time).toLocaleString('en-US', {
        hour: 'numeric',
      })
    : null;

  if (!event) {
    return (
      <Container className="mt-24">
        <h1>Event Not Found</h1>
        <p>The event you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <>
      <section>
        <Container className="mt-24">
          <div
            style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}
            className="grid gap-8"
          >
            <div style={{ gridColumn: 'span 4' }}>
              <h1>{title}</h1>
              <p className="mt-2 font-semibold text-gray-600">
                {formattedStartTime}-{formattedEndTime ? formattedEndTime : ''}
              </p>
              {cover_image_url && (
                <Image
                  className="mt-12 border"
                  src={cover_image_url}
                  alt={title}
                  width={250}
                  height={250}
                />
              )}

              <div className="mt-10">
                <h2 className="font-bold text-purple-600">Details</h2>
                <p className="mt-4 text-base">{details}</p>
              </div>
            </div>
            <div
              className="font-semibold text-gray-600"
              style={{ gridColumn: 'span 2' }}
            >
              <p>{name}</p>
              <p>{street_address}</p>
              <p>
                {city}, {state} {postal_code}, {country}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
};

export default EventPage;

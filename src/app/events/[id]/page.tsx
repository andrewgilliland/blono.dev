import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import { getEventById } from '@/lib/actions/events';
import Image from 'next/image';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

const EventPage = async ({ params }: EventPageProps) => {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return (
      <Container className="mt-24">
        <h1>Event Not Found</h1>
        <p>The event you are looking for does not exist.</p>
      </Container>
    );
  }

  const { title, location, address, details, image } = event;

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
              {image && (
                <Image
                  className="mt-12 border"
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={250}
                />
              )}

              <div className="mt-10">
                <h2 className="font-bold text-purple-600">Details</h2>
                <p className="mt-4 text-base">{details}</p>
              </div>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <p>{location}</p>
              <p>{address}</p>
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
};

export default EventPage;

import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import { getEventById } from '@/lib/actions/events';
import Image from 'next/image';

type EventPageProps = {
  params: Promise<{ id: string }>;
};

const EventPage = async ({ params }: EventPageProps) => {
  const eventId = (await params).id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Container className="mt-24">
        <h1>Event Not Found</h1>
        <p>The event you are looking for does not exist.</p>
      </Container>
    );
  }

  const { title, location, details, image } = event;

  return (
    <>
      <section>
        <Container className="mt-24">
          {image && (
            <Image src={image.src} alt={image.alt} width={600} height={400} />
          )}
          <h1>{title}</h1>
          <p>{details}</p>
          <p>{location}</p>
        </Container>
      </section>

      <ContactSection />
    </>
  );
};

export default EventPage;

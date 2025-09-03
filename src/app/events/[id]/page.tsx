import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import DateTimeBadge from '@/components/ui/EventBadge';
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

  const { title, location, address, details, image, startTime, endTime } =
    event;

  return (
    <>
      <section>
        <Container className="mt-24">
          <div>
            <h1>{title}</h1>
            {image && (
              <Image
                className="mt-12 w-1/2"
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
              />
            )}
            <div className="mt-12 flex flex-col items-start gap-2">
              <DateTimeBadge startTime={startTime} endTime={endTime} />
              <p>{location}</p>
              <p>{address}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-bold text-purple-600">Details</h2>
              <p className="mt-4">{details}</p>
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
};

export default EventPage;

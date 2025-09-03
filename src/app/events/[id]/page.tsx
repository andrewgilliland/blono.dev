import Container from '@/components/layout/Container';
import ContactSection from '@/components/sections/ContactSection';
import Badge from '@/components/ui/Badge';
import { getEventById } from '@/lib/actions/events';
import { CalendarIcon } from '@heroicons/react/24/solid';
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

  const dateObj = new Date(startTime);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'short' });

  const formatTimeString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

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
              <Badge theme="purple">
                <CalendarIcon className="mr-1 inline-block h-4 w-4" />
                <p>
                  {dayOfWeek}, {month} {day} · {formatTimeString(startTime)} -{' '}
                  {formatTimeString(endTime)} CST
                </p>
              </Badge>
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

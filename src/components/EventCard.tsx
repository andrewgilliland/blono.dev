import { FC } from 'react';
import { Event } from '@/types';
import Image from 'next/image';
import Badge from './Badge';

type EventCardProps = {
  event: Event;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { title, date, location, startTime, endTime, details, image } = event;

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'short' });

  return (
    <div className="group relative">
      <div className="absolute top-2 left-2 w-full h-full border group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-1000" />
      <div className="absolute -top-2 -left-2 border h-full w-full group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
      <div className="relative flex flex-col-reverse md:flex-row bg-white border">
        <div className="flex flex-col md:flex-row px-6 py-10 gap-10">
          <div className="flex flex-col gap-3 items-start max-w-2xl">
            <div className="flex flex-wrap gap-3">
              <Badge theme="purple">
                {dayOfWeek}, {month} {day} · {startTime} - {endTime} CST
              </Badge>
              <Badge theme="gray">{location}</Badge>
            </div>
            <h3 className="text-heading-tertiary">{title}</h3>
            <div className="text-copy">{details}</div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-purple-600 w-full md:w-1/3 px-10 py-8">
          {image ? (
            <div className="relative">
              <div className="absolute border border-pink-300 w-full h-full translate-x-1 translate-y-1" />
              <Image
                className="relative object-cover"
                src={image.src}
                width={160}
                height={160}
                alt={image.alt}
                priority
              />
            </div>
          ) : (
            <div className="bg-violet-100 w-48 h-32" />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

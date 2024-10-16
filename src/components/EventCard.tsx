import { Event } from '@/types';
import { FC } from 'react';

type EventCardProps = {
  event: Event;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { title, date, location, startTime, endTime, details } = event;

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
          <div className="flex md:flex-col justify-between md:justify-start items-baseline md:items-start gap-3 text-gray-700 min-w-max">
            <div className="font-bold text-base">
              {dayOfWeek} {month} {day}
            </div>
            <div className="font-semibold text-sm">
              {startTime} - {endTime}
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start max-w-2xl">
            <h3 className="text-heading-tertiary">{title}</h3>
            <div
              className={`bg-purple-500 font-semibold text-white text-xs px-2 py-1`}
            >
              {location}
            </div>
            <div className="text-copy">{details}</div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-purple-600 w-full md:w-1/3 px-10 py-8">
          <div className="bg-violet-200 w-48 h-32" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;

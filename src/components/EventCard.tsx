import { Event } from '@/types';
import { FC } from 'react';

type EventCardProps = {
  event: Event;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { title, location, startTime, endTime, details } = event;

  return (
    <div className="flex bg-white border border-gray-300 hover:shadow transition-all duration-300">
      <div className="flex px-6 py-10 gap-10">
        <div className="flex items-start mt-1">
          <div className="flex items-center">
            <div className="bg-blue-700 h-2 w-2 rounded-full" />
            <div className="flex font-semibold text-gray-700 text-sm min-w-max ml-2">
              {startTime} - {endTime}
            </div>
          </div>
        </div>
        <div className="max-w-2xl flex flex-col gap-3 items-start">
          <h3 className="text-blue-700 text-xl font-bold font-brand">
            {title}
          </h3>
          <div className="bg-white text-sm p-2">{location}</div>
          <div className="text-gray-900 text-base">{details}</div>
        </div>
      </div>
      <div className="bg-purple-600 w-1/3 px-10 py-8">
        <div className="bg-violet-200 w-full h-full" />
      </div>
    </div>
  );
};

export default EventCard;

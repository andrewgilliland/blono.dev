import { FC } from 'react';

type Event = {
  title: string;
  location: string;
  description: string;
};

type EventCardProps = {
  event: Event;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { title, location, description } = event;

  return (
    <div className="bg-gray-100 outline outline-1 outline-gray-300 hover:outline-dashed hover:outline-2 hover:outline-purple-700 transition-all duration-300">
      <div className="px-6 py-10">
        <h3 className="text-blue-700 text-2xl font-bold font-brand">{title}</h3>
        <div>{location}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default EventCard;

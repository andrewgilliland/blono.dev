'use client';

import { FC } from 'react';
import { EventType } from '@/types';
import Image from 'next/image';
import { google } from 'calendar-link';
import { MapPinIcon, PhotoIcon } from '@heroicons/react/24/solid';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Link from 'next/link';
import DateTimeBadge from '../ui/EventBadge';
import LocationBadge from '../ui/LocationBadge';
import AddToCalendarButton from '../ui/AddToCalendarButton';

type EventCardProps = {
  event: EventType;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { id, title, location, startTime, endTime, details, image } = event;

  return (
    <Link href={`/events/${id}`} className="relative">
      <div className="relative flex h-full flex-col-reverse rounded-[10px] border border-light border-opacity-75 bg-darker md:flex-row">
        <div className="flex flex-col gap-10 px-6 py-10 md:flex-row">
          <div className="flex max-w-2xl flex-col items-start gap-3">
            <div className="flex flex-wrap items-start gap-3">
              <DateTimeBadge startTime={startTime} endTime={endTime} />
              <LocationBadge location={location} />
            </div>
            <h3 className="text-heading-tertiary">{title}</h3>
            <p className="text-copy line-clamp-2 overflow-hidden text-ellipsis">
              {details}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-t-[10px] bg-purp px-10 py-8 md:w-1/3 md:rounded-r-[10px] md:rounded-tl-none">
          {image ? (
            <div className="relative">
              <div className="absolute h-full w-full translate-x-1 translate-y-1 rounded-[10px] bg-purp-light" />
              <Image
                className="relative min-w-24 rounded-[10px] object-cover"
                src={image.src}
                width={160}
                height={160}
                alt={image.alt}
                priority
              />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute h-full w-full translate-x-1 translate-y-1 rounded-[10px] bg-purp-light" />
              <div className="relative grid h-[120px] w-28 place-items-center rounded-[10px] bg-violet-400">
                <PhotoIcon className="mx-auto size-20 text-violet-200" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

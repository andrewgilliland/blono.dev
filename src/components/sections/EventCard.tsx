import { FC } from "react";
import { EventType } from "@/types";
import Image from "next/image";
import { google } from "calendar-link";
import { CalendarIcon, MapPinIcon, PhotoIcon } from "@heroicons/react/24/solid";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

type EventCardProps = {
  event: EventType;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { title, date, location, startTime, endTime, details, image } = event;

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "short" });
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.toLocaleString("default", { weekday: "short" });
  const isFutureEvent = new Date() < dateObj;

  return (
    <div className="relative">
      <div className="relative flex flex-col-reverse md:flex-row bg-darker border border-light border-opacity-75 rounded-[10px]">
        <div className="flex flex-col md:flex-row px-6 py-10 gap-10">
          <div className="flex flex-col gap-3 items-start max-w-2xl">
            <div className="flex flex-wrap gap-3 items-start">
              <div className="flex flex-col gap-3">
                <Badge theme="purple">
                  <CalendarIcon className="h-4 w-4 inline-block mr-1" />
                  <p>
                    {dayOfWeek}, {month} {day} · {startTime} - {endTime} CST
                  </p>
                </Badge>

                {isFutureEvent && (
                  <Button
                    title="Add to Calendar"
                    size="xs"
                    theme="green"
                    onClick={() =>
                      window.open(
                        google({
                          title,
                          location,
                          description: details,
                          start: new Date(date),
                          end: new Date(date),
                        }),
                        "_blank"
                      )
                    }
                  >
                    Add To Calendar
                  </Button>
                )}
              </div>
              {/* ! TODO Link to Google Map Location */}
              <Badge theme="gray">
                <MapPinIcon className="h-4 w-4 inline-block mr-1" />
                <p>{location}</p>
              </Badge>
            </div>
            <h3 className="text-heading-tertiary">{title}</h3>
            <div className="text-copy">{details}</div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-purp w-full rounded-t-[10px] md:rounded-tl-none md:rounded-r-[10px] md:w-1/3 px-10 py-8">
          {image ? (
            <div className="relative">
              <div className="absolute bg-purp-light rounded-[10px] w-full h-full translate-x-1 translate-y-1" />
              <Image
                className="relative object-cover rounded-[10px]"
                src={image.src}
                width={160}
                height={160}
                alt={image.alt}
                priority
              />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute bg-purp-light rounded-[10px] w-full h-full translate-x-1 translate-y-1" />
              <div className="relative bg-violet-400 w-40 h-[120px] rounded-[10px] grid place-items-center">
                <PhotoIcon className="text-violet-200 w-24 h-24 mx-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

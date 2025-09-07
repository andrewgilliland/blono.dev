'use client';

import { FC, useRef, useState } from 'react';
import { EventType } from '@/types';
import { google, outlook, ics } from 'calendar-link';
import Button from '../ui/Button';

type AddToCalendarButtonProps = {
  event: EventType;
};

const AddToCalendarButton: FC<AddToCalendarButtonProps> = ({ event }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const { title, location, startTime, endTime, details } = event;

  const menuButtons = [
    { name: 'Google Calendar', link: google },
    { name: 'Outlook', link: outlook },
    { name: 'Apple Calendar', link: ics },
  ];

  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={open}
        title="Add to Calendar"
        size="sm"
        theme="green"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Add To Calendar
      </Button>
      {open && (
        <div
          className="absolute z-10 mt-2 w-48 overflow-hidden rounded-[10px] border border-light border-opacity-75 bg-purp"
          role="menu"
        >
          {menuButtons.map(({ name, link }) => (
            <div key={name}>
              <button
                className="block w-full px-4 py-2 text-left font-semibold text-white transition-colors hover:bg-purp-light hover:text-black"
                role="menuitem"
                onClick={() => {
                  window.open(
                    link({
                      title,
                      location,
                      description: details,
                      start: new Date(startTime),
                      end: new Date(endTime),
                    }),
                    '_blank',
                  );
                }}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCalendarButton;

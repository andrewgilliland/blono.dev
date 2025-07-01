import { EventType } from '@/types';
import fs from 'fs';
import path from 'path';

export const getAllEvents = () => {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const events: EventType[] = JSON.parse(jsonData);

  return events;
};

export const getEventById = (id: string): EventType | null => {
  const events = getAllEvents();
  const event = events.find((event) => event.id === id);

  return event || null;
};

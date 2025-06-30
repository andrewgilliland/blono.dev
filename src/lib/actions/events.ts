import { EventType } from '@/types';
import fs from 'fs';
import path from 'path';

export const getAllEvents = () => {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const events: EventType[] = JSON.parse(jsonData);

  return events;
};

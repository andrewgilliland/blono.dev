export type EventRow = {
  id: string;
  title: string;
  start_time: string; // or Date, if parsed
  location_id: string;
};

export type LocationRow = {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
};

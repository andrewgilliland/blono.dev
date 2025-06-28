type Lesson = {
  title: string;
  slug: string; // !This must be the same as the file name!
  description: string;
  number: number;
};

type Event = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  details: string;
  location: string;
  image: {
    src: string;
    alt: string;
  };
  address: string;
};

export type { Lesson, Event };

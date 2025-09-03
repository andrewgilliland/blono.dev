export type ImageType = {
  src: string;
  alt: string;
};

export type NavLinkType = {
  href: string;
  text: string;
};

export type Post = {
  filePath: string;
  data: {
    title: string;
    description: string;
    date: string;
  };
};

export type EventType = {
  id: string;
  title: string;
  location: string;
  address: string;
  details: string;
  startTime: string;
  endTime: string;
  image?: ImageType;
};

export type DeveloperType = {
  image: ImageType;
  role: string;
  skills: string[];
  name: string;
  bio: string;
};

export type LessonType = {
  title: string;
  slug: string; // !This must be the same as the file name!
  description: string;
  number: number;
};

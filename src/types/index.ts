export type ImageProps = {
  src: string;
  alt: string;
};

export type Post = {
  filePath: string;
  data: {
    title: string;
    description: string;
    date: string;
  };
};

export type Event = {
  title: string;
  location: string;
  details: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type Developer = {
  image: ImageProps;
  role: string;
  skills: string[];
  name: string;
  bio: string;
};

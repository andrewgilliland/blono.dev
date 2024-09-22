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
  startTime: string;
  endTime: string;
};

import { HeroGridCardProps } from '@/components/HeroGridCard';

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

export type Content = {
  hero: {
    heading: string;
    tagline: string;
  };
  heroGridContentItems: HeroGridCardProps[];
  about: {
    heading: string;
    description: string;
  };
  contact: {
    heading: string;
    subHeading: string;
    description: string;
  };
  footerText: string;
};

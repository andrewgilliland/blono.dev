import { FC } from 'react';
import HeroGridCard, { HeroGridCardProps } from './HeroGridCard';

type HeroGridProps = {
  contentItems: HeroGridCardProps[];
};

const HeroGrid: FC<HeroGridProps> = ({ contentItems }) => {
  const heroGridContentItems = [
    {
      color: 'bg-cyan-500',
      span: 'md:col-span-3',
      image: {
        src: '/bnd-peeps-1.jpg',
        alt: 'Bloomington-Normal Developers Meetup People',
      },
      heading: 'Networking Opportunities',
      tagline:
        'Meet and network with fellow software engineers, developers, and tech enthusiasts in your area.',
    },
    {
      color: 'bg-blue-600',
      span: 'md:col-span-3',
      image: {
        src: '/bloomington-1.jpg',
        alt: 'Bloomington, Illinois',
      },
      heading: 'Knowledge Sharing',
      tagline:
        'Attend talks and workshops led by experienced professionals and industry leaders.',
    },
    {
      color: 'bg-sky-500',
      span: 'md:col-span-2',
      image: { src: '/tech-bros-1.avif', alt: 'Tech Bros in Meeting' },
      heading: 'Workshops',
      tagline:
        'Participate in hands-on coding sessions and collaborative projects to enhance your skills.',
    },
    {
      color: 'bg-purple-500',
      span: 'md:col-span-2',
      image: { src: '/tech-people-1.avif', alt: 'Tech People at Coffee Shop' },
      heading: 'Career Development',
      tagline:
        'Gain insights into career growth, job opportunities, and professional development in the software engineering field.',
    },
    {
      color: 'bg-indigo-500',
      span: 'md:col-span-2',
      image: { src: '/normal-1.jpeg', alt: 'Normal, Illinois' },
      heading: 'Community Support',
      tagline:
        'Be part of a welcoming community that supports learning, collaboration, and mutual growth for all skill levels.',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-20">
      {heroGridContentItems.map((contentItem, index) => (
        <HeroGridCard key={index} {...contentItem} />
      ))}
    </div>
  );
};

export default HeroGrid;

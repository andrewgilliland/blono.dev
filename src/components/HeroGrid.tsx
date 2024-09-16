import HeroGridCard from './HeroGridCard';

const HeroGrid = () => {
  const heroGridContent = [
    {
      color: 'bg-cyan-500',
      span: 'col-span-3',
      heading: 'Networking Opportunities',
      tagline:
        'Meet and network with fellow software engineers, developers, and tech enthusiasts in your area.',
    },
    {
      color: 'bg-blue-600',
      span: 'col-span-3',
      heading: 'Knowledge Sharing',
      tagline:
        'Attend talks and workshops led by experienced professionals and industry leaders.',
    },
    {
      color: 'bg-sky-500',
      span: 'col-span-2',
      heading: 'Workshops',
      tagline:
        'Participate in hands-on coding sessions and collaborative projects to enhance your skills.',
    },
    {
      color: 'bg-purple-500',
      span: 'col-span-2',
      heading: 'Career Development',
      tagline:
        'Gain insights into career growth, job opportunities, and professional development in the software engineering field.',
    },
    {
      color: 'bg-indigo-500',
      span: 'col-span-2',
      heading: 'Community Support',
      tagline:
        'Be part of a welcoming community that supports learning, collaboration, and mutual growth for all skill levels.',
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-2 border mt-20">
      {heroGridContent.map((contentItem, index) => (
        <HeroGridCard key={index} {...contentItem} />
      ))}
    </div>
  );
};

export default HeroGrid;

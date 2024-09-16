const HeroGrid = () => {
  const heroGridContent = [
    {
      heading: 'Networking Opportunities',
      tagline:
        'Meet and network with fellow software engineers, developers, and tech enthusiasts in your area.',
    },
    {
      heading: 'Knowledge Sharing',
      tagline:
        'Attend talks and workshops led by experienced professionals and industry leaders.',
    },
    {
      heading: 'Hands-On Workshops',
      tagline:
        'Participate in hands-on coding sessions and collaborative projects to enhance your skills.',
    },
    {
      heading: 'Career Development',
      tagline:
        'Gain insights into career growth, job opportunities, and professional development in the software engineering field.',
    },
    {
      heading: 'Community Support',
      tagline:
        'Be part of a welcoming community that supports learning, collaboration, and mutual growth for all skill levels.',
    },
  ];
  return (
    <div className="grid grid-cols-6 gap-2 border mt-20">
      {heroGridContent.map((contentItem, index) => {
        const { heading, tagline } = contentItem;

        return (
          <div
            key={index}
            className="flex flex-col justify-between bg-cyan-500 col-span-3 px-8 py-10"
          >
            <div className="h-40 w-40 bg-cyan-100" />
            <div className="mt-12">
              <p className="text-white">{tagline}</p>
              <h3 className="font-brand font-bold text-white text-2xl mt-4">
                {heading}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroGrid;

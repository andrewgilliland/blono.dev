export const mainLogo = {
  src: '/bnd-header-logo-white.svg',
  alt: 'Bloomington-Normal Developers Logo',
};

export const getContent = () => {
  const header = {
    logo: {
      src: '/bnd-header-logo.svg',
      alt: 'Bloomington-Normal Developers Logo',
    },
    navLinks: [
      { href: '#', text: 'About' },
      { href: '#', text: 'Events' },
      { href: '#', text: 'Contact' },
    ],
  };

  const hero = {
    heading: 'Bloomington-Normal Developers',
    tagline:
      "Bloomington-Normal's group for professional web or application designers or developers and want to network with others in the industry, learn about new and up-and-coming technologies, and anyone who wants to learn about web or application development. All skill levels welcome.",
  };
  const heroGridContentItems = [
    {
      color: 'bg-cyan-500',
      span: 'col-span-3',
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
      span: 'col-span-3',
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
      span: 'col-span-2',
      image: { src: '/tech-bros-1.avif', alt: 'Tech Bros in Meeting' },
      heading: 'Workshops',
      tagline:
        'Participate in hands-on coding sessions and collaborative projects to enhance your skills.',
    },
    {
      color: 'bg-purple-500',
      span: 'col-span-2',
      image: { src: '/tech-people-1.avif', alt: 'Tech People at Coffee Shop' },
      heading: 'Career Development',
      tagline:
        'Gain insights into career growth, job opportunities, and professional development in the software engineering field.',
    },
    {
      color: 'bg-indigo-500',
      span: 'col-span-2',
      image: { src: '/normal-1.jpeg', alt: 'Normal, Illinois' },
      heading: 'Community Support',
      tagline:
        'Be part of a welcoming community that supports learning, collaboration, and mutual growth for all skill levels.',
    },
  ];

  const about = {
    heading: 'About Us',
    description:
      'Join us for the quirkiest software developer meetup in Bloomington-Normal, Illinois, where code and coffee flow in equal measure! Whether you\'re a Pythonista, a Java junkie, or just someone who thinks "Hello World" is a great conversation starter, you\'ll fit right in. Come for the tech talks, stay for the inevitable debate on tabs vs. spaces – and maybe even win a prize for the best debugging horror story!',
  };

  const contact = {
    heading: 'Contact Us',
    subHeading: 'Get in touch!',
    description:
      "We'd love to hear from you! Send us a message on our LinkedIn page or join the conversation on our Discord!",
  };

  const footerText = 'All rights reserved.';

  return {
    header,
    hero,
    heroGridContentItems,
    about,
    contact,
    footerText,
  };
};

export const footerContent = {
  links: [
    {
      href: 'https://www.linkedin.com/company/bloomington-normal-developers',
      text: 'LinkedIn',
    },
    { href: 'https://discord.gg/5XfdtzHrjH', text: 'Discord' },
    { href: 'https://www.meetup.com/blonodev', text: 'Meetup' },
  ],
};

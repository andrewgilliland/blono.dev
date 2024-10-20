import { BadgeTheme } from '@/components/Badge';
import DiscordIcon from '@/components/icons/DiscordIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import MeetupIcon from '@/components/icons/MeetupIcon';
import { Developer, ImageProps } from '@/types';

export type HeroSectionType = {
  logo: ImageProps;
  heading: string;
  tagline: string;
  heroGridContentItems: {
    color: string;
    span: string;
    image: {
      src: string;
      alt: string;
    };
    heading: string;
    tagline: string;
  }[];
};

export type AboutSectionType = {
  heading: string;
  description: string;
  developerCards: {
    developer: Developer;
    color: BadgeTheme;
  }[];
};

export type ContactSectionType = {
  heading: string;
  subHeading: string;
  description: string;
};

export type Content = {
  global: {
    mainLogo: {
      src: string;
      alt: string;
    };
  };
  header: {
    logo: {
      src: string;
      alt: string;
    };
    links: { href: string; text: string }[];
  };
  pages: {
    home: {
      hero: HeroSectionType;
      about: AboutSectionType;
      contact: ContactSectionType;
    };
    ['404']: {
      heading: string;
      description: string;
    };
  };
  footer: {
    copyright: string;
    links: { href: string; text: string; icon: () => JSX.Element }[];
  };
};

export const content: Content = {
  global: {
    mainLogo: {
      src: '/bn-logo-1.svg',
      alt: 'Bloomington-Normal Developers Logo',
    },
  },
  header: {
    logo: {
      src: '/bnd-header-logo-white.svg',
      alt: 'Bloomington-Normal Developers Logo',
    },
    links: [
      { href: '#', text: 'Events' },
      { href: '#', text: 'About' },
      { href: '#', text: 'Contact' },
    ],
  },
  pages: {
    home: {
      hero: {
        logo: {
          src: '/bn-logo-1.svg',
          alt: 'Bloomington-Normal Developers Logo',
        },
        heading: 'Bloomington-Normal Developers',
        tagline:
          "Bloomington-Normal's group for professional software developers and designers.",
        heroGridContentItems: [
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
            image: {
              src: '/tech-people-1.avif',
              alt: 'Tech People at Coffee Shop',
            },
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
        ],
      },

      about: {
        heading: 'About Us',
        description:
          'Join us for the quirkiest software developer meetup in Bloomington-Normal, Illinois, where code and coffee flow in equal measure! Whether you\'re a Pythonista, a Java junkie, or just someone who thinks "Hello World" is a great conversation starter, you\'ll fit right in. Come for the tech talks, stay for the inevitable debate on tabs vs. spaces – and maybe even win a prize for the best debugging horror story!',
        developerCards: [
          {
            developer: {
              image: {
                src: '/andre-ellis-jr.jpg',
                alt: 'Andre Ellis Jr.',
              },
              role: 'Front End',
              skills: ['React', 'JavaScript'],
              name: 'Andre Ellis Jr.',
              bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem fugit nostrum voluptatem odit saepe magnam alias incidunt hic .',
            },
            color: 'blue',
          },
          {
            developer: {
              image: {
                src: '/andrew-gilliland.jpg',
                alt: 'Andrew Gilliland',
              },
              role: 'Mobile',
              skills: ['React Native', 'JavaScript'],
              name: 'Andrew Gilliland',
              bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem fugit nostrum voluptatem odit saepe magnam alias incidunt hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem fugit nostrum voluptatem odit saepe magnam alias incidunt hic.',
            },
            color: 'purple',
          },
          {
            developer: {
              image: {
                src: '/jake-barbush.jpg',
                alt: 'Jake Barbush',
              },
              role: 'Back End',
              skills: ['Node.js', 'JavaScript'],
              name: 'Jake Barbush',
              bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem fugit nostrum voluptatem odit saepe magnam alias incidunt hic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem fugit nostrum voluptatem odit saepe magnam alias incidunt hic.',
            },
            color: 'cyan',
          },
        ],
      },

      contact: {
        heading: 'Contact Us',
        subHeading: 'Get in touch!',
        description:
          "We'd love to hear from you! Send us a message on our LinkedIn page or join the conversation on our Discord!",
      },
    },
    ['404']: {
      heading: '404 - Page Not Found',
      description: "Don't know what a 404 is? Here is some knowledge.",
    },
  },
  footer: {
    copyright: 'All rights reserved.',
    links: [
      {
        href: 'https://discord.gg/5XfdtzHrjH',
        text: 'Discord',
        icon: DiscordIcon,
      },
      {
        href: 'https://www.linkedin.com/company/bloomington-normal-developers',
        text: 'LinkedIn',
        icon: LinkedInIcon,
      },
      {
        href: 'https://www.meetup.com/blonodev',
        text: 'Meetup',
        icon: MeetupIcon,
      },
    ],
  },
};

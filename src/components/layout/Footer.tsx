import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DiscordIcon from '@/components/icons/DiscordIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import MeetupIcon from '@/components/icons/MeetupIcon';
import Container from './Container';

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  const mainLogo = {
    src: '/bn-logo-1.svg',
    alt: 'Bloomington-Normal Developers Logo',
  };

  const socialLinks = [
    {
      href: 'https://discord.gg/5XfdtzHrjH',
      text: 'Discord',
      icon: <DiscordIcon />,
    },
    {
      href: 'https://www.linkedin.com/company/bloomington-normal-developers',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
    {
      href: 'https://www.meetup.com/blonodev',
      text: 'Meetup',
      icon: <MeetupIcon />,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkish-blue/50">
      <Container className="flex w-full flex-col py-20">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <Link href="/">
            <Image
              src={mainLogo.src}
              width={120}
              height={100}
              alt={mainLogo.alt}
              priority
            />
          </Link>
          <div className="flex gap-5">
            {socialLinks.map(({ href, icon }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:rotate-12 hover:scale-110"
                key={href}
                href={href}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <p className="mb-3 text-center font-bold uppercase text-gray-300">
            {`© ${currentYear} Bloomington-Normal Developers. All rights reserved.`}
          </p>

          <p className="text-center text-sm text-gray-100">
            Design by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-50 underline"
              href="https://www.haileynfetting.com/"
            >
              Hailey Fetting
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

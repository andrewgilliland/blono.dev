import { FC } from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import HeaderBanner from './HeaderBanner';
import { EventType, NavLinkType } from '@/types';
import { HEADER_HEIGHT } from '@/lib/constants';

type HeaderProps = {
  events?: EventType[];
};

const Header: FC<HeaderProps> = ({ events }) => {
  const mainLogo = {
    src: '/bn-logo-1.svg',
    alt: 'Bloomington-Normal Developers Logo',
  };

  const navLinks: NavLinkType[] = [
    { href: '/events', text: 'Events' },
    { href: '/workshops', text: 'Workshops' },
    { href: '/#about', text: 'About' },
    { href: '/#contact', text: 'Contact' },
  ];

  return (
    <header className="fixed z-20 w-full bg-black">
      <div
        className="absolute z-0 w-full bg-darkish-blue/50"
        style={{
          height: HEADER_HEIGHT,
        }}
      />
      <MobileHeader logo={mainLogo} navLinks={navLinks} />
      <DesktopHeader logo={mainLogo} navLinks={navLinks} />
      <HeaderBanner events={events} />
    </header>
  );
};

export default Header;

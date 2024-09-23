import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { palette } from '@/styles/colors';
import { Content } from '../../content';

type HeaderProps = {
  content: Content;
};

const Header: FC<HeaderProps> = ({ content }) => {
  const { mainLogo } = content.global;
  const { links } = content.header;

  return (
    <header
      style={{
        backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
      }}
      className="fixed z-10 bg-purple-950 flex justify-between items-center w-full px-[10%] py-4"
    >
      <Link href="/">
        <Image
          src={mainLogo.src}
          width={190}
          height={100}
          alt={mainLogo.alt}
          priority
        />
      </Link>

      <div className="flex gap-12">
        {links.map((link) => (
          <NavLink key={link.text} link={link} />
        ))}
      </div>
    </header>
  );
};

export default Header;

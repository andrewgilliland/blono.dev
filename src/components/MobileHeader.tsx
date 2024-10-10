import { FC, useState } from 'react';
import Image from 'next/image';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLink from './NavLink';
import { palette } from '@/styles/colors';
import { Content } from '../../content';
import OpenClose from './icons/OpenClose';

type MobileHeaderProps = {
  content: Content;
};

const MobileHeader: FC<MobileHeaderProps> = ({ content }) => {
  const { mainLogo } = content.global;
  const { links } = content.header;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      // style={{
      //   backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
      // }}
      className="fixed z-10 w-full bg-purple-950"
      // className="flex justify-between items-center fixed z-10 bg-purple-950  w-full px-[10%] py-4"
    >
      <div
        style={{
          backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
        }}
        className="flex justify-between items-center  bg-purple-950  w-full px-[10%] py-4"
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
        <button onClick={() => setIsOpen(!isOpen)}>
          <OpenClose isOpen={isOpen} />
        </button>
      </div>

      {links.map((link, index) => (
        <div
          key={link.text}
          style={{
            backgroundColor: palette.darkBlueish,
            top: 106 + index * 64,
            transitionDelay: `${index * 0.1}s`,
          }}
          className={`flex justify-center items-center text-white absolute h-24 w-full ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform`}
        >
          <NavLink link={link} />
        </div>
      ))}

      {/* <div className="flex gap-12">
        {links.map((link) => (
          <NavLink key={link.text} link={link} />
        ))}
      </div> */}
    </header>
  );
};

export default MobileHeader;

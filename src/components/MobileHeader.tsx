import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { palette } from '@/styles/colors';
import { Content } from '../../content';
import OpenClose from './icons/OpenClose';
import MobileNavMenu from './MobileNavMenu';

type MobileHeaderProps = {
  content: Content;
};

const MobileHeader: FC<MobileHeaderProps> = ({ content }) => {
  const { mainLogo } = content.global;
  const { links } = content.header;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-purple-950">
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

      <MobileNavMenu links={links} isOpen={isOpen} />
    </header>
  );
};

export default MobileHeader;

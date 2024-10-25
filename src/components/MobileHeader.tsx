import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="md:hidden">
      <div className="flex justify-between items-center w-full px-[10%] py-4">
        <Link className="z-10" href="/">
          <Image
            className="h-12"
            src={mainLogo.src}
            width={80}
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
    </div>
  );
};

export default MobileHeader;

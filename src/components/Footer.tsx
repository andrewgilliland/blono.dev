import { palette } from '@/styles/colors';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Content } from '../../content';

type FooterProps = {
  content: Content;
};

const Footer: FC<FooterProps> = ({ content }) => {
  const { mainLogo } = content.global;
  const { links, copyright } = content.footer;

  return (
    <footer
      style={{ backgroundColor: palette.darkBlueish }}
      className="flex flex-col px-[10%] py-20"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={mainLogo.src}
            width={190}
            height={100}
            alt={mainLogo.alt}
            priority
          />
        </Link>
        <div className="flex gap-4 text-gray-200">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-gray-100 mb-3 font-bold uppercase opacity-50">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

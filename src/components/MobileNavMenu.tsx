import { FC } from 'react';
import { palette } from '@/styles/colors';
import NavLink from './NavLink';

type MobileNavMenuProps = {
  links: { href: string; text: string }[];
  isOpen: boolean;
};

const MobileNavMenu: FC<MobileNavMenuProps> = ({ links, isOpen }) => {
  return (
    <>
      {links.map((link, index) => (
        <div
          key={link.text}
          style={{
            backgroundColor: palette.darkBlueish,
            top: 106 + index * 64,
            transitionDelay: `${
              (isOpen ? index : links.length - index) * 0.1
            }s`,
          }}
          className={`flex justify-center items-center text-white absolute h-24 w-full ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform`}
        >
          <NavLink link={link} />
        </div>
      ))}
    </>
  );
};

export default MobileNavMenu;

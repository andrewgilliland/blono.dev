import { FC } from 'react';
import { Content } from '../../content';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { palette } from '@/styles/colors';

type HeaderProps = {
  content: Content;
};

const Header: FC<HeaderProps> = ({ content }) => {
  return (
    <header
      className="fixed z-20 w-full bg-purple-950"
      style={{
        backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
      }}
    >
      <MobileHeader content={content} />
      <DesktopHeader content={content} />
    </header>
  );
};

export default Header;

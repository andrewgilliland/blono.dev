import { FC } from 'react';
import { Content } from '../../content';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

type HeaderProps = {
  content: Content;
};

const Header: FC<HeaderProps> = ({ content }) => {
  return (
    <div className="z-20">
      <MobileHeader content={content} />
      <DesktopHeader content={content} />
    </div>
  );
};

export default Header;

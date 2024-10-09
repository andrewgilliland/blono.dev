import { FC } from 'react';
import { Content } from '../../content';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

type HeaderProps = {
  content: Content;
};

const Header: FC<HeaderProps> = ({ content }) => {
  return (
    <>
      <MobileHeader content={content} />
      <DesktopHeader content={content} />
    </>
  );
};

export default Header;

import { FC } from "react";
import { Content } from "../../content";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { palette } from "@/styles/colors";
import { HEADER_HEIGHT } from "./Layout";
import HeaderBanner from "./HeaderBanner";
import { Event } from "@/types";

type HeaderProps = {
  events?: Event[];
  content: Content;
};

const Header: FC<HeaderProps> = ({ events, content }) => {
  return (
    <>
      <header className="fixed z-20 w-full bg-black">
        <div
          className="absolute w-full opacity-50 z-0"
          style={{
            backgroundImage: `radial-gradient(farthest-corner at -200px 0px, ${palette.pinkish}, ${palette.blueish} 45%, ${palette.darkBlueish} 89%, ${palette.darkBlueish})`,
            height: HEADER_HEIGHT,
          }}
        />
        <MobileHeader content={content} />
        <DesktopHeader content={content} />
        <HeaderBanner events={events} />
      </header>
    </>
  );
};

export default Header;

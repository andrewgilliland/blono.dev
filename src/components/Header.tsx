import { FC } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { palette } from "@/styles/colors";
import { HEADER_HEIGHT } from "./Layout";
import HeaderBanner from "./HeaderBanner";
import { Event, NavLink } from "@/types";

type HeaderProps = {
  events?: Event[];
};

const Header: FC<HeaderProps> = ({ events }) => {
  const mainLogo = {
    src: "/bnd-header-logo-white.svg",
    alt: "Bloomington-Normal Developers Logo",
  };

  const navLinks: NavLink[] = [
    { href: "/#events", text: "Events" },
    { href: "/workshops", text: "Workshops" },
    { href: "/#about", text: "About" },
    { href: "/#contact", text: "Contact" },
  ];

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
        <MobileHeader logo={mainLogo} navLinks={navLinks} />
        <DesktopHeader logo={mainLogo} navLinks={navLinks} />
        <HeaderBanner events={events} />
      </header>
    </>
  );
};

export default Header;

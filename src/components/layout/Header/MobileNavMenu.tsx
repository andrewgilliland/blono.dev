import { FC } from "react";
import { HEADER_HEIGHT } from "@/lib/constants";
import NavLink from "./NavLink";
import { NavLinkType } from "@/types";

type MobileNavMenuProps = {
  links: NavLinkType[];
  isOpen: boolean;
};

const MobileNavMenu: FC<MobileNavMenuProps> = ({ links, isOpen }) => {
  return (
    <>
      {links.map((link, index) => (
        <div
          key={link.text}
          style={{
            top: HEADER_HEIGHT + index * 64,
            transitionDelay: `${
              (isOpen ? index : links.length - index) * 0.1
            }s`,
          }}
          className={`flex justify-center items-center bg-black text-white absolute h-24 w-full ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform`}
        >
          <div className="absolute bg-dark-blue h-full w-full opacity-50 z-0" />
          <NavLink link={link} />
        </div>
      ))}
    </>
  );
};

export default MobileNavMenu;

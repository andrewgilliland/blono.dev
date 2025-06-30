import { NavLinkType } from "@/types";
import { FC } from "react";

type NavLinkProps = {
  link: NavLinkType;
};

const NavLink: FC<NavLinkProps> = ({ link }) => {
  const { text, href } = link;
  return (
    <a className="group z-10" href={href}>
      <div className="font-semibold text-white">{text}</div>
      <div className="bg-green-500 h-[2px] w-[0%] rounded-full group-hover:w-full transition-all" />
    </a>
  );
};

export default NavLink;

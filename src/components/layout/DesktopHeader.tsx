import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { ImageType, NavLinkType } from "@/types";

type DesktopHeaderProps = {
  logo: ImageType;
  navLinks: NavLinkType[];
};

const DesktopHeader: FC<DesktopHeaderProps> = ({ logo, navLinks }) => {
  return (
    <div className="hidden md:flex justify-between items-center px-[10%] py-4">
      <Link className="z-10" href="/">
        <Image
          className="h-12"
          src={logo.src}
          width={190}
          height={100}
          alt={logo.alt}
          priority
        />
      </Link>

      <div className="flex gap-12">
        {navLinks.map((link) => (
          <NavLink key={link.text} link={link} />
        ))}
      </div>
    </div>
  );
};

export default DesktopHeader;

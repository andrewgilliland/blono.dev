import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { ImageType, NavLinkType } from "@/types";
import Container from "../Container";

type DesktopHeaderProps = {
  logo: ImageType;
  navLinks: NavLinkType[];
};

const DesktopHeader: FC<DesktopHeaderProps> = ({ logo, navLinks }) => {
  return (
    <div className="hidden md:flex">
      <Container className="flex justify-between items-center w-full py-4">
        <Link className="z-10" href="/">
          <Image
            className="h-12"
            src={logo.src}
            width={62}
            height={48}
            alt={logo.alt}
            priority
          />
        </Link>

        <div className="flex gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.text} link={link} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DesktopHeader;

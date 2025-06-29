import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import OpenClose from "../icons/OpenClose";
import { ImageType, NavLinkType } from "@/types";

type MobileHeaderProps = {
  logo: ImageType;
  navLinks: NavLinkType[];
};

const MobileHeader: FC<MobileHeaderProps> = ({ logo, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center w-full px-[10%] py-4">
        <Link className="z-10" href="/">
          <Image
            className="h-12"
            src={logo.src}
            width={80}
            height={100}
            alt={logo.alt}
            priority
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <OpenClose isOpen={isOpen} />
        </button>
      </div>

      <MobileNavMenu links={navLinks} isOpen={isOpen} />
    </div>
  );
};

export default MobileHeader;

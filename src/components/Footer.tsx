import { palette } from "@/styles/colors";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import DiscordIcon from "@/components/icons/DiscordIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MeetupIcon from "@/components/icons/MeetupIcon";
import { Content } from "../../content";

type FooterProps = {
  content: Content;
};

const Footer: FC<FooterProps> = ({ content }) => {
  const { mainLogo } = content.global;
  const { copyright } = content.footer;
  const links = [
    {
      href: "https://discord.gg/5XfdtzHrjH",
      text: "Discord",
      icon: <DiscordIcon />,
    },
    {
      href: "https://www.linkedin.com/company/bloomington-normal-developers",
      text: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://www.meetup.com/blonodev",
      text: "Meetup",
      icon: <MeetupIcon />,
    },
  ];

  return (
    <footer
      style={{ backgroundColor: palette.darkBlueish }}
      className="flex flex-col px-[10%] py-20"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={mainLogo.src}
            width={120}
            height={100}
            alt={mainLogo.alt}
            priority
          />
        </Link>
        <div className="flex gap-5">
          {links.map(({ href, icon }) => (
            <a
              className="hover:scale-110 hover:rotate-12 transition-transform"
              key={href}
              href={href}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <p className="text-gray-300 mb-3 font-bold uppercase text-center">
          © Bloomington-Normal Developers. {copyright}
        </p>

        <p className="text-gray-100 text-sm text-center">
          Design by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline text-gray-50"
            href="https://www.haileynfetting.com/"
          >
            Hailey Fetting
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

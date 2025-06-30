import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "@/components/icons/DiscordIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MeetupIcon from "@/components/icons/MeetupIcon";
import Container from "./Container";

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  const mainLogo = {
    src: "/bn-logo-1.svg",
    alt: "Bloomington-Normal Developers Logo",
  };

  const socialLinks = [
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkish-blue/50">
      <Container className="flex flex-col w-full py-20">
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
            {socialLinks.map(({ href, icon }) => (
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
            {`© ${currentYear} Bloomington-Normal Developers. All rights reserved.`}
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
      </Container>
    </footer>
  );
};

export default Footer;

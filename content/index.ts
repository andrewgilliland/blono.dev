import DiscordIcon from "@/components/icons/DiscordIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MeetupIcon from "@/components/icons/MeetupIcon";
import { home, HomePageContent } from "./pages/home";
import { global, GlobalContent } from "./global";

export type Content = {
  global: GlobalContent;

  pages: {
    home: HomePageContent;
    ["404"]: {
      heading: string;
      description: string;
    };
  };
  footer: {
    copyright: string;
    links: { href: string; text: string; icon: () => JSX.Element }[];
  };
};

export const content: Content = {
  global: global,

  pages: {
    home: home,
    ["404"]: {
      heading: "404 - Page Not Found",
      description: "Don't know what a 404 is? Here is some knowledge.",
    },
  },
  footer: {
    copyright: "All rights reserved.",
    links: [
      {
        href: "https://discord.gg/5XfdtzHrjH",
        text: "Discord",
        icon: DiscordIcon,
      },
      {
        href: "https://www.linkedin.com/company/bloomington-normal-developers",
        text: "LinkedIn",
        icon: LinkedInIcon,
      },
      {
        href: "https://www.meetup.com/blonodev",
        text: "Meetup",
        icon: MeetupIcon,
      },
    ],
  },
};

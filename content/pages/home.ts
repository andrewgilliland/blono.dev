import { DeveloperType } from "@/types";

import { BadgeTheme } from "@/components/Badge";

export type AboutSectionType = {
  heading: string;
  description: string;
  developerCards: {
    developer: DeveloperType;
    color: BadgeTheme;
  }[];
};

export type ContactSectionType = {
  heading: string;
  subHeading: string;
  description: string;
};

export type HomePageContent = {
  about: AboutSectionType;
  contact: ContactSectionType;
};

export const home: HomePageContent = {
  about: {
    heading: "About Us",
    description:
      "Join us for the quirkiest software developer meetup in Bloomington-Normal, Illinois, where code and coffee flow in equal measure! Whether you're a Pythonista, a Java junkie, or just someone who thinks \"Hello World\" is a great conversation starter, you'll fit right in. Come for the tech talks, stay for the inevitable debate on tabs vs. spaces – and maybe even win a prize for the best debugging horror story!",
    developerCards: [
      {
        developer: {
          image: {
            src: "/andre-1.png",
            alt: "André Ellis Jr.",
          },
          role: "Front End",
          skills: ["React", "JavaScript"],
          name: "André Ellis Jr.",
          bio: 'André is a professional hug enthusiast, known for his patented "bear hug with a dash of awkwardness" technique. When he\'s not busy spreading joy with his arms, he\'s probably Googling "how to hug without crushing people."',
        },
        color: "blue",
      },
      {
        developer: {
          image: {
            src: "/andy-2.jpg",
            alt: "Andrew Gilliland",
          },
          role: "Mobile",
          skills: ["React Native", "JavaScript"],
          name: "Andrew Gilliland",
          bio: "Andrew is so into fitness and nutrition, he measures his protein intake more precisely than his relationships. If you ask him about carbs, he’ll give you a lecture that’ll make you rethink every slice of pizza you've ever eaten.",
        },
        color: "purple",
      },
      {
        developer: {
          image: {
            src: "/jake-1.jpeg",
            alt: "Jake Barbush",
          },
          role: "Back End",
          skills: ["Node.js", "JavaScript"],
          name: "Jake Barbush",
          bio: "Jake is a connoisseur of dad jokes, with a collection so vast, even Google asks him for punchlines. His sense of humor is like a pair of socks—corny, but comforting.",
        },
        color: "cyan",
      },
    ],
  },

  contact: {
    heading: "Contact Us",
    subHeading: "Get in touch!",
    description:
      "We'd love to hear from you! Send us a message on our LinkedIn page or join the conversation on our Discord!",
  },
};

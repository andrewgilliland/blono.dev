import { FC } from "react";
import DeveloperCard from "./DeveloperCard";
import { HEADER_HEIGHT } from "./Layout";
import { BadgeTheme } from "./Badge";

type AboutSectionProps = {};

const AboutSection: FC<AboutSectionProps> = () => {
  const developerCards = [
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
  ];

  return (
    <section
      id="about"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="relative mt-24 py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-heading-secondary">About Us</h2>
          <p className="text-copy md:w-2/3 mt-4">
            Join us for the quirkiest software developer meetup in
            Bloomington-Normal, Illinois, where code and coffee flow in equal
            measure! Whether you&apos;re a Pythonista, a Java junkie, or just
            someone who thinks &quot;Hello World&quot; is a great conversation
            starter, you&apos;ll fit right in. Come for the tech talks, stay for
            the inevitable debate on tabs vs. spaces – and maybe even win a
            prize for the best debugging horror story!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {developerCards.map(({ developer, color }, index) => (
            <DeveloperCard
              key={index}
              developer={developer}
              color={color as BadgeTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

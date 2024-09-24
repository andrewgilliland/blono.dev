import { FC } from 'react';
import { AboutContent } from '../../content';
import DeveloperCard from './DeveloperCard';
import { HEADER_HEIGHT } from './Layout';

type AboutSectionProps = {
  content: AboutContent;
};

const AboutSection: FC<AboutSectionProps> = ({ content }) => {
  return (
    <section
      id="about"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="bg-gray-100 mt-24 py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="flex font-bold font-brand text-purple-600 text-4xl">
            {content.heading}
          </h2>
          <p className="font-brand font-semibold text-base text-gray-800 w-2/3 mt-4">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {content.developerCards.map(({ developer, color }, index) => (
            <DeveloperCard key={index} developer={developer} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { FC } from 'react';
import { AboutSectionType } from '../../content';
import DeveloperCard from './DeveloperCard';
import { HEADER_HEIGHT } from './Layout';

type AboutSectionProps = {
  content: AboutSectionType;
};

const AboutSection: FC<AboutSectionProps> = ({ content }) => {
  return (
    <section
      id="about"
      style={{ paddingTop: HEADER_HEIGHT + 24 }}
      className="bg-purp mt-24 py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-heading-secondary">{content.heading}</h2>
          <p className="text-copy md:w-2/3 mt-4">{content.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {content.developerCards.map(({ developer, color }, index) => (
            <DeveloperCard key={index} developer={developer} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

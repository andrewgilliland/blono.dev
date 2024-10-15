import { FC } from 'react';
import HeroGrid from './HeroGrid';
import { HeroSectionType } from '../../content';

type HeroSectionProps = {
  hero: HeroSectionType;
};

const HeroSection: FC<HeroSectionProps> = ({ hero }) => {
  return (
    <section id="hero" className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row mt-20 gap-12 md:gap-20">
        <h1 className="font-bold font-brand text-blue-600 text-4xl w-1/2">
          {hero.heading}
        </h1>

        <p className="font-brand font-semibold text-base text-gray-800 w-full md:w-1/2">
          {hero.tagline}
        </p>
      </div>
      <HeroGrid contentItems={hero.heroGridContentItems} />
    </section>
  );
};

export default HeroSection;

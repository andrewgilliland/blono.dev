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
        <h1
          className="font-bold font-brand text-blue-600 text-4xl w-1/2"
          style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)' }}
        >
          {hero.heading}
        </h1>
        <div className="flex relative w-full md:w-1/2">
          <div className="absolute top-2 left-2 border h-full w-full" />
          <p className="font-brand font-semibold text-base text-gray-800 border p-2 ">
            {hero.tagline}
          </p>
        </div>
      </div>
      <HeroGrid contentItems={hero.heroGridContentItems} />
    </section>
  );
};

export default HeroSection;

import { FC } from 'react';
import HeroGrid from './HeroGrid';
import { HeroSectionType } from '../../content';

type HeroSectionProps = {
  hero: HeroSectionType;
};

const HeroSection: FC<HeroSectionProps> = ({ hero }) => (
  <section id="hero" className="max-w-5xl mx-auto">
    <div className="flex flex-col md:flex-row mt-20 gap-12 md:gap-20">
      <h1 className="text-heading-primary w-1/2">{hero.heading}</h1>
      <div className="group flex relative w-full md:w-1/2">
        {/* <div className="absolute top-2 left-2 border h-full w-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-1000" /> */}
        {/* <div className="absolute -top-2 -left-2 border h-full w-full group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" /> */}
        <p className="font-semibold text-2xl text-white p-2">{hero.tagline}</p>
      </div>
    </div>
    <HeroGrid contentItems={hero.heroGridContentItems} />
  </section>
);

export default HeroSection;

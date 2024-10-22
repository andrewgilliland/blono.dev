import { FC } from 'react';
import HeroGrid from './HeroGrid';
import Image from 'next/image';
import { HeroSectionType } from '../../content/pages/home';

type HeroSectionProps = {
  hero: HeroSectionType;
};

const HeroSection: FC<HeroSectionProps> = ({ hero }) => (
  <section id="hero" className="max-w-5xl mx-auto">
    <div className="flex justify-center flex-col md:flex-row mt-20 gap-12 md:gap-20">
      <div className="relative">
        <svg
          className="absolute fill-purp-dark -translate-x-24 -translate-y-24 opacity-20"
          width="200"
          height="200"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute fill-purp-dark translate-x-40 translate-y-20 opacity-20"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <Image
          className="relative"
          src={hero.logo.src}
          width={190}
          height={100}
          alt={hero.logo.alt}
          priority
        />
      </div>
      <div className="group flex relative w-full md:w-1/2">
        <p className="font-semibold text-2xl text-white p-2">{hero.tagline}</p>
      </div>
    </div>
    <HeroGrid contentItems={hero.heroGridContentItems} />
  </section>
);

export default HeroSection;

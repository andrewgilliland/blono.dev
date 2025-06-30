import { FC } from 'react';
import Image from 'next/image';
import Circle from '../../icons/Circle';
import HeroGrid from './HeroGrid';
import Container from '@/components/layout/Container';

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section id="hero">
      <Container>
        <div className="mt-20 flex flex-col justify-center gap-12 md:flex-row md:gap-20">
          <div className="relative">
            <Circle
              size={434}
              className="absolute -translate-x-[325px] -translate-y-[325px] fill-purp-dark opacity-20"
            />
            <Circle
              size={100}
              className="absolute -translate-y-12 translate-x-32 fill-purp-dark opacity-20"
            />
            <Circle
              size={100}
              className="absolute translate-x-36 translate-y-20 fill-purp-dark opacity-20"
            />

            <Image
              className="relative"
              src={`/bn-logo-1.svg`}
              width={190}
              height={100}
              alt={'Bloomington-Normal Developers Logo'}
              priority
            />
          </div>
          <div className="group relative flex w-full md:w-1/2">
            <Circle
              size={250}
              className="absolute -translate-x-5 fill-theme-indigo opacity-20 md:-translate-y-20"
            />
            <p className="relative text-2xl font-semibold text-white md:mt-10">
              Bloomington-Normal&apos;s group for professional software
              developers and designers.
            </p>
          </div>
        </div>
        <HeroGrid />
      </Container>
    </section>
  );
};

export default HeroSection;

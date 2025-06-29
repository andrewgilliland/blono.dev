import { FC } from "react";
import HeroGrid from "./HeroGrid";
import Image from "next/image";
import Circle from "./icons/Circle";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="max-w-5xl mx-auto">
      <div className="flex justify-center flex-col md:flex-row mt-20 gap-12 md:gap-20">
        <div className="relative">
          <Circle
            size={434}
            className="absolute fill-purp-dark -translate-x-[325px] -translate-y-[325px] opacity-20"
          />
          <Circle
            size={100}
            className="absolute fill-purp-dark translate-x-32 -translate-y-12 opacity-20"
          />
          <Circle
            size={100}
            className="absolute fill-purp-dark translate-x-36 translate-y-20 opacity-20"
          />

          <Image
            className="relative"
            src={`/bn-logo-1.svg`}
            width={190}
            height={100}
            alt={"Bloomington-Normal Developers Logo"}
            priority
          />
        </div>
        <div className="relative group flex w-full md:w-1/2">
          <Circle
            size={250}
            className="absolute fill-theme-indigo -translate-x-5 md:-translate-y-20 opacity-20"
          />
          <p className="relative font-semibold text-2xl text-white md:mt-10">
            Bloomington-Normal&apos;s group for professional software developers
            and designers.
          </p>
        </div>
      </div>
      <HeroGrid />
    </section>
  );
};

export default HeroSection;

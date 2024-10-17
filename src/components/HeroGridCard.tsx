import { ImageProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

export type HeroGridCardProps = {
  color: string;
  span: string;
  image: ImageProps;
  heading: string;
  tagline: string;
};

const HeroGridCard: FC<HeroGridCardProps> = ({
  color,
  span,
  image: { src, alt },
  heading,
  tagline,
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between col-span-1 ${span}`}
    >
      <div className="absolute top-2 left-2 w-full h-full border group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-1000" />
      <div className="absolute -top-2 -left-2 w-full h-full border group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
      <div className={`relative px-8 py-10 h-full ${color}`}>
        <div className="relative h-40 w-40 bg-cyan-100">
          <div className="absolute border border-pink-300 w-full h-full translate-x-1 translate-y-1" />
          <Image
            className="relative object-cover h-full w-full"
            src={src}
            width={160}
            height={160}
            alt={alt}
            priority
          />
        </div>
        <div className="mt-12">
          <p className="text-copy-white">{tagline}</p>
          <h3 className="font-brand font-bold text-white text-2xl mt-4">
            {heading}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroGridCard;

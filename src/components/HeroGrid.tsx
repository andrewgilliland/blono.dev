import { FC } from 'react';
import HeroGridCard, { HeroGridCardProps } from './HeroGridCard';

type HeroGridProps = {
  contentItems: HeroGridCardProps[];
};

const HeroGrid: FC<HeroGridProps> = ({ contentItems }) => {
  return (
    <div className="grid grid-cols-6 gap-2 mt-20">
      {contentItems.map((contentItem, index) => (
        <HeroGridCard key={index} {...contentItem} />
      ))}
    </div>
  );
};

export default HeroGrid;

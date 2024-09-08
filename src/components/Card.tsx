import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-200 outline outline-1 outline-gray-400 hover:outline-dashed hover:outline-2 hover:outline-purple-700 transition-all duration-300">
      {children}
      <div className="px-6 py-10">
        <h3 className="text-blue-700 text-2xl font-bold font-brand">
          Developer Happy Hour
        </h3>
        <div>Keg Grove Brewery</div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          doloribus iure sunt voluptatum dolores necessitatibus sit atque saepe
          tempora. Officia, culpa inventore.
        </div>
      </div>
    </div>
  );
};

export default Card;

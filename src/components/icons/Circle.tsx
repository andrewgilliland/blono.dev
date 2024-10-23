import { FC } from 'react';

type CircleProps = {
  size: number;
  className: string;
};

const Circle: FC<CircleProps> = ({ size, className }) => {
  return (
    <svg
      className="absolute fill-purp-dark -translate-x-24 -translate-y-24 opacity-20"
      width="200"
      height="200"
    >
      <circle cx="100" cy="100" r="100" />
    </svg>
  );
};

export default Circle;

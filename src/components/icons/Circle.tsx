import { FC } from 'react';

type CircleProps = {
  size: number;
  className: string;
};

const Circle: FC<CircleProps> = ({ size, className }) => {
  return (
    <svg className={className} width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} />
    </svg>
  );
};

export default Circle;

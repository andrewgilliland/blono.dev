import { FC } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Badge from '../ui/Badge';

type LocationBadgeProps = {
  location: string;
};

const LocationBadge: FC<LocationBadgeProps> = ({ location }) => {
  return (
    <Badge theme="gray">
      <MapPinIcon className="mr-1 inline-block h-4 w-4" />
      <p>{location}</p>
    </Badge>
  );
};

export default LocationBadge;

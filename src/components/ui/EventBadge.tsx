import Badge from '@/components/ui/Badge';
import { CalendarIcon } from '@heroicons/react/24/solid';

type DateTimeBadgeProps = {
  startTime: string;
  endTime: string;
};

const DateTimeBadge = ({ startTime, endTime }: DateTimeBadgeProps) => {
  const dateObj = new Date(startTime);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'short' });

  const formatTimeString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Chicago', // Force Central Time
    });
  };

  return (
    <Badge theme="purple">
      <CalendarIcon className="mr-1 inline-block h-4 w-4" />
      <p>
        {dayOfWeek}, {month} {day} · {formatTimeString(startTime)} -{' '}
        {formatTimeString(endTime)} CST
      </p>
    </Badge>
  );
};

export default DateTimeBadge;

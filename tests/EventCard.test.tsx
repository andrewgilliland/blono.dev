import { render, screen } from '@testing-library/react';
import EventCard from '../src/components/sections/EventCard';

const mockEvent = {
  id: '1',
  title: 'Developer Happy Hour',
  startTime: '2025-09-09T17:00:00-05:00',
  endTime: '2025-09-09T19:00:00-05:00',
  details: 'Join us for drinks and tech talk!',
  location: 'Keg Grove Brewing Company',
  image: { src: '/keg-grove-summer-1.webp', alt: 'Keg Grove Brewing Company' },
  address: '712 E Empire Street, Bloomington, IL',
};

describe('EventCard', () => {
  it('renders event details', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText(/Developer Happy Hour/i)).toBeTruthy();
    expect(screen.getByText(/Join us for drinks and tech talk!/i)).toBeTruthy();
    expect(screen.getByText(/Keg Grove Brewing Company/i)).toBeTruthy();
  });
});

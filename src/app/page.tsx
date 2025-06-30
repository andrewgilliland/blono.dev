import AboutSection from '@/components/sections/AboutSection';
import UpcomingEventsSection from '@/components/sections/UpcomingEventsSection';
import { getAllEvents } from '@/lib/actions/events';
import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingEventsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

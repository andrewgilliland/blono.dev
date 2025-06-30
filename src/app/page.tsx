import { EventType } from '@/types';
import AboutSection from '@/components/sections/AboutSection';
import UpcomingEventsSection from '@/components/sections/UpcomingEventsSection';
import { getAllEvents } from '@/lib/actions/events';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const events = getAllEvents();
  return (
    <Layout events={events}>
      <HeroSection />
      <UpcomingEventsSection events={events} />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

import { EventType } from "@/types";
import AboutSection from "@/components/sections/AboutSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import { getAllEvents } from "@/lib/actions/events";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

type HomePageProps = {
  events: EventType[];
};

export async function getStaticProps() {
  const events = getAllEvents();

  return { props: { events } };
}

const HomePage = ({ events }: HomePageProps) => {
  return (
    <Layout events={events}>
      <HeroSection />
      <UpcomingEventsSection events={events} />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;

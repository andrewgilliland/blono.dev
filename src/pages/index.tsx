import Layout from "@/components/Layout";
import { EventType } from "@/types";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ContactSection from "@/components/ContactSection";
import { getAllEvents } from "@/lib/actions/events";
// import EventSection from "@/components/EventSection";

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

import Layout from "@/components/Layout";
import { Event } from "@/types";
import { content } from "../../content";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// import EventSection from "@/components/EventSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ContactSection from "@/components/ContactSection";
import { getAllEvents } from "@/lib/actions/events";

type HomePageProps = {
  events: Event[];
};

export async function getStaticProps() {
  const events = getAllEvents();

  return { props: { events } };
}

const HomePage = ({ events }: HomePageProps) => {
  const { hero, about } = content.pages.home;

  return (
    <Layout events={events} content={content}>
      <HeroSection hero={hero} />
      <UpcomingEventsSection events={events} />
      <AboutSection content={about} />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;

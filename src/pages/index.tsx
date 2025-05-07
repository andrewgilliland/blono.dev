import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import { Event } from "@/types";
import { content } from "../../content";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import ContactSection from "@/components/ContactSection";

type HomePageProps = {
  events: Event[];
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "events.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const events: Event[] = JSON.parse(jsonData);

  return { props: { events } };
}

const HomePage = ({ events }: HomePageProps) => {
  const { hero, about } = content.pages.home;

  return (
    <Layout content={content}>
      <HeroSection hero={hero} />
      <EventSection events={events} />
      <AboutSection content={about} />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;

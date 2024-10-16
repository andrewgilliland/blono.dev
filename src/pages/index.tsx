import Layout from '@/components/Layout';
import { Event } from '@/types';
import { getDataFromJSONGithubRepo } from '@/lib/actions/github';
import { content } from '../../content';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';
import ContactSection from '@/components/ContactSection';

type HomePageProps = {
  events: Event[];
};

export async function getStaticProps() {
  const events = await getDataFromJSONGithubRepo({
    org: 'Bloomington-Normal-Developers',
    repo: 'events',
    file: 'index',
  });

  return { props: { events } };
}

const HomePage = ({ events }: HomePageProps) => {
  const { hero, about, contact } = content.pages.home;

  return (
    <Layout content={content}>
      <HeroSection hero={hero} />
      <EventSection events={events} />
      <AboutSection content={about} />
      <ContactSection contact={contact} />
    </Layout>
  );
};

export default HomePage;

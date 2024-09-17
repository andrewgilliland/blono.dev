import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import { getContent, Content } from '../lib/data/content';
import SEO from '@/components/SEO';
import { Event } from '@/types';
import EventCard from '@/components/EventCard';
import { getDataFromJSONGithubRepo } from '@/lib/actions/github';
import HeroGrid from '@/components/HeroGrid';

type HomePageProps = {
  content: Content;
  events: Event[];
};

export async function getStaticProps() {
  const content = getContent();

  const events = await getDataFromJSONGithubRepo({
    org: 'Bloomington-Normal-Developers',
    repo: 'events',
    file: 'index',
  });

  return { props: { content, events } };
}

const HomePage = ({ content, events }: HomePageProps) => {
  return (
    <Layout>
      <SEO title={content.hero.heading} description={content.hero.tagline} />
      <Header />
      <main className="max-w-5xl mx-auto">
        <section>
          <div className="flex mt-20 gap-20">
            <h1 className="font-bold font-brand text-blue-600 text-4xl w-1/2">
              {content.hero.heading}
            </h1>

            <p className="font-brand font-semibold text-base w-1/2">
              {content.hero.tagline}
            </p>
          </div>
          <HeroGrid contentItems={content.heroGridContentItems} />
        </section>

        <section className="mt-24">
          <h2 className="font-bold font-brand text-purple-600 text-4xl mb-12">
            Upcoming Events
          </h2>
          <ul className="">
            {events.map((event, index) => (
              <div key={index} className="mb-8">
                <EventCard event={event} />
              </div>
            ))}
          </ul>
        </section>

        <section className="mt-24">
          <h2 className="flex justify-end font-bold font-brand text-purple-600 text-4xl">
            {content.about.heading}
          </h2>
          <p className="font-semibold text-base w-2/3">
            {content.about.description}
          </p>
        </section>

        <section className="my-24"></section>
      </main>
      <Footer copyrightText={content.footerText} />
      {/* <GradientBackground className="fixed top-20 opacity-40 dark:opacity-60" /> */}
      {/* <GradientBackground className="absolute bottom-0 opacity-20 dark:opacity-10" /> */}
    </Layout>
  );
};

export default HomePage;

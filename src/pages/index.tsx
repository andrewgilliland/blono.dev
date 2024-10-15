import Layout, { HEADER_HEIGHT } from '@/components/Layout';
import { Event } from '@/types';
import { getDataFromJSONGithubRepo } from '@/lib/actions/github';
import ButtonLink from '@/components/ButtonLink';
import { content } from '../../content';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventSection from '@/components/EventSection';

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
      <div>
        <HeroSection hero={hero} />
        <EventSection events={events} />
        <AboutSection content={about} />

        <section
          id="contact"
          style={{ paddingTop: HEADER_HEIGHT + 24 }}
          className="max-w-5xl mx-auto my-24"
        >
          <div className="flex bg-white border">
            <div className="w-1/2 px-16 py-24">
              <p className="font-semibold text-base text-violet-600">
                {contact.subHeading}
              </p>
              <h2
                className="font-bold font-brand text-sky-500 text-4xl mt-4"
                style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)' }}
              >
                {contact.heading}
              </h2>
              <div className="font-semibold text-base text-gray-900 mt-8">
                {contact.description}
              </div>
              <div className="flex gap-6 mt-8">
                <ButtonLink
                  href="https://www.linkedin.com/company/bloomington-normal-developers"
                  openInNewTab
                >
                  Message Us
                </ButtonLink>
                <ButtonLink href="https://discord.gg/5XfdtzHrjH" openInNewTab>
                  Join Discord
                </ButtonLink>
              </div>
            </div>
            <div className="bg-purple-600 w-1/2"></div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;

import Layout, { HEADER_HEIGHT } from '@/components/Layout';
import { Event } from '@/types';
import EventCard from '@/components/EventCard';
import { getDataFromJSONGithubRepo } from '@/lib/actions/github';
import HeroGrid from '@/components/HeroGrid';
import ButtonLink from '@/components/ButtonLink';
import { content } from '../../content';
import { useState } from 'react';

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
  const [numberOfEventsToShow, setNumberOfEventsToShow] = useState(3);
  const { hero, about, contact } = content.pages.home;
  const now = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.date) > now);
  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const filteredPastEvents = pastEvents.slice(0, numberOfEventsToShow);

  return (
    <Layout content={content}>
      <div>
        <section id="hero" className="max-w-5xl mx-auto">
          <div className="flex mt-20 gap-20">
            <h1 className="font-bold font-brand text-blue-600 text-4xl w-1/2">
              {hero.heading}
            </h1>

            <p className="font-brand font-semibold text-base w-1/2">
              {hero.tagline}
            </p>
          </div>
          <HeroGrid contentItems={hero.heroGridContentItems} />
        </section>

        <section
          id="events"
          style={{ paddingTop: HEADER_HEIGHT + 24 }}
          className="max-w-5xl mx-auto mt-24"
        >
          <div>
            <h2 className="font-bold font-brand text-purple-600 text-4xl mb-12">
              Upcoming Events
            </h2>
            <div>
              {upcomingEvents.map((event, index) => (
                <div key={index} className="mb-8">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold font-brand text-purple-600 text-4xl mb-12">
              Past Events
            </h2>
            <div>
              {filteredPastEvents.map((event, index) => (
                <div key={index} className="mb-8">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {numberOfEventsToShow < pastEvents.length && (
                <button
                  onClick={() =>
                    setNumberOfEventsToShow(numberOfEventsToShow + 5)
                  }
                  className="border border-black px-4 py-2 hover:bg-purple-600 hover:text-white transition"
                >
                  Show More
                </button>
              )}
              {numberOfEventsToShow > 3 && (
                <button
                  onClick={() =>
                    setNumberOfEventsToShow(numberOfEventsToShow - 5)
                  }
                  className="border border-black px-4 py-2"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        </section>

        <section
          id="about"
          style={{ paddingTop: HEADER_HEIGHT + 24 }}
          className="bg-purple-600 mt-24 py-24"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="flex justify-end font-bold font-brand text-white text-4xl">
              {about.heading}
            </h2>
            <p className="font-semibold text-base text-white w-2/3">
              {about.description}
            </p>
          </div>
          <div></div>
        </section>

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
              <h2 className="font-bold font-brand text-sky-500 text-4xl mt-4">
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

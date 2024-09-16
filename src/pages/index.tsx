import Link from 'next/link';
import { getPosts } from '@/lib/mdx-utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Layout, { GradientBackground } from '@/components/Layout';
import { getGlobalData } from '../lib/global-data';
import SEO from '@/components/SEO';
import { Event, GlobalData, Post } from '@/types';
import EventCard from '@/components/EventCard';
import { getDataFromJSONGithubRepo } from '@/lib/actions/github';
import HeroGrid from '@/components/HeroGrid';

type HomePageProps = {
  posts: Post[];
  globalData: GlobalData;
  events: Event[];
};

export async function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  const events = await getDataFromJSONGithubRepo({
    org: 'Bloomington-Normal-Developers',
    repo: 'events',
    file: 'index',
  });

  return { props: { posts, globalData, events } };
}

const HomePage = ({ posts, globalData, events }: HomePageProps) => {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="max- max-w-5xl mx-auto">
        <section>
          <div className="flex mt-20 gap-20">
            <h1 className="font-bold font-brand text-blue-600 text-4xl  w-1/2">
              {globalData.blogTitle}
            </h1>

            <p className="font-brand font-semibold text-base w-1/2">
              {globalData.heroTagline}
            </p>
          </div>

          {/* Grid goes here */}

          {/* <div className="grid grid-cols-6 gap-2 border h-96 mt-20">
            <div className="bg-cyan-500 col-span-3 p-6"></div>
            <div className="bg-blue-600 col-span-3"></div>
            <div className="bg-sky-500 col-span-2"></div>
            <div className="bg-purple-500 col-span-2"></div>
            <div className="bg-indigo-500 col-span-2"></div>
          </div> */}

          <HeroGrid />
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
      </main>
      <Footer copyrightText={globalData.footerText} />
      {/* <GradientBackground className="fixed top-20 opacity-40 dark:opacity-60" /> */}
      {/* <GradientBackground className="absolute bottom-0 opacity-20 dark:opacity-10" /> */}
    </Layout>
  );
};

export default HomePage;

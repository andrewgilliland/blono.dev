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
      <main className="border border-red-500 max-w-4xl mx-auto">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {/* {globalData.blogTitle} */}
        </h1>

        {/* Grid goes here */}

        <section>
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
      <GradientBackground className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
};

export default HomePage;

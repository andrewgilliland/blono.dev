import Link from 'next/link';
import { getPosts } from '@/utils/mdx-utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Layout, { GradientBackground } from '@/components/Layout';
import ArrowIcon from '@/components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '@/components/SEO';
import { GlobalData, Post } from '@/types';
import EventCard from '@/components/EventCard';

type HomePageProps = {
  posts: Post[];
  globalData: GlobalData;
};

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

const HomePage = ({ posts, globalData }: HomePageProps) => {
  // ! Call events from GitHub API
  const events = [
    {
      title: 'Developer Happy Hour',
      location: 'Keg Grove Brewery',
      startTime: '5:00 PM',
      endTime: '7:00 PM',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt doloribus iure sunt voluptatum dolores necessitatibus sit atque saepe tempora. Officia, culpa inventore.',
    },
  ];

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {/* {globalData.blogTitle} */}
        </h1>

        {/* Grid goes here */}

        <ul className="w-3/4 mx-auto">
          <div className="mb-12">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
};

export default HomePage;

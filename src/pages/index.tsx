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
          {globalData.blogTitle}
        </h1>
        <ul className="w-1/2 mx-auto">
          <div className="mb-12">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4"
              >
                {post.data.date && (
                  <p className="mb-3 font-bold uppercase opacity-60">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
};

export default HomePage;

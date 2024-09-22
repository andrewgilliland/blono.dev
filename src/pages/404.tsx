import Layout from '@/components/Layout';
import { getContent } from '@/lib/data/content';
import { Content } from '@/types';
import { FC } from 'react';

type FourOhFourPageProps = {
  content: Content;
};

export async function getStaticProps() {
  const content = getContent();

  return { props: { content } };
}

const FourOhFourPage: FC<FourOhFourPageProps> = ({ content }) => {
  return (
    <Layout content={content}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h2>404 - Page Not Found</h2>
          <p className="mt-8">
            Don&apos;t know what a 404 is? Here is some knowledge.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFourPage;

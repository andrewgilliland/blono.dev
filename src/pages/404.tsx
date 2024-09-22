import { FC } from 'react';
import Layout from '@/components/Layout';
import { Content } from '@/types';
import { content } from '../../content';

type FourOhFourPageProps = {
  content: Content;
};

const FourOhFourPage: FC<FourOhFourPageProps> = () => {
  return (
    <Layout content={content}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-purple-600 text-3xl">
            {content.pages[404].heading}
          </h2>
          <p className="mt-8">{content.pages[404].description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFourPage;

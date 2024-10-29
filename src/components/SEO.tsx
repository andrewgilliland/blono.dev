import Head from 'next/head';
import { FC } from 'react';

type SEOProps = {
  title: string;
  description: string;
};

const SEO: FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
};

export default SEO;

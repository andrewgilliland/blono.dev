import { FC, ReactNode } from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { Content } from '../../content';

type LayoutProps = {
  content: Content;
  children: ReactNode;
};

export const HEADER_HEIGHT = 106;

const Layout: FC<LayoutProps> = ({ content, children }) => {
  return (
    <div className="flex flex-col bg-gray-100">
      <SEO
        title={content.pages.home.hero.heading}
        description={content.pages.home.hero.tagline}
      />
      <Header content={content} />
      <main className="min-h-screen px-8" style={{ marginTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer content={content} />
    </div>
  );
};

export default Layout;

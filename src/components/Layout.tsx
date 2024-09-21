import { FC, ReactNode } from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { Content } from '@/lib/data/content';

type LayoutProps = {
  content: Content;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ content, children }) => {
  const HEADER_HEIGHT = 106;

  return (
    <div className="flex flex-col">
      <SEO title={content.hero.heading} description={content.hero.tagline} />
      <Header />
      <main className="min-h-screen" style={{ marginTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer copyrightText={content.footerText} />
    </div>
  );
};

export default Layout;

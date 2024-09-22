import { FC, ReactNode } from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { ContentType } from '../../content';

type LayoutProps = {
  content: ContentType;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ content, children }) => {
  const HEADER_HEIGHT = 106;

  return (
    <div className="flex flex-col">
      <SEO
        title={content.pages.home.hero.heading}
        description={content.pages.home.hero.tagline}
      />
      <Header />
      <main className="min-h-screen" style={{ marginTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer copyrightText={content.footer.copyright} />
    </div>
  );
};

export default Layout;

import { FC, ReactNode } from 'react';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import { HEADER_HEIGHT } from '@/lib/constants';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-dark">
      <SEO
        title={'Bloomington-Normal Developers'}
        description={
          "Bloomington-Normal's group for professional software developers and designers."
        }
      />
      <Header />
      <main className="min-h-screen px-8" style={{ marginTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

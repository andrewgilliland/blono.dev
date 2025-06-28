import { FC, ReactNode } from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "../../content";
import { Event } from "@/types";

type LayoutProps = {
  events: Event[];
  content: Content;
  children: ReactNode;
};

export const HEADER_HEIGHT = 80;

const Layout: FC<LayoutProps> = ({ events, content, children }) => {
  return (
    <div className="flex flex-col bg-dark">
      <SEO
        title={content.pages.home.hero.heading}
        description={content.pages.home.hero.tagline}
      />
      <Header events={events} content={content} />
      <main className="min-h-screen px-8" style={{ marginTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer content={content} />
    </div>
  );
};

export default Layout;

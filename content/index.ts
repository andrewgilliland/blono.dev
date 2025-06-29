import { home, HomePageContent } from "./pages/home";
import { GlobalContent } from "./global";

export type Content = {
  pages: {
    home: HomePageContent;
  };
};

export const content: Content = {
  pages: {
    home: home,
  },
};

export type Post = {
  filePath: string;
  data: {
    title: string;
    description: string;
    date: string;
  };
};

export type GlobalData = {
  name: string;
  blogTitle: string;
  footerText: string;
};

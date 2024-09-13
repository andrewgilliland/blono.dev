export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Bloomington-Normal Developers';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blomington-Normal Developers';
  const heroTagline =
    "Bloomington-Normal's group for professional web or application designers or developers and want to network with others in the industry, learn about new and up-and-coming technologies, and anyone who wants to learn about web or application development. All skill levels welcome.";
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    heroTagline,
    blogTitle,
    footerText,
  };
};

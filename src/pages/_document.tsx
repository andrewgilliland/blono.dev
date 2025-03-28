import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

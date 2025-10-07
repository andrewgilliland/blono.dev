import Layout from '@/components/layout/Layout';

const FourOhFourPage = () => {
  return (
    <Layout>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-purple-600">
            404 - Page Not Found
          </h2>
          <p className="mt-8 text-base font-semibold text-gray-100">
            Don&apos;t know what a 404 is? Here is some knowledge.
          </p>
          <a
            className="group mt-2 flex flex-col items-center text-base font-semibold text-blue-600"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"
          >
            <div>404 Not Found - HTTP | MDN</div>
            <div className="translate-y-3 text-3xl opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              ☝️
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFourPage;

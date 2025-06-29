import { FC } from "react";
import Layout from "@/components/Layout";

type FourOhFourPageProps = {};

const FourOhFourPage: FC<FourOhFourPageProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-purple-600 text-3xl">
            404 - Page Not Found
          </h2>
          <p className="font-semibold text-gray-100 text-base mt-8">
            Don&apos;t know what a 404 is? Here is some knowledge.
          </p>
          <a
            className="group flex flex-col items-center font-semibold text-blue-600 text-base mt-2"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"
          >
            <div>404 Not Found - HTTP | MDN</div>
            <div className="text-3xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
              ☝️
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFourPage;

import { FC } from "react";
import Layout from "@/components/Layout";
import { content } from "../../content";

type FourOhFourPageProps = {};

const FourOhFourPage: FC<FourOhFourPageProps> = () => {
  return (
    <Layout content={content}>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-purple-600 text-3xl">
            {content.pages[404].heading}
          </h2>
          <p className="font-semibold text-gray-100 text-base mt-8">
            {content.pages[404].description}
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

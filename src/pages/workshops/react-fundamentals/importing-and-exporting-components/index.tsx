import Layout from "@/components/Layout";
import Circle from "@/components/icons/Circle";
import { content } from "../../../../../content";

const LessonPage = () => {
  return (
    <Layout content={content}>
      <section id="hero" className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center flex-col md:flex-row mt-20 gap-12 md:gap-20">
          <div className="relative">
            <Circle
              size={434}
              className="absolute fill-purp-dark -translate-x-[325px] -translate-y-[325px] opacity-20"
            />
            <Circle
              size={100}
              className="absolute fill-purp-dark translate-x-32 -translate-y-12 opacity-20"
            />
            <Circle
              size={100}
              className="absolute fill-purp-dark translate-x-36 translate-y-20 opacity-20"
            />
            <h1 className="relative text-green-500 font-bold text-4xl">
              Creating a React Component
            </h1>
          </div>
          <div className="relative group flex w-full md:w-1/2">
            <Circle
              size={250}
              className="absolute fill-theme-indigo -translate-x-5 md:-translate-y-20 opacity-20"
            />
            <p className="relative font-semibold text-2xl text-white md:mt-10">
              Get some hands on programming knowledge with Bloomington-Normal
              Developer&apos;s workshops.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LessonPage;

import Layout from "@/components/Layout";
import Circle from "@/components/icons/Circle";
import { content } from "../../../../content";
import LessonCard from "@/components/LessonCard";

const WorkshopPage = () => {
  const lessons = [
    {
      title: "Creating a React Component",
      slug: "creating-a-react-component",
      description: "Learn how to create a React component.",
      number: 1,
    },
    {
      title: "Importing and Exporting Components",
      slug: "importing-and-exporting-components",
      description: "Learn how to import and export components in React.",
      number: 2,
    },
    {
      title: "What is JSX?",
      slug: "what-is-jsx",
      description: "Learn what JSX is and how to use it in React.",
      number: 3,
    },
    {
      title: "JavaScript in JSX",
      slug: "javascript-in-jsx",
      description: "Learn how to use JavaScript in JSX.",
      number: 4,
    },
  ];

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
              React Fundamentals
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
      <section id="lessons" className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default WorkshopPage;

// iUSjMh27@p1hzf%w

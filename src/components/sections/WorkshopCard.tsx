import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "../ui/Badge";

const WorkshopCard = () => {
  return (
    <div className="max-w-3xl mt-16 mx-auto">
      <div className="relative px-8 py-10 h-full bg-purp border border-light border-opacity-75 rounded-[10px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="border bg-dark p-2 rounded-[10px]">
            <Image
              className="object-cover h-full w-full"
              src="/react.svg"
              width={100}
              height={100}
              alt="Bloomington-Normal Developers Meetup People"
              priority
            />
          </div>
          <h3 className="font-brand font-bold text-white text-2xl">
            React Fundamentals
          </h3>
        </div>
        <div className="mt-6 flex flex-col gap-4 items-start">
          <Badge theme="gray">10 Lessons</Badge>
          <p className="text-copy">
            Learn the fundamental concepts of React. React is an open source
            JavaScript UI library. This workshop is perfect for beginners with
            React and JavaScript.
          </p>

          <Link
            className="text-green-500 font-semibold"
            href="/workshops/react-fundamentals"
          >
            <Button theme="green" size="md">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

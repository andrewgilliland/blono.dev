import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const WorkshopCard = () => {
  return (
    <div className="max-w-3xl mt-16 mx-auto">
      <div className="relative px-8 py-10 h-full bg-purp border border-light border-opacity-75 rounded-[10px]">
        <div className="flex gap-12">
          <h3 className="font-brand font-bold text-white text-2xl">
            React Fundamentals
          </h3>

          <div className="relative h-24 w-24">
            <div className="absolute bg-purp-light rounded-[10px] w-full h-full translate-x-1 translate-y-1" />
            <Image
              className="relative object-cover overflow-hidden rounded-[10px] h-full w-full"
              src="/bnd-peeps-1.jpg"
              width={100}
              height={100}
              alt="Bloomington-Normal Developers Meetup People"
              priority
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-copy">
            Learn the basics of React with Bloomington-Normal Developers. This
            workshop is perfect for beginners with React.
          </p>

          <Link
            className="text-green-500 font-semibold mt-4"
            href="/workshops/react-fundamentals"
          >
            <Button theme="green" size="md" className="mt-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

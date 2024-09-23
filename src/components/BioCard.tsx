const BioCard = ({}) => {
  return (
    <div className="border border-white">
      <div className="flex justify-center bg-blue-500 py-10">
        <div className="bg-blue-100 h-48 w-48" />
      </div>
      <div className="bg-white p-8">
        <div className="flex gap-3">
          <div className="bg-blue-500 font-semibold text-white text-sm p-1">
            Front End
          </div>
          <div className="bg-gray-200 text-gray-500 text-sm p-1">React</div>
          <div className="bg-gray-200 text-gray-500 text-sm p-1">
            JavaScript
          </div>
        </div>
        <h3 className="font-bold text-blue-700 text-2xl mt-3">
          Andre Ellis Jr.
        </h3>
        <p className="text-base mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem
          fugit nostrum voluptatem odit saepe magnam alias incidunt hic .
        </p>
      </div>
    </div>
  );
};

export default BioCard;

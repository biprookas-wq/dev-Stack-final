import BannerImage from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between container mx-auto p-4">
      <div className="flex flex-col space-y-5">
        <h1 className="text-5xl font-bold ">Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold">Development Stack</span></h1>
        <p>
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className="flex space-x-4 mt-9">
          <button className="w-56 bg-gradient-to-r from-[#FF6B2B] to-[#EC4899] text-white py-3 rounded-xl font-semibold text-base shadow-sm">
            Explore Technologies
          </button>
          <button className="w-56 bg-transparent text-gray-700 py-3 rounded-xl font-normal text-base border border-gray-200 hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <img src={BannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;

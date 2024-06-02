import { Link } from "react-router-dom";

const Slide = ({ image, heading, text }) => {
  return (
    <div
      className="w-full bg-cover h-[100vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
        <div className="text-center">
          <h1 className="text-[#ef8682] text-3xl font-semibold  lg:text-7xl max-w-[700px]">
            {heading}
          </h1>
          <h1 className="text-2xl font-semibold text-white lg:text-3xl max-w-[700px]">
            {text}
          </h1>
          <br />
          <Link
            to={"/"}
            className="btn bg-white text-[#ef8682] hover:bg-[#ef8682] hover:text-white btn_wave    transform  rounded-md"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;

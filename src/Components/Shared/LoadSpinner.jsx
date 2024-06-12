import PropTypes from "prop-types";
import { PacmanLoader } from "react-spinners";

const LoadSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PacmanLoader size={60} color="orange" />
      {/* <ScaleLoader size={100} color="red" /> */}
    </div>
  );
};

LoadSpinner.propTypes = {
  smallHeight: PropTypes.bool,
};

export default LoadSpinner;

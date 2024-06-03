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
      <PacmanLoader size={100} color="#36d7b7" />
      {/* <ScaleLoader size={100} color="red" /> */}
    </div>
  );
};

LoadSpinner.propTypes = {
  smallHeight: PropTypes.bool,
};

export default LoadSpinner;

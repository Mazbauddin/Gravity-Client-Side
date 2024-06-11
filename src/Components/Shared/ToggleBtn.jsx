import PropTypes from "prop-types";

const ToggleBtn = ({ toggleHandler, toggle }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
      >
        <input
          onChange={toggleHandler}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
          checked={toggle}
        />
        <span className="px-4 text-white py-1 rounded-l-md bg-gray-300  peer-checked:bg-yellow-900">
          X
        </span>
        <span className="px-4 text-black py-1 rounded-r-md bg-green-300 peer-checked:bg-gray-300">
          Verified
        </span>
      </label>
    </>
  );
};

ToggleBtn.propTypes = {
  toggleHandler: PropTypes.func,
  toggle: PropTypes.bool,
};
export default ToggleBtn;

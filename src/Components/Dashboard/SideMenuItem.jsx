import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SideMenuItem = ({ menuTitle, linkAddress, icon: Icon }) => {
  return (
    <NavLink
      to={linkAddress}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-900 rounded-lg hover:text-orange-500 ${
          isActive ? "bg-white rounded-lg  text-black" : "text-white"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{menuTitle}</span>
    </NavLink>
  );
};
SideMenuItem.propTypes = {
  menuTitle: PropTypes.string,
  linkAddress: PropTypes.string,
  icon: PropTypes.elementType,
};

export default SideMenuItem;

import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../Hooks/useRole";
import LoadSpinner from "../Components/Shared/LoadSpinner";

const HrRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadSpinner />;
  if (role === "HR") return children;
  return <Navigate to="/dashboard" />;
};

export default HrRoute;

HrRoute.propTypes = {
  children: PropTypes.element,
};

import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../Hooks/useRole";
import LoadSpinner from "../Components/Shared/LoadSpinner";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadSpinner />;
  if (role === "admin") return children;
  return <Navigate to="/dashboard" />;
};
export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.element,
};

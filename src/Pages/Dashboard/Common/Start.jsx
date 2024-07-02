import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const Start = () => {
  const { user } = useAuth();
  return (
    <div className="mt-24">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <h1>Welcome to {user?.displayName}</h1>
    </div>
  );
};

export default Start;

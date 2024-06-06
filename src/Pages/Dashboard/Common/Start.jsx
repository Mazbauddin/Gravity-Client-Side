import useAuth from "../../../Hooks/useAuth";

const Start = () => {
  const { user } = useAuth();
  return (
    <div className="mt-24">
      <h1>Welcome to {user?.displayName}</h1>
    </div>
  );
};

export default Start;

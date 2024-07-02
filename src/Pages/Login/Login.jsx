import { Card, Input, Typography, IconButton } from "@material-tailwind/react";
import login from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import Container from "../../Components/Shared/Container";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn, signInWithGoogle, loading, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      // Sign in User
      await signIn(email, password);
      navigate(from);
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  // // handle Google SignIn
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithGoogle();
  //     navigate(from);
  //     toast.success("Login Successful");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex gap-16 justify-evenly items-center">
        <div className="rounded-lg w-2/4 h-full">
          <img className="h-full " src={login} alt="" />
        </div>
        <div className="border-2 border-gray-300 my-20 p-10 rounded-lg w-2/4">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your Email and Password and Login
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email address
                </Typography>
                <Input
                  size="lg"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div className="space-y-1">
                <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
                  Forgot password?
                </button>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="mt-6 bg-gray-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin m-auto" />
                ) : (
                  "Login"
                )}
              </button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Do Not have an account?{" "}
                <Link
                  to="/signUp"
                  className="hover:underline hover:text-rose-500 text-red-600"
                >
                  Sign Up
                </Link>
              </Typography>
            </form>

            <div className="container mx-10 my-5 lg:mx-[122px]">
              <div className="flex gap-4">
                <IconButton
                  // disabled={loading}
                  // onClick={handleGoogleSignIn}
                  className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                >
                  <i className="fab fa-google text-lg" />
                </IconButton>
                <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                  <i className="fab fa-twitter text-lg" />
                </IconButton>
                <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                  <i className="fab fa-dribbble text-lg" />
                </IconButton>
                <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <i className="fab fa-github text-lg" />
                </IconButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Login;

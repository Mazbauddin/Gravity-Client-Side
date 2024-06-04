import {
  Card,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import signUp from "../../assets/signUp.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";
import Container from "../../Components/Shared/Container";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const designation = form.designation.value;
    const bank_ac_no = form.bank_ac_no.value;
    const salary = form.salary.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      console.log(data.data.display_url);

      //2. User Registration
      const result = await createUser(email, password);
      console.log(result);

      // 3. Save username and photo in firebase
      await updateUserProfile(name, data.data.display_url);
      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // handle Google SignIn
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <div className="flex gap-16 justify-evenly items-center">
        <div className="rounded-lg w-2/4 h-full">
          <img className="h-full " src={signUp} alt="" />
        </div>
        <div className="border-2 border-gray-300 my-20 p-10 rounded-lg w-2/4">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Name
                </Typography>
                <Input
                  size="lg"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {/* dropdown */}
                <div className="flex justify-between items-center">
                  <div>
                    <select name="role" id="role" className="border-2 p-2 mt-8">
                      <option disabled className="border-2 p-2">
                        Admin
                      </option>
                      <option className="border-2 p-2">HR</option>
                      <option className="border-2 p-2">Employee</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Designation
                    </Typography>
                    <select
                      name="designation"
                      id="designation"
                      className="border-2 p-2 "
                    >
                      <option className="border-2 p-2">Sales Assistant</option>
                      <option className="border-2 p-2">
                        Social Media Executive
                      </option>
                      <option className="border-2 p-2">Digital Marketer</option>
                      <option className="border-2 p-2">Sales Executive </option>
                    </select>
                  </div>
                </div>
                {/* dropdown end */}

                <div className="flex justify-between items-center gap-5">
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Bank Account No.
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      name="bank_ac_no"
                      id="bank_ac_no"
                      required
                      placeholder="Enter Your Bank Account No"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Salary
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      name="salary"
                      id="salary"
                      required
                      placeholder="Enter Your Salary"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Select Image:
                  </Typography>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
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
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <button
                disabled={loading}
                type="submit"
                className="mt-6 bg-gray-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin m-auto" />
                ) : (
                  "Continue"
                )}
              </button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-rose-500 text-red-500"
                >
                  Login
                </Link>
              </Typography>
            </form>

            <div className="container mx-10 my-5 lg:mx-[122px]">
              <div className="flex gap-4">
                <IconButton
                  disabled={loading}
                  onClick={handleGoogleSignIn}
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

export default SignUp;

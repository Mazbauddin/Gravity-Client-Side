import {
  Card,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import signUp from "../../assets/signUp.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

import Container from "../../Components/Shared/Container";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, signInWithGoogle, updateUserProfile, loading } =
    useAuth();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            status: "notVerified",
            role: data.role,
            designation: data.designation,
            bank_ac_no: data.bank_ac_no,
            salary: data.salary,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  // new work
  // const {
  //   createUser,
  //   signInWithGoogle,
  //   updateUserProfile,
  //   loading,
  //   setLoading,
  // } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const role = form.role.value;
  //   const designation = form.designation.value;
  //   const bank_ac_no = form.bank_ac_no.value;
  //   const salary = form.salary.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const image = form.image.files[0];
  //   const formData = new FormData();
  //   formData.append("image", image);

  //   try {
  //     setLoading(true);
  //     // 1. Upload image and get image url
  //     const { data } = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=${
  //         import.meta.env.VITE_IMGBB_API_KEY
  //       }`,
  //       formData
  //     );
  //     console.log(data.data.display_url);

  //     //2. User Registration
  //     const result = await createUser(email, password);
  //     console.log(result);

  //     // 3. Save username and photo in firebase
  //     await updateUserProfile(name, data.data.display_url);
  //     navigate("/");
  //     toast.success("SignUp Successful");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

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

  // Eye visible
  const [visible, setVisible] = useState(true);

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
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
              <div className="mb-1 flex flex-col gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Name
                  </Typography>
                  <Input
                    size="lg"
                    id="name"
                    required
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                    name="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                {/* dropdown */}
                <div className="flex justify-between items-center">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Role
                    </Typography>
                    <select
                      name="role"
                      {...register("role", { required: true })}
                      id="role"
                      className="border-2 p-2 mt-8"
                    >
                      <option disabled className="border-2 p-2">
                        Admin
                      </option>
                      <option className="border-2 p-2">HR</option>
                      <option className="border-2 p-2">Employee</option>
                    </select>
                    {errors.role && (
                      <span className="text-red-500">Role is required</span>
                    )}
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Designation
                    </Typography>
                    <select
                      name="designation"
                      {...register("designation", { required: true })}
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
                    {errors.designation && (
                      <span className="text-red-500">
                        Designation is required
                      </span>
                    )}
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
                      {...register("bank_ac_no", { required: true })}
                      id="bank_ac_no"
                      required
                      placeholder="Enter Your Bank Account No"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    {errors.bank_ac_no && (
                      <span className="text-red-500">
                        {" "}
                        Bank Account No is required
                      </span>
                    )}
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Salary
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      name="salary"
                      {...register("salary", { required: true })}
                      id="salary"
                      required
                      placeholder="Enter Your Salary"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    {errors.salary && (
                      <span className="text-red-500">Salary is required</span>
                    )}
                  </div>
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Select Image:
                  </Typography>
                  <input required type="file" id="image" name="image" />
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Email address
                  </Typography>
                  <Input
                    size="lg"
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    required
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>

                <label className="input input-bordered flex items-center gap-2">
                  <Input
                    type={visible ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    autoComplete="new-password"
                    id="password"
                    required
                    size="lg"
                    placeholder="********"
                    className=" grow !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <div
                    className="text-xl absolute right-3 cursor-pointer"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <FaEye className="text-[#fea100]"></FaEye>
                    ) : (
                      <FaEyeSlash className="text-[#fea100]"></FaEyeSlash>
                    )}
                  </div>
                </label>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one Uppercase, one Lower case, one Number
                    and one Special Characters
                  </span>
                )}
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

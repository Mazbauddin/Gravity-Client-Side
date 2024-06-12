import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { ImSpinner9 } from "react-icons/im";
import SectionTitle from "../../Components/Shared/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Container from "../../Components/Shared/Container";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadSpinner from "../../Components/Shared/LoadSpinner";
const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loading } = useAuth();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const contactInfo = {
      email: data.email,
      message: data.message,
    };
    //
    const contactRes = await axiosPublic.post("/contactUs", contactInfo);

    if (contactRes.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Your Opinions Save Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (loading) return <LoadSpinner />;
  return (
    <div>
      <SectionTitle heading="Contact Us"></SectionTitle>
      <div>
        <Container>
          <div className="text-center">
            <Typography variant="h4" color="blue-gray">
              Contact Us
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Any questions or remarks? Just write us a messaage!
            </Typography>
          </div>
          <div className="flex gap-16 justify-evenly items-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-20 rounded-lg text-white">
              <Typography className="text-4xl" variant="h4" color="blue-gray">
                Contact Information
              </Typography>
              <p className="pt-5 text-2xl">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <h2 className="pt-5 text-xl">+01314599888</h2>
              <h2 className="pt-5 text-xl">
                52/19, Harry Potter Road, <br /> Harry Nagar, Dhaka, Bangladesh
              </h2>
            </div>
            <div className="border-2 border-gray-300 my-20 p-10 rounded-lg w-2/4">
              <Card color="transparent" shadow={false}>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
                    <div className="mb-1 flex flex-col gap-6">
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-3"
                        >
                          Email address
                        </Typography>
                        <Input
                          size="lg"
                          type="email"
                          name="email"
                          {...register("email", { required: true })}
                          id="email"
                          placeholder="name@mail.com"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                        {errors.email && (
                          <span className="text-red-500">
                            Email is required
                          </span>
                        )}
                      </div>

                      <div className="flex w-full flex-col gap-6">
                        <Textarea
                          name="message"
                          {...register("message", { required: true })}
                          variant="standard"
                          label="Message"
                        />
                        {errors.message && (
                          <span className="text-red-500">
                            Message is required
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      disabled={loading}
                      type="submit"
                      className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md py-3 text-white"
                    >
                      {loading ? (
                        <ImSpinner9 className="animate-spin m-auto" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contacts;

import { Button } from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadSpinner from "../../Components/Shared/LoadSpinner";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ServiceDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: service = [], isLoading } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/service/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadSpinner />;

  return (
    <div>
      <Helmet>
        <title>Gravity | {service?.title}</title>
      </Helmet>
      <section className="mt-20">
        <div className="">
          <img
            src={service.image}
            alt=""
            className="w-5/6  h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md relative"
          />
        </div>
        <div className="-mt-20 flex justify-center items-center bg-warning">
          <div className="dark:bg-violet-600 text-black  mb-12 -mt-20 lg:-mt-40 ">
            <div className=" flex mt-20  flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 mb-12 mt-10 lg:mt-20">
                {service.title}
              </h1>
              <p className="text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                {service.category}
              </p>
              <div className="flex justify-between gap-8">
                <p className="text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                  Price : {service.price}
                </p>
                <p className=" text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                  Ratings : {service.ratings}
                </p>
              </div>

              <p className="  text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                {service.description}
              </p>
              <div className="flex  justify-between gap-8"></div>
              <div className="flex justify-between items-center mx-auto">
                <Button>Purchase</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

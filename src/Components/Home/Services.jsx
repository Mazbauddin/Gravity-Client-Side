import Container from "../Shared/Container";
import ServiceCard from "./ServiceCard";
import HeadingTitle from "../Shared/HeadingTitle";
import LoadSpinner from "../Shared/LoadSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/services");
      return data;
    },
  });

  if (isLoading) return <LoadSpinner />;

  return (
    <Container>
      {services && services.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <HeadingTitle
            center={true}
            title="No Services Available Right Now!"
            subtitle="Please Refresh Your Browser"
          />
        </div>
      )}
    </Container>
  );
};

export default Services;

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LoadSpinner from "../../../Components/Shared/LoadSpinner";
import Container from "../../../Components/Shared/Container";
import HeadingTitle from "../../../Components/Shared/HeadingTitle";
import VisitorCard from "../../../Components/Dashboard/VisitorCard";
import { Helmet } from "react-helmet-async";

const VisitorsFeedback = () => {
  const axiosPublic = useAxiosPublic();
  const { data: visitorsFeedback = [], isLoading } = useQuery({
    queryKey: ["visitorsFeedback"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/visitorsFeedback");
      return data;
    },
  });

  if (isLoading) return <LoadSpinner />;
  return (
    <Container>
      <Helmet>
        <title>Dashboard | Visitors Feedback</title>
      </Helmet>
      {visitorsFeedback && visitorsFeedback.length > 0 ? (
        <div className="pt-12 w-full mt-20 ">
          {visitorsFeedback.map((visitorFeedback) => (
            <VisitorCard
              key={visitorFeedback._id}
              visitorFeedback={visitorFeedback}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <HeadingTitle
            center={true}
            title="No Feedback Right Now!"
            subtitle="Please Refresh Your Browser"
          />
        </div>
      )}
    </Container>
  );
};

export default VisitorsFeedback;

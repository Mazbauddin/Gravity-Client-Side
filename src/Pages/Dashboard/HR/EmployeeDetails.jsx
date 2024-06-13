import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: singleEmployee = [], refetch } = useQuery({
    queryKey: ["singleEmployee", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/singleEmployee/${id}`);
      return res.data;
    },
  });
  console.log(singleEmployee);
  return (
    <div className="mt-40">
      <h2>Hello Uncle kmn asen {singleEmployee?.name}</h2>
      <h2>Hello Uncle kmn asen {singleEmployee?.designation}</h2>
      <h2>Hello Uncle kmn asen {singleEmployee?.email}</h2>
      <h2>Hello Uncle kmn asen {singleEmployee?.salary}</h2>
    </div>
  );
};

export default EmployeeDetails;

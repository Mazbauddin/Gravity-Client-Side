import { Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import LoadSpinner from "../../../../Components/Shared/LoadSpinner";
import useAuth from "../../../../Hooks/useAuth";
import TableRowData from "../TableRow/TableRowData";

const TABLE_HEAD = ["Tasks", "Working Hour", "Date"];

const EmployeeWorkTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: employeeWorks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employeeWorks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employeeWorks/${user?.email}`);
      return data;
    },
  });

  console.log(employeeWorks);

  if (isLoading) return <LoadSpinner />;
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeeWorks.map((work) => (
            <TableRowData key={work._id} work={work} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default EmployeeWorkTable;

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@material-tailwind/react";
// import ToggleBtn from "../../../Components/Shared/ToggleBtn";
import { useState } from "react";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [toggle, setToggle] = useState(true);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/employee/${users.email}`);
      return res.data;
    },
  });
  console.log(users);

  const toggleHandler = () => {
    setToggle();
  };
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-8">
      <Helmet>
        <title>Employee List</title>
      </Helmet>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <h2 className="text-3xl">Total Users: {users.length}</h2>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    SL No.
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Verified
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Bank Account
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Salary
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Pay
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="px-5 py-5 border-b  bg-red-500 border-gray-200  text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <label
                          htmlFor="Toggle3"
                          className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
                        >
                          <input
                            onChange={toggleHandler}
                            id="Toggle3"
                            type="checkbox"
                            className="hidden peer"
                            checked={toggle}
                          />
                          <span className="px-4 text-white py-1 rounded-l-md bg-gray-300  peer-checked:bg-yellow-900">
                            X
                          </span>
                          <span className="px-4 text-black py-1 rounded-r-md bg-green-300 peer-checked:bg-gray-300">
                            {user.status}
                          </span>
                        </label>
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {/* {user.bank_account} */}
                        2536915
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {/* {user.salary} */}
                        35000
                      </p>
                    </td>
                    <td>
                      <Button
                        color="teal"
                        className="text-base px-3 py-2 hover:text-orange-600"
                      >
                        Pay
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="blue"
                        className="text-base px-3 py-2 hover:text-orange-600"
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;

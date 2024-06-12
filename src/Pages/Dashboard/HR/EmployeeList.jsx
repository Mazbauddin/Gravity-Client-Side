import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@material-tailwind/react";
// import ToggleBtn from "../../../Components/Shared/ToggleBtn";
// import { useState } from "react";
import Swal from "sweetalert2";
import { TbBounceRightFilled } from "react-icons/tb";
import { useState } from "react";
import PayEmployeeModal from "../../../Components/Dashboard/Modal/PayEmployeeModal";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/employee/${users.email}`);
      return res.data;
    },
  });
  console.log(users);
  // Pay
  const modalHandler = async (selected) => {
    return setIsOpen(false);
  };

  const handleVerifiedUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Verified it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/users/verified/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Verified!",
              text: `Your Employee has been Verified.`,
              icon: "success",
            });
          }
        });
      }
    });
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
                    <td>
                      {user.status === "isVerified" ? (
                        <Button className="text-xl hover:text-orange-600">
                          <TbBounceRightFilled />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleVerifiedUser(user)}
                          className="text-xl hover:text-orange-600"
                        >
                          X
                        </Button>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.role}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {/* {user.salary} */}
                        35000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
                      <Button
                        onClick={() => setIsOpen(true)}
                        color="teal"
                        className="text-base px-3 py-2 hover:text-orange-600"
                      >
                        Pay
                      </Button>
                      <PayEmployeeModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        modalHandler={modalHandler}
                        user={user}
                      />
                    </td>
                    {/* <td>
                      <Button
                        color="teal"
                        className="text-base px-3 py-2 hover:text-orange-600"
                      >
                        Pay
                      </Button>
                    </td> */}
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

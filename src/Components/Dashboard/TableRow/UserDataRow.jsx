import PropTypes from "prop-types";
import { useState } from "react";
import UpdateUserModal from "../Modal/UpdateUserModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

import { Button } from "@material-tailwind/react";
// day 3 part 3 min: 30:00
const UserDataRow = ({ user, refetch, index }) => {
  const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role updated successfully");
      setIsOpen(false);
    },
  });

  // Make Hr modal handler work
  const modalHandler = async (selected) => {
    if (loggedInUser.email === user.email) {
      toast.error("You can't update your own role");
      return setIsOpen(false);
    }

    const userRole = {
      role: selected,
      status: "Verified",
    };
    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // Fire Modal handler

  const handleFireUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fired it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/users/fire/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Fired!",
              text: `Your Employee has been Fired.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b  bg-red-500 border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.displayName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.designation}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{user?.role}</span>
        </button>
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>

      <td>
        {user.fire === "isFired" ? (
          "Fired"
        ) : (
          <Button
            onClick={() => handleFireUser(user)}
            className="text-xl hover:text-orange-600"
          >
            Fire
          </Button>
        )}
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;

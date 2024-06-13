import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";

import { BsGraphUp } from "react-icons/bs";

import avatarImg from "../../assets/placeholder.jpg";

import useAuth from "../../Hooks/useAuth";
import SideMenuItem from "./SideMenuItem";
import useRole from "../../Hooks/useRole";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import HRMenu from "./HRMenu";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isActive] = useState(false);
  const [role] = useRole();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-5 bg-gradient-to-r from-cyan-500 to-blue-500 md:fixed mt-20 flex flex-col justify-between overflow-x-hidden text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <div className="mx-auto rounded-lg">
              <img
                className="rounded-lg"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt="profile"
                height="120"
                width="120"
              />
              <p className="text-center mt-3 text-white py-2 bg-orange-500 rounded-lg first-letter:uppercase">
                {role}
              </p>
              <h1 className="text-center mt-3 px-3 bg-white py-2 text-orange-500 rounded-lg">
                {user?.displayName}
              </h1>
            </div>

            {/*  Menu Items */}
            <nav>
              {/* Main */}
              <SideMenuItem
                menuTitle="Main"
                linkAddress="/dashboard"
                icon={BsGraphUp}
              />

              {role === "Employee" && <EmployeeMenu />}
              {role === "HR" && <HRMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <SideMenuItem
            menuTitle="Profile"
            linkAddress="/dashboard/profile"
            icon={FcSettings}
          />

          <button
            onClick={logOut}
            className="flex w-full mt-5 text-white  items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-900 rounded-lg hover:text-orange-500"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { MdHomeWork } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import avatarImg from "../../assets/placeholder.jpg";

import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SideMenuItem from "./SideMenuItem";
import useRole from "../../Hooks/useRole";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import HRMenu from "./HRMenu";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-5 md:fixed mt-20 flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
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
              <p className="text-center mt-3 bg-red-500 py-2 text-white rounded-lg">
                {role}
              </p>
              <h1 className="text-center mt-3 px-3 bg-red-500 py-2 text-white rounded-lg">
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

              {role === "employee" && <EmployeeMenu />}
              {role === "hr" && <HRMenu />}
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
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
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

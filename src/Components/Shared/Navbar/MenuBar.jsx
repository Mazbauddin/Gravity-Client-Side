import { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import logo from "../../../assets/LOGO5.png";
import useAuth from "../../../Hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import avatarImg from "../../../assets/placeholder.jpg";
import Container from "../Container";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Successfully Logout"))
      .catch((error) => toast.error(error));
    setUserOpen(false);
  };
  const navItems = (
    <>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-[#0da5e9] relative"
      >
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "text-[#ef8682]"
              : "hover:text-[#ef8682]"
          }
        >
          Dashboard
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-[#0da5e9] relative"
      >
        <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "text-[#ef8682]"
              : "hover:text-[#ef8682]"
          }
        >
          Contacts
        </NavLink>
      </Typography>
    </>
  );

  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* logo items */}
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <Link to="/">
                <img className="h-16 w-16" src={logo} alt="" />
              </Link>
            </Typography>
            {/* middle */}
            <div className="">
              {" "}
              <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {navItems}

                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="flex items-center gap-x-2 p-1 font-medium"
                >
                  {!user && (
                    <Button
                      onClick={() => navigate("/login")}
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block btn_wave btn1 rounded-md "
                    >
                      <span>Login</span>
                    </Button>
                  )}
                  {user && (
                    <div className="relative">
                      <div className="flex flex-row items-center gap-3">
                        <div
                          onClick={() => setIsOpen(!isOpen)}
                          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                        >
                          <div className="">
                            {/* Avatar */}
                            <img
                              className="rounded-full"
                              referrerPolicy="no-referrer"
                              src={
                                user && user.photoURL
                                  ? user.photoURL
                                  : avatarImg
                              }
                              alt="profile"
                              height="30"
                              width="30"
                            />
                          </div>
                        </div>
                      </div>
                      {isOpen && (
                        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                          <div className="flex flex-col cursor-pointer">
                            {user ? (
                              <>
                                <Link
                                  to="/dashboard"
                                  className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                >
                                  Dashboard
                                </Link>
                                <div
                                  onClick={() => handleLogOut()}
                                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                                >
                                  Logout
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Typography>
              </ul>
              {/* new */}
              {/* Dropdown Menu */}
              <div></div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default MenuBar;

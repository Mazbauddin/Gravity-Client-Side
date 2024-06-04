import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import Footer from "../Components/Footer/Footer";
import MenuBar from "../Components/Shared/Navbar/MenuBar";

const DashBoardLayout = () => {
  return (
    <div>
      <div>
        <MenuBar></MenuBar>
      </div>
      <div className="flex">
        {/* sidebar */}
        <div className="min-h-screen md:flex">
          <Sidebar></Sidebar>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <div>
        <Footer></Footer>
      </div> */}
    </div>
  );
};

export default DashBoardLayout;

import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";

import MenuBar from "../Components/Shared/Navbar/MenuBar";

const MainLayout = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="pt-16 min-h-[calc(100vh-335px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

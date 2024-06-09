import SideMenuItem from "./SideMenuItem";
import { BsGraphUp } from "react-icons/bs";

const AdminMenu = () => {
  return (
    <>
      <SideMenuItem
        menuTitle="All Employee List"
        linkAddress="all-employee-list"
        icon={BsGraphUp}
      />
    </>
  );
};

export default AdminMenu;

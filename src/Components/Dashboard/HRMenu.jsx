import { BsFingerprint, BsGraphUp } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import SideMenuItem from "./SideMenuItem";

const HRMenu = () => {
  return (
    <>
      <SideMenuItem
        menuTitle="Employee List"
        linkAddress="employee-list"
        icon={BsGraphUp}
      />
      <SideMenuItem
        menuTitle="Progress"
        linkAddress="progress"
        icon={BsFingerprint}
      />
    </>
  );
};

export default HRMenu;

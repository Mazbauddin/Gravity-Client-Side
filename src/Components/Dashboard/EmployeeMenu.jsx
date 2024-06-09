import { BsGraphUp } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";

import SideMenuItem from "./SideMenuItem";
const EmployeeMenu = () => {
  return (
    <>
      {/* Work Sheet */}
      <SideMenuItem
        menuTitle="Work Sheet"
        linkAddress="work-sheet"
        icon={BsGraphUp}
      />

      {/* Payment History */}
      <SideMenuItem
        menuTitle="Payment History"
        linkAddress="payment-history"
        icon={MdHomeWork}
      />
    </>
  );
};

export default EmployeeMenu;

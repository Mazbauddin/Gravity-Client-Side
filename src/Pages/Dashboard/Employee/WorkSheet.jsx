import EmployeeWorkTable from "./EmployeeTable/EmployeeWorkTable";
import EmployeeForm from "./Form/EmployeeForm";

const WorkSheet = () => {
  // Form handler

  return (
    <div className="flex justify-evenly mt-20 gap-5">
      <div>
        {" "}
        <EmployeeForm></EmployeeForm>
      </div>
      <div className="mt-20 ">
        <EmployeeWorkTable></EmployeeWorkTable>
      </div>
    </div>
  );
};

export default WorkSheet;

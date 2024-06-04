import WorkTable from "./EmployeeTable/WorkTable";
import EmployeeForm from "./Form/EmployeeForm";

const WorkSheet = () => {
  return (
    <div className="flex justify-evenly mt-20 gap-5">
      <div>
        {" "}
        <EmployeeForm></EmployeeForm>
      </div>
      <div className="mt-20 ">
        <WorkTable></WorkTable>
      </div>
    </div>
  );
};

export default WorkSheet;

import {
  Card,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const EmployeeForm = () => {
  return (
    <>
      <div className="border-2 border-gray-300 my-20 p-10 rounded-lg ">
        <Card color="transparent" shadow={false}>
          <form className="mt-8 mb-2">
            <div className="mb-1 flex flex-col gap-6">
              {/* dropdown */}

              <div className="flex justify-between items-center gap-5">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Tasks
                  </Typography>
                  <select name="task" id="task" className="border-2 p-2 ">
                    <option className="border-2 p-2">Sales </option>
                    <option className="border-2 p-2">Support</option>
                    <option className="border-2 p-2">Content</option>
                    <option className="border-2 p-2">Paper Work</option>
                  </select>
                </div>
                <div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Work Hour
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      name="work_hour"
                      id="work_hour"
                      required
                      placeholder="Enter Your Work Hour"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* dropdown end */}

            <div className="">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Date
                </Typography>
                <Input
                  size="lg"
                  type="number"
                  name="salary"
                  id="salary"
                  required
                  placeholder="Enter Your Salary"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-gray-500 w-full rounded-md py-3 text-white"
            >
              Submit Your Work
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default EmployeeForm;

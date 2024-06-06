import { Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";

const EmployeeForm = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { mutateAsync } = useMutation({
    mutationFn: async (empWorkData) => {
      const { data } = await axiosSecure.post(`/employeeWork`, empWorkData);
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Success");
      toast.success("Work Added Successfully");
      setLoading(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const tasks = form.tasks.value;
    const date = startDate;
    const work_hour = form.work_hour.value;
    const employee = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    try {
      const workData = {
        employee,
        tasks,
        date,
        work_hour,
      };

      // post request to server
      await mutateAsync(workData);
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="border-2 border-gray-300 my-20 p-10 rounded-lg ">
        <Card color="transparent" shadow={false}>
          <form onSubmit={handleSubmit} className="mt-8 mb-2">
            <div className="mb-1 flex flex-col gap-6">
              {/* dropdown */}

              <div className="flex justify-between items-center gap-5">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Tasks
                  </Typography>
                  <select name="tasks" id="tasks" className="border-2 p-2 ">
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

                <DatePicker
                  className="border p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) => date.getDay() != 5}
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="mt-6 bg-gray-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin m-auto" />
              ) : (
                "Add Work"
              )}
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default EmployeeForm;

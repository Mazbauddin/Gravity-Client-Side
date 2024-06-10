import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

const EmployeeDataRow = () => {
  return (
    <tr>
      <td className="px-5 py-5 border-b  bg-red-500 border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">1</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Shawon</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">hello</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-red-500 text-sm">
        <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">hi</span>
        </button>
      </td>

      <td>
        <Button className="text-xl hover:text-orange-600">Fire</Button>
      </td>
    </tr>
  );
};

EmployeeDataRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.object,
  refetch: PropTypes.func,
};

export default EmployeeDataRow;

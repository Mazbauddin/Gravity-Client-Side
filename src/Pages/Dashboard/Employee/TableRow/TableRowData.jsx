import PropTypes from "prop-types";

const TableRowData = ({ work, refetch }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{work?.tasks}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{work?.work_hour}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{work?.date}</p>
      </td>
    </tr>
  );
};

TableRowData.propTypes = {
  work: PropTypes.object,
  refetch: PropTypes.func,
};

export default TableRowData;

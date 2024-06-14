import { Helmet } from "react-helmet-async";

const Progress = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Progress</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8 mt-20">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Tasks
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Hours
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>{/* Table Row Data */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;

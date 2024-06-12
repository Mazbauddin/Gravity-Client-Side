/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-10">
      <p className="text-yellow-500 py-4">---{subHeading}---</p>
      <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;

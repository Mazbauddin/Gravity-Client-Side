import PropTypes from "prop-types";
import { CardBody, Typography } from "@material-tailwind/react";

const VisitorCard = ({ visitorFeedback }) => {
  return (
    <div className="mt-10 w-full shadow-lg  rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
      <CardBody>
        <div className="mb-3">
          <Typography variant="h5" className="font-medium text-2xl">
            Email: {visitorFeedback?.email}
          </Typography>
        </div>
        <div>
          <Typography variant="h5" className="font-medium">
            <span className="border-b-2">Feedback:</span>{" "}
            {visitorFeedback?.message}
          </Typography>
        </div>
      </CardBody>
    </div>
  );
};

VisitorCard.propTypes = {
  visitorFeedback: PropTypes.object,
};

export default VisitorCard;

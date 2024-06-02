import { Helmet } from "react-helmet-async";
import Carousel from "../../Components/Home/Carousel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gravity | Home</title>
      </Helmet>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Home;

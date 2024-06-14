import { Helmet } from "react-helmet-async";
import Carousel from "../../Components/Home/Carousel";
import Testimonial from "../../Components/Home/Testimonial";
import Services from "../../Components/Home/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gravity | Home</title>
      </Helmet>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="">
        <Services></Services>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;

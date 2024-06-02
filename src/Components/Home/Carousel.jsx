// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bannerImg1 from "../../assets/carousel1.png";
import bannerImg2 from "../../assets/carousel2.jpg";
import bannerImg3 from "../../assets/carousel3.jpg";

// import bannerImg3 from "../assets/images/carousel3.jpg";
import Slide from "../../Components/Home/Slide";

export default function Carousel() {
  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bannerImg1}
            heading={"Market Leadership"}
            text={
              " We have consistently maintained our position as a market leader, capturing a significant share of the market through our cutting-edge products and services. Our commitment to quality and customer satisfaction has set us apart from our competitors."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg2}
            heading={"Financial Growth"}
            text={
              "Our financial performance has been exemplary, with year-over-year revenue growth and strong profitability. This robust financial health has enabled us to reinvest in our business, driving further innovation and expansion."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bannerImg3}
            heading={"Innovation"}
            text={
              "Innovation is at the heart of our success. We have launched numerous groundbreaking products that have revolutionized our industry. Our R&D team continues to push the boundaries of what's possible, ensuring we stay ahead of the curve."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

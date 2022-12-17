import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import slider from "../../helper/slider.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={slider[0].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[1].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[2].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[3].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[4].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[5].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[6].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[7].img} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css/navigation";
import CarouselCard from "./CarouselCard.styled";

export default function Carousel() {
  return (
    <>
      <Swiper
        initialSlide={5}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-1.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-2.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-3.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-4.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-5.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-6.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-7.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-8.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/abstract-9.jpg" /> */}
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

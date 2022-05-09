import React from 'react';
import '../Home/index.css';
import {Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default Home; () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className="img" src="client/public/images/movie-slide.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src="client/public/images/food-slide.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src="client/public/images/drink-slide.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src="client/public/images/final-slide.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
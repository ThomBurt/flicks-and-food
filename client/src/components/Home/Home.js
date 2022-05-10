import React from 'react';
import {LogoHome} from './LogoHome/LogoHome';
// import {BgPicture} from './BgPicture/BgPicture';

import {Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export const Home = () => {

    return (
        <div>
            {/*<LogoHome /> */}
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
        <h3>Choose the perfect movie</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Pair it with some food</h3>
        <img className="img" src="client/public/images/food-slide.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img" src="client/public/images/drink-slide.jpg" alt="" />
        <h3>Top it off with a drink</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Get Started!</h2>
        <img className="img" src="client/public/images/final-slide.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
    )
};
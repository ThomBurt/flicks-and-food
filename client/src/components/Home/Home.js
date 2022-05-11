import React from 'react';
// import {LogoHome} from './LogoHome/LogoHome';
// import {BgPicture} from './BgPicture/BgPicture';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Home.css';
//import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const images = [
    { image: require("/Users/bensharpe/Desktop/flicks-and-food/client/src/components/Assets/img/movie-slide.jpeg") },
    { image: require("/Users/bensharpe/Desktop/flicks-and-food/client/src/components/Assets/img/food-slide.jpg") },
    { image: require("/Users/bensharpe/Desktop/flicks-and-food/client/src/components/Assets/img/drink-slide.jpg")},
    { image: require("/Users/bensharpe/Desktop/flicks-and-food/client/src/components/Assets/img/final-slide.jpg")}
  ];

export const Home = () => {

    return (
        <div>
            {/*<LogoHome /> */}
            <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      slidesPerView={1}
      //spaceBetween={50}
      pagination={{ clickable: true }}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="swiper-container">
        <img className="img" src={images[0].image} alt="" />
        <h3>Choose the perfect movie</h3>
      </SwiperSlide>
      <SwiperSlide className="swiper-container">
        <h3>Pair it with some food</h3>
        <img className="img" src={images[1].image} alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiper-container">
        <img className="img" src={images[2].image} alt="" />
        <h3>Top it off with a drink</h3>
      </SwiperSlide>
      <SwiperSlide className="swiper-container">
        <h3>Enjoy!</h3>
        <img className="img" src={images[3].image} alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
    )
};
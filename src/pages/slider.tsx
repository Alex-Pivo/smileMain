"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/styles.css";
import "swiper/css/effect-fade";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="firstImage"></div>
        </SwiperSlide>
        <SwiperSlide className="slidefirst">Slide 2</SwiperSlide>
        <SwiperSlide className="slidefirst">Slide 3</SwiperSlide>
        <SwiperSlide className="slidefirst">Slide 4</SwiperSlide>
        <SwiperSlide className="slidefirst">Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}

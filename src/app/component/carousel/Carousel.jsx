'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination,Autoplay } from 'swiper/modules';
import  Image  from 'next/image';

export default function Carousel({ image1, image2, image3 }) {
    return (
        <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
         <Image src={image1} alt={`Image 1`} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt={`Image 2`} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt={`Image 3`} />
        </SwiperSlide>
      </Swiper>
    </>
    );
}

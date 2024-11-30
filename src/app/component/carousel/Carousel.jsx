'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import  Image  from 'next/image';

export default function Carousel({ image1, image2, image3 }) {
    return (
        <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
     <SwiperSlide>
                    <Image src={image1} alt={`Image 1`} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image2} alt={`Image 2`} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image3} alt={`Image 3`} width={500} height={500} />
                </SwiperSlide>
      </Swiper>
    </>
    );
}

'use client';

import Carousel from '../carousel/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const StoryCardMobile = ({ slides }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '   story__swiper-pagination">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="story__card-item">
            <div className="story__card-swiper">
              <Carousel
                image1={slide.images[0]}
                image2={slide.images[1]}
                image3={slide.images[2]}
              />
            </div>
            <div className="story__content">
              <div className="story__content-text">
                <div className="story__content-title">{slide.title}</div>
                <ul>
                  {slide.listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="story__content-video">
                <video autoPlay loop muted>
                  <source src={slide.videoSrc} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
                <p>видео-отзыв</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default StoryCardMobile;

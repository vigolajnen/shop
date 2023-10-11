import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { ICarouselPromoProps } from '../../types';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

export default function CarouselPromo({
  data,
  styles,
  onClick,
}: ICarouselPromoProps) {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      freeMode: true,
    },
  };
  const carouselProps = {
    navigation: true,
    pagination: true,
    slidesPerView: 1,
    modules: [Navigation, Pagination],
  };
  return (
    <>
      <CarouselBaseSwiper
        wrapperClass={styles}
        data={data}
        sliderId='promo-slider'
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {[...data].map((el, index) => (
          <SwiperSlide key={index} className=''>
            <Link
              to='#tariffs'
              className='w-full h-full block'
              key={index}
              style={{ backgroundImage: `url(${el})` }}
              onClick={onClick}
            >
              <picture className='w-full h-full'>
                <source media='(min-width: 769)' srcSet={el} />
                <img className='w-full h-full' src={el} alt='' />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </CarouselBaseSwiper>
    </>
  );
}

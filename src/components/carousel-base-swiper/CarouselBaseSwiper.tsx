import React from 'react';
import { Swiper } from 'swiper/react';

import './styles.css';

import { ICarouselBaseSwiperProps } from '../../types';
import Spinner from '../spinner/Spinner';

// const breakpoints = {
//   320: {
//     slidesPerView: 1.3,
//     spaceBetween: 20,
//   },
//   640: {
//     slidesPerView: 2,
//   },
//   1024: {
//     slidesPerView: 3,
//     freeMode: true,
//   },
// };

export default function CarouselBaseSwiper({
  count,
  wrapperClass,
  data,
  sliderId,
  breakpoints,
  children,
  ...props
}: ICarouselBaseSwiperProps) {
  return (
    <>
      {data && [...data].length > 0 ? (
        <Swiper
          id={sliderId}
          breakpoints={breakpoints}
          className={wrapperClass}
          {...props}
        >
          {children}
        </Swiper>
      ) : (
        <Spinner />
      )}
    </>
  );
}

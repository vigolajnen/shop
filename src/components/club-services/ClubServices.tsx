import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { IClubServicesProps } from '../../types';
import Section from '../../UI/section/Section';
import SectionTitle from '../../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';
import { SwiperSlide } from 'swiper/react';

export default function ClubServices({ title, data }: IClubServicesProps) {
  const matches = useMediaQuery('(min-width: 567px) and (max-width: 1200px)');

  const liClass =
    'overflow-hidden bg-curious-blue-500 bg-no-repeat bg-cover rounded-3xl shadow-sm';

  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.75,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const carouselProps = {
    slidesPerView: 3,
  };

  return (
    <Section styleWrapper='bg-porcelain-50'>
      {title && (
        <SectionTitle as='h2' styles='mb-5 sm:mb-10'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        <CarouselBaseSwiper
          wrapperClass='clubs-services-slider'
          data={data}
          sliderId='clubs-services-slider'
          breakpoints={breakpoints}
          {...carouselProps}
        >
          {[...data].map((el, index) => (
            <SwiperSlide key={index} className='overflow-hidden rounded-xl'>
              <div
                className={`bg-curious-blue-500 rounded-3xl shadow-sm bg-no-repeat bg-cover overflow-hidden`}
                style={{ backgroundImage: `url(${el.pic})` }}
                key={el.title}
              >
                <div className='flex flex-wrap items-center h-full w-full justify-center'>
                  <h3 className='p-4 py-20 sm:py-14 text-white font-bold mb-auto text-center w-full uppercase text-2xl md:text-2xl xl:text-xl'>
                    {el.title}
                  </h3>
                  <div className='w-100 h-36 bg-white p-4 hidden sm:flex items-center mt-auto mb-0 justify-center'>
                    {el.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CarouselBaseSwiper>
      ) : (
        <ul
          className={`flex flex-wrap text-center justify-center gap-8 sm:gap-4`}
        >
          {[...data].map((el) => (
            <li
              className={`w-full sm:w-1/5 ${liClass}`}
              key={el.title}
              style={{ backgroundImage: `url(${el.pic})` }}
            >
              <div className='flex flex-wrap items-center h-full w-full justify-center'>
                <h3 className='p-4 py-20 sm:py-14 text-white font-bold mb-auto text-center w-full uppercase text-2xl sm:text-xl'>
                  {el.title}
                </h3>
                <div className='w-100 h-36 bg-white p-4 hidden sm:flex items-center mt-auto mb-0'>
                  {el.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

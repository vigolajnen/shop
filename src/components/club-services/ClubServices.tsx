import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';

import { IClubServicesProps } from '../../types';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import './styles.css';
import { Scroll } from '../icons';

export default function ClubServices({ title, data }: IClubServicesProps) {
  const matches = useMediaQuery('(min-width: 567px) and (max-width: 1200px)');

  const liClass = 'overflow-hidden shadow-sm';

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
    <Section styleWrapper='bg-porcelain-50 clubs-services'>
      {title && (
        <SectionTitle as='h2' styles='md:px-10 xl:px-0'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        <div>
          <Scroll className='xl:hidden w-8 h-8 absolute top-3 right-0' />
          <CarouselBaseSwiper
            wrapperClass='clubs-services-slider gap-8'
            data={data}
            sliderId='clubs-services-slider'
            breakpoints={breakpoints}
            {...carouselProps}
          >
            {[...data].map((el, index) => (
              <SwiperSlide key={index} className='overflow-hidden rounded-xl'>
                <div
                  className={`clubs-services-item rounded-4xl shadow-sm overflow-hidden`}
                  key={el.title}
                >
                  <div
                    className='clubs-item relative z-2 flex flex-wrap items-center h-32 w-full justify-center bg-no-repeat bg-cover'
                    style={{ backgroundImage: `url(${el.pic})` }}
                  >
                    <h3 className='relative p-4 md:mt-10 text-white item-title mx-auto text-center w-full'>
                      {el.title}
                    </h3>
                  </div>
                  <div className='item-text w-100 h-36 bg-white p-4 hidden sm:flex items-center mt-auto mb-0 justify-center'>
                    {el.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CarouselBaseSwiper>
        </div>
      ) : (
        <ul
          className={`flex flex-wrap text-center justify-center gap-4 md:gap-6`}
        >
          {[...data].map((el) => (
            <li
              className={`w-full sm:w-1/5 clubs-services-item grow ${liClass}`}
              key={el.title}
            >
              <div
                className='relative h-32 z-2 clubs-item flex flex-wrap items-center w-full justify-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${el.pic})` }}
              >
                <h3 className='relative p-4 md:mt-10 text-white item-title mx-auto text-center w-full'>
                  {el.title}
                </h3>
              </div>
              <div className='relative item-text w-100 h-36 bg-white p-4 hidden sm:flex items-center mt-auto mb-0'>
                {el.description}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import { IClubsGalleryProps } from '../../types';
import Section from '../../UI/section/Section';
import SectionTitle from '../../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles.css';

export default function ClubsGallery({ title, data }: IClubsGalleryProps) {
  const matches = useMediaQuery('(min-width: 567px)');

  const sliderMainData = data?.find((el: any) => el.name === 'main')?.arrayData;
  const sliderPoolData = data?.find((el: any) => el.name === 'pool')?.arrayData;
  const sliderGymData = data?.find((el: any) => el.name === 'gym')?.arrayData;
  const sliderSpaData = data?.find((el: any) => el.name === 'spa')?.arrayData;
  const sliderGroupData = data?.find(
    (el: any) => el.name === 'group',
  ).arrayData;

  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  const carouselProps = {
    navigation: true,
    slidesPerView: 3,
    modules: [Navigation],
  };
  const carouselProps2 = {
    slidesPerView: 3,
    scrollbar: true,
    modules: [Scrollbar],
  };

  return (
    <Section styleWrapper='bg-porcelain-50 px-0' styleInner='max-w-screen-xl'>
      {title && (
        <SectionTitle as='h3' styles='mb-5 sm:mb-10 px-4'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        sliderMainData && [...sliderMainData].length > 0 ? (
          <CarouselBaseSwiper
            wrapperClass='main-clubs-slider'
            data={data}
            sliderId='main-clubs-slider'
            breakpoints={breakpoints}
            {...carouselProps}
          >
            {[...sliderMainData].map((el, index) => (
              <SwiperSlide key={index} className='overflow-hidden rounded-xl'>
                <img className='w-full h-full object-cover' src={el} alt='' />
              </SwiperSlide>
            ))}
          </CarouselBaseSwiper>
        ) : null
      ) : (
        <div>
          {sliderPoolData && [...sliderPoolData].length > 0 ? (
            <>
              <div className='p-4 pl-0 mb-3 text-md'>
                <span className='text-curious-blue-500'>
                  Просторный бассейн{' '}
                </span>
                для спортивного и расслабленного плавания
              </div>
              <CarouselBaseSwiper
                wrapperClass='pool-clubs-slider mb-2'
                data={data}
                sliderId='pool-clubs-slider'
                breakpoints={breakpoints}
                {...carouselProps2}
              >
                {[...sliderPoolData].map((el, index) => (
                  <SwiperSlide
                    key={index}
                    className='overflow-hidden rounded-xl'
                  >
                    <img
                      className='w-full h-56 sm:h-full max-h-56 object-cover'
                      src={el}
                      alt=''
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </>
          ) : null}

          {sliderGymData && [...sliderGymData].length > 0 ? (
            <>
              <div className='p-4 pl-0 mb-3 text-md'>
                Профессионально оборудованный и 
                <span className='text-curious-blue-500'>
                  {' '}
                  современный тренажёрный зал{' '}
                </span>
              </div>
              <CarouselBaseSwiper
                wrapperClass='gym-clubs-slider mb-2'
                data={data}
                sliderId='gym-clubs-slider'
                breakpoints={breakpoints}
                {...carouselProps2}
              >
                {[...sliderGymData].map((el, index) => (
                  <SwiperSlide
                    key={index}
                    className='overflow-hidden rounded-xl'
                  >
                    <img
                      className='w-full h-56 sm:h-full max-h-56 object-cover'
                      src={el}
                      alt=''
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </>
          ) : null}

          {sliderSpaData && [...sliderSpaData].length > 0 ? (
            <>
              <div className='p-4 pl-0 mb-3 text-md'>
                <span className='text-curious-blue-500'>Спа-комплекс </span>
                <br />
                финская, русская, турецкая, инфракрасная сауны и соляная комната
              </div>
              <CarouselBaseSwiper
                wrapperClass='spa-clubs-slider mb-2'
                data={data}
                sliderId='spa-clubs-slider'
                breakpoints={breakpoints}
                {...carouselProps2}
              >
                {[...sliderSpaData].map((el, index) => (
                  <SwiperSlide
                    key={index}
                    className='overflow-hidden rounded-xl'
                  >
                    <img
                      className='w-full h-56 sm:h-full max-h-56 object-cover'
                      src={el}
                      alt=''
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </>
          ) : null}

          {sliderGroupData && [...sliderGroupData].length > 0 ? (
            <>
              <div className='p-4 pl-0 mb-3 text-md'>
                Разнообразные групповые уроки
                <br />
                <span className='text-curious-blue-500'>
                  растяжка, гимнастика, силовые, аквааэробика
                </span>
              </div>
              <CarouselBaseSwiper
                wrapperClass='spa-clubs-slider mb-2'
                data={data}
                sliderId='spa-clubs-slider'
                breakpoints={breakpoints}
                {...carouselProps2}
              >
                {[...sliderGroupData].map((el, index) => (
                  <SwiperSlide
                    key={index}
                    className='overflow-hidden rounded-xl'
                  >
                    <img
                      className='w-full h-56 sm:h-full max-h-56 object-cover'
                      src={el}
                      alt=''
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </>
          ) : null}
        </div>
      )}
    </Section>
  );
}

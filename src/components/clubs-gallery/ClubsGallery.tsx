import React, { useContext } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import { CityContext } from '../../context/CityContext';
import { ALL_GALLERY_DATA_SPB } from './data/dataSpb';
import { ROUTES } from '../../utils/routes';
import { ALL_GALLERY_DATA_SAMARA } from './data/dataSam';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles.css';
import { Scroll } from '../icons';

interface ClubsGalleryProps {
  title: string;
}

export default function ClubsGallery({ title }: ClubsGalleryProps) {
  const CITY_NAME = useContext(CityContext).city;
  const getDataList = () => {
    if (CITY_NAME === ROUTES.HOME.NAME) {
      return [ALL_GALLERY_DATA_SAMARA].filter(
        (val) => val.city === CITY_NAME,
      )[0].list;
    } else if (CITY_NAME === ROUTES.SPB.NAME) {
      return [ALL_GALLERY_DATA_SPB].filter((val) => val.city === CITY_NAME)[0]
        .list;
    }
  };
  const data = getDataList();

  const matches = useMediaQuery('(min-width: 567px)');

  const sliderMainData = data?.find((el: any) => el.name === 'main')?.arrayData;
  const sliderPoolData = data?.find((el: any) => el.name === 'pool')?.arrayData;
  const sliderGymData = data?.find((el: any) => el.name === 'gym')?.arrayData;
  const sliderSpaData = data?.find((el: any) => el.name === 'spa')?.arrayData;
  const sliderGroupData = data?.find(
    (el: any) => el.name === 'group',
  )?.arrayData;

  const breakpoints = {
    320: {
      slidesPerView: 1.2,
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
    <Section
      styleWrapper='bg-porcelain-50 px-0 clubsGallery'
      styleInner='relative'
    >
      {title && (
        <SectionTitle as='h3' styles='px-4 xl:px-0 text-center md:text-left'>
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
        <div className='-mt-9 md:mt-0'>
          {sliderPoolData && [...sliderPoolData].length > 0 ? (
            <div className='relative'>
              <div className='p-4 pl-0 mb-1 mt-2 text-md font-semibold'>
                <span className='text-curious-blue-500'>
                  Просторный бассейн{' '}
                </span>
                для спортивного и расслабленного плавания
              </div>
              <Scroll className='w-8 h-8 absolute top-5 right-0 text-picton-blue-500' />
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
                      className='w-full h-48 md:h-56 sm:h-full max-h-56 object-cover'
                      src={el}
                      alt=''
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </div>
          ) : null}

          {sliderGymData && [...sliderGymData].length > 0 ? (
            <div className='relative'>
              <div className='p-4 pl-0 mb-1 mt-2 font-semibold text-base'>
                Профессионально оборудованный и 
                <span className='text-curious-blue-500'>
                  {' '}
                  современный тренажёрный зал{' '}
                </span>
              </div>
              <Scroll className='w-8 h-8 absolute top-5 right-0 text-picton-blue-500' />
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
                      width='640px'
                      height='427px'
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </div>
          ) : null}

          {sliderSpaData && [...sliderSpaData].length > 0 ? (
            <div className='relative'>
              <div className='p-4 pl-0 mb-1 mt-2 text-md font-semibold'>
                <span className='text-curious-blue-500'>Спа-комплекс </span>
                <br />
                финская, русская, турецкая, инфракрасная сауны и соляная комната
              </div>
              <Scroll className='w-8 h-8 absolute top-5 right-0 text-picton-blue-500' />
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
                      width='640px'
                      height='427px'
                    />
                  </SwiperSlide>
                ))}
              </CarouselBaseSwiper>
            </div>
          ) : null}

          {sliderGroupData && [...sliderGroupData].length > 0 ? (
            <div className='relative'>
              <div className='p-4 pl-0 mb-1 mt-2 text-md font-semibold'>
                Разнообразные групповые уроки
                <br />
                <span className='text-curious-blue-500'>
                  растяжка, гимнастика, силовые, аквааэробика
                </span>
              </div>
              <Scroll className='w-8 h-8 absolute top-5 right-0 text-picton-blue-500' />
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
            </div>
          ) : null}
        </div>
      )}
    </Section>
  );
}

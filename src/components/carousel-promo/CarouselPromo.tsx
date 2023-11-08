import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import { ICarouselPromoProps } from '../../types';
import { CityContext } from '../../context/CityContext';
import { PROMO_CAROUSEL_SAMARA } from './data/dataSam';
import { PROMO_CAROUSEL_SPB } from './data/dataSpb';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';
import Spinner from '../spinner/Spinner';

import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { getDataList } from '../../utils/constants';

export default function CarouselPromo({ styles }: ICarouselPromoProps) {
  const CITY_NAME = useContext(CityContext).city;

  const dataCity = getDataList(
    CITY_NAME,
    PROMO_CAROUSEL_SAMARA,
    PROMO_CAROUSEL_SPB,
  );

  const data = [dataCity].filter((val: any) => val.city === CITY_NAME)[0].list;

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
    effect: 'fade',
    autoHeight: true,
    loop: true,
    modules: [Navigation, Pagination, EffectFade, Autoplay],
  };

  const handleClick = (e: any) => {
    const position = e.currentTarget?.href.indexOf('#');
    const el = e.currentTarget?.href.slice(position + 1);
    document
      .querySelector('[id="' + el + '"]')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {data && [...data].length > 0 ? (
        <CarouselBaseSwiper
          wrapperClass={styles}
          data={data}
          sliderId='promo-slider'
          breakpoints={breakpoints}
          {...carouselProps}
        >
          {data &&
            [...data].map((el: any, index) => (
              <SwiperSlide
                key={index}
                className='flex flex-wrap items-end h-full slide'
              >
                <div className='w-full sm:w-3/5 text-center sm:text-left p-4 sm:pl-20 sm:py-20'>
                  {el?.content}
                  <Link
                    to={el.url}
                    className='inline-flex p-3 px-10 xl:px-20 font-bold text-xl bg-white-50 rounded-3xl'
                    style={{ backgroundImage: `url(${el})` }}
                    onClick={handleClick}
                  >
                    Купить
                  </Link>
                </div>
                <div className='w-full h-4/5 lg:h-auto mt-auto sm:w-2/5 slide-pic flex flex-col'>
                  <img
                    src={el?.bg}
                    alt=''
                    className='w-full h-full object-fill -mb-20  lg:-mb-10'
                    width='622'
                    height='641'
                  />
                </div>
              </SwiperSlide>
            ))}
        </CarouselBaseSwiper>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <Spinner />
        </div>
      )}
    </>
  );
}

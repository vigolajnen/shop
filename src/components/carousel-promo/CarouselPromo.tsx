import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import { ICarouselPromoProps } from '../../types';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import Spinner from '../spinner/Spinner';

export default function CarouselPromo({ data, styles }: ICarouselPromoProps) {
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
    // autoplay: {
    //   delay: 5000,
    // },
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
            [...data].map((el, index) => (
              <SwiperSlide key={index} className=''>
                <picture className='w-full h-full block'>
                  <source media='(min-width: 620px)' srcSet={el.desktop} />
                  <img className='w-full h-full' src={el.mobile} alt='' />
                </picture>
                <Link
                  to={el.url}
                  className='block absolute bottom-16 sm:bottom-10 xl:bottom-20 left-4 sm:left-32 xl:left-52 p-3 px-10 xl:px-20 font-bold text-xl bg-white-50 rounded-3xl'
                  style={{ backgroundImage: `url(${el})` }}
                  onClick={handleClick}
                >
                  Купить
                </Link>
              </SwiperSlide>
            ))}
        </CarouselBaseSwiper>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
}

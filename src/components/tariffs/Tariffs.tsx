import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import { useModal } from '../../hooks/useModal';
import { ITariffsProps } from '../../types';
import TariffItem from '../tariff-item/TariffItem';
import Section from '../../UI/section/Section';
import SectionTitle from '../../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';


import 'swiper/css/scrollbar';
import './styles.css';


export default function Tariffs({ title, data, count }: ITariffsProps) {
  const { openModal } = useModal();
  const matches = useMediaQuery('(min-width: 464px)');

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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const carouselProps = {
    slidesPerView: 3,
    modules: [Scrollbar],
  };

  return (
    <Section
      id='tariffs'
      styleWrapper='tariffs relative overflow-hidden bg-curious-blue-500'
      styleInner='max-w-screen-xl overflow-hidden'
    >
      {title && (
        <SectionTitle as='h3' styles='text-center text-white sm:mb-10'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        count && count > 2 ? (
          <CarouselBaseSwiper
            wrapperClass='tariffs-slider'
            data={data}
            sliderId='tariffs-slider'
            breakpoints={breakpoints}
            count={count}
            {...carouselProps}
          >
            {[...data].map((el) => (
              <SwiperSlide key={el.id}>
                <TariffItem data={el} onClick={openModal} />
              </SwiperSlide>
            ))}
          </CarouselBaseSwiper>
        ) : (
          <div className='w-full overflow-y-auto flex flex-wrap sm:flex-nowrap justify-center py-4'>
            {[...data].map((el) => (
              <TariffItem key={el.id} data={el} onClick={openModal} />
            ))}
          </div>
        )
      ) : (
        <div className='w-full overflow-y-auto flex flex-wrap sm:flex-nowrap justify-center py-4'>
          {[...data].map((el) => (
            <TariffItem key={el.id} data={el} onClick={openModal} />
          ))}
        </div>
      )}
    </Section>
  );
}

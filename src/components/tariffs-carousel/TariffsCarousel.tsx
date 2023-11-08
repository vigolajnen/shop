import React, { useContext } from 'react';
import { Scroll } from '../icons';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';
import { BREAKPOINTS } from '../tariffs/data/constants';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import { CityContext } from '../../context/CityContext';
import { LIST_TARIFFS_SAMARA } from '../tariffs/data/dataSam';
import { LIST_TARIFFS_SPB } from '../tariffs/data/dataSpb';
import { getDataList } from '../../utils/constants';
import TariffItem from '../tariff-item/TariffItem';

import 'swiper/css/scrollbar';

const carouselProps = {
  slidesPerView: 3,
  modules: [Scrollbar],
};

export default function TariffsCarousel() {
  const CITY_NAME = useContext(CityContext).city;
  const data = getDataList(CITY_NAME, LIST_TARIFFS_SAMARA, LIST_TARIFFS_SPB);

  return (
    <>
      <Scroll className='xl:hidden w-8 h-8 absolute top-5 right-0 text-white-50' />
      <CarouselBaseSwiper
        wrapperClass='tariffs-slider'
        data={data}
        sliderId='tariffs-slider'
        breakpoints={BREAKPOINTS}
        count={data?.length}
        {...carouselProps}
      >
        {data?.map((el: any) => (
          <SwiperSlide key={el.id} className='h-auto'>
            <TariffItem data={el} />
          </SwiperSlide>
        ))}
      </CarouselBaseSwiper>
    </>
  );
}

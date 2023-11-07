import React, { useContext } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import { useModal } from '../../hooks/useModal';
import { ITariffsProps } from '../../types';
import TariffItem from '../tariff-item/TariffItem';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';
import CarouselBaseSwiper from '../carousel-base-swiper/CarouselBaseSwiper';

import 'swiper/css/scrollbar';
import './styles.css';
import { Scroll } from '../icons';
import { BREAKPOINTS } from './data/constants';
import { CityContext } from '../../context/CityContext';
import { ROUTES } from '../../utils/routes';
import { LIST_TARIFFS_SAMARA } from './data/dataSam';
import { LIST_TARIFFS_SPB } from './data/dataSpb';

export default function Tariffs({ title }: ITariffsProps) {
  const { openModal } = useModal();
  const matches = useMediaQuery('(min-width: 464px)');
  const CITY_NAME = useContext(CityContext).city;
  const getDataList = () => {
    if (CITY_NAME === ROUTES.HOME.NAME) {
      return LIST_TARIFFS_SAMARA;
    } else if (CITY_NAME === ROUTES.SPB.NAME) {
      return LIST_TARIFFS_SPB;
    }
  };
  const data = getDataList();

  const COUNT = data?.length;

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
        <SectionTitle as='h3' styles='text-center text-white'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        COUNT && COUNT > 2 ? (
          <div>
            <Scroll className='xl:hidden w-8 h-8 absolute top-5 right-0 text-white-50' />
            <CarouselBaseSwiper
              wrapperClass='tariffs-slider'
              data={data}
              sliderId='tariffs-slider'
              breakpoints={BREAKPOINTS}
              count={COUNT}
              {...carouselProps}
            >
              {data.length > 0 && data?.map((el) => (
                <SwiperSlide key={el.id} className='h-auto'>
                  <TariffItem data={el} onClick={openModal} />
                </SwiperSlide>
              ))}
            </CarouselBaseSwiper>
          </div>
        ) : (
          <div className='w-full overflow-y-auto flex flex-wrap sm:flex-nowrap justify-center md:py-4'>
            {data?.map((el) => (
              <TariffItem key={el.id} data={el} onClick={openModal} />
            ))}
          </div>
        )
      ) : (
        <div className='w-full overflow-y-auto flex flex-wrap sm:flex-nowrap justify-center md:py-4'>
          {data?.map((el) => (
            <TariffItem key={el.id} data={el} onClick={openModal} />
          ))}
        </div>
      )}
    </Section>
  );
}

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import Scroll from '../../images/icons/scroll.svg?react';
import Carousel from '../UI/carousel/Carousel';
import CityTariff from '../city-tariff/CityTariff';

// interface ICityTariff {
//   id: number;
//   type: string;
//   price: string;
//   clubs: string[];
//   city: string;
//   isPool: boolean;
// }

// interface ICityTariffs {
//   data: ICityTariff[];
// }

const CityTariffsCarousel: FC<any> = ({ data }) => {
  const list = data;
  console.log('list', list);
  const carouselProps = {
    slidesPerView: 3,
    spaceBetween: 3,
    modules: [Scrollbar],
    className: 'flex',
  };

  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Scroll className="xl:hidden block max-w-[30px] w-16 h-16 text-white absolute top-5 right-0" />
      <Carousel
        id="carousel-tariffs"
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {list?.map((el: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col h-auto">
            <CityTariff data={el} />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
};

export default CityTariffsCarousel;

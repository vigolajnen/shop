import { FC } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import IconTouch from '../../images/icons/icon-touch.svg?react';
import Carousel from '../UI/carousel/Carousel';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface IClubsGalleryZone {
  zone: string;
  data: string[];
  children?: React.ReactNode;
}

const ClubsGalleryZone: FC<IClubsGalleryZone> = ({ zone, data, children }) => {
  const breakpoints = {
    320: {
      slidesPerView: 1.2,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
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
    slidesPerView: 3,
    scrollbar: {
      draggable: true,
      hide: true,
    },
    navigation: true,
    modules: [Scrollbar, Navigation],
  };
  return (
    <div>
      <div className="flex gap-5">
        {children}
        <div data-zone={zone} className="sm:hidden block max-w-[30px] relative">
          <IconTouch className="max-w-[30px] w-16 h-16 text-primary stroke-primary stroke-1 fill-none" />
        </div>
      </div>
      <Carousel
        id={`clubs-slider-${zone}`}
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {Boolean(data) && [...data].length > 0
          ? [...data].map((el, index) => (
              <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                <img
                  className="w-full h-56 sm:h-full max-h-56 object-cover"
                  src={el}
                  alt=""
                />
              </SwiperSlide>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default ClubsGalleryZone;

import { SwiperSlide } from 'swiper/react';

import Carousel from '../UI/carousel/Carousel';
import ClubsServicesItem from './ClubsServicesItem';
import Scroll from '../../images/icons/scroll.svg?react';
import { CONTENT_LIST } from './data';

const ClubsServicesCarousel = () => {
  const data = CONTENT_LIST.filter(el => el.isPool === true)[0].list;
  const carouselProps = {
    slidesPerView: 3,
  };
  const breakpoints = {
    320: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.75,
      spaceBetween: 20,
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

  return (
    <>
      <Scroll className="xl:hidden w-8 h-8 absolute top-3 right-0" />
      <Carousel
        id="clubs-services-slider"
        breakpoints={breakpoints}
        {...carouselProps}
      >
        {Boolean(data) && [...data].length > 0
          ? [...data].map((el, index) => (
              <SwiperSlide key={index} className="overflow-hidden rounded-4xl">
                <ClubsServicesItem data={el} />
              </SwiperSlide>
            ))
          : null}
      </Carousel>
    </>
  );
};

export default ClubsServicesCarousel;

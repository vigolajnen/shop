import React, { FC, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import Carousel from '../UI/carousel/Carousel';
import Spinner from '../UI/spinner/Spinner';

import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

interface IPicture {
  sm: string;
  lg: string;
  xl: string;
}

interface PromoCarouselProps {
  data: IPicture[];
}

const PromoCarousel: FC<PromoCarouselProps> = forwardRef((props, ref) => {
  const { data } = props;
  const breakpoints = {
    320: {
      slidesPerView: 1,
      freeMode: true,
    },
  };

  const carouselProps = {
    navigation: true,
    pagination: {
      clickable: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'fade',
    autoHeight: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    // onSlideChange: (ref: any) => {
    //   const i = ref.activeIndex;
    //   if (i === 0) {
    //     ref.el.parentElement.setAttribute(
    //       'style',
    //       'background-color: #0f6395;',
    //     );
    //   } else if (i === 1) {
    //     ref.el.parentElement.setAttribute(
    //       'style',
    //       'background-color: #383b41;',
    //     );
    //   } else if (i === 2) {
    //     ref.el.parentElement.setAttribute(
    //       'style',
    //       'background-color: #0d2d44;',
    //     );
    //   } else if (i === 3) {
    //     ref.el.parentElement.setAttribute(
    //       'style',
    //       'background-color: #0f6395;',
    //     );
    //   }

    //   // console.log(ref);
    // },
    className: 'max-w-screen-2xl mx-auto',
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const position = e.currentTarget?.href.indexOf('#');
    const el = e.currentTarget?.href.slice(position + 1);
    document
      .querySelector(`[id="${el}"]`)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full overflow-hidden promo bg-primary">
      {Boolean(data) && [...data].length > 0 ? (
        <Carousel
          id="promo-carousel"
          breakpoints={breakpoints}
          {...carouselProps}
          ref={ref}
        >
          {[...data].map((el: IPicture, i: number) => (
            <SwiperSlide
              key={i}
              className="flex flex-wrap items-end swiper-slide"
            >
              <Link
                to="#tariffs"
                onClick={handleClick}
                className="w-full h-full"
              >
                <picture className="w-full h-full">
                  <source
                    media="(min-width: 2000px)"
                    srcSet={el.xl}
                    width={1465}
                    height={680}
                  />
                  <source
                    media="(min-width: 700px)"
                    srcSet={el.lg}
                    width={1440}
                    height={800}
                  />
                  <img
                    src={el.sm}
                    className="w-full h-full"
                    width={500}
                    height={600}
                    alt=""
                  />
                </picture>
              </Link>
            </SwiperSlide>
          ))}
        </Carousel>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Spinner />
        </div>
      )}
    </section>
  );
});

PromoCarousel.displayName = 'PromoCarousel';

export default PromoCarousel;

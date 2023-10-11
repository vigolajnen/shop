import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './styles.css';

// import { ICarouselBaseProps } from '../../types';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 3,
  },
  tablet3: {
    breakpoint: { max: 1100, min: 900 },
    items: 2.5,
  },
  tablet2: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 600, min: 464 },
    items: 1.5,
    slidesToSlide: 1,
  },
};
export default function CarouselTariff({children}: any) {
  return (
    <>
      <Carousel responsive={responsive} centerMode={false}>
        {children}
      </Carousel>
    </>
  )
}

import { useRef } from 'react';
import { Swiper } from 'swiper/react';

import { ICarouselProps } from '../../../models';

import 'swiper/css';

export default function Carousel({
  id,
  children,
  breakpoints,
  ...props
}: ICarouselProps) {
  const ref = useRef(null);

  return (
    <Swiper
      effect={'fade'}
      onSlideChange={() => {}}
      id={id}
      breakpoints={breakpoints}
      {...props}
      ref={ref}
    >
      {children}
    </Swiper>
  );
}

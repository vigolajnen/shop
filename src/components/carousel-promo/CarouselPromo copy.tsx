import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

import { Link } from 'react-router-dom';
import { ICarouselPromoProps } from '../../types';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselPromo({ data, styles, onClick }: ICarouselPromoProps) {
  return (
    <>
      <Carousel
        responsive={responsive}
        draggable={false}
        arrows={true}
        showDots={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        className={styles}
      >
        {[...data].map((el, index) => (
          <Link
            to='#tariffs'
            className='w-full h-full block'
            key={index}
            style={{ backgroundImage: `url(${el})` }}
            onClick={onClick}
          >
            <picture className='w-full h-full'>
              <source media="(min-width: 769)" srcSet={el} />
              <img className='w-full h-full' src={el} alt='' />
            </picture>
            
          </Link>
        ))}
      </Carousel>
    </>
  );
}

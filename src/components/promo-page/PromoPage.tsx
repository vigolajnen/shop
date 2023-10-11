import React, { MouseEvent } from 'react';

import { IPromoData } from '../../types';

import './styles.css';

import CarouselPromo from '../carousel-promo/CarouselPromo';

export default function PromoPage({ data }: IPromoData) {
  const handleClick = (e: any) => {
    const position = e.currentTarget?.href.indexOf('#');
    const el = e.currentTarget?.href.slice(position + 1);
    document.querySelector('[id="' + el + '"]')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='w-full h-full overflow-hidden promo'>
      <CarouselPromo
        data={data}
        styles='max-w-screen-xl mx-auto h-full'
        onClick={handleClick}
      />
    </div>
  );
}

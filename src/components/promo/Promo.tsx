import React from 'react';

import { IPromoData } from '../../types';
import CarouselPromo from '../carousel-promo/CarouselPromo';

import './styles.css';

export default function Promo({ data }: IPromoData) {
  return (
    <div className='w-full h-full overflow-hidden promo bg-curious-blue-500'>
      <CarouselPromo data={data} styles='max-w-screen-xl mx-auto h-full' />
    </div>
  );
}

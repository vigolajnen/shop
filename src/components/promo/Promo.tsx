import React from 'react';

import CarouselPromo from '../carousel-promo/CarouselPromo';

import './styles.css';

export default function Promo() {
  return (
    <div className='w-full h-full overflow-hidden promo bg-curious-blue-500'>
      <CarouselPromo styles='max-w-screen-xl mx-auto h-full' />
    </div>
  );
}

import React from 'react';
import { TARIFF_LIST } from '../tariff-item/data';
import { IconCheckCircle } from '../icons';

export default function TariffList() {
  return (
    <ul className='pt-4 md:pt-8'>
      {[...TARIFF_LIST].map((el) => (
        <li key={el} className='flex items-baseline mb-2 relative'>
          <IconCheckCircle
            width={17}
            height={16}
            className='absolute left-0 top-0 w-5 md:w-6 h-4 md:h-5'
          />
          <span className='w-full pb-1 pl-6 md:pl-8 text-sm md:text-md'>{el}</span>
        </li>
      ))}
    </ul>
  );
}

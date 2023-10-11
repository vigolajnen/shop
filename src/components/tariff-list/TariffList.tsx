import React from 'react';
import { TARIFF_LIST } from '../tariff-item/data';
import { IconCheckCircle } from '../icons';

export default function TariffList() {
  return (
    <ul className='pt-8'>
      {[...TARIFF_LIST].map((el) => (
        <li key={el} className='flex items-baseline mb-2 relative'>
          <IconCheckCircle
            width={16}
            height={16}
            className='absolute left-0 -top-1 xl:top-0 sm:top-0.5 w-6 h-5'
          />
          <span className='w-full p-1 pl-8 pt-0'>{el}</span>
        </li>
      ))}
    </ul>
  );
}

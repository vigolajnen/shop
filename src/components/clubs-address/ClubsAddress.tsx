import React, { useContext } from 'react';
import { IconPin } from '../icons';
import { CityContext } from '../../context/CityContext';

export default function ClubsAddress() {
  const data = useContext(CityContext).clubs;
  return (
    <ul className='flex flex-wrap grow px-4 py-6 sm:py-0 md:max-w-screen-sm'>
      {data.length > 0 &&
        [...data].map((el, index) => (
          <li
            key={index}
            className='flex grow text-white items-center w-full sm:w-1/2'
          >
            <IconPin width={20} height={26} className='w-4 h-5 md:w-5 md:h-7' />
            <span className='p-2 grow w-2/3'>{el.address}</span>
          </li>
        ))}
    </ul>
  );
}

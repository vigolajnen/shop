import React from 'react';
import { IClubsAddressProps } from '../../types';
import { IconPin } from '../icons';

export default function ClubsAddress({ data }: IClubsAddressProps) {
  return (
    <ul className="flex flex-wrap grow px-4 py-6 sm:py-0 md:max-w-screen-sm">
      {[...data].map((el) => (
        <li key={el.id} className="flex grow text-white items-center w-full sm:w-1/2">
          <IconPin width={20} height={26} className="w-4 h-5 md:w-5 md:h-7" />
          <span className="p-2 grow w-2/3">{el.address}</span>
        </li>
      ))}
    </ul>
  );
}

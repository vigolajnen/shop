import React from 'react';
import { IClubsAddressProps } from '../../types';
import { IconPin } from '../icons';

export default function ClubsAddress({ data }: IClubsAddressProps) {
  return (
    <ul className="flex flex-wrap grow px-4 pt-4 sm:pt-0">
      {[...data].map((el) => (
        <li key={el.id} className="flex grow text-white items-center w-full sm:w-1/2">
          <IconPin width={20} height={26} />
          <span className="p-2 grow w-2/3">{el.address}</span>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import { ITariffClubsInfoProps } from '../../types';

export default function TariffClubsInfo({
  type,
  mc,
  clubs,
}: ITariffClubsInfoProps) {
  return (
    <div className="my-4">
      <p>
        {type === 'morning' &&
          !mc &&
          'Тариф дает возможность посещать 1 клуб до 17:00'}
        {type === 'full' && !mc && 'Тариф дает возможность посещать 1 клуб'}
        {type === 'full' &&
          mc &&
          `Тариф дает возможность посещать  ${[...clubs].length} клуба`}
      </p>
      <ul className='my-2 list-disc pl-4'>
        {[...clubs].map((club: any, index: number) => (
          <li key={index}>{club.address}</li>
        ))}
      </ul>
    </div>
  );
}

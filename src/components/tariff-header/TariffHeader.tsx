import React from 'react';
import { ITariffItemHeaderProps } from '../../types';
import { IconCheck, IconCrownsvg, IconSun } from '../icons';

import './styles.css';

export default function TariffHeader({ type, mc }: ITariffItemHeaderProps) {
  return (
    <div className='bg-lemon-chiffon-300 border-mako-100 flex flex-wrap px-2 sm:px-4 py-2 w-full rounded-full text-sm bg-yellow-100 border-2 border-yellow-200'>
      {type === 'morning' && !mc && (
        <>
          <IconSun
            width={36}
            height={36}
            className='mr-2 sm:mr-4 my-auto w-6 sm:w-10'
          />
          <div className='w-2/3 grow'>
            <div>Утренний в 1 клуб</div>
            <div>Посещение 7:00-17:00</div>
          </div>
        </>
      )}
      {type === 'full' && !mc && (
        <>
          <IconCheck
            width={36}
            height={36}
            className='mr-2 sm:mr-4 my-auto w-6 sm:w-10'
          />
          <div className='w-2/3 grow'>
            <div>Весь день в 1 клуб</div>
            <div>Посещение 7:00-23:00</div>
          </div>
        </>
      )}
      {type === 'full' && mc && (
        <>
          <IconCrownsvg
            width={36}
            height={36}
            className='mr-2 sm:mr-4 my-auto w-6 sm:w-10'
          />
          <div className='w-2/3 grow'>
            <div>Весь день во все клубы</div>
            <div>Посещение 7:00-23:00</div>
          </div>
        </>
      )}
    </div>
  );
}

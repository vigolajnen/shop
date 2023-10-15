import React from 'react';
import {
  CONTRIBUTION,
  END_DATE_SALE,
  OLD_CONTRIBUTION,
  TEXT_SUBSCRIPTION_TOOLTIP,
} from '../tariffs/data/constants';
import { IconInformation } from '../icons';

export default function TariffMembership() {
  return (
    <div className='my-2 mb-4 md:my-4 md:mb-6 text-sm md:text-base font-medium'>
      *при оплате Членского взноса <span> {CONTRIBUTION} </span> р. (старая цена{' '}
      <del> {OLD_CONTRIBUTION} </del> р.). Акция действует только до{' '}
      {END_DATE_SALE}
      <div className='relative inline-flex flex-col ml-1 items-center group'>
        <IconInformation width={18} height={18} />
        <div className='absolute bottom-0 left-0 md:left-auto md:right-0 flex-col items-center hidden mb-6 group-hover:flex'>
          <span className='relative z-10 p-2 md:p-4 text-md leading-none text-white-800 whitespace-no-wrap bg-white-100 shadow-lg rounded-md w-60 max-w-full text-center'>
            {TEXT_SUBSCRIPTION_TOOLTIP}
          </span>
        </div>
      </div>
    </div>
  );
}

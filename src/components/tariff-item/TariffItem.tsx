import React from 'react';
import { ITariffItemProps } from '../../types';
import {
  CONTRIBUTION,
  END_DATE_SALE,
  OLD_CONTRIBUTION,
  TEXT_SUBSCRIPTION_TOOLTIP,
  formatPrice,
} from '../tariffs/data/constants';
import { IconCheckCircle, IconInformation } from '../icons';
import TariffHeader from '../tariff-header/TariffHeader';
import TariffClubsInfo from '../tariff-clubs-info/TariffClubsInfo';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';
import { ROUTES } from '../../utils/routes';

export default function TariffItem({ data, onClick }: ITariffItemProps) {
  const location = useLocation();
  const arrayList = [
    'Тренажерный зал',
    'Бассейн',
    'Групповые программы',
    'Спа-комплекс',
    'Индивидуальные шкафчики',
    'Персональный браслет Члена клуба',
    'Питьевая вода',
  ];
  const btnClassListActive =
    'btn tariff-btn-bg block p-4 w-full rounded-full text-center font-bold uppercase text-white';

  const btnClassList =
    'btn tariff-btn-bg-outline block p-4 w-full rounded-full text-center font-bold uppercase text-white';

  return (
    <section className='tariff w-full sm:mx-4 my-4 p-6 sm:p-8 rounded-3xl shadow-lg bg-white'>
      <TariffHeader type={data.type} mc={data.mc} />

      <h3 className='my-4 text-xl sm:text-2xl font-bold'>{data.name}</h3>

      <div className='font-bold'>
        <span className='text-4xl sm:text-5xl'>
          {formatPrice(data.product.product_price)}
          <sup>*</sup>
        </span>
        <span className='px-1 text-xl'>₽/месяц</span>
      </div>

      <TariffClubsInfo type={data.type} mc={data.mc} clubs={data.clubs} />

      <div className='my-4 mb-6'>
        *при оплате Членского взноса <span> {CONTRIBUTION} </span> р. (старая
        цена <del> {OLD_CONTRIBUTION} </del> р.). Акция действует только до{' '}
        {END_DATE_SALE}
        <div className='relative inline-flex flex-col ml-1 mt-2 items-center group'>
          <IconInformation width={18} height={18} />
          <div className='absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex'>
            <span className='relative z-10 p-2 text-md leading-none text-white-800 whitespace-no-wrap bg-white-50 shadow-lg rounded-md w-60 max-w-full text-center'>
              {TEXT_SUBSCRIPTION_TOOLTIP}
            </span>
          </div>
        </div>
      </div>

      {location.pathname === ROUTES.SPB ? (
       
        <Link
          onClick={onClick}
          to={`${ROUTES.SPB}/${data.id}`}
          state={{ tariff: data, bgTariffSpb: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      ) : (
        <Link
          onClick={onClick}
          to={`/${data.id}`}
          state={{ tariff: data, bgTariffSamara: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      )}

      <ul className='pt-8'>
        {[...arrayList].map((el) => (
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
    </section>
  );
}

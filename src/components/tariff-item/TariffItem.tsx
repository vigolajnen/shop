import React from 'react';

import { ITariffItemProps } from '../../types';
import { formatPrice } from '../tariffs/data/constants';

import TariffHeader from '../tariff-header/TariffHeader';
import TariffClubsInfo from '../tariff-clubs-info/TariffClubsInfo';
import TariffMembership from '../tariff-membership/TariffMembership';
import TariffLinkPay from '../tariff-link-pay/TariffLinkPay';
import TariffList from '../tariff-list/TariffList';

import './styles.css';

export default function TariffItem({ data, onClick }: ITariffItemProps) {
  return (
    <section className='tariff relative z-10 w-full sm:mx-4 my-4 p-6 sm:p-8 rounded-3xl shadow-lg bg-white'>
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

      <TariffMembership />

      <TariffLinkPay data={data} onClick={onClick} />

      <TariffList />
    </section>
  );
}

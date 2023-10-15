import React from 'react';
import TariffItemStyles from './TariffItemStyles.module.css';
import { ITariffItemProps } from '../../types';
import { formatPrice } from '../tariffs/data/constants';

import TariffHeader from '../tariff-header/TariffHeader';
import TariffClubsInfo from '../tariff-clubs-info/TariffClubsInfo';
import TariffMembership from '../tariff-membership/TariffMembership';
import TariffLinkPay from '../tariff-link-pay/TariffLinkPay';
import TariffList from '../tariff-list/TariffList';

export default function TariffItem({ data, onClick }: ITariffItemProps) {
  const wrapperClassList =
    'relative z-10 w-full mb-4 sm:mx-4 sm:my-4 md:my-0 p-6 sm:p-6 rounded-3xl shadow-lg bg-white';
  return (
    <section className={`${TariffItemStyles.tariff} ${wrapperClassList}`}>
      <TariffHeader type={data.type} mc={data.mc} />

      <h3 className={`${TariffItemStyles.name} my-2 mt-3 md:my-4`}>{data.name}</h3>

      <div className='font-bold'>
        <span className={TariffItemStyles.price}>
          {formatPrice(data.product.product_price)}
          <sup className={TariffItemStyles.star}>*</sup>
        </span>
        <span className={`${TariffItemStyles.val} px-1`}>₽/месяц</span>
      </div>

      <TariffClubsInfo type={data.type} mc={data.mc} clubs={data.clubs} />

      <TariffMembership />

      <TariffLinkPay data={data} onClick={onClick} />

      <TariffList />
    </section>
  );
}

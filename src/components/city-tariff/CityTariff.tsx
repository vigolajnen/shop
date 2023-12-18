import { FC } from 'react';

import CityTariffHeader from './CityTariffHeader';
import CityTariffClubsList from './CityTariffClubsList';
import CityTariffTooltipInfo from './CityTariffTooltipInfo';
import CityTariffInfoList from './CityTariffInfoList';
import CityTariffButton from './CityTariffButton';
import { formatPrice } from '../../utils/content';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from '../error-message/ErrorMessage';

// interface ICityTariff {
//   city: string;
//   id: number;
//   type: string;
//   price: string;
//   clubs: string[];
//   isPool: Boolean;
// }

// interface ICityTariffData {
//   data: ICityTariff;
// }

const CityTariff: FC<any> = ({ data }) => {
  const { type, price, city, isPool } = data;
  console.log('data', data);
  if (!type) {
    throw new Error('Нет значения параметра type');
  }

  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <section className="relative z-10 w-full h-full flex flex-col  p-6 sm:p-6 rounded-3xl shadow-lg bg-product-1 text-product-2 text-left">
        <CityTariffHeader type={type} />
        <h3 className="mb-2 text-xl md:text-2xl font-bold text-center uppercase">
          Подписка
        </h3>
        <div className="my-2 font-bold text-[3rem] content-normal text-center">
          {formatPrice(price)}
          <span className="font-normal text-sm"> р./месяц</span>
        </div>
        <CityTariffClubsList data={data} type={type} city={city} />
        <CityTariffTooltipInfo type={type} />
        <CityTariffButton data={data} />
        <CityTariffInfoList isPool={isPool} />
      </section>
    </ErrorBoundary>
  );
};

export default CityTariff;

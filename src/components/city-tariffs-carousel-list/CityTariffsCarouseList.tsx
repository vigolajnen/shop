import { FC } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import CityTariffsCarousel from '../city-tariffs-carousel/CityTariffsCarousel';
import CityTariffsList from '../city-tariffs-list/CityTariffsList';

// interface ICityTariff {
//   id: number;
//   type: string;
//   price: string;
//   clubs: string[];
//   city: string;
//   isPool: boolean;
//   morningID: string;
//   mcID: string;
//   subscriptionID: string;
//   subscriptionPrice: string;
//   address: string;
//   addressForm: string;
//   name: string;
// }

// interface ICityTariffs {
//   data: ICityTariff[];
//   count: number;
// }

const CityTariffsCarouseList: FC<any> = ({ data, count }) => {
  const matches = useMediaQuery('(min-width: 567px)');
  return (
    <>
      {matches ? (
        count > 2 ? (
          <CityTariffsCarousel data={data} />
        ) : (
          <CityTariffsList data={data} />
        )
      ) : (
        <CityTariffsList data={data} />
      )}
    </>
  );
};

export default CityTariffsCarouseList;

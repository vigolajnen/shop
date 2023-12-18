import { FC } from 'react';
import CityTariff from '../city-tariff/CityTariff';

// interface ICityTariff {
//   id: number;
//   type: string;
//   price: string;
//   clubs: any;
//   city?: string;
//   isPool: boolean;
//   address: string;
//   addressForm: string;
//   name: string;
// }

// interface ICityTariffs {
//   data: ICityTariff[];
// }

const CityTariffsList: FC<any> = ({ data }) => {
  console.log('list', data);
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
      {data.map((el: any, index: number) => (
        <div key={index} className="max-w-[340px]">
          <CityTariff data={el} />
        </div>
      ))}
    </div>
  );
};

export default CityTariffsList;

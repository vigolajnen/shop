import React, { useContext } from 'react';
import TariffItem from '../tariff-item/TariffItem';
import { CityContext } from '../../context/CityContext';
import { LIST_TARIFFS_SAMARA } from '../tariffs/data/dataSam';
import { LIST_TARIFFS_SPB } from '../tariffs/data/dataSpb';
import { getDataList } from '../../utils/constants';

export default function TariffsList() {
  const CITY_NAME = useContext(CityContext).city;
  const data = getDataList(CITY_NAME, LIST_TARIFFS_SAMARA, LIST_TARIFFS_SPB);

  return (
    <div className='w-full overflow-y-auto flex flex-wrap sm:flex-nowrap justify-center md:py-4'>
      {[data].length > 0
        ? data.map((el: any) => <TariffItem key={el.id} data={el} />)
        : null}
    </div>
  );
}

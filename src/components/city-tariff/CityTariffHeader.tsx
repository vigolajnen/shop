import { FC } from 'react';

import IconSun from '../../images/icons/icon-sun.svg?react';
import IconCheck from '../../images/icons/icon-check.svg?react';
import IconCrown from '../../images/icons/icon-crownsvg.svg?react';

interface ICityTariffHeader {
  type: string;
}

const CityTariffHeader: FC<ICityTariffHeader> = ({ type }) => {
  return (
    <div className="flex gap-3 mb-2 items-center p-2 text-left rounded-[30px] bg-h-tariff-1 border-gray-300 border-2 text-[#0E5781] text-base">
      {type === 'morning' ? (
        <>
          <IconSun width={36} height={36} />
          <div>
            <div className="font-bold text-sm md:text-base">
              Утренний в 1 клуб
            </div>
            <div className="uppercase text-xs md:text-sm">
              Посещение до 17:00
            </div>
          </div>
        </>
      ) : type === 'full' ? (
        <>
          <IconCheck width={36} height={36} />
          <div>
            <div className="font-bold text-sm md:text-base">
              Весь день в 1 клуб
            </div>
            <div className="uppercase text-xs md:text-sm">
              Свободное посещение
            </div>
          </div>
        </>
      ) : type === 'mc_full' ? (
        <>
          <IconCrown width={36} height={36} />
          <div>
            <div className="font-bold text-sm md:text-base">
              Весь день, все клубы
            </div>
            <div className="uppercase text-xs md:text-sm ">
              Свободное посещение
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CityTariffHeader;

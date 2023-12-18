import { FC } from 'react';
import { Tooltip } from 'react-tooltip';

import IconInformation from '../../images/icons/icon-information.svg?react';
import {
  CONTRIBUTION,
  END_DATE_SALE,
  OLD_CONTRIBUTION,
  TEXT_SUBSCRIPTION_TOOLTIP,
} from '../../utils/content';

interface ICityTariffTooltipInfo {
  type: string;
}

const CityTariffTooltipInfo: FC<ICityTariffTooltipInfo> = ({ type }) => {
  return (
    <div className="mb-2 text-sm md:text-base font-bold">
      <span className="opacity-60">
        Первоначальный платеж <br /> до {END_DATE_SALE} ВСЕГО {CONTRIBUTION} ₽
        вместо {OLD_CONTRIBUTION} ₽ только в первый месяц
      </span>
      <button
        data-tooltip-id={`tariff-tooltip-${type}`}
        className="button px-2"
        aria-label="Информация по первоначальному платежу"
      >
        <IconInformation width={18} height={18} />
      </button>
      <Tooltip
        id={`tariff-tooltip-${type}`}
        place="top"
        variant="warning"
        content={TEXT_SUBSCRIPTION_TOOLTIP}
        opacity={1}
        style={{
          maxWidth: '250px',
          borderRadius: '20px',
          textAlign: 'center',
          backgroundColor: '#dddddd',
          fontSize: '1rem',
          lineHeight: 'normal',
          color: '#000000',
        }}
      />
    </div>
  );
};

export default CityTariffTooltipInfo;

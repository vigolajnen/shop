import { FC } from 'react';

import IconLi from '../../images/icons/icon-check.svg?react';

interface ICityTariffInfoList {
  isPool: Boolean;
}

const CityTariffInfoList: FC<ICityTariffInfoList> = ({ isPool }) => {
  return (
    <>
      <h3 className="text-center my-2">Что входит в абонемент:</h3>

      {isPool ? (
        <ul className="text-left mt-2">
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">Тренажерный зал</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">
              Бассейн (при наличии бассейна в клубе)
            </span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">Групповые уроки</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">Спа-комплекс</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">Индивидуальные шкафчики</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />
            <span className="flex w-[80%]">Питьевая вода</span>
          </li>
        </ul>
      ) : (
        <ul className="text-left">
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />{' '}
            <span className="flex w-[80%]">Тренажерный зал</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />{' '}
            <span className="flex w-[80%]">Групповые уроки</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />{' '}
            <span className="flex w-[80%]">Спа-комплекс</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />{' '}
            <span className="flex w-[80%]">Индивидуальные шкафчики</span>
          </li>
          <li className="flex gap-2 mb-1">
            <IconLi width={20} height={20} className="w-[20px] h-5" />{' '}
            <span className="flex w-[80%]">Питьевая вода</span>
          </li>
        </ul>
      )}
    </>
  );
};

export default CityTariffInfoList;

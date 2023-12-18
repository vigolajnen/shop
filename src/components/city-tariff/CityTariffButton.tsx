import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { ROUTERS } from '../../utils/routes';

interface ICityTariff {
  city: string;
  id: number;
  type: string;
  price: string;
  clubs: string[];
  isPool: Boolean;
}

interface ICityTariffData {
  data: ICityTariff;
}

const CityTariffButton: FC<ICityTariffData> = ({ data }) => {
  // if (data.isPool === undefined) {
  //   throw new Error('Нет данных по бассейну');
  // }
  console.log('dd', data);
  const { openModal } = useModal();
  const location = useLocation();
  const url = location.pathname;

  const stateData = [
    {
      url: ROUTERS.spb.url,
      state: { tariff: data, spb_tariffBg: location },
    },
    {
      url: ROUTERS.sam.url,
      state: { tariff: data, sam_tariffBg: location },
    },
    {
      url: ROUTERS.yar.url,
      state: { tariff: data, yar_tariffBg: location },
    },
    {
      url: ROUTERS.arh.url,
      state: { tariff: data, arh_tariffBg: location },
    },
    {
      url: ROUTERS.ijk.url,
      state: { tariff: data, ijk_tariffBg: location },
    },
    {
      url: ROUTERS.kzn.url,
      state: { tariff: data, kzn_tariffBg: location },
    },
    {
      url: ROUTERS.nch.url,
      state: { tariff: data, nch_tariffBg: location },
    },
    {
      url: ROUTERS.goj.url,
      state: { tariff: data, goj_tariffBg: location },
    },
    {
      url: ROUTERS.pes.url,
      state: { tariff: data, pes_tariffBg: location },
    },
    {
      url: ROUTERS.ryz.url,
      state: { tariff: data, ryz_tariffBg: location },
    },
    {
      url: ROUTERS.tol.url,
      state: { tariff: data, tol_tariffBg: location },
    },
    {
      url: ROUTERS.tul.url,
      state: { tariff: data, tul_tariffBg: location },
    },
    {
      url: ROUTERS.uly.url,
      state: { tariff: data, uly_tariffBg: location },
    },
  ];

  const onClickLink = () => {
    console.log(data);
    openModal();
  };

  return stateData.map(el => {
    if (el.url === url) {
      return (
        <Link
          key={el?.url}
          to={`${data?.id + 1}`}
          onClick={onClickLink}
          state={el.state}
          className="btn block p-4 mb-2 w-full rounded-full text-center font-bold uppercase bg-primary text-white hover:text-primary hover:bg-white border-2 border-primary"
        >
          Оформить
        </Link>
      );
    } else null;
  });
};

export default CityTariffButton;

import React from 'react';
import { ROUTES } from '../../utils/routes';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.css';
import { useModal } from '../../hooks/useModal';

export default function TariffLinkPay({ data }: any) {
  const { openModal } = useModal();
  const location = useLocation();
  const CITY_PAGE_URL = location.pathname;

  const btnClassListActive = `${styles.btn} 'btn block p-4 w-full rounded-full text-center font-bold uppercase text-white'`;
  const btnClassList = `${styles.btnOutline} 'btn block p-4 w-full rounded-full text-center font-bold uppercase text-white'`;

  return (
    <>
      {CITY_PAGE_URL === ROUTES.SPB.URL ? (
        <Link
          onClick={openModal}
          to={`${ROUTES.SPB.URL}/${data.id}`}
          state={{ tariff: data, bgTariffSpb: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      ) : (
        <Link
          onClick={openModal}
          to={`/${data.id}`}
          state={{ tariff: data, bgTariffSamara: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      )}
    </>
  );
}

import React from 'react'
import { ROUTES } from '../../utils/routes'
import { Link, useLocation } from 'react-router-dom'

export default function TariffLinkPay({ data, onClick }: any) {
  const location = useLocation();
  
  const btnClassListActive =
    'btn tariff-btn-bg block p-4 w-full rounded-full text-center font-bold uppercase text-white';

  const btnClassList =
    'btn tariff-btn-bg-outline block p-4 w-full rounded-full text-center font-bold uppercase text-white';

  return (
    <>
      {location.pathname === ROUTES.SPB ? (
        <Link
          onClick={onClick}
          to={`${ROUTES.SPB}/${data.id}`}
          state={{ tariff: data, bgTariffSpb: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      ) : (
        <Link
          onClick={onClick}
          to={`/${data.id}`}
          state={{ tariff: data, bgTariffSamara: location }}
          className={`${data.id === 2 ? btnClassListActive : btnClassList} `}
        >
          Купить
        </Link>
      )}
    </>
  )
}

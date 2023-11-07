import React from 'react';
import { useLocation, useParams } from 'react-router';
import { LIST_TARIFFS_SAMARA } from '../tariffs/data/dataSam';
import { LIST_TARIFFS_SPB } from '../tariffs/data/dataSpb';
import { ROUTES } from '../../utils/routes';
import Forms from '../forms/Forms';
import FormProvider from '../forms/context';

export default function FormOrderTariff() {
  const { id } = useParams();
  const location = useLocation();
  const PAGE_URL = location.pathname.slice(0, -1);

  const getDataList = () => {
    if (PAGE_URL === ROUTES.HOME.URL) {
      return LIST_TARIFFS_SAMARA;
    } else if (PAGE_URL === `${ROUTES.SPB.URL}/`) {
      return LIST_TARIFFS_SPB;
    }
  };
  const data = getDataList();
  const item = () => data?.find((item) => item.id === Number(id));

  const dataItem = item();

  return (
    <div>
      <FormProvider>
        <Forms item={dataItem} />
      </FormProvider>
    </div>
  );
}

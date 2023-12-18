import { useContext } from 'react';
import { useParams } from 'react-router';

import FormProvider from '../../context/FormContext';
import { CityContext } from '../../context/CityContext';
import { useGetPriceCitiesQuery } from '../../store/reducers/pro.api';
import { getDataCity, getDataSpbClubsTariff } from '../../utils/form';
import FormOrder from '../form-order/FormOrder';

export default function FormOrderTariffTabs() {
  const { id } = useParams();
  const pageCity = useContext(CityContext);
  const { data } = useGetPriceCitiesQuery(pageCity);
  const dataCityActive = getDataCity(data, pageCity);
  const clubs = dataCityActive && dataCityActive.clubs;
  const dataClubsProducts =
    clubs &&
    clubs.map((club: any) => {
      return club.products.filter(
        (el: any) => el.product_type !== 'subscription_recurrent',
      );
    })[0];
  const tariffData: any = [];
  dataClubsProducts &&
    dataClubsProducts?.map((el: any, i: number) =>
      tariffData.push({
        id: i + 1,
        type: el.product_type,
        period: el.product_type,
        title: el.product_name,
        price: el.product_price,
        clubs: [...getDataSpbClubsTariff(clubs, el.product_type)],
      }),
    );

  const item = () => tariffData?.find((item: any) => item.id === Number(id));

  const dataItem = item();

  console.log('dataItem', dataItem);

  return (
    <div>
      <FormProvider>
        <FormOrder item={dataItem} />
      </FormProvider>
    </div>
  );
}

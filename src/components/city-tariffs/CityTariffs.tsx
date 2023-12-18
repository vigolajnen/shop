import { FC, useContext, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Title from '../UI/title/Title';
import CityTariffsCarouseList from '../city-tariffs-carousel-list/CityTariffsCarouseList';
import { useGetPriceCitiesQuery } from '../../store/reducers/pro.api';
import { CityContext } from '../../context/CityContext';
import { getDataCity, getIdVal, getPriceVal } from '../../utils/form';
import Spinner from '../UI/spinner/Spinner';
import Error from '../error/Error';
import ErrorMessage from '../error-message/ErrorMessage';

const CityTariffs: FC = () => {
  const { data, isLoading, isError } = useGetPriceCitiesQuery('');
  const pageCity = useContext(CityContext);

  const pageData = getDataCity(data, pageCity);

  if (!Boolean(pageData)) {
    console.log(pageData, 'нет данных');
  }

  const clubsAddress: any = [];
  const tariffData: any = [];

  const clubs = Boolean(pageData) && pageData.clubs;

  if (Boolean(pageData) && [...clubs].length > 0) {
    for (let i = 0; i < [...clubs].length; i++) {
      const element = [...clubs][i];
      clubsAddress.push({
        id: getIdVal(element.products, 'full'),
        morningID: getIdVal(element.products, 'morning'),
        mcID: getIdVal(element.products, 'mc_full'),
        subscriptionID: getIdVal(element.products, 'subscription_recurrent'),
        subscriptionPrice: getPriceVal(element.products),
        address: element.address,
        addressForm: element.addressForm,
        name: element.name,
        isPool: element.isPool,
      });
    }
  }

  const dataClubsProducts =
    Boolean(pageData) &&
    clubs.map((club: any) => {
      return club.products.filter(
        (el: any) => el.product_type !== 'subscription_recurrent',
      );
    });

  if (Boolean(pageData) && dataClubsProducts.length > 0) {
    dataClubsProducts?.map((c: any) => {
      c?.map((p: any, i: number) =>
        tariffData.push({
          id: i,
          type: p.product_type,
          period: p.product_type,
          title: p.product_name,
          price: p.product_price,
          clubs: clubsAddress,
          countClubs: clubsAddress.length,
          isPool: p.isPool,
        }),
      );
    });
  }

  const mm = tariffData?.filter((el: any) => el.type === 'morning')[0];
  const ff = tariffData?.filter((el: any) => el.type === 'full')[0];
  const mc = tariffData?.filter((el: any) => el.type === 'mc_full')[0];

  const allTariffs: Array<any> = [mm, ff, mc];
  const count = allTariffs.length;

  useEffect(() => {}, []);

  return (
    <>
      <ErrorBoundary
        fallback={
          <ErrorMessage resetErrorBoundary={() => window.location.reload()} />
        }
      >
        <section
          className="bg-primary py-10 md:py-20 px-4 relative"
          id="tariffs"
        >
          <div className="container mx-auto max-w-screen-lg">
            <Title as="h2" align="center" styles="text-white">
              Тарифы
            </Title>
            {isLoading && <Spinner />}
            {isError && <Error />}
            {Boolean(pageData) && allTariffs.length > 0 ? (
              <CityTariffsCarouseList data={[mm, ff, mc]} count={count} />
            ) : null}
          </div>
        </section>
      </ErrorBoundary>
    </>
  );
};

export default CityTariffs;

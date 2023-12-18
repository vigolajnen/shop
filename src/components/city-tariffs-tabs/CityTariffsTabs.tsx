import { FC, useContext, useState } from 'react';

import Title from '../UI/title/Title';
import Tab from '../UI/tab/Tab';
import CityTariffsCarouseList from '../city-tariffs-carousel-list/CityTariffsCarouseList';
import Spinner from '../UI/spinner/Spinner';

import { CityContext } from '../../context/CityContext';
import { useGetPriceCitiesQuery } from '../../store/reducers/pro.api';
import { getDataCity, getIdVal, getPriceVal } from '../../utils/form';
import Error from '../error/Error';

// interface IDataTabs {
//   id: number;
//   type: string;
//   price: string;
//   clubs: any;
//   city: string | null;
//   isPool: Boolean;
// }

export interface IClub {
  address: string;
  addressForm: string;
  id: string;
  isPool: Boolean;
  mcID: string;
  morningID: string;
  name: string;
  subscriptionID: string;
  subscriptionPrice: string;
}

const CityTariffsTabs: FC = () => {
  const { data, isSuccess, isLoading, isError } = useGetPriceCitiesQuery('');
  const pageCity = useContext(CityContext);
  const [active, setActive] = useState(1);

  const pageData = getDataCity(data, pageCity);
  const clubs = Boolean(pageData) && pageData.clubs;

  const clubsWithoutPremier =
    clubs.length > 0 &&
    clubs.filter(
      (el: any) =>
        el.name.toLocaleLowerCase() !== 'Салово'.toLocaleLowerCase() &&
        el.name.toLocaleLowerCase() !== 'Охта Молл'.toLocaleLowerCase(),
    );
  const clubsPremier =
    clubs.length > 0 &&
    clubs.filter(
      (el: any) =>
        el.name.toLocaleLowerCase() === 'Салово'.toLocaleLowerCase() ||
        el.name.toLocaleLowerCase() === 'Охта Молл'.toLocaleLowerCase(),
    );

  const clubsWithoutPremierNoPool =
    clubsWithoutPremier.length > 0 &&
    clubsWithoutPremier.filter((el: any) => el.isPool === false);

  const clubsWithoutPremierYesPool =
    clubsWithoutPremier.length > 0 &&
    clubsWithoutPremier.filter((el: any) => el.isPool === true);

  const getDataTab = (clubs: any, pageData: any) => {
    const clubsAddress: any = [];
    const tariffData: any = [];
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
            isPool: clubsAddress[0].isPool,
            isPremier: clubsAddress.find(
              (el: IClub) =>
                el.name.toLocaleLowerCase() === 'Салово'.toLocaleLowerCase(),
            )
              ? true
              : clubsAddress.find(
                  (el: IClub) =>
                    el.name.toLocaleLowerCase() ===
                    'Охта Молл'.toLocaleLowerCase(),
                )
              ? true
              : false,
          }),
        );
      });
    }

    const mm = tariffData?.filter((el: any) => el.type === 'morning')[0];
    const ff = tariffData?.filter((el: any) => el.type === 'full')[0];
    const mc = tariffData?.filter((el: any) => el.type === 'mc_full')[0];

    // console.log('mm', mm);

    const allTariffs: Array<any> = [mm, ff, mc];
    const allTariffsFilter = allTariffs.filter(el => el !== undefined);
    return allTariffsFilter;
  };

  const dataClubs: any = getDataTab(clubsWithoutPremierYesPool, pageData);
  const dataClubsWithoutPool: any = getDataTab(
    clubsWithoutPremierNoPool,
    pageData,
  );
  const dataClubsPremier: any = getDataTab(clubsPremier, pageData);

  const dataTab = [
    {
      name: 'Премьер',
      content: (
        <CityTariffsCarouseList
          data={dataClubsPremier}
          count={dataClubsPremier.length}
        />
      ),
    },
    {
      name: 'С бассейном',
      content: (
        <CityTariffsCarouseList data={dataClubs} count={dataClubs.length} />
      ),
    },
    {
      name: 'Без бассейна',
      content: (
        <CityTariffsCarouseList
          data={dataClubsWithoutPool}
          count={dataClubsWithoutPool.length}
        />
      ),
    },
  ];

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <Error />}
      {isSuccess && Boolean(pageData) ? (
        <section className="bg-primary px-4" id="tariffs">
          <div className="container mx-auto max-w-screen-lg md:py-10 py-16">
            <Title as="h2" align="center" styles="text-white">
              Тарифы
            </Title>

            <Tab data={dataTab} active={active} setActive={setActive} />
          </div>
        </section>
      ) : (
        <p>нет предложений</p>
      )}
    </>
  );
};

export default CityTariffsTabs;

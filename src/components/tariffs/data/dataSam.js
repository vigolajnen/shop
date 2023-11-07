import { subscriptionData } from './constants';

export const clubsAddress = [
  {
    id: '386626',
    subscriptionId: '401226',
    address: 'Московское ш., 4, корп. 4',
    name: 'Монте Роза',
  },
  {
    id: '386625',
    subscriptionId: '386631',
    address: 'Красноармейская ул., 131',
    name: 'Гудок',
  },
  {
    id: '386627',
    subscriptionId: '401228',
    address: 'Южное ш., 5',
    name: 'Амбар',
  },
  {
    id: '386623',
    subscriptionId: '386629',
    address: 'Ул. Стара Загора, 58',
    name: 'Шипка',
  },
];

export const clubsAddressFilter = [...clubsAddress].filter(
  item => item.name !== 'Шипка',
);
export const clubsFormMulty = [...clubsAddress].filter(
  item => item.name === 'Шипка',
);

export const listTariffs = [
  {
    id: 1,
    type: 'morning',
    mc: false,
    working: '7:00-17:00',
    name: 'Абонемент на месяц',
    product: {
      product_id: 1500,
      product_price: 1900,
      product_name: '1 месяц утро Самара Подписка',
    },
    subscription: {
      product_id: 2222,
      product_price: `${subscriptionData.price}`,
      product_name: `${subscriptionData.name}`,
    },
    countClubs: clubsAddressFilter.length,
    clubs: clubsAddressFilter,
    clubsForm: clubsAddressFilter,
  },
  {
    id: 2,
    type: 'full',
    mc: false,
    working: '7:00-23:00',
    name: 'Абонемент на месяц',
    product: {
      product_id: 1500,
      product_price: 2300,
      product_name: '1 месяц Самара Подписка',
    },
    subscription: {
      product_id: 5555,
      product_price: `${subscriptionData.price}`,
      product_name: `${subscriptionData.name}`,
    },
    countClubs: clubsAddressFilter.length,
    clubs: clubsAddressFilter,
    clubsForm: clubsAddressFilter,
  },
  {
    id: 3,
    type: 'full',
    mc: true,
    working: '7:00-23:00',
    name: 'Абонемент на месяц',
    product: {
      product_id: 1500,
      product_price: 3900,
      product_name: 'Мультикарта Самара 1 месяц Подписка',
    },
    subscription: {
      product_id: 5555,
      product_price: `${subscriptionData.price}`,
      product_name: `${subscriptionData.name}`,
    },
    countClubs: clubsAddress.length,
    clubs: clubsAddress,
    clubsForm: clubsFormMulty,
  },
];

export const LIST_TARIFFS_SAMARA = [...listTariffs];

import { subscriptionData } from './constants';

export const clubsAddress = [
  {
    id: '33333',
    subscriptionId: '433333',
    address: 'пр. Большой В.О., д. 68А',
    name: 'Васильевский',
  },
];

export const listTariffs = [
  {
    id: 1,
    type: 'morning',
    mc: false,
    working: '7:00-17:00',
    name: 'Абонемент на месяц',
    product: {
      product_id: 1500,
      product_price: 1500,
      product_name: '1 месяц Подписка утро',
    },
    subscription: {
      product_id: 2222,
      product_price: `${subscriptionData.price}`,
      product_name: `${subscriptionData.name}`,
    
    },
    countClubs: clubsAddress.length,
    clubs: clubsAddress,
    clubsForm: clubsAddress,
  },
  {
    id: 2,
    type: 'full',
    mc: false,
    working: '7:00-23:00',
    name: 'Абонемент на месяц',
    product: {
      product_id: 1500,
      product_price: 1900,
      product_name: '1 месяц Подписка',
    },
    subscription: {
      product_id: 5555,
      product_price: `${subscriptionData.price}`,
      product_name: `${subscriptionData.name}`,
    },
    countClubs: clubsAddress.length,
    clubs: clubsAddress,
    clubsForm: clubsAddress,
  },
];

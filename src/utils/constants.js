import { ROUTES } from "./routes";

export const SAMARA_CITY_DATA = {
  city: 'Самара',
  clubs: [
    {
      address: 'Московское ш., 4, корп. 4',
      name: 'Монте Роза',
    },
    {
      address: 'Красноармейская ул., 131',
      name: 'Гудок',
    },
    {
      address: 'Южное ш., 5',
      name: 'Амбар',
    },
    {
      address: 'Ул. Стара Загора, 58',
      name: 'Шипка',
    },
  ],
  timer: {
    endDate: 'December, 31, 2023',
    startDate: '',
  },
};

export const SPB_CITY_DATA = {
  city: 'Санкт-Петербург',
  clubs: [
    {
      address: 'пр. Большой В.О., д. 68А',
      name: 'Васильевский',
    },
  ],
  timer: {
    endDate: 'December, 15, 2023',
    startDate: '',
  },
};

export const getDataList = (city, sam, spb) => {
  if (city === ROUTES.HOME.NAME) {
    return sam;
  } else if (city === ROUTES.SPB.NAME) {
    return spb;
  }
};

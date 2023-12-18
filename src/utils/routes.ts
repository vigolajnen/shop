export interface Route {
  url: string;
  name: string;
}

export const ROUTERS: { [key: string]: Route } = {
  sam: {
    url: '/',
    name: 'Самара',
  },
  spb: {
    url: '/spb.html',
    name: 'Санкт-Петербург',
  },
  yar: {
    url: '/yar.html',
    name: 'Ярославль',
  },
  arh: {
    url: '/arh.html',
    name: 'Архангельск',
  },
  ijk: {
    url: '/ijk.html',
    name: 'Ижевск',
  },
  kzn: {
    url: '/kzn.html',
    name: 'Казань',
  },
  nch: {
    url: '/nch.html',
    name: 'Набережные Челны',
  },
  goj: {
    url: '/goj.html',
    name: 'Нижний Новгород',
  },
  pes: {
    url: '/pes.html',
    name: 'Петрозаводск',
  },
  ryz: {
    url: '/ryz.html',
    name: 'Рязань',
  },
  tol: {
    url: '/tol.html',
    name: 'Тольятти',
  },
  tul: {
    url: '/tul.html',
    name: 'Тула',
  },
  uly: {
    url: '/uly.html',
    name: 'Ульяновск',
  },
};

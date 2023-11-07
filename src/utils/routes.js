export const ROUTES = {
  HOME: {
    URL: '/',
    NAME: 'Самара',
  },
  SPB: {
    URL: '/spb',
    NAME: 'Санкт-Петербург',
  },
  URL_ANY: '*',
};

let ARR_ROUTERS = Object.entries(ROUTES);
ARR_ROUTERS.splice(-1, 1);
export const CITIES_ROUTERS = ARR_ROUTERS.sort((a, b) =>
a[1].NAME > b[1].NAME ? 1 : -1,
);

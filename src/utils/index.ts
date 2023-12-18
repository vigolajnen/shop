import { ROUTERS, Route } from './routes';

export const ARR_ROUTERS: [string, Route][] = Object.entries(ROUTERS);
const ARR_ROUTERS_SORT: [string, Route][] = ARR_ROUTERS.sort((a, b) =>
  a[1].name > b[1].name ? 1 : -1,
);

function getCitiesRouters(arr: [string, Route][]): Route[] {
  const CITIES_ROUTERS: Route[] = [];
  arr.map((el: [string, Route]) => {
    return CITIES_ROUTERS.push({
      url: el[1].url,
      name: el[1].name,
    });
  });
  return CITIES_ROUTERS;
}

export const CITIES_ROUTERS: Route[] = getCitiesRouters(ARR_ROUTERS_SORT);

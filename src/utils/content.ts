export const formatPrice = (price: string | number) => {
  let str = price.toString();
  return `${str.slice(0, 1)}.${str.slice(1)}`;
};

export const CONTRIBUTION = formatPrice(1990);
export const OLD_CONTRIBUTION = formatPrice(3900);
export const END_DATE_SALE = '21 декабря';
export const TEXT_SUBSCRIPTION_TOOLTIP =
  'Первоначальный платеж оплачивается один раз и дает право на ежемесячное получение скидки относительно стоимости годового Абонентского договора';

export const getCityPriceList = (arr: any) => {
  const arrPrice = arr?.filter(
    (el: any) => el.product_type !== 'subscription_recurrent',
  );
  const arrPriceSort = arrPrice?.map((el: any) => el.product_price).sort();
  const result = arrPriceSort?.map((el: any, i: number) =>
    i === arrPriceSort.length - 1 ? el + 'р' : el + 'р/',
  );
  return [arrPrice].length > 0 ? result : null;
};

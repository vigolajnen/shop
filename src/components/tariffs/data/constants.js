export const CONTRIBUTION = 500; // стоимость подписки
export const OLD_CONTRIBUTION = 3900; // стоимость подписки

export const subscriptionData = {
  name: 'Первоначальный взнос',
  price: CONTRIBUTION,
};

export const TEXT_SUBSCRIPTION_BASE = `*при оплате Членского взноса ${CONTRIBUTION} р.`;
export const END_DATE_SALE = '10 октября'; // стоимость подписки
export const TEXT_SUBSCRIPTION_SALE = `*при оплате Членского взноса <span> ${CONTRIBUTION} </span> р. (старая цена <strike> ${OLD_CONTRIBUTION} </strike> р.). Акция действует только до ${END_DATE_SALE}`;
//-  текст подсказки у тарифа
export const TEXT_SUBSCRIPTION_TOOLTIP =
  'Вступительный платеж оплачивается один раз и дает право на ежемесячное получение скидки относительно стоимости годового Абонентского договора';
export const TEXT_1 = 'Тариф дает возможность посещать 1 клуб до 17:00';
export const TEXT_2 = 'Тариф дает возможность посещать 1 клуб';
export const TEXT_3 = 'Тариф дает возможность посещать 4 клуба';

export const formatPrice = price => {
  let str = price.toString();
  return `${str.slice(0, 1)}.${str.slice(1)}`;
};

export const BREAKPOINTS = {
  320: {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  960: {
    slidesPerView: 2.7,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

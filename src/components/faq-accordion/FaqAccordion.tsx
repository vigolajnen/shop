import { FC, useContext } from 'react';

import './styles.css';
import Title from '../UI/title/Title';
import { useGetPriceCitiesQuery } from '../../store/reducers/pro.api';
import { CityContext } from '../../context/CityContext';
import { getDataCity } from '../../utils/form';
import {
  CONTRIBUTION,
  END_DATE_SALE,
  getCityPriceList,
} from '../../utils/content';

interface IFaqAccordion {
  initialFee?: string;
  cityTariffs?: string;
}

const FaqAccordion: FC<IFaqAccordion> = () => {
  const { data: price } = useGetPriceCitiesQuery('');
  const pageCity = useContext(CityContext);
  const pageData = getDataCity(price, pageCity);
  const products = pageData && pageData?.clubs[0]?.products;

  const data = [
    {
      title: 'В какое время можно посещать клуб?',
      text: (
        <>
          <p>
            В зависимости от выбранного тарифа, посещения до 17:00, либо
            безлимитно в часы работы клуба
          </p>
          <ul>
            <li>- пн-пт с 07:00 до 23:00,</li>
            <li>- сб-вс (и праздничные дни) с 08:00 до 22:00</li>
          </ul>
          <p>В тариф включено посещение всех зон клуба без ограничений.</p>
        </>
      ),
    },
    {
      title: 'Как продлить абонемент?',
      text: <p>Продление абонемента происходит автоматически.</p>,
    },
    {
      title: 'Какие преимущества оплаты тарифа с первоначальным платежом?',
      text: (
        <>
          <p>
            Обязательным условием оплаты тарифа Подписка является оплата
            первоначального платежа в размере {CONTRIBUTION} р.
          </p>
          {Boolean(products) && (
            <p>
              При выборе вида оплаты Подписка, в первый месяц оплачивается тариф
              на выбор {getCityPriceList(products)}, и первоначальный платеж
              ВСЕГО {CONTRIBUTION}р вместо 3900р. Скидка действует до{' '}
              {END_DATE_SALE} 2023г.
            </p>
          )}

          <p>
            Со второго месяца автоматически списывается ежемесячная оплата в
            соответствии с выбранным тарифом ранее.
          </p>
          <p>
            Оплата тарифа со первоначальным платежом дает преимущества в виде
            бонусного пакета стартовых тренировок с тренером и гарантированной
            (фиксированной) стоимости ежемесячного платежа на весь период
            действия подписки.
          </p>
        </>
      ),
    },
    {
      title: 'Какие групповые занятия можно посещать?',
      text: <p>Вы можете посещать все бесплатные групповые занятия в клубе.</p>,
    },
    {
      title: 'В стоимость включена ознакомительная тренировка с тренером?',
      text: (
        <p>
          При покупке абонемента вы получите Стартовый пакет тренировок в
          подарок (1 персональная тренировка в тренажерном зале, 1 персональная
          тренировка в бассейне, 1 платное групповое занятие)
        </p>
      ),
    },
    {
      title: 'Есть заморозка абонемента?',
      text: <p>Заморозка абонемента не предусмотрена.</p>,
    },
  ];
  return (
    <section className=" md:py-16 px-4 py-10 pb-16  bg-gray-100">
      <div className="max-w-screen-xl container mx-auto">
        <Title as="h3" align="" styles="px-4 xl:px-0">
          Отвечаем на Вопросы
        </Title>

        <div className="accordion faq-accordion border-t border-black flex flex-col">
          {data.length > 0
            ? [...data].map((el, index) => (
                <div className="w-full text-left" key={index}>
                  <input
                    type="checkbox"
                    name="panel"
                    id={`panel-${index}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`panel-${index}`}
                    className="relative block p-4 border-b border-black cursor-pointer"
                  >
                    <span className="w-4/5 block">{el?.title}</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <div className="accordion__body p-4" id={`panel${index}`}>
                      {el?.text}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;

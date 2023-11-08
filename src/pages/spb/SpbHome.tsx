import React from 'react';

import { CityContext } from '../../context/CityContext';
import { SPB_CITY_DATA } from '../../utils/constants';
import MetaData from '../../components/meta-data/MetaData';
import HeaderPage from '../../components/header-page/HeaderPage';
import FooterPage from '../../components/footer-page/FooterPage';

import Promo from '../../components/promo/Promo';
import Timer from '../../components/timer/Timer';
import ClubServices from '../../components/club-services/ClubServices';
import Advantages from '../../components/advantages/Advantages';
import Tariffs from '../../components/tariffs/Tariffs';
import ClubsGallery from '../../components/clubs-gallery/ClubsGallery';
import Faq from '../../components/faq/Faq';

const SpbHome = () => {
  return (
    <CityContext.Provider value={SPB_CITY_DATA}>
      <MetaData
        title='Fitness House в Санкт-Петербурге | Безлимитный абонемент за месяц 1500 руб.'
        description='Фитнес-клуб с оплатой за месяц 1500 руб. Спа, групповые занятия, тренажерный зал.'
      />

      <HeaderPage />

      <main>
        <Promo />
        <Timer title='До конца акции осталось:' />
        <ClubServices title='В абонемент включено' />
        <Tariffs title='Тарифы' count={2} />
        <div className='overflow-hidden'>
          <Advantages title='Ваша выгода' />
        </div>
        <ClubsGallery title='клубы fitness house' />
      </main>

      <div className='overflow-hidden'>
        <Faq title='отвечаем на Вопросы' />
        <FooterPage />
      </div>
    </CityContext.Provider>
  );
};

export default SpbHome;

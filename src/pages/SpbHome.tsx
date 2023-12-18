import MetaData from '../components/SEO/meta-data/MetaData';
import PromoCarousel from '../components/promo-carousel/PromoCarousel';
import SaleTimer from '../components/sale-timer/SaleTimer';
import ClubsServices from '../components/clubs-services/ClubsServices';
import CityTariffsTabs from '../components/city-tariffs-tabs/CityTariffsTabs';
import ClubsGallery from '../components/clubs-gallery/ClubsGallery';
import Benefit from '../components/benefit/Benefit';
import FaqAccordion from '../components/faq-accordion/FaqAccordion';

// @ts-ignore
import slideXL from '../images/promo/1/1.jpg?format=webp';
// @ts-ignore
import slideLG from '../images/promo/1/1.jpg?format=webp';
// @ts-ignore
import slideSM from '../images/promo/mob/1.jpg?format=webp';

import {
  dataGroup,
  dataGym,
  dataMain,
  dataPool,
  dataSpa,
} from '../components/clubs-gallery/data/dataSpb';
import { CityContext } from '../context/CityContext';

export default function SpbHome() {
  const slide = {
    xl: slideXL,
    lg: slideLG,
    sm: slideSM,
  };
  return (
    <>
      <CityContext.Provider value="Санкт-Петербург">
        <MetaData
          title="Fitness House в Санкт-Петербурге | Безлимитный абонемент за месяц 1500 руб."
          description="Фитнес-клуб с оплатой за месяц 1500 руб. Спа, групповые занятия, тренажерный зал."
        />
        <PromoCarousel data={[slide, slide, slide, slide]} />
        <SaleTimer title="До конца акции осталось:" endDate="25.12.2023" />
        <ClubsServices />
        <CityTariffsTabs />
        <Benefit />
        <ClubsGallery
          dataMain={dataMain}
          dataPool={dataPool}
          dataGym={dataGym}
          dataSpa={dataSpa}
          dataGroup={dataGroup}
        />
        <FaqAccordion />
      </CityContext.Provider>
    </>
  );
}

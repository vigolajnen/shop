import MetaData from '../components/SEO/meta-data/MetaData';
import PromoCarousel from '../components/promo-carousel/PromoCarousel';
import SaleTimer from '../components/sale-timer/SaleTimer';
import ClubsServices from '../components/clubs-services/ClubsServices';
import CityTariffs from '../components/city-tariffs/CityTariffs';
import ClubsGallery from '../components/clubs-gallery/ClubsGallery';
import Benefit from '../components/benefit/Benefit';
import FaqAccordion from '../components/faq-accordion/FaqAccordion';

// @ts-ignore
import slideXL from '../images/promo/1/3@2x.png?format=webp';
// @ts-ignore
import slideLG from '../images/promo/1/2@2x.png?format=webp';
// @ts-ignore
import slideSM from '../images/promo/mob/1.jpg?format=webp';

import {
  dataGroup,
  dataGym,
  dataMain,
  dataPool,
  dataSpa,
} from '../components/clubs-gallery/data/dataSam';
import { CityContext } from '../context/CityContext';
import { ROUTERS } from '../utils/routes';

export default function UlyHome() {
  const slide = {
    xl: slideXL,
    lg: slideLG,
    sm: slideSM,
  };
  return (
    <>
      <CityContext.Provider value={ROUTERS.uly.name}>
        <MetaData
          title="Fitness House в Ульяновске | Безлимитный абонемент за месяц 1900 руб."
          description="Фитнес-клуб с бассейном с оплатой за месяц 1900 руб. Бассейн, спа, групповые занятия, тренажерный зал."
        />
        <PromoCarousel data={[slide]} />
        <SaleTimer title="До конца акции осталось:" endDate="25.12.2023" />
        <ClubsServices />
        <CityTariffs />
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

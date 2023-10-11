import React from 'react';
import { motion } from 'framer-motion';

import { listServices } from '../../components/club-services/data/dataSam';
import { listAdvantages } from '../../components/advantages/data/dataSam';
import { listFaqAccordion } from '../../components/faq-accordion/data';
import { PROMO_CAROUSEL } from '../../components/promo-page/data/dataSam';

import {
  clubsAddress,
  listTariffs,
} from '../../components/tariffs/data/dataSam';
import { ALL_GALLERY_DATA } from '../../components/clubs-gallery/data/dataSam';

import PromoPage from '../../components/promo-page/PromoPage';
import Timer from '../../components/timer/Timer';
import ClubServices from '../../components/club-services/ClubServices';
import Advantages from '../../components/advantages/Advantages';
import Tariffs from '../../components/tariffs/Tariffs';
import ClubsGallery from '../../components/clubs-gallery/ClubsGallery';
import Faq from '../../components/faq/Faq';
import FooterPage from '../../components/footer-page/FooterPage';

const Home = () => {
  return (
    // arrayPromoPic
    <main className=''>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <PromoPage data={PROMO_CAROUSEL} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Timer title='До конца акции осталось:' endDate='December, 31, 2023' />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ClubServices title='В абонемент включено' data={listServices} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Tariffs title='Тарифы' data={listTariffs} count={3} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Advantages title='Ваша выгода' data={listAdvantages} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ClubsGallery title='клубы fitness house' data={ALL_GALLERY_DATA} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Faq title='отвечаем на Вопросы' data={listFaqAccordion} />
      </motion.div>

      <FooterPage data={clubsAddress} />
    </main>
  );
};

export default Home;

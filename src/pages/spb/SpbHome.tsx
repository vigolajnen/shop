import React from 'react';
import { motion } from 'framer-motion';

import { listServices } from '../../components/club-services/data/dataSpb';
import { listAdvantages } from '../../components/advantages/data/dataSpb';
import {
  clubsAddress,
  listTariffs,
} from '../../components/tariffs/data/dataSpb';
import { listFaqAccordion } from '../../components/faq-accordion/data';
import { ALL_GALLERY_DATA } from '../../components/clubs-gallery/data/dataSpb';
import { PROMO_CAROUSEL } from '../../components/promo/data/dataSpb';

import Promo from '../../components/promo/Promo';
import Timer from '../../components/timer/Timer';
import ClubServices from '../../components/club-services/ClubServices';
import Advantages from '../../components/advantages/Advantages';
import Tariffs from '../../components/tariffs/Tariffs';
import ClubsGallery from '../../components/clubs-gallery/ClubsGallery';
import Faq from '../../components/faq/Faq';
import FooterPage from '../../components/footer-page/FooterPage';
import { Helmet } from 'react-helmet';

const SpbHome = () => {
  return (
    <main className=''>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          Fitness House в Санкт-Петербурге | Безлимитный абонемент за месяц 1500
          руб.
        </title>
        <meta
          name='description'
          content='Фитнес-клуб с оплатой за месяц 1500 руб. Спа, групповые занятия, тренажерный зал.'
        />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Promo data={PROMO_CAROUSEL} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Timer title='До конца акции осталось:' endDate='December, 15, 2023' />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ClubServices title='В абонемент включено' data={listServices} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Tariffs title='Тарифы' data={listTariffs} count={2} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Advantages title='Ваша выгода' data={listAdvantages} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ClubsGallery title='клубы fitness house' data={ALL_GALLERY_DATA} />
      </motion.div>

      <div className='overflow-hidden'>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Faq title='отвечаем на Вопросы' data={listFaqAccordion} />
        </motion.div>

        <FooterPage data={clubsAddress} />
      </div>
    </main>
  );
};

export default SpbHome;

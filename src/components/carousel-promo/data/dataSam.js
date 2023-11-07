import PIC_CLUB_1w from '../../../images/promo/1w.png';
import PIC_CLUB_1 from '../../../images/promo/1.webp';
import PIC_CLUB_2 from '../../../images/promo/2.webp';
import PIC_CLUB_MOB_1 from '../../../images/promo/mob/1.webp';
import PIC_CLUB_MOB_2 from '../../../images/promo/mob/2.webp';
import { ROUTES } from '../../../utils/routes';

export const PROMO_CAROUSEL_SAMARA = {
  city: ROUTES.HOME.NAME,
  list: [
    {
      desktop: PIC_CLUB_1,
      mobile: PIC_CLUB_MOB_1,
      bg: PIC_CLUB_1w,
      url: '#tariffs',
      content: (
        <div className="w-full mb-8 font-bold text-white-50 uppercase max-w-screen-md flex flex-col gap-5">
          <div className="text-xl md:text-xl lg:text-3xl xl:text-4xl text-lemon-chiffon-100 lg:mb-5 xl:mb-10">
            Безлимитный абонемент
          </div>
          <div className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            в фитнес-клуб с бассейном{' '}
          </div>
          <div className="text-xl xs:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-normal">
            всего за 1.900 ₽/мес.
          </div>
        </div>
      ),
    },
    {
      desktop: PIC_CLUB_2,
      mobile: PIC_CLUB_MOB_2,
      bg: PIC_CLUB_1w,
      url: '#tariffs',
      content: (
        <div>
          <div className="">Безлимитный абонемент</div>
          <div className="">в фитнес-клуб с бассейном </div>
          <div className="">всего за 1.900₽/мес.</div>
        </div>
      ),
    },
  ],
};

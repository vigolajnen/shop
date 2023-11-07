import PIC_MAIN_1 from '../../../images/clubs/spb/main/1.webp';
import PIC_MAIN_2 from '../../../images/clubs/spb/main/2.webp';
import PIC_MAIN_3 from '../../../images/clubs/spb/main/3.webp';
import PIC_MAIN_4 from '../../../images/clubs/spb/main/3.webp';

import PIC_GYM_1 from '../../../images/clubs/spb/gym/1.webp';
import PIC_GYM_2 from '../../../images/clubs/spb/gym/2.webp';
import PIC_GYM_3 from '../../../images/clubs/spb/gym/3.webp';
import PIC_GYM_4 from '../../../images/clubs/spb/gym/4.webp';

import PIC_SPA_1 from '../../../images/clubs/spb/spa/1.webp';
import PIC_SPA_2 from '../../../images/clubs/spb/spa/2.webp';
import PIC_SPA_3 from '../../../images/clubs/spb/spa/3.webp';

import PIC_GROUP_1 from '../../../images/clubs/spb/group/1.webp';
import PIC_GROUP_2 from '../../../images/clubs/spb/group/2.webp';
import PIC_GROUP_3 from '../../../images/clubs/spb/group/3.webp';
import PIC_GROUP_4 from '../../../images/clubs/spb/group/4.webp';
import PIC_GROUP_5 from '../../../images/clubs/spb/group/5.webp';
import PIC_GROUP_6 from '../../../images/clubs/spb/group/6.webp';
import { ROUTES } from '../../../utils/routes';

const MAIN_DATA = [PIC_MAIN_1, PIC_MAIN_2, PIC_MAIN_3, PIC_MAIN_4];

const GYM_DATA = [PIC_GYM_1, PIC_GYM_2, PIC_GYM_3, PIC_GYM_4];

const SPA_DATA = [PIC_SPA_1, PIC_SPA_2, PIC_SPA_3];

const GROUP_DATA = [
  PIC_GROUP_1,
  PIC_GROUP_2,
  PIC_GROUP_3,
  PIC_GROUP_4,
  PIC_GROUP_5,
  PIC_GROUP_6,
];

export const ALL_GALLERY_DATA_SPB = {
  city: ROUTES.SPB.NAME,
  list: [
    {
      name: 'main',
      arrayData: [...MAIN_DATA],
    },
    {
      name: 'gym',
      arrayData: [...GYM_DATA],
    },
    {
      name: 'spa',
      arrayData: [...SPA_DATA],
    },
    {
      name: 'group',
      arrayData: [...GROUP_DATA],
    },
  ],
};

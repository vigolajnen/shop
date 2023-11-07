import PIC_MAIN_1 from '../../../images/clubs/samara/main/1.webp';
import PIC_MAIN_2 from '../../../images/clubs/samara/main/2.webp';
import PIC_MAIN_3 from '../../../images/clubs/samara/main/3.webp';
import PIC_MAIN_4 from '../../../images/clubs/samara/main/3.webp';

import PIC_POOL_1 from '../../../images/clubs/samara/pool/1.webp';
import PIC_POOL_2 from '../../../images/clubs/samara/pool/2.webp';
import PIC_POOL_3 from '../../../images/clubs/samara/pool/3.webp';
import PIC_POOL_4 from '../../../images/clubs/samara/pool/4.webp';
import PIC_POOL_5 from '../../../images/clubs/samara/pool/5.webp';

import PIC_GYM_1 from '../../../images/clubs/samara/gym/1.webp';
import PIC_GYM_2 from '../../../images/clubs/samara/gym/2.webp';
import PIC_GYM_3 from '../../../images/clubs/samara/gym/3.webp';
import PIC_GYM_4 from '../../../images/clubs/samara/gym/4.webp';
import PIC_GYM_5 from '../../../images/clubs/samara/gym/5.webp';
import PIC_GYM_6 from '../../../images/clubs/samara/gym/6.webp';
import PIC_GYM_7 from '../../../images/clubs/samara/gym/7.webp';

import PIC_SPA_1 from '../../../images/clubs/samara/spa/1.webp';
import PIC_SPA_2 from '../../../images/clubs/samara/spa/2.webp';
import PIC_SPA_3 from '../../../images/clubs/samara/spa/3.webp';
import PIC_SPA_4 from '../../../images/clubs/samara/spa/4.webp';
import PIC_SPA_5 from '../../../images/clubs/samara/spa/5.webp';

import PIC_GROUP_1 from '../../../images/clubs/samara/group/1.webp';
import PIC_GROUP_2 from '../../../images/clubs/samara/group/2.webp';
import PIC_GROUP_3 from '../../../images/clubs/samara/group/3.webp';
import PIC_GROUP_4 from '../../../images/clubs/samara/group/4.webp';
import PIC_GROUP_5 from '../../../images/clubs/samara/group/5.webp';
import { ROUTES } from '../../../utils/routes';

const MAIN_DATA = [PIC_MAIN_1, PIC_MAIN_2, PIC_MAIN_3, PIC_MAIN_4];

const POOL_DATA = [PIC_POOL_1, PIC_POOL_2, PIC_POOL_3, PIC_POOL_4, PIC_POOL_5];

const GYM_DATA = [
  PIC_GYM_1,
  PIC_GYM_2,
  PIC_GYM_3,
  PIC_GYM_4,
  PIC_GYM_5,
  PIC_GYM_6,
  PIC_GYM_7,
];

const SPA_DATA = [PIC_SPA_1, PIC_SPA_2, PIC_SPA_3, PIC_SPA_4, PIC_SPA_5];

const GROUP_DATA = [
  PIC_GROUP_1,
  PIC_GROUP_2,
  PIC_GROUP_3,
  PIC_GROUP_4,
  PIC_GROUP_5,
];

export const ALL_GALLERY_DATA_SAMARA = {
  city: ROUTES.HOME.NAME,
  list: [
    {
      name: 'main',
      arrayData: [...MAIN_DATA],
    },
    {
      name: 'pool',
      arrayData: [...POOL_DATA],
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

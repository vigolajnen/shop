import PIC_MAIN_1 from '../../../images/clubs/spb/main/1.jpg';
import PIC_MAIN_2 from '../../../images/clubs/spb/main/2.jpg';
import PIC_MAIN_3 from '../../../images/clubs/spb/main/3.jpg';
import PIC_MAIN_4 from '../../../images/clubs/spb/main/3.jpg';

import PIC_GYM_1 from '../../../images/clubs/spb/gym/1.jpg';
import PIC_GYM_2 from '../../../images/clubs/spb/gym/1.jpg';
import PIC_GYM_3 from '../../../images/clubs/spb/gym/1.jpg';

import PIC_SPA_1 from '../../../images/clubs/spb/spa/3.jpg';
import PIC_SPA_2 from '../../../images/clubs/spb/spa/3.jpg';
import PIC_SPA_3 from '../../../images/clubs/spb/spa/3.jpg';

import PIC_GROUP_1 from '../../../images/clubs/spb/group/2.jpg';
import PIC_GROUP_2 from '../../../images/clubs/spb/group/2.jpg';
import PIC_GROUP_3 from '../../../images/clubs/spb/group/2.jpg';

const MAIN_DATA = [PIC_MAIN_1, PIC_MAIN_2, PIC_MAIN_3, PIC_MAIN_4];
const GYM_DATA = [PIC_GYM_1, PIC_GYM_2, PIC_GYM_3];
const SPA_DATA = [PIC_SPA_1, PIC_SPA_2, PIC_SPA_3];
const GROUP_DATA = [PIC_GROUP_1, PIC_GROUP_2, PIC_GROUP_3];

export const ALL_GALLERY_DATA = [
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
  }
];

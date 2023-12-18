import GROUP_PIC from '../../images/club-services/group.webp';
import GYM_PIC from '../../images/club-services/gym.webp';
import POOL_PIC from '../../images/club-services/pool.webp';
import SPA_PIC from '../../images/club-services/spa.webp';

export interface IList {
  title: string;
  description: string;
  pic: string;
}

export interface IContentList {
  isPool: Boolean;
  list: IList[];
}

export const CONTENT_LIST: IContentList[] = [
  {
    isPool: true,
    list: [
      {
        title: 'Бассейн',
        description:
          'Просторный бассейн для спортивного и расслабленного плавания',
        pic: `${POOL_PIC}`,
      },
      {
        title: 'Тренажерный зал',
        description:
          'Профессионально оборудованный и современный тренажёрный зал',
        pic: `${GYM_PIC}`,
      },
      {
        title: 'Спа-комплекс ',
        description:
          'Финская, русская, турецкая, инфракрасная сауны и соляная комната',
        pic: `${SPA_PIC}`,
      },
      {
        title: 'Групповые уроки',
        description:
          'Разнообразные групповые уроки растяжка, гимнастика, силовые, аквааэробика',
        pic: `${GROUP_PIC}`,
      },
    ],
  },
  {
    isPool: false,
    list: [
      {
        title: 'Тренажерный зал',
        description:
          'Профессионально оборудованный и современный тренажёрный зал',
        pic: `${GYM_PIC}`,
      },
      {
        title: 'Спа-комплекс ',
        description:
          'Финская, русская, турецкая, инфракрасная сауны и соляная комната',
        pic: `${SPA_PIC}`,
      },
      {
        title: 'Групповые уроки',
        description:
          'Разнообразные групповые уроки растяжка, гимнастика, силовые, аквааэробика',
        pic: `${GROUP_PIC}`,
      },
    ],
  },
];

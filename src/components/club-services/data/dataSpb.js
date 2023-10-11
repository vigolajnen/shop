import GYM_PIC from '../../../images/club-services/gym.jpg';
import SPA_PIC from '../../../images/club-services/spa.jpg';
import GROUP_PIC from '../../../images/club-services/group.jpg';

export const listServices = [
  {
    title: 'Тренажерный зал',
    description: 'Профессионально оборудованный и современный тренажёрный зал',
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
];

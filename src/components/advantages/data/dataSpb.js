import { IconBestPrice, IconGym, IconHeart } from '../../icons';

export const listAdvantages = [
  {
    title: 'все включено, без ограничений ',
    description:
      'Спа, тренажеры, кардиозона, групповые авторские уроки, шкафчик в просторной раздевалке',
    icon: <IconGym width={55} height={55} />,
  },
  {
    title: 'доступная цена',
    description:
      'Cпециальный тарифный план со скидками, не нужно платить на год вперед',
    icon: <IconBestPrice width={55} height={55} />,
  },
  {
    title: 'Комфортное продление',
    description:
      'Понравилось? Удобное автоматическое списание подписки за абонемент с возможностью отмены в любой момент',
    icon: <IconHeart width={55} height={55} />,
  },
];

import Title from '../UI/title/Title';

import IconBestPrice from '../../images/icons/icon-best-price.svg?react';
import IconGym from '../../images/icons/icon-gym.svg?react';
import IconHeart from '../../images/icons/icon-heart.svg?react';

import PIC_1 from '../../images/advantages/1.webp';
import PIC_2 from '../../images/advantages/2.webp';
import PIC_3 from '../../images/advantages/3.webp';

export default function Benefit() {
  const data = [
    {
      title: 'все включено, без ограничений',
      description:
        'Бассейн*, спа, тренажеры, кардиозона, групповые  уроки, шкафчик в просторной раздевалке',
      icon: <IconGym width={55} height={55} className="w-full h-12" />,
    },
    {
      title: 'доступная цена',
      description:
        'Cпециальный тарифный план со скидками, не нужно платить на год вперед',
      icon: <IconBestPrice width={55} height={55} className="w-full h-12" />,
    },
    {
      title: 'Комфортное продление',
      description:
        'Понравилось? Удобное автоматическое списание подписки за абонемент с возможностью отмены в любой момент',
      icon: <IconHeart width={55} height={55} className="w-full h-12" />,
    },
  ];
  return (
    <div className="overflow-hidden md:py-16 px-4 py-10">
      <section className="relative max-w-screen-xl container mx-auto  flex flex-col sm:flex-row flex-wrap">
        <div className="relative min-h-max md:h-80 pt-40 sm:pt-16 xl:pt-0 grow lg:w-1/3 flex flex-col items-center">
          <Title
            as="h3"
            align="center"
            styles="z-3 text-4xl md:text-[40px] px-10 md:px-4 md:mx-0 mr-auto max-w-xs lg:text-left sm:my-auto"
          >
            Ваша выгода
          </Title>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:translate-x-0 xs:left-1/2 md:left-1/3 lg:left-0 w-full sm:w-1/2 lg:w-full h-60 overflow-hidden">
            <div
              className="absolute z-0 top-20 right-10 md:top-5 md:left-40 w-20 h-20 md:w-28 md:h-28  border-4 border-white rounded-2xl"
              style={{ backgroundImage: `url(${PIC_3})` }}
            ></div>

            <div
              className="absolute z-3 top-0  md:top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 w-32 h-32 sm:w-28 sm:h-28 border-4 border-white rounded-2xl"
              style={{ backgroundImage: `url(${PIC_1})` }}
            ></div>

            <div
              className="absolute z-2 top-6 md:top-0 left-38 w-32 h-32 sm:w-28 sm:h-28  border-4 border-white rounded-2xl"
              style={{ backgroundImage: `url(${PIC_2})` }}
            ></div>
          </div>
        </div>
        <ul className="lg:w-2/3 mb-4 text-left">
          {Boolean(data) && data.length > 0
            ? [...data].map(el => (
                <li
                  key={el.title}
                  className="flex flex-wrap grow-0 rounded-lg p-4 mb-4 border-primary border-2"
                >
                  <div className="pr-4 text-advantages-1 w-16">{el.icon}</div>
                  <div className="grow w-2/3">
                    <div className="uppercase font-bold text-primary text-md md:text-lg">
                      {el.title}
                    </div>
                    <div className="text-sm md:text-md">{el.description}</div>
                  </div>
                </li>
              ))
            : null}
        </ul>
        <div className="absolute bottom-0 right-0 px-4">
          *при наличии его в клубе
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { ITimerProps } from '../../types';
import Section from '../UI/section/Section';
import './styles.css';

export default function Timer({ title, endDate, startDate }: ITimerProps) {
  const deadline: string = endDate;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 100);
    return () => clearInterval(interval);
  }, [deadline]);

  const dd = document.querySelector('#dd');
  const hh = document.querySelector('#hh');
  const mm = document.querySelector('#mm');
  const ss = document.querySelector('#ss');

  dd?.setAttribute('stroke-dashoffset', (440 - (440 * days) / 365).toString());
  hh?.setAttribute('stroke-dashoffset', (440 - (440 * hours) / 24).toString());
  mm?.setAttribute(
    'stroke-dashoffset',
    (440 - (440 * minutes) / 60).toString(),
  );
  ss?.setAttribute(
    'stroke-dashoffset',
    (440 - (440 * seconds) / 60).toString(),
  );

  const declOfNum = function (number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const daysLabel = declOfNum(days, ['день', 'дня', 'дней']);
  const hoursLabel = declOfNum(hours, ['час', 'часа', 'часов']);
  const minutesLabel = declOfNum(minutes, ['минута', 'минуты', 'минут']);

  return (
    <Section
      styleWrapper=''
      styleInner='overflow-hidden max-w-screen-lg w-full sm:px-4 xl:px-10 sm:w-full flex flex-wrap justify-between lg:justify-center items-center'
    >
      <h2 className='relative z-10 mb-4 lg:mb-0 w-full grow lg:w-1/4 xl:w-56 timer-title uppercase text-center lg:text-left'>
        {title}
      </h2>

      <div className='timer__wrapper grow flex flex-wrap w-full lg:w-2/4'>
        <div className='timer__item h-20 xs:h-28 sm:h-48 lg:h-40 relative w-1/4 flex flex-col justify-center'>
          <svg viewBox='0 0 160 160' width='160' height='160' className="w-full h-full">
            <defs>
              <linearGradient id='gradient-1' gradientTransform='rotate(90)'>
                <stop stopColor='#70D0FF' />
                <stop offset='0.734375' stopColor='#FAED76' />
                <stop offset='1' stopColor='#70D0FF' />
              </linearGradient>
            </defs>
            <circle cx='80' cy='80' r='70'></circle>
            <circle
              className='circle'
              cx='80'
              cy='80'
              r='70'
              stroke='url(#gradient-1)'
              id='dd'
            ></circle>
          </svg>
          <div className='timer__text text-center text-xs sm:text-sm md:text-lg'>
            <div id='days'>{days}</div>
            <span id='label-days'>{daysLabel}</span>
          </div>
        </div>
        <div className='timer__item h-20 xs:h-28 sm:h-48 lg:h-40  relative w-1/4 flex flex-col justify-center'>
          <svg viewBox='0 0 160 160' width='160' height='160'  className="w-full h-full">
            <defs>
              <linearGradient id='gradient-2' gradientTransform='rotate(90)'>
                <stop stopColor='#70D0FF' />
                <stop offset='0.734375' stopColor='#FAED76' />
                <stop offset='1' stopColor='#70D0FF' />
              </linearGradient>
            </defs>
            <circle cx='80' cy='80' r='70'></circle>
            <circle
              className='circle'
              cx='80'
              cy='80'
              r='70'
              stroke='url(#gradient-2)'
              id='hh'
            ></circle>
          </svg>
          <div className='timer__text text-center text-xs sm:text-sm lg:text-lg'>
            <div id='hours'>{hours}</div>
            <span id='label-hours'>{hoursLabel}</span>
          </div>
        </div>
        <div className='timer__item h-20 xs:h-28 sm:h-48 lg:h-40  relative w-1/4 flex flex-col justify-center'>
          <svg viewBox='0 0 160 160' width='160' height='160'  className="w-full h-full">
            <defs>
              <linearGradient id='gradient-3' gradientTransform='rotate(90)'>
                <stop stopColor='#70D0FF' />
                <stop offset='0.734375' stopColor='#FAED76' />
                <stop offset='1' stopColor='#70D0FF' />
              </linearGradient>
            </defs>
            <circle cx='80' cy='80' r='70'></circle>
            <circle
              className='circle'
              cx='80'
              cy='80'
              r='70'
              stroke='url(#gradient-3)'
              id='mm'
            ></circle>
          </svg>
          <div className='timer__text text-center text-xs sm:text-sm md:text-lg'>
            <div id='minutes'>{minutes}</div>
            <span id='label-minutes'>{minutesLabel}</span>
          </div>
        </div>
        <div className='timer__item h-20 xs:h-28 sm:h-48 lg:h-40  relative w-1/4 flex flex-col justify-center'>
          <svg viewBox='0 0 160 160' width='160' height='160'  className="w-full h-full">
            <defs>
              <linearGradient id='gradient-4' gradientTransform='rotate(90)'>
                <stop stopColor='#70D0FF' />
                <stop offset='0.734375' stopColor='#FAED76' />
                <stop offset='1' stopColor='#70D0FF' />
              </linearGradient>
            </defs>
            <circle cx='80' cy='80' r='70'></circle>
            <circle
              className='circle'
              cx='80'
              cy='80'
              r='70'
              stroke='url(#gradient-4)'
              id='ss'
            ></circle>
          </svg>
          <div className='timer__text text-center text-xs sm:text-sm md:text-lg'>
            <div id='seconds'>{seconds}</div>
            <span id='label-seconds'>секунд</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

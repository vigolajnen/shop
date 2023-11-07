import React, { FC, useContext } from 'react';

import PIC_1 from '../../images/advantages/1.webp';
import PIC_2 from '../../images/advantages/2.webp';
import PIC_3 from '../../images/advantages/3.webp';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';

import './styles.css';
import { CityContext } from '../../context/CityContext';
import { LIST_ADV_CITY } from './data/data';

interface AdvProps {
  title: string;
}

const Advantages: FC<AdvProps> = ({ title }) => {
  const CITY_NAME = useContext(CityContext).city;
  const data = LIST_ADV_CITY.filter((val) => val.city === CITY_NAME)[0].list;

  return (
    <Section
      styleWrapper='bg-gray-100 advantages'
      styleInner='max-w-screen-xlg flex flex-col sm:flex-row flex-wrap'
    >
      {title && (
        <div className='relative pt-40 sm:pt-16 xl:pt-0 grow lg:w-1/3 flex flex-col items-center'>
          <SectionTitle
            as='h3'
            styles='advantages-title relative z-3 px-10 md:px-4 mx-0 mr-auto text-center max-w-xs sm:text-left sm:my-auto'
          >
            {title}
          </SectionTitle>

          <div className='advantages-bg absolute top-0 left-1/2 -translate-x-1/2 sm:translate-x-0 xs:left-1/2 md:left-1/3 lg:left-0 w-full sm:w-1/2 lg:w-full h-60 overflow-hidden'>
            <div
              className='absolute z-0 top-20 right-10 md:top-5 md:left-40 w-20 h-20 md:w-28 md:h-28 bg-white-700 border-4 border-white rounded-2xl'
              style={{ backgroundImage: `url(${PIC_3})` }}
            ></div>

            <div
              className='absolute z-3 top-8  md:top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 w-28 h-28 bg-white-700 border-4 border-white rounded-2xl'
              style={{ backgroundImage: `url(${PIC_1})` }}
            ></div>

            <div
              className='absolute z-2 top-12 md:top-0 left-38 w-28 h-28 bg-white-700 border-4 border-white rounded-2xl'
              style={{ backgroundImage: `url(${PIC_2})` }}
            ></div>
          </div>
        </div>
      )}

      <ul className='lg:w-2/3 mb-4'>
        {data.length > 0
          ? [...data].map((el) => (
              <li
                key={el.title}
                className='flex flex-wrap grow-0 rounded-lg p-4 mb-4 border-curious-blue-500 border-2'
              >
                <div className='pr-4 text-black-0 md:text-porcelain-950'>
                  {el.icon}
                </div>
                <div className='grow w-2/3'>
                  <div className='uppercase text-blue-600 font-bold text-curious-blue-500 text-md md:text-lg'>
                    {el.title}
                  </div>
                  <div className='text-sm md:text-md'>{el.description}</div>
                </div>
              </li>
            ))
          : null}
      </ul>
      <div className='absolute bottom-0 right-0'>*при наличии его в клубе</div>
    </Section>
  );
};

export default Advantages;

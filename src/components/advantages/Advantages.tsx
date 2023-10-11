import React from 'react';

import { IAdvantagesProps } from '../../types';

import Section from '../../UI/section/Section';
import SectionTitle from '../../UI/section-title/SectionTitle';

import PIC_1 from '../../images/advantages/1.jpg';
import PIC_2 from '../../images/advantages/2.jpg';
import PIC_3 from '../../images/advantages/3.jpg';

export default function Advantages({ title, data }: IAdvantagesProps) {
  return (
    <Section
      styleWrapper='bg-gray-100 overflow-hidden'
      styleInner='max-w-screen-xl flex flex-col sm:flex-row flex-wrap'
    >
      {title && (
        <div className='relative pt-40 sm:pt-16 xl:pt-0 grow sm:w-1/3 flex flex-col items-center'>
          <SectionTitle
            as='h3'
            styles='relative z-3 text-center sm:text-left mb-10 sm:my-auto'
          >
            {title}
          </SectionTitle>

          <div
            className='absolute z-1 top-0  xl:-top-10 left-5 xl:left-20 w-28 h-28 bg-white-700 border-4 border-white rounded-2xl'
            style={{ backgroundImage: `url(${PIC_1})` }}
          ></div>
          <div
            className='absolute z-1 top-5 xl:-top-5 left-60 xl:left-60 w-28 h-28 bg-white-700 border-4 border-white rounded-2xl'
            style={{ backgroundImage: `url(${PIC_3})` }}
          ></div>
          <div
            className='absolute z-1 top-10 xl:top-0 left-15 xl:left-38 w-28 h-28 bg-white-700 border-4 border-white rounded-2xl'
            style={{ backgroundImage: `url(${PIC_2})` }}
          ></div>
        </div>
      )}

      <ul className='sm:w-2/3 mb-4'>
        {[...data].map((el) => (
          <li
            key={el.title}
            className='flex flex-wrap grow-0 rounded-lg p-4 mb-4 border-curious-blue-500 border-2'
          >
            <div className='pr-4 text-porcelain-950'>{el.icon}</div>
            <div className='grow w-2/3'>
              <div className='uppercase text-blue-600 font-bold text-curious-blue-500'>
                {el.title}
              </div>
              <div>{el.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className='absolute bottom-0 right-0'>*при наличии его в клубе</div>
    </Section>
  );
}

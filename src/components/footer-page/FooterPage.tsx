import React from 'react';
import { Logo } from '../icons';
import { IFooterPageProps } from '../../types';
import { arrayDocLinks } from './data';
import ClubsAddress from '../clubs-address/ClubsAddress';
import './styles.css';

export default function FooterPage({ data }: IFooterPageProps) {
  return (
    <footer className='bg-curious-blue-500 py-10 pb-10 px-4 lg:px-6 footer'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className="py-4 mb-4 border-b border-white flex flex-wrap items-baseline md:gap-5 xl:gap-24">
          <Logo width={160} height={27} className='w-48 max-w-full text-white px-4 mr-10' />
          <ClubsAddress data={data} />
        </div>

        <div className='pt-3 flex flex-wrap gap-3 justify-between opacity-70 text-sm'>
          {[...arrayDocLinks].map((el, index) => (
            <a
              href={el.url}
              key={index}
              className='w-full sm:w-1/2 md:w-1/5 text-white p-2'
              target='_blank'
              rel='noreferrer'
            >
              {el.name}
            </a>
          ))}

          <div className='w-full sm:w-1/2 md:w-1/5 text-white'>
            <div>© 2007 - 2023.</div>
            <div>Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

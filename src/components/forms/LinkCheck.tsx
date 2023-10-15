import React from 'react';

export default function LinkCheck() {
  return (
    <>
      <span className='text-sm leading-6 pb-1'>
        <span className='font-medium text-gray-900'>
          Я ознакомлен(-на) и согласен(-на) с условиями{' '}
          <a
            className='text-picton-blue-500'
            href='https://market.fitnesshouse.ru/documentation'
            target='_blank'
            rel='noreferrer'
          >
            Договора Оферты,
          </a>{' '}
          <a
            className='text-picton-blue-500'
            href='https://market.fitnesshouse.ru/storage/documents/pravila_cluba.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Правилами Клуба
          </a>{' '}
          <span>и даю своё согласие на</span>{' '}
          <a
            className='text-picton-blue-500'
            href='https://market.fitnesshouse.ru/storage/documents/legal_information.pdf'
            target='_blank'
            rel='noreferrer'
          >
            обработку персональных данных.
          </a>
        </span>
      </span>
    </>
  );
}

import React from 'react';
import './styles.css';
import { listFaqAccordion } from './data';

export default function FaqAccordion() {
  const data = listFaqAccordion;
  return (
    <div className='accordion faq-accordion border-t border-black flex flex-col items-center justify-center'>
      {data.length > 0
        ? [...data].map((el) => (
            <div className='w-full' key={el.id}>
              <input
                type='checkbox'
                name='panel'
                id={`panel-${el.id}`}
                className='hidden'
              />
              <label
                htmlFor={`panel-${el.id}`}
                className='relative block p-4 border-b border-black cursor-pointer'
              >
                <span className='w-4/5 block'>{el.title}</span>
              </label>
              <div className='accordion__content overflow-hidden bg-grey-lighter'>
                <div className='accordion__body p-4' id={`panel${el.id}`}>
                  {el.text}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

import React from 'react';
import { IFaqAccordionProps } from '../../types';
import './styles.css';

export default function FaqAccordion({ data }: IFaqAccordionProps) {
  return (
    <div className='accordion faq-accordion border-t border-black flex flex-col items-center justify-center'>
      {[...data].map((el) => (
        <div className='w-full' key={el.id}>
          <input type='checkbox' name='panel' id={`panel-${el.id}`} className='hidden' />
          <label
            htmlFor={`panel-${el.id}`}
            className='relative block p-4 border-b border-black cursor-pointer'
          >
            <span className="w-4/5 block">{el.title}</span>
          </label>
          <div className='accordion__content overflow-hidden bg-grey-lighter'>
            <p className='accordion__body p-4' id={`panel${el.id}`}>
              {el.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

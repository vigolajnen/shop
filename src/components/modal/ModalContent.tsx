import React from 'react';
import { IModalContentProps } from '../../types';

import './styles.css';

export default function ModalContent({ children }: IModalContentProps) {
  return (
    <div className='scrollBar overflow-y-auto h-full w-full relative px-8 pt-4 pb-0 lg:p-8 xl:p-16  xl:pb-10 flex-auto'>
      {children}
    </div>
  );
}

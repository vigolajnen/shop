import React from 'react';
import { motion } from 'framer-motion';
import { IModalContentProps } from '../../types';

import './styles.css';

export default function ModalContent({ children }: IModalContentProps) {
  return (
    // px-8 pt-4 pb-0 lg:p-8 xl:p-16  xl:pb-10
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className='scrollBar modalContent overflow-y-auto h-full w-full relative flex-auto'>
        {children}
      </div>
    </motion.div>
  );
}

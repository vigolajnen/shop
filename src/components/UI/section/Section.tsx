import React from 'react';
import { motion } from 'framer-motion';
import { ISectionProps } from '../../../types';

export default function Section({
  children,
  styleWrapper,
  styleInner,
}: ISectionProps) {
  return (
    <section className={`py-10 px-4 lg:py-16 lg:px-6 ${styleWrapper}`}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div
          className={`relative container mx-auto max-w-screen-xlg ${styleInner}`}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}

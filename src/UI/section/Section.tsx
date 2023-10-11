import React from 'react';
import { ISectionProps } from '../../types';

export default function Section({ children, styleWrapper, styleInner, id }: ISectionProps) {
  return (
    <section id={id} className={`py-10 px-4 lg:py-20 lg:px-6 ${styleWrapper}`}>
      <div className={`relative container mx-auto max-w-screen-xl ${styleInner}`}>{children}</div>
    </section>
  );
}

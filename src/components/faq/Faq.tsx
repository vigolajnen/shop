import React from 'react';

import { IFaqProps } from '../../types';

import FaqAccordion from '../faq-accordion/FaqAccordion';
import Section from '../../UI/section/Section';
import SectionTitle from '../../UI/section-title/SectionTitle';

export default function Faq({ title, data }: IFaqProps) {
  return (
    <Section styleWrapper='bg-porcelain-50 faq' styleInner='max-w-screen-xl'>
      {title && (
        <SectionTitle as='h3' styles='text-center mb-5 sm:mb-10'>
          {title}
        </SectionTitle>
      )}

      <FaqAccordion data={data} />
    </Section>
  );
}

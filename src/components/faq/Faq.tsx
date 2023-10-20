import React from 'react';

import { IFaqProps } from '../../types';

import FaqAccordion from '../faq-accordion/FaqAccordion';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';

export default function Faq({ title, data }: IFaqProps) {
  return (
    <Section styleWrapper='bg-porcelain-50 faq pb-20 -mt-10 lg:-mt-16' styleInner='max-w-screen-xlg'>
      {title && (
        <SectionTitle as='h3' styles='px-4 xl:px-0 text-center md:text-left'>
          {title}
        </SectionTitle>
      )}

      <FaqAccordion data={data} />
    </Section>
  );
}

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { ITariffsProps } from '../../types';
import TariffsList from '../tariffs-list/TariffsList';
import TariffsCarousel from '../tariffs-carousel/TariffsCarousel';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section-title/SectionTitle';

import './styles.css';

export default function Tariffs({ title, count }: ITariffsProps) {
  const matches = useMediaQuery('(min-width: 464px)');

  return (
    <Section
      id='tariffs'
      styleWrapper='tariffs relative overflow-hidden bg-curious-blue-500'
      styleInner='max-w-screen-xl overflow-hidden'
    >
      {title && (
        <SectionTitle as='h3' styles='text-center text-white'>
          {title}
        </SectionTitle>
      )}

      {matches ? (
        count && Boolean(count > 2) ? (
          <TariffsCarousel />
        ) : (
          <TariffsList />
        )
      ) : (
        <TariffsList />
      )}
    </Section>
  );
}

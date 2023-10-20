import React from 'react';
import { useLocation } from 'react-router';

import sectionTitleStyles from './sectionTitleStyles.module.css';
import { ISectionTitleProps } from '../../../types';
import { ROUTES } from '../../../utils/routes';

export default function SectionTitle({
  children,
  as: Tag = 'div',
  styles,
}: ISectionTitleProps) {
  const location = useLocation();
  const classBase = `${styles} ${sectionTitleStyles.title} relative mb-9 sm:mb-10 xl:mb-13 mb uppercase`;
  return (
    <Tag
      className={location.pathname === ROUTES.SPB ? classBase + 'text-center' : classBase}
    >
      {children}
    </Tag>
  );
}

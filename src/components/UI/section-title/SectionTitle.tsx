import React from 'react';

import sectionTitleStyles from './sectionTitleStyles.module.css';
import { ISectionTitleProps } from '../../../types';

export default function SectionTitle({
  children,
  as: Tag = 'div',
  styles,
}: ISectionTitleProps) {
  return (
    <Tag
      className={`${styles} ${sectionTitleStyles.title} mb-9 sm:mb-10 xl:mb-13 mb uppercase`}
    >
      {children}
    </Tag>
  );
}

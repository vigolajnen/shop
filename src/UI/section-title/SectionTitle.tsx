import React from 'react';
import { ISectionTitleProps } from '../../types';

export default function SectionTitle({
  children,
  as: Tag = 'div',
  styles,
}: ISectionTitleProps) {
  return (
    <Tag
      className={`${styles} font-bold text-3xl xs:text-4xl sm:text-3xl xl:text-6xl text-center uppercase`}
    >
      {children}
    </Tag>
  );
}

import { FC, ReactNode, ElementType } from 'react';

import stylesTitle from './styles.module.css';

interface ITitleProps {
  styles: string;
  align?: string;
  children: ReactNode;
  as: ElementType;
}

const Title: FC<ITitleProps> = ({
  styles,
  children,
  align,
  as: Tag = 'div',
}) => {
  const classBase = `${styles} ${stylesTitle.title} relative mb-9 sm:mb-10 xl:mb-13 mb uppercase`;
  return (
    <Tag
      className={align === 'center' ? classBase + ' text-center' : classBase}
    >
      {children}
    </Tag>
  );
};

export default Title;

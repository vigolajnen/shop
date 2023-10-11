import React, { FC, ReactNode } from 'react';
import { ICustomLabelFieldsProps } from '../../types';

const CustomLabelFields: FC<ICustomLabelFieldsProps> = ({ htmlFor, children, ...props }: ICustomLabelFieldsProps) => {
  return (
    <label
    htmlFor={htmlFor}
      {...props}
      className='mb-1 block text-sm font-bold leading-6 text-gray-900'
    >
      {children}
    </label>
  );
}

export default CustomLabelFields;

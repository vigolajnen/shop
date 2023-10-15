import React, { FC, ReactNode } from 'react';
import { ICustomLabelFieldsProps } from '../../../types';

const CustomLabelFields: FC<ICustomLabelFieldsProps> = ({ htmlFor, children, label, ...props }: ICustomLabelFieldsProps) => {
  return (
    <label
    htmlFor={htmlFor}
      {...props}
      className='mb-2 block leading-6 text-white-900 relative'
    >
      {label && <span className='font-black text-md'>{label}</span>}
      {children}
    </label>
  );
}

export default CustomLabelFields;
